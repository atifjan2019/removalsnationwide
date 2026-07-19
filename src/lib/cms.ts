import "server-only";
import { getDb, requireDb, toBool } from "@/lib/d1";

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
  published: boolean;
  created_at: string;
};

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
