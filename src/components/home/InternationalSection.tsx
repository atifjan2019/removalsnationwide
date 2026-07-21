import Image from "next/image";
import SectionHeading from "@/components/ui/SectionHeading";
import Button from "@/components/ui/Button";
import { CheckIcon, GlobeIcon } from "@/components/ui/icons";
import { REMOTE_IMAGES } from "@/lib/remote-images";

const services = [
  "Export-standard packing for long-distance transit",
  "European removals by road",
  "Overseas moves by sea freight or air freight",
  "Full-container and groupage options",
  "Customs documentation and clearance",
  "Transit insurance from collection to delivery",
  "Destination delivery and unpacking",
];

export default function InternationalSection() {
  return (
    <section
      id="international-removals"
      className="bg-brand-navy py-20 text-white"
      aria-labelledby="international-heading"
    >
      <div className="mx-auto max-w-[88rem] px-4">
        <SectionHeading
          align="left"
          tone="light"
          eyebrow="Europe and Worldwide"
          title="International and European Removals from the UK"
        />

        {/* Route signature for the confirmed weekly Scandinavia run. */}
        <div className="mt-6 inline-flex items-center gap-3 rounded-full border border-white/15 bg-white/8 px-4 py-2 text-sm font-semibold text-white">
          <span className="h-2 w-2 rounded-full bg-brand-red" aria-hidden="true" />
          UK to Oslo: regular road freight, weekly
        </div>

        {/* Intro split */}
        <div className="mt-10 grid items-center gap-10 lg:grid-cols-2 lg:gap-16" data-reveal>
          <div>
            <p className="border-l-2 border-brand-red pl-5 text-lg font-medium leading-relaxed text-white">
              International removals from the UK require export-standard packing, specialist
              shipping logistics, customs documentation and destination delivery. Our
              international removal service covers moves across Europe and to destinations
              worldwide.
            </p>
            <div className="mt-6 space-y-5 text-base leading-relaxed text-white/80">
              <p>
                European removals by road are co-ordinated by our operations team, with clear
                timelines and regular updates throughout transit. Road routes to Scandinavia run
                weekly. Overseas moves by sea freight use full-container and groupage options
                depending on volume.
              </p>
              <p>
                Customs clearance documentation is prepared by our logistics team. Transit
                insurance covers your belongings from collection to delivery at the destination.
              </p>
            </div>
            <div className="mt-8">
              <Button href="/international-removals" variant="red" size="md">
                International Removals
              </Button>
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
                    src={REMOTE_IMAGES.london}
                    alt="Removals Nationwide van loaded for a European and international removal"
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
                <GlobeIcon className="h-7 w-7" />
              </span>
            </div>
          </div>
        </div>

        {/* International service includes */}
        <div className="mt-14 border-t border-white/10 pt-10" data-reveal>
          <h3 className="text-lg font-bold uppercase tracking-wide text-white">
            International service includes
          </h3>
          <ul className="mt-6 grid gap-3 sm:grid-cols-2 lg:grid-cols-3">
            {services.map((s) => (
              <li
                key={s}
                className="flex items-center gap-3 rounded-xl border border-white/10 bg-white/5 px-4 py-4 transition hover:-translate-y-0.5 hover:border-brand-red/50 hover:bg-white/10"
              >
                <span className="flex h-8 w-8 shrink-0 items-center justify-center rounded-lg bg-brand-red text-white">
                  <CheckIcon className="h-4 w-4" strokeWidth={3} />
                </span>
                <span className="text-sm font-medium leading-snug text-white/90">{s}</span>
              </li>
            ))}
          </ul>
        </div>
      </div>
    </section>
  );
}
