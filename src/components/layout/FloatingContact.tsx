"use client";

import { useEffect, useState } from "react";
import { WhatsAppIcon, ArrowUp } from "@/components/ui/icons";

/** Client component, so the WhatsApp details arrive as props from the layout. */
export default function FloatingContact({
  whatsapp,
}: {
  whatsapp: { href: string; label: string };
}) {
  const [showTop, setShowTop] = useState(false);

  useEffect(() => {
    const onScroll = () => setShowTop(window.scrollY > 600);
    onScroll();
    window.addEventListener("scroll", onScroll, { passive: true });
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  return (
    <div className="fixed bottom-[calc(env(safe-area-inset-bottom)+5rem)] right-5 z-40 flex flex-col items-end gap-3 sm:bottom-5">
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
        className="group flex items-center gap-2 rounded-full bg-[#25D366] py-3 pl-3 pr-4 text-white shadow-lg shadow-black/20 transition hover:bg-[#1da851]"
        aria-label="Chat with us on WhatsApp"
      >
        <WhatsAppIcon className="h-7 w-7" />
        <span className="max-w-0 overflow-hidden whitespace-nowrap text-sm font-semibold opacity-0 transition-all duration-300 group-hover:max-w-[140px] group-hover:opacity-100">
          {whatsapp.label}
        </span>
      </a>
    </div>
  );
}
