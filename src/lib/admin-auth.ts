import "server-only";
import { cookies } from "next/headers";
import { redirect } from "next/navigation";
import { getCloudflareContext } from "@opennextjs/cloudflare";

export type AdminRole = "admin" | "master-admin";

const COOKIE_NAME = "rn_admin_session";
const SESSION_SECONDS = 60 * 60 * 12;

async function authEnv() {
  const { env } = await getCloudflareContext({ async: true });
  return env;
}

const base64Url = (bytes: ArrayBuffer) => {
  const value = String.fromCharCode(...new Uint8Array(bytes));
  return btoa(value).replaceAll("+", "-").replaceAll("/", "_").replace(/=+$/, "");
};

async function sign(value: string) {
  const env = await authEnv();
  const key = await crypto.subtle.importKey(
    "raw",
    new TextEncoder().encode(env.ADMIN_SESSION_SECRET),
    { name: "HMAC", hash: "SHA-256" },
    false,
    ["sign"],
  );
  return base64Url(await crypto.subtle.sign("HMAC", key, new TextEncoder().encode(value)));
}

function safeEqual(left: string, right: string) {
  if (left.length !== right.length) return false;
  let different = 0;
  for (let index = 0; index < left.length; index += 1) {
    different |= left.charCodeAt(index) ^ right.charCodeAt(index);
  }
  return different === 0;
}

export async function roleForPin(pin: string): Promise<AdminRole | null> {
  const env = await authEnv();
  if (env.MASTER_ADMIN_PIN && safeEqual(pin, env.MASTER_ADMIN_PIN)) return "master-admin";
  if (env.ADMIN_PIN && safeEqual(pin, env.ADMIN_PIN)) return "admin";
  return null;
}

export async function createAdminSession(role: AdminRole) {
  const expires = Math.floor(Date.now() / 1000) + SESSION_SECONDS;
  const payload = `${role}.${expires}`;
  const signature = await sign(payload);
  (await cookies()).set(COOKIE_NAME, `${payload}.${signature}`, {
    httpOnly: true,
    secure: process.env.NODE_ENV === "production",
    sameSite: "lax",
    path: "/",
    maxAge: SESSION_SECONDS,
  });
}

export async function getAdminRole(): Promise<AdminRole | null> {
  const token = (await cookies()).get(COOKIE_NAME)?.value;
  if (!token) return null;
  const [role, expiresValue, signature] = token.split(".");
  if (
    (role !== "admin" && role !== "master-admin") ||
    !expiresValue ||
    !signature ||
    Number(expiresValue) <= Math.floor(Date.now() / 1000)
  ) {
    return null;
  }
  const expected = await sign(`${role}.${expiresValue}`);
  return safeEqual(signature, expected) ? role : null;
}

export async function requireAdmin(): Promise<AdminRole> {
  const role = await getAdminRole();
  if (!role) redirect("/admin-login");
  return role;
}

export async function assertAdmin(): Promise<AdminRole> {
  const role = await getAdminRole();
  if (!role) throw new Error("Unauthorized admin action.");
  return role;
}

export async function clearAdminSession() {
  (await cookies()).delete(COOKIE_NAME);
}
