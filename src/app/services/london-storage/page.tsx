import type { Metadata } from "next";
import Image from "next/image";
import PageBanner from "@/components/layout/PageBanner";
import SectionHeading from "@/components/ui/SectionHeading";
import Button from "@/components/ui/Button";
import CtaBand from "@/components/home/CtaBand";
import CheckList, { type CheckItem } from "@/components/services/CheckList";
import StepList from "@/components/services/StepList";
import TipList, { type Tip } from "@/components/services/TipList";
import Faq, { type FaqItem } from "@/components/services/Faq";
import Testimonials from "@/components/home/Testimonials";
import Accreditations from "@/components/home/Accreditations";

export const metadata: Metadata = {
  title: "Storage Services in London - Convinient, Safe and Secure",
  description:
    "Secure domestic and business storage in London with 24/7 CCTV and security staff. NGRS-certified, fully insured units and 20ft containers, no minimum term, prices from £10 per week. Get a free quote in under 2 minutes.",
};

const whatYouGain: CheckItem[] = [
  {
    lead: "Peace of mind",
    text: "Our London compound has 24/7 supervision by security staff and a modern CCTV surveillance system.",
  },
  {
    lead: "Free space at your property",
    text: "Top Removals can cater to your every storage need providing you with different size units.",
  },
  { lead: "Stability", text: "No minimum or maximum storage terms." },
  {
    lead: "Budget-friendly pricing",
    text: "Depending on the length and volume of the load, Top Removals' prices start at £10 per week.",
  },
  {
    lead: "Fast and easy booking",
    text: "We value your time, so the process is simplified as much as possible",
  },
];

const steps = [
  "Contact us and request a storage unit. Note that surveys are necessary only for large volume storage requirements. Once all of the details are discussed, we will set a collection date for your stuff.",
  "We will confirm the exact volume once the goods are loaded.",
  "Our team will check the condition and mark it on the inventory sheets given to the customer for assurance.",
  "Everything will be unloaded and arranged at your storage unit.",
  "If you wish you can deliver your boxes and items directly to the facility, where we will fill all of the paperwork.",
];

const facilityPoints = [
  "The 250 cu ft storage units are widely used in the removals and storage industry. They are custom-made wooden constructions which can fit about 70-80 cartons or over 100 archive boxes.",
  "The 20ft container is a metal shipping container that holds 1,000 cu ft of goods – the equivalent of 4 x 250 cu ft units. They are well insulated and recommended for long-term storage where no access is needed.",
  "Each individual unit is locked and sealed. We can provide you with the seal number for your records and in case of an inspection.",
  "Top Removals is fully insured which guarantees the safety of your items as long as they are under our care. There is a reason we are so popular throughout the UK, we constantly strive to provide all of our clients with high-quality customer service. You can check our Trustpilot page if you need more proof and reassurance.",
];

const faqs: FaqItem[] = [
  {
    question: "Can I access my things while in your London storage facility if I need to?",
    answer:
      "Absolutely, however, bear in mind we are not a self-storage facility, thus a prior appointment is needed. We will require minimum 48hrs notice and sometimes additional access fee applies should the customer needs staff assistance in the warehouse.",
  },
  {
    question: "Can I add extra items to my storage after my first visit?",
    answer:
      "Certainly, anytime. Note that the storage is charged per volume. This means any additional volume will be quoted in advance accordingly. Contact our coordinator, so we could discuss the details and arrange everything.",
  },
  {
    question: "Do I need to pay you upfront, and do you need a deposit?",
    answer:
      "In most of the cases, we would require either full payment or deposit prior to any services being booked. This is similar for all reputable companies wide-across the industry.",
  },
];

const tips: Tip[] = [
  {
    title: "Invest in packing materials",
    body: "When preparing your items for the storage unit, you need to make sure all is neatly packed. Boxes must be carefully sealed, to protect their load from moisture. Choose plastic crates over cardboard boxes as they are sturdier and last longer. As one of Londons top moving and storage companies, Top Removals can offer you premium packing materials and can even send a crew to wrap everything for you.",
  },
  {
    title: "Do not store food",
    body: "If you have a couple of extra jars or some canned goods you want to put somewhere for safekeeping, the storage unit is not the best choice. Avoid putting any kinds of foods (and living plants for that matter) in your boxes, as they can go bad very easily. Check with your coordinator to see which items you should skip packing.",
  },
  {
    title: "Consider renting a unit when you are moving",
    body: "Storage units prove to be very useful for keeping your goods safe and secure while you are relocating internationally or have a large office inventory. They are especially handy when you are moving out of your dormitory. Since Top Removals has no limitations on the renting time, you can use these services as long as you need. Storage units will provide you with the extra time you will need to set your IT connections or get your utilities running.",
  },
];

