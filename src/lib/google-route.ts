import "server-only";

import { getCloudflareContext } from "@opennextjs/cloudflare";

type RouteLocation = {
  address: string;
  placeId?: string;
};

type GoogleRoutesResponse = {
  routes?: Array<{
    distanceMeters?: number;
    duration?: string;
  }>;
};

export type RouteDetails = {
  distance: string;
  duration: string;
};

const waypoint = ({ address, placeId }: RouteLocation) =>
  placeId ? { placeId } : { address };

const formatDistance = (metres: number) => {
  const miles = metres / 1609.344;
  return `${miles < 10 ? miles.toFixed(1) : Math.round(miles)} miles`;
};

const formatDuration = (value: string) => {
  const totalMinutes = Math.max(1, Math.round(Number.parseFloat(value) / 60));
  if (!Number.isFinite(totalMinutes)) return "";
  const hours = Math.floor(totalMinutes / 60);
  const minutes = totalMinutes % 60;
  if (!hours) return `${minutes} min${minutes === 1 ? "" : "s"}`;
  return `${hours} hr${hours === 1 ? "" : "s"}${minutes ? ` ${minutes} mins` : ""}`;
};

/**
 * Calculates a driving route on the server so email logistics never depend
 * solely on client-submitted display values. Failure is non-fatal because the
 * same browser-restricted key may not be authorised for the Routes REST API.
 */
export async function calculateRouteDetails(
  origin: RouteLocation,
  destination: RouteLocation,
): Promise<RouteDetails | null> {
  if (!origin.address || !destination.address) return null;

  try {
    const { env } = await getCloudflareContext({ async: true });
    const apiKey = env.NEXT_PUBLIC_GOOGLE_MAPS_API_KEY?.trim();
    if (!apiKey) return null;

    const response = await fetch("https://routes.googleapis.com/directions/v2:computeRoutes", {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
        "X-Goog-Api-Key": apiKey,
        "X-Goog-FieldMask": "routes.distanceMeters,routes.duration",
      },
      body: JSON.stringify({
        origin: waypoint(origin),
        destination: waypoint(destination),
        travelMode: "DRIVE",
        routingPreference: "TRAFFIC_AWARE",
        languageCode: "en-GB",
        regionCode: "GB",
        units: "IMPERIAL",
      }),
    });
    if (!response.ok) {
      console.warn("Google route calculation was unavailable", response.status);
      return null;
    }

    const route = (await response.json() as GoogleRoutesResponse).routes?.[0];
    if (!route?.distanceMeters || !route.duration) return null;
    const duration = formatDuration(route.duration);
    if (!duration) return null;
    return { distance: formatDistance(route.distanceMeters), duration };
  } catch (error) {
    console.warn(
      "Google route calculation failed",
      error instanceof Error ? error.message : "Unknown route error",
    );
    return null;
  }
}
