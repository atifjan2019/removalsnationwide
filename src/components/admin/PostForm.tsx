"use client";

import { useState, useTransition } from "react";
import QuillEditor from "@/components/admin/QuillEditor";
import { savePost, type PostInput } from "@/app/admin/actions";

const DEFAULT_BIO =
  "Stephanie is a content marketing specialist for Removals Nationwide for the past several years. She has extensive experience working with moving companies and knows her audience. Stephanie creates engaging and useful content helping the customers of Removals Nationwide with their struggles and providing them with the most accurate insight.";

const input =
  "mt-1.5 w-full rounded-lg border border-black/15 bg-white px-4 py-2.5 text-base shadow-sm focus:border-brand-red focus:outline-none focus:ring-2 focus:ring-brand-red/30";

type Props = { post?: Partial<PostInput> & { id?: string } };

/** Converts a yyyy-mm-dd value to DD/MM/YYYY. Leaves other formats untouched. */
function toDisplayDate(v: string) {
  const m = /^(\d{4})-(\d{2})-(\d{2})$/.exec(v);
  return m ? `${m[3]}/${m[2]}/${m[1]}` : v;
}

export default function PostForm({ post }: Props) {
  const [f, setF] = useState({
    title: post?.title ?? "",
    slug: post?.slug ?? "",
    excerpt: post?.excerpt ?? "",
    date: post?.date ?? "",
    author: post?.author ?? "Stephanie Cooper",
    author_bio: post?.author_bio ?? DEFAULT_BIO,
    cover_image: post?.cover_image ?? "",
    published: post?.published ?? true,
  });
  const [body, setBody] = useState(post?.body_html ?? "");
  const [pending, startTransition] = useTransition();

  const set = (k: keyof typeof f, v: string | boolean) => setF((s) => ({ ...s, [k]: v }));

  function submit(e: React.FormEvent) {
    e.preventDefault();
    startTransition(() =>
      savePost({
        id: post?.id,
        ...f,
        date: toDisplayDate(f.date),
        body_html: body,
      }),
    );
  }

  return (
    <form onSubmit={submit} className="max-w-3xl space-y-5">
      <div>
        <label className="text-sm font-semibold text-brand-navy">Title</label>
        <input className={input} value={f.title} onChange={(e) => set("title", e.target.value)} required />
      </div>
      <div className="grid gap-5 sm:grid-cols-2">
        <div>
          <label className="text-sm font-semibold text-brand-navy">Slug (optional)</label>
          <input
            className={input}
            value={f.slug}
            onChange={(e) => set("slug", e.target.value)}
            placeholder="auto-generated from title"
          />
        </div>
        <div>
          <label className="text-sm font-semibold text-brand-navy">Date</label>
          <input
            className={input}
            type="date"
            value={/^\d{4}-\d{2}-\d{2}$/.test(f.date) ? f.date : ""}
            onChange={(e) => set("date", e.target.value)}
          />
          {f.date && !/^\d{4}-\d{2}-\d{2}$/.test(f.date) && (
            <p className="mt-1 text-xs text-brand-charcoal/60">Current: {f.date}</p>
          )}
        </div>
      </div>
      <div>
        <label className="text-sm font-semibold text-brand-navy">Excerpt</label>
        <textarea
          className={`${input} resize-y`}
          rows={3}
          value={f.excerpt}
          onChange={(e) => set("excerpt", e.target.value)}
        />
      </div>
      <div className="grid gap-5 sm:grid-cols-2">
        <div>
          <label className="text-sm font-semibold text-brand-navy">Author</label>
          <input className={input} value={f.author} onChange={(e) => set("author", e.target.value)} />
        </div>
        <div>
          <label className="text-sm font-semibold text-brand-navy">Cover image path / URL</label>
          <input
            className={input}
            value={f.cover_image}
            onChange={(e) => set("cover_image", e.target.value)}
            placeholder="/news/my-post.jpg"
          />
        </div>
      </div>
      <div>
        <label className="text-sm font-semibold text-brand-navy">Author bio</label>
        <textarea
          className={`${input} resize-y`}
          rows={3}
          value={f.author_bio}
          onChange={(e) => set("author_bio", e.target.value)}
        />
      </div>
      <div>
        <label className="mb-1.5 block text-sm font-semibold text-brand-navy">Content</label>
        <QuillEditor value={body} onChange={setBody} />
      </div>
      <label className="flex items-center gap-3 text-sm font-medium text-brand-navy">
        <input
          type="checkbox"
          checked={f.published}
          onChange={(e) => set("published", e.target.checked)}
          className="h-5 w-5 accent-brand-red"
        />
        Published
      </label>
      <button
        type="submit"
        disabled={pending}
        className="rounded-lg bg-brand-red px-6 py-3 text-sm font-semibold uppercase tracking-wide text-white transition hover:bg-brand-red-dark disabled:opacity-60"
      >
        {pending ? "Saving…" : "Save Post"}
      </button>
    </form>
  );
}
