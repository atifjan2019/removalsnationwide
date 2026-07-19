"use client";
import { useEffect, useState } from "react";
import Link from "next/link";
import { PhoneIcon } from "@/components/ui/icons";
import type { Phone } from "@/lib/settings";

export default function StickyQuoteBar({ phones }: { phones: { london: Phone } }) {
  const [hiddenByCta, setHiddenByCta] = useState(false);

  useEffect(() => {
    const finalCta = document.getElementById("final-cta");
    if (!finalCta) return;
    const observer = new IntersectionObserver(
      ([entry]) => setHiddenByCta(entry.isIntersecting),
      { threshold: 0.1 },
    );
    observer.observe(finalCta);
    return () => observer.disconnect();
  }, []);

  return (
    <div
      aria-hidden={hiddenByCta}
      className={`fixed bottom-0 left-0 right-0 z-40 bg-brand-navy pb-[env(safe-area-inset-bottom)] transition-transform duration-300 sm:hidden ${
        hiddenByCta ? "translate-y-full" : "translate-y-0"
      }`}
    >
      <div className="flex items-center gap-2 px-4 py-2.5">
        <Link
          href="/bookservice#quick-quote"
          className="flex-1 rounded-lg bg-brand-red py-3 text-center text-sm font-bold uppercase tracking-wide text-white transition hover:bg-brand-red-dark active:scale-95 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-white"
        >
          Get a Free Quote
        </Link>
        <a
          href={phones.london.href}
          aria-label={`Call ${phones.london.label}`}
          className="flex h-12 w-12 shrink-0 items-center justify-center rounded-lg border border-white/20 text-white transition hover:bg-white/10 active:scale-95"
        >
          <PhoneIcon className="h-5 w-5" />
        </a>
      </div>
    </div>
  );
}
