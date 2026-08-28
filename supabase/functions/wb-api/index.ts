// Wabot365 — backend API (Supabase Edge Function)
// Auth: header x-wb-secret validado contra wb_settings.internal_secret.
// El bootstrap inicial (POST /bootstrap) solo funciona si internal_secret aún no existe.
import { createClient, SupabaseClient } from "npm:@supabase/supabase-js@2";

const GRAPH_VERSION = "v24.0";

type Agent = {
  id: string;
  name: string;
  description: string;
  system_prompt: string;
  model: string;
  temperature: number;
  max_tokens: number;
  welcome_message: string;
  fallback_message: string;
  handoff_keywords: string;
  is_active: boolean;
};

function db(): SupabaseClient {
  return createClient(
    Deno.env.get("SUPABASE_URL")!,
    Deno.env.get("SUPABASE_SERVICE_ROLE_KEY")!,
    { auth: { persistSession: false } }
  );
}

function json(data: unknown, status = 200): Response {
  return new Response(JSON.stringify(data), {
    status,
    headers: { "content-type": "application/json" },
  });
}

async function loadSettings(s: SupabaseClient): Promise<Record<string, string>> {
  const { data, error } = await s.from("wb_settings").select("key,value");
  if (error) throw new Error(`settings: ${error.message}`);
  const out: Record<string, string> = {};
  for (const row of data ?? []) out[row.key] = row.value;
  return out;
}

async function setSetting(s: SupabaseClient, key: string, value: string) {
  const { error } = await s
    .from("wb_settings")
    .upsert({ key, value, updated_at: new Date().toISOString() });
  if (error) throw new Error(`setSetting ${key}: ${error.message}`);
}

// ── Generación de respuesta ────────────────────────────────────────────────
function ruleReply(agent: Agent, userText: string, isFirst: boolean): { reply: string; handoff: boolean } {
  const text = userText.toLowerCase();
  const keywords = agent.handoff_keywords
    .split(",")
    .map((k) => k.trim().toLowerCase())
    .filter(Boolean);
  if (keywords.some((k) => k && text.includes(k))) {
    return {
      reply: "Con gusto te conecto con un asesor humano. En breve te escribimos por aquí. 🙋",
      handoff: true,
    };
  }
  if (isFirst && agent.welcome_message) {
    return { reply: agent.welcome_message, handoff: false };
  }
  if (agent.fallback_message) {
    return { reply: agent.fallback_message, handoff: false };
  }
  return {
    reply: "¡Gracias por tu mensaje! En breve te respondemos. Si prefieres hablar con una persona, escribe \"asesor\".",
    handoff: false,
  };
}

async function aiReply(
  apiKey: string,
  agent: Agent,
  history: { direction: string; body: string }[],
  userText: string
): Promise<string> {
  const messages: { role: "user" | "assistant"; content: string }[] = [];
  for (const m of history.slice(-20)) {
    if (!m.body) continue;
    messages.push({ role: m.direction === "in" ? "user" : "assistant", content: m.body });
  }
  messages.push({ role: "user", content: userText });
  // Anthropic exige alternancia que empiece en user: colapsar duplicados consecutivos.
  const collapsed: typeof messages = [];
  for (const m of messages) {
    const last = collapsed[collapsed.length - 1];
    if (last && last.role === m.role) last.content += `\n${m.content}`;
    else collapsed.push({ ...m });
  }
  while (collapsed.length && collapsed[0].role !== "user") collapsed.shift();

  const res = await fetch("https://api.anthropic.com/v1/messages", {
    method: "POST",
    headers: {
      "content-type": "application/json",
      "x-api-key": apiKey,
      "anthropic-version": "2023-06-01",
    },
    body: JSON.stringify({
      model: agent.model || "claude-haiku-4-5",
      max_tokens: agent.max_tokens || 512,
      temperature: agent.temperature ?? 0.7,
      system:
        (agent.system_prompt || "Eres un asistente de atención al cliente por WhatsApp.") +
        "\n\nResponde SIEMPRE en español, breve y claro (es una conversación de WhatsApp). No inventes datos del negocio: si no sabes algo, ofrece conectar con un asesor humano.",
      messages: collapsed,
    }),
  });
  if (!res.ok) {
    const detail = await res.text();
    throw new Error(`Anthropic ${res.status}: ${detail.slice(0, 300)}`);
  }
  const data = await res.json();
  const text = (data.content ?? [])
    .filter((b: { type: string }) => b.type === "text")
    .map((b: { text: string }) => b.text)
    .join("\n")
    .trim();
  return text || "…";
}

