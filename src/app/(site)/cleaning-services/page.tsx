import type { Metadata } from "next";
import { getResolvedSettings } from "@/lib/settings";
import Image from "next/image";
import Link from "next/link";
import {
  buildMetadata,
  serviceH1,
  serviceLdFor,
  breadcrumbLd,
  organizationLd,
  SITE_URL,
} from "@/lib/seo";
import JsonLd from "@/components/seo/JsonLd";
import PageBanner from "@/components/layout/PageBanner";
import SectionHeading from "@/components/ui/SectionHeading";
import Button from "@/components/ui/Button";
import CtaBand from "@/components/home/CtaBand";
import Faq, { type FaqItem } from "@/components/services/Faq";
import StickyMobileBar from "@/components/services/StickyMobileBar";
import CleaningServicesAnimations from "@/components/services/CleaningServicesAnimations";
import { CheckIcon, StarIcon } from "@/components/ui/icons";

export const metadata: Metadata = buildMetadata("cleaning-services");

/* ── Service Highlights ────────────────────────────────────────────────── */

const cleaningServiceStandards = [
  { name: "Fully insured removals" },
  { name: "Vetted moving crews" },
  { name: "International moving experience" },
  { name: "Independent dispute resolution" },
  { name: "Clear written quotations" },
  { name: "Customer-reviewed service" },
];

/* ── S3: Cleaning services menu ────────────────────────────────────── */

const services = [
  {
    title: "End of Tenancy Cleaning",
    desc: "Thorough clean of the full property for the landlord or letting-agent checkout. Leaves the place in good condition and improves the chance of getting the deposit back.",
    highlight: true,
  },
  {
    title: "Move-Out Cleaning",
    desc: "Full property clean on the day you vacate, coordinated with the movers so the handover is clean and on schedule.",
    highlight: true,
  },
  {
    title: "Move-In Cleaning",
    desc: "Prep your new home before furniture arrives. Fresh and sanitised surfaces from day one at the new address.",
    highlight: false,
  },
  {
    title: "After Builders Cleaning",
    desc: "Specialist clean for renovated properties. Removes construction dust, plaster stains and building residue before furniture goes in.",
    highlight: false,
  },
  {
    title: "Carpet Steam Cleaning",
    desc: "Professional carpet steam cleaning for end of tenancy inspections, moves and regular home care.",
    highlight: false,
  },
  {
    title: "Upholstery Cleaning",
    desc: "Deep clean of sofas, armchairs and upholstered items. Best done before packing, not after arrival.",
    highlight: false,
  },
  {
    title: "Regular Domestic Cleaning",
    desc: "Ongoing cleaning for homes across London. Thoroughly vetted, regularly trained and fully insured cleaners on a regular schedule.",
    highlight: false,
  },
  {
    title: "Spring and One-Off Cleaning",
    desc: "A thorough one-off deep clean for any property, ideal before or after a move or for a seasonal refresh.",
    highlight: false,
  },
  {
    title: "Office, Retail and Commercial Cleaning",
    desc: "Professional cleaning for offices, retail units and commercial properties across London, coordinated around your schedule.",
    highlight: false,
  },
];

/* ── S7: Room-by-room checklist ────────────────────────────────────── */

const roomChecklist = [
  {
    room: "Kitchen",
    items: [
      "Worktops cleaned and wiped down",
      "Cupboards inside and out",
      "Sink and taps, descaled",
      "Hob and extractor hood",
      "Oven, degreased",
      "Fridge and freezer, where empty",
    ],
  },
  {
    room: "Bathroom",
    items: [
      "Toilet, full clean and descale",
      "Bath, shower, tiles and grout",
      "Sink and taps, limescale removed",
      "Mirror and glass",
      "Full limescale removal",
      "Floor, mopped and dried",
    ],
  },
  {
    room: "Bedrooms and Living Areas",
    items: [
      "Full dusting, surfaces and fittings",
      "Skirting boards and windowsills",
      "Wardrobes and furniture, inside and out",
      "Vacuuming throughout",
      "Hard floors, swept and mopped",
    ],
  },
  {
    room: "Hallway and Stairs",
    items: [
      "Floor, swept, mopped or vacuumed",
      "Banisters, cleaned and wiped",
      "Doors, handles and light switches",
      "Skirting boards throughout",
    ],
  },
];

/* ── S8: Combine steps ─────────────────────────────────────────────── */

