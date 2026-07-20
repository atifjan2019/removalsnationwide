"use server";

import { revalidatePath } from "next/cache";
import { assertAdmin } from "@/lib/admin-auth";
import { logActivity } from "@/lib/admin-dashboard";
import { sendBookingNotification } from "@/lib/booking-email";
import {
  bookingStatus,
  MOVE_STATUSES,
  type Booking,
  type MoveStatus,
} from "@/lib/bookings";
import { requireDb } from "@/lib/d1";

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

export async function resendBookingEmails(id: string): Promise<ResendBookingEmailsResult> {
  await assertAdmin();
  const db = await requireDb();
  const booking = await db.prepare("select * from bookings where id=?").bind(id).first<Booking>();
  if (!booking) throw new Error("Move not found.");
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
    routeDistance: "",
    routeDuration: "",
    moveDate: booking.move_date,
    flexibleDates: Boolean(booking.flexible_dates),
    notes: booking.notes,
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
  await db.prepare("delete from bookings where id=?").bind(id).run();
  await logActivity("Deleted", `Move deleted${booking?.full_name ? ` for ${booking.full_name}` : ""}`, id);
  refreshAdmin();
}
