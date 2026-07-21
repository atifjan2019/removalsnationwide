import Image from "next/image";
import SectionHeading from "@/components/ui/SectionHeading";
import Button from "@/components/ui/Button";
import { CheckIcon, BoxIcon } from "@/components/ui/icons";
import { REMOTE_IMAGES } from "@/lib/remote-images";

const features = [
  "24/7 CCTV-monitored facility",
  "Fully insured storage units",
  "Short-term storage for bridging situations",
  "Long-term storage for renovations and overseas moves",
  "Combined with your removal as one managed service",
  "Container and household storage options",
];

export default function StorageSection() {
  return (
    <section
      id="storage"
      className="bg-white py-20"
      aria-labelledby="storage-heading"
    >
      <div className="mx-auto max-w-[88rem] px-4">
        {/* Intro split */}
        <div className="grid items-center gap-10 lg:grid-cols-2 lg:gap-16" data-reveal>
          <div>
            <SectionHeading
              align="left"
              eyebrow="Secure Removals Storage"
              title="Removals and Storage Across the UK"
            />
            <p className="mt-8 border-l-2 border-brand-red pl-5 text-lg font-medium leading-relaxed text-brand-navy">
              Removals Nationwide operates 24/7 CCTV-monitored, fully insured storage for
              short-term and long-term requirements. The facility protects your belongings
              during the gap between moving out and moving in, whether that results from a
              completion delay, a chain break, a renovation or a downsizing situation.
            </p>
            <div className="mt-6 space-y-5 text-base leading-relaxed text-brand-charcoal/80">
              <p>
                Short-term storage covers days or weeks for bridging situations. Long-term
                storage suits international moves, property renovations and extended family
                transitions. All units are individually insured and accessed through a
                managed process.
              </p>
              <p>
                A single booking covers the move from your current property, transport to the
                facility and delivery to your new address when you are ready. Storage and
                removal work as one seamless service, not two separate bookings.
              </p>
            </div>
            <div className="mt-8">
              <Button href="/storage" variant="red" size="md">
                Secure Storage
              </Button>
            </div>
          </div>

          <div>
            <div className="relative">
              <div
                className="absolute -bottom-4 -right-4 hidden h-full w-full rounded-2xl bg-brand-red sm:block"
                aria-hidden="true"
              />
              <div className="relative overflow-hidden rounded-2xl border border-black/10 shadow-lg">
                <div className="relative aspect-[4/3] w-full">
                  <Image
                    src={REMOTE_IMAGES.storage}
                    alt="Secure CCTV-monitored storage facility for household and business goods"
                    fill
                    sizes="(max-width: 1024px) 100vw, 45vw"
                    className="object-cover"
                  />
                </div>
              </div>
              <span
                className="absolute -left-3 -top-3 flex h-14 w-14 items-center justify-center rounded-full bg-brand-red text-white shadow-lg ring-4 ring-white"
                aria-hidden="true"
              >
                <BoxIcon className="h-7 w-7" />
              </span>
            </div>
          </div>
        </div>

        {/* Storage at a glance */}
        <div className="mt-14 border-t border-black/10 pt-10" data-reveal>
          <h3 className="text-lg font-bold uppercase tracking-wide text-brand-navy">
            Storage at a glance
          </h3>
          <ul className="mt-6 grid gap-4 sm:grid-cols-2 lg:grid-cols-3">
            {features.map((f) => (
              <li
                key={f}
                className="rounded-2xl border border-black/10 bg-white p-6 text-center shadow-sm transition hover:-translate-y-1 hover:border-brand-red/40 hover:shadow-lg"
              >
                <span className="mx-auto flex h-11 w-11 items-center justify-center rounded-xl bg-brand-red/10 text-brand-red">
                  <CheckIcon className="h-5 w-5" strokeWidth={3} />
                </span>
                <p className="mt-4 text-sm font-medium leading-relaxed text-brand-navy">{f}</p>
              </li>
            ))}
          </ul>
        </div>
      </div>
    </section>
  );
}
