import SectionHeading from "@/components/ui/SectionHeading";
import { CheckIcon } from "@/components/ui/icons";

const items = [
  "7 Days A Week",
  "Full Nationwide Coverage",
  "Affordable Rates",
  "Fully insured removal services",
  "industry and professional experienced, independent review approved",
  "Free on-site property surveys",
  "24/7 CCTV monitored storage facilities",
  "You don't have to be present at the site",
  "Easy online house removals booking",
  "international moving and Customer-reviewed service experienced",
  "Free collection of packing waste materials",
  "No hidden expenses, all fees are included in the price",
  "Set-Up of various appliances",
  "Furniture assembling/disassembling",
  "Modern fleet and proper safety equipment",
];

export default function WhatYouNeedToKnow() {
  return (
    <section className="bg-brand-grey py-20">
      <div className="mx-auto max-w-[88rem] px-4">
        <SectionHeading
          eyebrow="Good to know"
          title="What Do You Need To Know About Removals Nationwide"
        />
        <ul className="mx-auto mt-12 grid max-w-5xl gap-x-8 gap-y-4 sm:grid-cols-2 lg:grid-cols-3">
          {items.map((item) => (
            <li key={item} className="flex items-start gap-3">
              <span className="mt-0.5 inline-flex h-6 w-6 shrink-0 items-center justify-center rounded-full bg-brand-red text-white">
                <CheckIcon className="h-4 w-4" strokeWidth={3} />
              </span>
              <span className="text-sm leading-relaxed text-brand-charcoal/90">{item}</span>
            </li>
          ))}
        </ul>
      </div>
    </section>
  );
}
