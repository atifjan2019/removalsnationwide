"use client";

import { useCallback, useEffect, useRef, useState } from "react";
import Image from "next/image";
import Button from "@/components/ui/Button";
import { ChevronLeft, ChevronRight } from "@/components/ui/icons";
import { REMOTE_IMAGES } from "@/lib/remote-images";

type Slide = {
  image: string;
  heading: string;
  subheading: string;
};

const slides: Slide[] = [
  { image: REMOTE_IMAGES.movingVan, heading: "NATIONWIDE MAN AND VAN", subheading: "7 DAYS A WEEK SERVICE" },
  { image: REMOTE_IMAGES.storage, heading: "SAFE AND SECURE STORAGE FACILITY", subheading: "WITH EASY ACCESS" },
  {
    image: REMOTE_IMAGES.smartphoneSurvey,
    heading: "MAKE A VIDEO SURVEY VIA YOUR SMARTPHONE",
    subheading: "AT A TIME THAT'S CONVENIENT TO YOU",
  },
  {
    image: REMOTE_IMAGES.london,
    heading: "NATIONWIDE AND INTERNATIONAL",
    subheading: "REMOVALS AND STORAGE",
  },
  { image: REMOTE_IMAGES.officeMove, heading: "WE DO OFFICE MOVES AND", subheading: "CRATE HIRE" },
];

const ROTATE_MS = 6000;

export default function HeroSlider() {
  const [current, setCurrent] = useState(0);
  const [paused, setPaused] = useState(false);
  const timer = useRef<ReturnType<typeof setInterval> | null>(null);

  const goTo = useCallback((i: number) => {
    setCurrent((i + slides.length) % slides.length);
  }, []);
  const next = useCallback(() => goTo(current + 1), [current, goTo]);
  const prev = useCallback(() => goTo(current - 1), [current, goTo]);

  useEffect(() => {
    if (paused) return;
    timer.current = setInterval(() => {
      setCurrent((c) => (c + 1) % slides.length);
    }, ROTATE_MS);
    return () => {
      if (timer.current) clearInterval(timer.current);
    };
  }, [paused]);

  return (
    <section
      aria-label="Featured services"
      aria-roledescription="carousel"
      className="relative h-[78vh] min-h-[520px] w-full overflow-hidden bg-brand-navy"
      onMouseEnter={() => setPaused(true)}
      onMouseLeave={() => setPaused(false)}
    >
      {slides.map((slide, i) => (
        <div
          key={slide.heading}
          role="group"
          aria-roledescription="slide"
          aria-label={`${i + 1} of ${slides.length}`}
          aria-hidden={i !== current}
          className={`absolute inset-0 transition-opacity duration-700 ease-in-out ${
            i === current ? "opacity-100" : "pointer-events-none opacity-0"
          }`}
        >
          <Image
            src={slide.image}
            alt={`${slide.heading} ${slide.subheading}`}
            fill
            priority={i === 0}
            sizes="100vw"
            className="object-cover"
          />
          <div className="absolute inset-0 bg-gradient-to-r from-brand-navy/85 via-brand-navy/55 to-brand-navy/20" />

          <div className="relative z-10 mx-auto flex h-full max-w-[88rem] items-center px-6">
            <div
              className={`max-w-2xl ${i === current ? "animate-fade-slide-up" : ""}`}
              key={i === current ? `active-${i}` : `idle-${i}`}
            >
              <h2 className="text-3xl font-extrabold uppercase leading-tight tracking-wide text-white sm:text-4xl md:text-5xl lg:text-6xl">
                {slide.heading}
              </h2>
              <p className="mt-3 text-2xl font-bold uppercase tracking-wide text-brand-red sm:text-3xl md:text-4xl">
                {slide.subheading}
              </p>
              <div className="mt-8 flex flex-wrap gap-4">
                <Button href="/bookservice#quick-quote" variant="red" size="lg">
                  Get a Free Quote
                </Button>
                <Button href="/bookservice" variant="outline-light" size="lg">
                  Book a Service
                </Button>
              </div>
            </div>
          </div>
        </div>
      ))}

      {/* Arrows */}
      <button
        type="button"
        onClick={prev}
        aria-label="Previous slide"
        className="absolute left-3 top-1/2 z-20 -translate-y-1/2 rounded-full bg-white/15 p-2.5 text-white backdrop-blur-sm transition hover:bg-brand-red md:left-6 md:p-3"
      >
        <ChevronLeft className="h-6 w-6" />
      </button>
      <button
        type="button"
        onClick={next}
        aria-label="Next slide"
        className="absolute right-3 top-1/2 z-20 -translate-y-1/2 rounded-full bg-white/15 p-2.5 text-white backdrop-blur-sm transition hover:bg-brand-red md:right-6 md:p-3"
      >
        <ChevronRight className="h-6 w-6" />
      </button>

      {/* Dots */}
      <div className="absolute bottom-6 left-1/2 z-20 flex -translate-x-1/2 gap-2.5">
        {slides.map((slide, i) => (
          <button
            key={slide.heading}
            type="button"
            onClick={() => goTo(i)}
            aria-label={`Go to slide ${i + 1}`}
            aria-current={i === current}
            className={`h-2.5 rounded-full transition-all duration-300 ${
              i === current ? "w-8 bg-brand-red" : "w-2.5 bg-white/50 hover:bg-white/80"
            }`}
          />
        ))}
      </div>
    </section>
  );
}
