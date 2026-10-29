"use client";

import { usePathname } from "next/navigation";
import { GoogleAnalytics } from "@next/third-parties/google";

/**
 * Google Analytics on every page except a customer's move details page. That
 * page's address is the key to their answers and photos, and a page view
 * would send it to Google. The booking form leaves for it with a full page
 * load, so analytics from the form never carries over either.
 */
export default function SiteAnalytics({ gaId }: { gaId: string }) {
  const pathname = usePathname();
  if (pathname?.startsWith("/move-details/")) return null;
  return <GoogleAnalytics gaId={gaId} />;
}
