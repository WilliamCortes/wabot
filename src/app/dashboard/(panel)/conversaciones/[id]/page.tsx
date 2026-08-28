"use client";

import { use, useCallback, useEffect, useRef, useState } from "react";
import { Send, RefreshCw } from "lucide-react";
import {
  Shell, Card, inputCls, inputStyle, btnPrimary, btnPrimaryStyle, btnGhost, btnGhostStyle,
} from "@/components/dashboard/Shell";

type Msg = {
  id: string;
  direction: "in" | "out";
  body: string;
  status: string;
  error?: string | null;
  created_at: string;
};
type Conv = {
  id: string;
  wa_id: string;
  contact_name: string;
  status: string;
  wb_agents?: { name: string } | null;
};

export default function ThreadPage({ params }: { params: Promise<{ id: string }> }) {
  const { id } = use(params);
  const [conv, setConv] = useState<Conv | null>(null);
  const [msgs, setMsgs] = useState<Msg[]>([]);
  const [error, setError] = useState("");
  const [draft, setDraft] = useState("");
  const [sending, setSending] = useState(false);
  const bottomRef = useRef<HTMLDivElement>(null);

  const load = useCallback(async () => {
    const r = await fetch(`/api/wb/conversations/${id}/messages`);
    if (r.status === 401) { location.href = "/dashboard/login"; return; }
    if (!r.ok) { setError((await r.json()).error ?? r.statusText); return; }
    const d = await r.json();
    setConv(d.conversation);
    setMsgs(d.messages);
  }, [id]);

  useEffect(() => {
    load();
    const t = setInterval(load, 10000);
    return () => clearInterval(t);
  }, [load]);

  useEffect(() => {
    bottomRef.current?.scrollIntoView({ behavior: "smooth" });
  }, [msgs.length]);

  async function send() {
    const text = draft.trim();
    if (!text) return;
    setSending(true);
    const r = await fetch(`/api/wb/conversations/${id}/send`, {
      method: "POST",
      headers: { "content-type": "application/json" },
      body: JSON.stringify({ body: text }),
    });
    setSending(false);
    if (r.ok) {
      setDraft("");
      await load();
      const d = await r.json();
      if (!d.ok && d.error) setError(`El mensaje se registró pero WhatsApp rechazó el envío: ${d.error}`);
    } else {
      setError((await r.json()).error ?? "Error enviando");
    }
  }

  async function setStatus(status: string) {
    await fetch(`/api/wb/conversations/${id}/status`, {
      method: "POST",
      headers: { "content-type": "application/json" },
      body: JSON.stringify({ status }),
    });
    await load();
  }

  return (
    <Shell title={conv ? (conv.contact_name || `+${conv.wa_id}`) : "Conversación"}>
      {error && (
        <Card className="mb-4">
          <p className="text-sm" style={{ color: "var(--color-clay-deep)" }}>{error}</p>
        </Card>
      )}
      {conv && (
        <div className="mb-4 flex flex-wrap items-center gap-2 text-sm">
          <span className="font-mono text-xs" style={{ color: "var(--color-ink-soft)" }}>
            +{conv.wa_id} · Agente: {conv.wb_agents?.name ?? "ninguno"} · Estado: {conv.status}
          </span>
          <div className="ml-auto flex gap-2">
            {conv.status !== "open" && (
              <button onClick={() => setStatus("open")} className={btnGhost} style={btnGhostStyle}>
                Reactivar bot
              </button>
            )}
            {conv.status === "open" && (
              <button onClick={() => setStatus("handoff")} className={btnGhost} style={btnGhostStyle}>
                Pausar bot (traspaso)
              </button>
            )}
            <button onClick={load} className={btnGhost} style={btnGhostStyle} aria-label="Refrescar">
              <RefreshCw size={15} />
            </button>
          </div>
        </div>
      )}

      <Card className="flex h-[55vh] flex-col overflow-y-auto">
        {msgs.length === 0 && <p className="text-sm" style={{ color: "var(--color-ink-soft)" }}>Sin mensajes.</p>}
        <div className="space-y-2">
          {msgs.map((m) => (
            <div key={m.id} className={`flex ${m.direction === "out" ? "justify-end" : "justify-start"}`}>
              <div
                className="max-w-[75%] rounded-2xl px-3 py-2 text-sm"
                style={
                  m.direction === "out"
                    ? { background: "var(--color-bubble)", color: "var(--color-ink)" }
                    : { background: "var(--color-paper-deep)", color: "var(--color-ink)" }
                }
              >
                <p className="whitespace-pre-wrap" style={{ overflowWrap: "anywhere" }}>{m.body}</p>
                <p className="mt-1 text-[10px]" style={{ color: "var(--color-ink-soft)" }}>
                  {new Date(m.created_at).toLocaleString("es-CO", { dateStyle: "short", timeStyle: "short" })}
                  {m.direction === "out" && ` · ${m.status}`}
                </p>
                {m.error && (
                  <p className="mt-1 text-[10px]" style={{ color: "var(--color-clay-deep)", overflowWrap: "anywhere" }}>{m.error}</p>
                )}
              </div>
            </div>
          ))}
        </div>
        <div ref={bottomRef} />
      </Card>

      <div className="mt-3 flex gap-2">
        <input
          className={inputCls}
          style={inputStyle}
          value={draft}
          onChange={(e) => setDraft(e.target.value)}
          onKeyDown={(e) => e.key === "Enter" && send()}
          placeholder="Escribir como el negocio…"
        />
        <button onClick={send} disabled={sending || !draft.trim()} className={btnPrimary} style={btnPrimaryStyle}>
          <Send size={15} /> Enviar
        </button>
      </div>
    </Shell>
  );
}
