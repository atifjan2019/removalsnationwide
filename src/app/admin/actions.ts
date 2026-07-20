"use server";

import { revalidatePath } from "next/cache";
import { redirect } from "next/navigation";
import { requireDb } from "@/lib/cms";
import { fromBool } from "@/lib/d1";
import { sanitize } from "@/lib/sanitize";
import { assertAdmin } from "@/lib/admin-auth";
import { logActivity } from "@/lib/admin-dashboard";
import { findNearbyAreasForName, type NearbyPlace } from "@/lib/nearby-areas";
import {
  cleanAreaTemplate,
  type AreaFaq,
  type AreaKnowledgeBlock,
  type AreaNearbyLink,
  type AreaTemplateData,
} from "@/lib/area-template";

function slugify(input: string): string {
  return input
    .toLowerCase()
    .trim()
    .replace(/[^a-z0-9\s-]/g, "")
    .replace(/\s+/g, "-")
    .replace(/-+/g, "-");
}

const clean = (html: string) => sanitize(html);

export type PostInput = {
  id?: string;
  slug: string;
  title: string;
  excerpt: string;
  date: string;
  author: string;
  author_bio: string;
  cover_image: string;
  body_html: string;
  published: boolean;
};

export async function savePost(input: PostInput) {
  await assertAdmin();
  const db = await requireDb();
  const slug = slugify(input.slug || input.title);
  const values = [
    slug,
    input.title,
    input.excerpt,
    input.date,
    input.author || "Stephanie Cooper",
    input.author_bio,
    input.cover_image,
    clean(input.body_html),
    fromBool(input.published),
  ];

  if (input.id) {
    await db
      .prepare(
        `update posts set
           slug = ?, title = ?, excerpt = ?, date = ?, author = ?,
           author_bio = ?, cover_image = ?, body_html = ?, published = ?
         where id = ?`,
      )
      .bind(...values, input.id)
      .run();
  } else {
    // SQLite has no gen_random_uuid(), so the id is generated here.
    await db
      .prepare(
        `insert into posts
           (id, slug, title, excerpt, date, author, author_bio, cover_image, body_html, published)
         values (?, ?, ?, ?, ?, ?, ?, ?, ?, ?)`,
      )
      .bind(crypto.randomUUID(), ...values)
      .run();
  }

  await logActivity("Updated", `${input.id ? "Post updated" : "Post created"}: ${input.title}`, input.id || slug);
  revalidatePath("/news");
  revalidatePath(`/news/${slug}`);
  redirect("/admin/posts");
}

export async function deletePost(id: string) {
  await assertAdmin();
  const db = await requireDb();
  await db.prepare("delete from posts where id = ?").bind(id).run();
  await logActivity("Deleted", "News post deleted", id);
  revalidatePath("/news");
  revalidatePath("/admin/posts");
}

export type AreaInput = {
  id?: string;
  slug: string;
  name: string;
  published: boolean;
  template: AreaTemplateData;
};

const plain = (value: unknown, max = 2000) =>
  typeof value === "string" ? value.trim().slice(0, max) : "";

export async function saveArea(input: AreaInput) {
  await assertAdmin();
  const db = await requireDb();
  const slug = slugify(input.slug || input.name);
  const name = plain(input.name, 160);
  const template = cleanAreaTemplate(input.template);
  const values = [
    slug,
    name,
    template.introLine,
    template.heroImage,
    JSON.stringify(template),
    fromBool(input.published),
  ];

  if (input.id) {
    await db
      .prepare(
        `update areas set
           slug = ?, name = ?, intro = ?, cover_image = ?, template_data = ?, published = ?
         where id = ?`,
      )
      .bind(...values, input.id)
      .run();
  } else {
    await db
      .prepare(
        `insert into areas
           (id, slug, name, intro, cover_image, template_data, published)
         values (?, ?, ?, ?, ?, ?, ?)`,
      )
      .bind(crypto.randomUUID(), ...values)
      .run();
  }

  await logActivity("Updated", `${input.id ? "Area updated" : "Area created"}: ${name}`, input.id || slug);
  revalidatePath("/areas");
  revalidatePath(`/areas/${slug}`);
  redirect("/admin/areas");
}

export async function findNearbyAreas(name: string): Promise<NearbyPlace[]> {
  await assertAdmin();
  if (!name.trim()) return [];
  try {
    return await findNearbyAreasForName(name.trim());
  } catch (error) {
    const message = error instanceof Error ? error.message : String(error);
    console.error("[findNearbyAreas] failed:", message);
    throw new Error(message);
  }
}

export async function deleteArea(id: string) {
  await assertAdmin();
  const db = await requireDb();
  await db.prepare("delete from areas where id = ?").bind(id).run();
  await logActivity("Deleted", "Service area deleted", id);
  revalidatePath("/areas");
  revalidatePath("/admin/areas");
}

