"use client";

import { useEffect, useState } from "react";
import Link from "next/link";
import { Shell, Card } from "@/components/dashboard/Shell";

type Conv = {
  id: string;
  wa_id: string;
  contact_name: string;
  status: string;
  last_message_at: string;
  wb_agents?: { name: string } | null;
};

const STATUS_LABEL: Record<string, { text: string; bg: string; fg: string }> = {
  open: { text: "Abierta", bg: "var(--color-bubble)", fg: "var(--color-whatsapp-deep)" },
  handoff: { text: "Traspaso", bg: "#FDE8D7", fg: "var(--color-clay-deep)" },
  closed: { text: "Cerrada", bg: "var(--color-paper-deep)", fg: "var(--color-ink-soft)" },
};

export default function ConversationsPage() {
  const [convs, setConvs] = useState<Conv[] | null>(null);
  const [error, setError] = useState("");

  useEffect(() => {
    fetch("/api/wb/conversations")
      .then(async (r) => {
        if (r.status === 401) { location.href = "/dashboard/login"; return null; }
        if (!r.ok) throw new Error((await r.json()).error ?? r.statusText);
        return r.json();
      })
      .then((d) => d && setConvs(d.conversations))
      .catch((e) => setError(e.message));
  }, []);

  return (
    <Shell title="Conversaciones">
      {error && <Card className="mb-4"><p className="text-sm" style={{ color: "var(--color-clay-deep)" }}>{error}</p></Card>}
      {!convs && !error && <p className="text-sm" style={{ color: "var(--color-ink-soft)" }}>Cargando…</p>}
      {convs && convs.length === 0 && (
        <Card>
          <p className="text-sm" style={{ color: "var(--color-ink-soft)" }}>
            Sin conversaciones todavía. Configura el webhook en Meta (ver Ajustes) y escribe al número de WhatsApp del negocio para probar.
          </p>
        </Card>
      )}
      <div className="space-y-2">
        {convs?.map((c) => {
          const st = STATUS_LABEL[c.status] ?? STATUS_LABEL.open;
          return (
            <Link key={c.id} href={`/dashboard/conversaciones/${c.id}`} className="block">
              <Card className="flex items-center justify-between py-3 transition-transform hover:-translate-y-0.5">
                <div>
                  <p className="font-medium" style={{ color: "var(--color-ink)" }}>
                    {c.contact_name || c.wa_id}
                  </p>
                  <p className="font-mono text-xs" style={{ color: "var(--color-ink-soft)" }}>
                    +{c.wa_id} · {c.wb_agents?.name ?? "Sin agente"}
                  </p>
                </div>
                <div className="flex items-center gap-3">
                  <span className="rounded-full px-2 py-0.5 text-xs font-medium" style={{ background: st.bg, color: st.fg }}>
                    {st.text}
                  </span>
                  <span className="text-xs" style={{ color: "var(--color-ink-soft)" }}>
                    {new Date(c.last_message_at).toLocaleString("es-CO", { dateStyle: "short", timeStyle: "short" })}
                  </span>
                </div>
              </Card>
            </Link>
          );
        })}
      </div>
    </Shell>
  );
}
