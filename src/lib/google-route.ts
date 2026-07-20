import { importLibrary } from "@googlemaps/js-api-loader";

export type DrivingRoute = {
  distance: string;
  duration: string;
};

type CalculateDrivingRouteInput = {
  origin: string;
  destination: string;
  originPlaceId?: string;
  destinationPlaceId?: string;
};

const routeResult = (
  distanceMeters: number | null | undefined,
  durationMillis: number | null | undefined,
  localizedDistance?: string | null,
  localizedDuration?: string | null,
): DrivingRoute | null => {
  if (!distanceMeters) return null;

  const distance =
    localizedDistance || `${(distanceMeters / 1609.344).toFixed(1)} miles`;
  const duration =
    localizedDuration ||
    (durationMillis
      ? `${Math.max(1, Math.round(durationMillis / 60000))} mins`
      : "");

  return duration ? { distance, duration } : null;
};

/**
 * Calculates a driving route with the current Routes API first, then falls
 * back to the legacy Distance Matrix service. Some existing Google Cloud
 * projects allow Distance Matrix but block the newer Routes endpoint, so the
 * fallback keeps booking emails populated while the key is migrated.
 */
export async function calculateDrivingRoute({
  origin,
  destination,
  originPlaceId,
  destinationPlaceId,
}: CalculateDrivingRouteInput): Promise<DrivingRoute> {
  const [{ Route, DistanceMatrixService }, { Place }, { UnitSystem }] =
    await Promise.all([
      importLibrary("routes"),
      importLibrary("places"),
      importLibrary("core"),
    ]);

  try {
    const computed = await Route.computeRoutes({
      origin: originPlaceId ? new Place({ id: originPlaceId }) : origin,
      destination: destinationPlaceId
        ? new Place({ id: destinationPlaceId })
        : destination,
      travelMode: "DRIVING",
      fields: ["distanceMeters", "durationMillis", "localizedValues"],
      language: "en-GB",
      region: "uk",
      units: UnitSystem.IMPERIAL,
    });
    const route = computed.routes?.[0];
    const result = routeResult(
      route?.distanceMeters,
      route?.durationMillis,
      route?.localizedValues?.distance,
      route?.localizedValues?.duration,
    );
    if (result) return result;
  } catch {
    // The enabled Distance Matrix service below is the compatibility path for
    // projects whose API restrictions do not yet include Routes API.
  }

  const matrix = await new DistanceMatrixService().getDistanceMatrix({
    origins: [origin],
    destinations: [destination],
    travelMode: "DRIVING",
    unitSystem: UnitSystem.IMPERIAL,
    language: "en-GB",
    region: "uk",
  });
  const element = matrix.rows?.[0]?.elements?.[0];

  if (element?.status !== "OK" || !element.distance?.text || !element.duration?.text) {
    throw new Error(`Google could not calculate this route (${element?.status || "unknown"}).`);
  }

  return {
    distance: element.distance.text,
    duration: element.duration.text,
  };
}