export default function LondonStoragePage() {
  return (
    <>
      <PageBanner
        title="Safe and Secure Storage Facility"
        subtitle="With Easy Access"
        crumbs={[
          { label: "Home", href: "/" },
          { label: "Services", href: "/services" },
          { label: "London Storage" },
        ]}
      />

      {/* Hero CTAs */}
      <section className="bg-white pt-10">
        <div className="mx-auto max-w-[88rem] px-4">
          <p className="text-lg font-bold uppercase tracking-wide text-brand-navy">
            Get a Free Online Quote in Under 2 Minutes!
          </p>
          <div className="mt-4 flex flex-wrap gap-4">
            <Button href="/book-a-service#quick-quote" variant="outline" size="lg">
              Quick Quote
            </Button>
            <Button href="/book-a-service" variant="orange" size="lg">
              Book a Service
            </Button>
          </div>
        </div>
      </section>

      {/* Intro */}
      <section className="bg-white py-16">
        <div className="mx-auto grid max-w-[88rem] grid-cols-1 items-center gap-12 px-4 lg:grid-cols-2 lg:gap-16">
          <div>
            <SectionHeading
              align="left"
              eyebrow="London Storage"
              title="Top Removals Offers Secure Domestic and Business Storage Solutions in London"
            />
            <p className="mt-8 text-base leading-relaxed text-brand-charcoal/85">
              Renting a storage unit can save you a lot of headaches, especially if you are
              organising an office relocation or are moving out of your dormitory. Top Removals can
              provide you with the security you are looking for. As a certified member of the NGRS
              (National Guild of Removers and Storers), we adhere to the strictest policies and
              procedures to ensure your goods are in the most qualified hands.
            </p>
          </div>
          <div className="relative">
            <div className="relative aspect-[4/3] overflow-hidden rounded-2xl shadow-xl">
              <Image
                src="/services/london-storage.svg"
                alt="Top Removals secure London storage facility with CCTV monitoring"
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

      {/* What will you gain */}
      <section className="bg-brand-grey py-20">
        <div className="mx-auto max-w-[88rem] px-4">
          <SectionHeading eyebrow="The benefits" title="What Will You Gain" />
          <CheckList items={whatYouGain} columns={2} className="mx-auto mt-12 max-w-5xl" />
        </div>
      </section>

      {/* How will it all happen */}
      <section className="bg-white py-20">
        <div className="mx-auto max-w-3xl px-4">
          <SectionHeading align="left" eyebrow="Step by step" title="How Will It All Happen?" />
          <StepList steps={steps} className="mt-10" />
        </div>
      </section>

      {/* More about our facilities */}
      <section className="bg-brand-grey py-20">
        <div className="mx-auto max-w-5xl px-4">
          <SectionHeading
            align="left"
            eyebrow="Our facilities"
            title="More about Our London Storage Facilities"
          />
          <p className="mt-6 text-base leading-relaxed text-brand-charcoal/85">
            Top Removals offers two types of storage accommodation -250 cu ft units or 20 ft
            containers.
          </p>
          <ul className="mt-8 space-y-5">
            {facilityPoints.map((point, i) => (
              <li
                key={i}
                className="flex gap-4 rounded-2xl border-l-4 border-brand-orange bg-white p-6 shadow-sm"
              >
                <span className="flex h-8 w-8 shrink-0 items-center justify-center rounded-full bg-brand-navy text-sm font-bold text-white">
                  {i + 1}
                </span>
                <p className="text-base leading-relaxed text-brand-charcoal/85">{point}</p>
              </li>
            ))}
          </ul>
        </div>
      </section>

      {/* FAQ */}
      <section className="bg-white py-20">
        <div className="mx-auto max-w-[88rem] px-4">
          <SectionHeading eyebrow="Good to know" title="FAQ" />
          <Faq items={faqs} className="mt-10" />
        </div>
      </section>

      {/* Storage tips */}
      <section className="bg-brand-grey py-20">
        <div className="mx-auto max-w-[88rem] px-4">
          <SectionHeading eyebrow="Helpful advice" title="Storage Tips" />
          <TipList tips={tips} numbered className="mt-12" />
        </div>
      </section>

      <CtaBand
        heading="Contact Us Now and Book Your London Storage Today"
        buttonLabel="Book a Service"
        buttonHref="/book-a-service"
      />

      <Testimonials />
      <Accreditations />
    </>
  );
}
