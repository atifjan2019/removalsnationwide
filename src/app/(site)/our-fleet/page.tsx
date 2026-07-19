import type { Metadata } from "next";
import { getResolvedSettings } from "@/lib/settings";
import Link from "next/link";
import { buildMetadata, breadcrumbLd } from "@/lib/seo";
import JsonLd from "@/components/seo/JsonLd";
import PageBanner from "@/components/layout/PageBanner";
import StickyMobileBar from "@/components/services/StickyMobileBar";
import CtaBand from "@/components/home/CtaBand";
import { VanIcon } from "@/components/ui/icons";
import Testimonials from "@/components/home/Testimonials";

export const metadata: Metadata = buildMetadata("our-fleet");

type Vehicle = {
  model: string;
  dimensions: string;
  use: string;
};

const fleet: Vehicle[] = [
  {
    model: "Iveco Stralis E6 460",
    dimensions:
      "This 110 cbm road-train vehicle consists of a 26t truck with 18t trailer. Permissible gross weight is 40t",
    use: "The 19m long truck is used on our regular international removal service to and from Scandinavia. It is proven to be perfect for removals to Norway and quite stable in the unpredictable northern weather.",
  },
  {
    model: "Volvo FH440",
    dimensions:
      "A 110 cbm road-train vehicle that is made of 18t truck and 18t trailer. Permissible gross weight is 36t",
    use: "It is primarily used for the services to and from Scandinavia and Central Europe.",
  },
  {
    model: "MAN TGL 12.180",
    dimensions:
      "A 47 cbm truck that weights 11t and has a loading area of 8.10 x 2.50 x 2.30 m. Permissible gross weight is 12t",
    use: "It is currently used on larger door-to-door domestic moves in and around London and the UK, and in the peak season for services to and from Europe.",
  },
  {
    model: "Peugeot Boxer Lo-loader",
    dimensions:
      "This 3,5t van has 850cu ft volume and is specially designed and built to be used in the removal industry. Permissible gross weight is 3.5t",
    use: "Used for local and UK wide moves as well as for serving all council tenants.",
  },
  {
    model: "Nissan NV400 Lo-loader",
    dimensions:
      "The brand new van 850cu ft volume accommodates a load length of 4m with a payload of 1350kg. Permissible gross weight is 3.5t",
    use: "A very advanced and economic vehicle, used for local and UK wide moves.",
  },
  {
    model: "Fiat Ducato Lo-loader",
    dimensions:
      "It has 850 cu ft of loading space and is 7m long. Permissible gross weight is 3.5t",
    use: "It is ideal for London and UK wide moves.",
  },
];

const fleetSchema = {
  "@context": "https://schema.org",
  "@type": "ItemList",
  name: "Removals Nationwide vehicle fleet",
  itemListElement: fleet.map((v, i) => ({
    "@type": "ListItem",
    position: i + 1,
    item: {
      "@type": "Vehicle",
      name: v.model,
      description: v.use,
    },
  })),
};

const fleetBreadcrumb = breadcrumbLd([
  { label: "Home", href: "/" },
  { label: "Our Fleet", href: "/our-fleet" },
]);