const combineSteps = [
  {
    step: 1,
    title: "Man and Van Move",
    detail:
      "Our team packs, loads and transports everything to the new address. One coordinator manages the whole day from first van to last cleaner.",
    href: "/man-and-van-london" as string | null,
    linkLabel: "Man and van" as string | null,
  },
  {
    step: 2,
    title: "End of Tenancy Clean",
    detail:
      "Top Cleaners cleans the old property for the checkout. Timed to follow the removal van so the property is empty before cleaning starts.",
    href: null,
    linkLabel: null,
  },
  {
    step: 3,
    title: "Move-In Prep Clean",
    detail:
      "Top Cleaners preps the new home before furniture arrives. Fresh, sanitised and ready on the day the van pulls up.",
    href: null,
    linkLabel: null,
  },
  {
    step: 4,
    title: "Rubbish Clearance",
    detail:
      "Unwanted furniture and broken appliances are cleared at the same time. No separate booking and no second coordinator needed.",
    href: "/rubbish-disposal",
    linkLabel: "Rubbish disposal",
  },
];

/* ── S9: Coordinator facts ─────────────────────────────────────────── */

const coordinatorFacts = [
  {
    title: "One point of contact",
    body: "The move coordinator organises the removals crew, the cleaning team and any rubbish clearance in one booking. No separate calls to separate companies on the day.",
  },
  {
    title: "No clashes on the day",
    body: "The coordinator sequences the teams so the cleaner does not arrive before the van has finished loading. This avoids the delays and penalty charges that follow when teams do not communicate.",
  },
  {
    title: "Confirmed team and timeline",
    body: "Once the coordinator knows the property size and scope, they confirm the number of cleaners and an estimate for the duration. Nothing is left unconfirmed.",
  },
  {
    title: "Discounted bundle rate",
    body: "Customers who book the move and the clean together receive a discounted rate on the combined service. One coordinator, one invoice, one discounted price.",
  },
];

/* ── S10: Cleaning tips ────────────────────────────────────────────── */

const tips = [
  {
    title: "Organise the new-home clean before the moving date",
    detail:
      "A clean home is ready for furniture on arrival. Book the move-in clean before the van is scheduled so the new property is ready when you arrive, not the day after.",
  },
  {
    title: "Buy supplies in advance if you plan to clean yourself",
    detail:
      "On moving day, the nearest shop is far away and time is short. Set aside a cleaning kit the week before the move so it is ready when you need it.",
  },
  {
    title: "Clean carpets and upholstery before they are packed",
    detail:
      "Once furniture is in place at the new address, cleaning it is much harder. Schedule carpet steam cleaning and upholstery cleaning as part of the moving process, not as an afterthought.",
  },
];

/* ── FAQs ──────────────────────────────────────────────────────────── */

