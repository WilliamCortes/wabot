import { createHmac, timingSafeEqual } from "node:crypto";

const COOKIE_NAME = "wb_session";
const SESSION_HOURS = 24 * 7;

function secret(): string {
  const s = process.env.SESSION_SECRET;
  if (!s) throw new Error("SESSION_SECRET no configurado");
  return s;
}

function sign(exp: number): string {
  return createHmac("sha256", secret()).update(`wb:${exp}`).digest("hex");
}

export function createSessionToken(): { token: string; maxAge: number } {
  const exp = Date.now() + SESSION_HOURS * 3600_000;
  return { token: `${exp}.${sign(exp)}`, maxAge: SESSION_HOURS * 3600 };
}

export function verifySessionToken(token: string | undefined): boolean {
  if (!token) return false;
  const dot = token.indexOf(".");
  if (dot < 1) return false;
  const exp = Number(token.slice(0, dot));
  if (!Number.isFinite(exp) || exp < Date.now()) return false;
  const given = Buffer.from(token.slice(dot + 1), "utf8");
  const expected = Buffer.from(sign(exp), "utf8");
  return given.length === expected.length && timingSafeEqual(given, expected);
}

export { COOKIE_NAME };
