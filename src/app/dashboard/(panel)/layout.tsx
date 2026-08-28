import { cookies } from "next/headers";
import { redirect } from "next/navigation";
import { COOKIE_NAME, verifySessionToken } from "@/lib/wb/session";

export default async function PanelLayout({ children }: { children: React.ReactNode }) {
  const store = await cookies();
  const token = store.get(COOKIE_NAME)?.value;
  if (!verifySessionToken(token)) {
    redirect("/dashboard/login");
  }
  return <>{children}</>;
}
