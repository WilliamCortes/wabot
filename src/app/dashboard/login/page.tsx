"use client";

import { useState } from "react";
import { useRouter } from "next/navigation";
import { Zap } from "lucide-react";
import { inputCls, inputStyle, btnPrimary, btnPrimaryStyle } from "@/components/dashboard/Shell";

export default function LoginPage() {
  const [password, setPassword] = useState("");
  const [error, setError] = useState("");
  const [loading, setLoading] = useState(false);
  const router = useRouter();

  async function submit(e: React.FormEvent) {
    e.preventDefault();
    setLoading(true);
    setError("");
    const res = await fetch("/api/wb/login", {
      method: "POST",
      headers: { "content-type": "application/json" },
      body: JSON.stringify({ password }),
    });
    setLoading(false);
    if (res.ok) {
      router.push("/dashboard");
      router.refresh();
    } else {
      const data = await res.json().catch(() => ({}));
      setError(data.error ?? "Error al iniciar sesión");
    }
  }

  return (
    <div className="flex min-h-screen items-center justify-center px-4">
      <form
        onSubmit={submit}
        className="w-full max-w-sm rounded-2xl border p-8"
        style={{ background: "#fff", borderColor: "var(--color-line)", boxShadow: "var(--shadow-lift)" }}
      >
        <div className="mb-6 flex items-center gap-2">
          <Zap size={22} style={{ color: "var(--color-whatsapp-deep)" }} fill="currentColor" />
          <span
            className="text-lg font-semibold tracking-tight"
            style={{ fontFamily: "var(--font-display)", color: "var(--color-ink)" }}
          >
            Wabot365 · Panel
          </span>
        </div>
        <label className="mb-1 block text-sm font-medium" style={{ color: "var(--color-ink)" }}>
          Contraseña
        </label>
        <input
          type="password"
          value={password}
          onChange={(e) => setPassword(e.target.value)}
          className={inputCls}
          style={inputStyle}
          autoFocus
          required
        />
        {error && (
          <p className="mt-2 text-sm" style={{ color: "var(--color-clay-deep)" }}>
            {error}
          </p>
        )}
        <button type="submit" disabled={loading} className={`${btnPrimary} mt-4 w-full justify-center`} style={btnPrimaryStyle}>
          {loading ? "Entrando…" : "Entrar"}
        </button>
      </form>
    </div>
  );
}
