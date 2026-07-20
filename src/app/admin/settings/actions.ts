"use server";

import { revalidatePath } from "next/cache";
import { requireDb } from "@/lib/cms";
import { assertAdmin } from "@/lib/admin-auth";
import { logActivity } from "@/lib/admin-dashboard";
import { DEFAULT_SETTINGS, getSettings, type SiteSettings } from "@/lib/settings";
import { getSmtpConfiguration, saveSmtpSettings } from "@/lib/smtp-settings";
import { sendSmtpEmail } from "@/lib/smtp";

/** Trim a required value, falling back to its built-in default when blank. */
function clean(value: FormDataEntryValue | null, fallback: string): string {
  const v = typeof value === "string" ? value.trim() : "";
  return v === "" ? fallback : v;
}

/** Trim an optional value. Blank deliberately means "hide it". */
function cleanOptional(value: FormDataEntryValue | null): string {
  return typeof value === "string" ? value.trim() : "";
}

/**
 * Normalise a URL field: allow blank (meaning "hide this link"), otherwise make
 * sure it has a scheme so the anchor is not treated as a relative path.
 */
function cleanUrl(value: FormDataEntryValue | null): string {
  const v = typeof value === "string" ? value.trim() : "";
  if (v === "") return "";
  if (/^https?:\/\//i.test(v)) return v;
  return `https://${v}`;
}

export type SettingsState = { ok: boolean; message: string };

export async function testSmtpSettings(
  _prev: SettingsState,
  formData: FormData,
): Promise<SettingsState> {
  await assertAdmin();
  const current = await getSmtpConfiguration();
  const value = (name: string, fallback = "") => {
    const submitted = String(formData.get(name) ?? "").trim();
    return submitted || fallback;
  };
  const port = Number(value("smtpPort", current.port));
  const configuration = {
    host: value("smtpHost", current.host).replace(/^smtps?:\/\//i, "").replace(/\/$/, ""),
    port,
    username: value("smtpUsername", current.username),
    password: value("smtpPassword", current.password),
    fromEmail: value("smtpFromEmail", current.fromEmail).toLowerCase(),
    fromName: value("smtpFromName", current.fromName),
  };
  const recipient = value("smtpTestEmail").toLowerCase();

  if (!configuration.host || /[\s/]/.test(configuration.host)) {
    return { ok: false, message: "Enter a valid SMTP host name." };
  }
  if (!Number.isInteger(port) || port < 1 || port > 65535) {
    return { ok: false, message: "Enter a valid SMTP port." };
  }
  if (!configuration.username || !configuration.password) {
    return { ok: false, message: "Enter the SMTP username and password." };
  }
  if (!/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(configuration.fromEmail)) {
    return { ok: false, message: "Enter a valid sender email address." };
  }
  if (!/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(recipient)) {
    return { ok: false, message: "Enter a valid test recipient email address." };
  }

  try {
    await sendSmtpEmail({
      ...configuration,
      to: recipient,
      replyTo: "atifjan2019@gmail.com",
      subject: "SMTP test – Removals Nationwide",
      text: "Your SMTP configuration is working. This test email was sent from the Removals Nationwide admin settings page.",
      html: '<div style="font-family:Arial,sans-serif;color:#17233c"><h1>SMTP test successful</h1><p>Your SMTP configuration is working. This test email was sent from the Removals Nationwide admin settings page.</p></div>',
    });
    await logActivity("SMTP Tested", `Test email delivered to ${recipient}`, "settings");
    return { ok: true, message: `Test email sent successfully to ${recipient}.` };
  } catch (error) {
    const reason = error instanceof Error ? error.message : "Unknown SMTP error";
    console.error("SMTP settings test failed", error);
    return { ok: false, message: `SMTP test failed: ${reason.slice(0, 500)}` };
  }
}

export async function saveSettings(
  _prev: SettingsState,
  formData: FormData,
): Promise<SettingsState> {
  await assertAdmin();
  let db: D1Database;
  try {
    db = await requireDb();
  } catch (err) {
    return { ok: false, message: (err as Error).message };
  }

  // Uploads are optional: an empty file input means "keep what is already set",
  // so saving text fields never silently clears the logo.
  const current = await getSettings();
  const warnings: string[] = [];

  async function branding(field: "logo" | "favicon" | "footerLogo", existing: string): Promise<string> {
    const kind = field === "footerLogo" ? "footer-logo" : field;
    if (formData.get(`${field}Clear`) === "on") {
      await db.prepare("delete from site_assets where kind=?").bind(kind).run();
      return "";
    }
    const file = formData.get(`${field}File`);
    if (!(file instanceof File) || file.size === 0) return existing;
    if (file.size > 2 * 1024 * 1024 || !["image/png", "image/jpeg", "image/svg+xml", "image/webp", "image/x-icon", "image/vnd.microsoft.icon"].includes(file.type)) {
      warnings.push(`${field}: use a supported image under 2 MB`);
      return existing;
    }
    await db.prepare(`insert into site_assets (kind,data,mime_type,updated_at) values (?,?,?,strftime('%Y-%m-%dT%H:%M:%fZ','now')) on conflict(kind) do update set data=excluded.data,mime_type=excluded.mime_type,updated_at=excluded.updated_at`).bind(kind, await file.arrayBuffer(), file.type).run();
    // A new URL makes browsers discard their notoriously persistent favicon
    // cache immediately after a replacement upload.
    return `/api/site-assets/${kind}?v=${Date.now()}`;
  }

  const logoUrl = await branding("logo", current.logoUrl);
  const faviconUrl = await branding("favicon", current.faviconUrl);
  const footerLogoUrl = await branding("footerLogo", current.footerLogoUrl);

  const d = DEFAULT_SETTINGS;
  const next: SiteSettings = {
    logoUrl,
    faviconUrl,
    footerLogoUrl,
    phoneFreephone: clean(formData.get("phoneFreephone"), d.phoneFreephone),
    phoneLondon: clean(formData.get("phoneLondon"), d.phoneLondon),
    email: cleanOptional(formData.get("email")),
    // Store digits only so the wa.me link is always well formed.
    whatsappNumber: clean(formData.get("whatsappNumber"), d.whatsappNumber).replace(/\D/g, ""),
    whatsappLabel: clean(formData.get("whatsappLabel"), d.whatsappLabel),
    addressLine: clean(formData.get("addressLine"), d.addressLine),
    companyName: clean(formData.get("companyName"), d.companyName),
    companyReg: clean(formData.get("companyReg"), d.companyReg),
    urlFacebook: cleanUrl(formData.get("urlFacebook")),
    urlX: cleanUrl(formData.get("urlX")),
    urlLinkedin: cleanUrl(formData.get("urlLinkedin")),
    urlTrustpilot: cleanUrl(formData.get("urlTrustpilot")),
    urlInstagram: cleanUrl(formData.get("urlInstagram")),
    urlYoutube: cleanUrl(formData.get("urlYoutube")),
    urlTiktok: cleanUrl(formData.get("urlTiktok")),
    showPhone: formData.get("showPhone") === "on",
  };

  try {
    // Single fixed row: insert on first save, overwrite on every save after.
    await db
      .prepare(
        `insert into settings (
           id, phone_freephone, phone_london, email, whatsapp_number,
           whatsapp_label, address_line, company_name, company_reg,
           url_facebook, url_x, url_linkedin, url_trustpilot,
           logo_url, favicon_url, footer_logo_url, show_phone,
           url_instagram, url_youtube, url_tiktok, updated_at
         ) values ('site', ?, ?, ?, ?, ?, ?, ?, ?, ?, ?, ?, ?, ?, ?, ?, ?, ?, ?, ?, strftime('%Y-%m-%dT%H:%M:%fZ','now'))
         on conflict(id) do update set
           phone_freephone = excluded.phone_freephone,
           phone_london    = excluded.phone_london,
           email           = excluded.email,
           whatsapp_number = excluded.whatsapp_number,
           whatsapp_label  = excluded.whatsapp_label,
           address_line    = excluded.address_line,
           company_name    = excluded.company_name,
           company_reg     = excluded.company_reg,
           url_facebook    = excluded.url_facebook,
           url_x           = excluded.url_x,
           url_linkedin    = excluded.url_linkedin,
           url_trustpilot  = excluded.url_trustpilot,
           logo_url        = excluded.logo_url,
           favicon_url     = excluded.favicon_url,
           footer_logo_url = excluded.footer_logo_url,
           show_phone      = excluded.show_phone,
           url_instagram   = excluded.url_instagram,
           url_youtube     = excluded.url_youtube,
           url_tiktok      = excluded.url_tiktok,
           updated_at      = excluded.updated_at`,
      )
      .bind(
        next.phoneFreephone,
        next.phoneLondon,
        next.email,
        next.whatsappNumber,
        next.whatsappLabel,
        next.addressLine,
        next.companyName,
        next.companyReg,
        next.urlFacebook,
        next.urlX,
        next.urlLinkedin,
        next.urlTrustpilot,
        next.logoUrl,
        next.faviconUrl,
        next.footerLogoUrl,
        next.showPhone ? 1 : 0,
        next.urlInstagram,
        next.urlYoutube,
        next.urlTiktok,
      )
      .run();
    await saveSmtpSettings(db, formData);
  } catch (err) {
    return { ok: false, message: `Could not save: ${(err as Error).message}` };
  }

  // Contact details appear in the shared layout, so every page is affected.
  revalidatePath("/", "layout");
  await logActivity("Settings Updated", "Site-wide brand and contact settings updated", "site");

  // A failed upload should not read as a clean save — the text fields did save,
  // but the file did not, and silently succeeding would hide that.
  if (warnings.length) {
    return {
      ok: false,
      message: `Settings saved, but some uploads failed — ${warnings.join("; ")}`,
    };
  }

  return { ok: true, message: "Settings saved. Changes are live on the site." };
}
