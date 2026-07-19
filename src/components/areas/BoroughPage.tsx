import Image from "next/image";
import Link from "next/link";
import JsonLd from "@/components/seo/JsonLd";
import PageBanner from "@/components/layout/PageBanner";
import SectionHeading from "@/components/ui/SectionHeading";
import Button from "@/components/ui/Button";
import StickyMobileBar from "@/components/services/StickyMobileBar";
import PricingTable, { type PricingRow } from "@/components/services/PricingTable";
import Faq from "@/components/services/Faq";
import Accreditations from "@/components/home/Accreditations";
import MidPageCTA from "@/components/areas/MidPageCTA";
import CtaBand from "@/components/home/CtaBand";
import type { ComponentType } from "react";
import {
  CheckIcon,
  VanIcon,
  HomeIcon,
  BuildingIcon,
  BoxIcon,
  CrateIcon,
  TrashIcon,
  PackageIcon,
  GlobeIcon,
  StarIcon,
  ArrowRight,
} from "@/components/ui/icons";
import { SITE_URL, withTrailingSlash } from "@/lib/seo";
import { boroughs, type Borough } from "@/lib/boroughs";

/* Confirmed company data, identical for every borough. */
const ACCREDITATIONS = [
  "British Association of Removers (BAR)",
  "National Guild of Removers and Storers (NGRS)",
  "International Association of Movers (IAM)",
  "The Furniture Ombudsman",
  "QSS-DW Approved Mover",
  "Checkatrade",
];

const PRICE_COLUMNS = ["Crew", "Per hour", "Half day, up to 4 hours", "Full day, up to 8 hours"];
const PRICE_ROWS: PricingRow[] = [
  { label: "1 mover and van", values: ["£55", "£210", "£420"] },
  { label: "2 movers and van", values: ["from £70", "from £260", "from £500"] },
  { label: "3 movers and van", values: ["from £90", "from £330", "from £620"] },
];

type IconType = ComponentType<{ className?: string; strokeWidth?: number }>;

const SERVICES: { label: string; href: string; text: string; Icon: IconType }[] = [
  { label: "Man and Van", href: "/man-and-van-london", text: "Single items, small and up to two-bedroom moves, same day and 7 days.", Icon: VanIcon },
  { label: "House Removals", href: "/house-removals", text: "Studio to large family homes, packed, moved and unloaded end to end.", Icon: HomeIcon },
  { label: "Office Removals", href: "/office-removals", text: "Minimal downtime, with out-of-hours and weekend options.", Icon: BuildingIcon },
  { label: "Packing Service", href: "/packing-service", text: "Full or partial packing, including fragile and export packing.", Icon: BoxIcon },
  { label: "Storage", href: "/storage", text: "Managed, containerised storage, we collect and seal.", Icon: CrateIcon },
  { label: "Rubbish Disposal", href: "/rubbish-disposal", text: "Licensed waste removal and clearance, recycled where possible.", Icon: TrashIcon },
  { label: "Single Item", href: "/single-item", text: "Single item and marketplace delivery, handled with care.", Icon: PackageIcon },
  { label: "International", href: "/international-removals", text: "Door to door across Europe and worldwide, our own fleet.", Icon: GlobeIcon },
];

/** Pick a relevant icon for a local-knowledge card from its heading. */
function knowIcon(label: string): IconType {
  const l = label.toLowerCase();
  if (/propert|type/.test(l)) return HomeIcon;
  if (/emission/.test(l)) return GlobeIcon;
  if (/event|match|championship|rugby|stadium|wimbledon/.test(l)) return StarIcon;
  if (/park|permit|driveway|suspension/.test(l)) return VanIcon;
  if (/road|access|centre|gyratory|riverside|wharf|lift|tower|building|estate|concierge|congestion/.test(l))
    return BuildingIcon;
  return CheckIcon;
}

