import type { Metadata } from "next";
import { getCloudflareContext } from "@opennextjs/cloudflare";
import { buildMetadata } from "@/lib/seo";
import { getResolvedSettings } from "@/lib/settings";
import JsonLd from "@/components/seo/JsonLd";
import BookingFunnel from "@/components/booking/BookingFunnel";
import BookingHeader from "@/components/layout/BookingHeader";

export const metadata: Metadata = buildMetadata("book-a-service");
export const dynamic = "force-dynamic";

const bookPageSchema = {
  "@context": "https://schema.org",
  "@type": "WebPage",
  name: "Book Your Move",
  description:
    "Start your booking or detailed quote with Removals Nationwide. Experienced, insured, 7 days a week.",
};

export default async function BookAServicePage() {
  const [settings, { env }] = await Promise.all([
    getResolvedSettings(),
    getCloudflareContext({ async: true }),
  ]);
  const mapsApiKey =
    env.NEXT_PUBLIC_GOOGLE_MAPS_API_KEY ||
    process.env.NEXT_PUBLIC_GOOGLE_MAPS_API_KEY ||
    "";

  return (
    <>
      <JsonLd data={bookPageSchema} />
      <BookingHeader
        logoUrl={settings.logoUrl}
        phones={settings.phones}
        whatsapp={settings.whatsapp}
        showPhone={settings.showPhone}
      />
      <BookingFunnel mapsApiKey={mapsApiKey} />
    </>
  );
}
