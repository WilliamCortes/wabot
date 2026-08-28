"use client";

import { useEffect, useState } from "react";
import { Save, PlugZap } from "lucide-react";
import {
  Shell, Card, inputCls, inputStyle, btnPrimary, btnPrimaryStyle, btnGhost, btnGhostStyle,
} from "@/components/dashboard/Shell";

type Agent = { id: string; name: string };

export default function SettingsPage() {
  const [settings, setSettings] = useState<Record<string, string> | null>(null);
  const [agents, setAgents] = useState<Agent[]>([]);
  const [error, setError] = useState("");
  const [notice, setNotice] = useState("");
  const [waStatus, setWaStatus] = useState<{ ok: boolean; phone?: { display_phone_number?: string; verified_name?: string }; error?: string } | null>(null);
  const [checking, setChecking] = useState(false);
  const [drafts, setDrafts] = useState<Record<string, string>>({});
  const [webhookBase, setWebhookBase] = useState("");

  useEffect(() => {
    setWebhookBase(location.origin);
    Promise.all([
      fetch("/api/wb/settings").then(async (r) => {
        if (r.status === 401) { location.href = "/dashboard/login"; throw new Error("auth"); }
        return r.json();
      }),
      fetch("/api/wb/agents").then((r) => r.json()),
    ])
      .then(([s, a]) => {
        setSettings(s.settings);
        setAgents(a.agents ?? []);
      })
      .catch((e) => e.message !== "auth" && setError(String(e.message ?? e)));
  }, []);

  async function saveKey(key: string, value: string) {
    setError("");
    setNotice("");
    const r = await fetch("/api/wb/settings", {
      method: "POST",
      headers: { "content-type": "application/json" },
      body: JSON.stringify({ key, value }),
    });
    if (r.ok) {
      setNotice("Guardado ✓");
      const s = await (await fetch("/api/wb/settings")).json();
      setSettings(s.settings);
      setDrafts((d) => ({ ...d, [key]: "" }));
      setTimeout(() => setNotice(""), 2500);
    } else {
      setError((await r.json()).error ?? "Error guardando");
    }
  }

  async function checkWa() {
    setChecking(true);
    setWaStatus(null);
    const r = await fetch("/api/wb/wa-status");
    setChecking(false);
    setWaStatus(await r.json());
  }

  const label = "mb-1 block text-sm font-medium";
  const labelStyle = { color: "var(--color-ink)" } as const;
  const hint = "mt-1 text-xs";
  const hintStyle = { color: "var(--color-ink-soft)" } as const;
  const mono = "rounded px-1.5 py-0.5 font-mono text-xs";
  const monoStyle = { background: "var(--color-paper-deep)", color: "var(--color-ink)" } as const;

  return (
    <Shell title="Ajustes">
      {error && <Card className="mb-4"><p className="text-sm" style={{ color: "var(--color-clay-deep)" }}>{error}</p></Card>}
      {notice && <Card className="mb-4"><p className="text-sm" style={{ color: "var(--color-whatsapp-deep)" }}>{notice}</p></Card>}
      {!settings && !error && <p className="text-sm" style={hintStyle}>Cargando…</p>}
      {settings && (
        <div className="space-y-4">
          <Card>
            <h2 className="mb-3 text-sm font-semibold" style={labelStyle}>Webhook de Meta</h2>
            <p className="text-sm" style={hintStyle}>
              En Meta for Developers → tu app → WhatsApp → Configuración, registra:
            </p>
            <ul className="mt-2 space-y-1.5 text-sm" style={{ color: "var(--color-ink)" }}>
              <li>URL de callback: <code className={mono} style={monoStyle}>{webhookBase}/api/whatsapp/webhook</code></li>
              <li>Token de verificación: el valor de <code className={mono} style={monoStyle}>WHATSAPP_VERIFY_TOKEN</code> (variable de entorno del sitio)</li>
              <li>Campo de suscripción: <code className={mono} style={monoStyle}>messages</code></li>
            </ul>
          </Card>

          <Card>
            <h2 className="mb-3 text-sm font-semibold" style={labelStyle}>Conexión WhatsApp Cloud API</h2>
            <div className="grid gap-4 sm:grid-cols-2">
              <div>
                <label className={label} style={labelStyle}>Phone Number ID</label>
                <input
                  className={inputCls} style={inputStyle}
                  defaultValue={settings.phone_number_id}
                  onBlur={(e) => e.target.value !== settings.phone_number_id && saveKey("phone_number_id", e.target.value)}
                />
              </div>
              <div>
                <label className={label} style={labelStyle}>WABA ID</label>
                <input
                  className={inputCls} style={inputStyle}
                  defaultValue={settings.waba_id}
                  onBlur={(e) => e.target.value !== settings.waba_id && saveKey("waba_id", e.target.value)}
                />
              </div>
            </div>
            <div className="mt-4">
              <label className={label} style={labelStyle}>
                Token de acceso {settings.whatsapp_token && <span style={hintStyle}>(actual: {settings.whatsapp_token})</span>}
              </label>
              <div className="flex gap-2">
                <input
                  className={inputCls} style={inputStyle} type="password"
                  placeholder="Pegar nuevo token para reemplazar"
                  value={drafts.whatsapp_token ?? ""}
                  onChange={(e) => setDrafts((d) => ({ ...d, whatsapp_token: e.target.value }))}
                />
                <button
                  onClick={() => drafts.whatsapp_token && saveKey("whatsapp_token", drafts.whatsapp_token)}
                  disabled={!drafts.whatsapp_token}
                  className={btnPrimary} style={btnPrimaryStyle}
                >
                  <Save size={15} />
                </button>
              </div>
              <p className={hint} style={hintStyle}>
                Usa un token permanente de usuario del sistema (System User) de tu Business Manager.
              </p>
            </div>
            <div className="mt-4 flex items-center gap-3">
              <button onClick={checkWa} disabled={checking} className={btnGhost} style={btnGhostStyle}>
                <PlugZap size={15} /> {checking ? "Probando…" : "Probar conexión"}
              </button>
              {waStatus && (
                waStatus.ok ? (
                  <span className="text-sm" style={{ color: "var(--color-whatsapp-deep)" }}>
                    ✓ Conectado: {waStatus.phone?.verified_name} ({waStatus.phone?.display_phone_number})
                  </span>
                ) : (
                  <span className="text-sm" style={{ color: "var(--color-clay-deep)" }}>✕ {waStatus.error}</span>
                )
              )}
            </div>
          </Card>

          <Card>
            <h2 className="mb-3 text-sm font-semibold" style={labelStyle}>Inteligencia artificial (Claude)</h2>
            <label className={label} style={labelStyle}>
              Clave de API de Anthropic {settings.anthropic_api_key && <span style={hintStyle}>(actual: {settings.anthropic_api_key})</span>}
            </label>
            <div className="flex gap-2">
              <input
                className={inputCls} style={inputStyle} type="password"
                placeholder="sk-ant-…"
                value={drafts.anthropic_api_key ?? ""}
                onChange={(e) => setDrafts((d) => ({ ...d, anthropic_api_key: e.target.value }))}
              />
              <button
                onClick={() => drafts.anthropic_api_key && saveKey("anthropic_api_key", drafts.anthropic_api_key)}
                disabled={!drafts.anthropic_api_key}
                className={btnPrimary} style={btnPrimaryStyle}
              >
                <Save size={15} />
              </button>
            </div>
            <p className={hint} style={hintStyle}>
              Con clave: los agentes responden con Claude usando su prompt. Sin clave: responden con el motor de reglas (bienvenida, mensaje por defecto y traspaso a humano).
            </p>
            {settings.anthropic_api_key && (
              <button onClick={() => saveKey("anthropic_api_key", "")} className={`${btnGhost} mt-3`} style={{ ...btnGhostStyle, color: "var(--color-clay-deep)" }}>
                Quitar clave (volver a reglas)
              </button>
            )}
          </Card>

          <Card>
            <h2 className="mb-3 text-sm font-semibold" style={labelStyle}>Agente por defecto</h2>
            <select
              className={inputCls} style={inputStyle}
              value={settings.default_agent_id}
              onChange={(e) => saveKey("default_agent_id", e.target.value)}
            >
              <option value="">— Ninguno (no responder automáticamente) —</option>
              {agents.map((a) => <option key={a.id} value={a.id}>{a.name}</option>)}
            </select>
            <p className={hint} style={hintStyle}>
              Se asigna a cada conversación nueva. El agente además debe estar “Activo” para responder.
            </p>
          </Card>
        </div>
      )}
    </Shell>
  );
}
