import type { Metadata } from "next";
import { buildMetadata, serviceH1, serviceLdFor, breadcrumbLd } from "@/lib/seo";
import JsonLd from "@/components/seo/JsonLd";
import Image from "next/image";
import Link from "next/link";
import PageBanner from "@/components/layout/PageBanner";
import SectionHeading from "@/components/ui/SectionHeading";
import Button from "@/components/ui/Button";
import CtaBand from "@/components/home/CtaBand";
import CheckList, { type CheckItem } from "@/components/services/CheckList";
import StepList from "@/components/services/StepList";
import TipList, { type Tip } from "@/components/services/TipList";
import Faq, { type FaqItem } from "@/components/services/Faq";
import Accreditations from "@/components/home/Accreditations";
import { StarIcon } from "@/components/ui/icons";

export const metadata: Metadata = buildMetadata("london-storage");

/* ------------------------------------------------------------------ */
/* Data                                                                 */
/* ------------------------------------------------------------------ */

const securityTiles = [
  {
    title: "24/7 Staffed Compound with CCTV",
    body: "Our Purfleet facility operates round the clock. Security staff are on site at all times. A modern CCTV system covers the entire compound.",
  },
  {
    title: "Every Unit Locked and Sealed",
    body: "Each unit is locked and sealed before we store it. We give you the seal number for your records and for inspection purposes.",
  },
  {
    title: "Fully Insured While in Our Care",
    body: "Your belongings are fully insured throughout their time in our facility, from the moment we collect through to redelivery at your door.",
  },
  {
    title: "NGRS Accredited, BAR and IAM Members",
    body: "Top Removals is a certified member of the National Guild of Removers and Storers and holds accreditation with BAR, IAM, Checkatrade and The Furniture Ombudsman.",
  },
];

const steps = [
  "Contact us and request a unit. A survey is required only for large volumes. We confirm a collection date that suits you.",
  "We collect from your address anywhere in London, or you deliver your goods to our Purfleet facility. We confirm the exact volume once everything is loaded.",
  "Our team checks the condition of your items and records everything on inventory sheets. You keep a copy.",
  "Your goods are loaded, sealed and stored in your unit at our secure compound. We give you the seal number.",
  "Access your items at any time by appointment, with at least 48 hours notice. We return your goods to your door when you need them.",
];

const useCases: { title: string; body: string; href?: string }[] = [
  {
    title: "Moving Between Addresses",
    body: "Store between completion dates when there is a gap in your move. Units from £10 per week with no minimum term.",
  },
  {
    title: "Home Renovation",
    body: "Empty rooms while work is done. Keep furniture and contents safe and off-site without arranging multiple services.",
  },
  {
    title: "Decluttering and Downsizing",
    body: "Free up space at home. Store items you want to keep but no longer have room for at your current property.",
  },
  {
    title: "Probate and Bereavement Clearance",
    body: "Hold an estate's contents securely while matters are settled. No pressure on timing, no minimum term.",
  },
  {
    title: "Going Travelling",
    body: "Store your belongings while abroad for weeks or months. Return them to your door when you are ready.",
  },
  {
    title: "Seasonal Items",
    body: "Garden furniture, sports equipment, decorations and bulky clothing stored off-season to free up space at home.",
  },
  {
    title: "Business Stock and Archive",
    body: "Stock, equipment, office furniture and document archive held at our secure compound. Works alongside our office removal service.",
    href: "/office-removals",
  },
  {
    title: "International Move Overlap",
    body: "Store during the gap between your UK departure and overseas arrival. Works alongside our international removal service.",
    href: "/international-removals",
  },
];

