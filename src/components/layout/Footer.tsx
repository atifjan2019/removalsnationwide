import Link from "next/link";
import type { SVGProps, ReactNode } from "react";
import Button from "@/components/ui/Button";
import BrandLogo from "@/components/layout/BrandLogo";
import { PhoneIcon, ArrowRight } from "@/components/ui/icons";
import { footerServices, footerCompany } from "@/lib/site";
import type { ResolvedSettings } from "@/lib/settings";

/* ── Social icons ─────────────────────────────────── */
function FacebookIcon(p: SVGProps<SVGSVGElement>) {
  return (
    <svg viewBox="0 0 24 24" fill="currentColor" aria-hidden="true" {...p}>
      <path d="M18 2h-3a5 5 0 0 0-5 5v3H7v4h3v8h4v-8h3l1-4h-4V7a1 1 0 0 1 1-1h3z" />
    </svg>
  );
}

function XIcon(p: SVGProps<SVGSVGElement>) {
  return (
    <svg viewBox="0 0 24 24" fill="currentColor" aria-hidden="true" {...p}>
      <path d="M18.244 2.25h3.308l-7.227 8.26 8.502 11.24H16.17l-4.714-6.231-5.401 6.231H2.747l7.73-8.835L1.254 2.25H8.08l4.713 6.231zm-1.161 17.52h1.833L7.084 4.126H5.117z" />
    </svg>
  );
}

function LinkedInIcon(p: SVGProps<SVGSVGElement>) {
  return (
    <svg viewBox="0 0 24 24" fill="currentColor" aria-hidden="true" {...p}>
      <path d="M16 8a6 6 0 0 1 6 6v7h-4v-7a2 2 0 0 0-4 0v7h-4V9h4v1.5a6 6 0 0 1 2-1.5z" />
      <rect x="2" y="9" width="4" height="12" rx="1" />
      <circle cx="4" cy="4" r="2" />
    </svg>
  );
}

/* ── Data ─────────────────────────────────────────── */
const servicesA = footerServices.slice(0, 6);
const servicesB = footerServices.slice(6);
const companyA = footerCompany.slice(0, 6);
const companyB = footerCompany.slice(6);

/** Built from settings so an emptied URL removes the icon instead of linking nowhere. */
function socialLinks(s: ResolvedSettings) {
  return [
    { name: "Facebook", href: s.urlFacebook, Icon: FacebookIcon },
    { name: "Twitter / X", href: s.urlX, Icon: XIcon },
    { name: "LinkedIn", href: s.urlLinkedin, Icon: LinkedInIcon },
  ].filter((l) => l.href.trim() !== "");
}

/* ── Sub-components ───────────────────────────────── */
function ColHeading({ children }: { children: ReactNode }) {
  return (
    <h3 className="mb-4 text-sm font-bold uppercase tracking-[0.16em] text-white">
      {children}
    </h3>
  );
}

function LinkList({ links }: { links: { label: string; href: string }[] }) {
  return (
    <ul className="space-y-2.5">
      {links.map((link) => (
        <li key={link.label}>
          <Link
            href={link.href}
            className="group inline-flex min-h-[44px] items-center gap-1.5 text-sm text-white/60 transition hover:text-brand-red"
          >
            <ArrowRight className="h-3.5 w-3.5 shrink-0 text-brand-red opacity-0 transition group-hover:opacity-100" />
            {link.label}
          </Link>
        </li>
      ))}
    </ul>
  );
}

/* ── Footer ───────────────────────────────────────── */
export default function Footer({ settings }: { settings: ResolvedSettings }) {
  const { phones } = settings;
  const socials = socialLinks(settings);
  return (
    <footer className="bg-brand-navy text-white">
      <div className="mx-auto max-w-[88rem] px-4 py-14">

        {/* 4-column grid on lg+; single column on mobile */}
        <div className="grid grid-cols-1 gap-10 lg:grid-cols-[1.5fr_2.5fr_2.5fr_1.5fr]">

          {/* Brand */}
          <div>
            <Link href="/" className="inline-flex items-center rounded-xl bg-white px-3 py-2">
              <BrandLogo src={settings.logoUrl} />
            </Link>
            <p className="mt-5 text-sm leading-relaxed text-white/70">
              London, national and international removals and storage.
            </p>
            <div className="mt-6">
              <Button href="/bookservice#quick-quote" variant="red" size="md">
                Get a free quote
              </Button>
            </div>
          </div>

          {/* Services */}
          <div>
            <ColHeading>Services</ColHeading>
            <div className="grid gap-x-8 sm:grid-cols-2">
              <LinkList links={servicesA} />
              <LinkList links={servicesB} />
            </div>
          </div>

          {/* Company */}
          <div>
            <ColHeading>Company</ColHeading>
            <div className="grid gap-x-8 sm:grid-cols-2">
              <LinkList links={companyA} />
              <LinkList links={companyB} />
            </div>
          </div>

          {/* Contact */}
          <div>
            <ColHeading>Contact</ColHeading>
            <ul className="space-y-1">
              <li>
                <a
                  href={phones.london.href}
                  className="inline-flex min-h-[44px] items-center gap-2 text-sm font-semibold text-white/80 transition hover:text-brand-red"
                >
                  <PhoneIcon className="h-4 w-4 shrink-0 text-brand-red" />
                  {phones.london.label}
                </a>
              </li>
              <li>
                <a
                  href={phones.freephone.href}
                  className="inline-flex min-h-[44px] items-center gap-2 text-sm font-semibold text-white/80 transition hover:text-brand-red"
                >
                  <PhoneIcon className="h-4 w-4 shrink-0 text-brand-red" />
                  {phones.freephone.label}
                </a>
              </li>
            </ul>
            <address className="mt-3 not-italic text-sm leading-relaxed text-white/60">
              {settings.addressLine}
            </address>
            <a
              href={settings.mailto}
              className="mt-2 inline-flex min-h-[44px] items-center text-sm font-semibold text-white/80 transition hover:text-brand-red"
            >
              {settings.email}
            </a>

            {/* Social icons */}
            <div className="mt-5 flex items-center gap-3">
              {socials.map(({ name, href, Icon }) => (
                <a
                  key={name}
                  href={href}
                  target="_blank"
                  rel="noopener noreferrer"
                  aria-label={`Removals Nationwide on ${name}`}
                  className="flex h-11 w-11 items-center justify-center rounded-full bg-white/10 text-white/70 transition hover:bg-brand-red hover:text-white"
                >
                  <Icon className="h-5 w-5" />
                </a>
              ))}
            </div>
          </div>
        </div>

      </div>

      {/* Bottom bar */}
      <div className="border-t border-white/10">
        <div className="mx-auto flex max-w-[88rem] flex-col items-center justify-between gap-3 px-4 py-5 text-center text-xs text-white/50 sm:flex-row sm:text-left">
          <p>{settings.companyReg}</p>
          <div className="flex items-center gap-4">
            <Link href="/terms-and-conditions" className="transition hover:text-brand-red">
              Terms and Conditions
            </Link>
            <Link href="/privacy-policy" className="transition hover:text-brand-red">
              Privacy Policy
            </Link>
          </div>
        </div>
      </div>
    </footer>
  );
}
