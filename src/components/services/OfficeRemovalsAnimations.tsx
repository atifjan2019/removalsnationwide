"use client";
import { useEffect } from "react";

export default function OfficeRemovalsAnimations() {
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

    return () => revealObs.disconnect();
  }, []);

  return null;
}
