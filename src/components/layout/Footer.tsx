import Link from "next/link";
import Image from "next/image";
import {
  phones,
  address,
  company,
  footerServices,
  footerCompany,
} from "@/lib/site";
import { PhoneIcon, ArrowRight } from "@/components/ui/icons";

function LinkColumn({
  title,
  links,
}: {
  title: string;
  links: { label: string; href: string }[];
}) {
  return (
    <div>
      <h3 className="mb-4 text-sm font-bold uppercase tracking-[0.16em] text-white">
        {title}
      </h3>
      <ul className="space-y-2.5">
        {links.map((link) => (
          <li key={link.label}>
            <Link
              href={link.href}
              className="group inline-flex items-center gap-1.5 text-sm text-white/70 transition hover:text-brand-orange"
            >
              <ArrowRight className="h-3.5 w-3.5 text-brand-orange opacity-0 transition group-hover:opacity-100" />
              {link.label}
            </Link>
          </li>
        ))}
      </ul>
    </div>
  );
}

export default function Footer() {
  return (
    <footer className="bg-brand-charcoal text-white">
      <div className="mx-auto max-w-[88rem] px-4 py-14">
        <div className="grid grid-cols-1 gap-10 sm:grid-cols-2 lg:grid-cols-4">
          <LinkColumn title="Services" links={footerServices} />
          <LinkColumn title="Company" links={footerCompany} />

          <div>
            <h3 className="mb-4 text-sm font-bold uppercase tracking-[0.16em] text-white">
              Phones
            </h3>
            <ul className="space-y-3">
              <li>
                <a
                  href={phones.london.href}
                  className="inline-flex items-center gap-2 text-sm text-white/80 transition hover:text-brand-orange"
                >
                  <PhoneIcon className="h-4 w-4 text-brand-orange" />
                  {phones.london.label}
                </a>
              </li>
              <li>
                <a
                  href={phones.freephone.href}
                  className="inline-flex items-center gap-2 text-sm text-white/80 transition hover:text-brand-orange"
                >
                  <PhoneIcon className="h-4 w-4 text-brand-orange" />
                  {phones.freephone.label}
                </a>
              </li>
            </ul>

            <div className="mt-6">
              <Image
                src="/logo.png"
                alt="Top Removals London"
                width={142}
                height={113}
                className="h-12 w-auto rounded bg-white p-1.5"
              />
            </div>
          </div>

          <div>
            <h3 className="mb-4 text-sm font-bold uppercase tracking-[0.16em] text-white">
              Address
            </h3>
            <address className="not-italic text-sm leading-relaxed text-white/70">
              {address.line}
            </address>
          </div>
        </div>
      </div>

      <div className="border-t border-white/10">
        <div className="mx-auto flex max-w-[88rem] flex-col items-center justify-between gap-3 px-4 py-5 text-center text-xs text-white/60 sm:flex-row sm:text-left">
          <p>{company.registration}</p>
          <div className="flex items-center gap-4">
            <Link href="/terms-and-conditions" className="transition hover:text-brand-orange">
              Terms &amp; Conditions
            </Link>
            <Link href="/privacy-policy" className="transition hover:text-brand-orange">
              Privacy Policy
            </Link>
          </div>
        </div>
      </div>
    </footer>
  );
}
