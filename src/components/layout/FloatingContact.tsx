"use client";

import { useEffect, useRef, useState } from "react";
import { WhatsAppIcon, ArrowUp } from "@/components/ui/icons";

/** Client component, so the WhatsApp details arrive as props from the layout. */
export default function FloatingContact({
  whatsapp,
}: {
  whatsapp: { href: string; label: string };
}) {
  const [showTop, setShowTop] = useState(false);
  // On small screens the FAB is lifted above the sticky mobile bar, which places
  // it over the right edge of the content column, so it can cover body text.
  // It defaults to HIDDEN — matching "at the top of the page" — so it never
  // covers first-screen intro text on initial paint (before any scroll event
  // fires). It stays hidden in the top region (where page intros live) and while
  // scrolling DOWN; a deliberate scroll-up further down the page reveals it.
  // Disabled at lg+, where centred content leaves wide gutters clear of the FAB.
  const [hidden, setHidden] = useState(true);
  const lastY = useRef(0);

  useEffect(() => {
    lastY.current = window.scrollY;
    const onScroll = () => {
      const y = window.scrollY;
      setShowTop(y > 600);
      const dy = y - lastY.current;
      if (Math.abs(dy) >= 6) {
        setHidden(y < window.innerHeight * 0.6 || dy > 0);
        lastY.current = y;
      }
    };
    onScroll();
    window.addEventListener("scroll", onScroll, { passive: true });
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  return (
    <div
      className={`fixed bottom-[calc(env(safe-area-inset-bottom)+5rem)] right-4 z-40 flex flex-col items-end gap-3 transition-transform duration-300 motion-reduce:transition-none sm:bottom-5 sm:right-5 lg:!translate-x-0 ${
        hidden ? "translate-x-[150%]" : "translate-x-0"
      }`}
    >
      <button
        type="button"
        aria-label="Back to top"
        onClick={() => window.scrollTo({ top: 0, behavior: "smooth" })}
        className={`flex h-12 w-12 items-center justify-center rounded-full bg-brand-navy text-white shadow-lg transition-all duration-300 hover:bg-brand-navy-dark ${
          showTop ? "translate-y-0 opacity-100" : "pointer-events-none translate-y-3 opacity-0"
        }`}
      >
        <ArrowUp className="h-5 w-5" />
      </button>

      <a
        href={whatsapp.href}
        target="_blank"
        rel="noopener noreferrer"
        // Compact circle on mobile (small footprint over content); expands to a
        // labelled pill on hover at sm+ where there is room.
        className="group flex h-14 w-14 items-center justify-center rounded-full bg-[#25D366] text-white shadow-lg shadow-black/20 transition hover:bg-[#1da851] sm:h-auto sm:w-auto sm:justify-start sm:py-3 sm:pl-3 sm:pr-4"
        aria-label="Chat with us on WhatsApp"
      >
        <WhatsAppIcon className="h-7 w-7 shrink-0" />
        <span className="max-w-0 overflow-hidden whitespace-nowrap text-sm font-semibold opacity-0 transition-all duration-300 group-hover:ml-2 group-hover:max-w-[140px] group-hover:opacity-100">
          {whatsapp.label}
        </span>
      </a>
    </div>
  );
}
