import Link from "next/link";
import BrandLogo from "@/components/layout/BrandLogo";
import { PhoneIcon, WhatsAppIcon } from "@/components/ui/icons";
import type { ResolvedSettings } from "@/lib/settings-shared";

type BookingHeaderProps = Pick<ResolvedSettings, "logoUrl" | "phones" | "whatsapp">;

export default function BookingHeader({
  logoUrl,
  phones,
  whatsapp,
}: BookingHeaderProps) {
  return (
    <header className="border-b border-black/10 bg-white shadow-sm">
      <div className="mx-auto flex max-w-3xl items-center justify-between gap-3 px-4 py-3">
        <Link
          href="/"
          aria-label="Removals Nationwide home"
          className="min-w-0 shrink transition-opacity hover:opacity-75"
        >
          <BrandLogo src={logoUrl} size="sm" />
        </Link>

        <div className="flex shrink-0 items-center gap-2">
          <a
            href={phones.freephone.href}
            aria-label={`Call us on ${phones.freephone.label}`}
            className="inline-flex min-h-10 items-center justify-center gap-2 rounded-lg bg-brand-red px-3 text-sm font-bold text-white transition hover:bg-black sm:px-4"
          >
            <PhoneIcon className="h-5 w-5" />
            <span className="hidden sm:inline">Call</span>
          </a>
          <a
            href={whatsapp.href}
            target="_blank"
            rel="noopener noreferrer"
            aria-label="Chat with us on WhatsApp"
            className="inline-flex min-h-10 items-center justify-center gap-2 rounded-lg bg-[#25D366] px-3 text-sm font-bold text-white transition hover:bg-[#1da851] sm:px-4"
          >
            <WhatsAppIcon className="h-5 w-5" />
            <span className="hidden sm:inline">WhatsApp</span>
          </a>
        </div>
      </div>
    </header>
  );
}
