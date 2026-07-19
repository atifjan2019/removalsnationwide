"use server";

import { revalidatePath } from "next/cache";
import { requireDb } from "@/lib/d1";
import { BOOKING_STATUSES, type BookingStatus } from "@/lib/bookings";

export async function updateBookingStatus(id: string, formData: FormData): Promise<void> {
  const status = String(formData.get("status") ?? "");
  if (!BOOKING_STATUSES.includes(status as BookingStatus)) {
    throw new Error("Invalid booking status.");
  }

  const db = await requireDb();
  await db
    .prepare(
      "update bookings set status = ?, updated_at = strftime('%Y-%m-%dT%H:%M:%fZ', 'now') where id = ?",
    )
    .bind(status, id)
    .run();
  revalidatePath("/admin");
  revalidatePath("/admin/bookings");
}

export async function deleteBooking(id: string): Promise<void> {
  const db = await requireDb();
  await db.prepare("delete from bookings where id = ?").bind(id).run();
  revalidatePath("/admin");
  revalidatePath("/admin/bookings");
}
