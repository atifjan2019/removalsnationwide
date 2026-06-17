import type { Metadata } from "next";
import Image from "next/image";
import PageBanner from "@/components/layout/PageBanner";
import SectionHeading from "@/components/ui/SectionHeading";
import CtaBand from "@/components/home/CtaBand";
import CheckList from "@/components/services/CheckList";
import StepList from "@/components/services/StepList";
import TipList, { type Tip } from "@/components/services/TipList";
import Faq, { type FaqItem } from "@/components/services/Faq";
import Testimonials from "@/components/home/Testimonials";
import Accreditations from "@/components/home/Accreditations";

export const metadata: Metadata = {
  title: "House Moving Services in London by Top Home Removals",
  description:
    "Fully insured house and domestic removals across London and the UK, 7 days a week. Packing, loading, transport and unpacking handled by our BAR-accredited movers. Get an online estimate today.",
};

const includes = [
  "We can manage the whole process from top to bottom – packing, loading, transporting, unloading and unpacking one's belongings",
  "Easy to use House Removals calculator that will give you an estimated price even before you contact us",
  "Top Removals got you fully insured and always works to protect its customers best interest",
  "As an award-winning London company with years of experience and annually certified by BAR, we know how to properly execute a house relocation",
  "We can offer additional deals and services in accordance with your needs",
  "Regardless if you are located in London or in any other part of the UK, Top Removals can help you move.",
  "Top Removals is a licenced waste disposal company, so we can help you declutter your home before the move.",
];

const steps = [
  "You send us a request, and we organise a free survey (It can be done remotely if that is convenient for you). If you want you can use our house moving calculator to estimate your price and send your query via its quote form.",
  "Our moving experts will discuss with you all the options you have in regards to the packing and transportation of the goods.",
  "Once all is clear, together with you, we will set up a moving date.",
  "Our crew will come to your UK home, pack or get your already packed boxes and items and load them to the vehicles.",
  "We will safely transport your home items to their new location.",
  "If you want after the unloading, we can also unpack everything for you.",
];

const honestPoints = [
  "There are no hidden expenses, everything we discuss with you prior the relocation is taken into consideration when calculating the final cost. However, for this to work, you have to give us exact information about what needs to be transported and its location. The concern is that if your boxes suddenly become more or you have added extra furniture, there is a chance we won't be able to execute the move in the time frame and price set in our agreement. Remember, everything is calculated according to the information you provide us with.",
  "There is no limit for the number of boxes you want us to relocate as long as the moving vehicles won't exceed their permissible gross weight. For more information check out the specifications of our fleet. However, for small volume moves in the British capital we recommend you use our Man with a Van service.",
  "If you want additional things like disassembly/assembly of furniture or house cleaning to try to inform us before the moving day, so we can take it into an account. Note that some of the extra services are offered only on the territory of the British capital.",
  "We can connect and disconnect any appliances for you except gas ones. Things like dishwashers, tumble dryers and washing machines are easily handled by our movers. We do not drill walls though and cannot hook your paintings unless this is pre-arranged with us. In such cases, Top Removals will provide a handyman to do this professionally. We can also assist with finding a gas safe engineer to connect your gas appliances.",
];

const faqs: FaqItem[] = [
  {
    question: "How much does a house move cost?",
    answer:
      "Depending on the complexity, the size of the goods, the customer's requirements and the distance it can be anywhere from £200+VAT to £2-3,000+VAT. We will be able to give you an estimate after the property survey. If you want, you can use our house moving calculator to get a better idea of the cost for your domestic move.",
  },
  {
    question: "If I have a problem dismantling my furniture can you help me?",
    answer:
      "Certainly, our movers are equipped with the basic tools, so they are perfectly capable to disassemble your furniture. However, you need to inform us in advance, so it doesn't mess with the time frame of the domestic relocation.",
  },
  {
    question: "Do I need to do anything specific before you arrive?",
    answer:
      "On the day of the move, our teams must have access to your place to load and unload all of your belongings. Speak in advance with your landlords and neighbours and inform them what is about to happen. Secure parking space and if you need a permit, just inform your moving coordinator. We will arrange it with your local council. Everything must be done before our arrival so there won't be any disruptions and surprises.",
  },
];

