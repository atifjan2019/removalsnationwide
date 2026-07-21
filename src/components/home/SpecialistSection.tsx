import Image from "next/image";
import SectionHeading from "@/components/ui/SectionHeading";
import Button from "@/components/ui/Button";
import { CheckIcon, CrateIcon, StarIcon } from "@/components/ui/icons";
import { REMOTE_IMAGES } from "@/lib/remote-images";

const equipment = [
  "Furniture hoists for properties without safe stair access",
  "Piano boards, straps and specialist lifting equipment",
  "Custom crating for antiques and fine art",
  "Heavy-duty protective blankets and foam wrapping",
  "Reinforced packaging for fragile collections",
  "Floor protection throughout the property",
];

export default function SpecialistSection() {
  return (
    <section
      id="specialist-removals"
      className="bg-brand-sand py-20"
      aria-labelledby="specialist-heading"
    >
      <div className="mx-auto max-w-[88rem] px-4">
        <SectionHeading
          align="left"
          eyebrow="Pianos, Antiques, Fine Art"
          title="Nationwide Piano, Antique and Fragile Item Removals"
        />

        <div className="mt-12 grid gap-10 lg:grid-cols-12 lg:gap-14" data-reveal>
          {/* Topic cards */}
          <div className="space-y-6 lg:col-span-7">
            <div className="rounded-2xl border border-black/10 bg-white p-8 shadow-sm">
              <div className="flex items-center gap-3">
                <span className="flex h-11 w-11 shrink-0 items-center justify-center rounded-xl bg-brand-red text-white">
                  <CrateIcon className="h-6 w-6" />
                </span>
                <h3 className="text-lg font-bold uppercase tracking-wide text-brand-navy">
                  Nationwide piano removals
                </h3>
              </div>
              <p className="mt-4 text-base leading-relaxed text-brand-charcoal/85">
                Upright pianos, grand pianos and digital pianos all require specialist moving
                equipment and crew training. Our piano removal team assesses access at both
                addresses, plans the route through the property and uses a piano board and
                purpose-made straps to move the instrument safely. Floor protection is laid
                throughout the property on move day.
              </p>
            </div>

            <div className="rounded-2xl border border-black/10 bg-white p-8 shadow-sm">
              <div className="flex items-center gap-3">
                <span className="flex h-11 w-11 shrink-0 items-center justify-center rounded-xl bg-brand-red text-white">
                  <StarIcon className="h-6 w-6" />
                </span>
                <h3 className="text-lg font-bold uppercase tracking-wide text-brand-navy">
                  Antiques, fine art and fragile items
                </h3>
              </div>
              <p className="mt-4 text-base leading-relaxed text-brand-charcoal/85">
                High-value and irreplaceable items travel in custom crates or purpose-built
                protective packaging. Each item is wrapped individually, labelled and loaded
                last so it unloads first. Full goods-in-transit insurance covers the move end
                to end.
              </p>
              <p className="mt-3 text-base leading-relaxed text-brand-charcoal/85">
                Specialist items demand trained crews with the right equipment, not a standard
                van team. Contact our team directly to discuss fragile or high-value item
                requirements before booking.
              </p>
            </div>
          </div>

          {/* Sticky visual */}
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
                      src={REMOTE_IMAGES.sofa}
                      alt="Movers carefully handling a specialist high-value item of furniture"
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
                  <StarIcon className="h-7 w-7" />
                </span>
              </div>
            </div>
          </div>
        </div>

        {/* Specialist equipment */}
        <div className="mt-14 border-t border-black/10 pt-10" data-reveal>
          <h3 className="text-lg font-bold uppercase tracking-wide text-brand-navy">
            Specialist equipment we use
          </h3>
          <ul className="mt-6 grid gap-3 sm:grid-cols-2 lg:grid-cols-3">
            {equipment.map((e) => (
              <li
                key={e}
                className="group flex items-start gap-3 rounded-xl border border-black/10 bg-white px-4 py-4 transition hover:-translate-y-0.5 hover:border-brand-red/40 hover:shadow-sm"
              >
                <span className="mt-0.5 flex h-7 w-7 shrink-0 items-center justify-center rounded-lg bg-brand-red/10 text-brand-red transition group-hover:bg-brand-red group-hover:text-white">
                  <CheckIcon className="h-4 w-4" strokeWidth={3} />
                </span>
                <span className="text-sm font-medium leading-snug text-brand-navy">{e}</span>
              </li>
            ))}
          </ul>
          <div className="mt-8">
            <Button href="/packing-service" variant="red" size="md">
              Specialist Packing and Removals
            </Button>
          </div>
        </div>
      </div>
    </section>
  );
}
