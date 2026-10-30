import { boroughs, type Borough } from "@/lib/boroughs";
import { towns } from "@/lib/towns";

/**
 * Every built-in area page: the 33 London borough guides plus the town pages
 * within 100 miles. The /areas/[slug] route, the sitemap and the areas hub
 * look pages up here, so a slug only has to be registered once.
 */
export const allAreas: Record<string, Borough> = { ...boroughs, ...towns };
