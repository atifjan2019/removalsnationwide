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
  // Visibility model (small screens only; the FAB is always shown at lg+ where
  // the centred content leaves clear gutters):
  //   - Visible by default and whenever the page is at rest, near the top, or
  //     being scrolled UP.
  //   - Hidden ONLY while the reader is actively scrolling DOWN, so it isn't
  //     dragged across the text being read.
  //   - A short idle timer ALWAYS returns it to visible once scrolling stops,
  //     so it can never get stuck off-screen.
  // This is deterministic: the resting state is always "visible", independent of
  // page length, hydration timing, or a browser-restored scroll position — the
  // two failure modes (stuck-hidden on short pages, and the reload race) both
  // came from gating visibility on `innerHeight`/the mount-time scrollY, which
  // this no longer does.
  const [hidden, setHidden] = useState(false);
  const lastY = useRef(0);
  const idle = useRef<ReturnType<typeof setTimeout> | undefined>(undefined);

  useEffect(() => {
    lastY.current = window.scrollY;
    let raf = 0;
    const update = () => {
      raf = 0;
      const y = window.scrollY;
      setShowTop(y > 500);
      const dy = y - lastY.current;
      lastY.current = y;
      if (dy > 4) setHidden(true); // actively scrolling down
      else if (dy < -4) setHidden(false); // scrolling up
      // Guarantee a return to visible shortly after scrolling stops.
      clearTimeout(idle.current);
      idle.current = setTimeout(() => setHidden(false), 450);
    };
    const onScroll = () => {
      if (!raf) raf = requestAnimationFrame(update);
    };
    update(); // sync showTop for any browser-restored scroll position
    window.addEventListener("scroll", onScroll, { passive: true });
    return () => {
      window.removeEventListener("scroll", onScroll);
      cancelAnimationFrame(raf);
      clearTimeout(idle.current);
    };
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
