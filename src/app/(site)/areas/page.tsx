import type { Metadata } from "next";
import Image from "next/image";
import Link from "next/link";
import StickyMobileBar from "@/components/services/StickyMobileBar";
import CtaBand from "@/components/home/CtaBand";
import JsonLd from "@/components/seo/JsonLd";
import Button from "@/components/ui/Button";
import {
  ArrowRight,
  CheckIcon,
  ChevronRight,
  GlobeIcon,
  HomeIcon,
  VanIcon,
} from "@/components/ui/icons";
import { boroughs, type Borough } from "@/lib/boroughs";
import { getAreas } from "@/lib/cms";
import { REMOTE_IMAGES, DEFAULT_BANNER_IMAGE } from "@/lib/remote-images";
import { breadcrumbLd, buildMetadata } from "@/lib/seo";

export const dynamic = "force-dynamic";

export const metadata: Metadata = buildMetadata("areas");

type Region = {
  name: string;
  eyebrow: string;
  slugs: string[];
};

const regions: Region[] = [
  {
    name: "North London",
    eyebrow: "N & NW postcodes",
    slugs: ["barnet", "camden", "enfield", "haringey", "islington"],
  },
  {
    name: "East London",
    eyebrow: "E, EC & IG postcodes",
    slugs: [
      "barking-and-dagenham",
      "hackney",
      "havering",
      "newham",
      "redbridge",
      "tower-hamlets",
      "waltham-forest",
    ],
  },
  {
    name: "South London",
    eyebrow: "SE, SW, BR & CR postcodes",
    slugs: [
      "bexley",
      "bromley",
      "croydon",
      "greenwich",
      "lambeth",
      "lewisham",
      "merton",
      "southwark",
      "sutton",
      "wandsworth",
    ],
  },
  {
    name: "West London",
    eyebrow: "W, NW, HA, TW & UB postcodes",
    slugs: [
      "brent",
      "ealing",
      "hammersmith-and-fulham",
      "harrow",
      "hillingdon",
      "hounslow",
      "kensington-and-chelsea",
      "kingston-upon-thames",
      "richmond-upon-thames",
    ],
  },
  {
    name: "Central London",
    eyebrow: "The heart of the capital",
    slugs: ["city-of-london", "westminster"],
  },
];

const regionBoroughs = (region: Region): Borough[] =>
  region.slugs.map((slug) => boroughs[slug]).filter((borough): borough is Borough => Boolean(borough));

const crumbs = [{ label: "Home", href: "/" }, { label: "Areas We Cover" }];

