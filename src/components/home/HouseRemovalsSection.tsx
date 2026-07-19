import Link from "next/link";
import SectionHeading from "@/components/ui/SectionHeading";
import Button from "@/components/ui/Button";
import { CheckIcon } from "@/components/ui/icons";

const propertyTypes = [
  "Studio flats and bedsits",
  "Terraced and semi-detached houses",
  "Detached houses and bungalows",
  "Purpose-built flats and apartments",
  "Maisonettes and conversions",
  "Student accommodation",
];

export default function HouseRemovalsSection() {
  return (
    <section
      id="house-removals"
      className="bg-brand-sand py-20"
      aria-labelledby="house-removals-heading"
    >
      <div className="mx-auto max-w-[88rem] px-4">
        <SectionHeading
          align="left"
          eyebrow="Domestic Removals"
          title="House Removals Across London and Greater London"
        />

        <div className="mt-10 grid gap-10 lg:grid-cols-2" data-reveal>
          <div className="space-y-5 text-base leading-relaxed text-brand-charcoal/85">
            <p>
              A full house removal runs from the initial free survey through to furniture
              reassembly at your new address. Our crews handle every step: property survey,
              professional packing, furniture dismantling and wrapping, loading onto a fully
              insured vehicle, transport, unloading and reassembly. Packing waste is collected
              after the move at no extra charge.
            </p>
            <p>
              Coverage extends across all 32 London boroughs, Greater London and Surrey as
              standard. Nationwide relocations follow the same survey-to-settle-in process.
              In 2026 our teams operate seven days a week to fit around completion dates,
              chain timelines and short-notice requirements.
            </p>
            <p>
              London house moves regularly present access challenges that a standard quote
              ignores. Top-floor flats without a lift require a furniture hoist or a stair-carry
              crew with assessed route planning. Narrow Victorian staircases in period properties
              need careful dismantling and measured access work. Parking suspensions are needed
              on most residential streets, and our operations team arranges the borough permit
              as part of move planning.
            </p>
            <p>
              Completion delays and chain breaks create short-notice requirements. Our secure
              24/7 CCTV-monitored storage bridges the gap between moving out and moving in,
              combined with the removal as one managed service.
            </p>
          </div>

          <div>
            <h3 className="text-lg font-bold text-brand-navy">Property types we cover</h3>
            <ul className="mt-4 space-y-3">
              {propertyTypes.map((type) => (
                <li key={type} className="flex items-start gap-3">
                  <span className="mt-0.5 inline-flex h-6 w-6 shrink-0 items-center justify-center rounded-full bg-brand-red text-white">
                    <CheckIcon className="h-4 w-4" strokeWidth={3} />
                  </span>
                  <span className="text-sm leading-relaxed text-brand-charcoal/90">{type}</span>
                </li>
              ))}
            </ul>
            <div className="mt-8 space-y-3">
              <Button href="/house-removals" variant="red" size="md">
                House Removals London
              </Button>
              <div className="flex flex-wrap gap-3">
                <Link
                  href="/areas"
                  className="text-sm font-semibold text-brand-navy underline underline-offset-2 transition hover:text-brand-red"
                >
                  Areas we cover
                </Link>
                <Link
                  href="#cost"
                  className="text-sm font-semibold text-brand-navy underline underline-offset-2 transition hover:text-brand-red"
                >
                  Removal costs 2026
                </Link>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
