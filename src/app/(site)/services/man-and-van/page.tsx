import type { Metadata } from "next";
import Image from "next/image";
import PageBanner from "@/components/layout/PageBanner";
import SectionHeading from "@/components/ui/SectionHeading";
import Button from "@/components/ui/Button";
import CtaBand from "@/components/home/CtaBand";
import CheckList from "@/components/services/CheckList";
import StepList from "@/components/services/StepList";
import TipList, { type Tip } from "@/components/services/TipList";
import Faq, { type FaqItem } from "@/components/services/Faq";
import PricingTable, { type PricingRow } from "@/components/services/PricingTable";
import Testimonials from "@/components/home/Testimonials";
import Accreditations from "@/components/home/Accreditations";

export const metadata: Metadata = {
  title: "Man and Van London - The Reliable Man with a Van Services",
  description:
    "Affordable man and van services across London and the surrounding areas, 7 days a week. Ideal for small, partial, single-item and same-day moves. Insurance included, transparent hourly rates. Free quote in under 2 minutes.",
};

const whyChoose = [
  "We maintain a fully renewed vehicle fleet ready to cater your needs",
  "Suitable for small, partial, single-item and same-day removals",
  "Moving insurance is included in the price of the service",
  "Free online survey to make the booking procedure faster and easier",
  "Additional discounts if you use our storage or cleaning services",
];

const steps = [
  "Decide what you want to move and where then contact us. You can easily call us or use the Top Removals' online form.",
  "If needed we will arrange a site survey either in person or online, depending on your wishes.",
  "Based on your requirement, we will provide you with a free quote. Here will be the time to ask all of your questions and discuss additional services.",
  "Together with your assigned coordinator, you will set a moving date.",
  "Our team will arrive at your place on moving day to load and transport your belongings. If packing is included in your order, they will do that first.",
  "Once at your new home, we will unload and carry the boxes inside. We can also unpack them if that service was booked in advance.",
];

const needToKnow = [
  "We can dispose of or give for recycling your packing materials at the end of the move as Top Removals has the necessary certificates.",
  "When from start to finish, including driving a job is likely to exceed 9 hours, it is viewed as a long-distance removal. In such cases we may advise the customer to split the activities over a period of days, offer more man to load/unload faster or agree on over-time working to complete the relocation within a day.",
  "For the man with a van to work, you need to provide us with access to both your new and old place. If there are parking taxes, we can deal with your local council, there is no need for you to waste your time. Just inform us before the moving date.",
];

const pricingColumns = ["Price", "1 man", "2 men", "3 men"];
const pricingRows: PricingRow[] = [
  { label: "Per hour (Min 2h)", values: ["£55", "from £70", "from £90"] },
  { label: "Per half day (Up to 4h)", values: ["£210", "from £260", "from £330"] },
  { label: "Per day (Up to 8h)", values: ["£420", "from £500", "from £620"] },
];

const faqs: FaqItem[] = [
  {
    question: "Can you take my cat inside of the van for a short-distance move?",
    answer:
      "Even if it is for a short distance, it is dangerous for your animals to travel in the back of a moving vehicle. Try to arrange a pet sitter and pick them up after your belongings arrive at your new home. The safest solution is to just take your animal in the car with you. This way you can keep an eye on them at all times. There are also a couple of specialised companies that are licenced exclusively for pet transportation.",
  },
  {
    question: "I only need you to move my big wardrobe, can you do it?",
    answer:
      "Yes, the man and van service is extremely suitable for people who wish to move just one large piece of furniture or for students moving from their dormitory that have no other way of transporting a big wardrobe. Our movers are experienced in relocating musical instruments as well. We can come and safely wrap your piano or drum set and deliver it to its new home. Note that in these cases we are talking about a specialist's service as certain types of skills are required to move your items to any part of the British capital. As such there may be an additional fee.",
  },
  {
    question: "How is the cost for the man and van service calculated?",
    answer:
      "The final price will reflect all the basic (loading, transportation and unloading) and additional (packing, dismantling, cleaning, etc.) services you've booked. Parking fees, toll taxes and moving insurance are also included in the cost.",
  },
];

const tips: Tip[] = [
  {
    title: "How to make furniture dissemble faster?",
    body: "Simply find your furniture manuals. For more unusual or designer pieces, the user's instruction book will be essential, as it will save you a lot of time and stress. Make a mental note to put each manual in a zip-lock bag and label it. You can then collect all of them in a binder and use them to assemble the furniture, once it is unloaded at your new place.",
  },
  {
    title: "Consider Renting a Storage",
    body: "Hiring a unit is a great idea if you need to move out fast but you haven't already secured your new place. Top Removals can offer you transport to and from its London storage as a part of the Man and Van service, this way you don't have to extend the lease of your old place and lose money. Consider this possibility and discuss it with your moving coordinator prior to the booking of the Man and Van.",
  },
  {
    title: "Organise your boxes and belongings",
    body: "When packing, start from the things you rarely use and make your way towards your everyday essentials. If you own any antiques or valuable pieces inform your removals company. There is a right way to pack and transport such items in order to keep them undamaged. Furthermore, Top Removals can provide you with excellent rubbish disposal service for the items you no longer want or need like old furniture or electronics.",
  },
  {
    title: "Leave the lifting and loading to professionals",
    body: 'One of the biggest perks of the Man and Van services is you don\'t have to carry your boxes on your own. So leave this task to your movers and don\'t attempt to lift or load the van by yourself. There is a specific way of arranging the crates and on top of that, you can injure yourself if you don\'t use the proper gear. The thing you can do is label the boxes. Put signs stating "Fragile" to the crates containing your plates and glasses. Mark with "Heavy" the boxes which exceed 20 kg.',
  },
];

