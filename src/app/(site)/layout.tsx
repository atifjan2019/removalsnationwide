import TopBar from "@/components/layout/TopBar";
import Header from "@/components/layout/Header";
import Footer from "@/components/layout/Footer";
import FloatingContact from "@/components/layout/FloatingContact";
import JsonLd from "@/components/seo/JsonLd";
import { siteGraphLd } from "@/lib/seo";
import { getResolvedSettings } from "@/lib/settings";

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
