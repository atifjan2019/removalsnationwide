import Link from "next/link";
import SectionHeading from "@/components/ui/SectionHeading";
import { CheckIcon } from "@/components/ui/icons";

const themes = [
  "International and Scandinavia moves",
  "Clear communication",
  "Careful handling",
  "Named coordinators and crews",
];

export default function Testimonials() {
  return (
    <section className="bg-brand-grey py-20">
      <div className="mx-auto max-w-[88rem] px-4">
        <SectionHeading eyebrow="Service standards" title="Insurance and Service Standards" />

        <div className="mx-auto mt-10 max-w-3xl rounded-2xl bg-white p-8 text-center shadow-sm sm:p-12">
          <CheckIcon className="mx-auto h-8 w-8 text-brand-red" aria-hidden="true" />

          <p className="mt-5 text-base leading-relaxed text-brand-charcoal/80">
            Written quotations, insured transport and named move coordinators provide a documented
            process from enquiry to delivery.
          </p>

          <ul className="mt-6 flex flex-wrap justify-center gap-2">
            {themes.map((theme) => (
              <li
                key={theme}
                className="inline-flex items-center rounded-full bg-brand-grey px-3 py-1.5 text-xs font-semibold text-brand-navy"
              >
                {theme}
              </li>
            ))}
          </ul>

          <div className="mt-8">
            <Link
              href="/about-us"
              className="inline-flex min-h-[44px] items-center rounded-xl bg-brand-red px-6 py-3 text-sm font-bold text-white transition hover:bg-brand-navy focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-brand-red"
            >
              Read Our Service Standards
            </Link>
          </div>
        </div>
      </div>
    </section>
  );
}
