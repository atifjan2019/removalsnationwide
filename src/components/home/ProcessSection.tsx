import SectionHeading from "@/components/ui/SectionHeading";
import Button from "@/components/ui/Button";
import { HOME_HOWTO_STEPS } from "@/lib/seo";

const stepIcons = ["01", "02", "03", "04", "05", "06", "07"];

export default function ProcessSection() {
  return (
    <section
      id="process"
      className="bg-white py-20"
      aria-labelledby="process-heading"
    >
      <div className="mx-auto max-w-[88rem] px-4">
        <SectionHeading
          eyebrow="Survey to Settled-In"
          title="How Our London Removals Process Works"
        />

        <p className="mx-auto mt-5 max-w-3xl text-center text-base leading-relaxed text-brand-charcoal/80">
          The Removals Nationwide move process runs from your first enquiry to settled in across
          seven steps. Parking, access and permits are handled as part of the process, not
          added on at the end.
        </p>

        <ol className="mt-12 grid gap-6 md:grid-cols-2 lg:grid-cols-4">
          {HOME_HOWTO_STEPS.map((step, i) => (
            <li
              key={step.name}
              className="relative flex flex-col rounded-2xl border border-black/5 bg-brand-grey p-7 shadow-sm"
              data-reveal
              data-delay={String(Math.min(i + 1, 7))}
            >
              <span
                aria-hidden="true"
                className="mb-4 inline-flex h-12 w-12 items-center justify-center rounded-full bg-brand-navy text-lg font-extrabold text-brand-red"
              >
                {stepIcons[i]}
              </span>
              <h3 className="text-base font-bold uppercase tracking-wide text-brand-navy">
                {step.name}
              </h3>
              <p className="mt-3 text-sm leading-relaxed text-brand-charcoal/80">{step.text}</p>
            </li>
          ))}
        </ol>

        <div className="mt-10 flex flex-wrap justify-center gap-4">
          <Button href="/bookservice#quick-quote" variant="red" size="lg">
            Book a Free Survey
          </Button>
          <Button href="#access" variant="navy" size="lg">
            How We Handle Access
          </Button>
        </div>
      </div>
    </section>
  );
}
