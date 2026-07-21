import Link from "next/link";
import SectionHeading from "@/components/ui/SectionHeading";
import Button from "@/components/ui/Button";
import { BuildingIcon, ChevronRight } from "@/components/ui/icons";

type Borough = { name: string; slug: string };

const regions: { label: string; boroughs: Borough[] }[] = [
  {
    label: "North London",
    boroughs: [
      { name: "Barnet", slug: "barnet" },
      { name: "Camden", slug: "camden" },
      { name: "Enfield", slug: "enfield" },
      { name: "Hackney", slug: "hackney" },
      { name: "Haringey", slug: "haringey" },
      { name: "Islington", slug: "islington" },
    ],
  },
  {
    label: "South London",
    boroughs: [
      { name: "Bromley", slug: "bromley" },
      { name: "Croydon", slug: "croydon" },
      { name: "Kingston upon Thames", slug: "kingston-upon-thames" },
      { name: "Lambeth", slug: "lambeth" },
      { name: "Lewisham", slug: "lewisham" },
      { name: "Merton", slug: "merton" },
      { name: "Richmond upon Thames", slug: "richmond-upon-thames" },
      { name: "Southwark", slug: "southwark" },
      { name: "Sutton", slug: "sutton" },
      { name: "Wandsworth", slug: "wandsworth" },
    ],
  },
  {
    label: "East London",
    boroughs: [
      { name: "Barking and Dagenham", slug: "barking-and-dagenham" },
      { name: "Bexley", slug: "bexley" },
      { name: "Greenwich", slug: "greenwich" },
      { name: "Havering", slug: "havering" },
      { name: "Newham", slug: "newham" },
      { name: "Redbridge", slug: "redbridge" },
      { name: "Tower Hamlets", slug: "tower-hamlets" },
      { name: "Waltham Forest", slug: "waltham-forest" },
    ],
  },
  {
    label: "West London",
    boroughs: [
      { name: "Ealing", slug: "ealing" },
      { name: "Hammersmith and Fulham", slug: "hammersmith-and-fulham" },
      { name: "Harrow", slug: "harrow" },
      { name: "Hillingdon", slug: "hillingdon" },
      { name: "Hounslow", slug: "hounslow" },
      { name: "Kensington and Chelsea", slug: "kensington-and-chelsea" },
    ],
  },
  {
    label: "Central London",
    boroughs: [
      { name: "City of London", slug: "city-of-london" },
      { name: "Westminster", slug: "westminster" },
    ],
  },
];

export default function AreasSiloSection() {
  return (
    <section
      id="areas"
      className="bg-brand-sand py-20"
      aria-labelledby="areas-heading"
    >
      <div className="mx-auto max-w-[88rem] px-4">
        <SectionHeading
          eyebrow="All 32 London Boroughs, Greater London and Surrey"
          title="London Areas We Cover"
        />

        <p className="mx-auto mt-5 max-w-3xl text-center text-base leading-relaxed text-brand-charcoal/80">
          London is our home base, with crews serving all 32 boroughs, Greater London and Surrey.
          Nationwide and international removals are arranged from London, subject to route and date
          availability. Select a borough below for local service information.
        </p>

        <div className="mt-12 grid gap-6 md:grid-cols-2 lg:grid-cols-3" data-reveal>
          {regions.map((region) => (
            <div
              key={region.label}
              className="rounded-2xl border border-black/10 bg-white p-6 shadow-sm transition hover:shadow-md"
            >
              <div className="mb-4 flex items-center gap-2.5 border-b border-black/5 pb-4">
                <span className="flex h-8 w-8 shrink-0 items-center justify-center rounded-lg bg-brand-red/10 text-brand-red">
                  <BuildingIcon className="h-4 w-4" />
                </span>
                <h3 className="text-xs font-bold uppercase tracking-widest text-brand-red">
                  {region.label}
                </h3>
              </div>
              <ul className="grid gap-1 sm:grid-cols-2 lg:grid-cols-1">
                {region.boroughs.map((b) => (
                  <li key={b.slug}>
                    <Link
                      href={`/areas/${b.slug}`}
                      className="group flex items-center justify-between rounded-lg px-3 py-2 text-sm text-brand-charcoal/80 transition hover:bg-brand-red/5 hover:text-brand-red"
                    >
                      <span>{b.name}</span>
                      <ChevronRight className="h-4 w-4 -translate-x-1 opacity-0 transition group-hover:translate-x-0 group-hover:opacity-100" />
                    </Link>
                  </li>
                ))}
              </ul>
            </div>
          ))}
        </div>

        <div className="mt-10 flex flex-wrap justify-center gap-4">
          <Button href="/areas" variant="red" size="lg">
            View All Service Areas
          </Button>
          <Button href="/bookservice#quick-quote" variant="navy" size="lg">
            Get a Quote Near Me
          </Button>
        </div>
      </div>
    </section>
  );
}
