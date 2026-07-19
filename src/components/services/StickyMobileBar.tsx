"use client";
import { useEffect, useState } from "react";
import Link from "next/link";
import { PhoneIcon } from "@/components/ui/icons";
import { useSettings } from "@/components/providers/SettingsProvider";

interface Props {
  /** ID of the element to observe. Bar slides up when this element leaves the viewport.
   *  When omitted the bar is always visible. */
  sentinelId?: string;
}

/**
 * Mobile-only sticky CTA bar (hidden on sm and above).
 * Slides up once the sentinel element scrolls out of view.
 * When sentinelId is omitted the bar is always visible.
 * Respects prefers-reduced-motion.
 */
export default function StickyMobileBar({ sentinelId }: Props) {
  // From context rather than a prop: this renders on ~29 pages and a missed
  // prop would silently show the old hardcoded number.
  const phone = useSettings().phones.london;
  const [visible, setVisible] = useState(!sentinelId);

  useEffect(() => {
    if (!sentinelId) { setVisible(true); return; }
    const sentinel = document.getElementById(sentinelId);
    if (!sentinel) { setVisible(true); return; }
    const observer = new IntersectionObserver(
      ([entry]) => setVisible(!entry.isIntersecting),
      { threshold: 0 },
    );
    observer.observe(sentinel);
    return () => observer.disconnect();
  }, [sentinelId]);

  return (
    <div
      aria-label="Quick contact actions"
      className={[
        "fixed inset-x-0 bottom-0 z-50 sm:hidden",
        "bg-brand-navy pb-[env(safe-area-inset-bottom,_0px)]",
        "shadow-[0_-4px_20px_rgba(0,0,0,.35)] border-t border-white/10",
        "transition-transform duration-300 motion-reduce:transition-none",
        visible ? "translate-y-0" : "translate-y-full",
      ].join(" ")}
    >
      <div className="flex gap-3 px-4 py-3">
        <Link
          href="/bookservice#quick-quote"
          className="flex min-h-[44px] flex-1 items-center justify-center rounded-md bg-brand-red text-sm font-bold uppercase tracking-wide text-white transition hover:bg-brand-red-dark active:scale-95 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-white"
        >
          Get a Free Quote
        </Link>
        <a
          href={phone.href}
          aria-label={`Call ${phone.label}`}
          className="flex h-[44px] w-[44px] shrink-0 items-center justify-center rounded-md border border-white/30 text-white transition hover:bg-white/10 active:scale-95 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-white"
        >
          <PhoneIcon className="h-5 w-5" />
        </a>
      </div>
    </div>
  );
}