async function generateReply(
  s: SupabaseClient,
  settings: Record<string, string>,
  agent: Agent,
  conversationId: string | null,
  userText: string
): Promise<{ reply: string; handoff: boolean; engine: string }> {
  let history: { direction: string; body: string }[] = [];
  let isFirst = true;
  if (conversationId) {
    const { data } = await s
      .from("wb_messages")
      .select("direction,body")
      .eq("conversation_id", conversationId)
      .order("created_at", { ascending: true })
      .limit(40);
    history = data ?? [];
    isFirst = history.filter((m) => m.direction === "in").length <= 1;
  }
  // Handoff por palabra clave aplica siempre, incluso con IA.
  const text = userText.toLowerCase();
  const keywords = agent.handoff_keywords
    .split(",")
    .map((k) => k.trim().toLowerCase())
    .filter(Boolean);
  if (keywords.some((k) => text.includes(k))) {
    return {
      reply: "Con gusto te conecto con un asesor humano. En breve te escribimos por aquí. 🙋",
      handoff: true,
      engine: "rules",
    };
  }
  const apiKey = settings.anthropic_api_key;
  if (apiKey) {
    try {
      const reply = await aiReply(apiKey, agent, history.slice(0, -1), userText);
      return { reply, handoff: false, engine: "claude" };
    } catch (e) {
      console.error("aiReply error:", e);
      // Degradar a reglas si la IA falla.
    }
  }
  const r = ruleReply(agent, userText, isFirst);
  return { ...r, engine: "rules" };
}

// ── Envío por WhatsApp Cloud API ───────────────────────────────────────────
async function sendWhatsApp(
  settings: Record<string, string>,
  to: string,
  body: string
): Promise<{ ok: boolean; wa_message_id?: string; error?: string }> {
  const token = settings.whatsapp_token;
  const phoneId = settings.phone_number_id;
  if (!token || !phoneId) {
    return { ok: false, error: "whatsapp_token o phone_number_id sin configurar" };
  }
  try {
    const res = await fetch(`https://graph.facebook.com/${GRAPH_VERSION}/${phoneId}/messages`, {
      method: "POST",
      headers: { "content-type": "application/json", authorization: `Bearer ${token}` },
      body: JSON.stringify({
        messaging_product: "whatsapp",
        to,
        type: "text",
        text: { preview_url: false, body },
      }),
    });
    const data = await res.json();
    if (!res.ok) {
      return { ok: false, error: `Graph ${res.status}: ${JSON.stringify(data?.error ?? data).slice(0, 400)}` };
    }
    return { ok: true, wa_message_id: data?.messages?.[0]?.id };
  } catch (e) {
    return { ok: false, error: e instanceof Error ? e.message : "network error" };
  }
}

