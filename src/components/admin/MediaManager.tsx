"use client";

import { useRef, useState, useTransition } from "react";
import {
  uploadAction,
  deleteAction,
  type MediaActionState,
} from "@/app/admin/media/actions";
import type { MediaObject } from "@/lib/r2";

function formatSize(bytes: number): string {
  if (bytes >= 1024 * 1024) return `${(bytes / 1024 / 1024).toFixed(1)} MB`;
  if (bytes >= 1024) return `${Math.round(bytes / 1024)} KB`;
  return `${bytes} B`;
}

const IMAGE_TYPES = /^image\//;

export default function MediaManager({ objects }: { objects: MediaObject[] }) {
  const [message, setMessage] = useState<MediaActionState | null>(null);
  const [pending, startTransition] = useTransition();
  const [deleting, setDeleting] = useState<string | null>(null);
  const fileRef = useRef<HTMLInputElement>(null);

  function upload(formData: FormData) {
    startTransition(async () => {
      const result = await uploadAction({ ok: false, message: "" }, formData);
      setMessage(result);
      if (result.ok && fileRef.current) fileRef.current.value = "";
    });
  }

  function remove(key: string) {
    // Deleting is irreversible and the image may still be referenced by a
    // post — make the operator confirm with the actual key in view.
    if (!window.confirm(`Delete "${key}" permanently? Pages still using it will show a broken image.`)) {
      return;
    }
    setDeleting(key);
    startTransition(async () => {
      const result = await deleteAction(key);
      setMessage(result);
      setDeleting(null);
    });
  }

  async function copyUrl(url: string) {
    try {
      await navigator.clipboard.writeText(url);
      setMessage({ ok: true, message: "URL copied to clipboard." });
    } catch {
      setMessage({ ok: false, message: `Copy failed — URL: ${url}` });
    }
  }

  return (
    <div className="mt-8">
      <form action={upload} className="flex flex-wrap items-center gap-3 rounded-xl border border-black/10 bg-white p-4">
        <input
          ref={fileRef}
          type="file"
          name="file"
          accept="image/*"
          className="text-sm file:mr-3 file:rounded-md file:border-0 file:bg-brand-navy file:px-4 file:py-2.5 file:text-sm file:font-semibold file:text-white hover:file:bg-black"
        />
        <button
          type="submit"
          disabled={pending}
          className="rounded-lg bg-brand-red px-5 py-2.5 text-sm font-semibold text-white transition hover:bg-black disabled:opacity-60"
        >
          {pending ? "Working…" : "Upload"}
        </button>
        <span className="text-xs text-brand-charcoal/60">Max 8 MB. PNG, JPEG, SVG, WebP.</span>
      </form>

      {message && (
        <div
          className={`mt-4 rounded-xl border p-3 text-sm ${
            message.ok
              ? "border-green-300 bg-green-50 text-green-800"
              : "border-red-300 bg-red-50 text-red-800"
          }`}
        >
          {message.message}
        </div>
      )}

      {objects.length === 0 ? (
        <p className="mt-10 text-sm text-brand-charcoal/60">
          No files in the bucket yet. Upload one above, or save a post with a
          cover image.
        </p>
      ) : (
        <ul className="mt-6 grid grid-cols-2 gap-4 sm:grid-cols-3 lg:grid-cols-4">
          {objects.map((obj) => (
            <li key={obj.key} className="overflow-hidden rounded-xl border border-black/10 bg-white">
              <div className="flex h-32 items-center justify-center bg-brand-grey">
                {IMAGE_TYPES.test(obj.contentType) ? (
                  // eslint-disable-next-line @next/next/no-img-element
                  <img src={obj.url} alt={obj.key} loading="lazy" className="h-full w-full object-cover" />
                ) : (
                  <span className="px-2 text-center text-xs text-brand-charcoal/50">{obj.contentType || "file"}</span>
                )}
              </div>
              <div className="p-3">
                <p className="truncate text-xs font-semibold text-brand-navy" title={obj.key}>
                  {obj.key}
                </p>
                <p className="mt-0.5 text-xs text-brand-charcoal/50">
                  {formatSize(obj.size)} · {obj.uploaded.slice(0, 10)}
                </p>
                <div className="mt-2 flex gap-2">
                  <button
                    type="button"
                    onClick={() => copyUrl(obj.url)}
                    className="rounded-md bg-brand-navy px-2.5 py-1.5 text-xs font-semibold text-white transition hover:bg-black"
                  >
                    Copy URL
                  </button>
                  <button
                    type="button"
                    onClick={() => remove(obj.key)}
                    disabled={pending && deleting === obj.key}
                    className="rounded-md border border-red-300 px-2.5 py-1.5 text-xs font-semibold text-red-600 transition hover:bg-red-50 disabled:opacity-60"
                  >
                    {deleting === obj.key ? "Deleting…" : "Delete"}
                  </button>
                </div>
              </div>
            </li>
          ))}
        </ul>
      )}
    </div>
  );
}
