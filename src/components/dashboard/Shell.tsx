"use client";

import Link from "next/link";
import { usePathname, useRouter } from "next/navigation";
import { LayoutDashboard, Bot, MessagesSquare, Settings, LogOut, Zap } from "lucide-react";

const NAV = [
  { href: "/dashboard", label: "Resumen", icon: LayoutDashboard },
  { href: "/dashboard/agentes", label: "Agentes", icon: Bot },
  { href: "/dashboard/conversaciones", label: "Conversaciones", icon: MessagesSquare },
  { href: "/dashboard/ajustes", label: "Ajustes", icon: Settings },
];

export function Shell({ children, title }: { children: React.ReactNode; title: string }) {
  const pathname = usePathname();
  const router = useRouter();

  async function logout() {
    await fetch("/api/wb/logout", { method: "POST" });
    router.push("/dashboard/login");
  }

  return (
    <div className="flex min-h-screen">
      <aside
        className="hidden w-60 shrink-0 flex-col gap-1 p-4 md:flex"
        style={{ background: "var(--color-night)", color: "#fff" }}
      >
        <Link href="/dashboard" className="mb-6 flex items-center gap-2 px-2 pt-2">
          <Zap size={20} style={{ color: "var(--color-whatsapp-light)" }} fill="currentColor" />
          <span className="font-semibold tracking-tight" style={{ fontFamily: "var(--font-display)" }}>
            Wabot365
          </span>
          <span
            className="ml-1 rounded px-1.5 py-0.5 text-[10px] font-medium uppercase tracking-wider"
            style={{ background: "rgba(76,192,128,0.15)", color: "var(--color-whatsapp-light)" }}
          >
            Panel
          </span>
        </Link>
        {NAV.map(({ href, label, icon: Icon }) => {
          const active = href === "/dashboard" ? pathname === href : pathname.startsWith(href);
          return (
            <Link
              key={href}
              href={href}
              className="flex items-center gap-3 rounded-lg px-3 py-2.5 text-sm transition-colors"
              style={
                active
                  ? { background: "var(--color-whatsapp-deep)", color: "#fff" }
                  : { color: "rgba(255,255,255,0.65)" }
              }
            >
              <Icon size={17} />
              {label}
            </Link>
          );
        })}
        <button
          onClick={logout}
          className="mt-auto flex cursor-pointer items-center gap-3 rounded-lg px-3 py-2.5 text-left text-sm"
          style={{ color: "rgba(255,255,255,0.5)" }}
        >
          <LogOut size={17} />
          Salir
        </button>
      </aside>

      <div className="flex min-w-0 flex-1 flex-col">
        {/* Barra móvil */}
        <nav
          className="flex items-center gap-1 overflow-x-auto px-3 py-2 md:hidden"
          style={{ background: "var(--color-night)" }}
        >
          {NAV.map(({ href, label }) => {
            const active = href === "/dashboard" ? pathname === href : pathname.startsWith(href);
            return (
              <Link
                key={href}
                href={href}
                className="whitespace-nowrap rounded-full px-3 py-1.5 text-xs"
                style={
                  active
                    ? { background: "var(--color-whatsapp-deep)", color: "#fff" }
                    : { color: "rgba(255,255,255,0.7)" }
                }
              >
                {label}
              </Link>
            );
          })}
          <button onClick={logout} className="ml-auto whitespace-nowrap px-3 py-1.5 text-xs" style={{ color: "rgba(255,255,255,0.5)" }}>
            Salir
          </button>
        </nav>

        <main className="mx-auto w-full max-w-5xl flex-1 px-4 py-8 md:px-8">
          <h1
            className="mb-6 text-2xl font-semibold tracking-tight"
            style={{ fontFamily: "var(--font-display)", color: "var(--color-ink)" }}
          >
            {title}
          </h1>
          {children}
        </main>
      </div>
    </div>
  );
}

export function Card({ children, className = "" }: { children: React.ReactNode; className?: string }) {
  return (
    <div
      className={`rounded-2xl border p-5 ${className}`}
      style={{ background: "#fff", borderColor: "var(--color-line)", boxShadow: "var(--shadow-soft)" }}
    >
      {children}
    </div>
  );
}

export const inputCls =
  "w-full rounded-lg border px-3 py-2 text-sm outline-none focus:ring-2";
export const inputStyle: React.CSSProperties = {
  borderColor: "var(--color-line)",
  background: "var(--color-paper)",
  color: "var(--color-ink)",
};
export const btnPrimary =
  "inline-flex cursor-pointer items-center gap-2 rounded-lg px-4 py-2 text-sm font-medium text-white transition-opacity disabled:opacity-50";
export const btnPrimaryStyle: React.CSSProperties = { background: "var(--color-whatsapp-deep)" };
export const btnGhost =
  "inline-flex cursor-pointer items-center gap-2 rounded-lg border px-4 py-2 text-sm font-medium transition-colors disabled:opacity-50";
export const btnGhostStyle: React.CSSProperties = {
  borderColor: "var(--color-line)",
  color: "var(--color-ink)",
  background: "#fff",
};
