"use client";

import { use, useEffect, useState } from "react";
import { useRouter } from "next/navigation";
import { Save, Trash2, Send } from "lucide-react";
import {
  Shell, Card, inputCls, inputStyle, btnPrimary, btnPrimaryStyle, btnGhost, btnGhostStyle,
} from "@/components/dashboard/Shell";

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

const MODELS = [
  { id: "claude-haiku-4-5", label: "Claude Haiku 4.5 — rápido y económico" },
  { id: "claude-sonnet-5", label: "Claude Sonnet 5 — más capaz" },
];

export default function AgentEditPage({ params }: { params: Promise<{ id: string }> }) {
  const { id } = use(params);
  const router = useRouter();
  const [agent, setAgent] = useState<Agent | null>(null);
  const [error, setError] = useState("");
  const [saving, setSaving] = useState(false);
  const [saved, setSaved] = useState(false);
  const [testText, setTestText] = useState("");
  const [testOut, setTestOut] = useState<{ reply: string; engine: string } | null>(null);
  const [testing, setTesting] = useState(false);

  useEffect(() => {
    fetch("/api/wb/agents")
      .then(async (r) => {
        if (r.status === 401) { location.href = "/dashboard/login"; return null; }
        if (!r.ok) throw new Error((await r.json()).error ?? r.statusText);
        return r.json();
      })
      .then((d) => {
        if (!d) return;
        const found = (d.agents as Agent[]).find((a) => a.id === id);
        if (!found) setError("Agente no encontrado");
        else setAgent(found);
      })
      .catch((e) => setError(e.message));
  }, [id]);

  function patch(p: Partial<Agent>) {
    setAgent((a) => (a ? { ...a, ...p } : a));
    setSaved(false);
  }

  async function save() {
    if (!agent) return;
    setSaving(true);
    setError("");
    const res = await fetch(`/api/wb/agents/${agent.id}`, {
      method: "PUT",
      headers: { "content-type": "application/json" },
      body: JSON.stringify(agent),
    });
    setSaving(false);
    if (res.ok) {
      setSaved(true);
      setTimeout(() => setSaved(false), 2500);
    } else {
      setError((await res.json()).error ?? "Error guardando");
    }
  }

  async function remove() {
    if (!agent) return;
    if (!confirm(`¿Eliminar el agente "${agent.name}"? Esta acción no se puede deshacer.`)) return;
    const res = await fetch(`/api/wb/agents/${agent.id}`, { method: "DELETE" });
    if (res.ok) router.push("/dashboard/agentes");
    else setError((await res.json()).error ?? "Error eliminando");
  }

  async function runTest() {
    if (!agent || !testText.trim()) return;
    setTesting(true);
    setTestOut(null);
    const res = await fetch("/api/wb/test-agent", {
      method: "POST",
      headers: { "content-type": "application/json" },
      body: JSON.stringify({ agent_id: agent.id, text: testText }),
    });
    setTesting(false);
    if (res.ok) setTestOut(await res.json());
    else setError((await res.json()).error ?? "Error en la prueba");
  }

  const label = "mb-1 block text-sm font-medium";
  const labelStyle = { color: "var(--color-ink)" } as const;
  const hint = "mt-1 text-xs";
  const hintStyle = { color: "var(--color-ink-soft)" } as const;

  return (
    <Shell title={agent ? `Agente: ${agent.name}` : "Agente"}>
      {error && <Card className="mb-4"><p className="text-sm" style={{ color: "var(--color-clay-deep)" }}>{error}</p></Card>}
      {!agent && !error && <p className="text-sm" style={hintStyle}>Cargando…</p>}
      {agent && (
        <div className="grid gap-4 lg:grid-cols-[1fr_360px]">
          <div className="space-y-4">
            <Card>
              <div className="grid gap-4 sm:grid-cols-2">
                <div>
                  <label className={label} style={labelStyle}>Nombre</label>
                  <input className={inputCls} style={inputStyle} value={agent.name} onChange={(e) => patch({ name: e.target.value })} />
                </div>
                <div>
                  <label className={label} style={labelStyle}>Estado</label>
                  <button
                    onClick={() => patch({ is_active: !agent.is_active })}
                    className="w-full cursor-pointer rounded-lg border px-3 py-2 text-left text-sm font-medium"
                    style={
                      agent.is_active
                        ? { background: "var(--color-bubble)", color: "var(--color-whatsapp-deep)", borderColor: "transparent" }
                        : { background: "var(--color-paper-deep)", color: "var(--color-ink-soft)", borderColor: "var(--color-line)" }
                    }
                  >
                    {agent.is_active ? "● Activo — responde mensajes" : "○ Inactivo — no responde"}
                  </button>
                </div>
              </div>
              <div className="mt-4">
                <label className={label} style={labelStyle}>Descripción interna</label>
                <input className={inputCls} style={inputStyle} value={agent.description} onChange={(e) => patch({ description: e.target.value })} />
              </div>
            </Card>

            <Card>
              <label className={label} style={labelStyle}>Prompt del sistema (personalidad e instrucciones)</label>
              <textarea
                className={`${inputCls} min-h-40 font-mono text-xs leading-relaxed`}
                style={inputStyle}
                value={agent.system_prompt}
                onChange={(e) => patch({ system_prompt: e.target.value })}
                placeholder={"Eres el asistente de [negocio]. Atiendes clientes por WhatsApp…\nHorario: …\nServicios y precios: …"}
              />
              <p className={hint} style={hintStyle}>
                Se usa cuando la IA está activa (Ajustes → clave de Anthropic). Describe el negocio, tono, horarios, precios y qué NO debe hacer.
              </p>
              <div className="mt-4 grid gap-4 sm:grid-cols-3">
                <div>
                  <label className={label} style={labelStyle}>Modelo</label>
                  <select className={inputCls} style={inputStyle} value={agent.model} onChange={(e) => patch({ model: e.target.value })}>
                    {MODELS.map((m) => <option key={m.id} value={m.id}>{m.label}</option>)}
                  </select>
                </div>
                <div>
                  <label className={label} style={labelStyle}>Temperatura ({agent.temperature})</label>
                  <input
                    type="range" min={0} max={1} step={0.1} value={agent.temperature}
                    onChange={(e) => patch({ temperature: Number(e.target.value) })}
                    className="w-full"
                  />
                </div>
                <div>
                  <label className={label} style={labelStyle}>Máx. tokens</label>
                  <input
                    type="number" min={64} max={2048}
                    className={inputCls} style={inputStyle}
                    value={agent.max_tokens}
                    onChange={(e) => patch({ max_tokens: Number(e.target.value) })}
                  />
                </div>
              </div>
            </Card>

            <Card>
              <label className={label} style={labelStyle}>Mensaje de bienvenida</label>
              <textarea className={`${inputCls} min-h-20`} style={inputStyle} value={agent.welcome_message} onChange={(e) => patch({ welcome_message: e.target.value })} placeholder="¡Hola! 👋 Soy el asistente de … ¿En qué te puedo ayudar?" />
              <p className={hint} style={hintStyle}>Sin IA: se envía en el primer mensaje de cada contacto.</p>
              <div className="mt-4">
                <label className={label} style={labelStyle}>Mensaje por defecto (sin IA)</label>
                <textarea className={`${inputCls} min-h-20`} style={inputStyle} value={agent.fallback_message} onChange={(e) => patch({ fallback_message: e.target.value })} placeholder="Gracias por escribirnos. Cuéntanos qué necesitas y te respondemos enseguida." />
              </div>
              <div className="mt-4">
                <label className={label} style={labelStyle}>Palabras de traspaso a humano</label>
                <input className={inputCls} style={inputStyle} value={agent.handoff_keywords} onChange={(e) => patch({ handoff_keywords: e.target.value })} />
                <p className={hint} style={hintStyle}>Separadas por coma. Si el cliente escribe alguna, el bot se pausa y la conversación queda marcada “Traspaso”.</p>
              </div>
            </Card>

            <div className="flex items-center gap-3">
              <button onClick={save} disabled={saving} className={btnPrimary} style={btnPrimaryStyle}>
                <Save size={16} /> {saving ? "Guardando…" : saved ? "Guardado ✓" : "Guardar cambios"}
              </button>
              <button onClick={remove} className={btnGhost} style={{ ...btnGhostStyle, color: "var(--color-clay-deep)" }}>
                <Trash2 size={16} /> Eliminar
              </button>
            </div>
          </div>

          <div>
            <Card>
              <h2 className="mb-2 text-sm font-semibold" style={labelStyle}>Probar agente</h2>
              <p className={`${hint} mb-3`} style={hintStyle}>
                Simula un mensaje de cliente. No envía nada por WhatsApp. Guarda antes de probar cambios.
              </p>
              <div className="flex gap-2">
                <input
                  className={inputCls}
                  style={inputStyle}
                  value={testText}
                  onChange={(e) => setTestText(e.target.value)}
                  onKeyDown={(e) => e.key === "Enter" && runTest()}
                  placeholder="Hola, ¿qué precios manejan?"
                />
                <button onClick={runTest} disabled={testing || !testText.trim()} className={btnPrimary} style={btnPrimaryStyle}>
                  <Send size={15} />
                </button>
              </div>
              {testing && <p className={`${hint} mt-3`} style={hintStyle}>Generando…</p>}
              {testOut && (
                <div className="mt-3 rounded-xl p-3 text-sm" style={{ background: "var(--color-bubble)", color: "var(--color-ink)" }}>
                  <p className="whitespace-pre-wrap">{testOut.reply}</p>
                  <p className="mt-2 text-[10px] uppercase tracking-wider" style={{ color: "var(--color-whatsapp-deep)" }}>
                    motor: {testOut.engine === "claude" ? "IA (Claude)" : "reglas"}
                  </p>
                </div>
              )}
            </Card>
          </div>
        </div>
      )}
    </Shell>
  );
}
