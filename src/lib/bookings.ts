import "server-only";
import { getDb } from "@/lib/d1";
import type { Booking } from "@/lib/bookings-shared";

export * from "@/lib/bookings-shared";

export async function getBookings(): Promise<Booking[]> {
  const db = await getDb();
  if (!db) return [];

  try {
    const { results } = await db
      // Everything but the move details themselves and their link's token,
      // which Booking Details loads for the one booking that is open.
      .prepare(
        `select id, full_name, phone, email, move_type, bedrooms, from_postcode, to_postcode,
                from_address, to_address, route_distance, route_duration, move_date, flexible_dates,
                notes, status, quote, expenses, customer_email_sent, admin_email_sent,
                email_checked_at, created_at, updated_at, details_submitted_at
         from bookings order by created_at desc`,
      )
      .all<Booking>();
    return results ?? [];
  } catch {
    return [];
  }
}
