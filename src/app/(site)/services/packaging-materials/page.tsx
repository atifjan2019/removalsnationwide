import type { Metadata } from "next";
import Image from "next/image";
import PageBanner from "@/components/layout/PageBanner";
import SectionHeading from "@/components/ui/SectionHeading";
import CtaBand from "@/components/home/CtaBand";
import QuoteCtaRow from "@/components/services/QuoteCtaRow";
import CheckList from "@/components/services/CheckList";
import CardGrid, { type Card } from "@/components/services/CardGrid";
import TipList, { type Tip } from "@/components/services/TipList";
import Faq, { type FaqItem } from "@/components/services/Faq";
import PricingTable, { type PricingRow } from "@/components/services/PricingTable";
import Testimonials from "@/components/home/Testimonials";
import Accreditations from "@/components/home/Accreditations";

export const metadata: Metadata = {
  title: "Packaging Materials, Removal Boxes and Moving Supplies",
  description:
    "High-quality removal boxes, bubble wrap, tape, wardrobe and mattress covers with free delivery on larger orders. NGRS-accredited moving supplies for any relocation. Get a free quote in under 2 minutes.",
};

const whyPurchase = [
  "You will get high-quality supplies that can uphold the weight of your belongings.",
  "It is faster and easy as we can deliver to your doorstep everything you might need based on what you have to pack",
  "Top Removals can offer different deals and discounts when you combine a couple of moving and packing services",
  "All packing materials supplied come new, flat-packed and foiled by the manufacturer. However, if proven defective, we will exchange it free of charge.",
  "We can send flat-packed packing materials to all UK customers who are outside of London but wish to use our services.",
  "Top Removals can offer you affordable crate hire in the London area as well.",
];

const packingOptions: Card[] = [
  {
    title: "Large moving boxes",
    body: "These big sized boxes are perfect for packing items like bedding, duvets, pillows etc. Before ordering them, check their dimensions in the table below, to see if this is what you need.",
  },
  {
    title: "Small moving boxes",
    body: "Designed to fit all types of kitchenware, cutlery, and other smaller essential items.",
  },
  {
    title: "Mattress protection cover",
    body: 'Created to comfortably "hug" your mattress and protect it while manoeuvring it during your house removal. If you feel crafty, you can use the cover on other items as well.',
  },
  {
    title: "Clothing & wardrobe boxes",
    body: "They come with a hanger inside, ensuring dresses and other such items do not crease during the move. You can securely transport your clothing and accessories.",
  },
  {
    title: "Office and file moving boxes",
    body: "Designed specifically for commercial removals, these boxes come with labels, so it's easier to find what you are looking for once you relocate.",
  },
  {
    title: "Bubble wrap",
    body: "Overall the most important and highly used packing material. You can use it to protect all sorts of items and valuables. Our rolls are 50cm wide by 10m long and come perforated for the ultimate convenience.",
  },
  {
    title: "Packing tape",
    body: "Often overlooked when doing the initial shopping for packing materials, the tape is quite important. It is not only useful for sealing the cardboard containers but also to enforcing the most vulnerable and easy to rip places – the box's edges and bottom. Top Removals offers high quality and cost-effective tape rolls, which can be used to close up to ten boxes for the ultimate packing solution.",
  },
];

const priceColumns = ["Material", "Size", "Price"];
const priceRows: PricingRow[] = [
  { label: "Large box", values: ["45x45x52cm/18x18x20″", "£5.00 each"] },
  { label: "Small box", values: ["45x33x33cm/18x13x13″", "£5.00 each"] },
  { label: "Wardrobe box (hanging bar included)", values: ["51x45x122cm/20x18x48″", "£14.00 each"] },
  { label: "Tape", values: ["48mm/66mm", "£2.00 per roll"] },
  { label: "Bubble Wrap", values: ["50 cm / 10 m roll", "£10.00 each"] },
  { label: "Double Mattress Cover", values: ["–", "£8.00 each"] },
];

const faqs: FaqItem[] = [
  {
    question: "Do you use biodegradable packing materials?",
    answer:
      "We only use packing materials which are approved and recommended by the British Association of Removals. These are mostly made of recyclable materials. As well as using such products we offer free collection of packing waste materials after the moves and then we do recycle all of it.",
  },
  {
    question: "I wish to order packing materials but I'm not sure what will I need. Can you help me?",
    answer:
      "Certainly, our moving coordinators can offer you different solutions depending on the items you need to pack. You need to give us detailed information about the dimensions and the type of your belongings, and we will calculate what you need in terms of boxes, bubble wrap, tape or more specialised materials.",
  },
  {
    question: "Is there a minimum quantity of packing materials I have to purchase?",
    answer:
      "No, there are however some perks you need to be aware of. Orders for the value of £60+VAT or more are free of charge. Anything below that is subject to a delivery fee, starting from £20+VAT.",
  },
];

