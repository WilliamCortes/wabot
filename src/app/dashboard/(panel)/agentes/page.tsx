"use client";

import { useEffect, useState } from "react";
import Link from "next/link";
import { Plus, Bot } from "lucide-react";
import { Shell, Card, btnPrimary, btnPrimaryStyle } from "@/components/dashboard/Shell";

type Agent = {
  id: string;
  name: string;
  description: string;
  model: string;
  is_active: boolean;
  updated_at: string;
};

export default function AgentsPage() {
  const [agents, setAgents] = useState<Agent[] | null>(null);
  const [error, setError] = useState("");
  const [creating, setCreating] = useState(false);

  useEffect(() => {
    fetch("/api/wb/agents")
      .then(async (r) => {
        if (r.status === 401) { location.href = "/dashboard/login"; return null; }
        if (!r.ok) throw new Error((await r.json()).error ?? r.statusText);
        return r.json();
      })
      .then((d) => d && setAgents(d.agents))
      .catch((e) => setError(e.message));
  }, []);

  async function createAgent() {
    setCreating(true);
    const res = await fetch("/api/wb/agents", {
      method: "POST",
      headers: { "content-type": "application/json" },
      body: JSON.stringify({ name: "Nuevo agente" }),
    });
    setCreating(false);
    if (res.ok) {
      const { agent } = await res.json();
      location.href = `/dashboard/agentes/${agent.id}`;
    } else {
      setError((await res.json()).error ?? "Error creando agente");
    }
  }

  return (
    <Shell title="Agentes">
      <div className="mb-4 flex items-center justify-between">
        <p className="text-sm" style={{ color: "var(--color-ink-soft)" }}>
          Cada agente define cómo responde tu WhatsApp: personalidad, mensajes y modelo de IA.
        </p>
        <button onClick={createAgent} disabled={creating} className={btnPrimary} style={btnPrimaryStyle}>
          <Plus size={16} /> Crear agente
        </button>
      </div>
      {error && <Card className="mb-4"><p className="text-sm" style={{ color: "var(--color-clay-deep)" }}>{error}</p></Card>}
      <div className="grid gap-4 md:grid-cols-2">
        {agents?.map((a) => (
          <Link key={a.id} href={`/dashboard/agentes/${a.id}`}>
            <Card className="h-full transition-transform hover:-translate-y-0.5">
              <div className="flex items-start justify-between">
                <div className="flex items-center gap-2">
                  <Bot size={18} style={{ color: "var(--color-whatsapp-deep)" }} />
                  <span className="font-semibold" style={{ color: "var(--color-ink)" }}>{a.name}</span>
                </div>
                <span
                  className="rounded-full px-2 py-0.5 text-xs font-medium"
                  style={
                    a.is_active
                      ? { background: "var(--color-bubble)", color: "var(--color-whatsapp-deep)" }
                      : { background: "var(--color-paper-deep)", color: "var(--color-ink-soft)" }
                  }
                >
                  {a.is_active ? "Activo" : "Inactivo"}
                </span>
              </div>
              <p className="mt-2 line-clamp-2 text-sm" style={{ color: "var(--color-ink-soft)" }}>
                {a.description || "Sin descripción"}
              </p>
              <p className="mt-3 font-mono text-xs" style={{ color: "var(--color-ink-soft)" }}>{a.model}</p>
            </Card>
          </Link>
        ))}
        {agents && agents.length === 0 && (
          <Card className="md:col-span-2">
            <p className="text-sm" style={{ color: "var(--color-ink-soft)" }}>
              No hay agentes todavía. Crea el primero para que tu WhatsApp empiece a responder solo.
            </p>
          </Card>
        )}
        {!agents && !error && <p className="text-sm" style={{ color: "var(--color-ink-soft)" }}>Cargando…</p>}
      </div>
    </Shell>
  );
}
