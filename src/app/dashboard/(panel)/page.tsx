"use client";

import { useEffect, useState } from "react";
import Link from "next/link";
import { Bot, MessagesSquare, MessageCircle, AlertTriangle } from "lucide-react";
import { Shell, Card } from "@/components/dashboard/Shell";

type Stats = {
  agents: number;
  conversations: number;
  messages: number;
  failed: number;
  recent: { id: string; wa_id: string; contact_name: string; status: string; last_message_at: string; wb_agents?: { name: string } | null }[];
  ai_enabled: boolean;
  wa_configured: boolean;
};

export default function OverviewPage() {
  const [stats, setStats] = useState<Stats | null>(null);
  const [error, setError] = useState("");

  useEffect(() => {
    fetch("/api/wb/stats")
      .then(async (r) => {
        if (r.status === 401) { location.href = "/dashboard/login"; return null; }
        if (!r.ok) throw new Error((await r.json()).error ?? r.statusText);
        return r.json();
      })
      .then((d) => d && setStats(d))
      .catch((e) => setError(e.message));
  }, []);

  const items = stats
    ? [
        { label: "Agentes", value: stats.agents, icon: Bot },
        { label: "Conversaciones", value: stats.conversations, icon: MessagesSquare },
        { label: "Mensajes", value: stats.messages, icon: MessageCircle },
        { label: "Envíos fallidos", value: stats.failed, icon: AlertTriangle },
      ]
    : [];

  return (
    <Shell title="Resumen">
      {error && (
        <Card className="mb-4">
          <p className="text-sm" style={{ color: "var(--color-clay-deep)" }}>{error}</p>
        </Card>
      )}
      <div className="grid grid-cols-2 gap-4 lg:grid-cols-4">
        {items.map(({ label, value, icon: Icon }) => (
          <Card key={label}>
            <div className="flex items-center gap-2 text-sm" style={{ color: "var(--color-ink-soft)" }}>
              <Icon size={15} /> {label}
            </div>
            <p className="mt-2 text-3xl font-semibold" style={{ fontFamily: "var(--font-display)", color: "var(--color-ink)" }}>
              {value}
            </p>
          </Card>
        ))}
        {!stats && !error && <p className="col-span-full text-sm" style={{ color: "var(--color-ink-soft)" }}>Cargando…</p>}
      </div>

      {stats && (
        <div className="mt-4 grid gap-4 md:grid-cols-2">
          <Card>
            <h2 className="mb-3 text-sm font-semibold" style={{ color: "var(--color-ink)" }}>Estado del sistema</h2>
            <ul className="space-y-2 text-sm" style={{ color: "var(--color-ink-soft)" }}>
              <li className="flex items-center gap-2">
                <Dot ok={stats.wa_configured} />
                WhatsApp Cloud API {stats.wa_configured ? "configurado" : "sin configurar"}
              </li>
              <li className="flex items-center gap-2">
                <Dot ok={stats.ai_enabled} />
                Respuestas con IA {stats.ai_enabled ? "activas (Claude)" : "desactivadas — usando motor de reglas"}
              </li>
            </ul>
            <Link href="/dashboard/ajustes" className="mt-3 inline-block text-sm font-medium" style={{ color: "var(--color-whatsapp-deep)" }}>
              Ir a Ajustes →
            </Link>
          </Card>
          <Card>
            <h2 className="mb-3 text-sm font-semibold" style={{ color: "var(--color-ink)" }}>Conversaciones recientes</h2>
            {stats.recent.length === 0 && (
              <p className="text-sm" style={{ color: "var(--color-ink-soft)" }}>
                Aún no hay conversaciones. Cuando llegue el primer mensaje al webhook aparecerá aquí.
              </p>
            )}
            <ul className="space-y-2">
              {stats.recent.map((c) => (
                <li key={c.id}>
                  <Link href={`/dashboard/conversaciones/${c.id}`} className="flex items-center justify-between rounded-lg px-2 py-1.5 text-sm hover:underline" style={{ color: "var(--color-ink)" }}>
                    <span>{c.contact_name || c.wa_id}</span>
                    <span className="text-xs" style={{ color: "var(--color-ink-soft)" }}>
                      {new Date(c.last_message_at).toLocaleString("es-CO", { dateStyle: "short", timeStyle: "short" })}
                    </span>
                  </Link>
                </li>
              ))}
            </ul>
          </Card>
        </div>
      )}
    </Shell>
  );
}

function Dot({ ok }: { ok: boolean }) {
  return (
    <span
      className="inline-block h-2.5 w-2.5 rounded-full"
      style={{ background: ok ? "var(--color-whatsapp)" : "var(--color-clay)" }}
    />
  );
}
