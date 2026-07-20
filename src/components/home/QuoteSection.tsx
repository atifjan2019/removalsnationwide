import Button from "@/components/ui/Button";
import { CheckIcon } from "@/components/ui/icons";

const priceDrivers = [
  "Property size and volume of items",
  "Distance between addresses",
  "Floor level and lift access",
  "Packing requirements",
  "Parking suspensions or permit costs",
  "Crew size and day of the week",
];

export default function QuoteSection() {
  return (
    <section
      id="quote"
      className="relative overflow-hidden bg-brand-red"
      aria-labelledby="quote-heading"
    >
      <div
        className="pointer-events-none absolute inset-0 opacity-10"
        aria-hidden="true"
        style={{
          backgroundImage:
            "repeating-linear-gradient(45deg, #fff 0 2px, transparent 2px 22px)",
        }}
      />
      <div className="relative mx-auto max-w-[88rem] px-6 py-16 md:py-20">
        <div className="grid gap-10 md:grid-cols-2 md:items-center" data-reveal>
          <div>
            <h2
              id="quote-heading"
              className="text-2xl font-extrabold uppercase leading-tight tracking-wide text-white sm:text-3xl md:text-4xl"
            >
              Get Your Free Removal Quote
            </h2>
            <p className="mt-4 text-base leading-relaxed text-white/90">
              Send your details through our step-by-step booking form. We review the route, access,
              volume and services required, then arrange a free on-site or video survey when needed
              before providing an exact fixed price with no hidden fees.
            </p>
            <p className="mt-3 text-base leading-relaxed text-white/90">
              A surveyor visits your property or conducts a video walkthrough, assesses access
              conditions at both addresses, and produces a written fixed price. Booking a survey
              removes all price uncertainty before move day.
            </p>
            <div className="mt-8 flex flex-wrap gap-4">
              <Button href="/bookservice#quick-quote" variant="navy" size="lg">
                Get a Free Quote
              </Button>
            </div>
          </div>

          <div className="rounded-2xl bg-white/15 p-7 backdrop-blur-sm">
            <p className="text-sm font-semibold uppercase tracking-wide text-white/80">
              What affects your removal cost
            </p>
            <ul className="mt-4 space-y-3">
              {priceDrivers.map((driver) => (
                <li key={driver} className="flex items-start gap-3">
                  <span className="mt-0.5 inline-flex h-5 w-5 shrink-0 items-center justify-center rounded-full bg-white/25">
                    <CheckIcon className="h-3.5 w-3.5 text-white" strokeWidth={3} />
                  </span>
                  <span className="text-sm leading-relaxed text-white">{driver}</span>
                </li>
              ))}
            </ul>
            <p className="mt-5 text-xs text-white/70">
              Published prices exclude VAT and are subject to VAT at 20%.
            </p>
          </div>
        </div>
      </div>
    </section>
  );
}