const whyChoose: CheckItem[] = [
  {
    lead: "We collect and load for you",
    text: "No van hire, no hauling, no heavy lifting. Our crew does the physical work from your door to your unit.",
  },
  {
    lead: "From £10 per week, charged by volume",
    text: "You pay for the space your goods use. No fixed room sizes and no wasted spend.",
  },
  {
    lead: "No minimum or maximum term",
    text: "Store for a week between moves or for years while you are abroad. Your timeline, not ours.",
  },
  {
    lead: "Every unit sealed and fully insured",
    text: "Your unit is locked and sealed. You receive the seal number. Your goods are insured throughout their time in our care.",
  },
  {
    lead: "24/7 staffed compound with CCTV",
    text: "Our Purfleet facility is staffed around the clock with modern CCTV covering the entire compound.",
  },
  {
    lead: "NGRS, BAR and IAM accredited",
    text: "Certified member of the National Guild of Removers and Storers, the British Association of Removers and the International Association of Movers.",
  },
  {
    lead: "Combine removals and storage in one booking",
    text: "Book storage and removal together for a single managed transition. One coordinator and one point of contact.",
  },
  {
    lead: "Price confirmed before work starts",
    text: "Your rate is agreed at the time of booking, once we know your volume. No surprises on collection day.",
  },
];

const tips: Tip[] = [
  {
    title: "Pack properly before storage",
    body: "Pack boxes tightly to prevent collapsing under weight and seal each one with strong tape. Plastic crates are sturdier than cardboard, stack flat and protect against moisture during long-term storage. Top Removals offers crate hire and a full range of packaging materials, delivered to your address before collection day.",
  },
  {
    title: "Do not store food, plants or hazardous items",
    body: "Food attracts pests and deteriorates over time, even in sealed containers. Living plants die without light and water. Flammable, corrosive and pressurised items are not permitted in any storage unit. If you are unsure whether an item qualifies, your coordinator confirms before collection.",
  },
  {
    title: "Use storage to solve the gap in your move",
    body: "The period between leaving one property and entering another is the most stressful part of any move. Storage at Top Removals removes that pressure. We collect on your departure date and deliver when your new address is ready. The same approach works for international moves, where the gap between UK departure and overseas arrival runs to weeks, and for students vacating dormitories before their next term accommodation opens.",
  },
];

const faqs: FaqItem[] = [
  {
    question: "Can I access my things while in your London storage facility?",
    answer:
      "Yes. We ask for at least 48 hours notice, as we are managed storage rather than a self-access facility. A member of staff is present to assist you. An access fee applies if staff assistance is required during your visit.",
  },
  {
    question: "Can I add extra items to my storage after my first visit?",
    answer:
      "Yes, at any time. Storage is charged per volume, so any additional items increase the volume stored and the price reflects that. Contact your coordinator to arrange additional collection and we confirm the revised volume and cost in advance.",
  },
  {
    question: "Do I need to pay upfront or leave a deposit?",
    answer:
      "In most cases we require either full payment or a deposit before any booking is confirmed. This is standard practice across the professional removals and storage industry.",
  },
  {
    question: "Is my stuff insured while in storage?",
    answer:
      "Yes. Your goods are fully insured throughout the entire period they are in our care, from collection through to redelivery.",
  },
  {
    question: "Is there a minimum storage term?",
    answer:
      "There is no minimum and no maximum storage term. Store for a single week between completion dates or for several years while you are abroad.",
  },
  {
    question: "Do you collect from my home?",
    answer:
      "Yes. We collect from your property anywhere in London and the surrounding areas. Alternatively, you deliver your goods directly to our Purfleet facility. Delivering to the facility costs slightly less than a full collection.",
  },
  {
    question: "How much does storage in London cost?",
    answer:
      "Storage starts at £10 per week. The exact price depends on the volume of goods you store, the length of time and whether we collect from your property or you deliver to the facility. Your coordinator confirms the price before work starts.",
  },
  {
    question: "Is this self-storage?",
    answer:
      "No. Top Removals provides managed, containerised storage. We collect your goods, load and seal your unit, and return your belongings when you need them. Access is by appointment rather than walk-in. If you need frequent unaccompanied access, a drive-up self-storage facility will suit you better.",
  },
  {
    question: "What items are not accepted in storage?",
    answer:
      "Food and living plants are not accepted, as they deteriorate and attract pests. Hazardous, flammable, pressurised and perishable items are also excluded. Your coordinator confirms what qualifies before collection if you have any doubt.",
  },
];

