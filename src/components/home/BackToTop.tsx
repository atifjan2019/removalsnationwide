"use client";
import { useEffect, useState } from "react";
import { ArrowUp } from "@/components/ui/icons";

export default function BackToTop() {
  const [visible, setVisible] = useState(false);

  useEffect(() => {
    const onScroll = () => setVisible(window.scrollY > 600);
    window.addEventListener("scroll", onScroll, { passive: true });
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  return (
    <button
      type="button"
      onClick={() => window.scrollTo({ top: 0, behavior: "smooth" })}
      aria-label="Back to top"
      className={`fixed bottom-[4.5rem] right-4 z-40 flex h-10 w-10 items-center justify-center rounded-full bg-brand-navy/90 text-white shadow-md backdrop-blur-sm transition-all duration-300 hover:bg-brand-navy focus-visible:outline focus-visible:outline-2 focus-visible:outline-brand-red sm:bottom-6 sm:right-6 sm:h-11 sm:w-11 ${
        visible
          ? "opacity-100 translate-y-0 pointer-events-auto"
          : "opacity-0 translate-y-3 pointer-events-none"
      }`}
    >
      <ArrowUp className="h-4 w-4 sm:h-5 sm:w-5" />
    </button>
  );
}
