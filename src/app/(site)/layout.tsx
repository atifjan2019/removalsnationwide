import TopBar from "@/components/layout/TopBar";
import Header from "@/components/layout/Header";
import Footer from "@/components/layout/Footer";
import FloatingContact from "@/components/layout/FloatingContact";
import JsonLd from "@/components/seo/JsonLd";
import { SettingsProvider } from "@/components/providers/SettingsProvider";
import { siteGraphLd } from "@/lib/seo";
import { getResolvedSettings } from "@/lib/settings";

/**
 * Rendered per request, deliberately.
 *
 * Prerendering happens at build time, where the D1 binding does not exist, so
 * static pages baked in DEFAULT_SETTINGS: an uploaded logo and an edited phone
 * number showed correctly in the admin (which is force-dynamic) while the
 * public site kept the built-in wordmark and the old number. Time-based
 * revalidation only narrowed that window instead of closing it — every deploy
 * re-baked the defaults.
 *
 * Contact details and branding are the kind of thing that must be right the
 * moment they are saved, so the chrome reads D1 on each request. Static assets
 * still come from the CDN, and the D1 read is a single indexed row.
 */
export const dynamic = "force-dynamic";

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
    // The provider covers client components rendered deep inside pages — the
    // sticky mobile CTA in particular, which appears on ~29 pages and would
    // otherwise need the phone threaded through every one of them.
    <SettingsProvider settings={settings}>
      <JsonLd data={siteGraphLd(settings)} />
      <TopBar settings={settings} />
      <Header logoUrl={settings.logoUrl} />
      <main>{children}</main>
      <Footer settings={settings} />
      <FloatingContact whatsapp={settings.whatsapp} />
    </SettingsProvider>
  );
}
