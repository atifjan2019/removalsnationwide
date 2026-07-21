import Image from "next/image";
import SectionHeading from "@/components/ui/SectionHeading";
import Button from "@/components/ui/Button";
import { CheckIcon, BoxIcon, PackageIcon, TapeIcon } from "@/components/ui/icons";
import { REMOTE_IMAGES } from "@/lib/remote-images";

const materials = [
  "Double-walled moving boxes",
  "Bubble wrap and packing paper",
  "Wardrobe boxes for hanging clothes",
  "Foam sheets and corner protectors",
  "Specialist wrapping for fragile items",
  "Adhesive labels by room for fast unloading",
];

const services = [
  {
    icon: BoxIcon,
    title: "Full packing",
    body: "Every item in the property is packed by our trained team. Materials are delivered in advance and all boxes are clearly labelled by room for fast, organised unloading at the new address.",
  },
  {
    icon: PackageIcon,
    title: "Partial packing",
    body: "Our team handles only the fragile, awkward or high-value items you prefer not to pack yourself. Glassware, artwork, electronics and antiques are individually wrapped and protected.",
  },
  {
    icon: TapeIcon,
    title: "Unpacking service",
    body: "Unpacking at the destination is available on request. Packing waste and used materials are collected after the move at no extra charge.",
  },
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

        <div className="mt-12 grid gap-6 md:grid-cols-3">
          {services.map((service, i) => (
            <div
              key={service.title}
              className="group relative overflow-hidden rounded-2xl border border-black/10 bg-white p-8 shadow-sm transition-all duration-300 hover:-translate-y-1 hover:shadow-lg"
              data-reveal
              data-delay={`${i + 1}`}
            >
              <span className="absolute inset-x-0 top-0 h-1 bg-brand-red" aria-hidden="true" />
              <span className="flex h-12 w-12 items-center justify-center rounded-xl bg-brand-red/10 text-brand-red transition group-hover:bg-brand-red group-hover:text-white">
                <service.icon className="h-6 w-6" />
              </span>
              <h3 className="mt-5 text-base font-bold uppercase tracking-wide text-brand-navy">
                {service.title}
              </h3>
              <p className="mt-3 text-sm leading-relaxed text-brand-charcoal/80">{service.body}</p>
            </div>
          ))}
        </div>

        <div className="mt-14 grid items-center gap-10 lg:grid-cols-2 lg:gap-16">
          <div>
            <h3 className="text-lg font-bold uppercase tracking-wide text-brand-navy">
              Packing materials we use
            </h3>
            <ul className="mt-6 grid gap-3 sm:grid-cols-2">
              {materials.map((m) => (
                <li
                  key={m}
                  className="group flex items-center gap-3 rounded-xl border border-black/10 bg-white px-4 py-3.5 transition hover:-translate-y-0.5 hover:border-brand-red/40 hover:shadow-sm"
                >
                  <span className="flex h-8 w-8 shrink-0 items-center justify-center rounded-lg bg-brand-red/10 text-brand-red transition group-hover:bg-brand-red group-hover:text-white">
                    <CheckIcon className="h-4 w-4" strokeWidth={3} />
                  </span>
                  <span className="text-sm font-medium leading-snug text-brand-navy">{m}</span>
                </li>
              ))}
            </ul>
          </div>

          <div>
            <div className="relative">
              <div
                className="absolute -bottom-4 -right-4 hidden h-full w-full rounded-2xl bg-brand-red sm:block"
                aria-hidden="true"
              />
              <div className="relative overflow-hidden rounded-2xl border border-black/10 shadow-lg">
                <div className="relative aspect-[16/10] w-full">
                  <Image
                    src={REMOTE_IMAGES.movingBoxes}
                    alt="Professional packing service wrapping and boxing fragile household items"
                    fill
                    sizes="(max-width: 1024px) 100vw, 45vw"
                    className="object-cover"
                  />
                </div>
              </div>
              <span
                className="absolute -left-3 -top-3 flex h-14 w-14 items-center justify-center rounded-full bg-brand-red text-white shadow-lg ring-4 ring-brand-sand"
                aria-hidden="true"
              >
                <TapeIcon className="h-7 w-7" />
              </span>
            </div>
            <p className="mt-8 text-base leading-relaxed text-brand-charcoal/85">
              Packing is available as an add-on to any house, office or man and van booking.
              Materials are ordered based on your survey or estimated volume and delivered to
              your address before move day.
            </p>
            <div className="mt-5 flex flex-wrap gap-3">
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
