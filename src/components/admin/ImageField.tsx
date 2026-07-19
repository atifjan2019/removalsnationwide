"use client";

import { useRef, useState, useTransition } from "react";
import { uploadForField } from "@/app/admin/media/actions";

const input =
  "mt-1.5 w-full rounded-lg border border-black/15 bg-white px-4 py-2.5 text-base shadow-sm focus:border-brand-red focus:outline-none focus:ring-2 focus:ring-brand-red/30";

/**
 * Cover-image field: a URL input with an attached "upload" that pushes the
 * chosen file to R2 and fills the URL in. Keeping the text input means images
 * already in the media library (or external URLs) can still be pasted.
 */
export default function ImageField({
  label,
  value,
  onChange,
}: {
  label: string;
  value: string;
  onChange: (url: string) => void;
}) {
  const [pending, startTransition] = useTransition();
  const [error, setError] = useState("");
  const fileRef = useRef<HTMLInputElement>(null);

  function onFile(file: File | undefined) {
    if (!file) return;
    setError("");
    const formData = new FormData();
    formData.set("file", file);
    startTransition(async () => {
      const result = await uploadForField(formData);
      if (result.ok && result.url) {
        onChange(result.url);
      } else {
        setError(result.message);
      }
      if (fileRef.current) fileRef.current.value = "";
    });
  }

  return (
    <div>
      <label className="text-sm font-semibold text-brand-navy">{label}</label>
      <input
        className={input}
        value={value}
        onChange={(e) => onChange(e.target.value)}
        placeholder="Upload below, or paste a URL / media-library link"
      />
      <div className="mt-2 flex items-center gap-3">
        <input
          ref={fileRef}
          type="file"
          accept="image/*"
          disabled={pending}
          onChange={(e) => onFile(e.target.files?.[0])}
          className="text-xs file:mr-2 file:rounded-md file:border-0 file:bg-brand-navy file:px-3 file:py-1.5 file:text-xs file:font-semibold file:text-white hover:file:bg-black"
        />
        {pending && <span className="text-xs text-brand-charcoal/60">Uploading to R2…</span>}
      </div>
      {error && <p className="mt-1 text-xs font-semibold text-red-600">{error}</p>}
      {value && !pending && (
        // eslint-disable-next-line @next/next/no-img-element
        <img src={value} alt="Cover preview" className="mt-2 h-20 rounded-lg object-cover" />
      )}
    </div>
  );
}
