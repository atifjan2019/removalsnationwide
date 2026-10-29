"use server";

import { revalidatePath } from "next/cache";
import { assertAdmin } from "@/lib/admin-auth";
import { logActivity } from "@/lib/admin-dashboard";
import { detailsUrlFor, sendBookingNotification, sendMoveDetailsLink } from "@/lib/booking-email";
import {
  bookingStatus,
  MOVE_STATUSES,
  type Booking,
  type MoveStatus,
} from "@/lib/bookings";
import { requireDb } from "@/lib/d1";
import {
  deleteBookingFiles,
  DETAILS_LINK_EVENT,
  getBookingMoveDetails,
  type BookingMoveDetails,
} from "@/lib/move-details-server";

const MOVE_TYPES = ["house", "flat", "office", "items"];
const clean = (formData: FormData, key: string, max = 500) =>
  String(formData.get(key) ?? "").trim().slice(0, max);
const money = (value: string) => Math.max(0, Number(value) || 0);

function refreshAdmin() {
  revalidatePath("/admin");
  revalidatePath("/admin/bookings");
  revalidatePath("/admin/customers");
  revalidatePath("/admin/reports");
  revalidatePath("/admin/activity");
}

export async function saveBooking(id: string, formData: FormData): Promise<void> {
  await assertAdmin();
  const db = await requireDb();
  const fullName = clean(formData, "fullName", 120);
  const email = clean(formData, "email", 160).toLowerCase();
  const phone = clean(formData, "phone", 40);
  const moveType = clean(formData, "moveType", 20);
  const statusValue = clean(formData, "status", 20) as MoveStatus;
  if (!fullName || !MOVE_TYPES.includes(moveType) || !MOVE_STATUSES.includes(statusValue)) {
    throw new Error("Please complete the required move fields.");
  }
  const values = [
    fullName,
    email,
    phone,
    moveType,
    Math.max(0, Math.min(10, Number(clean(formData, "bedrooms", 2)) || 0)),
    clean(formData, "fromAddress"),
    clean(formData, "toAddress"),
    clean(formData, "fromPostcode", 16).toUpperCase(),
    clean(formData, "toPostcode", 16).toUpperCase(),
    clean(formData, "moveDate", 10),
    formData.get("flexibleDates") === "on" ? 1 : 0,
    money(clean(formData, "quote", 30)),
    money(clean(formData, "expenses", 30)),
    clean(formData, "notes", 2000),
    bookingStatus(statusValue),
  ];

  if (id) {
    await db
      .prepare(
        `update bookings set full_name=?, email=?, phone=?, move_type=?, bedrooms=?,
           from_address=?, to_address=?, from_postcode=?, to_postcode=?, move_date=?,
           flexible_dates=?, quote=?, expenses=?, notes=?, status=?,
           updated_at=strftime('%Y-%m-%dT%H:%M:%fZ','now') where id=?`,
      )
      .bind(...values, id)
      .run();
    await logActivity("Updated", `Move updated for ${fullName}`, id);
  } else {
    const bookingId = crypto.randomUUID();
    await db
      .prepare(
        `insert into bookings (
           id, full_name, email, phone, move_type, bedrooms, from_address, to_address,
           from_postcode, to_postcode, move_date, flexible_dates, quote, expenses,
           notes, status
         ) values (?, ?, ?, ?, ?, ?, ?, ?, ?, ?, ?, ?, ?, ?, ?, ?)`,
      )
      .bind(bookingId, ...values)
      .run();
    await logActivity("Created", `Move added manually for ${fullName}`, bookingId);
  }
  refreshAdmin();
}

export async function updateBookingStatus(id: string, formData: FormData): Promise<void> {
  await assertAdmin();
  const status = String(formData.get("status") ?? "") as MoveStatus;
  if (!MOVE_STATUSES.includes(status)) throw new Error("Invalid move status.");
  const db = await requireDb();
  await db
    .prepare(
      "update bookings set status=?, updated_at=strftime('%Y-%m-%dT%H:%M:%fZ','now') where id=?",
    )
    .bind(bookingStatus(status), id)
    .run();
  await logActivity(
    status === "Abandoned" ? "Abandoned Lead" : status === "Completed" ? "Lead Converted" : "Updated",
    `Move status changed to ${status}`,
    id,
  );
  refreshAdmin();
}

export type ResendBookingEmailsResult = {
  ok: boolean;
  message: string;
  customerSent: boolean;
  adminSent: boolean;
  checkedAt: string;
};

