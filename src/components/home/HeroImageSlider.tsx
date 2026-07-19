"use client";
import { useCallback, useEffect, useRef, useState } from "react";
import Image from "next/image";
import { ChevronLeft, ChevronRight } from "@/components/ui/icons";
import { REMOTE_IMAGES } from "@/lib/remote-images";

type Slide = { src: string; alt: string };

const SLIDES: Slide[] = [
  {
    src: REMOTE_IMAGES.movingVan,
    alt: "Removal van ready for a London house move",
  },
  {
    src: REMOTE_IMAGES.moversLoading,
    alt: "Professional movers loading furniture for transport",
  },
  {
    src: REMOTE_IMAGES.homeMove,
    alt: "Moving boxes being prepared inside a home",
  },
];

const INTERVAL_MS = 5500;
const COUNT = SLIDES.length;

export default function HeroImageSlider() {
  const [current, setCurrent] = useState(0);
  const [paused, setPaused] = useState(false);
  const touchStartX = useRef<number | null>(null);

  const next = useCallback(() => setCurrent((c) => (c + 1) % COUNT), []);
  const prev = useCallback(() => setCurrent((c) => (c - 1 + COUNT) % COUNT), []);
  const goTo = useCallback((i: number) => setCurrent(i), []);

  // Auto-advance — suspended when paused or reduced-motion is preferred
  useEffect(() => {
    if (paused) return;
    const mq = window.matchMedia("(prefers-reduced-motion: reduce)");
    if (mq.matches) return;
    const id = setInterval(() => setCurrent((c) => (c + 1) % COUNT), INTERVAL_MS);
    return () => clearInterval(id);
  }, [paused]);

  // Touch swipe — 44 px threshold matches minimum tap target
  const onTouchStart = (e: React.TouchEvent) => {
    touchStartX.current = e.touches[0].clientX;
  };
  const onTouchEnd = (e: React.TouchEvent) => {
    if (touchStartX.current === null) return;
    const dx = e.changedTouches[0].clientX - touchStartX.current;
    if (Math.abs(dx) > 44) dx < 0 ? next() : prev();
    touchStartX.current = null;
  };

  return (
    <div
      role="region"
      aria-roledescription="carousel"
      aria-label="Hero images"
      className="relative aspect-video overflow-hidden rounded-xl shadow-2xl ring-1 ring-white/10 lg:aspect-[3/4] lg:rounded-2xl"
      onMouseEnter={() => setPaused(true)}
      onMouseLeave={() => setPaused(false)}
      onFocus={() => setPaused(true)}
      onBlur={() => setPaused(false)}
      onTouchStart={onTouchStart}
      onTouchEnd={onTouchEnd}
    >
      {/* ── Slides ── */}
      {SLIDES.map((slide, i) => (
        <div
          key={slide.src}
          role="group"
          aria-roledescription="slide"
          aria-label={`${i + 1} of ${COUNT}`}
          aria-hidden={i !== current}
          className={`absolute inset-0 transition-opacity duration-700 ease-in-out motion-reduce:transition-none ${
            i === current ? "opacity-100" : "pointer-events-none opacity-0"
          }`}
        >
          <Image
            src={slide.src}
            alt={slide.alt}
            fill
            priority={i === 0}
            sizes="(max-width: 1024px) 100vw, 420px"
            className="object-cover object-center"
          />
        </div>
      ))}

      {/* ── Prev / Next arrows — 44×44 px tap targets ── */}
      <button
        type="button"
        onClick={prev}
        aria-label="Previous image"
        className="absolute left-2 top-1/2 z-10 flex h-11 w-11 -translate-y-1/2 items-center justify-center rounded-full bg-black/35 text-white backdrop-blur-sm transition hover:bg-brand-red focus-visible:outline focus-visible:outline-2 focus-visible:outline-white active:scale-95"
      >
        <ChevronLeft className="h-5 w-5" />
      </button>
      <button
        type="button"
        onClick={next}
        aria-label="Next image"
        className="absolute right-2 top-1/2 z-10 flex h-11 w-11 -translate-y-1/2 items-center justify-center rounded-full bg-black/35 text-white backdrop-blur-sm transition hover:bg-brand-red focus-visible:outline focus-visible:outline-2 focus-visible:outline-white active:scale-95"
      >
        <ChevronRight className="h-5 w-5" />
      </button>

      {/* ── Dot indicators ── */}
      <div
        aria-label="Slide navigation"
        className="absolute bottom-3 left-1/2 z-10 flex -translate-x-1/2 items-center gap-2"
      >
        {SLIDES.map((slide, i) => (
          <button
            key={slide.src}
            type="button"
            onClick={() => goTo(i)}
            aria-label={`Go to slide ${i + 1}`}
            aria-current={i === current}
            className={`h-2.5 rounded-full transition-all duration-300 motion-reduce:transition-none ${
              i === current
                ? "w-7 bg-white"
                : "w-2.5 bg-white/50 hover:bg-white/80 focus-visible:bg-white/80"
            }`}
          />
        ))}
      </div>
    </div>
  );
}
