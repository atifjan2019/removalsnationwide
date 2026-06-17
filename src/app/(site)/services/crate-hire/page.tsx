import type { Metadata } from "next";
import Image from "next/image";
import PageBanner from "@/components/layout/PageBanner";
import SectionHeading from "@/components/ui/SectionHeading";
import CtaBand from "@/components/home/CtaBand";
import QuoteCtaRow from "@/components/services/QuoteCtaRow";
import CardGrid, { type Card } from "@/components/services/CardGrid";
import Faq, { type FaqItem } from "@/components/services/Faq";
import PricingTable, { type PricingRow } from "@/components/services/PricingTable";
import Testimonials from "@/components/home/Testimonials";
import Accreditations from "@/components/home/Accreditations";

export const metadata: Metadata = {
  title: "Crate Hire, Plastic Lidded Crates, IT Crates, For Hire from Top Removals",
  description:
    "Affordable plastic crate hire across the UK — standard lidded LC3 crates and secure IT crates for home and office moves. Eco-friendly, delivered and collected anytime. Get a free quote in under 2 minutes.",
};

const crateTypes: Card[] = [
  {
    title: "The Standard Lidded Crate (LC3)",
    body: "is one of the most popular types. The integral lid makes it safe and waterproof. In addition, we can seal it shut with our security locks. The LC3 is designed to store up to ten lever arch files which makes it ideal for office removals. You can use it to transport a variety of items including files, documents, folders, books, reports and CDs.",
  },
  {
    title: "The Computer Crate (IT)",
    body: "is specially designed for moving your IT equipment. It is a lidded crate made from tough polypropylene. The crates are sturdy and durable and provide extra protection for your PC gear during the move or while in storage. IT crates can hold up to a 21″ traditional computer monitor, all sizes of computers and peripheral devices (mouse, keyboard, headsets, etc.).",
  },
];

const hireColumns = ["Crate type", "Dimensions", "Unit cost per week", "General Use"];
const hireRows: PricingRow[] = [
  { label: "LC3 Crate 80 litre", values: ["60l x 40w x 35h", "£2.00", "Books, files, crockery"] },
  { label: "IT Crate 165 litre", values: ["65l x 46w x 59h", "£3.80", "PC's, technical equipment, servers"] },
];

const congestionColumns = [
  "No of Crates",
  "Inside Congestion Charge Zone",
  "Outside Congestion Zone Charge",
];
const congestionRows: PricingRow[] = [
  { label: "40 or More crates", values: ["£41.00", "£30.00"] },
  { label: "Less than 40 crates", values: ["£31.00", "£20.00"] },
];

const faqs: FaqItem[] = [
  {
    question: "Do you offer only IT crates and LC3?",
    answer:
      "These are the most common type of crates which usually cover 90% of the packing requirements for an office. However, we can also source a range of other sizes. A quote can be obtained individually after more details are shared with us.",
  },
  {
    question: "Can you hire crates for international relocations?",
    answer:
      "This service is only possible within the UK unless agreed in advance for a door-to-door international move across Europe. In such instances, our crew will unpack and collect the containers on the delivery date, as it is practically impossible to offer free collection of empty crates in Europe.",
  },
  {
    question:
      "Can you rent a crate if you live outside of London or this is a service offered only for those who are in the capital?",
    answer:
      "Certainly, crates can be delivered and collected from any point in the UK. Since this happens by a courier, we would require some flexibility in terms of timings. The distance will be calculated in the delivery/collection fees offered.",
  },
];

