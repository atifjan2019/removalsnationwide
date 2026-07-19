"use client";

import { useState } from "react";
import Link from "next/link";
import SectionHeading from "@/components/ui/SectionHeading";
import { ChevronDown } from "@/components/ui/icons";
import { HOME_FAQ_ITEMS } from "@/lib/seo";

// Link-enriched overrides for answers that reference a specific on-page destination.
// Only three answers need this — the rest render as plain text (HOME_FAQ_ITEMS strings).
const lk = "text-brand-red underline underline-offset-2 hover:text-brand-navy transition-colors";
const LINK_OVERRIDES: Record<string, React.ReactNode> = {
  "How much should I pay for removals in the UK?": (
    <>
      Removal costs in the UK depend on property size, access conditions, distance and move
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

  "What areas do you cover?": (
    <>
      Our removal crews provide nationwide coverage across the UK, as well as international
      moves. Find local coverage information on our{" "}
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
        online booking form
      </Link>{" "}
      to share your move details, or{" "}
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
          className={`mt-0.5 h-5 w-5 shrink-0 text-brand-red transition-transform duration-200 ${
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
          title="Nationwide Removals FAQs"
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