export default async function OurFleetPage() {
  const { phones } = await getResolvedSettings();
  return (
    <>
      <JsonLd data={fleetSchema} />
      <JsonLd data={fleetBreadcrumb} />
      <StickyMobileBar />
      <PageBanner
        title="Our Fleet"
        subtitle="Modern, Eco-Friendly Vehicles"
        crumbs={[{ label: "Home", href: "/" }, { label: "Our Fleet" }]}
      />

      <section className="bg-white py-20">
        <div className="mx-auto max-w-[88rem] px-4">
          <div className="mx-auto max-w-4xl space-y-4 text-base leading-relaxed text-brand-charcoal/85">
            <p>
              An essential part of the moving services is the vehicles, each year we change or add a
              couple. This makes it possible to renew our fleet entirely within 3 years. Which means
              we always run new, modern, environmentally friendly and advanced vehicles. In addition,
              Removals Nationwide has a contract with a couple of rental companies and scales the fleet up
              in times of need, usually during the summer.
            </p>
            <p>Our fleet consists of the following types of vehicles:</p>
          </div>

          {/* Fleet cards */}
          <div className="mt-12 grid gap-6 md:grid-cols-2 lg:grid-cols-3">
            {fleet.map((vehicle) => (
              <article
                key={vehicle.model}
                className="flex h-full flex-col rounded-2xl border border-black/5 bg-white shadow-sm transition-shadow duration-300 hover:shadow-md"
              >
                <header className="flex items-center gap-3 rounded-t-2xl bg-brand-navy px-6 py-4">
                  <span className="flex h-10 w-10 shrink-0 items-center justify-center rounded-lg bg-brand-red text-white">
                    <VanIcon className="h-6 w-6" />
                  </span>
                  <h2 className="text-base font-bold uppercase tracking-wide text-white">
                    {vehicle.model}
                  </h2>
                </header>

                <div className="flex flex-1 flex-col gap-4 p-6">
                  <div>
                    <h3 className="mb-1 text-xs font-bold uppercase tracking-wide text-brand-red">
                      Dimensions and loading capabilities
                    </h3>
                    <p className="text-sm leading-relaxed text-brand-charcoal/85">
                      {vehicle.dimensions}
                    </p>
                  </div>
                  <div>
                    <h3 className="mb-1 text-xs font-bold uppercase tracking-wide text-brand-red">
                      General use
                    </h3>
                    <p className="text-sm leading-relaxed text-brand-charcoal/85">{vehicle.use}</p>
                  </div>
                </div>
              </article>
            ))}
          </div>

          {/* Closing paragraphs */}
          <div className="mx-auto mt-14 max-w-4xl space-y-4 text-base leading-relaxed text-brand-charcoal/85">
            <p>
              All vans and trucks are equipped with advanced systems in the cab, which includes
              navigation, real-time warning when changing direction, air suspension for a smooth ride
              and reverse cameras. The large trucks are with dual sleeper cabs, offering the best
              possible environment for the long-haul drivers. Each van and truck is also equipped with
              all sorts of packing and cushioning materials. There is also lifting gear like straps,
              bars, trolleys and skates and a wide range of tools and drills. This way our movers
              handle every unexpected situation they run into adequately and efficiently.
            </p>
            <p>
              There is no limit for the number of boxes and goods as long as the vehicles do not
              exceed their permissible gross weight. And if you are relocating a large office with a
              big inventory, we will just use a couple of trucks or vans to deliver the services.
            </p>
            <p>
              The right vehicle is matched to your move. Smaller vans suit a{" "}
              <Link href="/man-and-van-london" className="font-semibold text-brand-navy underline underline-offset-2 hover:text-brand-red">
                man and van
              </Link>{" "}
              booking or a single collection, mid-size trucks handle a full{" "}
              <Link href="/house-removals" className="font-semibold text-brand-navy underline underline-offset-2 hover:text-brand-red">
                house removal
              </Link>
              , and our road-trains run the{" "}
              <Link href="/international-removals" className="font-semibold text-brand-navy underline underline-offset-2 hover:text-brand-red">
                international service
              </Link>
              , including the weekly{" "}
              <Link href="/removals-services-to-norway" className="font-semibold text-brand-navy underline underline-offset-2 hover:text-brand-red">
                removals to Norway
              </Link>
              .
            </p>
          </div>
        </div>
      </section>

      <CtaBand
        heading="Ready to Plan Your Move?"
        actions={[
          { label: "Quick Quote", href: "/bookservice#quick-quote", variant: "navy" },
          { label: "Book a Service", href: "/bookservice", variant: "outline-light" },
          { label: "020 7205 2525", href: "tel:+442072052525", variant: "outline-light" },
        ]}
      />

      <Testimonials />
    </>
  );
}
