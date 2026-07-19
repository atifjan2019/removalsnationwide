"use client";

import { useEffect, useRef, useState } from "react";

type Stat = {
  value: string;
  numeric?: number;
  suffix?: string;
  label: string;
  sublabel?: string;
};

const stats: Stat[] = [
  { value: "290+", numeric: 290, suffix: "+", label: "Trustpilot Reviews", sublabel: "Rated Excellent" },
  { value: "32", numeric: 32, suffix: "", label: "London Boroughs", sublabel: "Full coverage" },
  { value: "7", numeric: 7, suffix: "", label: "Days a Week", sublabel: "Including weekends" },
  { value: "24/7", label: "Storage Monitored", sublabel: "CCTV-secured" },
];

function CountUp({ target, suffix = "" }: { target: number; suffix?: string }) {
  const [value, setValue] = useState(0);
  const ref = useRef<HTMLSpanElement | null>(null);
  const started = useRef(false);

  useEffect(() => {
    const node = ref.current;
    if (!node) return;
    const reduceMotion = window.matchMedia("(prefers-reduced-motion: reduce)").matches;
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting && !started.current) {
            started.current = true;
            if (reduceMotion) { setValue(target); return; }
            const duration = 1600;
            const start = performance.now();
            const tick = (now: number) => {
              const progress = Math.min((now - start) / duration, 1);
              const eased = 1 - Math.pow(1 - progress, 3);
              setValue(Math.round(eased * target));
              if (progress < 1) requestAnimationFrame(tick);
            };
            requestAnimationFrame(tick);
          }
        });
      },
      { threshold: 0.4 },
    );
    observer.observe(node);
    return () => observer.disconnect();
  }, [target]);

  return <span ref={ref}>{value}{suffix}</span>;
}

export default function StatsCounter() {
  return (
    <section className="bg-brand-navy py-16 text-white" aria-label="Company facts">
      <div className="mx-auto max-w-[88rem] px-4">
        <dl className="grid grid-cols-2 gap-y-10 gap-x-6 lg:grid-cols-4">
          {stats.map((stat) => (
            <div key={stat.label} className="flex flex-col items-center text-center">
              <dd className="text-4xl font-bold tracking-tight text-brand-red sm:text-5xl">
                {stat.numeric !== undefined ? (
                  <CountUp target={stat.numeric} suffix={stat.suffix} />
                ) : (
                  stat.value
                )}
              </dd>
              <dt className="mt-2 text-sm font-semibold uppercase tracking-widest text-white">
                {stat.label}
              </dt>
              {stat.sublabel && (
                <p className="mt-1 text-xs text-white/55">{stat.sublabel}</p>
              )}
            </div>
          ))}
        </dl>
      </div>
    </section>
  );
}
