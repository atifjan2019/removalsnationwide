import SectionHeading from "@/components/ui/SectionHeading";
import Button from "@/components/ui/Button";
import { CheckIcon } from "@/components/ui/icons";

const materials = [
  "Double-walled moving boxes",
  "Bubble wrap and packing paper",
  "Wardrobe boxes for hanging clothes",
  "Foam sheets and corner protectors",
  "Specialist wrapping for fragile items",
  "Adhesive labels by room for fast unloading",
];

export default function PackingSection() {
  return (
    <section
      id="packing"
      className="bg-brand-sand py-20"
      aria-labelledby="packing-heading"
    >
      <div className="mx-auto max-w-[88rem] px-4">
        <SectionHeading
          eyebrow="Full and Partial Packing"
          title="Professional Packing Services Across the UK"
        />

        <div className="mt-10 grid gap-8 md:grid-cols-3">
          <div className="rounded-2xl bg-white p-7 shadow-sm" data-reveal data-delay="1">
            <h3 className="text-base font-bold uppercase tracking-wide text-brand-navy">
              Full packing
            </h3>
            <p className="mt-3 text-sm leading-relaxed text-brand-charcoal/80">
              Every item in the property is packed by our trained team. Materials are delivered
              in advance and all boxes are clearly labelled by room for fast, organised unloading
              at the new address.
            </p>
          </div>
          <div className="rounded-2xl bg-white p-7 shadow-sm" data-reveal data-delay="2">
            <h3 className="text-base font-bold uppercase tracking-wide text-brand-navy">
              Partial packing
            </h3>
            <p className="mt-3 text-sm leading-relaxed text-brand-charcoal/80">
              Our team handles only the fragile, awkward or high-value items you prefer not to
              pack yourself. Glassware, artwork, electronics and antiques are individually wrapped
              and protected.
            </p>
          </div>
          <div className="rounded-2xl bg-white p-7 shadow-sm" data-reveal data-delay="3">
            <h3 className="text-base font-bold uppercase tracking-wide text-brand-navy">
              Unpacking service
            </h3>
            <p className="mt-3 text-sm leading-relaxed text-brand-charcoal/80">
              Unpacking at the destination is available on request. Packing waste and used
              materials are collected after the move at no extra charge.
            </p>
          </div>
        </div>

        <div className="mt-10 grid gap-6 lg:grid-cols-2 lg:items-start">
          <div>
            <h3 className="text-lg font-bold uppercase tracking-wide text-brand-navy">
              Packing materials we use
            </h3>
            <ul className="mt-4 space-y-3">
              {materials.map((m) => (
                <li key={m} className="flex items-start gap-3">
                  <span className="mt-0.5 inline-flex h-6 w-6 shrink-0 items-center justify-center rounded-full bg-brand-red text-white">
                    <CheckIcon className="h-4 w-4" strokeWidth={3} />
                  </span>
                  <span className="text-sm leading-relaxed text-brand-charcoal/90">{m}</span>
                </li>
              ))}
            </ul>
          </div>
          <div className="flex flex-col gap-4">
            <p className="text-base leading-relaxed text-brand-charcoal/85">
              Packing is available as an add-on to any house, office or man and van booking.
              Materials are ordered based on your survey or estimated volume and delivered to
              your address before move day.
            </p>
            <div className="flex flex-wrap gap-3">
              <Button href="/packing-service" variant="red" size="md">
                Nationwide Packing Services
              </Button>
              <Button href="/packaging-materials" variant="navy" size="md">
                Packaging Materials
              </Button>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