const tips: Tip[] = [
  {
    title: "Bear in mind the weight of the moving boxes",
    body: 'The health and safety recommendations state that a box shouldn\'t exceed 20 kg to be lifted and stacked without a problem. However, if it\'s bigger, one should be marked as "HEAVY" and used as a base when placed in the truck or van. It is advisable not to stack more than 5 or 6 crates to preserve their integrity and protect the bottom ones from being smashed. That is why a good mover will load the vehicle with a mix of furniture and boxes and avoid making a row only with crates.',
  },
  {
    title: "Check to see if all of your belongings can be transported",
    body: "There are a couple of things we can't transport, mainly because of safety regulations. You can see a list on our FAQ page or ask your moving coordinator about them. This way, you can be prepared properly and either sell or dispose of them.",
  },
  {
    title: "Pack like a pro",
    body: "There are many types of boxes you can use for your clothes and items. Use stretch wrap to protect your furniture, for the more valuable pieces you can add a layer of bubble wrap as well. Everything should be labelled accordingly. If you are dismantling something, put the smaller elements in ziplock bags and use tape to secure them on the bigger pieces. This way you won't lose them and will know from where exactly the bolts and nuts came.",
  },
  {
    title: "Prep your appliances",
    body: "While our movers can help you with basic things like disconnecting a washer, other white goods must be prepared prior to our arrival. Fridges and freezers must be unplugged, defrosted and cleaned, before they are loaded. We recommend you get a certified electrician or plumber for the more serious tasks like mains connections.",
  },
];

export default function HouseRemovalsPage() {
  return (
    <>
      <PageBanner
        title="House and Domestic Removals"
        subtitle="7 Days a Week Service"
        crumbs={[
          { label: "Home", href: "/" },
          { label: "Services", href: "/services" },
          { label: "House Removals" },
        ]}
      />

      <CtaBand
        heading="Are You Looking For A House Removal Quote?"
        subtext="Estimate your house moving cost online now"
        buttonLabel="Removal Calculator"
        buttonHref="/removal-calculator"
      />

      {/* What does our service include */}
      <section className="bg-white py-20">
        <div className="mx-auto grid max-w-[88rem] grid-cols-1 items-center gap-12 px-4 lg:grid-cols-2 lg:gap-16">
          <div>
            <SectionHeading
              align="left"
              eyebrow="House Removals"
              title="What Does Our House Removal Service Include"
            />
            <CheckList items={includes} className="mt-8" />
          </div>
          <div className="relative">
            <div className="relative aspect-[4/3] overflow-hidden rounded-2xl shadow-xl">
              <Image
                src="/services/house-removals.svg"
                alt="Top Removals crew loading a domestic house move"
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

      {/* How does it work */}
      <section className="bg-brand-grey py-20">
        <div className="mx-auto max-w-3xl px-4">
          <SectionHeading align="left" eyebrow="Step by step" title="How Does It Work?" />
          <StepList steps={steps} className="mt-10" />
        </div>
      </section>

      {/* What other companies won't tell you */}
      <section className="bg-white py-20">
        <div className="mx-auto max-w-5xl px-4">
          <SectionHeading
            align="left"
            eyebrow="Full transparency"
            title="What Other Moving Companies Won't Tell You"
          />
          <p className="mt-6 text-base leading-relaxed text-brand-charcoal/85">
            Top Removals&apos; goal is to create a high-quality moving service and achieve 100%
            customer satisfaction. To do that we need to have an honest talk with our clients – with
            you, and inform you about some moving specifics surrounding home removals:
          </p>
          <ul className="mt-8 space-y-5">
            {honestPoints.map((point, i) => (
              <li
                key={i}
                className="flex gap-4 rounded-2xl border-l-4 border-brand-orange bg-brand-grey p-6"
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
      <section className="bg-brand-grey py-20">
        <div className="mx-auto max-w-[88rem] px-4">
          <SectionHeading eyebrow="Good to know" title="FAQ" />
          <Faq items={faqs} className="mt-10" />
        </div>
      </section>

      {/* House moving tips */}
      <section className="bg-white py-20">
        <div className="mx-auto max-w-[88rem] px-4">
          <SectionHeading eyebrow="Helpful advice" title="House Moving Tips" />
          <TipList tips={tips} numbered className="mt-12" />
          <p className="mx-auto mt-10 max-w-4xl text-center text-base leading-relaxed text-brand-charcoal/85">
            If you want to learn more and be prepared better for your upcoming London relocation, Top
            Removals has a complete house moving guide that you can use. Here you will find everything
            from how many movers you would need and what vehicle to rent to how to pack your piano.
          </p>
        </div>
      </section>

      <CtaBand
        heading="Contact Us Now and Book Your House Moving Services Today"
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
