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
  source: "settings" | "env" | "none";
};

export const DEFAULT_SETTINGS: SiteSettings = {
  phoneFreephone: "",
  phoneLondon: "0736 054 4819",
  email: "info@removalsnationwide.uk",
  whatsappNumber: "447360544819",
  whatsappLabel: "Chat with us",
  addressLine:
    "Unit C1A Purfleet Industrial Park, Kerry Avenue, Purfleet, RM15 4YA",
  companyName: "Removals Nationwide",
  companyReg: "© All rights reserved.",
  // Left blank deliberately. These feed both the footer icons and the
  // schema.org sameAs list, so an unverified URL becomes a public claim that
  // the entity owns a profile. Fill them in from the real profiles only.
  urlFacebook: "",
  urlX: "",
  urlLinkedin: "",
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

/** Compare two numbers the way a caller would: digits only, 0 and +44 equal. */
function sameNumber(a: string, b: string): boolean {
  const norm = (v: string) => {
    const d = (v ?? "").replace(/[^\d+]/g, "");
    if (!d) return "";
    if (d.startsWith("+44")) return `0${d.slice(3)}`;
    if (d.startsWith("44") && !d.startsWith("440")) return `0${d.slice(2)}`;
    return d;
  };
  const na = norm(a);
  return na !== "" && na === norm(b);
}

/**
 * Everything a component needs, derived once so callers never rebuild hrefs.
 *
 * `phoneList` is the list to render wherever more than one number is shown. It
 * drops blanks and collapses duplicates, so setting both numbers to the same
 * line no longer prints it twice in the top bar, footer and every CTA band.
 */
export type ResolvedSettings = SiteSettings & {
  phones: { freephone: Phone; london: Phone };
  /** Primary number. Always populated when any number is configured. */
  phonePrimary: Phone;
  /** Deduplicated, blank-free list of every number worth displaying. */
  phoneList: Phone[];
  whatsapp: { href: string; label: string };
  mailto: string;
};

export function resolve(s: SiteSettings): ResolvedSettings {
  const london: Phone = { label: s.phoneLondon, href: telHref(s.phoneLondon) };
  const freephone: Phone = {
    label: s.phoneFreephone,
    href: telHref(s.phoneFreephone),
  };

  const phoneList: Phone[] = [];
  for (const phone of [london, freephone]) {
    if (!phone.label.trim()) continue;
    if (phoneList.some((p) => sameNumber(p.label, phone.label))) continue;
    phoneList.push(phone);
  }

  return {
    ...s,
    phones: { freephone, london },
    phonePrimary: phoneList[0] ?? london,
    phoneList,
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
  // A blank needle would match at every character boundary and shred the
  // string, so every swap is guarded on both the token and its replacement.
  const swap = (input: string, from: string, to: string) =>
    from && to && from !== to ? input.replaceAll(from, to) : input;

  let out = swap(text, DEFAULT_SETTINGS.phoneLondon, s.phones.london.label);
  out = swap(out, DEFAULT_SETTINGS.phoneFreephone, s.phones.freephone.label);
  return swap(out, DEFAULT_SETTINGS.email, s.email);
}
