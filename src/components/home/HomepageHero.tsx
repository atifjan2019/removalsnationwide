"use client";
import { useCallback, useEffect, useRef, useState } from "react";
import Image from "next/image";
import Button from "@/components/ui/Button";
import { ChevronLeft, ChevronRight } from "@/components/ui/icons";
import { REMOTE_IMAGES } from "@/lib/remote-images";

type Slide = { src: string; alt: string };

const SLIDES: Slide[] = [
  {
    src: REMOTE_IMAGES.movingVan,
    alt: "Removal van loaded and ready for a nationwide house move",
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

const COUNT = SLIDES.length;
const INTERVAL_MS = 5500;

export default function HomepageHero() {
  const [current, setCurrent] = useState(0);
  const [paused, setPaused] = useState(false);
  const touchStartX = useRef<number | null>(null);

  const next = useCallback(() => setCurrent((c) => (c + 1) % COUNT), []);
  const prev = useCallback(() => setCurrent((c) => (c - 1 + COUNT) % COUNT), []);
  const goTo = useCallback((i: number) => setCurrent(i), []);

  // Auto-advance stops when prefers-reduced-motion is set.
  useEffect(() => {
    if (paused) return;
    const mq = window.matchMedia("(prefers-reduced-motion: reduce)");
    if (mq.matches) return;
    const id = setInterval(() => setCurrent((c) => (c + 1) % COUNT), INTERVAL_MS);
    return () => clearInterval(id);
  }, [paused]);

  const onTouchStart = (e: React.TouchEvent) => {
    touchStartX.current = e.touches[0].clientX;
  };
  const onTouchEnd = (e: React.TouchEvent) => {
    if (touchStartX.current === null) return;
    const dx = e.changedTouches[0].clientX - touchStartX.current;
    if (Math.abs(dx) > 44) {
      if (dx < 0) next();
      else prev();
    }
    touchStartX.current = null;
  };

  return (
    <section
      id="hero"
      className="relative flex min-h-[80vh] flex-col justify-center overflow-hidden bg-brand-navy text-white sm:min-h-[82vh]"
      aria-label="Nationwide removal company"
      onMouseEnter={() => setPaused(true)}
      onMouseLeave={() => setPaused(false)}
      onFocus={() => setPaused(true)}
      onBlur={() => setPaused(false)}
      onTouchStart={onTouchStart}
      onTouchEnd={onTouchEnd}
    >
      {/* ── Background image slides (absolute, fills section) ── */}
      <div
        role="region"
        aria-roledescription="carousel"
        aria-label="Hero background images"
        aria-live="off"
        className="absolute inset-0"
      >
        {SLIDES.map((slide, i) => (
          <div
            key={slide.src}
            role="group"
            aria-roledescription="slide"
            aria-label={`${i + 1} of ${COUNT}`}
            aria-hidden={i !== current}
            className={`absolute inset-0 transition-opacity duration-1000 ease-in-out motion-reduce:transition-none ${
              i === current ? "opacity-100" : "opacity-0"
            }`}
          >
            <Image
              src={slide.src}
              alt={slide.alt}
              fill
              priority={i === 0}
              sizes="100vw"
              className="object-cover"
              style={{ objectPosition: "65% center" }}
            />
          </div>
        ))}
      </div>

      {/* ── Gradient overlay ──
           Mobile/tablet: solid so white text stays readable over any image crop.
           lg+: left-heavy gradient, dark left for text and photo visible on right. */}
      <div className="absolute inset-0 bg-brand-navy/80 lg:hidden" aria-hidden="true" />
      <div
        className="absolute inset-0 hidden lg:block"
        style={{
          background:
            "linear-gradient(to right, rgba(0,0,0,0.92) 0%, rgba(0,0,0,0.92) 42%, rgba(0,0,0,0.52) 65%, rgba(0,0,0,0.12) 100%)",
        }}
        aria-hidden="true"
      />

      {/* Fixed text: H1, subhead, body and CTA never rotate. */}
      <div className="relative z-10 mx-auto w-full max-w-[88rem] px-6 py-16 pb-16 md:py-24 lg:py-28">
        <div className="max-w-lg sm:max-w-xl lg:max-w-2xl">
          {/* H1 has no animation class and remains LCP-safe. */}
          <h1 className="text-4xl font-extrabold uppercase leading-tight tracking-wide text-white sm:text-5xl md:text-6xl lg:text-7xl">
            London Removals Company
          </h1>
          <p className="hero-anim-sub mt-4 text-xl font-semibold uppercase tracking-wide text-brand-red sm:text-2xl md:text-3xl">
            London Based, with Nationwide and International Reach
          </p>
          <p className="mt-6 text-base leading-relaxed text-white/90 sm:text-lg">
            Based in London, our fully insured crews provide house removals, man and van services,
            office moves, professional packing and secure storage. London moves are our core service,
            with nationwide and international relocations arranged from the same base. Send your move
            details through our booking form for review and a written quotation.
          </p>
          <div className="hero-anim-ctas mt-8 flex flex-wrap gap-4">
            <Button href="/bookservice#quick-quote" variant="red" size="lg">
              Get a Free Quote
            </Button>
          </div>
        </div>

      </div>

      {/* Previous and next controls use 44 by 44 pixel tap targets. */}
      <button
        type="button"
        onClick={prev}
        aria-label="Previous image"
        className="absolute left-3 top-1/2 z-20 flex h-11 w-11 -translate-y-1/2 items-center justify-center rounded-full bg-black/35 text-white backdrop-blur-sm transition hover:bg-brand-red focus-visible:outline focus-visible:outline-2 focus-visible:outline-white active:scale-95"
      >
        <ChevronLeft className="h-5 w-5" />
      </button>
      <button
        type="button"
        onClick={next}
        aria-label="Next image"
        className="absolute right-3 top-1/2 z-20 flex h-11 w-11 -translate-y-1/2 items-center justify-center rounded-full bg-black/35 text-white backdrop-blur-sm transition hover:bg-brand-red focus-visible:outline focus-visible:outline-2 focus-visible:outline-white active:scale-95"
      >
        <ChevronRight className="h-5 w-5" />
      </button>

      {/* ── Dot indicators ── */}
      <div
        aria-label="Slide navigation"
        className="absolute bottom-5 left-1/2 z-20 flex -translate-x-1/2 items-center gap-2"
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
    </section>
  );
}
