import type { Metadata } from "next";
import Image from "next/image";
import PageBanner from "@/components/layout/PageBanner";
import SectionHeading from "@/components/ui/SectionHeading";
import CtaBand from "@/components/home/CtaBand";
import QuoteCtaRow from "@/components/services/QuoteCtaRow";
import CheckList from "@/components/services/CheckList";
import Faq, { type FaqItem } from "@/components/services/Faq";
import Testimonials from "@/components/home/Testimonials";
import Accreditations from "@/components/home/Accreditations";

export const metadata: Metadata = {
  title: "Reputable Single Item / E-bay Deliveries and Courier Service",
  description:
    "Single item collection, delivery and furniture assembly across the UK and worldwide. Same-day and next-day eBay/Gumtree courier service in London. Pianos, wardrobes and bulky items handled with care. Free quote in under 2 minutes.",
};

const benefits = [
  "Furniture assembly/disassembly",
  "Fast and safe delivery",
  "Easy booking",
  "Competitive prices",
  "Additional packing and cushioning materials",
  "International deliveries of single items",
];

const youGet = [
  "Single and/or large retail deliveries",
  "Regular eBay runs",
  "Deliveries from different retailers",
  "Flexible time schedule",
  "Proof of delivery",
  "We cover the whole London area",
];

const faqs: FaqItem[] = [
  {
    question: "What is the price for a single item delivery?",
    answer:
      "This depends on the type of object you want us to deliver and the distance. We offer prices from £60+VAT. Keep in mind that we also offer an international single item delivery. If you need more details, please contact us. We will be happy to assist you.",
  },
  {
    question: "I've purchased furniture from IKEA. Can you help me with it?",
    answer:
      "We can work with any retailers. However, all items have to be purchased and paid for in advance by the customer. Unfortunately, we do not offer a service where we will purchase an item on behalf of the customer. We are only a transport provider. Contact our coordinator for more information.",
  },
  {
    question: "Can you deliver something ordered on eBay to another country?",
    answer:
      "Yes, on a part-load basis. These types of deliveries are unique and you need to contact us to receive a custom offer and more information about the whole process. Bear in mind that we offer weekly removals to Norway so if this is your destination country, the delivery will be even faster.",
  },
];

export default function SingleItemDeliveriesPage() {
  return (
    <>
      <PageBanner
        title="Single Item Collection, Delivery and Furniture Assembly"
        crumbs={[
          { label: "Home", href: "/" },
          { label: "Services", href: "/services" },
          { label: "Single Item / E-bay Deliveries" },
        ]}
      />

      <QuoteCtaRow />

      {/* Intro */}
      <section className="bg-white py-16">
        <div className="mx-auto grid max-w-[88rem] grid-cols-1 items-center gap-12 px-4 lg:grid-cols-2 lg:gap-16">
          <div>
            <SectionHeading
              align="left"
              eyebrow="Single Item / E-bay Deliveries"
              title="Single Item Delivery in the UK and Worldwide"
            />
            <p className="mt-8 text-base leading-relaxed text-brand-charcoal/85">
              Sometimes you only need help to move one item – a large wardrobe, an antique piano or
              just a very bulky sofa. Top Removals can offer you the perfect moving service for just
              such occasions. Our team will come, help you with the packing if you want, load your
              item and transport it wherever you need. Thanks to our modern fleet and a variety of
              different vehicles, we can move all types of goods both in the UK and worldwide. For the
              letter, check out our international removal service.
            </p>
          </div>
          <div className="relative">
            <div className="relative aspect-[4/3] overflow-hidden rounded-2xl shadow-xl">
              <Image
                src="/services/single-item-deliveries.svg"
                alt="Top Removals single item delivery and furniture assembly"
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

      {/* Benefits */}
      <section className="bg-brand-grey py-20">
        <div className="mx-auto max-w-5xl px-4">
          <SectionHeading eyebrow="The benefits" title="Benefits of Our Single Item Delivery" />
          <CheckList items={benefits} columns={2} className="mx-auto mt-12 max-w-4xl" />
          <div className="mx-auto mt-10 max-w-4xl space-y-4 text-base leading-relaxed text-brand-charcoal/85">
            <p>
              Top Removals can deliver your item to any part of the UK. For example, if you want us
              to move your piano from London to Manchester, it won&apos;t be a problem for us. Bear in
              mind that depending on the item, a certain specialist must be involved. Moving a
              delicate instrument like a piano requires certain skills and expertise. These jobs are
              priced individually.
            </p>
            <p>
              The single item delivery is especially useful if you are planing a dormitory move and
              have to transport one big piece of furniture like a wardrobe or a bed. Our experienced
              professionals can help any student in need.
            </p>
          </div>
        </div>
      </section>

      {/* Online shopping deliveries */}
      <section className="bg-white py-20">
        <div className="mx-auto max-w-5xl px-4">
          <SectionHeading
            align="left"
            eyebrow="For online shoppers"
            title="Online Shopping Deliveries in London – How Does It Work"
          />
          <div className="mt-8 space-y-4 text-base leading-relaxed text-brand-charcoal/85">
            <p>
              Have you bought something on eBay or Gumtree which is &apos;Pickup Only&apos;? Top
              Removals have tailored their service to the needs of internet shoppers. We offer
              comprehensive, friendly courier service in the London area. We will deliver your goods
              to your doorstep the same day or next day as requested.
            </p>
            <p>
              If you are an online seller, you can also benefit from our secure warehouse location and
              warehouse management services. Top Removals&apos; storage facility is 24/7 CCTV
              monitored, with life security. You will receive a sealing code to enter your unit
              whenever you need. Our services are not time-binding which means there is no minimum or
              maximum renting period.
            </p>
          </div>

          <h3 className="mt-12 text-xl font-bold text-brand-navy">With Top Removals You Get:</h3>
          <CheckList items={youGet} columns={2} className="mt-6" />
        </div>
      </section>

      {/* FAQ */}
      <section className="bg-brand-grey py-20">
        <div className="mx-auto max-w-[88rem] px-4">
          <SectionHeading eyebrow="Good to know" title="FAQ" />
          <Faq items={faqs} className="mt-10" />
        </div>
      </section>

      <CtaBand
        heading="Contact Us Now and Book Your Single Item Delivery Services Today"
        buttonLabel="Book a Service"
        buttonHref="/book-a-service"
      />

      <Testimonials />
      <Accreditations />
    </>
  );
}