const tips: Tip[] = [
  {
    title: "Don't wait for the last minute",
    body: "You need to order your packing supplies in advance, so you will have enough time to prepare your belongings for the road. The more stuff you own, the earlier you have to make your purchase. Top Removals can offer professional packing services which include the materials. This will save you a lot of time and stress, and it's definitely a good investment.",
  },
  {
    title: "Be careful when using secondhand cardboard boxes",
    body: "As it is with everything that is not new, there is a risk when using hand-me-down boxes. For example, they may look sturdy on the outside but have water damage on the inside. A good money-saving alternative is crate hire. Rent a couple of plastic containers and don't worry you will break the bank. Plus, this is also a good way to minimise the environmental impact a relocation can have.",
  },
  {
    title: "Use household items as padding",
    body: "There are many items you can use to secure your things inside the moving boxes. Old blankets, sheets and towels are perfect for wrapping cutlery and books. However, use bubble wrap when preparing your most breakable belongings like wine glasses, plates or photo frames.",
  },
];

export default function PackagingMaterialsPage() {
  return (
    <>
      <PageBanner
        title="Full Range of Packing Materials On Stock"
        subtitle="With Free Delivery"
        crumbs={[
          { label: "Home", href: "/" },
          { label: "Services", href: "/services" },
          { label: "Packaging Materials" },
        ]}
      />

      <QuoteCtaRow />

      {/* Intro */}
      <section className="bg-white py-16">
        <div className="mx-auto grid max-w-[88rem] grid-cols-1 items-center gap-12 px-4 lg:grid-cols-2 lg:gap-16">
          <div>
            <SectionHeading
              align="left"
              eyebrow="Packaging Materials"
              title="Top Removals' Packing Materials"
            />
            <p className="mt-8 text-base leading-relaxed text-brand-charcoal/85">
              The packing materials are an essential part of every relocation. If they are of high
              quality, you can rest assured your goods will arrive at their final destination in
              proper condition. We are proud accredited members of the NGRS (National Guild of
              Removers and Storers) and as such Top Removals is held to especially high standards when
              it comes to the services and products we offer to our customers. Everything you could
              possibly need for the ideal relocation, our top moving company can provide you with.
            </p>
          </div>
          <div className="relative">
            <div className="relative aspect-[4/3] overflow-hidden rounded-2xl shadow-xl">
              <Image
                src="/services/packaging-materials.svg"
                alt="Top Removals range of boxes and packing materials"
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

      {/* Why purchase */}
      <section className="bg-brand-grey py-20">
        <div className="mx-auto max-w-[88rem] px-4">
          <SectionHeading eyebrow="The benefits" title="Why Purchase Your Packing Materials From Us" />
          <CheckList items={whyPurchase} columns={2} className="mx-auto mt-12 max-w-5xl" />
        </div>
      </section>

      {/* Packing options */}
      <section className="bg-white py-20">
        <div className="mx-auto max-w-[88rem] px-4">
          <SectionHeading eyebrow="What's available" title="Packing Options" />
          <p className="mx-auto mt-6 max-w-3xl text-center text-base leading-relaxed text-brand-charcoal/85">
            Top Removals works with the most common and industry-approved materials for the removals
            industry. Other types of boxes can also be arranged, but that would require advance
            ordering.
          </p>
          <CardGrid cards={packingOptions} className="mt-12" />
        </div>
      </section>

      {/* Price list */}
      <section className="bg-brand-grey py-20">
        <div className="mx-auto max-w-4xl px-4">
          <SectionHeading eyebrow="Transparent rates" title="Price List for Packing Materials" />
          <PricingTable columns={priceColumns} rows={priceRows} className="mt-12" />
          <p className="mt-6 text-sm leading-relaxed text-brand-charcoal/70">
            All our deliveries are free for orders over £120. A £20 delivery charge applies to all
            other deliveries and a congestion charge fee may apply. All prices are subject to 20% VAT.
            Please do not hesitate to get in touch should you have any queries and one member of our
            team will be happy to help. Do not forget to ask for our professional packing services,
            as well. We can save you a lot of time.
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

      {/* Tips */}
      <section className="bg-brand-grey py-20">
        <div className="mx-auto max-w-[88rem] px-4">
          <SectionHeading eyebrow="Helpful advice" title="Tips for Your Packing Materials" />
          <TipList tips={tips} numbered className="mt-12" />
        </div>
      </section>

      <CtaBand
        heading="Contact Us Now and Get Your Packing Materials Today"
        buttonLabel="Book a Service"
        buttonHref="/book-a-service"
      />

      <Testimonials />
      <Accreditations />
    </>
  );
}
