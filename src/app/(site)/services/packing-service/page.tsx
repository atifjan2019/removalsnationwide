import type { Metadata } from "next";
import Image from "next/image";
import PageBanner from "@/components/layout/PageBanner";
import SectionHeading from "@/components/ui/SectionHeading";
import Button from "@/components/ui/Button";
import CtaBand from "@/components/home/CtaBand";
import CheckList from "@/components/services/CheckList";
import CardGrid, { type Card } from "@/components/services/CardGrid";
import TipList, { type Tip } from "@/components/services/TipList";
import Faq, { type FaqItem } from "@/components/services/Faq";
import Testimonials from "@/components/home/Testimonials";
import Accreditations from "@/components/home/Accreditations";

export const metadata: Metadata = {
  title: "Packing Services in London, Fragile pack, Full Pack, Exports Wrap",
  description:
    "Professional full and partial packing services in London and across the UK. Fragile packing, export wrap and blanket wrap by trained packers using high-quality materials. Fully insured. Get a free quote in under 2 minutes.",
};

const whatCanWeDo = [
  "Pack fast and efficient your home or business for a domestic or international relocation",
  "We can come to any part of the UK to prep and pack your belongings",
  "Professional packing using high-quality materials, fitting all international standards",
  "Offer you a variety of different insurance policies depending on the type of service you choose",
  "Competitive prices and different deals depending on the services you need us to deliver",
  "Collect all waste packing materials for disposal and recycling after unpacking your belongings",
];

const packingOptions: Card[] = [
  {
    title: "Full Packing Service",
    body: "With close to a decade of experience, our skilled teams are adept and proficient in all types of packing from the smallest of ornaments to the largest of items. We will prep everything from your domestic or business property with maximum efficiency and meticulous attention to detail.",
  },
  {
    title: "Unpacking Service",
    body: "Once we unload your belongings, we will unpack absolutely everything, so you don't have to. Waste removal is included in the unpacking service, as we are licenced by the UK's Environmental Agency. If you are relocating in London, we can arrange additional professional cleaning services for your home or office.",
  },
  {
    title: "Packing Consultation",
    body: "If you prefer to pack your belongings by yourself, we could still assist you with our expertise and professional packing materials. After you consult with your coordinator, you will receive a variety of sized boxes to ensure you have everything you could possibly need before the arrival of our moving teams.",
  },
];

const packingTypes: Card[] = [
  {
    title: "Fragile Packing",
    body: "Whenever we prepare valuable items, antiques or just delicate memorabilia, we add an extra layer of bubble wrap in addition to following a strict procedure of placing the objects in the packing crates. Thankfully Top Removals' skilled teams are no strangers to the refined art of fragile packing.",
  },
  {
    title: "Export Packing",
    body: "This type of packing is very popular with our international shipments as it will ensure the safe transportation of your goods to their destination. Export packaging is the extra layer added to your crates to protect them while they are in transit. We use it during all of our international jobs including our weekly removals to Norway.",
  },
  {
    title: "Blanket Wrap",
    body: "It is a method of packing where our teams will wrap your items in specialised thick blankets to protect them during the transportation. We use this technic with large pieces of furniture that can't be disassembled.",
  },
];

const faqs: FaqItem[] = [
  {
    question:
      "How is the price for packing/unpacking calculated and does it include the materials?",
    answer:
      "When estimating the price of the service, we take into consideration the method of packing, the number and type of materials that need to be used and the complexity of the whole procedure. When the customer books a complete service – packing, moving and materials, we can offer big discounts on the latter. As a rule of thumb, you can estimate the rate for the packing by multiplying the number of cartons needed by 6. So a 100 cartons pack job will cost approximately £600. This includes labour and all packing and wrapping materials – boxes, wrapping paper, bubble wrap, tape.",
  },
  {
    question: "Does the packing service come with full insurance?",
    answer:
      "Yes, everything we handle is covered by the insurance we hold. However, speak to your moving coordinator about the different insurance options and policies available to you, depending on your destination.",
  },
  {
    question: "What is included in the full packing service?",
    answer:
      "It includes packing all of the crockery, glassware, clothes, linen, lamps, books, pictures etc into cartons and marking the cartons for positioning them at your new home. If a customer has requested from us to do everything, we will come a day or two ahead of the scheduled loading date with all materials and complete the professional packing.",
  },
];

