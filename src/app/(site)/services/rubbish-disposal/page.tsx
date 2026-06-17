import type { Metadata } from "next";
import Image from "next/image";
import PageBanner from "@/components/layout/PageBanner";
import SectionHeading from "@/components/ui/SectionHeading";
import CtaBand from "@/components/home/CtaBand";
import QuoteCtaRow from "@/components/services/QuoteCtaRow";
import CheckList from "@/components/services/CheckList";
import StepList from "@/components/services/StepList";
import Faq, { type FaqItem } from "@/components/services/Faq";
import PricingTable, { type PricingRow } from "@/components/services/PricingTable";
import Testimonials from "@/components/home/Testimonials";
import Accreditations from "@/components/home/Accreditations";

export const metadata: Metadata = {
  title: "Rubbish Disposal and House Clearance Offered by Top Removals",
  description:
    "Licensed rubbish collection, house and office clearance across London, 7 days a week. CRB-checked uniformed teams, transparent load-based pricing and full recycling. Get a free quote in under 2 minutes.",
};

const whatCanWeDo = [
  "Daily refuse collection",
  "Removal of rubbish and waste",
  "Office clearances",
  "House and loft clearances",
  "Furniture and appliances clearance",
];

const steps = [
  "You get in contact with us and request a quote.",
  "Based on the information we receive, a survey may be needed to further assess the situation. After that, we provide you with an offer, and we set a collection date.",
  "Our teams arrive at your property and collect the waste. That is it. No further involvement from your part is required.",
];

const whyPick = [
  "Top Removals offers competitive prices",
  "Our teams are CRB checked and uniformed",
  "We have the proper equipment",
  "Top Removals is a licenced waste carrier",
  "On-site or video surveys are available for complicated or big projects",
];

const collectionPrices = [
  {
    title: "Small Collection",
    allowance: "1 item or up to 5 black sacks.",
    manpower: "Two-man team with a 15-minute time slot.",
    weight: "100kg",
    price: "£50",
  },
  {
    title: "Quarter Load",
    allowance: "3 cubic yards or 1/4 of the vehicle",
    manpower: "Two-man team with a 30-minute time slot.",
    weight: "250kg",
    price: "£80",
  },
  {
    title: "Half Load",
    allowance: "6 cubic yards or 1/2 of the vehicle",
    manpower: "Two-man team with a 60-minute time slot.",
    weight: "500kg",
    price: "£150",
  },
  {
    title: "Three Quarters Load",
    allowance: "9 cubic yards or 3/4 of the vehicle",
    manpower: "Two-man team with a 90-minute time slot.",
    weight: "750kg",
    price: "£200",
  },
  {
    title: "Full Load",
    allowance: "12 cubic yards or one full vehicle",
    manpower: "Two-man team with a 120-minute time slot.",
    weight: "1,000kg",
    price: "£250",
  },
];

const chargeColumns = ["Services", "Information", "Price"];
const chargeRows: PricingRow[] = [
  { label: "Extra 10 min labour", values: ["If we exceed the loading time allowed", "£10"] },
  { label: "TV or monitor", values: ["Due to how it is disposed of", "£20"] },
  { label: "Fridge", values: ["Due to how it is disposed of", "£40"] },
  { label: "Extra travel", values: ["If collection is over 20 miles from E6 6LS", "£2 per mile each way"] },
  {
    label: "Out of hours",
    values: ["Extra operating hours 18:00 – 21:00 Monday-Saturday, 09:00 – 18:00 Sunday", "£50"],
  },
  { label: "Same day call-out", values: ["Same day junk collection service", "£100"] },
  { label: "Bank Holidays", values: ["Extra operating hours", "£150"] },
];

const faqs: FaqItem[] = [
  {
    question: "Is there something you can't collect like chemicals, for example?",
    answer:
      "We don't deal with construction, hazardous, food or bulk/loose waste is accepted. However, Top Removals can help you with all types of household and office clearances. Furniture and appliances are also not a problem for us.",
  },
  {
    question: "What if a certain item is too large, and I can't get it out of the house?",
    answer:
      "Our teams can dismantle it (if that is possible). However, if something went in, we believe it can be taken out. So no worries there.",
  },
  {
    question: "What types of electrical goods can you dispose of?",
    answer:
      "We can remove whatever you ask us to. Everything is disposed of with the alignment of the WEE directives. Top Removals can free you from both old PCs and broken fridges. There are no restrictions on the type of electrical device we can collect.",
  },
];

