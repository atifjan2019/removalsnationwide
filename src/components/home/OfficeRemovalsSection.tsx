import Link from "next/link";
import Image from "next/image";
import SectionHeading from "@/components/ui/SectionHeading";
import Button from "@/components/ui/Button";
import { CheckIcon, ArrowRight, BuildingIcon } from "@/components/ui/icons";
import { REMOTE_IMAGES } from "@/lib/remote-images";

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

        {/* Intro split */}
        <div className="mt-12 grid items-center gap-10 lg:grid-cols-2 lg:gap-16" data-reveal>
          <div>
            <p className="border-l-2 border-brand-red pl-5 text-lg font-medium leading-relaxed text-white">
              Business relocations require planning that protects trading continuity.
              Our commercial removal service covers the full scope: pre-move planning, crate hire
              for sensitive documents and IT equipment, furniture dismantling and reassembly,
              server and desktop computer transport, and out-of-hours or weekend moves that keep
              disruption to a minimum.
            </p>
            <div className="mt-6 space-y-5 text-base leading-relaxed text-white/80">
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
          </div>

          <div>
            <div className="relative">
              <div
                className="absolute -bottom-4 -right-4 hidden h-full w-full rounded-2xl bg-brand-red sm:block"
                aria-hidden="true"
              />
              <div className="relative overflow-hidden rounded-2xl border border-white/10 shadow-2xl">
                <div className="relative aspect-[4/3] w-full">
                  <Image
                    src={REMOTE_IMAGES.officeMove}
                    alt="Office removals team relocating business furniture and IT equipment"
                    fill
                    sizes="(max-width: 1024px) 100vw, 45vw"
                    className="object-cover"
                  />
                </div>
              </div>
              <span
                className="absolute -left-3 -top-3 flex h-14 w-14 items-center justify-center rounded-full bg-brand-red text-white shadow-lg ring-4 ring-brand-navy"
                aria-hidden="true"
              >
                <BuildingIcon className="h-7 w-7" />
              </span>
            </div>
          </div>
        </div>

        {/* Feature grid */}
        <div className="mt-14 border-t border-white/10 pt-10" data-reveal>
          <h3 className="text-lg font-bold uppercase tracking-wide text-white">
            What the service includes
          </h3>
          <ul className="mt-6 grid gap-3 sm:grid-cols-2 lg:grid-cols-3">
            {features.map((f) => (
              <li
                key={f}
                className="flex items-center gap-3 rounded-xl border border-white/10 bg-white/5 px-4 py-4 transition hover:-translate-y-0.5 hover:border-brand-red/50 hover:bg-white/10"
              >
                <span className="flex h-8 w-8 shrink-0 items-center justify-center rounded-lg bg-brand-red text-white">
                  <CheckIcon className="h-4 w-4" strokeWidth={3} />
                </span>
                <span className="text-sm font-medium leading-snug text-white/90">{f}</span>
              </li>
            ))}
          </ul>

          <div className="mt-8 flex flex-wrap items-center gap-x-6 gap-y-4">
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
    </section>
  );
}
