/**
 * Free geospatial lookup for UK service areas.
 *
 * 1. Nominatim (OpenStreetMap) geocodes the area name to lat/lng.
 * 2. Overpass API finds populated places (towns/villages/cities) within
 *    50 miles (~80,467 m).
 *
 * No API key is required, but Nominatim asks for a descriptive User-Agent.
 */

const MILES_50_IN_METERS = 80_467;
const USER_AGENT = "RemovalsNationwide-Admin/1.0 (contact@removalsnationwide.co.uk)";
const REQUEST_TIMEOUT_MS = 10_000;

const OVERPASS_ENDPOINTS = [
  "https://overpass-api.de/api/interpreter",
  "https://lz4.overpass-api.de/api/interpreter",
  "https://z.overpass-api.de/api/interpreter",
];

async function fetchWithTimeout(
  input: RequestInfo | URL,
  init?: RequestInit,
  timeoutMs = REQUEST_TIMEOUT_MS,
): Promise<Response> {
  const controller = new AbortController();
  const timeout = setTimeout(() => controller.abort(), timeoutMs);
  try {
    const response = await fetch(input, { ...init, signal: controller.signal });
    return response;
  } finally {
    clearTimeout(timeout);
  }
}

async function sleep(ms: number): Promise<void> {
  return new Promise((resolve) => setTimeout(resolve, ms));
}

export type GeocodedPlace = {
  name: string;
  lat: number;
  lng: number;
};

export type NearbyPlace = {
  name: string;
  slug: string;
  distanceKm: number;
};

function toRadians(degrees: number): number {
  return (degrees * Math.PI) / 180;
}

function haversineKm(
  lat1: number,
  lng1: number,
  lat2: number,
  lng2: number,
): number {
  const R = 6371; // Earth radius in km
  const dLat = toRadians(lat2 - lat1);
  const dLng = toRadians(lng2 - lng1);
  const a =
    Math.sin(dLat / 2) * Math.sin(dLat / 2) +
    Math.cos(toRadians(lat1)) *
      Math.cos(toRadians(lat2)) *
      Math.sin(dLng / 2) *
      Math.sin(dLng / 2);
  const c = 2 * Math.atan2(Math.sqrt(a), Math.sqrt(1 - a));
  return R * c;
}

function slugify(input: string): string {
  return input
    .toLowerCase()
    .trim()
    .replace(/[^a-z0-9\s-]/g, "")
    .replace(/\s+/g, "-")
    .replace(/-+/g, "-");
}

export async function geocodeAreaName(name: string): Promise<GeocodedPlace | null> {
  const query = encodeURIComponent(`${name}, UK`);
  const url = `https://nominatim.openstreetmap.org/search?format=json&q=${query}&countrycodes=gb&limit=1`;

  const response = await fetchWithTimeout(url, {
    headers: {
      Accept: "application/json",
      "User-Agent": USER_AGENT,
    },
  });

  if (!response.ok) {
    const body = await response.text().catch(() => "");
    throw new Error(`Nominatim returned ${response.status}: ${body.slice(0, 200)}`);
  }

  const data = (await response.json()) as Array<{
    display_name?: string;
    lat?: string;
    lon?: string;
  }>;

  const first = data[0];
  if (!first?.lat || !first?.lon) return null;

  const lat = parseFloat(first.lat);
  const lng = parseFloat(first.lon);
  if (Number.isNaN(lat) || Number.isNaN(lng)) return null;

  return {
    name: first.display_name?.split(",")[0]?.trim() || name,
    lat,
    lng,
  };
}

export async function findNearbyPlaces(
  lat: number,
  lng: number,
  radiusMeters = MILES_50_IN_METERS,
): Promise<NearbyPlace[]> {
  const overpassQuery = `[out:json][timeout:20];(
    node[place=city]["name"](around:${radiusMeters},${lat},${lng});
    node[place=town]["name"](around:${radiusMeters},${lat},${lng});
    node[place=village]["name"](around:${radiusMeters},${lat},${lng});
    node[place=suburb]["name"](around:${radiusMeters},${lat},${lng});
  );out body;`;

  let lastError: Error | undefined;
  for (let attempt = 0; attempt < OVERPASS_ENDPOINTS.length; attempt++) {
    const endpoint = OVERPASS_ENDPOINTS[attempt];
    try {
      if (attempt > 0) await sleep(500 * attempt);

      const response = await fetchWithTimeout(endpoint, {
        method: "POST",
        headers: {
          Accept: "*/*",
          "Content-Type": "text/plain; charset=utf-8",
          "User-Agent": USER_AGENT,
        },
        body: overpassQuery,
      });

      if (!response.ok) {
        const text = await response.text().catch(() => "");
        throw new Error(`Overpass returned ${response.status}: ${text.slice(0, 200)}`);
      }

      const data = (await response.json()) as {
        elements?: Array<{
          lat?: number;
          lon?: number;
          tags?: { name?: string; place?: string };
        }>;
      };

      const seen = new Set<string>();
      const results: NearbyPlace[] = [];

      for (const element of data.elements ?? []) {
        const placeName = element.tags?.name?.trim();
        const placeLat = element.lat;
        const placeLng = element.lon;
        if (!placeName || placeLat === undefined || placeLng === undefined) continue;

        const slug = slugify(placeName);
        if (seen.has(slug)) continue;
        seen.add(slug);

        results.push({
          name: placeName,
          slug,
          distanceKm: Math.round(haversineKm(lat, lng, placeLat, placeLng) * 10) / 10,
        });
      }

      return results
        .sort((a, b) => a.distanceKm - b.distanceKm)
        .slice(0, 40);
    } catch (error) {
      const message = error instanceof Error ? error.message : String(error);
      console.error(`[findNearbyPlaces] attempt ${attempt + 1} failed for ${endpoint}:`, message);
      lastError = error instanceof Error ? error : new Error(message);
    }
  }

  throw lastError ?? new Error("All Overpass endpoints failed");
}

/**
 * High-level helper used by the admin form.
 */
export async function findNearbyAreasForName(
  name: string,
): Promise<NearbyPlace[]> {
  const center = await geocodeAreaName(name);
  if (!center) return [];
  return findNearbyPlaces(center.lat, center.lng);
}