export async function resendBookingEmails(
  id: string,
  browserRoute?: { distance: string; duration: string },
): Promise<ResendBookingEmailsResult> {
  await assertAdmin();
  const db = await requireDb();
  const booking = await db.prepare("select * from bookings where id=?").bind(id).first<Booking>();
  if (!booking) throw new Error("Move not found.");
  // Also gives a booking from before move details existed its link.
  const moveDetails = await getBookingMoveDetails(id);
  const routeDistance = String(browserRoute?.distance ?? booking.route_distance).trim().slice(0, 80);
  const routeDuration = String(browserRoute?.duration ?? booking.route_duration).trim().slice(0, 80);
  if (routeDistance && routeDuration && (!booking.route_distance || !booking.route_duration)) {
    await db
      .prepare("update bookings set route_distance=?, route_duration=? where id=?")
      .bind(routeDistance, routeDuration, id)
      .run();
  }
  const result = await sendBookingNotification({
    bookingId: booking.id,
    fullName: booking.full_name,
    phone: booking.phone,
    email: booking.email,
    moveType: booking.move_type,
    bedrooms: booking.bedrooms,
    fromAddress: booking.from_address,
    fromPostcode: booking.from_postcode,
    toAddress: booking.to_address,
    toPostcode: booking.to_postcode,
    routeDistance,
    routeDuration,
    moveDate: booking.move_date,
    flexibleDates: Boolean(booking.flexible_dates),
    notes: booking.notes,
    detailsUrl: moveDetails?.token ? detailsUrlFor(moveDetails.token) : undefined,
  });
  await db
    .prepare(
      "update bookings set customer_email_sent=?, admin_email_sent=?, email_checked_at=? where id=?",
    )
    .bind(result.customerSent ? 1 : 0, result.adminSent ? 1 : 0, result.checkedAt, id)
    .run();
  const expectedCustomerEmail = Boolean(booking.email);
  const ok = result.adminSent && (!expectedCustomerEmail || result.customerSent);
  const baseMessage = result.adminSent && result.customerSent
    ? "Booking emails sent successfully to the customer and admin."
    : result.adminSent && !expectedCustomerEmail
      ? "Admin email sent. This booking has no customer email address."
      : result.adminSent
        ? "Admin email sent, but the customer email failed. Check the customer address."
        : result.customerSent
          ? "Customer email sent, but the admin email failed. Check the SMTP sender settings."
          : "Emails could not be sent.";
  const message = result.errorMessage ? `${baseMessage} ${result.errorMessage}` : baseMessage;
  await logActivity("Email status updated", message, id);
  refreshAdmin();
  return {
    ok,
    message,
    customerSent: result.customerSent,
    adminSent: result.adminSent,
    checkedAt: result.checkedAt,
  };
}

export async function deleteBooking(id: string): Promise<void> {
  await assertAdmin();
  const db = await requireDb();
  const booking = await db.prepare("select full_name from bookings where id=?").bind(id).first<{ full_name: string }>();
  // The customer's photos and documents are personal data: they go with the move.
  await deleteBookingFiles(id);
  await db.prepare("delete from bookings where id=?").bind(id).run();
  await logActivity("Deleted", `Move deleted${booking?.full_name ? ` for ${booking.full_name}` : ""}`, id);
  refreshAdmin();
}

export type AdminMoveDetails = BookingMoveDetails & {
  link: string;
  linkEmails: { count: number; lastAt: string | null };
};

/** A booking's move details for Booking Details: the customer's link, answers and files. */
export async function loadBookingMoveDetails(id: string): Promise<AdminMoveDetails> {
  await assertAdmin();
  const data = await getBookingMoveDetails(id);
  if (!data) throw new Error("Move not found.");
  const db = await requireDb();
  const emails = await db
    .prepare("select count(*) as count, max(created_at) as last_at from activity_log where related_id=? and event_type=?")
    .bind(id, DETAILS_LINK_EVENT)
    .first<{ count: number; last_at: string | null }>();
  return {
    ...data,
    link: data.token ? detailsUrlFor(data.token) : "",
    linkEmails: { count: emails?.count ?? 0, lastAt: emails?.last_at ?? null },
  };
}

/**
 * Emails the customer their move details link on its own. Recorded in the
 * activity log, without the link, which is the key to their answers.
 */
export async function emailMoveDetailsLink(id: string): Promise<{ ok: boolean; message: string }> {
  await assertAdmin();
  const db = await requireDb();
  const booking = await db.prepare("select * from bookings where id=?").bind(id).first<Booking>();
  if (!booking) return { ok: false, message: "Move not found." };
  if (!booking.email) return { ok: false, message: "This customer has no email address." };
  const details = await getBookingMoveDetails(id);
  if (!details?.token) return { ok: false, message: "This move has no details link." };

  const outcome = await sendMoveDetailsLink({
    fullName: booking.full_name,
    email: booking.email,
    moveType: booking.move_type,
    fromPostcode: booking.from_postcode,
    toPostcode: booking.to_postcode,
    moveDate: booking.move_date,
    flexibleDates: Boolean(booking.flexible_dates),
    detailsUrl: detailsUrlFor(details.token),
  });
  if (!outcome.sent) return { ok: false, message: `The email was not sent: ${outcome.error}` };
  await logActivity(DETAILS_LINK_EVENT, `Emailed ${booking.full_name} their move details link`, id);
  revalidatePath("/admin/activity");
  return { ok: true, message: `Sent to ${booking.email}.` };
}
