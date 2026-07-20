"use server";

import { revalidatePath } from "next/cache";
import { requireDb } from "@/lib/d1";
import { sendBookingNotification } from "@/lib/booking-email";
import { logActivity } from "@/lib/admin-dashboard";

const MOVE_TYPES = ["house", "office", "flat", "items"] as const;
const EMAIL_RE = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
const UK_POSTCODE_RE = /^[A-Z]{1,2}\d[A-Z\d]?\s*\d[A-Z]{2}$/i;

export type BookingInput = {
  moveType: string;
  bedrooms: number;
  fromAddress: string;
  fromPlaceId: string;
  fromPostcode: string;
  toAddress: string;
  toPlaceId: string;
  toPostcode: string;
  routeDistance: string;
  routeDuration: string;
  moveDate: string;
  flexibleDates: boolean;
  fullName: string;
  phone: string;
  email: string;
  notes: string;
};

export type BookingResult =
  | { success: true; bookingId: string }
  | { success: false; error: string };

const clean = (value: unknown, max = 250) =>
  typeof value === "string" ? value.trim().slice(0, max) : "";

export async function createBooking(input: BookingInput): Promise<BookingResult> {
  const moveType = clean(input.moveType, 20);
  const fullName = clean(input.fullName, 120);
  const phone = clean(input.phone, 40);
  const email = clean(input.email, 160).toLowerCase();
  const fromPostcode = clean(input.fromPostcode, 12).toUpperCase();
  const toPostcode = clean(input.toPostcode, 12).toUpperCase();
  const fromAddress = clean(input.fromAddress, 500);
  const toAddress = clean(input.toAddress, 500);
  const fromPlaceId = clean(input.fromPlaceId, 250);
  const toPlaceId = clean(input.toPlaceId, 250);
  const routeDistance = clean(input.routeDistance, 80);
  const routeDuration = clean(input.routeDuration, 80);
  const moveDate = clean(input.moveDate, 10);
  const notes = clean(input.notes, 2000);
  const bedrooms = Number.isFinite(input.bedrooms)
    ? Math.max(0, Math.min(10, Math.trunc(input.bedrooms)))
    : 0;

  if (!MOVE_TYPES.includes(moveType as (typeof MOVE_TYPES)[number])) {
    return { success: false, error: "Please select a valid move type." };
  }
  if (fullName.length < 2) return { success: false, error: "Please enter your full name." };
  if (!EMAIL_RE.test(email)) return { success: false, error: "Please enter a valid email address." };
  if (phone.replace(/\D/g, "").length < 10) {
    return { success: false, error: "Please enter a valid phone number." };
  }
  const validCollection =
    (Boolean(fromPlaceId) && Boolean(fromAddress)) || UK_POSTCODE_RE.test(fromPostcode);
  const validDestination =
    (Boolean(toPlaceId) && Boolean(toAddress)) || UK_POSTCODE_RE.test(toPostcode);
  if (!validCollection || !validDestination) {
    return { success: false, error: "Please enter valid UK collection and delivery postcodes." };
  }
  if (!moveDate && !input.flexibleDates) {
    return { success: false, error: "Please select a move date or choose flexible dates." };
  }

  try {
    const db = await requireDb();
    const bookingId = crypto.randomUUID();
    await db
      .prepare(
        `insert into bookings (
           id, full_name, phone, email, move_type, bedrooms,
           from_postcode, to_postcode, from_address, to_address,
           route_distance, route_duration, move_date, flexible_dates, notes, status
         ) values (?, ?, ?, ?, ?, ?, ?, ?, ?, ?, ?, ?, ?, ?, ?, 'New')`,
      )
      .bind(
        bookingId,
        fullName,
        phone,
        email,
        moveType,
        bedrooms,
        fromPostcode,
        toPostcode,
        fromAddress,
        toAddress,
        routeDistance,
        routeDuration,
        moveDate,
        input.flexibleDates ? 1 : 0,
        notes,
      )
      .run();

    const emailResult = await sendBookingNotification({
      bookingId,
      fullName,
      phone,
      email,
      moveType,
      bedrooms,
      fromAddress,
      fromPostcode,
      toAddress,
      toPostcode,
      routeDistance,
      routeDuration,
      moveDate,
      flexibleDates: input.flexibleDates,
      notes,
    });
    await db
      .prepare(
        `update bookings set customer_email_sent = ?, admin_email_sent = ?, email_checked_at = ?
         where id = ?`,
      )
      .bind(
        emailResult.customerSent ? 1 : 0,
        emailResult.adminSent ? 1 : 0,
        emailResult.checkedAt,
        bookingId,
      )
      .run();
    await logActivity(
      "Created",
      `Booking request created for ${fullName}`,
      bookingId,
      "api",
    );

    revalidatePath("/admin");
    revalidatePath("/admin/bookings");
    return { success: true, bookingId };
  } catch (error) {
    console.error("Could not create booking", error);
    return {
      success: false,
      error: "We could not save your booking request. Please call us or try again.",
    };
  }
}
