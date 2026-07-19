import SectionHeading from "@/components/ui/SectionHeading";
import Button from "@/components/ui/Button";
import { CheckIcon } from "@/components/ui/icons";

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
          eyebrow="Pianos, Antiques, Fine Art"
          title="Nationwide Piano, Antique and Fragile Item Removals"
        />

        <div className="mt-10 grid gap-10 lg:grid-cols-2" data-reveal>
          <div className="space-y-8">
            <div>
              <h3 className="text-lg font-bold uppercase tracking-wide text-brand-navy">
                Nationwide piano removals
              </h3>
              <p className="mt-3 text-base leading-relaxed text-brand-charcoal/85">
                Upright pianos, grand pianos and digital pianos all require specialist moving
                equipment and crew training. Our piano removal team assesses access at both
                addresses, plans the route through the property and uses a piano board and
                purpose-made straps to move the instrument safely. Floor protection is laid
                throughout the property on move day.
              </p>
            </div>

            <div>
              <h3 className="text-lg font-bold uppercase tracking-wide text-brand-navy">
                Antiques, fine art and fragile items
              </h3>
              <p className="mt-3 text-base leading-relaxed text-brand-charcoal/85">
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

          <div className="rounded-2xl bg-white p-8 shadow-sm">
            <h3 className="text-lg font-bold uppercase tracking-wide text-brand-navy">
              Specialist equipment we use
            </h3>
            <ul className="mt-5 space-y-3">
              {equipment.map((e) => (
                <li key={e} className="flex items-start gap-3">
                  <span className="mt-0.5 inline-flex h-6 w-6 shrink-0 items-center justify-center rounded-full bg-brand-red text-white">
                    <CheckIcon className="h-4 w-4" strokeWidth={3} />
                  </span>
                  <span className="text-sm leading-relaxed text-brand-charcoal/90">{e}</span>
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
      </div>
    </section>
  );
}
