/**
 * The pure half of the settings module: types, defaults and derivations, with
 * no D1 access. Client components import from here — settings.ts is marked
 * server-only and would fail their build. settings.ts re-exports all of this,
 * so server code keeps importing from one place.
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
  urlInstagram: string;
  urlYoutube: string;
  urlTiktok: string;
  showPhone: boolean;
  /** Public R2 URL of the uploaded logo. Empty means use the built-in mark. */
  logoUrl: string;
  /** Public R2 URL of the uploaded favicon. Empty means use the bundled icon. */
  faviconUrl: string;
  footerLogoUrl: string;
};

export type SmtpSettingsSummary = {
  host: string;
  port: string;
  username: string;
  fromEmail: string;
  fromName: string;
  passwordConfigured: boolean;
  source: "settings" | "cloudflare" | "none";
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
  urlTrustpilot: "",
  urlInstagram: "",
  urlYoutube: "",
  urlTiktok: "",
  showPhone: true,
  logoUrl: "",
  faviconUrl: "",
  footerLogoUrl: "",
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
    mailto: s.email ? `mailto:${s.email}` : "",
  };
}

/** Defaults in resolved form — the fallback for client components that render
 *  before a page passes real settings down. */
export const DEFAULT_RESOLVED: ResolvedSettings = resolve(DEFAULT_SETTINGS);

/**
 * Replaces the default phone numbers and email inside a prose string (FAQ
 * answers, CTA subtext) with the configured ones. Content authors write the
 * canonical numbers; this keeps rendered prose in sync when they change.
 */
export function withContacts(text: string, s: ResolvedSettings): string {
  return text
    .replaceAll(DEFAULT_SETTINGS.phoneLondon, s.phones.london.label)
    .replaceAll(DEFAULT_SETTINGS.phoneFreephone, s.phones.freephone.label)
    .replaceAll(DEFAULT_SETTINGS.email, s.email);
}
