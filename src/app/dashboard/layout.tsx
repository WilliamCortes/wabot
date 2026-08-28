import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "Dashboard",
  robots: { index: false, follow: false },
};

export default function DashboardLayout({ children }: { children: React.ReactNode }) {
  return (
    <div className="min-h-screen" style={{ background: "var(--color-paper)" }}>
      {/* Ocultar el FAB de WhatsApp del sitio público dentro del dashboard */}
      <style>{`.btn--wa{display:none!important}`}</style>
      {children}
    </div>
  );
}
