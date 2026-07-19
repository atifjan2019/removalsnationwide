import "server-only";
import { getDb } from "@/lib/d1";
import {
  DEFAULT_SETTINGS,
  resolve,
  type SiteSettings,
  type ResolvedSettings,
} from "@/lib/settings-shared";

/**
 * Editable site-wide contact details, stored as a single row in D1 and managed
 * from /admin/settings.
 *
 * Types, defaults and pure helpers live in settings-shared.ts so client
 * components can use them; this module holds the D1 reads and stays
 * server-only.
 */
export * from "@/lib/settings-shared";

/**
 * Two different meanings of "empty", deliberately:
 *
 *  - Required fields (phones, email, address, company) fall back to the default
 *    when blank, because a blank phone number on a removals site is a bug, not
 *    an intention.
 *  - Social URLs and branding images are taken literally. Blank means "hide
 *    this link" / "use the built-in mark", which is what the admin form
 *    promises. Falling back here would make it impossible to remove a profile
 *    that does not exist yet.
 *
 * When there is no row at all, the caller returns DEFAULT_SETTINGS wholesale,
 * so a fresh database still shows the standard set of links.
 */
function coalesce(row: Record<string, unknown>): SiteSettings {
  const str = (key: string) => (typeof row[key] === "string" ? (row[key] as string) : "");
  const required = (key: string, fallback: string) => {
    const v = str(key).trim();
    return v === "" ? fallback : v;
  };
  const optional = (key: string) => str(key).trim();

  const d = DEFAULT_SETTINGS;
  return {
    phoneFreephone: required("phone_freephone", d.phoneFreephone),
    phoneLondon: required("phone_london", d.phoneLondon),
    email: required("email", d.email),
    whatsappNumber: required("whatsapp_number", d.whatsappNumber),
    whatsappLabel: required("whatsapp_label", d.whatsappLabel),
    addressLine: required("address_line", d.addressLine),
    companyName: required("company_name", d.companyName),
    companyReg: required("company_reg", d.companyReg),
    urlFacebook: optional("url_facebook"),
    urlX: optional("url_x"),
    urlLinkedin: optional("url_linkedin"),
    urlTrustpilot: optional("url_trustpilot"),
    logoUrl: optional("logo_url"),
    faviconUrl: optional("favicon_url"),
  };
}

/** Raw settings, defaults-filled. Never throws — the site must always render. */
export async function getSettings(): Promise<SiteSettings> {
  const db = await getDb();
  if (!db) return DEFAULT_SETTINGS;
  try {
    const row = await db
      .prepare("select * from settings where id = 'site' limit 1")
      .first();
    return row ? coalesce(row as Record<string, unknown>) : DEFAULT_SETTINGS;
  } catch {
    return DEFAULT_SETTINGS;
  }
}

/** Settings with hrefs derived. This is what layouts pass to components. */
export async function getResolvedSettings(): Promise<ResolvedSettings> {
  return resolve(await getSettings());
}
