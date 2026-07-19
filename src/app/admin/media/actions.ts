"use server";

import { revalidatePath } from "next/cache";
import { uploadMedia, deleteMedia } from "@/lib/r2";

/**
 * Server actions for the media library and for the upload fields embedded in
 * the post/area forms. Uploads always land in R2 — nothing is ever written to
 * the Worker filesystem, which does not exist.
 */

export type MediaActionState = { ok: boolean; message: string; url?: string };

/** Used by the media page's upload form. */
export async function uploadAction(
  _prev: MediaActionState,
  formData: FormData,
): Promise<MediaActionState> {
  const file = formData.get("file");
  if (!(file instanceof File) || file.size === 0) {
    return { ok: false, message: "Choose a file first." };
  }
  const result = await uploadMedia(file);
  if (!result.ok) return { ok: false, message: result.error };
  revalidatePath("/admin/media");
  return { ok: true, message: "Uploaded.", url: result.url };
}

/** Called from the cover-image field in the post/area forms. */
export async function uploadForField(formData: FormData): Promise<MediaActionState> {
  const file = formData.get("file");
  if (!(file instanceof File) || file.size === 0) {
    return { ok: false, message: "Choose a file first." };
  }
  const result = await uploadMedia(file);
  return result.ok
    ? { ok: true, message: "Uploaded.", url: result.url }
    : { ok: false, message: result.error };
}

export async function deleteAction(key: string): Promise<MediaActionState> {
  const result = await deleteMedia(key);
  if (!result.ok) return { ok: false, message: result.error ?? "Delete failed." };
  revalidatePath("/admin/media");
  return { ok: true, message: "Deleted." };
}
