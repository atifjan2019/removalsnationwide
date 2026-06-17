"use client";

import { useState, useTransition } from "react";
import QuillEditor from "@/components/admin/QuillEditor";
import { saveArea, type AreaInput } from "@/app/admin/actions";

const input =
  "mt-1.5 w-full rounded-lg border border-black/15 bg-white px-4 py-2.5 text-base shadow-sm focus:border-brand-orange focus:outline-none focus:ring-2 focus:ring-brand-orange/30";

type Props = { area?: Partial<AreaInput> & { id?: string } };

export default function AreaForm({ area }: Props) {
  const [f, setF] = useState({
    name: area?.name ?? "",
    slug: area?.slug ?? "",
    intro: area?.intro ?? "",
    cover_image: area?.cover_image ?? "",
    published: area?.published ?? true,
  });
  const [body, setBody] = useState(area?.body_html ?? "");
  const [pending, startTransition] = useTransition();

  const set = (k: keyof typeof f, v: string | boolean) => setF((s) => ({ ...s, [k]: v }));

  function submit(e: React.FormEvent) {
    e.preventDefault();
    startTransition(() => saveArea({ id: area?.id, ...f, body_html: body }));
  }

  return (
    <form onSubmit={submit} className="max-w-3xl space-y-5">
      <div className="grid gap-5 sm:grid-cols-2">
        <div>
          <label className="text-sm font-semibold text-brand-navy">Area name</label>
          <input className={input} value={f.name} onChange={(e) => set("name", e.target.value)} required />
        </div>
        <div>
          <label className="text-sm font-semibold text-brand-navy">Slug (optional)</label>
          <input
            className={input}
            value={f.slug}
            onChange={(e) => set("slug", e.target.value)}
            placeholder="auto-generated from name"
          />
        </div>
      </div>
      <div>
        <label className="text-sm font-semibold text-brand-navy">Intro</label>
        <textarea
          className={`${input} resize-y`}
          rows={3}
          value={f.intro}
          onChange={(e) => set("intro", e.target.value)}
        />
      </div>
      <div>
        <label className="text-sm font-semibold text-brand-navy">Cover image path / URL</label>
        <input
          className={input}
          value={f.cover_image}
          onChange={(e) => set("cover_image", e.target.value)}
          placeholder="/areas/london.jpg"
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
          className="h-5 w-5 accent-brand-orange"
        />
        Published
      </label>
      <button
        type="submit"
        disabled={pending}
        className="rounded-lg bg-brand-orange px-6 py-3 text-sm font-semibold uppercase tracking-wide text-white transition hover:bg-brand-orange-dark disabled:opacity-60"
      >
        {pending ? "Saving…" : "Save Area"}
      </button>
    </form>
  );
}
