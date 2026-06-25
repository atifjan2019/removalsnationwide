import type { Metadata } from "next";
import Link from "next/link";
import {
  buildMetadata,
  serviceH1,
  serviceLdFor,
  breadcrumbLd,
  organizationLd,
} from "@/lib/seo";
import JsonLd from "@/components/seo/JsonLd";
import PageBanner from "@/components/layout/PageBanner";
import SectionHeading from "@/components/ui/SectionHeading";
import Button from "@/components/ui/Button";
import Accreditations from "@/components/home/Accreditations";
import CtaBand from "@/components/home/CtaBand";
import Faq, { type FaqItem } from "@/components/services/Faq";
import StickyMobileBar from "@/components/services/StickyMobileBar";
import DormitoryMoveAnimations from "@/components/services/DormitoryMoveAnimations";
import { CheckIcon, StarIcon } from "@/components/ui/icons";

export const metadata: Metadata = buildMetadata("dormitory-move-student-storage");

/* ── Accreditations ────────────────────────────────────────────────── */

const dormitoryAccreditations = [
  { name: "British Association of Removers (BAR)" },
  { name: "National Guild of Removers and Storers (NGRS)" },
  { name: "International Association of Movers (IAM)" },
  { name: "The Furniture Ombudsman" },
  { name: "QSS-DW Approved Mover" },
  { name: "Checkatrade" },
];

/* ── S3: UK delivery service items ────────────────────────────────── */

const ukIncludes = [
  "Crew collect and neatly pack all items from the room",
  "All packing materials provided and brought by the crew",
  "Furniture disassembly included",
  "Professional wrapping on fragile and valuable items",
  "Transport off campus to any UK address",
  "Insurance included in the UK dormitory move price",
  "No need to be present at any step",
];

/* ── S6: Three ways ────────────────────────────────────────────────── */

const threeWays = [
  {
    num: 1,
    label: "Deliver",
    tagline: "UK and Europe",
    body: "Delivered to your new UK or European address. Insurance is included in the price of the UK dormitory move. Ideal for students moving between campuses or returning home within the UK.",
    highlight: true,
  },
  {
    num: 2,
    label: "Ship Worldwide",
    tagline: "Truck or container",
    body: "Packed for an international move and delivered by truck or shipped in a container, depending on the destination. Recommended for international students going home after their studies.",
    highlight: false,
    dark: true,
  },
  {
    num: 3,
    label: "Store",
    tagline: "Short or long term",
    body: "Placed in your own secure 24/7 CCTV-monitored unit for as long as needed. Returned to halls or a new address when you are ready. No time pressure.",
    highlight: false,
    dark: false,
  },
];

/* ── S7: What we need ──────────────────────────────────────────────── */

const whatWeNeed = [
  {
    num: 1,
    title: "A list of everything to pack",
    body: "Tell your move coordinator exactly what needs to go: furniture, boxes, electronics, fragile items, everything. The more detail you give, the faster the quote and the smoother the collection day.",
  },
  {
    num: 2,
    title: "Permission from your dormitory",
    body: "Inform your university or dormitory head that our crew will access your room. Pass any required authorisation to your move coordinator before collection day so there is no delay on arrival.",
  },
  {
    num: 3,
    title: "Your delivery or storage address",
    body: "Give us the address where your belongings need to go: your new UK or European address, an international shipping destination, or confirmation that you want them stored with later redelivery.",
  },
];

/* ── S8: Perfect for ───────────────────────────────────────────────── */

const perfectFor = [
  {
    title: "International students leaving the UK",
    body: "Your room is packed while you are abroad. Belongings go by truck or container to your home country, with an open cover insurance upgrade for the journey.",
  },
  {
    title: "Students between terms or campuses",
    body: "Vacate halls before your next accommodation is ready. We store your belongings and return them to any UK address when you are ready.",
  },
  {
    title: "Students who cannot be present",
    body: "Travelling, sitting exams elsewhere, or simply unavailable. Our movers pack the room without you. You need not be there.",
  },
  {
    title: "Students who prefer not to pack",
    body: "Our crew brings all materials, wraps every item and disassembles furniture. You hand over the access and we do the rest.",
  },
];