export default function CrateHirePage() {
  return (
    <>
      <PageBanner
        title="Standard or IT Crates, Long Term or Short"
        subtitle="We Can Deliver Anywhere Anytime"
        crumbs={[
          { label: "Home", href: "/" },
          { label: "Services", href: "/services" },
          { label: "Crate Hire" },
        ]}
      />

      <QuoteCtaRow />

      {/* Intro */}
      <section className="bg-white py-16">
        <div className="mx-auto grid max-w-[88rem] grid-cols-1 items-center gap-12 px-4 lg:grid-cols-2 lg:gap-16">
          <div>
            <SectionHeading
              align="left"
              eyebrow="Crate Hire"
              title="What Are The Perks of Top Removals' Crate Hire"
            />
            <div className="mt-8 space-y-4 text-base leading-relaxed text-brand-charcoal/85">
              <p>
                The best way to minimise the environmental impact of your next office or house
                relocation and avoid cluttering your property with packing materials is by using
                plastic containers.
              </p>
              <p>
                As an eco-friendly moving company, we at Top Removals take our environmental
                responsibility seriously. Our crates are sturdy and durable, the material from which
                they are made allows them to be used safely multiple times. After every use, each one
                is properly disinfected and ready for its next customer.
              </p>
            </div>
          </div>
          <div className="relative">
            <div className="relative aspect-[4/3] overflow-hidden rounded-2xl shadow-xl">
              <Image
                src="/services/crate-hire.svg"
                alt="Top Removals plastic lidded crates and IT crates for hire"
                fill
                sizes="(max-width: 1024px) 100vw, 50vw"
                className="object-cover"
              />
            </div>
            <span
              aria-hidden="true"
              className="absolute -bottom-5 -right-5 -z-10 hidden h-36 w-36 rounded-2xl bg-brand-orange/15 lg:block"
            />
          </div>
        </div>
      </section>

      {/* What you need to know */}
      <section className="bg-brand-grey py-20">
        <div className="mx-auto max-w-4xl px-4">
          <SectionHeading
            align="left"
            eyebrow="Good to know"
            title="What You Need to Know About Our Crate Hire"
          />
          <div className="mt-8 space-y-4 text-base leading-relaxed text-brand-charcoal/85">
            <p>
              Crates are delivered a week or two prior to the scheduled move. We then collect them
              from the new address, when required. This can be on the day of the move, or a week or
              two after the completion. You can easily combine our crate hire with the man and van
              service for small volume move in the capital or the surrounding areas.
            </p>
            <p>
              We need to have signed acceptance of our offer and terms &amp; conditions prior to
              engaging in any services for any clients. The customers get a delivery note with the
              number of crates received and then a collection note for the number returned. This
              helps keep the inventory up to date and avoid losing any crates on the sites.
            </p>
          </div>
        </div>
      </section>

      {/* What crates do we offer */}
      <section className="bg-white py-20">
        <div className="mx-auto max-w-[88rem] px-4">
          <SectionHeading eyebrow="Our crates" title="What Crates Do We Offer" />
          <CardGrid cards={crateTypes} columns={2} className="mx-auto mt-12 max-w-5xl" />
        </div>
      </section>

      {/* Pricing */}
      <section className="bg-brand-grey py-20">
        <div className="mx-auto max-w-4xl px-4">
          <SectionHeading eyebrow="Transparent rates" title="Price for Crate Hire Per Week" />
          <PricingTable columns={hireColumns} rows={hireRows} className="mt-12" />

          <h3 className="mt-14 text-center text-xl font-bold uppercase tracking-wide text-brand-navy">
            Congestion Zone Charge for Crate Delivery/Collection
          </h3>
          <PricingTable columns={congestionColumns} rows={congestionRows} className="mt-8" />
          <p className="mt-6 text-sm leading-relaxed text-brand-charcoal/70">
            All prices are subject to VAT.
          </p>
        </div>
      </section>

      {/* FAQ */}
      <section className="bg-white py-20">
        <div className="mx-auto max-w-[88rem] px-4">
          <SectionHeading eyebrow="Good to know" title="FAQ" />
          <Faq items={faqs} className="mt-10" />
        </div>
      </section>

      <CtaBand
        heading="Contact Us Now and Book Your Crate Hire Services Today"
        buttonLabel="Book a Service"
        buttonHref="/book-a-service"
      />

      <Testimonials />
      <Accreditations />
    </>
  );
}
