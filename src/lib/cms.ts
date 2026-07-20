import "server-only";
import { getDb, requireDb, toBool } from "@/lib/d1";
import sanitizeHtml from "sanitize-html";
import { parseAreaTemplateData } from "@/lib/area-template";
import { REMOTE_IMAGES } from "@/lib/remote-images";
import type { Borough } from "@/lib/boroughs";

export type DbPost = {
  id: string;
  slug: string;
  title: string;
  excerpt: string;
  date: string; // DD/MM/YYYY
  author: string;
  author_bio: string;
  cover_image: string;
  body_html: string;
  published: boolean;
  created_at: string;
};

export type Area = {
  id: string;
  slug: string;
  name: string;
  intro: string;
  body_html: string;
  cover_image: string;
  template_data: string;
  published: boolean;
  created_at: string;
};

export function areaToBorough(area: Area): Borough {
  const template = parseAreaTemplateData(area.template_data);
  const legacyBody = sanitizeHtml(area.body_html || "", {
    allowedTags: [],
    allowedAttributes: {},
  }).trim();
  const h1 = template.h1 || `Removals in ${area.name}`;
  const introLine =
    template.introLine ||
    area.intro ||
    `An experienced and fully insured removals company serving ${area.name}.`;
  const legacyLocalBody = [area.intro, legacyBody].filter(Boolean);

  return {
    slug: area.slug,
    name: area.name,
    h1,
    subhead:
      template.subhead ||
      `Experienced, insured removals and man and van in ${area.name}, 7 days a week.`,
    metaTitle:
      template.metaTitle ||
      `Removals ${area.name} | Man and Van £55/hr | Removals Nationwide`,
    metaDescription:
      template.metaDescription ||
      `Experienced, insured removals and man and van in ${area.name} from £55/hr plus VAT.`,
    postcodes: template.postcodes,
    areaServedName: template.areaServedName || area.name,
    heroImage: template.heroImage || area.cover_image || REMOTE_IMAGES.movingVan,
    heroImageAlt:
      template.heroImageAlt ||
      `Removals Nationwide team providing removals in ${area.name}`,
    introLine,
    valueLine:
      template.valueLine ||
      "Published hourly rates, insurance included, your own accountable crew, and parking and access planned for you.",
    localBody:
      template.localBody.length > 0
        ? template.localBody
        : legacyLocalBody.length > 0
          ? legacyLocalBody
          : [
              `Removals Nationwide provides home, office and single-item moves across ${area.name}, 7 days a week, with one accountable team from quote to completion.`,
            ],
    coverageIntro:
      template.coverageIntro ||
      `We provide removals and man and van services throughout ${area.name} and the surrounding area.`,
    neighbourhoods:
      template.neighbourhoods ||
      `${area.name} and surrounding neighbourhoods.`,
    coverageOutro:
      template.coverageOutro ||
      "Send us your postcode and we will confirm coverage, availability and a price.",
    knowIntro: template.knowIntro,
    knowBlocks: template.knowBlocks,
    nearby: template.nearby,
    faqs:
      template.faqs.length > 0
        ? template.faqs
        : [
            {
              question: `Do you cover my address in ${area.name}?`,
              answer: `Yes. We serve ${area.name} and surrounding areas. Send us your postcode and we will confirm coverage, availability and a price.`,
            },
            {
              question: `How much is a man and van in ${area.name}?`,
              answer:
                "Our man and van starts at £55 per hour plus VAT, with the final price based on crew size, access, distance and the items being moved.",
            },
            {
              question: "Are your removal crews insured?",
              answer:
                "Yes. Every move includes goods-in-transit insurance, and our crews are trained, vetted and background-checked.",
            },
          ],
  };
}

/**
 * D1 hands `published` back as INTEGER 0/1. Normalise it at the boundary so no
 * caller ever has to know the storage representation.
 */
function mapRow<T extends { published: boolean }>(row: Record<string, unknown>): T {
  return { ...row, published: toBool(row.published) } as T;
}

/* ---------------- Posts ---------------- */

export async function getDbPosts(includeUnpublished = false): Promise<DbPost[]> {
  const db = await getDb();
  if (!db) return [];
  try {
    const sql = includeUnpublished
      ? "select * from posts order by created_at desc"
      : "select * from posts where published = 1 order by created_at desc";
    const { results } = await db.prepare(sql).all<Record<string, unknown>>();
    return (results ?? []).map((r) => mapRow<DbPost>(r));
  } catch {
    return [];
  }
}

export async function getDbPostBySlug(slug: string): Promise<DbPost | null> {
  const db = await getDb();
  if (!db) return null;
  try {
    const row = await db
      .prepare("select * from posts where slug = ? limit 1")
      .bind(slug)
      .first();
    return row ? mapRow<DbPost>(row as Record<string, unknown>) : null;
  } catch {
    return null;
  }
}

export async function getDbPostById(id: string): Promise<DbPost | null> {
  const db = await getDb();
  if (!db) return null;
  try {
    const row = await db
      .prepare("select * from posts where id = ? limit 1")
      .bind(id)
      .first();
    return row ? mapRow<DbPost>(row as Record<string, unknown>) : null;
  } catch {
    return null;
  }
}

/* ---------------- Areas ---------------- */

export async function getAreas(includeUnpublished = false): Promise<Area[]> {
  const db = await getDb();
  if (!db) return [];
  try {
    const sql = includeUnpublished
      ? "select * from areas order by name asc"
      : "select * from areas where published = 1 order by name asc";
    const { results } = await db.prepare(sql).all<Record<string, unknown>>();
    return (results ?? []).map((r) => mapRow<Area>(r));
  } catch {
    return [];
  }
}

export async function getAreaBySlug(slug: string): Promise<Area | null> {
  const db = await getDb();
  if (!db) return null;
  try {
    const row = await db
      .prepare("select * from areas where slug = ? limit 1")
      .bind(slug)
      .first();
    return row ? mapRow<Area>(row as Record<string, unknown>) : null;
  } catch {
    return null;
  }
}

export async function getAreaById(id: string): Promise<Area | null> {
  const db = await getDb();
  if (!db) return null;
  try {
    const row = await db
      .prepare("select * from areas where id = ? limit 1")
      .bind(id)
      .first();
    return row ? mapRow<Area>(row as Record<string, unknown>) : null;
  } catch {
    return null;
  }
}

/** Re-exported so server actions keep a single import site for write access. */
export { requireDb };
