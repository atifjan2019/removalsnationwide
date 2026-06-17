import type { Metadata } from "next";
import { buildMetadata, serviceH1, serviceLdFor } from "@/lib/seo";
import JsonLd from "@/components/seo/JsonLd";
import Image from "next/image";
import PageBanner from "@/components/layout/PageBanner";
import SectionHeading from "@/components/ui/SectionHeading";
import Button from "@/components/ui/Button";
import CtaBand from "@/components/home/CtaBand";
import CheckList from "@/components/services/CheckList";
import StepList from "@/components/services/StepList";
import TipList, { type Tip } from "@/components/services/TipList";
import Faq, { type FaqItem } from "@/components/services/Faq";
import Testimonials from "@/components/home/Testimonials";
import Accreditations from "@/components/home/Accreditations";

export const metadata: Metadata = buildMetadata("international-removals");

const whatCanWeDo = [
  "Top Removals offers regular weekly road-train services to Scandinavia, Germany, Switzerland, Benelux.",
  "Easy shipment tracking and additional insurance products are available to all of our customers.",
  "Our international coordinators will deal with the country and customs information as well at the management and administration of the whole project.",
  "Top Removals offers door-to-door services both for home and business relocations.",
  "We can provide you with secure storage facilities with 24/7 CCTV monitoring.",
  "Overseas shipping and airfreight are not a problem for us. Top Removals can help you relocate worldwide.",
  "We offer weekly removals to and from Norway.",
];

const steps = [
  "Contact us and request a date for a thorough survey of the belongings you wish to move.",
  "Our specialist will come and inspect everything and will give you more information about the type of packaging you will need and an overall time estimate. If you have fewer items and the overall moving volume is smaller you can benefit from our online video surveys.",
  "We will calculate everything and will present you with a free quote.",
  "After the agreement is set, you will be assigned a moving coordinator. They will manage the documentation, give you information and help you with the organisation.",
  "On moving day, our crews will come and load your items. From this point onward everything is our responsibility.",
  "Within the scheduled timeframe we will deliver your belongings to the country of your choice.",
];

const whyChoosePoints = [
  "Top Removals can offer weekly deliveries to most countries in the EU, so you don't have to wait for months to receive your items. The main destinations are Scandinavia, Benelux, Switzerland, Germany and Austria. We also offer services to other European countries via the vast network of agents and trade partners we have.",
  "We have a bi-weekly removal service which covers Poland, Lithuania, Latvia, and Estonia. Top Removals is partnering with some of Estonia's biggest moving companies. They provide us with support on their territory, and we return the favour when they need a trustworthy colleague in the UK. Ask your moving coordinator for more information about our schedule and the place you want to relocate to.",
  "Moving overseas is not a problem as some of our most popular destinations are the USA, Canada, New Zealand, Australia, Singapore, China, South Africa, the UAE, just to name a few.",
  "Our professionally trained staff can help you with all the challenges an international removal can pose. Being one of the bigger London moving companies, Top Removals can assist you with such things as with immigration and Visa services. When we can do everything from start to finish, we really mean that.",
];

const faqs: FaqItem[] = [
  {
    question: "How early in advance should I schedule an international move?",
    answer:
      "We recommend at least 2 weeks' notice for a long-distance relocation and even more for an international one. If you are planning to book a door-to-door international move, as opposed to a part-load service, then consider even a month or more notice. Bear in mind that often we suspend parking for the relocations we plan, and some local authorities require at least 2 weeks' notice for that. Changing the moving date in the last moment may result in losing the suspension bays and is subject to availability, although we do our best to accommodate all changes needed for our clients.",
  },
  {
    question: "What is a part-load service?",
    answer:
      "Part-load service is a popular international removals service, where the customer doesn't move the entire household, but just a few items or boxes. It is done on the presumption that the client doesn't require a direct door-to-door, hence on one large international bound truck, we can load goods from several customers. Then the vehicle is routed, and the items are offloaded in a sequence. This is the cheapest service for international removals as the fuel and journey expenses are spread between a couple of clients allowing us to keep the rates low. As a disadvantage, the customer has to be flexible with the collection/delivery dates. A window for collection/delivery is given, and we can confirm the exact ETA with just a few days notice. According to international standards, any removal that answers the described requirements and can be completed within 14 days constitutes a part-load service.",
  },
  {
    question: "How do I ship my stuff to another country?",
    answer:
      "Just give us a call and we will organise everything including the paperwork. Depending on where you want your goods to be transported to we can offer you different solutions. Top Removals have various partners around the world and can offer you both overseas shipping and airfreight. We will check the load and volume of your items and decide on the most budget-friendly option. In addition, we can also offer a single item delivery which means if you need to send a piano to Greece for example, we can do that for you.",
  },
];

