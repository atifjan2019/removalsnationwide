import "server-only";
import { getDb } from "@/lib/d1";

/**
 * Editable site-wide contact details, stored as a single row in D1 and managed
 * from /admin/settings.
 *
 * These used to be hardcoded constants in src/lib/site.ts. Those constants are
 * still the defaults below, so if D1 is empty or unreachable the site renders
 * exactly what it did before rather than showing blank phone numbers.
 */
export type SiteSettings = {
  phoneFreephone: string;
  phoneLondon: string;
  email: string;
  /** Digits only, e.g. "442072052525". Used to build the wa.me link. */
  whatsappNumber: string;
  whatsappLabel: string;
  addressLine: string;
  companyName: string;
  companyReg: string;
  urlFacebook: string;
  urlX: string;
  urlLinkedin: string;
  urlTrustpilot: string;
};

export const DEFAULT_SETTINGS: SiteSettings = {
  phoneFreephone: "0800 046 7877",
  phoneLondon: "020 7205 2525",
  email: "info@removalsnationwide.uk",
  whatsappNumber: "442072052525",
  whatsappLabel: "Chat with us",
  addressLine:
    "Unit C1A Purfleet Industrial Park, Kerry Avenue, Purfleet, RM15 4YA",
  companyName: "Removals Nationwide",
  companyReg:
    "© All rights reserved. Registered in England and Wales Company No. 6874216",
  urlFacebook: "https://www.facebook.com/removalsnationwide",
  urlX: "https://x.com/removalsnationwide",
  urlLinkedin: "https://www.linkedin.com/company/removals-nationwide",
  urlTrustpilot: "https://uk.trustpilot.com/review/removalsnationwide.uk",
};

/** A phone number as the UI needs it: display label plus a tel: href. */
export type Phone = { label: string; href: string };

/**
 * Build a tel: href from a display label. Strips spaces and punctuation, and
 * converts a leading 0 to +44 so the link works from outside the UK.
 */
export function telHref(label: string): string {
  const digits = (label ?? "").replace(/[^\d+]/g, "");
  if (!digits) return "";
  if (digits.startsWith("+")) return `tel:${digits}`;
  if (digits.startsWith("0")) return `tel:+44${digits.slice(1)}`;
  return `tel:${digits}`;
}

/** Everything a component needs, derived once so callers never rebuild hrefs. */
export type ResolvedSettings = SiteSettings & {
  phones: { freephone: Phone; london: Phone };
  whatsapp: { href: string; label: string };
  mailto: string;
};

export function resolve(s: SiteSettings): ResolvedSettings {
  return {
    ...s,
    phones: {
      freephone: { label: s.phoneFreephone, href: telHref(s.phoneFreephone) },
      london: { label: s.phoneLondon, href: telHref(s.phoneLondon) },
    },
    whatsapp: {
      href: `https://wa.me/${(s.whatsappNumber ?? "").replace(/\D/g, "")}`,
      label: s.whatsappLabel,
    },
    mailto: `mailto:${s.email}`,
  };
}

/**
 * Two different meanings of "empty", deliberately:
 *
 *  - Required fields (phones, email, address, company) fall back to the default
 *    when blank, because a blank phone number on a removals site is a bug, not
 *    an intention.
 *  - Social URLs are taken literally. Blank means "hide this link", which is
 *    what the admin form promises. Falling back here would make it impossible
 *    to remove a profile that does not exist yet.
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
