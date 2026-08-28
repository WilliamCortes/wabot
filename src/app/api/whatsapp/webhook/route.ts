import { NextRequest, NextResponse } from "next/server";
import { edgeFetch } from "@/lib/wb/edge";

// Verificación del webhook de Meta (GET con hub.challenge)
export async function GET(req: NextRequest) {
  const mode = req.nextUrl.searchParams.get("hub.mode");
  const token = req.nextUrl.searchParams.get("hub.verify_token");
  const challenge = req.nextUrl.searchParams.get("hub.challenge");
  const expected = process.env.WHATSAPP_VERIFY_TOKEN;

  if (mode === "subscribe" && expected && token === expected && challenge) {
    return new NextResponse(challenge, { status: 200 });
  }
  return new NextResponse("Forbidden", { status: 403 });
}

// Mensajes entrantes: reenviar al backend y responder 200 rápido.
export async function POST(req: NextRequest) {
  const payload = await req.text();
  try {
    await edgeFetch("inbound", { method: "POST", body: payload });
  } catch (e) {
    // Nunca fallar hacia Meta: registrar y responder 200 igualmente.
    console.error("wb inbound forward error:", e);
  }
  return NextResponse.json({ ok: true });
}