export default function RubbishDisposalPage() {
  return (
    <>
      <PageBanner
        title="London Rubbish Collection and Disposal"
        subtitle="7 Days a Week Service"
        crumbs={[
          { label: "Home", href: "/" },
          { label: "Services", href: "/services" },
          { label: "Rubbish Disposal" },
        ]}
      />

      <QuoteCtaRow />

      {/* Intro */}
      <section className="bg-white py-16">
        <div className="mx-auto grid max-w-[88rem] grid-cols-1 items-center gap-12 px-4 lg:grid-cols-2 lg:gap-16">
          <div>
            <SectionHeading
              align="left"
              eyebrow="Rubbish Disposal"
              title="Top Removals Offers Rubbish Disposal for All London Residents"
            />
            <p className="mt-8 text-base leading-relaxed text-brand-charcoal/85">
              Top Removals has earned its reputation as a trustworthy provider of moving services in
              London and throughout the UK. We are certified by several internationally renowned
              organisations and follow strictly the best practices in our branch. It is only natural
              to be able to offer our customers a service that will complete the whole relocation
              process. Top Removals has dedicated extensive resources to be able to deliver quality
              rubbish disposal wherever it is needed. We offer different types of rubbish clearances
              within London and the surrounding areas.
            </p>
          </div>
          <div className="relative">
            <div className="relative aspect-[4/3] overflow-hidden rounded-2xl shadow-xl">
              <Image
                src="/services/rubbish-disposal.svg"
                alt="Top Removals rubbish collection and house clearance team"
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

      {/* What can we do */}
      <section className="bg-brand-grey py-20">
        <div className="mx-auto max-w-[88rem] px-4">
          <SectionHeading eyebrow="Our service" title="What Can Top Removals Do For You" />
          <CheckList items={whatCanWeDo} columns={2} className="mx-auto mt-12 max-w-5xl" />
        </div>
      </section>

      {/* How does it work */}
      <section className="bg-white py-20">
        <div className="mx-auto max-w-3xl px-4">
          <SectionHeading align="left" eyebrow="Step by step" title="How Does It Work?" />
          <StepList steps={steps} className="mt-10" />
        </div>
      </section>

      {/* Why pick us */}
      <section className="bg-brand-grey py-20">
        <div className="mx-auto max-w-5xl px-4">
          <SectionHeading eyebrow="The benefits" title="Why Pick Our Rubbish Disposal Service" />
          <CheckList items={whyPick} columns={2} className="mx-auto mt-12 max-w-4xl" />
          <div className="mx-auto mt-10 max-w-4xl space-y-4 text-base leading-relaxed text-brand-charcoal/85">
            <p>
              You can easily combine our removal with the rubbish disposal services. On the moving
              day, we are usually prepared to collect the items for disposal. Since everything is done
              by one company everything is well-coordinated. As an award-winning moving company, Top
              Removals knows how to leave its customers happy.
            </p>
            <p>
              Bear in mind that these are all different services, the payable fee for the rubbish is
              mentioned separately on the offer we prepare for the project. This way you can clearly
              see what you are paying for.
            </p>
            <p>
              All government licensing fees are calculated in the price. We aim to recycle all
              materials collected and only dispose of them in registered recycling centres. Waste
              transfer notes are provided for each job, and Top Removals is a licensed garbage carrier.
            </p>
          </div>
        </div>
      </section>

      {/* Our collection prices */}
      <section className="bg-white py-20">
        <div className="mx-auto max-w-[88rem] px-4">
          <SectionHeading eyebrow="Transparent rates" title="Our Collection Prices" />
          <div className="mt-12 grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
            {collectionPrices.map((p) => (
              <article
                key={p.title}
                className="flex flex-col overflow-hidden rounded-2xl border border-black/5 shadow-sm transition-shadow duration-300 hover:shadow-md"
              >
                <h3 className="bg-brand-navy px-6 py-4 text-center text-base font-bold uppercase tracking-wide text-white">
                  {p.title}
                </h3>
                <dl className="flex-1 space-y-3 p-6 text-sm">
                  <div>
                    <dt className="font-semibold text-brand-navy">Rubbish Allowance</dt>
                    <dd className="text-brand-charcoal/80">{p.allowance}</dd>
                  </div>
                  <div>
                    <dt className="font-semibold text-brand-navy">Man Power</dt>
                    <dd className="text-brand-charcoal/80">{p.manpower}</dd>
                  </div>
                  <div>
                    <dt className="font-semibold text-brand-navy">Max Weight</dt>
                    <dd className="text-brand-charcoal/80">{p.weight}</dd>
                  </div>
                </dl>
                <p className="px-6 pb-6 text-4xl font-extrabold text-brand-orange">{p.price}</p>
              </article>
            ))}
          </div>
        </div>
      </section>

      {/* Additional charges */}
      <section className="bg-brand-grey py-20">
        <div className="mx-auto max-w-4xl px-4">
          <SectionHeading eyebrow="Add-ons" title="Additional Charges" />
          <PricingTable columns={chargeColumns} rows={chargeRows} className="mt-12" />
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
        heading="Contact Us Now and Book Your Rubbish Disposal Services Today"
        buttonLabel="Book a Service"
        buttonHref="/book-a-service"
      />

      <Testimonials />
      <Accreditations />
    </>
  );
}
