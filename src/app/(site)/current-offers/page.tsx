import type { Metadata } from "next";
import Link from "next/link";
import { buildMetadata, breadcrumbLd, SITE_URL } from "@/lib/seo";
import JsonLd from "@/components/seo/JsonLd";
import PageBanner from "@/components/layout/PageBanner";
import StickyMobileBar from "@/components/services/StickyMobileBar";
import SectionHeading from "@/components/ui/SectionHeading";
import Button from "@/components/ui/Button";
import Accreditations from "@/components/home/Accreditations";
import { CheckIcon } from "@/components/ui/icons";

export const metadata: Metadata = buildMetadata("current-offers");

const offersPageSchema = {
  "@context": "https://schema.org",
  "@type": "WebPage",
  "@id": `${SITE_URL}/current-offers#webpage`,
  url: `${SITE_URL}/current-offers`,
  name: "Current Offers",
  description:
    "Current offers from Removals Nationwide. We focus on fair, transparent pricing every day, with savings when you combine services.",
  about: { "@id": `${SITE_URL}/#organization` },
  publisher: { "@id": `${SITE_URL}/#organization` },
};

const offersBreadcrumb = breadcrumbLd([
  { label: "Home", href: "/" },
  { label: "Current Offers", href: "/current-offers" },
]);

/* Ongoing combined-booking savings, confirmed standing benefits (no deadlines,
   no invented percentages). Time-limited promotions are only added here once
   operations confirms them, with validity dates and terms. */
const savings = [
  {
    title: "Cleaning with your removal",
    body: "Book end of tenancy or move-out cleaning alongside your removal and ask your move coordinator about the current combined-booking discount. We coordinate both crews so the schedule works around your move.",
    href: "/cleaning-services",
    linkLabel: "Cleaning services",
  },
  {
    title: "Materials with your packing",
    body: "When packing is booked with your move, a materials discount applies. Boxes, wrapping and tape are included in the per-carton packing price, with nothing charged separately.",
    href: "/packing-service",
    linkLabel: "Packing service",
  },
  {
    title: "Combine your services",
    body: "Bundling a removal with storage, crate hire or rubbish clearance keeps everything under one coordinator and one schedule, which keeps the overall cost down.",
    href: "/prices",
    linkLabel: "See our prices",
  },
];

export default function CurrentOffersPage() {
  return (
    <>
      <JsonLd data={offersPageSchema} />
      <JsonLd data={offersBreadcrumb} />
      <StickyMobileBar />
      <PageBanner
        title="Current Offers"
        subtitle="Fair, Transparent Pricing Every Day"
        crumbs={[{ label: "Home", href: "/" }, { label: "Current Offers" }]}
      />

      {/* Honest none-state */}
      <section className="bg-white py-20">
        <div className="mx-auto max-w-3xl px-4 text-center">
          <SectionHeading eyebrow="Offers" title="No Time-Limited Promotions Right Now" />
          <p className="mt-6 text-base leading-relaxed text-brand-charcoal/85">
            We are not running a time-limited promotion at the moment. Rather than headline deals
            that come and go, Removals Nationwide focuses on fair, transparent pricing every day. See real
            figures on our{" "}
            <Link href="/prices" className="font-semibold text-brand-navy underline underline-offset-2 hover:text-brand-red">
              prices page
            </Link>{" "}
            and get an exact figure from a free no-obligation survey.
          </p>
          <p className="mt-4 text-base leading-relaxed text-brand-charcoal/85">
            When a seasonal offer is live, it will appear here with its full terms and validity
            dates.
          </p>
        </div>
      </section>

      {/* Ongoing combined-booking savings */}
      <section className="bg-brand-grey py-20">
        <div className="mx-auto max-w-[88rem] px-4">
          <SectionHeading
            eyebrow="Ways to save"
            title="Ongoing Savings When You Combine Services"
          />
          <div className="mt-12 grid gap-6 md:grid-cols-3">
            {savings.map((s) => (
              <div
                key={s.title}
                className="flex h-full flex-col rounded-2xl border border-black/8 bg-white p-6 shadow-sm"
              >
                <span className="inline-flex h-9 w-9 items-center justify-center rounded-full bg-brand-red text-white">
                  <CheckIcon className="h-5 w-5" strokeWidth={3} />
                </span>
                <h3 className="mt-4 text-base font-bold text-brand-navy">{s.title}</h3>
                <p className="mt-2 flex-1 text-sm leading-relaxed text-brand-charcoal/80">{s.body}</p>
                <Link
                  href={s.href}
                  className="mt-3 inline-block text-sm font-semibold text-brand-navy underline underline-offset-2 hover:text-brand-red"
                >
                  {s.linkLabel}
                </Link>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* CTA */}
      <section className="bg-brand-navy py-16">
        <div className="mx-auto max-w-[88rem] px-4 text-center">
          <h2 className="font-heading text-2xl font-bold text-white sm:text-3xl">
            Get Your Free No-Obligation Quote
          </h2>
          <p className="mx-auto mt-3 max-w-xl text-base text-white/70">
            Tell us about your move for an exact, fair price. Accredited, insured, 7 days a week.
          </p>
          <div className="mt-8 flex flex-col justify-center gap-3 sm:flex-row sm:flex-wrap">
            <Button href="/bookservice#quick-quote" variant="red" size="lg" className="w-full sm:w-auto">
              Quick Quote
            </Button>
            <Button href="/bookservice" variant="outline-light" size="lg" className="w-full sm:w-auto">
              Book a Service
            </Button>
            <Button href="tel:+442072052525" variant="outline-light" size="lg" className="w-full sm:w-auto">
              020 7205 2525
            </Button>
          </div>
        </div>
      </section>

      <Accreditations />
    </>
  );
}
