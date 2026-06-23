"use client";
import { useEffect } from "react";

export default function PackingServiceAnimations() {
  useEffect(() => {
    document.documentElement.classList.add("js");

    const revealObs = new IntersectionObserver(
      (entries) => {
        entries.forEach((e) => {
          if (e.isIntersecting) {
            e.target.classList.add("in-view");
            revealObs.unobserve(e.target);
          }
        });
      },
      { threshold: 0.08, rootMargin: "0px 0px -32px 0px" },
    );
    document.querySelectorAll<HTMLElement>("[data-reveal]").forEach((el) => revealObs.observe(el));

    const fillEl = document.getElementById("ps-process-fill") as HTMLElement | null;
    const stepEls = document.querySelectorAll<HTMLElement>("[data-ps-step]");
    const total = stepEls.length;
    let stepObs: IntersectionObserver | null = null;

    if (fillEl && total > 0) {
      const reduced = window.matchMedia("(prefers-reduced-motion: reduce)").matches;
      if (reduced) {
        fillEl.style.height = "100%";
      } else {
        let maxSeen = 0;
        stepObs = new IntersectionObserver(
          (entries) => {
            entries.forEach((e) => {
              if (e.isIntersecting) {
                const n = parseInt((e.target as HTMLElement).dataset.psStep ?? "0");
                if (n > maxSeen) {
                  maxSeen = n;
                  fillEl.style.height = `${(n / total) * 100}%`;
                }
              }
            });
          },
          { threshold: 0.5 },
        );
        stepEls.forEach((el) => stepObs!.observe(el));
      }
    }

    return () => {
      revealObs.disconnect();
      stepObs?.disconnect();
    };
  }, []);

  return null;
}
