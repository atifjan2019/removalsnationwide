import "server-only";

import { sendSmtpEmail } from "@/lib/smtp";
import { getSmtpConfiguration } from "@/lib/smtp-settings";
import { SITE_URL } from "@/lib/seo";
import { describeDetails } from "@/lib/move-details";
import { moveDetailsPdf, moveDetailsPdfName, type PdfRow } from "@/lib/move-details-pdf";
import { requireDb } from "@/lib/d1";
import type { Booking } from "@/lib/bookings";
import type { SubmittedDetails } from "@/lib/move-details-server";
import {
  describeBedrooms,
  formatMoveDate,
  moveLabels,
  confirmationForCustomer,
  moveDetailsLinkForCustomer,
  moveDetailsReceivedForAdmin,
  newBookingForAdmin,
  type BookingSummary,
} from "@/lib/email-templates";

const ADMIN_EMAIL = "atifjan2019@gmail.com";
const ADMIN_BOOKINGS_URL = "https://removalsnationwide.uk/admin/bookings/";

/** The customer's private move details page. The token is the key to it. */
export const detailsUrlFor = (token: string) => `${SITE_URL}/move-details/${encodeURIComponent(token)}/`;

type BookingNotification = BookingSummary;

export type BookingEmailResult = {
  adminSent: boolean;
  customerSent: boolean;
  checkedAt: string;
  errorMessage: string;
};

const isEmailAddress = (value: string) => /^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(value);

type SmtpSettings = Omit<Parameters<typeof sendSmtpEmail>[0], "to" | "replyTo" | "subject" | "text" | "html">;

/** The SMTP settings, or null where they are not complete enough to send with. */
async function smtpSettings(): Promise<SmtpSettings | null> {
  const configuration = await getSmtpConfiguration();
  const port = Number(configuration.port);
  if (!configuration.host || !Number.isInteger(port) || !configuration.username || !configuration.password || !configuration.fromEmail) {
    return null;
  }
  return {
    host: configuration.host,
    port,
    username: configuration.username,
    password: configuration.password,
    fromEmail: configuration.fromEmail,
    fromName: configuration.fromName,
  };
}

/** Both emails for a new booking: the office's notification and the customer's confirmation. */
export async function sendBookingNotification(booking: BookingNotification): Promise<BookingEmailResult> {
  try {
    const smtp = await smtpSettings();
    if (!smtp) {
      console.warn("Booking email was not sent because SMTP is not fully configured.");
      return { adminSent: false, customerSent: false, checkedAt: new Date().toISOString(), errorMessage: "SMTP is not fully configured." };
    }

    const customerEmail = isEmailAddress(booking.email) ? booking.email : "";
    const admin = newBookingForAdmin(booking, ADMIN_BOOKINGS_URL);
    const customer = confirmationForCustomer(booking);

    const deliveries = [
      sendSmtpEmail({ ...smtp, to: ADMIN_EMAIL, replyTo: customerEmail || ADMIN_EMAIL, ...admin }),
      ...(customerEmail ? [sendSmtpEmail({ ...smtp, to: customerEmail, replyTo: ADMIN_EMAIL, ...customer })] : []),
    ];
    const [adminResult, customerResult] = await Promise.allSettled(deliveries);

    if (adminResult.status === "rejected") {
      console.error("Could not send admin booking notification email", adminResult.reason);
    }
    if (customerResult?.status === "rejected") {
      console.error("Could not send customer booking confirmation email", customerResult.reason);
    }
    const errors = [adminResult, customerResult]
      .filter((result): result is PromiseRejectedResult => result?.status === "rejected")
      .map((result) => (result.reason instanceof Error ? result.reason.message : "Unknown SMTP error"))
      .filter((message, index, messages) => messages.indexOf(message) === index);
    return {
      adminSent: adminResult.status === "fulfilled",
      customerSent: customerResult?.status === "fulfilled",
      checkedAt: new Date().toISOString(),
      errorMessage: errors.join(" ").slice(0, 500),
    };
  } catch (error) {
    // The booking is already safely stored in D1. Email delivery must never
    // turn a successful request into an error shown to the customer.
    console.error("Could not send booking notification email", error);
    return {
      adminSent: false,
      customerSent: false,
      checkedAt: new Date().toISOString(),
      errorMessage: error instanceof Error ? error.message.slice(0, 500) : "Unknown email error",
    };
  }
}