/* ------------------------------------------------------------------ */
/* Schema                                                               */
/* ------------------------------------------------------------------ */

const faqPageSchema = {
  "@context": "https://schema.org",
  "@type": "FAQPage",
  mainEntity: faqs.map((f) => ({
    "@type": "Question",
    name: f.question,
    acceptedAnswer: { "@type": "Answer", text: f.answer },
  })),
};

/* ------------------------------------------------------------------ */
/* Page                                                                 */
/* ------------------------------------------------------------------ */

export default function LondonStoragePage() {
  return (
    <>
      <JsonLd data={serviceLdFor("london-storage")} />
      <JsonLd data={faqPageSchema} />
      <JsonLd
        data={breadcrumbLd([
          { label: "Home", href: "/" },
          { label: "Services", href: "/services" },
          { label: "London Storage" },
        ])}
      />

      <PageBanner
        title="Secure Storage in London"
        subtitle="Managed, containerised storage. We collect and store for you."
        h1={serviceH1["london-storage"]}
        crumbs={[
          { label: "Home", href: "/" },
          { label: "Services", href: "/services" },
          { label: "London Storage" },
        ]}
      />

      {/* Trust strip */}
      <div className="bg-brand-navy">
        <div className="mx-auto grid max-w-[88rem] grid-cols-2 divide-x divide-white/10 px-4 sm:grid-cols-4">
          {["From £10 per week", "No minimum term", "Fully insured", "24/7 CCTV staffed compound"].map(
            (stat) => (
              <div
                key={stat}
                className="flex items-center justify-center px-4 py-3 text-center text-sm font-semibold text-white"
              >
                {stat}
              </div>
            )
          )}
        </div>
      </div>

      {/* CTAs */}
      <section className="bg-white pt-10">
        <div className="mx-auto max-w-[88rem] px-4">
          <p className="text-lg font-bold uppercase tracking-wide text-brand-navy">
            Get a Free Online Quote in Under 2 Minutes
          </p>
          <div className="mt-4 flex flex-wrap gap-4">
            <Button href="/bookservice#quick-quote" variant="outline" size="lg">
              Quick Quote
            </Button>
            <Button href="/bookservice" variant="orange" size="lg">
              Book a Service
            </Button>
          </div>
        </div>
      </section>

      {/* SECTION 2: Security tiles */}
      <section className="bg-white py-20">
        <div className="mx-auto max-w-[88rem] px-4">
          <SectionHeading eyebrow="Your goods are safe here" title="Security You Can Rely On" />
          <div className="mt-12 grid gap-6 sm:grid-cols-2 lg:grid-cols-4">
            {securityTiles.map((tile, i) => (
              <div
                key={tile.title}
                className="flex flex-col rounded-2xl border border-black/5 bg-brand-grey p-7 shadow-sm"
              >
                <span className="mb-4 flex h-12 w-12 items-center justify-center rounded-full bg-brand-orange text-lg font-bold text-white">
                  {i + 1}
                </span>
                <h3 className="text-base font-bold text-brand-navy">{tile.title}</h3>
                <p className="mt-2 text-sm leading-relaxed text-brand-charcoal/85">{tile.body}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* SECTION 3: Intro and London space squeeze */}
      <section className="bg-brand-grey py-16">
        <div className="mx-auto grid max-w-[88rem] grid-cols-1 items-center gap-12 px-4 lg:grid-cols-2 lg:gap-16">
          <div>
            <SectionHeading
              align="left"
              eyebrow="Why Londoners need storage"
              title="London Storage That Works Around You"
            />
            <div className="mt-8 space-y-4 text-base leading-relaxed text-brand-charcoal/85">
              <p>
                London properties are compact. Spare rooms fill quickly. Many flats have no loft, no
                basement and no garage. When a move takes longer than expected, when a renovation
                empties a floor, or when an office is between locations, you need secure storage fast
                without the hassle of hiring a van, driving to a facility and loading it yourself.
              </p>
              <p>
                Top Removals solves that with a fully managed service. Our team collects from your
                address, loads your goods, seals the unit and stores it at our staffed Purfleet
                compound. When you need your belongings back, we return them to your door. No van
                hire, no heavy lifting, no access headaches.
              </p>
              <p>
                In 2026, more London customers book managed storage than ever before, because the
                collect-and-store model is a genuine improvement over the traditional drive-up unit.
                You do not arrange transport, navigate a storage park or carry furniture up a ramp.
                We handle the physical work. As a certified member of the NGRS, we adhere to the
                industry's strictest procedures to ensure your goods are in qualified hands.
              </p>
            </div>
          </div>
          <div className="relative">
            <div className="relative aspect-[4/3] overflow-hidden rounded-2xl shadow-xl">
              <Image
                src="/services/london-storage.svg"
                alt="Top Removals secure London storage facility with 24/7 CCTV monitoring"
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

      {/* SECTION 4: How it works */}
      <section className="bg-white py-20">
        <div className="mx-auto max-w-3xl px-4">
          <SectionHeading
            align="left"
            eyebrow="Step by step"
            title="How Our Collect-and-Store Service Works"
          />
          <p className="mt-4 text-base font-semibold text-brand-orange">
            No van hire. No hauling. No heavy lifting.
          </p>
          <StepList steps={steps} className="mt-10" />
        </div>
      </section>

      {/* SECTION 5: Which unit */}
      <section className="bg-brand-grey py-20">
        <div className="mx-auto max-w-[88rem] px-4">
          <SectionHeading eyebrow="Your options" title="Which Storage Unit Do You Need?" />
          <p className="mx-auto mt-4 max-w-2xl text-center text-base text-brand-charcoal/70">
            Not sure? A free survey confirms your volume before we book anything.
          </p>
          <div className="mt-12 grid gap-8 sm:grid-cols-2 max-w-4xl mx-auto">
            <div className="flex flex-col rounded-2xl border-2 border-brand-orange bg-white p-8 shadow-md">
              <h3 className="text-xl font-bold text-brand-navy">250 cu ft Unit</h3>
              <p className="mt-1 text-sm font-semibold uppercase tracking-wide text-brand-orange">
                Flats, small houses and archives
              </p>
              <ul className="mt-6 space-y-3 text-base text-brand-charcoal/85">
                <li className="flex items-start gap-2">
                  <span className="mt-1 h-2 w-2 shrink-0 rounded-full bg-brand-orange" />
                  Custom-made wooden construction
                </li>
                <li className="flex items-start gap-2">
                  <span className="mt-1 h-2 w-2 shrink-0 rounded-full bg-brand-orange" />
                  Holds approximately 70 to 80 cartons, or over 100 archive boxes
                </li>
                <li className="flex items-start gap-2">
                  <span className="mt-1 h-2 w-2 shrink-0 rounded-full bg-brand-orange" />
                  Best for a one or two-bedroom flat, or document and archive storage
                </li>
                <li className="flex items-start gap-2">
                  <span className="mt-1 h-2 w-2 shrink-0 rounded-full bg-brand-orange" />
                  Suitable for short and long-term storage
                </li>
              </ul>
            </div>
            <div className="flex flex-col rounded-2xl border-2 border-brand-navy bg-white p-8 shadow-md">
              <h3 className="text-xl font-bold text-brand-navy">20ft Container</h3>
              <p className="mt-1 text-sm font-semibold uppercase tracking-wide text-brand-orange">
                Large homes, full offices and long-term
              </p>
              <ul className="mt-6 space-y-3 text-base text-brand-charcoal/85">
                <li className="flex items-start gap-2">
                  <span className="mt-1 h-2 w-2 shrink-0 rounded-full bg-brand-navy" />
                  1,000 cu ft capacity, equal to 4 x 250 cu ft units
                </li>
                <li className="flex items-start gap-2">
                  <span className="mt-1 h-2 w-2 shrink-0 rounded-full bg-brand-navy" />
                  Well insulated metal shipping container
                </li>
                <li className="flex items-start gap-2">
                  <span className="mt-1 h-2 w-2 shrink-0 rounded-full bg-brand-navy" />
                  Best for full household contents, larger homes or full office storage
                </li>
                <li className="flex items-start gap-2">
                  <span className="mt-1 h-2 w-2 shrink-0 rounded-full bg-brand-navy" />
                  Recommended for long-term storage where no access is needed
                </li>
              </ul>
            </div>
          </div>
        </div>
      </section>

      {/* SECTION 6: Use cases */}
      <section className="bg-white py-20">
        <div className="mx-auto max-w-[88rem] px-4">
          <SectionHeading eyebrow="Common situations" title="What Do People Store With Us?" />
          <div className="mt-12 grid gap-6 sm:grid-cols-2 lg:grid-cols-4">
            {useCases.map((item) => (
              <div
                key={item.title}
                className="flex flex-col rounded-2xl border border-black/5 bg-white p-7 shadow-sm transition-shadow duration-300 hover:shadow-md"
              >
                <h3 className="mb-3 border-l-4 border-brand-orange pl-3 text-base font-bold text-brand-navy">
                  {item.title}
                </h3>
                <p className="flex-1 text-sm leading-relaxed text-brand-charcoal/85">{item.body}</p>
                {item.href && (
                  <Link
                    href={item.href}
                    className="mt-4 text-sm font-semibold text-brand-orange transition hover:text-brand-navy"
                  >
                    Learn more &rarr;
                  </Link>
                )}
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* SECTION 7: Storage types */}
      <section className="bg-brand-sand py-20">
        <div className="mx-auto max-w-[88rem] px-4">
          <SectionHeading eyebrow="Who stores with us" title="Storage for Every Situation" />
          <div className="mt-12 grid gap-8 sm:grid-cols-3">
            <div className="flex flex-col rounded-2xl border border-black/5 bg-white p-8 shadow-sm">
              <h3 className="mb-4 text-xl font-bold text-brand-navy">Personal Storage</h3>
              <p className="flex-1 text-base leading-relaxed text-brand-charcoal/85">
                Household furniture, seasonal items and personal effects during a move, renovation or
                declutter. Units available from £10 per week with no minimum term. Works alongside
                our house removal service for a complete single booking.
              </p>
              <Link
                href="/house-removals"
                className="mt-6 text-sm font-semibold text-brand-orange transition hover:text-brand-navy"
              >
                House removals &rarr;
              </Link>
            </div>
            <div className="flex flex-col rounded-2xl border border-black/5 bg-white p-8 shadow-sm">
              <h3 className="mb-4 text-xl font-bold text-brand-navy">Business Storage</h3>
              <p className="flex-1 text-base leading-relaxed text-brand-charcoal/85">
                Stock, equipment, office contents and document archive stored at our secure Purfleet
                compound. We collect from your premises and store until you need delivery or
                collection. Works alongside our office removal service for a single managed
                transition with one coordinator.
              </p>
              <Link
                href="/office-removals"
                className="mt-6 text-sm font-semibold text-brand-orange transition hover:text-brand-navy"
              >
                Office removals &rarr;
              </Link>
            </div>
            <div className="flex flex-col rounded-2xl border border-black/5 bg-white p-8 shadow-sm">
              <h3 className="mb-4 text-xl font-bold text-brand-navy">Student Storage</h3>
              <p className="flex-1 text-base leading-relaxed text-brand-charcoal/85">
                Term-time and summer storage for dormitory contents. We collect from your university
                accommodation at the end of term and return your belongings when the next term
                opens. No need for you to arrange transport or be present on collection day.
              </p>
              <Link
                href="/dormitory-move-student-storage"
                className="mt-6 text-sm font-semibold text-brand-orange transition hover:text-brand-navy"
              >
                Dormitory move service &rarr;
              </Link>
            </div>
          </div>
        </div>
      </section>

      {/* SECTION 8: Storage cost */}
      <section className="bg-brand-grey py-20">
        <div className="mx-auto max-w-4xl px-4">
          <SectionHeading align="left" eyebrow="Transparent pricing" title="How Much Does Storage Cost?" />
          <div className="mt-8 space-y-4 text-base leading-relaxed text-brand-charcoal/85">
            <p>
              Storage at Top Removals starts at <strong className="text-brand-navy">£10 per week</strong>.
              Pricing is based on the volume of goods you store, not a fixed room size or square
              footage. You pay for the space your goods actually use.
            </p>
            <p>
              There is no minimum storage term and no maximum. Store for a single week between
              completion dates or for several years while you settle abroad. The rate is confirmed at
              the time of booking once we know your volume.
            </p>
            <p>
              Three factors affect your price: the volume of goods stored, the length of time you
              store, and whether we collect from your property or you deliver to our Purfleet
              facility. Delivery to the facility costs slightly less than a full collection service.
            </p>
            <p>
              Before storage, it pays to pack well. Plastic crates pack more efficiently than
              cardboard boxes and protect contents against moisture, particularly in long-term
              storage. Better packing reduces the volume you store and lowers your bill. See our{" "}
              <Link href="/crate-hire" className="font-semibold text-brand-orange hover:text-brand-navy">
                crate hire
              </Link>{" "}
              and{" "}
              <Link href="/packaging-materials" className="font-semibold text-brand-orange hover:text-brand-navy">
                packaging materials
              </Link>{" "}
              pages for options.
            </p>
          </div>
        </div>
      </section>

      {/* SECTION 9: Why choose */}
      <section className="bg-white py-20">
        <div className="mx-auto max-w-[88rem] px-4">
          <SectionHeading eyebrow="The benefits" title="Why Choose Top Removals for Storage?" />
          <CheckList items={whyChoose} columns={2} className="mx-auto mt-12 max-w-5xl" />
        </div>
      </section>

      {/* SECTION 10: Facility and access */}
      <section className="bg-brand-grey py-20">
        <div className="mx-auto max-w-[88rem] px-4">
          <SectionHeading eyebrow="The Purfleet compound" title="Our Facility and How to Access Your Goods" />
          <div className="mt-12 grid gap-12 lg:grid-cols-2">
            <div className="space-y-4 text-base leading-relaxed text-brand-charcoal/85">
              <p>
                Our storage compound is at{" "}
                <strong className="text-brand-navy">
                  Unit C1A Purfleet Industrial Park, Kerry Avenue, Purfleet, RM15 4YA
                </strong>
                , approximately 17 miles east of central London. We collect from all London boroughs
                and return goods to your door, so most customers never need to visit the facility.
              </p>
              <p>
                Access is by appointment. We require at least{" "}
                <strong className="text-brand-navy">48 hours notice</strong>. An access fee applies
                if staff assistance is needed in the warehouse. This is managed storage, not a
                self-access facility. Goods are held in sealed units and a member of staff is
                present for every access visit.
              </p>
              <p>
                To arrange collection, redelivery or an access visit, contact your coordinator
                directly on <strong className="text-brand-navy">020 7205 2525</strong> or{" "}
                <strong className="text-brand-navy">0800 046 7877</strong>.
              </p>
              <div className="mt-6 flex flex-wrap gap-4">
                <Button href="/bookservice" variant="orange" size="md">
                  Book Storage
                </Button>
                <a
                  href="https://www.google.com/maps/dir/?api=1&destination=Unit+C1A+Purfleet+Industrial+Park+Kerry+Avenue+Purfleet+RM15+4YA"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="inline-flex items-center rounded-xl border-2 border-brand-navy px-5 py-3 text-sm font-bold text-brand-navy transition hover:bg-brand-navy hover:text-white"
                >
                  Get Directions
                </a>
              </div>
            </div>
            <div className="rounded-2xl border border-black/5 bg-white p-8 shadow-sm">
              <h3 className="mb-6 text-lg font-bold text-brand-navy">Facility Details</h3>
              <dl className="space-y-4 text-sm">
                <div>
                  <dt className="font-semibold uppercase tracking-wide text-brand-charcoal/50">
                    Address
                  </dt>
                  <dd className="mt-1 text-brand-charcoal">
                    Unit C1A Purfleet Industrial Park
                    <br />
                    Kerry Avenue, Purfleet
                    <br />
                    RM15 4YA
                  </dd>
                </div>
                <div>
                  <dt className="font-semibold uppercase tracking-wide text-brand-charcoal/50">
                    Security
                  </dt>
                  <dd className="mt-1 text-brand-charcoal">24/7 staffed compound with CCTV</dd>
                </div>
                <div>
                  <dt className="font-semibold uppercase tracking-wide text-brand-charcoal/50">
                    Customer Access
                  </dt>
                  <dd className="mt-1 text-brand-charcoal">By appointment, 48 hours notice required</dd>
                </div>
                <div>
                  <dt className="font-semibold uppercase tracking-wide text-brand-charcoal/50">
                    Phone
                  </dt>
                  <dd className="mt-1 text-brand-charcoal">
                    020 7205 2525 &nbsp;|&nbsp; 0800 046 7877
                  </dd>
                </div>
                <div>
                  <dt className="font-semibold uppercase tracking-wide text-brand-charcoal/50">
                    Collection Area
                  </dt>
                  <dd className="mt-1 text-brand-charcoal">All London boroughs and surrounding areas</dd>
                </div>
              </dl>
            </div>
          </div>
        </div>
      </section>

      {/* SECTION 11: Tips */}
      <section className="bg-white py-20">
        <div className="mx-auto max-w-[88rem] px-4">
          <SectionHeading eyebrow="Helpful advice" title="Storage Tips" />
          <TipList tips={tips} numbered className="mt-12" />
        </div>
      </section>

      {/* SECTION 12: Trustpilot CTA (no placeholder reviews) */}
      <section className="bg-brand-sand py-16">
        <div className="mx-auto max-w-[88rem] px-4 text-center">
          <div className="flex justify-center gap-1 text-brand-orange" aria-label="5 out of 5 stars">
            {Array.from({ length: 5 }).map((_, i) => (
              <StarIcon key={i} className="h-7 w-7" />
            ))}
          </div>
          <p className="mt-3 text-xl font-bold text-brand-navy">Rated Excellent on Trustpilot</p>
          <p className="mt-2 text-base text-brand-charcoal/70">
            Read genuine reviews from customers who have used our removal and storage service.
          </p>
          <Link
            href="https://uk.trustpilot.com/review/www.top-removals.co.uk"
            target="_blank"
            rel="noopener noreferrer"
            className="mt-6 inline-flex items-center rounded-xl bg-brand-orange px-6 py-3 text-sm font-bold text-white transition hover:bg-brand-navy"
          >
            View Reviews on Trustpilot
          </Link>
        </div>
      </section>

      {/* SECTION 13: Final CTA */}
      <CtaBand
        heading="Book Your London Storage Today"
        buttonLabel="Book a Service"
        buttonHref="/bookservice"
      />

      {/* SECTION 14: FAQ */}
      <section className="bg-brand-grey py-20">
        <div className="mx-auto max-w-[88rem] px-4">
          <SectionHeading eyebrow="Good to know" title="Frequently Asked Questions" />
          <Faq items={faqs} className="mt-10" />
        </div>
      </section>

      <Accreditations />
    </>
  );
}