const faqs: FaqItem[] = [
  {
    question: "Are the cleaning crews coordinated with the movers?",
    answer:
      "Yes. A single move coordinator organises the movers and the cleaning crew so they do not clash on the day. This avoids the delays and penalty charges that follow when teams do not communicate. A discounted rate applies when the move and the clean are booked together.",
  },
  {
    question: "How many cleaners will you send to my property?",
    answer:
      "The number of cleaners depends on the property size and the services chosen. Top Cleaners sends as many as the job needs. Tell the coordinator the property type and the scope, and they confirm the team size and an estimate of how long the job will take.",
  },
  {
    question: "How long will the service take?",
    answer:
      "The duration depends on the property condition, the property type and the services chosen. After the coordinator knows the property and scope, they confirm the cleaning methods and an overall time estimate. There is no standard duration that applies to every job.",
  },
  {
    question: "Do you do end of tenancy cleaning to help me get my deposit back?",
    answer:
      "An end of tenancy clean leaves the property in good condition for the checkout inspection and improves the chance of getting the deposit back. Combine it with your move so one coordinator runs the movers and the cleaners and the handover stays on schedule.",
  },
  {
    question: "What cleaning services do you offer?",
    answer:
      "Pre and end of tenancy cleaning, spring and one-off cleaning, professional carpet steam cleaning, upholstery cleaning, regular domestic cleaning, after builders cleaning, and office, retail and commercial cleaning. All services are delivered by sister company Top Cleaners and cover the whole of London.",
  },
  {
    question: "How much does the cleaning cost?",
    answer:
      "Cleaning prices depend on the property size, the property condition and the services chosen. The move coordinator quotes a price once they know the full scope. Booking the move and the clean together gets a discounted rate. There is no published price table.",
  },
  {
    question: "Do you clean carpets and upholstery?",
    answer:
      "Yes, Top Cleaners offers professional carpet steam cleaning and upholstery cleaning. For a move, it is best to clean carpets and soft furniture before they are packed and before furniture is placed in the new home. Tell the coordinator and they include it in the scope.",
  },
  {
    question: "Do you cover the whole of London?",
    answer:
      "Yes. Top Cleaners covers all London boroughs for move-in, move-out, end of tenancy and all other cleaning services. The removals service also covers all London boroughs and the surrounding areas. One coordinator covers both the cleaning and the move for addresses across London.",
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
  "@id": `${SITE_URL}/#organization`,
};

const cleaningServiceSchema = {
  "@context": "https://schema.org",
  "@type": "Service",
  name: "Move In, Move Out and End of Tenancy Cleaning in London",
  serviceType: [
    "End of Tenancy Cleaning",
    "Move-Out Cleaning",
    "Move-In Cleaning",
    "After Builders Cleaning",
    "Carpet Steam Cleaning",
    "Upholstery Cleaning",
    "Regular Domestic Cleaning",
    "Office and Commercial Cleaning",
  ],
  areaServed: { "@type": "AdministrativeArea", name: "Greater London" },
  provider: { "@id": `${SITE_URL}/#organization` },
};

/* ── Page ───────────────────────────────────────────────────────────── */

export default async function CleaningServicesPage() {
  const { phones } = await getResolvedSettings();
  return (
    <>
      <JsonLd data={serviceLdFor("cleaning-services")} />
      <JsonLd data={faqPageSchema} />
      <JsonLd data={orgSchema} />
      <JsonLd data={cleaningServiceSchema} />
      <JsonLd
        data={breadcrumbLd([
          { label: "Home", href: "/" },
          { label: "Services", href: "/services" },
          { label: "Cleaning Services" },
        ])}
      />
      <CleaningServicesAnimations />
      <StickyMobileBar sentinelId="hero-intro" />

      {/* ── S1: Hero ─────────────────────────────────────────────────── */}
      <PageBanner
        title="Move In, Move Out and End of Tenancy Cleaning in London"
        subtitle="Cleaning delivered by sister company Top Cleaners, coordinated with your move."
        h1={serviceH1["cleaning-services"]}
        crumbs={[
          { label: "Home", href: "/" },
          { label: "Services", href: "/services" },
          { label: "Cleaning Services" },
        ]}
      />

      {/* ── S1 continued: two-column canonical ───────────────────────── */}
      <section id="hero-intro" className="bg-white py-12 md:py-16">
        <div className="mx-auto max-w-[88rem] px-4">
          <div className="grid gap-10 lg:grid-cols-[3fr_2fr] lg:items-start lg:gap-16">

            {/* Left: value prop + CTAs */}
            <div>
              <p className="hero-anim-sub max-w-2xl text-lg leading-relaxed text-brand-charcoal/90">
                Removals Nationwide and its sister company Top Cleaners deliver a joined-up moving and
                cleaning service across London. In 2026, one move coordinator runs the movers,
                the cleaners and the rubbish clearance together so the handover is clean, on
                time and free of the delays that come when you book a separate cleaner.
              </p>
              <p className="hero-anim-sub mt-4 max-w-2xl text-base leading-relaxed text-brand-charcoal/80">
                Thoroughly vetted, regularly trained and fully insured cleaning teams. All
                London covered. A discounted rate when the move and the clean are booked together.
              </p>

              <div className="hero-anim-ctas mt-6 flex flex-col gap-3 sm:flex-row sm:flex-wrap">
                <Button
                  href="/bookservice#quick-quote"
                  variant="red"
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
                  href={phones.london.href}
                  variant="outline"
                  size="lg"
                  className="w-full sm:w-auto"
                >
                  {phones.london.label}
                </Button>
              </div>

              <p className="hero-anim-trust mt-3 text-xs font-medium text-brand-charcoal/55">
                Free quote. Vetted and insured. All London covered.
              </p>

              <div className="hero-anim-trust mt-5 flex flex-wrap gap-2">
                {[
                  "Coordinated with your move",
                  "Vetted and insured",
                  "All London covered",
                  "Free quote",
                ].map((label) => (
                  <span
                    key={label}
                    className="inline-flex items-center gap-1.5 rounded-full bg-brand-grey px-3 py-1.5 text-xs font-semibold text-brand-navy"
                  >
                    <CheckIcon className="h-3.5 w-3.5 text-brand-red" strokeWidth={3} />
                    {label}
                  </span>
                ))}
              </div>
            </div>

            {/* Right: image + trusted-by card */}
            <div
              className="overflow-hidden rounded-2xl border border-black/10 shadow-sm"
              data-reveal
              data-delay="1"
            >
              <div className="relative aspect-[4/3] w-full">
                <Image
                  src="https://images.unsplash.com/photo-1581578731548-c64695cc6952?auto=format&fit=crop&w=2400&q=82"
                  alt="Top Cleaners move in, move out and end of tenancy cleaning in London"
                  fill
                  sizes="(max-width: 1024px) 100vw, 40vw"
                  className="object-cover"
                  priority
                />
              </div>
              <div className="bg-brand-grey p-6">
                <p className="mb-3 text-xs font-bold uppercase tracking-widest text-brand-navy">
                  Service highlights
                </p>
                <ul className="space-y-2">
                  {cleaningServiceStandards.map(({ name }) => (
                    <li key={name} className="flex items-center gap-2">
                      <CheckIcon className="h-4 w-4 shrink-0 text-brand-red" strokeWidth={3} />
                      <span className="text-sm text-brand-navy/85">{name}</span>
                    </li>
                  ))}
                </ul>
                <div className="mt-4 flex gap-4 border-t border-black/10 pt-4">
                  <Link
                    href="https://uk.trustpilot.com/review/removalsnationwide.uk"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="text-xs font-semibold text-brand-red underline underline-offset-2 hover:text-brand-navy"
                  >
                    Trustpilot reviews →
                  </Link>
                  <Link
                    href="/about-us"
                    className="text-xs font-semibold text-brand-red underline underline-offset-2 hover:text-brand-navy"
                  >
                    About us →
                  </Link>
                </div>
              </div>
            </div>

          </div>
        </div>
      </section>

      <CtaBand
        heading="Get a Cleaning Service Quote"
        buttonLabel="Quick Quote"
        buttonHref="/bookservice#quick-quote"
      />

      {/* ── S2: Cleaning That Is Coordinated With Your Move ──────────── */}
      <section className="bg-brand-grey py-20">
        <div className="mx-auto grid max-w-[88rem] grid-cols-1 items-center gap-12 px-4 lg:grid-cols-2 lg:gap-16">
          <div data-reveal>
            <SectionHeading
              align="left"
              eyebrow="The partnership"
              title="Cleaning That Is Coordinated With Your Move"
            />
            <div className="mt-8 space-y-4 text-base leading-relaxed text-brand-charcoal/85">
              <p>
                Removals Nationwide and sister company Top Cleaners work as one on move day. The
                removals team packs, loads and transports. The cleaning team follows on to
                clean the vacated property and prep the new one. Both are run by a single move
                coordinator who sequences the teams, handles any changes on the day, and keeps
                the job on schedule.
              </p>
              <p>
                Every cleaning team member is thoroughly vetted and undergoes regular training.
                The service is fully insured and covers all London boroughs. A free quote is
                provided by the coordinator after the property size and scope are known.
              </p>
              <p>
                No pure-cleaning company runs this service. You get the cleaners and the movers
                from one call, one coordinator and one invoice.
              </p>
            </div>
          </div>
          <div data-reveal data-delay="1" className="relative">
            <div className="relative aspect-[4/3] overflow-hidden rounded-2xl shadow-xl">
              <Image
                src="https://images.unsplash.com/photo-1527515637462-cff94eecc1ac?auto=format&fit=crop&w=2400&q=82"
                alt="Removals Nationwide and Top Cleaners working together on a London move"
                fill
                sizes="(max-width: 1024px) 100vw, 50vw"
                className="object-cover"
                loading="lazy"
              />
            </div>
            <span
              aria-hidden="true"
              className="absolute -bottom-5 -right-5 -z-10 hidden h-36 w-36 rounded-2xl bg-brand-red/15 lg:block"
            />
          </div>
        </div>
      </section>

      {/* ── S3: Our Cleaning Services ────────────────────────────────── */}
      <section className="bg-brand-sand py-20">
        <div className="mx-auto max-w-[88rem] px-4">
          <SectionHeading eyebrow="What we offer" title="Our Cleaning Services" />
          <p className="mx-auto mt-4 max-w-2xl text-center text-base text-brand-charcoal/70">
            All services delivered by sister company Top Cleaners, vetted, trained and fully insured.
            All London covered.
          </p>
          <div className="mt-10 grid gap-5 sm:grid-cols-2 lg:grid-cols-3">
            {services.map((svc, i) => (
              <div
                key={svc.title}
                data-reveal
                data-delay={String((i % 3) + 1)}
                className={`flex flex-col rounded-2xl p-6 shadow-sm transition-all duration-200 hover:-translate-y-1 hover:shadow-md motion-reduce:transition-none motion-reduce:hover:translate-y-0 ${
                  svc.highlight
                    ? "border-2 border-brand-red bg-white"
                    : "border border-black/5 bg-white"
                }`}
              >
                {svc.highlight && (
                  <span className="mb-3 inline-flex w-fit rounded-full bg-brand-red px-3 py-1 text-xs font-bold uppercase tracking-wide text-white">
                    Move essential
                  </span>
                )}
                <h3 className="text-base font-bold text-brand-navy">{svc.title}</h3>
                <p className="mt-2 flex-1 text-sm leading-relaxed text-brand-charcoal/80">
                  {svc.desc}
                </p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* ── S4: End of Tenancy and Move-Out Cleaning ─────────────────── */}
      <section className="bg-white py-20">
        <div className="mx-auto max-w-[88rem] px-4">
          <SectionHeading
            eyebrow="Highest-intent service"
            title="End of Tenancy and Move-Out Cleaning"
          />
          <div className="mt-10 rounded-2xl border-2 border-brand-red bg-brand-sand p-8 shadow-md" data-reveal>
            <div className="space-y-4 text-base leading-relaxed text-brand-charcoal/85">
              <p>
                A thorough end of tenancy clean leaves the property in good condition for the
                landlord or letting-agent checkout. It covers every room, every surface and every
                appliance and improves the chance of getting the deposit back by presenting the
                property in the best possible state.
              </p>
              <p>
                Combine the clean with your move and one coordinator runs both. The removals team
                finishes loading, then the cleaning team starts. The property is handed back clean
                on the same day, on schedule, with no gap between the van leaving and the cleaners
                arriving.
              </p>
              <p className="text-sm text-brand-charcoal/65">
                No re-clean guarantee is offered. An end of tenancy clean improves the condition
                of the property for the checkout. Whether a deposit is returned depends on the
                landlord and the tenancy agreement.
              </p>
            </div>
            <div className="mt-6">
              <Button href="/bookservice#quick-quote" variant="red" size="md">
                Quick Quote
              </Button>
            </div>
          </div>
        </div>
      </section>

      {/* ── S5: Move-In Cleaning ─────────────────────────────────────── */}
      <section className="bg-brand-grey py-20">
        <div className="mx-auto max-w-[88rem] px-4">
          <SectionHeading
            eyebrow="At the new address"
            title="Move-In Cleaning for Your New Home"
          />
          <div className="mt-10 grid gap-8 lg:grid-cols-2">
            <div data-reveal className="space-y-4 text-base leading-relaxed text-brand-charcoal/85">
              <p>
                A move-in clean preps the new property before furniture arrives. Even a recently
                decorated or vacated property holds dust, grime from the previous occupants and
                residue from the handover. Starting with a clean property means your furniture,
                bedding and kitchen items go into a fresh space.
              </p>
              <p>
                Top Cleaners books the move-in clean to land before the removal van, so the
                property is ready when the first item comes through the door. Tell the coordinator
                your moving date and they slot the clean into the schedule at the right point.
              </p>
            </div>
            <div data-reveal data-delay="1">
              <ul className="space-y-4">
                {[
                  {
                    title: "Before the furniture arrives",
                    desc: "Clean the property while it is empty. Surfaces, floors, bathrooms and kitchen are far easier to clean before anything is in the way.",
                  },
                  {
                    title: "Coordinated with the move date",
                    desc: "The coordinator schedules the clean to land before the van. No overlap, no delay, no waiting around.",
                  },
                  {
                    title: "Includes kitchen and bathroom",
                    desc: "Worktops, appliances, sink, toilet, bath and shower are all covered. The property is sanitised and ready for use.",
                  },
                  {
                    title: "Carpet and upholstery available",
                    desc: "Add carpet steam cleaning or upholstery cleaning to the move-in scope. Tell the coordinator and they include it.",
                  },
                ].map(({ title, desc }) => (
                  <li key={title} className="flex gap-4">
                    <CheckIcon
                      className="mt-1 h-5 w-5 shrink-0 text-brand-red"
                      strokeWidth={2.5}
                    />
                    <div>
                      <p className="text-sm font-bold text-brand-navy">{title}</p>
                      <p className="mt-0.5 text-sm text-brand-charcoal/75">{desc}</p>
                    </div>
                  </li>
                ))}
              </ul>
            </div>
          </div>
        </div>
      </section>

      {/* ── S6: After Builders Cleaning ──────────────────────────────── */}
      <section className="bg-white py-20">
        <div className="mx-auto grid max-w-[88rem] grid-cols-1 items-center gap-12 px-4 lg:grid-cols-2 lg:gap-16">
          <div data-reveal data-delay="1" className="relative order-2 lg:order-1">
            <div className="relative aspect-[4/3] overflow-hidden rounded-2xl shadow-xl">
              <Image
                src="https://images.unsplash.com/photo-1501183638710-841dd1904471?auto=format&fit=crop&w=2400&q=82"
                alt="Top Cleaners after builders cleaning for a renovated London property"
                fill
                sizes="(max-width: 1024px) 100vw, 50vw"
                className="object-cover"
                loading="lazy"
              />
            </div>
            <span
              aria-hidden="true"
              className="absolute -bottom-5 -left-5 -z-10 hidden h-36 w-36 rounded-2xl bg-brand-red/15 lg:block"
            />
          </div>
          <div data-reveal className="order-1 lg:order-2">
            <SectionHeading
              align="left"
              eyebrow="Post-renovation"
              title="After Builders Cleaning"
            />
            <div className="mt-8 space-y-4 text-base leading-relaxed text-brand-charcoal/85">
              <p>
                Moving into a renovated property is the right time for an after builders clean.
                Construction leaves fine dust in every corner, plaster residue on hard surfaces,
                paint splashes on floors and sealant smears in bathrooms. Standard domestic
                cleaning does not remove these. Specialist equipment and methods are required.
              </p>
              <p>
                Top Cleaners uses the right tools for post-construction residue. The clean
                happens before furniture goes in, so every surface is reached and nothing is
                moved around twice. Coordinate it with your move-in date and the coordinator
                slots it into the same booking.
              </p>
              <p>
                After builders cleaning is also used after internal refurbishments, kitchen
                replacements and bathroom fits, where construction debris is present but the
                property is otherwise occupied.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* ── S7: What a Move Clean Covers ─────────────────────────────── */}
      <section className="bg-brand-sand py-20">
        <div className="mx-auto max-w-[88rem] px-4">
          <SectionHeading eyebrow="Scope and detail" title="What a Move Clean Covers" />
          <p className="mx-auto mt-6 max-w-3xl text-center text-base leading-relaxed text-brand-charcoal/85">
            A standard move clean covers the rooms below as a baseline. The exact checklist is
            confirmed with the coordinator for your property. Carpet steam cleaning and upholstery
            cleaning are available as additions.
          </p>
          <div className="mt-10 grid gap-6 sm:grid-cols-2 lg:grid-cols-4" data-reveal>
            {roomChecklist.map((col, i) => (
              <div
                key={col.room}
                data-delay={String(i + 1)}
                className="rounded-2xl border border-black/8 bg-white p-6 shadow-sm"
              >
                <h3 className="mb-4 border-b border-brand-red pb-2 text-sm font-bold text-brand-navy">
                  {col.room}
                </h3>
                <ul className="space-y-2">
                  {col.items.map((item) => (
                    <li key={item} className="flex items-start gap-2 text-sm text-brand-charcoal/80">
                      <CheckIcon
                        className="mt-0.5 h-4 w-4 shrink-0 text-brand-red"
                        strokeWidth={2.5}
                      />
                      {item}
                    </li>
                  ))}
                </ul>
              </div>
            ))}
          </div>
          <p className="mx-auto mt-8 max-w-2xl text-center text-xs text-brand-charcoal/55">
            Scope is confirmed with the coordinator for each property. Additional services such
            as carpet steam cleaning and upholstery cleaning are booked at the same time.
          </p>
        </div>
      </section>

      {/* ── S8: Ways to Combine Removals and Cleaning ────────────────── */}
      <section className="bg-brand-navy py-20">
        <div className="mx-auto max-w-[88rem] px-4">
          <div data-reveal className="text-center">
            <span className="inline-block rounded-full bg-brand-red/20 px-4 py-1 text-xs font-bold uppercase tracking-widest text-brand-red">
              Better together
            </span>
            <h2 className="mt-4 font-heading text-3xl font-bold text-white sm:text-4xl">
              Ways to Combine Removals and Cleaning
            </h2>
            <p className="mx-auto mt-4 max-w-2xl text-base text-white/75">
              One coordinator runs all of it. A discounted rate applies when the move and the
              clean are booked together.
            </p>
          </div>
          <div className="mt-10 grid gap-5 sm:grid-cols-2 lg:grid-cols-4">
            {combineSteps.map(({ step, title, detail, href, linkLabel }) => (
              <div
                key={title}
                data-reveal
                data-delay={String(step)}
                className="flex flex-col rounded-2xl bg-white/8 p-6 ring-1 ring-white/10 transition-all duration-200 hover:bg-white/12 motion-reduce:transition-none"
              >
                <span className="mb-3 text-xs font-bold uppercase tracking-widest text-brand-red">
                  Step {step}
                </span>
                <p className="text-sm font-bold leading-snug text-white">{title}</p>
                <p className="mt-2 flex-1 text-sm leading-relaxed text-white/80">{detail}</p>
                {href && linkLabel && (
                  <Link
                    href={href}
                    className="mt-4 text-xs font-semibold text-brand-red transition hover:text-white"
                  >
                    {linkLabel} →
                  </Link>
                )}
              </div>
            ))}
          </div>
          <div className="mt-10 flex flex-wrap justify-center gap-3" data-reveal>
            {[
              { label: "Man and van", href: "/man-and-van-london" },
              { label: "House removals", href: "/house-removals" },
              { label: "Office removals", href: "/office-removals" },
              { label: "Rubbish disposal", href: "/rubbish-disposal" },
              { label: "Packing service", href: "/packing-service" },
              { label: "Secure storage", href: "/storage" },
            ].map((s) => (
              <Link
                key={s.label}
                href={s.href}
                className="rounded-full border border-white/30 px-4 py-2 text-sm font-semibold text-white transition hover:border-brand-red hover:text-brand-red"
              >
                {s.label}
              </Link>
            ))}
          </div>
          <div className="mt-8 flex flex-col gap-3 sm:flex-row sm:justify-center">
            <Button
              href="/bookservice#quick-quote"
              variant="red"
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
          </div>
        </div>
      </section>

      {/* ── S9: How the Coordinator Works ────────────────────────────── */}
      <section className="bg-white py-20">
        <div className="mx-auto max-w-[88rem] px-4">
          <SectionHeading eyebrow="Your single contact" title="How the Coordinator Works" />
          <p className="mx-auto mt-6 max-w-3xl text-center text-base leading-relaxed text-brand-charcoal/85">
            When you book the move and the clean together, one coordinator manages everything.
            No separate contacts, no crossed wires, no teams arriving out of order.
          </p>
          <div className="mt-10 grid gap-5 sm:grid-cols-2" data-reveal>
            {coordinatorFacts.map((fact, i) => (
              <div
                key={fact.title}
                data-delay={String((i % 2) + 1)}
                className="flex flex-col rounded-2xl border border-black/5 bg-brand-grey p-7 shadow-sm transition-all duration-200 hover:-translate-y-1 hover:shadow-md motion-reduce:transition-none motion-reduce:hover:translate-y-0"
              >
                <span className="mb-3 flex h-9 w-9 items-center justify-center rounded-full bg-brand-red text-sm font-bold text-white">
                  {i + 1}
                </span>
                <h3 className="text-base font-bold text-brand-navy">{fact.title}</h3>
                <p className="mt-2 flex-1 text-sm leading-relaxed text-brand-charcoal/85">
                  {fact.body}
                </p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* ── S10: Cleaning Tips ───────────────────────────────────────── */}
      <section className="bg-brand-sand py-20">
        <div className="mx-auto max-w-[88rem] px-4">
          <SectionHeading
            eyebrow="Helpful advice"
            title="Cleaning Tips for Home and Office Removals"
          />
          <div className="mt-10 grid gap-5 sm:grid-cols-3" data-reveal>
            {tips.map((tip, i) => (
              <div
                key={tip.title}
                data-delay={String(i + 1)}
                className="flex flex-col rounded-2xl border border-black/5 bg-white p-7 shadow-sm transition-all duration-200 hover:-translate-y-1 hover:shadow-md motion-reduce:transition-none motion-reduce:hover:translate-y-0"
              >
                <span className="mb-3 flex h-9 w-9 items-center justify-center rounded-full bg-brand-red text-sm font-bold text-white">
                  {i + 1}
                </span>
                <h3 className="text-base font-bold text-brand-navy">{tip.title}</h3>
                <p className="mt-2 flex-1 text-sm leading-relaxed text-brand-charcoal/85">
                  {tip.detail}
                </p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* ── Reviews ──────────────────────────────────────────────────── */}
      <section className="bg-brand-grey py-16">
        <div className="mx-auto max-w-[88rem] px-4 text-center" data-reveal>
          <div
            className="flex justify-center gap-1 text-brand-red"
            aria-label="5 out of 5 stars"
          >
            {Array.from({ length: 5 }).map((_, i) => (
              <StarIcon key={i} className="h-7 w-7" />
            ))}
          </div>
          <p className="mt-3 text-xl font-bold text-brand-navy">Rated Excellent on Trustpilot</p>
          <p className="mt-2 text-base text-brand-charcoal/70">
            Read genuine reviews from customers who have used Removals Nationwide and Top Cleaners for
            moves and cleaning services across London.
          </p>
          <Link
            href="https://uk.trustpilot.com/review/removalsnationwide.uk"
            target="_blank"
            rel="noopener noreferrer"
            className="mt-6 inline-flex min-h-[44px] items-center rounded-xl bg-brand-red px-6 py-3 text-sm font-bold text-white transition hover:bg-brand-navy hover:text-white focus-visible:outline focus-visible:outline-2 focus-visible:outline-brand-red"
          >
            View Reviews on Trustpilot
          </Link>
        </div>
      </section>

      {/* ── S11: FAQs ────────────────────────────────────────────────── */}
      <section className="bg-white py-20">
        <div className="mx-auto max-w-[88rem] px-4">
          <div data-reveal>
            <SectionHeading eyebrow="Good to know" title="Cleaning Services FAQs" />
          </div>
          <Faq items={faqs} className="mt-10" />
        </div>
      </section>

      {/* ── CTA ──────────────────────────────────────────────────────── */}
      <section className="bg-brand-navy py-20">
        <div className="mx-auto max-w-[88rem] px-4 text-center" data-reveal>
          <h2 className="font-heading text-3xl font-bold text-white sm:text-4xl">
            Book Your Move and Clean in London Today
          </h2>
          <p className="mx-auto mt-4 max-w-xl text-base text-white/70">
            One coordinator runs the movers, the cleaners and the rubbish clearance together.
            Vetted, trained and fully insured. Discounted when booked together.
          </p>
          <div className="mt-8 flex flex-col gap-3 sm:flex-row sm:justify-center">
            <Button
              href="/bookservice#quick-quote"
              variant="red"
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
          </div>
          <div className="mt-8 flex flex-col items-center gap-2 sm:flex-row sm:justify-center sm:gap-8">
            <a
              href={phones.london.href}
              className="flex items-center gap-2 text-base font-bold text-white transition hover:text-brand-red"
            >
              <span aria-hidden="true" className="text-brand-red">&#9742;</span>
              {phones.london.label}
            </a>
            <a
              href={phones.freephone.href}
              className="flex items-center gap-2 text-base font-bold text-white transition hover:text-brand-red"
            >
              <span aria-hidden="true" className="text-brand-red">&#9742;</span>
              {phones.freephone.label} (freephone)
            </a>
          </div>
          <p className="mt-6 text-sm text-white/50">
            experienced and fully insured &nbsp;&middot;&nbsp; Fully insured &nbsp;&middot;&nbsp;
            Registered in England No. 6874216
          </p>
          <p className="mt-2 text-xs text-white/40">
            Unit C1A Purfleet Industrial Park, Kerry Avenue, Purfleet, RM15 4YA
          </p>
        </div>
      </section>
    </>
  );
}