const tips: Tip[] = [
  {
    title: "Familiarise with your destination country and its regulations",
    body: "You need to make sure all the things you want to transport are allowed to enter your destination country. This includes plants, pets, some firearms, medicines, etc. Your moving coordinator can help you with that. Check out our FAQ page to see what you should and shouldn't transport.",
  },
  {
    title: "Play it safe and bet on professional packing",
    body: "Moving to another country is not the same as relocating two blocks down from where you live right now. Your belongings must be carefully wrapped and prepared for the long transportation process. Everything must be properly padded and sealed. Usually, the best course of action is to hire professional packers, who know how to prep your items.",
  },
  {
    title: "Make an additional moving insurance",
    body: "Removal companies often provide you with a basic package of insurance services, however, this is often not enough. Everything happens and when it comes to international relocations a lot can go wrong. That is why Top Removals offers insurance upgrades to its customers. The open cover policy will guarantee extra protection for your valuables while travelling on foreign soil. Ask your moving coordinator to give you more details and think long and hard before you dismiss this option with a light hand.",
  },
];

export default function InternationalRemovalsPage() {
  return (
    <>
      <JsonLd data={serviceLdFor("international-removals")} />
      <PageBanner
        title="London, National and International Removals and Storage"
        subtitle="Connecting Worlds"
        h1={serviceH1["international-removals"]}
        crumbs={[
          { label: "Home", href: "/" },
          { label: "Services", href: "/services" },
          { label: "International Removals" },
        ]}
      />

      {/* Hero CTAs */}
      <section className="bg-white pt-10">
        <div className="mx-auto max-w-[88rem] px-4">
          <p className="text-lg font-bold uppercase tracking-wide text-brand-navy">
            Get a Free Online Quote in Under 2 Minutes!
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

      {/* What is our international relocation all about */}
      <section className="bg-white py-16">
        <div className="mx-auto grid max-w-[88rem] grid-cols-1 items-center gap-12 px-4 lg:grid-cols-2 lg:gap-16">
          <div>
            <SectionHeading
              align="left"
              eyebrow="International Removals"
              title="What Is Our International Relocation All About"
            />
            <p className="mt-8 text-base leading-relaxed text-brand-charcoal/85">
              Top Removals has an active fleet of vehicles throughout Europe, making the whole
              process less stressful. This allows for easy tracking and assures the high quality of
              the provided services. We are a certified member of the IAM (International Association
              of Movers) and follow strictly its best practices and requirements.
            </p>
          </div>
          <div className="relative">
            <div className="relative aspect-[4/3] overflow-hidden rounded-2xl shadow-xl">
              <Image
                src="/services/international-removals.svg"
                alt="Top Removals international fleet connecting worldwide destinations"
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

      {/* What can Top Removals do for you */}
      <section className="bg-brand-grey py-20">
        <div className="mx-auto max-w-[88rem] px-4">
          <SectionHeading eyebrow="Our worldwide service" title="What Can Top Removals Do For You" />
          <CheckList items={whatCanWeDo} columns={2} className="mx-auto mt-12 max-w-5xl" />
        </div>
      </section>

      {/* How will we organise */}
      <section className="bg-white py-20">
        <div className="mx-auto max-w-3xl px-4">
          <SectionHeading
            align="left"
            eyebrow="Step by step"
            title="How Will We Organise Our International Removals"
          />
          <StepList steps={steps} className="mt-10" />
        </div>
      </section>

      {/* Why choose us */}
      <section className="bg-brand-grey py-20">
        <div className="mx-auto max-w-5xl px-4">
          <SectionHeading
            align="left"
            eyebrow="The right partner"
            title="Why Choose Top Removals for Your International Relocation"
          />
          <p className="mt-6 text-base leading-relaxed text-brand-charcoal/85">
            We can offer you deliveries from the UK to any part of Europe and vice versa, thanks to
            our international fleet. All vehicles are regularly checked and are in perfect condition.
          </p>
          <ul className="mt-8 space-y-5">
            {whyChoosePoints.map((point, i) => (
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

      {/* International moving tips */}
      <section className="bg-brand-grey py-20">
        <div className="mx-auto max-w-[88rem] px-4">
          <SectionHeading eyebrow="Helpful advice" title="International Moving Tips" />
          <TipList tips={tips} numbered className="mt-12" />
        </div>
      </section>

      <CtaBand
        heading="Contact Us Now and Book Your International Removal Services Today"
        buttonLabel="Book a Service"
        buttonHref="/bookservice"
      />

      <Testimonials />
      <Accreditations />
    </>
  );
}
