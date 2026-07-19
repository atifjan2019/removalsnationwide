import SectionHeading from "@/components/ui/SectionHeading";
import Button from "@/components/ui/Button";
import { CheckIcon } from "@/components/ui/icons";

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
        <div className="grid gap-10 lg:grid-cols-2 lg:items-center" data-reveal>
          <div>
            <SectionHeading
              align="left"
              eyebrow="Secure London Storage"
              title="Removals and Storage in London"
            />
            <div className="mt-8 space-y-5 text-base leading-relaxed text-brand-charcoal/85">
              <p>
                Removals Nationwide operates 24/7 CCTV-monitored, fully insured storage in London for
                short-term and long-term requirements. The facility protects your belongings
                during the gap between moving out and moving in, whether that results from a
                completion delay, a chain break, a renovation or a downsizing situation.
              </p>
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
                London Storage
              </Button>
            </div>
          </div>

          <div className="rounded-2xl bg-brand-grey p-8">
            <h3 className="text-lg font-bold uppercase tracking-wide text-brand-navy">
              Storage at a glance
            </h3>
            <ul className="mt-5 space-y-4">
              {features.map((f) => (
                <li key={f} className="flex items-start gap-3">
                  <span className="mt-0.5 inline-flex h-6 w-6 shrink-0 items-center justify-center rounded-full bg-brand-red text-white">
                    <CheckIcon className="h-4 w-4" strokeWidth={3} />
                  </span>
                  <span className="text-sm leading-relaxed text-brand-charcoal/90">{f}</span>
                </li>
              ))}
            </ul>
          </div>
        </div>
      </div>
    </section>
  );
}