const PHONE_HREF = "tel:+442072052525";
const TRUSTPILOT = "https://uk.trustpilot.com/review/removalsnationwide.uk";

function boroughSchema(b: Borough) {
  return {
    "@context": "https://schema.org",
    "@graph": [
      {
        "@type": "Service",
        serviceType: "Removals and man and van",
        provider: { "@id": `${SITE_URL}/#organization` },
        areaServed: {
          "@type": "AdministrativeArea",
          name: b.areaServedName ?? `London Borough of ${b.name}`,
          containsPlace: b.postcodes ?? [],
        },
        name: b.h1,
        url: `${SITE_URL}${withTrailingSlash(`/areas/${b.slug}`)}`,
        offers: {
          "@type": "Offer",
          priceSpecification: {
            "@type": "UnitPriceSpecification",
            price: "55.00",
            priceCurrency: "GBP",
            unitText: "per hour",
            valueAddedTaxIncluded: false,
          },
        },
      },
      {
        "@type": "BreadcrumbList",
        itemListElement: [
          { "@type": "ListItem", position: 1, name: "Home", item: `${SITE_URL}/` },
          { "@type": "ListItem", position: 2, name: "Areas", item: `${SITE_URL}/areas/` },
          { "@type": "ListItem", position: 3, name: b.name, item: `${SITE_URL}${withTrailingSlash(`/areas/${b.slug}`)}` },
        ],
      },
      // FAQPage is emitted by the Faq component (parsing/AEO only, no rich-result
      // expectation). HowTo is intentionally omitted.
    ],
  };
}

