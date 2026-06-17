import "server-only";
import { getServiceClient } from "@/lib/supabase";

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

/* ---------------- Posts ---------------- */

export async function getDbPosts(includeUnpublished = false): Promise<DbPost[]> {
  const db = getServiceClient();
  if (!db) return [];
  let query = db.from("posts").select("*").order("created_at", { ascending: false });
  if (!includeUnpublished) query = query.eq("published", true);
  const { data, error } = await query;
  if (error) return [];
  return (data ?? []) as DbPost[];
}

export async function getDbPostBySlug(slug: string): Promise<DbPost | null> {
  const db = getServiceClient();
  if (!db) return null;
  const { data } = await db.from("posts").select("*").eq("slug", slug).maybeSingle();
  return (data as DbPost) ?? null;
}

export async function getDbPostById(id: string): Promise<DbPost | null> {
  const db = getServiceClient();
  if (!db) return null;
  const { data } = await db.from("posts").select("*").eq("id", id).maybeSingle();
  return (data as DbPost) ?? null;
}

/* ---------------- Areas ---------------- */

export async function getAreas(includeUnpublished = false): Promise<Area[]> {
  const db = getServiceClient();
  if (!db) return [];
  let query = db.from("areas").select("*").order("name", { ascending: true });
  if (!includeUnpublished) query = query.eq("published", true);
  const { data, error } = await query;
  if (error) return [];
  return (data ?? []) as Area[];
}

export async function getAreaBySlug(slug: string): Promise<Area | null> {
  const db = getServiceClient();
  if (!db) return null;
  const { data } = await db.from("areas").select("*").eq("slug", slug).maybeSingle();
  return (data as Area) ?? null;
}

export async function getAreaById(id: string): Promise<Area | null> {
  const db = getServiceClient();
  if (!db) return null;
  const { data } = await db.from("areas").select("*").eq("id", id).maybeSingle();
  return (data as Area) ?? null;
}

/** Thrown to the caller (server action) so the UI can surface a message. */
export function requireClient() {
  const db = getServiceClient();
  if (!db)
    throw new Error(
      "Supabase is not configured. Set NEXT_PUBLIC_SUPABASE_URL and SUPABASE_SERVICE_ROLE_KEY.",
    );
  return db;
}
