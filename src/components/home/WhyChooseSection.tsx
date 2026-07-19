import Link from "next/link";
import SectionHeading from "@/components/ui/SectionHeading";
import Button from "@/components/ui/Button";
import { CheckIcon } from "@/components/ui/icons";

const reasons = [
  {
    heading: "Fully insured on every move",
    body: "Every removal is covered by public liability insurance and goods-in-transit insurance. When something is damaged, there is a clear claims process with a real financial remedy, not an unenforceable verbal assurance.",
  },
  {
    heading: "Free surveys, fixed prices, no surprises",
    body: "Free on-site surveys and video surveys are available for all London moves. The survey produces a written fixed quote with no hidden fees. All prices include VAT, fuel and equipment.",
  },
  {
    heading: "Established and experienced",
    body: "Our London removal company has been completing moves for residential and commercial clients across London, the UK and internationally. Our crews attend regular customer service and operational training.",
  },
  {
    heading: "24/7 CCTV-monitored storage",
    body: "Secure 24/7 CCTV-monitored storage is available for short-term and long-term needs. The facility is staffed, individually insured and accessible through a managed process.",
  },
  {
    heading: "Seven days a week",
    body: "Our crews operate seven days a week across London. Weekend and bank holiday moves are available at agreed rates with no surprise surcharges.",
  },
  {
    heading: "Nationwide and international coverage",
    body: "London, Greater London and Surrey removals are our core. Nationwide and international relocations are covered by the same surveyed, fixed-price process.",
  },
];

const accreditations = [
  "British Association of Removers (BAR)",
  "National Guild of Removers and Storers (NGRS)",
  "The Furniture Ombudsman",
  "QSS-DW Approved Mover",
  "Checkatrade",
  "International Association of Movers (IAM)",
];

export default function WhyChooseSection() {
  return (
    <section
      id="why-choose"
      className="bg-brand-sand py-20"
      aria-labelledby="why-choose-heading"
    >
      <div className="mx-auto max-w-[88rem] px-4">
        <SectionHeading
          align="left"
          title="Why Choose Removals Nationwide"
        />

        <div className="mt-6">
          <p className="max-w-3xl text-base leading-relaxed text-brand-charcoal/85">
            Removals Nationwide holds accreditation from the British Association of Removers (BAR),
            the National Guild of Removers and Storers (NGRS), The Furniture Ombudsman,
            QSS-DW, Checkatrade and the International Association of Movers (IAM). Each
            accreditation is independently verified and displayed on our{" "}
            <Link
              href="/certificates"
              className="text-brand-red underline underline-offset-2"
            >
              certificates page
            </Link>
            .
          </p>
        </div>

        <div className="mt-12 grid gap-6 md:grid-cols-2 lg:grid-cols-3">
          {reasons.map((r, i) => (
            <div
              key={r.heading}
              className="rounded-2xl border border-black/5 bg-white p-7 shadow-sm"
              data-reveal
              data-delay={String((i % 3) + 1)}
            >
              <h3 className="text-base font-bold uppercase tracking-wide text-brand-navy">
                {r.heading}
              </h3>
              <p className="mt-3 text-sm leading-relaxed text-brand-charcoal/80">{r.body}</p>
            </div>
          ))}
        </div>

        <div className="mt-12 rounded-2xl bg-brand-navy p-8 text-white" data-reveal>
          <h3 className="text-lg font-bold uppercase tracking-wide text-white">
            Accreditations and certifications
          </h3>
          <ul className="mt-5 grid gap-2 sm:grid-cols-2 lg:grid-cols-3">
            {accreditations.map((a) => (
              <li key={a} className="flex items-start gap-2">
                <CheckIcon className="mt-0.5 h-4 w-4 shrink-0 text-brand-red" strokeWidth={3} />
                <span className="text-sm text-white/85">{a}</span>
              </li>
            ))}
          </ul>
          <div className="mt-6 flex flex-wrap gap-4">
            <Button href="/certificates" variant="red" size="md">
              View Certificates
            </Button>
            <Button href="/about-us" variant="outline-light" size="md">
              About Us
            </Button>
            <Button href="#reviews" variant="outline-light" size="md">
              Read Our Reviews
            </Button>
          </div>
        </div>
      </div>
    </section>
  );
}
