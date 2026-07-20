import "server-only";
import { getDb } from "@/lib/d1";
import type { Booking } from "@/lib/bookings-shared";

export * from "@/lib/bookings-shared";

export async function getBookings(): Promise<Booking[]> {
  const db = await getDb();
  if (!db) return [];

  try {
    const { results } = await db
      .prepare("select * from bookings order by created_at desc")
      .all<Booking>();
    return results ?? [];
  } catch {
    return [];
  }
}