export default async function AreasPage() {
  const areas = await getAreas();
  const boroughCount = Object.keys(boroughs).length;

  return (
    <>
      <StickyMobileBar />

      <section className="relative isolate overflow-hidden bg-black text-white">
        <JsonLd data={breadcrumbLd(crumbs)} />
        <div className="absolute inset-0 -z-20">
          <Image
            src={REMOTE_IMAGES.movingVan}
            alt=""
            fill
            preload
            sizes="100vw"
            className="object-cover object-center opacity-40"
          />
        </div>
        <div className="absolute inset-0 -z-10 bg-[linear-gradient(90deg,#000_0%,rgba(0,0,0,.93)_42%,rgba(0,0,0,.38)_100%)]" />
        <div className="absolute -right-20 -top-28 -z-10 h-96 w-96 rounded-full border-[64px] border-brand-red/15" />

        <div className="mx-auto grid min-h-[600px] max-w-[88rem] items-center gap-12 px-4 py-16 lg:grid-cols-[1.12fr_.88fr] lg:py-24">
          <div className="max-w-3xl">
            <nav aria-label="Breadcrumb">
              <ol className="flex flex-wrap items-center gap-1.5 text-sm text-white/60">
                <li className="flex items-center gap-1.5">
                  <Link href="/" className="transition hover:text-white">Home</Link>
                  <ChevronRight className="h-4 w-4 text-white/30" />
                </li>
                <li className="font-semibold text-brand-red">Areas We Cover</li>
              </ol>
            </nav>

            <p className="mt-10 text-xs font-bold uppercase tracking-[0.24em] text-brand-red sm:text-sm">
              London expertise. Nationwide reach.
            </p>
            <h1 className="mt-4 max-w-2xl text-4xl font-black uppercase leading-[.98] tracking-[-0.035em] text-white sm:text-6xl lg:text-7xl">
              Your move starts with local knowledge.
            </h1>
            <p className="mt-6 max-w-2xl text-base leading-7 text-white/75 sm:text-lg">
              Experienced, insured removals across every London borough, the Home Counties and
              the rest of the UK. Find your local guide or tell us where you are moving.
            </p>
            <div className="mt-9 flex flex-wrap gap-3">
              <Button href="#boroughs" variant="red" size="lg">
                Find your area
                <ArrowRight className="h-4 w-4" />
              </Button>
              <Button href="/bookservice#quick-quote" variant="outline-light" size="lg">
                Get a quick quote
              </Button>
            </div>
          </div>

          <div className="hidden justify-self-end lg:block">
            <div className="w-[410px] border border-white/15 bg-black/55 p-8 shadow-2xl backdrop-blur-sm">
              <p className="text-xs font-bold uppercase tracking-[0.2em] text-white/55">Coverage at a glance</p>
              <div className="mt-7 grid grid-cols-2 gap-px bg-white/15">
                <div className="bg-black/80 p-6">
                  <p className="text-4xl font-black text-brand-red">{boroughCount}</p>
                  <p className="mt-2 text-sm font-semibold text-white/75">Detailed London guides</p>
                </div>
                <div className="bg-black/80 p-6">
                  <p className="text-4xl font-black text-brand-red">7</p>
                  <p className="mt-2 text-sm font-semibold text-white/75">Days a week</p>
                </div>
              </div>
              <ul className="mt-7 space-y-4 text-sm text-white/80">
                {["Fully insured crews", "Parking and access planned", "Rates from £55/hr + VAT"].map((item) => (
                  <li key={item} className="flex items-center gap-3">
                    <span className="grid h-6 w-6 place-items-center rounded-full bg-brand-red text-white">
                      <CheckIcon className="h-3.5 w-3.5" />
                    </span>
                    {item}
                  </li>
                ))}
              </ul>
            </div>
          </div>
        </div>
      </section>

      <section className="border-b border-black/10 bg-white">
        <div className="mx-auto grid max-w-[88rem] grid-cols-1 divide-y divide-black/10 px-4 sm:grid-cols-3 sm:divide-x sm:divide-y-0">
          {[
            { icon: HomeIcon, title: "Door-to-door coverage", copy: "Homes, flats and offices" },
            { icon: VanIcon, title: "The right crew and van", copy: "From one item to full moves" },
            { icon: GlobeIcon, title: "Moving further?", copy: "UK-wide and international" },
          ].map(({ icon: Icon, title, copy }) => (
            <div key={title} className="flex items-center gap-4 py-6 sm:px-6 first:sm:pl-0 last:sm:pr-0">
              <span className="grid h-11 w-11 shrink-0 place-items-center bg-brand-red/10 text-brand-red">
                <Icon className="h-5 w-5" />
              </span>
              <div>
                <p className="text-sm font-bold uppercase tracking-wide text-brand-navy">{title}</p>
                <p className="mt-0.5 text-sm text-brand-charcoal/60">{copy}</p>
              </div>
            </div>
          ))}
        </div>
      </section>

      <section id="boroughs" className="scroll-mt-24 bg-[#f5f5f3] py-20 lg:py-28">
        <div className="mx-auto max-w-[88rem] px-4">
          <div className="grid gap-8 lg:grid-cols-[.8fr_1.2fr] lg:items-end">
            <div>
              <p className="text-xs font-bold uppercase tracking-[0.22em] text-brand-red">Explore London</p>
              <h2 className="mt-4 text-3xl font-black uppercase leading-tight tracking-tight text-brand-navy sm:text-5xl">
                Find your local removals team
              </h2>
            </div>
            <p className="max-w-2xl text-base leading-7 text-brand-charcoal/65 lg:justify-self-end">
              Select your part of London for local postcodes, access and parking advice, transparent
              rates and services available in your borough.
            </p>
          </div>

          <div className="mt-12 grid gap-5 md:grid-cols-2 xl:grid-cols-3">
            {regions.map((region, index) => {
              const localBoroughs = regionBoroughs(region);
              const isWide = index === 3;

              return (
                <article
                  key={region.name}
                  className={`group relative overflow-hidden border border-black/10 bg-white p-7 shadow-[0_10px_30px_rgba(0,0,0,.04)] transition duration-300 hover:-translate-y-1 hover:border-brand-red/40 hover:shadow-[0_18px_42px_rgba(0,0,0,.09)] sm:p-8 ${isWide ? "xl:col-span-2" : ""}`}
                >
                  <span className="absolute right-4 top-1 text-8xl font-black leading-none text-black/[.035] transition group-hover:text-brand-red/[.06]">
                    0{index + 1}
                  </span>
                  <p className="relative text-[11px] font-bold uppercase tracking-[0.18em] text-brand-red">
                    {region.eyebrow}
                  </p>
                  <h3 className="relative mt-2 text-2xl font-black uppercase tracking-tight text-brand-navy">
                    {region.name}
                  </h3>
                  <div className={`relative mt-7 grid gap-x-8 gap-y-1 ${isWide ? "sm:grid-cols-2 lg:grid-cols-3" : "sm:grid-cols-2"}`}>
                    {localBoroughs.map((borough) => (
                      <Link
                        key={borough.slug}
                        href={`/areas/${borough.slug}`}
                        className="group/link flex items-center justify-between border-b border-black/8 py-3 text-sm font-semibold text-brand-charcoal/75 transition hover:border-brand-red/30 hover:text-brand-red"
                      >
                        {borough.name}
                        <ArrowRight className="h-4 w-4 -translate-x-1 text-brand-red opacity-0 transition group-hover/link:translate-x-0 group-hover/link:opacity-100" />
                      </Link>
                    ))}
                  </div>
                </article>
              );
            })}
          </div>

          <div className="mt-8 flex flex-col items-start justify-between gap-5 border-l-4 border-brand-red bg-black px-6 py-7 text-white sm:flex-row sm:items-center sm:px-8">
            <div>
              <p className="font-bold uppercase tracking-wide">Can’t see your town or postcode?</p>
              <p className="mt-1 text-sm text-white/65">We cover the whole UK. Send us both addresses and we’ll confirm availability.</p>
            </div>
            <Button href="/bookservice#quick-quote" variant="red" size="md" className="shrink-0">
              Check my postcode
              <ArrowRight className="h-4 w-4" />
            </Button>
          </div>
        </div>
      </section>


      <CtaBand
        heading="Wherever You're Moving, We'll Get You There"
        subtext="Tell us where you are moving from and to for a clear, no-obligation quote."
        actions={[
          { label: "Get a Quick Quote", href: "/bookservice#quick-quote", variant: "navy" },
          { label: "Book a Service", href: "/bookservice", variant: "outline-light" },
        ]}
      />
    </>
  );
}
