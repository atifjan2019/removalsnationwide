import Link from "next/link";
import SectionHeading from "@/components/ui/SectionHeading";
import Button from "@/components/ui/Button";

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

        <div className="mt-12 grid gap-8 md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-5" data-reveal>
          {regions.map((region) => (
            <div key={region.label}>
              <h3 className="mb-4 text-xs font-bold uppercase tracking-widest text-brand-red">
                {region.label}
              </h3>
              <ul className="space-y-2">
                {region.boroughs.map((b) => (
                  <li key={b.slug}>
                    <Link
                      href={`/areas/${b.slug}`}
                      className="block py-1.5 text-sm text-brand-charcoal/80 underline-offset-2 transition hover:text-brand-red hover:underline"
                    >
                      {b.name}
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
