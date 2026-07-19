import type { Metadata } from "next";
import Link from "next/link";
import BrandLogo from "@/components/layout/BrandLogo";

export const metadata: Metadata = {
  title: "Page Not Found | Removals Nationwide",
  robots: { index: false, follow: true },
};

const services = [
  { label: "House Removals", href: "/house-removals" },
  { label: "Man and Van London", href: "/man-and-van-london" },
  { label: "Office Removals", href: "/office-removals" },
  { label: "Packing Service", href: "/packing-service" },
  { label: "Storage", href: "/storage" },
  { label: "Areas We Cover", href: "/areas" },
];

export default function NotFound() {
  return (
    <main className="flex min-h-screen flex-col items-center justify-center bg-brand-navy px-4 py-16 text-center text-white">
      <Link href="/" className="inline-flex items-center rounded-xl bg-white px-3 py-2">
        <BrandLogo />
      </Link>

      <p className="mt-10 text-sm font-bold uppercase tracking-widest text-brand-red">Error 404</p>
      <h1 className="mt-3 font-heading text-3xl font-extrabold sm:text-4xl">Page Not Found</h1>
      <p className="mx-auto mt-4 max-w-xl text-base leading-relaxed text-white/75">
        The page you are looking for has moved or no longer exists. Use the links below, or get a
        free no-obligation quote for your move.
      </p>

      <div className="mt-8 flex flex-col justify-center gap-3 sm:flex-row">
        <Link
          href="/bookservice#quick-quote"
          className="inline-flex min-h-[44px] items-center justify-center rounded-xl bg-brand-red px-6 py-3 text-sm font-bold text-white transition hover:bg-white hover:text-brand-navy"
        >
          Quick Quote
        </Link>
        <Link
          href="/"
          className="inline-flex min-h-[44px] items-center justify-center rounded-xl border border-white/30 px-6 py-3 text-sm font-bold text-white transition hover:bg-white/10"
        >
          Back to Home
        </Link>
        <a
          href="tel:+442072052525"
          className="inline-flex min-h-[44px] items-center justify-center rounded-xl border border-white/30 px-6 py-3 text-sm font-bold text-white transition hover:bg-white/10"
        >
          020 7205 2525
        </a>
      </div>

      <div className="mt-12 w-full max-w-2xl border-t border-white/15 pt-8">
        <p className="text-xs font-bold uppercase tracking-widest text-white/40">Popular pages</p>
        <ul className="mt-4 flex flex-wrap justify-center gap-3">
          {services.map((s) => (
            <li key={s.href}>
              <Link
                href={s.href}
                className="inline-flex items-center rounded-full bg-white/10 px-4 py-2 text-sm font-semibold text-white/85 transition hover:bg-brand-red hover:text-white"
              >
                {s.label}
              </Link>
            </li>
          ))}
        </ul>
      </div>
    </main>
  );
}
