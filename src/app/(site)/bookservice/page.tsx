import type { Metadata } from "next";
import { buildMetadata, breadcrumbLd, SITE_URL } from "@/lib/seo";
import JsonLd from "@/components/seo/JsonLd";
import PageBanner from "@/components/layout/PageBanner";
import StickyMobileBar from "@/components/services/StickyMobileBar";
import SectionHeading from "@/components/ui/SectionHeading";
import BookingForm from "@/components/booking/BookingForm";
import Testimonials from "@/components/home/Testimonials";
import { PhoneIcon, CheckIcon } from "@/components/ui/icons";

export const metadata: Metadata = buildMetadata("book-a-service");

const nextSteps = [
  {
    title: "We review your details",
    body: "A member of the team reads through your move details and confirms the scope, date and access requirements.",
  },
  {
    title: "We prepare your quote",
    body: "We put together a clear quote. For larger moves we arrange a free on-site or video survey so the price is fixed with no hidden fees.",
  },
  {
    title: "You confirm and book",
    body: "Once you are happy with the quote, we lock in your date and your move coordinator handles the rest, 7 days a week.",
  },
];

const reassurance = [
  "industry and professional experienced",
  "Fully insured, cover included",
  "7 days a week",
  "No hidden fees",
];

const bookBreadcrumb = breadcrumbLd([
  { label: "Home", href: "/" },
  { label: "Book a Service", href: "/bookservice" },
]);

const bookPageSchema = {
  "@context": "https://schema.org",
  "@type": "WebPage",
  "@id": `${SITE_URL}/bookservice#webpage`,
  url: `${SITE_URL}/bookservice`,
  name: "Book Your Move",
  description:
    "Start your booking or detailed quote with Removals Nationwide. Experienced, insured, 7 days a week.",
  about: { "@id": `${SITE_URL}/#organization` },
  publisher: { "@id": `${SITE_URL}/#organization` },
};

export default function BookAServicePage() {
  return (
    <>
      <JsonLd data={bookPageSchema} />
      <JsonLd data={bookBreadcrumb} />
      <StickyMobileBar />
      <PageBanner
        title="Book Your Move"
        subtitle="Get Your Move Started"
        crumbs={[{ label: "Home", href: "/" }, { label: "Book a Service" }]}
      />

      <section className="bg-brand-grey py-20">
        <div className="mx-auto max-w-4xl px-4">
          <p className="mb-8 text-base leading-relaxed text-brand-charcoal/85">
            Please fill the form below and a member of our sales team will contact you as soon as
            possible. Fields marked with <span className="font-semibold text-brand-red">*</span>{" "}
            are required fields.
          </p>

          <BookingForm />
        </div>
      </section>

      {/* What happens next */}
      <section className="bg-white py-20">
        <div className="mx-auto max-w-[88rem] px-4">
          <SectionHeading eyebrow="After you submit" title="What Happens Next" />
          <div className="mt-12 grid gap-6 md:grid-cols-3">
            {nextSteps.map((step, i) => (
              <div key={step.title} className="rounded-2xl border border-black/8 bg-brand-grey p-6">
                <span className="inline-flex h-9 w-9 items-center justify-center rounded-full bg-brand-red font-heading text-sm font-bold text-white">
                  {i + 1}
                </span>
                <h3 className="mt-4 text-base font-bold text-brand-navy">{step.title}</h3>
                <p className="mt-2 text-sm leading-relaxed text-brand-charcoal/80">{step.body}</p>
              </div>
            ))}
          </div>
          <p className="mx-auto mt-6 max-w-2xl text-center text-sm text-brand-charcoal/60">
            Submitting the form starts a quote and booking conversation. It does not confirm a price
            or a slot until we have confirmed the details with you.
          </p>
        </div>
      </section>

      {/* Reassurance */}
      <section className="bg-brand-sand py-14">
        <div className="mx-auto max-w-[88rem] px-4">
          <ul className="flex flex-wrap items-center justify-center gap-3">
            {reassurance.map((item) => (
              <li
                key={item}
                className="inline-flex items-center gap-2 rounded-full bg-white px-4 py-2 text-sm font-semibold text-brand-navy shadow-sm"
              >
                <span className="inline-flex h-5 w-5 items-center justify-center rounded-full bg-brand-red text-white">
                  <CheckIcon className="h-3.5 w-3.5" strokeWidth={3} />
                </span>
                {item}
              </li>
            ))}
          </ul>
        </div>
      </section>

      {/* Prefer to call */}
      <section className="bg-brand-navy py-16">
        <div className="mx-auto max-w-[88rem] px-4 text-center">
          <h2 className="font-heading text-2xl font-bold text-white sm:text-3xl">Prefer to Call?</h2>
          <p className="mx-auto mt-3 max-w-xl text-base text-white/70">
            Speak to a move coordinator 7 days a week.
          </p>
          <div className="mt-8 flex flex-col items-center justify-center gap-3 sm:flex-row">
            <a
              href="tel:+442072052525"
              className="inline-flex min-h-[44px] items-center gap-2 rounded-xl bg-brand-red px-6 py-3 text-base font-bold text-white transition hover:bg-white hover:text-brand-navy"
            >
              <PhoneIcon className="h-5 w-5" />
              020 7205 2525
            </a>
            <a
              href="tel:+448000467877"
              className="inline-flex min-h-[44px] items-center gap-2 rounded-xl border border-white/30 px-6 py-3 text-base font-bold text-white transition hover:bg-white/10"
            >
              <PhoneIcon className="h-5 w-5" />
              0800 046 7877
            </a>
          </div>
        </div>
      </section>

      <Testimonials />
    </>
  );
}