export default function ManAndVanPage() {
  return (
    <>
      <PageBanner
        title="London Man and Van"
        subtitle="7 Days a Week Service"
        crumbs={[
          { label: "Home", href: "/" },
          { label: "Services", href: "/services" },
          { label: "Man and Van Services" },
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

      {/* What are man and van services */}
      <section className="bg-white py-16">
        <div className="mx-auto grid max-w-[88rem] grid-cols-1 items-center gap-12 px-4 lg:grid-cols-2 lg:gap-16">
          <div>
            <SectionHeading
              align="left"
              eyebrow="Man and Van Services"
              title="What Are Man and Van Services?"
            />
            <p className="mt-8 text-base leading-relaxed text-brand-charcoal/85">
              This is a removals service designed to help you with smaller, faster relocations in
              London or the surrounding areas. The man with a van usually involves one or two
              professional movers and is suited for up to two-bedroom houses. For bigger properties
              and longer moving distances, you should choose our house removal service.
            </p>
          </div>
          <div className="relative">
            <div className="relative aspect-[4/3] overflow-hidden rounded-2xl shadow-xl">
              <Image
                src="/services/man-and-van.svg"
                alt="Top Removals man and van crew loading a small move"
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

      {/* Why choose */}
      <section className="bg-brand-grey py-20">
        <div className="mx-auto max-w-[88rem] px-4">
          <SectionHeading eyebrow="The benefits" title="Why Choose Our Man and Van Moving Services?" />
          <CheckList items={whyChoose} columns={2} className="mx-auto mt-12 max-w-5xl" />
        </div>
      </section>

      {/* How is everything organised */}
      <section className="bg-white py-20">
        <div className="mx-auto max-w-3xl px-4">
          <SectionHeading align="left" eyebrow="Step by step" title="How Is Everything Organised?" />
          <StepList steps={steps} className="mt-10" />
        </div>
      </section>

      {/* What you need to know */}
      <section className="bg-brand-grey py-20">
        <div className="mx-auto max-w-5xl px-4">
          <SectionHeading
            align="left"
            eyebrow="Good to know"
            title="What You Need to Know About Top Removals' Man and Van Service"
          />
          <p className="mt-6 text-base leading-relaxed text-brand-charcoal/85">
            With years of experience and countless Man and Van jobs in the UK, our teams know London
            like the palm of their hand. You can expect fast and adequate delivery of all booked
            services. As accredited members of the National Guild of Removers and Storers&apos;
            scheme, we know how to safely, securely and efficiently move your items on time and within
            budget.
          </p>
          <ul className="mt-8 space-y-5">
            {needToKnow.map((point, i) => (
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

      {/* Our prices */}
      <section className="bg-white py-20">
        <div className="mx-auto max-w-4xl px-4">
          <SectionHeading eyebrow="Transparent rates" title="Our Prices" />
          <PricingTable columns={pricingColumns} rows={pricingRows} className="mt-12" />
        </div>
      </section>

      {/* FAQ */}
      <section className="bg-brand-grey py-20">
        <div className="mx-auto max-w-[88rem] px-4">
          <SectionHeading eyebrow="Good to know" title="FAQ" />
          <Faq items={faqs} className="mt-10" />
        </div>
      </section>

      {/* Man and van moving tips */}
      <section className="bg-white py-20">
        <div className="mx-auto max-w-[88rem] px-4">
          <SectionHeading eyebrow="Helpful advice" title="Man and Van Moving Tips" />
          <TipList tips={tips} numbered className="mt-12" />
          <p className="mx-auto mt-10 max-w-4xl text-center text-base leading-relaxed text-brand-charcoal/85">
            Top Removals has created an ultimate house moving guide you can use to plan and organise
            your home relocation. We are answering all of your questions and giving you professional
            tips and valuable insight.
          </p>
        </div>
      </section>

      <CtaBand
        heading="Contact Us Now and Book Your Man and Van Moving Services Today"
        actions={[
          { label: "Book a Service", href: "/book-a-service", variant: "navy" },
          { label: "Removal Calculator", href: "/removal-calculator", variant: "outline-light" },
        ]}
      />

      <Testimonials />
      <Accreditations />
    </>
  );
}
