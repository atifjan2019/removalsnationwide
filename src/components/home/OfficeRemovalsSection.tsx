import Link from "next/link";
import SectionHeading from "@/components/ui/SectionHeading";
import Button from "@/components/ui/Button";
import { CheckIcon, ArrowRight } from "@/components/ui/icons";

const features = [
  "Pre-move planning and project management",
  "Crate hire for documents and IT equipment",
  "Server and desktop computer transport",
  "Furniture dismantling and reassembly",
  "Weekend and out-of-hours moves",
  "Business continuity with minimal downtime",
];

export default function OfficeRemovalsSection() {
  return (
    <section
      id="office-removals"
      className="bg-brand-navy py-20 text-white"
      aria-labelledby="office-removals-heading"
    >
      <div className="mx-auto max-w-[88rem] px-4">
        <SectionHeading
          align="left"
          tone="light"
          eyebrow="Business Relocation"
          title="Nationwide Office and Commercial Removals"
        />

        <div className="mt-10 grid gap-10 lg:grid-cols-2" data-reveal>
          <div className="space-y-5 text-base leading-relaxed text-white/85">
            <p>
              Business relocations require planning that protects trading continuity.
              Our commercial removal service covers the full scope: pre-move planning, crate hire
              for sensitive documents and IT equipment, furniture dismantling and reassembly,
              server and desktop computer transport, and out-of-hours or weekend moves that keep
              disruption to a minimum.
            </p>
            <p>
              Crate hire is available as a standalone service or as part of the full office move.
              Plastic lidded crates protect documents and fragile office items more securely than
              cardboard boxes and are delivered to your premises in advance.
            </p>
            <p>
              Weekend and overnight moves ensure your business returns to normal operations by
              Monday morning. For a detailed office relocation plan and a fixed quote, visit our
              office removals and crate hire page.
            </p>
          </div>

          <div>
            <h3 className="text-lg font-bold uppercase tracking-wide text-white">
              What the service includes
            </h3>
            <ul className="mt-5 space-y-3">
              {features.map((f) => (
                <li key={f} className="flex items-start gap-3">
                  <span className="mt-0.5 inline-flex h-6 w-6 shrink-0 items-center justify-center rounded-full bg-brand-red text-white">
                    <CheckIcon className="h-4 w-4" strokeWidth={3} />
                  </span>
                  <span className="text-sm leading-relaxed text-white/90">{f}</span>
                </li>
              ))}
            </ul>
            <div className="mt-8 flex flex-wrap gap-4">
              <Button href="/office-removals" variant="red" size="md">
                Nationwide Office Removals
              </Button>
              <Link
                href="/crate-hire"
                className="inline-flex items-center gap-1.5 text-sm font-semibold uppercase tracking-wide text-white transition hover:text-brand-red"
              >
                Crate Hire
                <ArrowRight className="h-4 w-4" />
              </Link>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