/* ── FAQs ──────────────────────────────────────────────────────────── */

const faqs: FaqItem[] = [
  {
    question: "Can you move just a few single items from a dormitory?",
    answer:
      "Yes. We move a single item, a few boxes or an entire room, including deliveries outside the UK. Send us the details of what needs moving and where it is going, and your move coordinator provides a quote. There is no minimum room size.",
  },
  {
    question: "How do you handle books and paper for a dormitory move?",
    answer:
      "We offer eco lidded plastic crates for hire that seal completely and prevent water damage in transit. We deliver them to your dormitory ahead of collection and collect them afterwards. Plastic crates are stronger and more stackable than cardboard boxes, which is ideal for heavy books and paper files.",
  },
  {
    question: "Can I access my belongings while they are in storage?",
    answer:
      "Yes. Your belongings are in your own unit with 24/7 CCTV surveillance. Give your move coordinator advance notice to arrange access. More items are added to your unit at any time by arrangement, and there is no time pressure on short or long-term bookings.",
  },
  {
    question: "Do I need to be present during the collection?",
    answer:
      "No. Our movers pack and remove everything from your room without you there. Tell us what to pack and inform your dormitory so the crew gets access to the room. Give us the delivery or storage address and we handle the rest.",
  },
  {
    question: "Do you offer international delivery for students moving abroad?",
    answer:
      "Yes. We pack your room for an international move and either deliver by truck or ship in a container, depending on the destination, with standard liability cover included and an open cover upgrade recommended. Customs clearance is handled through our international removals service.",
  },
  {
    question: "How much does a dormitory move or student storage cost?",
    answer:
      "Price depends on what needs packing, how far it is going, and whether you want delivery, shipping or storage. There are no hidden fees. Send your details to your move coordinator for a quote tailored to your room, destination and timeline.",
  },
  {
    question: "Do you offer storage over the summer or between terms?",
    answer:
      "Yes, short and long-term storage with no time pressure. Summer storage, end of term storage and year abroad storage are all available. We collect from your dormitory and return your belongings to halls or a new address when you are ready.",
  },
  {
    question: "Do you cover students across the UK?",
    answer:
      "Yes. We deliver to any point in the UK and Europe and ship worldwide, so we cover students at London universities and across the country. Collection is from your dormitory. Give us your address and destination to confirm the quote.",
  },
];

/* ── Schema ─────────────────────────────────────────────────────────── */

const faqPageSchema = {
  "@context": "https://schema.org",
  "@type": "FAQPage",
  mainEntity: faqs.map((f) => ({
    "@type": "Question",
    name: f.question,
    acceptedAnswer: { "@type": "Answer", text: f.answer },
  })),
};

const orgSchema = {
  "@context": "https://schema.org",
  ...organizationLd(),
};

/* ── Page ────────────────────────────────────────────────────────────── */