// ── Inbound de Meta ────────────────────────────────────────────────────────
async function handleInbound(s: SupabaseClient, settings: Record<string, string>, payload: unknown) {
  const entries = (payload as { entry?: unknown[] })?.entry ?? [];
  for (const entry of entries as { changes?: unknown[] }[]) {
    for (const change of (entry.changes ?? []) as { field?: string; value?: Record<string, unknown> }[]) {
      const value = change.value ?? {};

      // Actualizaciones de estado de mensajes salientes
      for (const st of (value.statuses ?? []) as { id?: string; status?: string }[]) {
        if (st.id && st.status) {
          await s.from("wb_messages").update({ status: st.status }).eq("wa_message_id", st.id);
        }
      }

      const contacts = (value.contacts ?? []) as { wa_id?: string; profile?: { name?: string } }[];
      const messages = (value.messages ?? []) as {
        id?: string;
        from?: string;
        type?: string;
        text?: { body?: string };
        timestamp?: string;
      }[];

      for (const msg of messages) {
        if (!msg.from || !msg.id) continue;

        // Dedup
        const { data: dup } = await s
          .from("wb_messages")
          .select("id")
          .eq("wa_message_id", msg.id)
          .limit(1);
        if (dup && dup.length) continue;

        const contactName = contacts.find((c) => c.wa_id === msg.from)?.profile?.name ?? "";

        // Conversación (upsert por wa_id)
        let convId: string;
        let convStatus = "open";
        let convAgentId: string | null = null;
        const { data: existing } = await s
          .from("wb_conversations")
          .select("id,status,agent_id")
          .eq("wa_id", msg.from)
          .limit(1);
        if (existing && existing.length) {
          convId = existing[0].id;
          convStatus = existing[0].status;
          convAgentId = existing[0].agent_id;
          await s
            .from("wb_conversations")
            .update({
              last_message_at: new Date().toISOString(),
              ...(contactName ? { contact_name: contactName } : {}),
            })
            .eq("id", convId);
        } else {
          convAgentId = settings.default_agent_id || null;
          const { data: created, error } = await s
            .from("wb_conversations")
            .insert({
              wa_id: msg.from,
              contact_name: contactName,
              agent_id: convAgentId,
              status: "open",
            })
            .select("id")
            .single();
          if (error || !created) {
            console.error("crear conversación:", error?.message);
            continue;
          }
          convId = created.id;
        }

        const bodyText = msg.type === "text" ? (msg.text?.body ?? "") : `[${msg.type}]`;
        await s.from("wb_messages").insert({
          conversation_id: convId,
          direction: "in",
          wa_message_id: msg.id,
          msg_type: msg.type ?? "unknown",
          body: bodyText,
          status: "received",
        });

        // Auto-respuesta
        if (msg.type !== "text") continue;
        if (convStatus === "handoff" || convStatus === "closed") continue;
        const agentId = convAgentId || settings.default_agent_id;
        if (!agentId) continue;
        const { data: agentRow } = await s.from("wb_agents").select("*").eq("id", agentId).single();
        const agent = agentRow as Agent | null;
        if (!agent || !agent.is_active) continue;

        const { reply, handoff } = await generateReply(s, settings, agent, convId, bodyText);
        if (handoff) {
          await s.from("wb_conversations").update({ status: "handoff" }).eq("id", convId);
        }
        const sent = await sendWhatsApp(settings, msg.from, reply);
        await s.from("wb_messages").insert({
          conversation_id: convId,
          direction: "out",
          wa_message_id: sent.wa_message_id ?? null,
          msg_type: "text",
          body: reply,
          status: sent.ok ? "sent" : "failed",
          error: sent.error ?? null,
        });
      }
    }
  }
}