const tips: Tip[] = [
  {
    title: "Prepare your items properly",
    body: "All electrical appliances must be unplugged and cleaned. This includes washing machines, fridges, entertainment sets, etc. If there is a problem and you are unable or don't know how to disconnect your dishwasher, just inform our moving coordinator. The day of the packing Top Removals' teams will arrive with the necessary tool and do it for you, before wrapping neatly all of your belongings.",
  },
  {
    title: "Don't try to move bulky furniture by yourself",
    body: "Leave everything as it is. You don't have to move or dismantle anything in advance. The pieces that need to be disassembled will be discussed during the initial survey. When our packers come to your place, they will have their tool belts and will professionally wrap every single piece of furniture.",
  },
];

export default function PackingServicePage() {
  return (
    <>
      <PageBanner
        title="Full or Partial Packing Options Available"
        subtitle="Export Pack and Wrap Services Offered"
        crumbs={[
          { label: "Home", href: "/" },
          { label: "Services", href: "/services" },
          { label: "Packing Service" },
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
              eyebrow="Packing Service"
              title="What Does It Mean To Have Your Belongings Packed Professionally"
            />
            <p className="mt-8 text-base leading-relaxed text-brand-charcoal/85">
              Experienced packers can wrap your belongings faster while ensuring everything is done
              following all safety procedures. Top Removals&apos; teams are trained to deal with an
              array of different items and situations. We can easily disassemble or assemble your
              large pieces of furniture, wrap your valuable antiques or pack your office archives. As
              one of London&apos;s top moving companies, all of the services we offer are held to high
              standards. Our goal is to leave satisfied, happy customers, no matter the cost.
            </p>
          </div>
          <div className="relative">
            <div className="relative aspect-[4/3] overflow-hidden rounded-2xl shadow-xl">
              <Image
                src="/services/packing-service.svg"
                alt="Top Removals packers wrapping and boxing belongings"
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

      {/* What can we do for you */}
      <section className="bg-brand-grey py-20">
        <div className="mx-auto max-w-[88rem] px-4">
          <SectionHeading eyebrow="Our service" title="What Can We Do for You" />
          <CheckList items={whatCanWeDo} columns={2} className="mx-auto mt-12 max-w-5xl" />
        </div>
      </section>

      {/* Packing service options */}
      <section className="bg-white py-20">
        <div className="mx-auto max-w-[88rem] px-4">
          <SectionHeading eyebrow="Choose your service" title="Packing Service Options" />
          <p className="mx-auto mt-6 max-w-3xl text-center text-base leading-relaxed text-brand-charcoal/85">
            Top Removals can offer you a couple of different solutions for your home or office
            relocation in the UK or worldwide.
          </p>
          <CardGrid cards={packingOptions} className="mt-12" />
        </div>
      </section>

      {/* Types of professional packing */}
      <section className="bg-brand-grey py-20">
        <div className="mx-auto max-w-[88rem] px-4">
          <SectionHeading eyebrow="Packing methods" title="Types of Professional Packing" />
          <p className="mx-auto mt-6 max-w-3xl text-center text-base leading-relaxed text-brand-charcoal/85">
            There are a couple of ways to properly prepare the belongings of our customers for the
            move. Top Removals&apos; specialists pride themselves as being extremely diligent when it
            comes to packing as it is one of the most important steps of the entire relocation
            process.
          </p>
          <CardGrid cards={packingTypes} className="mt-12" />
        </div>
      </section>

      {/* FAQ */}
      <section className="bg-white py-20">
        <div className="mx-auto max-w-[88rem] px-4">
          <SectionHeading eyebrow="Good to know" title="FAQ" />
          <Faq items={faqs} className="mt-10" />
        </div>
      </section>

      {/* Packing tips */}
      <section className="bg-brand-grey py-20">
        <div className="mx-auto max-w-[88rem] px-4">
          <SectionHeading eyebrow="Helpful advice" title="Packing Tips" />
          <TipList tips={tips} numbered className="mt-12" />
          <p className="mx-auto mt-10 max-w-4xl text-center text-base leading-relaxed text-brand-charcoal/85">
            If you need more useful home packing tips you can check out ultimate house moving guide.
            There you will find all sorts of information like how to wrap your belongings, what
            methods to implement or which are the best materials you can use.
          </p>
        </div>
      </section>

      <CtaBand
        heading="Contact Us Now and Book Your Packing Services Today"
        buttonLabel="Book a Service"
        buttonHref="/book-a-service"
      />

      <Testimonials />
      <Accreditations />
    </>
  );
}