export default function DormitoryMoveStudentStoragePage() {
  return (
    <>
      <JsonLd data={serviceLdFor("dormitory-move-student-storage")} />
      <JsonLd data={faqPageSchema} />
      <JsonLd data={orgSchema} />
      <JsonLd
        data={breadcrumbLd([
          { label: "Home", href: "/" },
          { label: "Services", href: "/services" },
          { label: "Dormitory Move and Student Storage" },
        ])}
      />
      <DormitoryMoveAnimations />
      <StickyMobileBar sentinelId="hero-intro" />

      {/* ── S1: Hero ─────────────────────────────────────────────────── */}
      <PageBanner
        title="Dormitory Move and Student Storage"
        subtitle="We pack and move your whole room. You need not be present at any step."
        h1={serviceH1["dormitory-move-student-storage"]}
        crumbs={[
          { label: "Home", href: "/" },
          { label: "Services", href: "/services" },
          { label: "Dormitory Move and Student Storage" },
        ]}
      />

      {/* ── S1 continued: two-column canonical ───────────────────────── */}
      <section id="hero-intro" className="bg-white py-12 md:py-16">
        <div className="mx-auto max-w-[88rem] px-4">
          <div className="grid gap-10 lg:grid-cols-[3fr_2fr] lg:items-start lg:gap-16">

            {/* Left: value prop + CTAs */}
            <div>
              <p className="hero-anim-sub max-w-2xl text-lg leading-relaxed text-brand-charcoal/90">
                Top Removals runs full-service dormitory moves and student storage in London
                and across the UK. Our movers pack your entire room, disassemble the furniture,
                and transport everything in 2026, and you need not be present at any step.
              </p>
              <p className="hero-anim-sub mt-4 max-w-2xl text-base leading-relaxed text-brand-charcoal/80">
                One booking. Three possible outcomes: delivered to your new UK or European
                address, shipped worldwide by truck or container for international students going
                home, or stored in your own secure 24/7 CCTV unit. Short or long term, with
                later redelivery when you are ready.
              </p>

              <div className="hero-anim-ctas mt-6 flex flex-col gap-3 sm:flex-row sm:flex-wrap">
                <Button
                  href="/bookservice#quick-quote"
                  variant="orange"
                  size="lg"
                  className="w-full sm:w-auto"
                >
                  Quick Quote
                </Button>
                <Button
                  href="/bookservice"
                  variant="navy"
                  size="lg"
                  className="w-full sm:w-auto"
                >
                  Book a Service
                </Button>
                <Button
                  href="tel:+442072052525"
                  variant="outline"
                  size="lg"
                  className="w-full sm:w-auto"
                >
                  020 7205 2525
                </Button>
              </div>

              <p className="hero-anim-trust mt-3 text-xs font-medium text-brand-charcoal/55">
                No hidden fees. BAR-accredited remover. Insurance included on UK moves.
              </p>

              <div className="hero-anim-trust mt-5 flex flex-wrap gap-2">
                {[
                  "We pack everything",
                  "No need to be there",
                  "UK, Europe and worldwide",
                  "Secure 24/7 storage",
                ].map((label) => (
                  <span
                    key={label}
                    className="inline-flex items-center gap-1.5 rounded-full bg-brand-grey px-3 py-1.5 text-xs font-semibold text-brand-navy"
                  >
                    <CheckIcon className="h-3.5 w-3.5 text-brand-orange" strokeWidth={3} />
                    {label}
                  </span>
                ))}
              </div>
            </div>

            {/* Right: trusted-by card */}
            <div
              className="overflow-hidden rounded-2xl border border-black/10 shadow-sm"
              data-reveal
              data-delay="1"
            >
              <div className="bg-brand-grey p-6">
                <p className="mb-3 text-xs font-bold uppercase tracking-widest text-brand-navy">
                  Trusted and certified by
                </p>
                <ul className="space-y-2">
                  {dormitoryAccreditations.map(({ name }) => (
                    <li key={name} className="flex items-center gap-2">
                      <CheckIcon className="h-4 w-4 shrink-0 text-brand-orange" strokeWidth={3} />
                      <span className="text-sm text-brand-navy/85">{name}</span>
                    </li>
                  ))}
                </ul>
                <div className="mt-4 flex gap-4 border-t border-black/10 pt-4">
                  <Link
                    href="https://uk.trustpilot.com/review/www.top-removals.co.uk"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="text-xs font-semibold text-brand-orange underline underline-offset-2 hover:text-brand-navy"
                  >
                    Trustpilot reviews →
                  </Link>
                  <Link
                    href="/services"
                    className="text-xs font-semibold text-brand-charcoal/60 underline underline-offset-2 hover:text-brand-navy"
                  >
                    All services →
                  </Link>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* ── S2: Done for you (bold moment) ───────────────────────────── */}
      <section className="bg-white py-20">
        <div className="mx-auto max-w-[88rem] px-4">
          <div className="grid gap-10 lg:grid-cols-[3fr_2fr] lg:items-start lg:gap-16">
            <div data-reveal>
              <SectionHeading
                align="left"
                eyebrow="The full-service difference"
                title="A Dormitory Move Done For You"
              />
              <div className="mt-8 space-y-4 text-base leading-relaxed text-brand-charcoal/85">
                <p>
                  Our movers go to your room on the agreed date, pack every item, disassemble
                  furniture, professionally wrap fragile pieces, and load everything onto the
                  vehicle. You pack nothing, load nothing, and choose no unit size.
                </p>
                <p>
                  The student does not need to be present at any step. This is the standout
                  feature and the key difference from every by-the-box or self-storage brand:
                  the entire room is cleared, packed, and transported by a professional team
                  while you are free to be elsewhere.
                </p>
                <p>
                  From one booking, your belongings go one of three ways: delivered across the
                  UK or Europe, shipped worldwide for international students going home, or stored
                  in your own secure unit for collection later. The move coordinator confirms
                  which option fits your timeline and destination.
                </p>
              </div>
              <div className="mt-8 flex flex-col gap-3 sm:flex-row">
                <Button href="/bookservice#quick-quote" variant="orange" size="md">
                  Quick Quote
                </Button>
                <Button href="/packing-service" variant="navy" size="md">
                  Our Packing Service
                </Button>
              </div>
            </div>

            <div
              className="overflow-hidden rounded-2xl border border-black/10 shadow-sm"
              data-reveal
              data-delay="1"
            >
              <div className="bg-brand-sand p-6">
                <p className="text-xs font-bold uppercase tracking-widest text-brand-navy">
                  What makes us different
                </p>
                <ul className="mt-4 space-y-2">
                  {[
                    "Not a self-serve or by-the-box brand",
                    "The crew packs the whole room",
                    "You need not be present",
                    "BAR-accredited professional remover",
                    "One move coordinator manages every step",
                  ].map((item) => (
                    <li key={item} className="flex items-start gap-2 text-sm text-brand-charcoal/80">
                      <CheckIcon className="mt-0.5 h-4 w-4 shrink-0 text-brand-orange" strokeWidth={3} />
                      {item}
                    </li>
                  ))}
                </ul>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* ── S3: UK dormitory packing and delivery ─────────────────────── */}
      <section className="bg-brand-grey py-20">
        <div className="mx-auto max-w-[88rem] px-4">
          <div className="grid gap-10 lg:grid-cols-[3fr_2fr] lg:items-start lg:gap-16">
            <div data-reveal>
              <SectionHeading
                align="left"
                eyebrow="Within the UK"
                title="UK Dormitory Packing and Delivery"
              />
              <div className="mt-8 space-y-4 text-base leading-relaxed text-brand-charcoal/85">
                <p>
                  For moves within the UK, the crew comes to your dormitory, collects and neatly
                  packs all your items, brings all necessary materials, professionally wraps
                  everything, loads and transports off campus, and delivers directly to your new
                  address anywhere in the UK.
                </p>
                <p>
                  Insurance is included in the price of the UK dormitory move at no extra charge.
                  You do not need to arrange a separate policy or request cover. The student does
                  not need to be present at any step: the room is cleared and packed without you.
                </p>
              </div>
            </div>
            <div data-reveal data-delay="1">
              <div className="rounded-2xl border border-black/10 bg-white p-6">
                <p className="text-xs font-bold uppercase tracking-widest text-brand-navy">
                  Included in every UK dormitory move
                </p>
                <ul className="mt-4 space-y-3">
                  {ukIncludes.map((item) => (
                    <li key={item} className="flex items-start gap-2 text-sm text-brand-charcoal/80">
                      <CheckIcon className="mt-0.5 h-4 w-4 shrink-0 text-brand-orange" strokeWidth={3} />
                      {item}
                    </li>
                  ))}
                </ul>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* ── S4: International student relocations ─────────────────────── */}
      <section className="bg-brand-sand py-20">
        <div className="mx-auto max-w-[88rem] px-4">
          <div data-reveal>
            <SectionHeading eyebrow="Heading home abroad" title="International Student Relocations" />
          </div>
          <div className="mt-12 grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
            {[
              {
                title: "Packed for an international move",
                body: "Your belongings are packed with double-checked protection for the demands of an international journey, whether by truck across Europe or by container to a further destination.",
              },
              {
                title: "Delivered by truck or shipped in a container",
                body: "The method depends on your destination. Truck delivery covers Europe and nearby destinations. Container shipping covers worldwide moves. Your move coordinator advises which is right.",
              },
              {
                title: "Insurance for international moves",
                body: "Standard limited liability cover is included. An open cover upgrade is recommended for moves to Europe or worldwide and is arranged directly with your move coordinator.",
              },
            ].map(({ title, body }) => (
              <div
                key={title}
                data-reveal
                className="rounded-2xl border border-black/10 bg-white p-6 transition hover:-translate-y-1 hover:shadow-md motion-reduce:transition-none motion-reduce:hover:translate-y-0"
              >
                <p className="font-semibold text-brand-navy">{title}</p>
                <p className="mt-2 text-sm leading-relaxed text-brand-charcoal/75">{body}</p>
              </div>
            ))}
          </div>
          <p className="mt-8 text-center text-sm text-brand-charcoal/60" data-reveal>
            Customs clearance and documentation are handled through our{" "}
            <Link
              href="/international-removals"
              className="font-semibold text-brand-navy underline underline-offset-2 hover:text-brand-orange"
            >
              international removals service.
            </Link>
          </p>
        </div>
      </section>

      {/* ── S5: Secure student storage ────────────────────────────────── */}
      <section className="bg-white py-20">
        <div className="mx-auto max-w-[88rem] px-4">
          <div data-reveal>
            <SectionHeading eyebrow="Short and long term" title="Secure Student Storage" />
          </div>
          <div className="mt-12 grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
            {[
              {
                title: "Your own unit, 24/7 CCTV",
                body: "Your belongings are placed in your own dedicated unit with 24/7 security and CCTV surveillance. Boxes are moved directly from your dormitory into the unit.",
              },
              {
                title: "Short and long term, no time pressure",
                body: "Store over the summer, between terms, or for an entire year abroad. There is no minimum period. Your coordinator holds the booking open until you are ready.",
              },
              {
                title: "Redelivery to halls or a new address",
                body: "When you are ready, your belongings are returned to your dormitory, a new student address, or any UK location. Give advance notice and your coordinator arranges the date.",
              },
              {
                title: "Add more items at any time",
                body: "More items coming later? Additional items are added to your unit at any time by arrangement. Storage access requires advance notice to your coordinator.",
              },
              {
                title: "Often more budget-friendly than shipping",
                body: "If you are not ready to ship internationally, storing is often more budget-friendly. You store the belongings and ship later once your destination is confirmed.",
              },
              {
                title: "No hidden fees",
                body: "There are no surprise charges. The price is confirmed through your move coordinator, not published per box or per week, because every student move is a different size.",
              },
            ].map(({ title, body }) => (
              <div
                key={title}
                data-reveal
                className="rounded-2xl border border-black/10 bg-brand-grey p-6 transition hover:-translate-y-1 hover:shadow-md motion-reduce:transition-none motion-reduce:hover:translate-y-0"
              >
                <CheckIcon className="h-5 w-5 text-brand-orange" strokeWidth={3} />
                <p className="mt-3 font-semibold text-brand-navy">{title}</p>
                <p className="mt-1 text-sm leading-relaxed text-brand-charcoal/75">{body}</p>
              </div>
            ))}
          </div>
          <p className="mt-8 text-center text-sm text-brand-charcoal/60" data-reveal>
            For long-term storage solutions in London, see our{" "}
            <Link
              href="/storage"
              className="font-semibold text-brand-navy underline underline-offset-2 hover:text-brand-orange"
            >
              dedicated storage service.
            </Link>
          </p>
        </div>
      </section>

      {/* ── S6: Three ways (bold moment) ──────────────────────────────── */}
      <section className="bg-brand-grey py-20">
        <div className="mx-auto max-w-[88rem] px-4">
          <div data-reveal>
            <SectionHeading eyebrow="One booking" title="Three Ways We Finish Your Move" />
            <p className="mx-auto mt-4 max-w-2xl text-center text-base text-brand-charcoal/70">
              You choose at booking. Your move coordinator confirms the detail and ensures the
              right option for your volume, destination and timeline.
            </p>
          </div>

          <div className="mt-12 grid gap-6 sm:grid-cols-3">
            {threeWays.map(({ num, label, tagline, body, highlight, dark }) => (
              <div
                key={num}
                data-reveal
                className={`rounded-2xl p-8 shadow-sm ${
                  highlight
                    ? "border-2 border-brand-orange bg-white"
                    : dark
                      ? "bg-brand-navy text-white"
                      : "border border-black/10 bg-white"
                }`}
              >
                <span
                  className={`inline-flex h-10 w-10 items-center justify-center rounded-full font-heading text-sm font-bold ${
                    highlight
                      ? "bg-brand-orange text-white"
                      : dark
                        ? "bg-white/10 text-white"
                        : "bg-brand-grey text-brand-navy"
                  }`}
                >
                  {num}
                </span>
                <h3
                  className={`mt-4 font-heading text-xl font-bold ${dark ? "text-white" : "text-brand-navy"}`}
                >
                  {label}
                </h3>
                <p
                  className={`mt-1 text-xs font-bold uppercase tracking-widest ${
                    highlight ? "text-brand-orange" : dark ? "text-white/60" : "text-brand-charcoal/50"
                  }`}
                >
                  {tagline}
                </p>
                <p
                  className={`mt-4 text-sm leading-relaxed ${dark ? "text-white/80" : "text-brand-charcoal/75"}`}
                >
                  {body}
                </p>
              </div>
            ))}
          </div>

          <div className="mt-8 text-center" data-reveal>
            <Button href="/bookservice#quick-quote" variant="orange" size="md">
              Get a Quote
            </Button>
          </div>
        </div>
      </section>

      {/* ── S7: What we need from you ─────────────────────────────────── */}
      <section className="bg-white py-20">
        <div className="mx-auto max-w-[88rem] px-4">
          <div data-reveal>
            <SectionHeading eyebrow="Before collection day" title="What We Need From You" />
            <p className="mx-auto mt-4 max-w-2xl text-center text-base text-brand-charcoal/70">
              Three things are needed for a smooth collection. Your move coordinator runs through
              these at the time of booking.
            </p>
          </div>

          <div className="mt-12 grid gap-6 sm:grid-cols-3">
            {whatWeNeed.map(({ num, title, body }) => (
              <div
                key={num}
                data-reveal
                className="rounded-2xl border border-black/10 bg-brand-grey p-6"
              >
                <span className="inline-flex h-9 w-9 items-center justify-center rounded-full bg-brand-orange font-heading text-sm font-bold text-white">
                  {num}
                </span>
                <h3 className="mt-4 font-heading text-base font-bold text-brand-navy">{title}</h3>
                <p className="mt-2 text-sm leading-relaxed text-brand-charcoal/75">{body}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* ── S8: Perfect for ───────────────────────────────────────────── */}
      <section className="bg-brand-sand py-20">
        <div className="mx-auto max-w-[88rem] px-4">
          <div data-reveal>
            <SectionHeading eyebrow="Who we move" title="Perfect For" />
          </div>
          <div className="mt-12 grid gap-6 sm:grid-cols-2 lg:grid-cols-4">
            {perfectFor.map(({ title, body }) => (
              <div
                key={title}
                data-reveal
                className="rounded-2xl border border-black/10 bg-white p-6 transition hover:-translate-y-1 hover:shadow-md motion-reduce:transition-none motion-reduce:hover:translate-y-0"
              >
                <p className="font-semibold text-brand-navy">{title}</p>
                <p className="mt-2 text-sm leading-relaxed text-brand-charcoal/75">{body}</p>
              </div>
            ))}
          </div>
          <p className="mt-8 text-center text-sm text-brand-charcoal/60" data-reveal>
            Moving a single item only?{" "}
            <Link
              href="/single-item"
              className="font-semibold text-brand-navy underline underline-offset-2 hover:text-brand-orange"
            >
              See our single item delivery service.
            </Link>{" "}
            Need eco crates for your books?{" "}
            <Link
              href="/crate-hire"
              className="font-semibold text-brand-navy underline underline-offset-2 hover:text-brand-orange"
            >
              See crate hire.
            </Link>
          </p>
        </div>
      </section>

      {/* ── Reviews ──────────────────────────────────────────────────── */}
      <section className="bg-brand-grey py-16">
        <div className="mx-auto max-w-[88rem] px-4 text-center" data-reveal>
          <div
            className="flex justify-center gap-1 text-brand-orange"
            aria-label="5 out of 5 stars"
          >
            {Array.from({ length: 5 }).map((_, i) => (
              <StarIcon key={i} className="h-7 w-7" />
            ))}
          </div>
          <p className="mt-3 text-xl font-bold text-brand-navy">Rated Excellent on Trustpilot</p>
          <p className="mt-2 text-base text-brand-charcoal/70">
            Read genuine reviews from students and families who have used Top Removals for
            dormitory moves, student storage and international relocations.
          </p>
          <Link
            href="https://uk.trustpilot.com/review/www.top-removals.co.uk"
            target="_blank"
            rel="noopener noreferrer"
            className="mt-6 inline-flex min-h-[44px] items-center rounded-xl bg-brand-orange px-6 py-3 text-sm font-bold text-white transition hover:bg-brand-navy hover:text-white focus-visible:outline focus-visible:outline-2 focus-visible:outline-brand-orange"
          >
            View Reviews on Trustpilot
          </Link>
        </div>
      </section>

      {/* ── FAQs ─────────────────────────────────────────────────────── */}
      <section className="bg-white py-20">
        <div className="mx-auto max-w-[88rem] px-4">
          <div data-reveal>
            <SectionHeading eyebrow="Good to know" title="Dormitory and Student Storage FAQs" />
          </div>
          <Faq items={faqs} className="mt-10" />
        </div>
      </section>

      {/* ── CTA ──────────────────────────────────────────────────────── */}
      <section className="bg-brand-navy py-20">
        <div className="mx-auto max-w-[88rem] px-4 text-center" data-reveal>
          <h2 className="font-heading text-3xl font-bold text-white sm:text-4xl">
            Book Your Dormitory Move or Student Storage Today
          </h2>
          <p className="mx-auto mt-4 max-w-xl text-base text-white/70">
            We pack everything, disassemble the furniture, and handle the rest. Delivered across
            the UK, shipped worldwide, or stored securely. You need not be present.
          </p>
          <div className="mt-8 flex flex-col gap-3 sm:flex-row sm:justify-center">
            <Button
              href="/bookservice#quick-quote"
              variant="orange"
              size="lg"
              className="w-full sm:w-auto"
            >
              Quick Quote
            </Button>
            <Button
              href="/bookservice"
              variant="outline-light"
              size="lg"
              className="w-full sm:w-auto"
            >
              Book a Service
            </Button>
            <Button
              href="tel:+442072052525"
              variant="outline-light"
              size="lg"
              className="w-full sm:w-auto"
            >
              020 7205 2525
            </Button>
          </div>
          <p className="mt-6 text-sm text-white/50">
            No hidden fees. BAR-accredited. Insurance included on UK dormitory moves.
          </p>
        </div>
      </section>

      <CtaBand
        heading="Book Your Dormitory Move or Student Storage"
        buttonLabel="Quick Quote"
        buttonHref="/bookservice#quick-quote"
      />

      <Accreditations />
    </>
  );
}
