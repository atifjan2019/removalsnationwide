"use client";

import { useState } from "react";
import Link from "next/link";
import SectionHeading from "@/components/ui/SectionHeading";
import { ChevronDown } from "@/components/ui/icons";
import { HOME_FAQ_ITEMS } from "@/lib/seo";

// Link-enriched overrides for answers that reference a specific on-page destination.
// Only three answers need this — the rest render as plain text (HOME_FAQ_ITEMS strings).
const lk = "text-brand-orange underline underline-offset-2 hover:text-brand-navy transition-colors";
const LINK_OVERRIDES: Record<string, React.ReactNode> = {
  "How much should I pay for removals in London?": (
    <>
      Removal costs in London in 2026 depend on property size, access conditions and move
      complexity. For a full breakdown of the factors that affect price, see the{" "}
      <Link href="#cost" className={lk}>
        cost guide on this page
      </Link>
      , or{" "}
      <Link href="/bookservice#quick-quote" className={lk}>
        book a free survey
      </Link>{" "}
      for an exact fixed quote.
    </>
  ),

  "What London areas do you cover?": (
    <>
      Our removal crews cover all 32 London boroughs, Greater London and Surrey as standard.
      Nationwide and international moves are also covered. Find your local area on our{" "}
      <Link href="/areas" className={lk}>
        areas page
      </Link>
      .
    </>
  ),

  "How do I get a removal quote?": (
    <>
      Use the{" "}
      <Link href="/bookservice" className={lk}>
        online removal calculator
      </Link>{" "}
      for an instant estimate, or{" "}
      <Link href="/bookservice#quick-quote" className={lk}>
        book a free on-site or video survey
      </Link>{" "}
      for a fixed-price quote with no hidden fees. You can also call our team directly.
    </>
  ),
};

function FaqItem({
  question,
  answer,
  answerNode,
}: {
  question: string;
  answer: string;
  answerNode?: React.ReactNode;
}) {
  const [open, setOpen] = useState(false);

  return (
    <div className="border-b border-black/10 last:border-0">
      <button
        type="button"
        onClick={() => setOpen((v) => !v)}
        className="flex w-full items-start justify-between gap-4 py-5 text-left"
        aria-expanded={open}
      >
        <span className="text-base font-semibold text-brand-navy">{question}</span>
        <ChevronDown
          className={`mt-0.5 h-5 w-5 shrink-0 text-brand-orange transition-transform duration-200 ${
            open ? "rotate-180" : ""
          }`}
        />
      </button>
      <div className={`accordion-panel${open ? " is-open" : ""}`}>
        <div className="accordion-inner">
          <div className="pb-5 pr-8 text-sm leading-relaxed text-brand-charcoal/80">
            {answerNode ?? answer}
          </div>
        </div>
      </div>
    </div>
  );
}

export default function HomeFaqSection() {
  return (
    <section
      id="faq"
      className="bg-brand-sand py-20"
      aria-labelledby="faq-heading"
    >
      <div className="mx-auto max-w-[88rem] px-4">
        <SectionHeading
          eyebrow="Common Questions Answered"
          title="London Removals FAQs"
        />

        <div
          className="mx-auto mt-10 max-w-3xl rounded-2xl bg-white px-8 py-4 shadow-sm ring-1 ring-black/5"
          data-reveal
        >
          {HOME_FAQ_ITEMS.map((item) => (
            <FaqItem
              key={item.question}
              question={item.question}
              answer={item.answer}
              answerNode={LINK_OVERRIDES[item.question]}
            />
          ))}
        </div>
      </div>
    </section>
  );
}