export type EmailOutcome = { sent: true } | { sent: false; error: string };

async function deliver(
  message: Pick<Parameters<typeof sendSmtpEmail>[0], "to" | "replyTo" | "subject" | "text" | "html" | "attachments">,
): Promise<EmailOutcome> {
  try {
    const smtp = await smtpSettings();
    if (!smtp) return { sent: false, error: "SMTP is not fully configured." };
    await sendSmtpEmail({ ...smtp, ...message });
    return { sent: true };
  } catch (error) {
    console.error("Could not send email", error);
    return { sent: false, error: error instanceof Error ? error.message.slice(0, 300) : "Unknown SMTP error" };
  }
}

/** The customer's move details link on its own, sent from the admin's Booking Details. */
export async function sendMoveDetailsLink(booking: {
  fullName: string;
  email: string;
  moveType: string;
  fromPostcode: string;
  toPostcode: string;
  moveDate: string;
  flexibleDates: boolean;
  detailsUrl: string;
}): Promise<EmailOutcome> {
  if (!isEmailAddress(booking.email)) return { sent: false, error: "This customer has no valid email address." };
  return deliver({ to: booking.email, replyTo: ADMIN_EMAIL, ...moveDetailsLinkForCustomer(booking) });
}

/**
 * A booking's move details as a PDF to pass on, with its file name: the whole
 * move (type, addresses, date, size, route, notes) and the customer's answers,
 * without their name, phone or email. The file alone is named after them.
 * Null if the booking is not there.
 */
export async function buildMoveDetailsPdf(
  bookingId: string,
  details: unknown,
  files: { isImage: boolean }[],
  resubmitted = false,
): Promise<{ filename: string; content: Uint8Array } | null> {
  const db = await requireDb();
  const booking = await db.prepare("select * from bookings where id=?").bind(bookingId).first<Booking>();
  if (!booking) return null;

  const route = [booking.route_distance, booking.route_duration].filter(Boolean).join(", ");
  const move: PdfRow[] = [
    { label: "Move type", value: moveLabels[booking.move_type] ?? booking.move_type },
    { label: "Size", value: describeBedrooms(booking.move_type, booking.bedrooms) },
    { label: "Moving from", value: [booking.from_address, booking.from_postcode].filter(Boolean).join(", ") },
    { label: "Moving to", value: [booking.to_address, booking.to_postcode].filter(Boolean).join(", ") },
    { label: "Move date", value: formatMoveDate(booking.move_date, Boolean(booking.flexible_dates)) },
    { label: "Route", value: route },
    { label: "Booking notes", value: booking.notes ?? "" },
  ];
  const photos = files.filter((file) => file.isImage).length;
  const content = await moveDetailsPdf({
    move,
    answers: details ? (describeDetails(details) as PdfRow[]) : [],
    photos,
    otherFiles: files.length - photos,
    resubmitted,
  });
  return { filename: moveDetailsPdfName(booking.full_name, booking.move_date), content };
}

/**
 * "Move details received", to the office, when a customer sends the move
 * details form or sends it again. The button opens that booking in the admin.
 * It leaves out the customer's phone and email, and attaches the details as a
 * PDF that leaves out their name as well. If the PDF cannot be built the
 * email still goes, and says where the contact details are.
 */
export async function sendMoveDetailsReceived(data: SubmittedDetails): Promise<EmailOutcome> {
  const { booking, details, files } = data;
  const pdf = await buildMoveDetailsPdf(booking.id, details, files, Boolean(data.resubmitted)).catch((error) => {
    console.error("Could not build the move details PDF", error);
    return null;
  });
  const email = moveDetailsReceivedForAdmin({
    customerName: booking.customer.fullName,
    moveType: booking.moveType,
    fromPostcode: booking.fromPostcode,
    toPostcode: booking.toPostcode,
    details: describeDetails(details) as { label: string; value: string; list?: string[] }[],
    fileNames: files.map((file) => file.name),
    resubmitted: Boolean(data.resubmitted),
    adminUrl: `${ADMIN_BOOKINGS_URL}?booking=${encodeURIComponent(booking.id)}`,
    hasPdf: Boolean(pdf),
  });
  return deliver({
    to: ADMIN_EMAIL,
    replyTo: isEmailAddress(booking.customer.email) ? booking.customer.email : ADMIN_EMAIL,
    ...email,
    attachments: pdf ? [{ ...pdf, contentType: "application/pdf" }] : undefined,
  });
}
