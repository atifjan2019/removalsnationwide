"use server";

import { revalidatePath } from "next/cache";
import { redirect } from "next/navigation";
import DOMPurify from "isomorphic-dompurify";
import { requireClient } from "@/lib/cms";

function slugify(input: string): string {
  return input
    .toLowerCase()
    .trim()
    .replace(/[^a-z0-9\s-]/g, "")
    .replace(/\s+/g, "-")
    .replace(/-+/g, "-");
}

const clean = (html: string) => DOMPurify.sanitize(html ?? "");

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
  const db = requireClient();
  const slug = slugify(input.slug || input.title);
  const row = {
    slug,
    title: input.title,
    excerpt: input.excerpt,
    date: input.date,
    author: input.author || "Stephanie Cooper",
    author_bio: input.author_bio,
    cover_image: input.cover_image,
    body_html: clean(input.body_html),
    published: input.published,
  };

  if (input.id) {
    await db.from("posts").update(row).eq("id", input.id);
  } else {
    await db.from("posts").insert(row);
  }

  revalidatePath("/news");
  revalidatePath(`/news/${slug}`);
  redirect("/admin/posts");
}

export async function deletePost(id: string) {
  const db = requireClient();
  await db.from("posts").delete().eq("id", id);
  revalidatePath("/news");
  revalidatePath("/admin/posts");
}

export type AreaInput = {
  id?: string;
  slug: string;
  name: string;
  intro: string;
  body_html: string;
  cover_image: string;
  published: boolean;
};

export async function saveArea(input: AreaInput) {
  const db = requireClient();
  const slug = slugify(input.slug || input.name);
  const row = {
    slug,
    name: input.name,
    intro: input.intro,
    body_html: clean(input.body_html),
    cover_image: input.cover_image,
    published: input.published,
  };

  if (input.id) {
    await db.from("areas").update(row).eq("id", input.id);
  } else {
    await db.from("areas").insert(row);
  }

  revalidatePath("/areas");
  revalidatePath(`/areas/${slug}`);
  redirect("/admin/areas");
}

export async function deleteArea(id: string) {
  const db = requireClient();
  await db.from("areas").delete().eq("id", id);
  revalidatePath("/areas");
  revalidatePath("/admin/areas");
}
