import "server-only";
import { getDb } from "@/lib/d1";

export const BOOKING_STATUSES = [
  "New",
  "Contacted",
  "Quoted",
  "Booked",
  "Completed",
  "Cancelled",
] as const;

export type BookingStatus = (typeof BOOKING_STATUSES)[number];

export type Booking = {
  id: string;
  full_name: string;
  phone: string;
  email: string;
  move_type: string;
  bedrooms: number;
  from_postcode: string;
  to_postcode: string;
  move_date: string;
  flexible_dates: number;
  notes: string;
  status: BookingStatus;
  created_at: string;
  updated_at: string;
};

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
