"use client";

import { useId, useState } from "react";
import { ChevronDown } from "@/components/ui/icons";
import JsonLd from "@/components/seo/JsonLd";
import { faqLd } from "@/lib/seo";

export type FaqItem = {
  question: string;
  answer: string;
  /** Optional bullet list rendered after the answer paragraph. */
  bullets?: string[];
  /** Optional closing paragraph rendered after the bullet list. */
  answerAfter?: string;
};

type Props = {
  items: FaqItem[];
  /** Index of the item open by default (null = all closed). */
  defaultOpen?: number | null;
  className?: string;
  /** Emit FAQPage JSON-LD. Off for area pages, where FAQPage markup is not used. */
  schema?: boolean;
};

/** Reusable, accessible expand/collapse FAQ accordion. */
export default function Faq({ items, defaultOpen = 0, className = "", schema = true }: Props) {
  const [open, setOpen] = useState<number | null>(defaultOpen);
  const baseId = useId();

  return (
    <div className={`mx-auto max-w-3xl divide-y divide-black/10 ${className}`}>
      {schema && (
        <JsonLd data={faqLd(items.map((it) => ({ question: it.question, answer: it.answer })))} />
      )}
      {items.map((item, i) => {
        const expanded = open === i;
        const btnId = `${baseId}-q-${i}`;
        const panelId = `${baseId}-a-${i}`;
        return (
          <div key={item.question}>
            <h3>
              <button
                type="button"
                id={btnId}
                aria-expanded={expanded}
                aria-controls={panelId}
                onClick={() => setOpen(expanded ? null : i)}
                className="flex w-full items-center justify-between gap-4 py-5 text-left"
              >
                <span className="text-base font-semibold text-brand-navy sm:text-lg">
                  {item.question}
                </span>
                <span
                  className={`flex h-8 w-8 shrink-0 items-center justify-center rounded-full transition-colors ${
                    expanded ? "bg-brand-red text-white" : "bg-brand-grey text-brand-navy"
                  }`}
                >
                  <ChevronDown
                    className={`h-5 w-5 transition-transform duration-300 ${
                      expanded ? "rotate-180" : ""
                    }`}
                  />
                </span>
              </button>
            </h3>
            <div
              id={panelId}
              role="region"
              aria-labelledby={btnId}
              hidden={!expanded}
              className="pb-5"
            >
              <p className="text-base leading-relaxed text-brand-charcoal/85">{item.answer}</p>
              {item.bullets && (
                <ul className="mt-3 space-y-2">
                  {item.bullets.map((bullet) => (
                    <li key={bullet} className="flex items-start gap-2.5">
                      <span
                        aria-hidden="true"
                        className="mt-2 inline-block h-1.5 w-1.5 shrink-0 rounded-full bg-brand-red"
                      />
                      <span className="text-base leading-relaxed text-brand-charcoal/85">
                        {bullet}
                      </span>
                    </li>
                  ))}
                </ul>
              )}
              {item.answerAfter && (
                <p className="mt-3 text-base leading-relaxed text-brand-charcoal/85">
                  {item.answerAfter}
                </p>
              )}
            </div>
          </div>
        );
      })}
    </div>
  );
}