export default function BoroughPage({ borough: b }: { borough: Borough }) {
  return (
    <>
      <JsonLd data={boroughSchema(b)} />
      <StickyMobileBar sentinelId="borough-hero" />

      <PageBanner
        title={b.h1}
        subtitle="Man and van from £55/hr plus VAT · 7 days a week · Fully insured and accredited"
        crumbs={[
          { label: "Home", href: "/" },
          { label: "Areas", href: "/areas" },
          { label: b.name },
        ]}
      />

      {/* Hero two-column */}
      <section id="borough-hero" className="bg-white pt-12 pb-0">
        <div className="mx-auto grid max-w-[88rem] grid-cols-1 items-center gap-10 px-4 lg:grid-cols-[3fr_2fr] lg:gap-16 lg:pb-16">
          <div>
            <p className="text-xl font-bold leading-snug text-brand-navy sm:text-2xl">{b.introLine}</p>
            <p className="mt-3 text-base leading-relaxed text-brand-charcoal/80">{b.valueLine}</p>

            {/* Postcode coverage chips (concrete local signal) */}
            {(b.postcodes ?? []).length > 0 && (
              <div className="mt-5">
                <p className="text-xs font-bold uppercase tracking-widest text-brand-charcoal/45">
                  Covering
                </p>
                <div className="mt-2 flex flex-wrap gap-1.5">
                  {(b.postcodes ?? []).map((pc) => (
                    <span
                      key={pc}
                      className="inline-flex items-center rounded-md bg-brand-navy/5 px-2.5 py-1 text-xs font-bold text-brand-navy ring-1 ring-inset ring-brand-navy/10"
                    >
                      {pc}
                    </span>
                  ))}
                </div>
              </div>
            )}

            <div className="mt-5 inline-flex items-center gap-3 rounded-xl border border-brand-orange/20 bg-brand-orange/5 px-5 py-3">
              <span className="text-2xl font-black text-brand-orange">From £55/hr</span>
              <span aria-hidden="true" className="h-5 w-px bg-brand-charcoal/20" />
              <span className="text-sm font-medium text-brand-charcoal/70">man and van, plus VAT</span>
            </div>

            <div className="mt-6 flex flex-col gap-3 sm:flex-row sm:flex-wrap">
              <Button href="/bookservice#quick-quote" variant="orange" size="lg" className="w-full sm:w-auto">
                Quick Quote
              </Button>
              <Button href="/bookservice" variant="navy" size="lg" className="w-full sm:w-auto">
                Book a Service
              </Button>
              <Button href={PHONE_HREF} variant="outline" size="lg" className="w-full sm:w-auto">
                Call 020 7205 2525
              </Button>
            </div>

            <p className="mt-3 text-xs font-medium text-brand-charcoal/55">
              Free quote, no obligation, same-day moves subject to availability.
            </p>

            <div className="mt-5 flex flex-wrap gap-2">
              {["Fully insured", "7 days a week", "Hundreds of Trustpilot reviews"].map((pill) => (
                <span
                  key={pill}
                  className="inline-flex items-center gap-1.5 rounded-full bg-brand-grey px-3 py-1.5 text-xs font-semibold text-brand-navy"
                >
                  <CheckIcon className="h-3.5 w-3.5 text-brand-orange" strokeWidth={3} />
                  {pill}
                </span>
              ))}
            </div>
          </div>

          {/* Right: image + trusted-by card */}
          <div className="overflow-hidden rounded-2xl border border-black/10 shadow-sm">
            <div className="relative aspect-[4/3] w-full">
              <Image
                src={b.heroImage}
                alt={b.heroImageAlt}
                fill
                priority
                sizes="(max-width: 1024px) 100vw, 40vw"
                className="object-cover"
              />
            </div>
            <div className="bg-brand-grey p-6">
              <p className="mb-3 text-xs font-bold uppercase tracking-widest text-brand-navy">
                Trusted and certified by
              </p>
              <ul className="space-y-2">
                {ACCREDITATIONS.map((name) => (
                  <li key={name} className="flex items-center gap-2">
                    <CheckIcon className="h-4 w-4 shrink-0 text-brand-orange" strokeWidth={3} />
                    <span className="text-sm text-brand-navy/85">{name}</span>
                  </li>
                ))}
              </ul>
              <div className="mt-4 flex gap-4 border-t border-black/10 pt-4">
                <Link
                  href={TRUSTPILOT}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="text-xs font-semibold text-brand-orange underline underline-offset-2 hover:text-brand-navy"
                >
                  Trustpilot reviews
                </Link>
                <Link
                  href="/certificates"
                  className="text-xs font-semibold text-brand-orange underline underline-offset-2 hover:text-brand-navy"
                >
                  View certificates
                </Link>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Post-hero CTA band (matches the service pages) */}
      <CtaBand
        heading={`Ready to Move in ${b.name}?`}
        subtext="Accredited, insured, 7 days a week. Get a fast, no-obligation quote."
        buttonLabel="Get a Free Quote"
        buttonHref="/bookservice#quick-quote"
      />

      {/* Local team */}
      <section className="bg-white py-16">
        <div className="mx-auto max-w-3xl px-4">
          <SectionHeading
            align="left"
            eyebrow="Local team"
            title={`Your Local Removals and Man and Van Team in ${b.name}`}
          />
          <div className="mt-6 space-y-4 text-base leading-relaxed text-brand-charcoal/85">
            {(b.localBody ?? []).map((p, i) => (
              <p key={i}>{p}</p>
            ))}
          </div>
        </div>
      </section>

      {/* Coverage */}
      <section className="bg-brand-sand py-16">
        <div className="mx-auto max-w-3xl px-4">
          <SectionHeading
            align="left"
            eyebrow="Coverage"
            title={`Areas and Postcodes We Cover in ${b.name}`}
          />
          <p className="mt-6 text-base leading-relaxed text-brand-charcoal/85">{b.coverageIntro}</p>
          {(b.postcodes ?? []).length > 0 && (
            <div className="mt-5 flex flex-wrap gap-2">
              {(b.postcodes ?? []).map((pc) => (
                <span
                  key={pc}
                  className="inline-flex items-center rounded-lg bg-brand-navy px-3 py-1.5 text-sm font-bold text-white"
                >
                  {pc}
                </span>
              ))}
            </div>
          )}
          <div className="mt-5 rounded-2xl border border-black/10 bg-white p-6 shadow-sm">
            <p className="text-xs font-bold uppercase tracking-widest text-brand-orange">
              Neighbourhoods we cover
            </p>
            <p className="mt-2 text-base font-medium leading-relaxed text-brand-navy">
              {b.neighbourhoods}
            </p>
          </div>
          <p className="mt-4 text-base leading-relaxed text-brand-charcoal/85">{b.coverageOutro}</p>
        </div>
      </section>

      {/* What we know */}
      <section className="bg-white py-16">
        <div className="mx-auto max-w-[88rem] px-4">
          <div className="mx-auto max-w-3xl">
            <SectionHeading
              align="left"
              eyebrow="Local knowledge"
              title={`Moving in ${b.name}, What We Know`}
            />
            <p className="mt-6 text-base leading-relaxed text-brand-charcoal/85">{b.knowIntro}</p>
          </div>
          <div className="mt-10 grid gap-5 md:grid-cols-2">
            {(b.knowBlocks ?? []).map((blk) => {
              const Icon = knowIcon(blk.label);
              return (
                <div
                  key={blk.label}
                  className="group flex gap-4 rounded-2xl border border-black/8 bg-white p-6 shadow-sm transition-all duration-200 hover:-translate-y-1 hover:border-brand-orange/30 hover:shadow-md motion-reduce:transition-none motion-reduce:hover:translate-y-0"
                >
                  <span className="flex h-11 w-11 shrink-0 items-center justify-center rounded-xl bg-brand-orange/10 text-brand-orange">
                    <Icon className="h-5 w-5" strokeWidth={2.5} />
                  </span>
                  <div>
                    <h3 className="text-base font-bold text-brand-navy">{blk.label}</h3>
                    <p className="mt-1.5 text-sm leading-relaxed text-brand-charcoal/80">{blk.body}</p>
                  </div>
                </div>
              );
            })}
          </div>
        </div>
      </section>

      {/* Prices */}
      <section className="bg-brand-grey py-16">
        <div className="mx-auto max-w-4xl px-4">
          <SectionHeading eyebrow="Transparent pricing" title={`Man and Van Prices in ${b.name}`} />
          <p className="mx-auto mt-4 max-w-2xl text-center text-base leading-relaxed text-brand-charcoal/80">
            Our man and van rates are published in full, charged by the hour with a two-hour minimum,
            all plus VAT at 20 percent.
          </p>
          <PricingTable columns={PRICE_COLUMNS} rows={PRICE_ROWS} className="mx-auto mt-10" />
          <p className="mx-auto mt-6 max-w-2xl text-center text-sm leading-relaxed text-brand-charcoal/70">
            The price includes loading, transport, unloading, parking fees and tolls, and
            goods-in-transit insurance. For a full house or office move we give a fixed price after a
            free survey. Tell us what you are moving and we will recommend the right crew and van size.
          </p>
        </div>
      </section>

      {/* Services */}
      <section className="bg-white py-16">
        <div className="mx-auto max-w-[88rem] px-4">
          <SectionHeading eyebrow="One accredited company" title={`Our ${b.name} Services`} />
          <p className="mx-auto mt-4 max-w-2xl text-center text-base leading-relaxed text-brand-charcoal/75">
            One accredited team for the whole move, from a single item to a full house or office
            relocation.
          </p>
          <div className="mt-10 grid gap-5 sm:grid-cols-2 lg:grid-cols-4">
            {SERVICES.map((s) => {
              const Icon = s.Icon;
              return (
                <Link
                  key={s.href}
                  href={s.href}
                  className="group flex h-full flex-col rounded-2xl border border-black/8 bg-white p-6 shadow-sm transition-all duration-200 hover:-translate-y-1 hover:border-brand-orange/30 hover:shadow-md motion-reduce:transition-none motion-reduce:hover:translate-y-0"
                >
                  <span className="flex h-12 w-12 items-center justify-center rounded-xl bg-brand-navy text-white transition-colors group-hover:bg-brand-orange">
                    <Icon className="h-6 w-6" strokeWidth={2} />
                  </span>
                  <h3 className="mt-4 text-base font-bold text-brand-navy">{s.label}</h3>
                  <p className="mt-1.5 flex-1 text-sm leading-relaxed text-brand-charcoal/75">{s.text}</p>
                  <span className="mt-4 inline-flex items-center gap-1 text-sm font-semibold text-brand-orange">
                    Learn more
                    <ArrowRight className="h-4 w-4 transition-transform group-hover:translate-x-1" />
                  </span>
                </Link>
              );
            })}
          </div>
        </div>
      </section>

      {/* Mid-page CTA (bold moment) */}
      <MidPageCTA borough={b.name} />

      {/* Accredited, insured, reviewed */}
      <section className="bg-brand-sand py-16">
        <div className="mx-auto max-w-3xl px-4 text-center">
          <SectionHeading eyebrow="Trust" title="Accredited, Insured and Reviewed" />
          <p className="mt-6 text-base leading-relaxed text-brand-charcoal/85">
            Removals Nationwide is a fully accredited mover. We are members of the British Association of
            Removers and the National Guild of Removers and Storers, and we hold International
            Association of Movers, The Furniture Ombudsman, QSS-DW and Checkatrade accreditation.
            Every move includes goods-in-transit insurance in the price, and all of our crews are
            vetted and background-checked.
          </p>
          <p className="mt-4 text-base leading-relaxed text-brand-charcoal/85">
            We have hundreds of independent reviews on Trustpilot from customers across London and
            beyond, with particular praise for our communication and the care our crews take. Read
            them on our live{" "}
            <a
              href={TRUSTPILOT}
              target="_blank"
              rel="noopener noreferrer"
              className="font-semibold text-brand-orange underline underline-offset-2 hover:text-brand-navy"
            >
              Trustpilot profile
            </a>
            .
          </p>
          {/* TrustBox mount point: add the official Trustpilot embed here once the
              business unit id is available, so the live rating and review count
              display and update automatically. No reviews are fabricated. */}
          <div id="trustpilot-trustbox" className="mt-6" />
        </div>
      </section>

      {/* How it works */}
      <section className="bg-white py-16">
        <div className="mx-auto max-w-3xl px-4">
          <SectionHeading align="left" eyebrow="Step by step" title={`How Your ${b.name} Move Works`} />
          <ol className="mt-8 space-y-5">
            {[
              `Get a quote. Send your details for a free quote, or book a free survey for a larger move. We confirm the price and the plan.`,
              `We plan the access. For ${b.name} we check parking and arrange a suspended bay where needed, and we plan the loading point around the local roads and your building's rules.`,
              `We pack and protect. Optional full or partial packing, with proper protection for period staircases and shared entrances.`,
              `We move you. Your accountable crew loads, transports and unloads, insured throughout, on your schedule.`,
              `We finish the job. Optional clearance of anything left behind, under our licensed waste carrier registration.`,
            ].map((step, i) => (
              <li key={i} className="flex items-start gap-4">
                <span className="flex h-9 w-9 shrink-0 items-center justify-center rounded-full bg-brand-orange font-heading text-sm font-bold text-white">
                  {i + 1}
                </span>
                <p className="text-base leading-relaxed text-brand-charcoal/85">{step}</p>
              </li>
            ))}
          </ol>
        </div>
      </section>

      {/* Nearby areas */}
      <section className="bg-brand-sand py-16">
        <div className="mx-auto max-w-3xl px-4">
          <SectionHeading align="left" eyebrow="Nearby" title="Nearby Areas We Cover" />
          <p className="mt-6 text-base leading-relaxed text-brand-charcoal/85">
            We also serve the boroughs that border {b.name}, including{" "}
            {(b.nearby ?? []).map((n, i) => {
              const slug = n.href.replace("/areas/", "");
              const built = Boolean(boroughs[slug]);
              return (
                <span key={n.href}>
                  {built ? (
                    <Link href={n.href} className="font-semibold text-brand-navy underline underline-offset-2 hover:text-brand-orange">
                      {n.label}
                    </Link>
                  ) : (
                    <span className="font-medium text-brand-navy">{n.label}</span>
                  )}
                  {i < b.nearby.length - 2 ? ", " : i === b.nearby.length - 2 ? " and " : ""}
                </span>
              );
            })}
            . View every area on our{" "}
            <Link href="/areas" className="font-semibold text-brand-navy underline underline-offset-2 hover:text-brand-orange">
              coverage hub
            </Link>
            .
          </p>
        </div>
      </section>

      {/* Quote band (solid navy, readability first) */}
      <section className="bg-brand-navy py-16">
        <div className="mx-auto grid max-w-[88rem] gap-10 px-4 lg:grid-cols-2 lg:items-center lg:gap-16">
          <div>
            <h2 className="font-heading text-2xl font-bold text-white sm:text-3xl">
              Get Your {b.name} Removal Quote
            </h2>
            <div className="mt-4 max-w-[62ch] space-y-3 text-base leading-relaxed text-white/85 sm:text-lg">
              <p>
                Tell us what you are moving and where. We give you a clear, no-obligation quote for
                your {b.name} move, man and van from £55 per hour plus VAT, or a fixed price after a
                free survey for a larger home or office.
              </p>
              <p>Accredited, insured and 7 days a week. Same-day moves are subject to availability.</p>
            </div>
            <div className="mt-8 flex flex-col gap-3 sm:flex-row sm:items-center">
              <Button href="/bookservice#quick-quote" variant="orange" size="lg" className="w-full sm:w-auto">
                Get a Free Quote
              </Button>
              <Button href="/prices" variant="outline-light" size="lg" className="w-full sm:w-auto">
                Removal Prices
              </Button>
            </div>
            <a
              href={PHONE_HREF}
              className="mt-4 inline-flex min-h-[44px] items-center gap-2 text-sm font-semibold text-white/85 underline underline-offset-2 hover:text-brand-orange"
            >
              Or call 020 7205 2525
            </a>
          </div>

          <div className="rounded-2xl bg-white p-6 shadow-sm sm:p-8">
            <p className="text-sm font-bold uppercase tracking-widest text-brand-orange">
              What affects your removal cost
            </p>
            <ul className="mt-5 space-y-3">
              {[
                "Property size and volume",
                "Distance between addresses",
                "Floor level and lift access",
                "Packing requirements",
                "Parking suspensions or permit costs",
                "Crew size and day of the week",
              ].map((item) => (
                <li key={item} className="flex items-start gap-3">
                  <CheckIcon className="mt-0.5 h-5 w-5 shrink-0 text-brand-orange" strokeWidth={3} />
                  <span className="text-base leading-relaxed text-brand-charcoal/85">{item}</span>
                </li>
              ))}
            </ul>
            <p className="mt-5 border-t border-black/10 pt-4 text-sm font-medium text-brand-charcoal/70">
              Your fixed quote includes VAT and fuel, with no hidden fees.
            </p>
          </div>
        </div>
      </section>

      {/* FAQs */}
      <section className="bg-white py-16">
        <div className="mx-auto max-w-[88rem] px-4">
          <SectionHeading eyebrow="Good to know" title={`${b.name} Removals FAQs`} />
          <Faq items={b.faqs ?? []} className="mt-10" />
        </div>
      </section>

      <Accreditations />
    </>
  );
}