// ── Router ─────────────────────────────────────────────────────────────────
Deno.serve(async (req: Request) => {
  const s = db();
  const url = new URL(req.url);
  const path = url.pathname.replace(/^\/wb-api\/?/, "").replace(/\/$/, "");
  const seg = path.split("/").filter(Boolean);

  let settings: Record<string, string>;
  try {
    settings = await loadSettings(s);
  } catch (e) {
    return json({ error: `DB no disponible: ${e instanceof Error ? e.message : e}` }, 500);
  }

  // Bootstrap: solo si el secreto aún no existe.
  if (req.method === "POST" && seg[0] === "bootstrap") {
    if (settings.internal_secret) return json({ error: "Ya inicializado" }, 403);
    const body = await req.json().catch(() => ({}));
    if (typeof body.secret !== "string" || body.secret.length < 32) {
      return json({ error: "Secreto inválido" }, 400);
    }
    await setSetting(s, "internal_secret", body.secret);
    return json({ ok: true });
  }

  if (!settings.internal_secret || req.headers.get("x-wb-secret") !== settings.internal_secret) {
    return json({ error: "No autorizado" }, 401);
  }

  try {
    // POST /inbound
    if (req.method === "POST" && seg[0] === "inbound") {
      const payload = await req.json().catch(() => null);
      if (payload) await handleInbound(s, settings, payload);
      return json({ ok: true });
    }

    // /agents
    if (seg[0] === "agents") {
      if (req.method === "GET" && !seg[1]) {
        const { data, error } = await s.from("wb_agents").select("*").order("created_at");
        if (error) throw error;
        return json({ agents: data });
      }
      if (req.method === "POST" && !seg[1]) {
        const body = await req.json();
        const { data, error } = await s
          .from("wb_agents")
          .insert({
            name: String(body.name ?? "Nuevo agente"),
            description: String(body.description ?? ""),
            system_prompt: String(body.system_prompt ?? ""),
            model: String(body.model ?? "claude-haiku-4-5"),
            temperature: Number(body.temperature ?? 0.7),
            max_tokens: Number(body.max_tokens ?? 512),
            welcome_message: String(body.welcome_message ?? ""),
            fallback_message: String(body.fallback_message ?? ""),
            handoff_keywords: String(body.handoff_keywords ?? "asesor,humano,agente"),
            is_active: Boolean(body.is_active ?? false),
          })
          .select("*")
          .single();
        if (error) throw error;
        return json({ agent: data }, 201);
      }
      if (req.method === "PUT" && seg[1]) {
        const body = await req.json();
        const patch: Record<string, unknown> = { updated_at: new Date().toISOString() };
        for (const k of [
          "name", "description", "system_prompt", "model", "welcome_message",
          "fallback_message", "handoff_keywords",
        ]) {
          if (typeof body[k] === "string") patch[k] = body[k];
        }
        if (body.temperature !== undefined) patch.temperature = Number(body.temperature);
        if (body.max_tokens !== undefined) patch.max_tokens = Number(body.max_tokens);
        if (body.is_active !== undefined) patch.is_active = Boolean(body.is_active);
        const { data, error } = await s
          .from("wb_agents")
          .update(patch)
          .eq("id", seg[1])
          .select("*")
          .single();
        if (error) throw error;
        return json({ agent: data });
      }
      if (req.method === "DELETE" && seg[1]) {
        const { error } = await s.from("wb_agents").delete().eq("id", seg[1]);
        if (error) throw error;
        if (settings.default_agent_id === seg[1]) await setSetting(s, "default_agent_id", "");
        return json({ ok: true });
      }
    }

    // /conversations
    if (seg[0] === "conversations") {
      if (req.method === "GET" && !seg[1]) {
        const { data, error } = await s
          .from("wb_conversations")
          .select("*, wb_agents(name)")
          .order("last_message_at", { ascending: false })
          .limit(100);
        if (error) throw error;
        return json({ conversations: data });
      }
      if (req.method === "GET" && seg[1] && seg[2] === "messages") {
        const { data: conv, error: e1 } = await s
          .from("wb_conversations")
          .select("*, wb_agents(name)")
          .eq("id", seg[1])
          .single();
        if (e1) throw e1;
        const { data: msgs, error: e2 } = await s
          .from("wb_messages")
          .select("*")
          .eq("conversation_id", seg[1])
          .order("created_at", { ascending: true })
          .limit(500);
        if (e2) throw e2;
        return json({ conversation: conv, messages: msgs });
      }
      if (req.method === "POST" && seg[1] && seg[2] === "send") {
        const body = await req.json();
        const text = String(body.body ?? "").trim();
        if (!text) return json({ error: "Mensaje vacío" }, 400);
        const { data: conv, error } = await s
          .from("wb_conversations")
          .select("wa_id")
          .eq("id", seg[1])
          .single();
        if (error) throw error;
        const sent = await sendWhatsApp(settings, conv.wa_id, text);
        const { data: m } = await s
          .from("wb_messages")
          .insert({
            conversation_id: seg[1],
            direction: "out",
            wa_message_id: sent.wa_message_id ?? null,
            msg_type: "text",
            body: text,
            status: sent.ok ? "sent" : "failed",
            error: sent.error ?? null,
          })
          .select("*")
          .single();
        await s
          .from("wb_conversations")
          .update({ last_message_at: new Date().toISOString() })
          .eq("id", seg[1]);
        return json({ ok: sent.ok, message: m, error: sent.error });
      }
      if (req.method === "POST" && seg[1] && seg[2] === "status") {
        const body = await req.json();
        const status = String(body.status ?? "");
        if (!["open", "handoff", "closed"].includes(status)) {
          return json({ error: "Estado inválido" }, 400);
        }
        const { error } = await s.from("wb_conversations").update({ status }).eq("id", seg[1]);
        if (error) throw error;
        return json({ ok: true });
      }
      if (req.method === "POST" && seg[1] && seg[2] === "agent") {
        const body = await req.json();
        const agentId = body.agent_id ? String(body.agent_id) : null;
        const { error } = await s
          .from("wb_conversations")
          .update({ agent_id: agentId })
          .eq("id", seg[1]);
        if (error) throw error;
        return json({ ok: true });
      }
    }

    // POST /test-agent — playground, sin envíos ni escritura
    if (req.method === "POST" && seg[0] === "test-agent") {
      const body = await req.json();
      const { data: agentRow, error } = await s
        .from("wb_agents")
        .select("*")
        .eq("id", String(body.agent_id ?? ""))
        .single();
      if (error) return json({ error: "Agente no encontrado" }, 404);
      const agent = agentRow as Agent;
      const userText = String(body.text ?? "");
      const r = await generateReply(s, settings, agent, null, userText);
      return json(r);
    }

    // GET /stats
    if (req.method === "GET" && seg[0] === "stats") {
      const [a, c, m, f] = await Promise.all([
        s.from("wb_agents").select("id", { count: "exact", head: true }),
        s.from("wb_conversations").select("id", { count: "exact", head: true }),
        s.from("wb_messages").select("id", { count: "exact", head: true }),
        s.from("wb_messages").select("id", { count: "exact", head: true }).eq("status", "failed"),
      ]);
      const { data: recent } = await s
        .from("wb_conversations")
        .select("*, wb_agents(name)")
        .order("last_message_at", { ascending: false })
        .limit(5);
      return json({
        agents: a.count ?? 0,
        conversations: c.count ?? 0,
        messages: m.count ?? 0,
        failed: f.count ?? 0,
        recent: recent ?? [],
        ai_enabled: Boolean(settings.anthropic_api_key),
        wa_configured: Boolean(settings.whatsapp_token && settings.phone_number_id),
        default_agent_id: settings.default_agent_id ?? "",
      });
    }

    // /settings
    if (seg[0] === "settings") {
      const WRITABLE = [
        "anthropic_api_key", "whatsapp_token", "phone_number_id", "waba_id", "default_agent_id",
      ];
      if (req.method === "GET") {
        const masked: Record<string, string> = {};
        for (const k of WRITABLE) {
          const v = settings[k] ?? "";
          if (!v) masked[k] = "";
          else if (k === "anthropic_api_key" || k === "whatsapp_token") {
            masked[k] = `••••${v.slice(-4)}`;
          } else masked[k] = v;
        }
        return json({ settings: masked });
      }
      if (req.method === "POST") {
        const body = await req.json();
        const key = String(body.key ?? "");
        if (!WRITABLE.includes(key)) return json({ error: "Clave no permitida" }, 400);
        await setSetting(s, key, String(body.value ?? ""));
        return json({ ok: true });
      }
    }

    // GET /wa-status — prueba de conexión con Graph API
    if (req.method === "GET" && seg[0] === "wa-status") {
      const token = settings.whatsapp_token;
      const phoneId = settings.phone_number_id;
      if (!token || !phoneId) return json({ ok: false, error: "Sin token o phone_number_id" });
      const res = await fetch(
        `https://graph.facebook.com/${GRAPH_VERSION}/${phoneId}?fields=display_phone_number,verified_name,quality_rating`,
        { headers: { authorization: `Bearer ${token}` } }
      );
      const data = await res.json();
      if (!res.ok) {
        return json({ ok: false, error: JSON.stringify(data?.error ?? data).slice(0, 300) });
      }
      return json({ ok: true, phone: data });
    }

    return json({ error: `Ruta no encontrada: ${req.method} /${path}` }, 404);
  } catch (e) {
    console.error("wb-api error:", e);
    return json({ error: e instanceof Error ? e.message : "Error interno" }, 500);
  }
});
