import Link from "next/link";
import Image from "next/image";
import SectionHeading from "@/components/ui/SectionHeading";
import Button from "@/components/ui/Button";
import { HomeIcon } from "@/components/ui/icons";
import { REMOTE_IMAGES } from "@/lib/remote-images";

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
          title="House Removals Across the UK"
        />

        <div className="mt-12 grid gap-10 lg:grid-cols-12 lg:gap-14" data-reveal>
          {/* Sticky framed visual */}
          <div className="lg:col-span-5">
            <div className="lg:sticky lg:top-28">
              <div className="relative">
                <div
                  className="absolute -bottom-4 -right-4 hidden h-full w-full rounded-2xl bg-brand-red sm:block"
                  aria-hidden="true"
                />
                <div className="relative overflow-hidden rounded-2xl border border-black/10 shadow-lg">
                  <div className="relative aspect-[4/5] w-full">
                    <Image
                      src={REMOTE_IMAGES.homeMove}
                      alt="Removals Nationwide crew completing a professional house move in the UK"
                      fill
                      sizes="(max-width: 1024px) 100vw, 40vw"
                      className="object-cover"
                    />
                  </div>
                </div>
                <span
                  className="absolute -left-3 -top-3 flex h-14 w-14 items-center justify-center rounded-full bg-brand-red text-white shadow-lg ring-4 ring-brand-sand"
                  aria-hidden="true"
                >
                  <HomeIcon className="h-7 w-7" />
                </span>
              </div>
            </div>
          </div>

          {/* Content */}
          <div className="lg:col-span-7">
            <p className="border-l-2 border-brand-red pl-5 text-lg font-medium leading-relaxed text-brand-navy">
              A full house removal runs from the initial free survey through to furniture
              reassembly at your new address. Our crews handle every step: property survey,
              professional packing, furniture dismantling and wrapping, loading onto a fully
              insured vehicle, transport, unloading and reassembly. Packing waste is collected
              after the move at no extra charge.
            </p>

            <div className="mt-6 space-y-5 text-base leading-relaxed text-brand-charcoal/80">
              <p>
                Coverage extends across the UK, with the same survey-to-settle-in process for
                local and long-distance relocations.
                In 2026 our teams operate seven days a week to fit around completion dates,
                chain timelines and short-notice requirements.
              </p>
              <p>
                House moves in busy cities and older properties regularly present access challenges
                that a standard quote ignores. Top-floor flats without a lift require a furniture hoist or a stair-carry
                crew with assessed route planning. Narrow Victorian staircases in period properties
                need careful dismantling and measured access work. Parking suspensions are needed
                on many controlled residential streets, and our operations team arranges the local permit
                as part of move planning.
              </p>
              <p>
                Completion delays and chain breaks create short-notice requirements. Our secure
                24/7 CCTV-monitored storage bridges the gap between moving out and moving in,
                combined with the removal as one managed service.
              </p>
            </div>

            <div className="mt-10 border-t border-black/10 pt-8">
              <h3 className="text-lg font-bold text-brand-navy">Property types we cover</h3>
              <ul className="mt-5 grid gap-3 sm:grid-cols-2">
                {propertyTypes.map((type) => (
                  <li
                    key={type}
                    className="group flex items-center gap-3 rounded-xl border border-black/10 bg-white px-4 py-3.5 transition hover:-translate-y-0.5 hover:border-brand-red/40 hover:shadow-sm"
                  >
                    <span className="flex h-9 w-9 shrink-0 items-center justify-center rounded-lg bg-brand-red/10 text-brand-red transition group-hover:bg-brand-red group-hover:text-white">
                      <HomeIcon className="h-4 w-4" />
                    </span>
                    <span className="text-sm font-medium leading-snug text-brand-navy">{type}</span>
                  </li>
                ))}
              </ul>
            </div>

            <div className="mt-8 flex flex-wrap items-center gap-x-6 gap-y-4">
              <Button href="/house-removals" variant="red" size="md">
                Nationwide House Removals
              </Button>
              <div className="flex flex-wrap gap-x-6 gap-y-2">
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
