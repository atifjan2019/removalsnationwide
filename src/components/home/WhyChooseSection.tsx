import SectionHeading from "@/components/ui/SectionHeading";

const reasons = [
  {
    heading: "Fully insured on every move",
    body: "Every removal includes public liability and goods-in-transit insurance, with a clear claims process.",
  },
  {
    heading: "Free surveys and fixed prices",
    body: "Free on-site and video surveys produce a written quote covering the agreed work, equipment and transport.",
  },
  {
    heading: "Established and experienced",
    body: "Our trained crews complete residential and commercial moves across the UK and internationally.",
  },
  {
    heading: "Secure storage",
    body: "CCTV-monitored storage is available for short-term and long-term needs through a managed access process.",
  },
  {
    heading: "Seven days a week",
    body: "Weekend and bank-holiday moves are available at agreed rates, subject to scheduling.",
  },
  {
    heading: "Wide service coverage",
    body: "Local, nationwide and international relocations use the same surveyed, planned moving process.",
  },
];

export default function WhyChooseSection() {
  return (
    <section id="why-choose" className="bg-brand-sand py-20" aria-labelledby="why-choose-heading">
      <div className="mx-auto max-w-[88rem] px-4">
        <SectionHeading align="left" title="Why Choose Removals Nationwide" />
        <div className="mt-12 grid gap-6 md:grid-cols-2 lg:grid-cols-3">
          {reasons.map((reason, i) => (
            <div
              key={reason.heading}
              className="rounded-2xl border border-black/5 bg-white p-7 shadow-sm"
              data-reveal
              data-delay={String((i % 3) + 1)}
            >
              <h3 className="text-base font-bold uppercase tracking-wide text-brand-navy">{reason.heading}</h3>
              <p className="mt-3 text-sm leading-relaxed text-brand-charcoal/80">{reason.body}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
