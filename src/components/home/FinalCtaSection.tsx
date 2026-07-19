import Button from "@/components/ui/Button";
import { PhoneIcon, CheckIcon } from "@/components/ui/icons";
import type { Phone } from "@/lib/settings";

export default function FinalCtaSection({
  phones,
}: {
  phones: { freephone: Phone; london: Phone };
}) {
  return (
    <section
      id="final-cta"
      className="bg-brand-navy py-20 text-white"
      aria-labelledby="final-cta-heading"
    >
      <div className="mx-auto max-w-[88rem] px-6 text-center" data-reveal>
        <h2
          id="final-cta-heading"
          className="text-2xl font-extrabold uppercase leading-tight tracking-wide text-white sm:text-3xl md:text-4xl"
        >
          Get Your Free Nationwide Removal Quote Today
        </h2>
        <p className="mx-auto mt-5 max-w-2xl text-base leading-relaxed text-white/85">
          Start your move with our step-by-step booking form. Our team reviews your details and
          can arrange a free on-site or video survey before providing a fixed price. Removals
          Nationwide is fully insured and experienced.
        </p>

        <div className="mt-8 flex flex-wrap justify-center gap-4">
          <Button href="/bookservice#quick-quote" variant="red" size="lg">
            Get a Free Quote
          </Button>
        </div>

        <div className="mt-8 flex flex-wrap items-center justify-center gap-x-6 gap-y-3 text-sm text-white/70">
          <span className="flex items-center gap-1.5">
            <CheckIcon className="h-4 w-4 text-brand-red" strokeWidth={3} />
            Fully insured
          </span>
          <span className="flex items-center gap-1.5">
            <CheckIcon className="h-4 w-4 text-brand-red" strokeWidth={3} />
            industry experienced
          </span>
          <span className="flex items-center gap-1.5">
            <CheckIcon className="h-4 w-4 text-brand-red" strokeWidth={3} />
            No hidden fees
          </span>
          <span className="flex items-center gap-1.5">
            <CheckIcon className="h-4 w-4 text-brand-red" strokeWidth={3} />
            Free survey
          </span>
        </div>

        <div className="mt-8 flex flex-wrap justify-center gap-x-6 gap-y-3">
          <a
            href={phones.freephone.href}
            className="flex items-center gap-2 text-sm font-semibold text-white transition hover:text-brand-red"
          >
            <PhoneIcon className="h-4 w-4" />
            {phones.freephone.label}
          </a>
          <a
            href={phones.london.href}
            className="flex items-center gap-2 text-sm font-semibold text-white transition hover:text-brand-red"
          >
            <PhoneIcon className="h-4 w-4" />
            {phones.london.label}
          </a>
        </div>
      </div>
    </section>
  );
}
