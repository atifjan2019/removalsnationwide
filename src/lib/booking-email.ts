import "server-only";
import { sendSmtpEmail } from "@/lib/smtp";
import { getSmtpConfiguration } from "@/lib/smtp-settings";

const ADMIN_EMAIL = "atifjan2019@gmail.com";

type BookingNotification = {
  bookingId: string;
  fullName: string;
  phone: string;
  email: string;
  moveType: string;
  bedrooms: number;
  fromAddress: string;
  fromPostcode: string;
  toAddress: string;
  toPostcode: string;
  routeDistance: string;
  routeDuration: string;
  moveDate: string;
  flexibleDates: boolean;
  notes: string;
};

const moveLabels: Record<string, string> = {
  house: "House move",
  flat: "Flat or studio",
  office: "Office move",
  items: "Single items",
};

const escapeHtml = (value: string) =>
  value
    .replaceAll("&", "&amp;")
    .replaceAll("<", "&lt;")
    .replaceAll(">", "&gt;")
    .replaceAll('"', "&quot;")
    .replaceAll("'", "&#039;");

export type BookingEmailResult = {
  adminSent: boolean;
  customerSent: boolean;
  checkedAt: string;
  errorMessage: string;
};

const isEmailAddress = (value: string) => /^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(value);

export async function sendBookingNotification(booking: BookingNotification): Promise<BookingEmailResult> {
  try {
    const configuration = await getSmtpConfiguration();
    const smtpPort = Number(configuration.port);
    if (
      !configuration.host ||
      !Number.isInteger(smtpPort) ||
      !configuration.username ||
      !configuration.password ||
      !configuration.fromEmail
    ) {
      console.warn("Booking email was not sent because SMTP is not fully configured.");
      return { adminSent: false, customerSent: false, checkedAt: new Date().toISOString(), errorMessage: "SMTP is not fully configured." };
    }

    const moveType = moveLabels[booking.moveType] ?? booking.moveType;
    const bedrooms =
      booking.moveType === "house" || booking.moveType === "flat"
        ? booking.bedrooms === 0
          ? "Studio"
          : `${booking.bedrooms}${booking.bedrooms >= 5 ? "+" : ""} bedroom`
        : "Not applicable";
    const moveDate = booking.flexibleDates ? "Flexible" : booking.moveDate;
    const distance = booking.routeDistance || "Unavailable";
    const duration = booking.routeDuration || "Unavailable";
    const collection = booking.fromAddress || booking.fromPostcode;
    const destination = booking.toAddress || booking.toPostcode;
    const collectionPostcode = booking.fromPostcode || "Not separately supplied";
    const destinationPostcode = booking.toPostcode || "Not separately supplied";

    const adminText = [
      "New booking request",
      "",
      `Reference: ${booking.bookingId}`,
      `Customer: ${booking.fullName}`,
      `Phone: ${booking.phone}`,
      `Email: ${booking.email}`,
      `Move type: ${moveType}`,
      `Property size: ${bedrooms}`,
      `Collection: ${collection}`,
      `Collection postcode: ${collectionPostcode}`,
      `Drop-off: ${destination}`,
      `Drop-off postcode: ${destinationPostcode}`,
      `Driving distance: ${distance}`,
      `Estimated duration: ${duration}`,
      `Move date: ${moveDate}`,
      `Notes: ${booking.notes || "None"}`,
    ].join("\n");

    const adminRows = [
      ["Reference", booking.bookingId],
      ["Customer", booking.fullName],
      ["Phone", booking.phone],
      ["Email", booking.email],
      ["Move type", moveType],
      ["Property size", bedrooms],
      ["Collection", collection],
      ["Collection postcode", collectionPostcode],
      ["Drop-off", destination],
      ["Drop-off postcode", destinationPostcode],
      ["Driving distance", distance],
      ["Estimated duration", duration],
      ["Move date", moveDate],
      ["Notes", booking.notes || "None"],
    ];
    const adminHtmlRows = adminRows
      .map(
        ([label, value]) =>
          `<tr><th style="padding:8px 12px;text-align:left;vertical-align:top;border-bottom:1px solid #eee">${escapeHtml(label)}</th><td style="padding:8px 12px;border-bottom:1px solid #eee">${escapeHtml(value).replaceAll("\n", "<br>")}</td></tr>`,
      )
      .join("");

    const customerText = [
      `Hi ${booking.fullName},`,
      "",
      "Thank you for your booking request. We have received your details and our team will contact you shortly.",
      "",
      `Reference: ${booking.bookingId}`,
      `Move type: ${moveType}`,
      `Property size: ${bedrooms}`,
      `Collection: ${collection}`,
      `Drop-off: ${destination}`,
      `Move date: ${moveDate}`,
      `Notes: ${booking.notes || "None"}`,
      "",
      "Removals Nationwide",
    ].join("\n");

    const customerRows = [
      ["Reference", booking.bookingId],
      ["Move type", moveType],
      ["Property size", bedrooms],
      ["Collection", collection],
      ["Drop-off", destination],
      ["Move date", moveDate],
      ["Notes", booking.notes || "None"],
    ];
    const customerHtmlRows = customerRows
      .map(
        ([label, value]) =>
          `<tr><th style="padding:8px 12px;text-align:left;vertical-align:top;border-bottom:1px solid #eee">${escapeHtml(label)}</th><td style="padding:8px 12px;border-bottom:1px solid #eee">${escapeHtml(value).replaceAll("\n", "<br>")}</td></tr>`,
      )
      .join("");

    const smtp = {
      host: configuration.host,
      port: smtpPort,
      username: configuration.username,
      password: configuration.password,
      fromEmail: configuration.fromEmail,
      fromName: configuration.fromName,
    };

    const customerEmail = isEmailAddress(booking.email) ? booking.email : "";
    const deliveries = [
      sendSmtpEmail({
        ...smtp,
        to: ADMIN_EMAIL,
        replyTo: customerEmail || ADMIN_EMAIL,
        subject: `New booking: ${booking.fromPostcode || "collection"} to ${booking.toPostcode || "destination"}`,
        text: adminText,
        html: `<h1 style="font-family:Arial,sans-serif">New booking request</h1><table style="border-collapse:collapse;font-family:Arial,sans-serif;font-size:14px">${adminHtmlRows}</table>`,
      }),
      ...(customerEmail ? [sendSmtpEmail({
        ...smtp,
        to: customerEmail,
        replyTo: ADMIN_EMAIL,
        subject: `We received your booking request – ${booking.bookingId}`,
        text: customerText,
        html: `<div style="font-family:Arial,sans-serif;color:#17233c"><h1>Booking request received</h1><p>Hi ${escapeHtml(booking.fullName)},</p><p>Thank you for your booking request. We have received your details and our team will contact you shortly.</p><table style="border-collapse:collapse;font-family:Arial,sans-serif;font-size:14px">${customerHtmlRows}</table><p style="margin-top:24px">Removals Nationwide</p></div>`,
      })] : []),
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
      .map((result) => result.reason instanceof Error ? result.reason.message : "Unknown SMTP error")
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
