import "server-only";

import { getCloudflareContext } from "@opennextjs/cloudflare";
import { getDb } from "@/lib/d1";
import type { SmtpSettingsSummary } from "@/lib/settings-shared";

export type SmtpConfiguration = Omit<SmtpSettingsSummary, "passwordConfigured" | "source"> & {
  password: string;
};

type SmtpRow = {
  smtp_host: string;
  smtp_port: string | number;
  smtp_username: string;
  smtp_password_encrypted: string;
  smtp_from_email: string;
  smtp_from_name: string;
};

const encoder = new TextEncoder();
const decoder = new TextDecoder();

const toBase64Url = (value: Uint8Array) => {
  let binary = "";
  for (const byte of value) binary += String.fromCharCode(byte);
  return btoa(binary).replaceAll("+", "-").replaceAll("/", "_").replace(/=+$/, "");
};

const fromBase64Url = (value: string) => {
  const padded = value.replaceAll("-", "+").replaceAll("_", "/").padEnd(Math.ceil(value.length / 4) * 4, "=");
  return Uint8Array.from(atob(padded), (character) => character.charCodeAt(0));
};

async function encryptionKey() {
  const { env } = await getCloudflareContext({ async: true });
  const digest = await crypto.subtle.digest("SHA-256", encoder.encode(env.ADMIN_SESSION_SECRET));
  return crypto.subtle.importKey("raw", digest, "AES-GCM", false, ["encrypt", "decrypt"]);
}

export async function encryptSmtpPassword(password: string) {
  const iv = crypto.getRandomValues(new Uint8Array(12));
  const encrypted = await crypto.subtle.encrypt(
    { name: "AES-GCM", iv },
    await encryptionKey(),
    encoder.encode(password),
  );
  return `${toBase64Url(iv)}.${toBase64Url(new Uint8Array(encrypted))}`;
}

async function decryptSmtpPassword(value: string) {
  try {
    const [ivValue, encryptedValue] = value.split(".");
    if (!ivValue || !encryptedValue) return "";
    const decrypted = await crypto.subtle.decrypt(
      { name: "AES-GCM", iv: fromBase64Url(ivValue) },
      await encryptionKey(),
      fromBase64Url(encryptedValue),
    );
    return decoder.decode(decrypted);
  } catch {
    return "";
  }
}

async function getStoredSmtpSettings(): Promise<SmtpRow | null> {
  const db = await getDb();
  if (!db) return null;
  try {
    return await db
      .prepare(
        `select smtp_host, smtp_port, smtp_username, smtp_password_encrypted,
                smtp_from_email, smtp_from_name
           from settings where id='site' limit 1`,
      )
      .first<SmtpRow>();
  } catch {
    // The SMTP migration may not have been applied yet. Worker secrets remain
    // a safe fallback until the settings columns exist.
    return null;
  }
}

async function resolveSmtpSettings() {
  const [{ env }, stored] = await Promise.all([
    getCloudflareContext({ async: true }),
    getStoredSmtpSettings(),
  ]);
  const storedPassword = stored?.smtp_password_encrypted
    ? await decryptSmtpPassword(stored.smtp_password_encrypted)
    : "";
  const usesStoredSettings = Boolean(
    stored?.smtp_host ||
      stored?.smtp_username ||
      stored?.smtp_password_encrypted ||
      stored?.smtp_from_email,
  );

  return {
    host: stored?.smtp_host?.trim() || env.SMTP_HOST || "",
    port: String(stored?.smtp_port || env.SMTP_PORT || "2525"),
    username: stored?.smtp_username?.trim() || env.SMTP_USERNAME || "",
    password: storedPassword || env.SMTP_PASSWORD || "",
    fromEmail: stored?.smtp_from_email?.trim() || env.SMTP_FROM_EMAIL || "",
    fromName: stored?.smtp_from_name?.trim() || env.SMTP_FROM_NAME || "Removals Nationwide Bookings",
    source: usesStoredSettings ? "settings" as const : env.SMTP_HOST ? "cloudflare" as const : "none" as const,
  };
}

export async function getSmtpConfiguration(): Promise<SmtpConfiguration> {
  const settings = await resolveSmtpSettings();
  return {
    host: settings.host,
    port: settings.port,
    username: settings.username,
    password: settings.password,
    fromEmail: settings.fromEmail,
    fromName: settings.fromName,
  };
}

export async function getSmtpSettingsSummary(): Promise<SmtpSettingsSummary> {
  const { password, ...settings } = await resolveSmtpSettings();
  return { ...settings, passwordConfigured: Boolean(password) };
}

const formValue = (formData: FormData, name: string, max = 320) =>
  String(formData.get(name) ?? "").trim().slice(0, max);

export async function saveSmtpSettings(db: D1Database, formData: FormData) {
  const host = formValue(formData, "smtpHost", 253)
    .replace(/^smtps?:\/\//i, "")
    .replace(/\/$/, "");
  const portValue = Number(formValue(formData, "smtpPort", 5));
  const username = formValue(formData, "smtpUsername");
  const password = formValue(formData, "smtpPassword", 1000);
  const fromEmail = formValue(formData, "smtpFromEmail").toLowerCase();
  const fromName = formValue(formData, "smtpFromName", 120) || "Removals Nationwide Bookings";

  if (!host || /[\s/]/.test(host)) throw new Error("Enter a valid SMTP host name.");
  if (!Number.isInteger(portValue) || portValue < 1 || portValue > 65535) {
    throw new Error("Enter a valid SMTP port.");
  }
  if (!username) throw new Error("Enter the SMTP username.");
  if (!/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(fromEmail)) {
    throw new Error("Enter a valid sender email address.");
  }

  const current = await db
    .prepare("select smtp_password_encrypted from settings where id='site' limit 1")
    .first<{ smtp_password_encrypted: string }>();
  const { env } = await getCloudflareContext({ async: true });
  const encryptedPassword = password
    ? await encryptSmtpPassword(password)
    : current?.smtp_password_encrypted || "";
  if (!encryptedPassword && !env.SMTP_PASSWORD) {
    throw new Error("Enter the SMTP password.");
  }

  await db
    .prepare(
      `update settings set
         smtp_host=?, smtp_port=?, smtp_username=?, smtp_password_encrypted=?,
         smtp_from_email=?, smtp_from_name=?,
         updated_at=strftime('%Y-%m-%dT%H:%M:%fZ','now')
       where id='site'`,
    )
    .bind(host, portValue, username, encryptedPassword, fromEmail, fromName)
    .run();
}
