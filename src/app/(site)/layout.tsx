import TopBar from "@/components/layout/TopBar";
import Header from "@/components/layout/Header";
import Footer from "@/components/layout/Footer";
import FloatingContact from "@/components/layout/FloatingContact";
import JsonLd from "@/components/seo/JsonLd";
import { siteGraphLd } from "@/lib/seo";
import { getResolvedSettings } from "@/lib/settings";

/**
 * Pages under this layout are prerendered at build time, when the D1 binding is
 * not reachable — so they would bake in DEFAULT_SETTINGS and keep showing them
 * until something invalidated the cache. Saving in /admin/settings does call
 * revalidatePath, but a fresh deploy re-bakes the defaults, which made an
 * uploaded logo silently vanish from the public site while still showing in the
 * admin.
 *
 * Revalidating on an interval makes that self-healing without giving up static
 * rendering: pages stay cached and fast, and pick up settings changes within
 * the window even if no explicit revalidation fires.
 */
export const revalidate = 300;

/**
 * Reads the editable contact details once per request and passes them to the
 * shared chrome. TopBar, Footer and FloatingContact appear on every page and
 * two of them are client components, so one read here beats each fetching for
 * itself.
 */
export default async function SiteLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  const settings = await getResolvedSettings();

  return (
    <>
      <JsonLd data={siteGraphLd(settings)} />
      <TopBar settings={settings} />
      <Header logoUrl={settings.logoUrl} />
      <main>{children}</main>
      <Footer settings={settings} />
      <FloatingContact whatsapp={settings.whatsapp} />
    </>
  );
}
