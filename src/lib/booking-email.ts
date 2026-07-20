import "server-only";
import { getCloudflareContext } from "@opennextjs/cloudflare";

const ADMIN_EMAIL = "atifjan2019@gmail.com";
const SENDER_EMAIL = "bookings@removalsnationwide.uk";

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

export async function sendBookingNotification(booking: BookingNotification): Promise<void> {
  try {
    const { env } = await getCloudflareContext({ async: true });
    if (!env.EMAIL) {
      console.warn("Booking email was not sent because the EMAIL binding is unavailable.");
      return;
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

    const text = [
      "New booking request",
      "",
      `Reference: ${booking.bookingId}`,
      `Customer: ${booking.fullName}`,
      `Phone: ${booking.phone}`,
      `Email: ${booking.email}`,
      `Move type: ${moveType}`,
      `Property size: ${bedrooms}`,
      `Collection: ${collection}`,
      `Collection postcode: ${booking.fromPostcode}`,
      `Drop-off: ${destination}`,
      `Drop-off postcode: ${booking.toPostcode}`,
      `Driving distance: ${distance}`,
      `Estimated duration: ${duration}`,
      `Move date: ${moveDate}`,
      `Notes: ${booking.notes || "None"}`,
    ].join("\n");

    const rows = [
      ["Reference", booking.bookingId],
      ["Customer", booking.fullName],
      ["Phone", booking.phone],
      ["Email", booking.email],
      ["Move type", moveType],
      ["Property size", bedrooms],
      ["Collection", collection],
      ["Collection postcode", booking.fromPostcode],
      ["Drop-off", destination],
      ["Drop-off postcode", booking.toPostcode],
      ["Driving distance", distance],
      ["Estimated duration", duration],
      ["Move date", moveDate],
      ["Notes", booking.notes || "None"],
    ];
    const htmlRows = rows
      .map(
        ([label, value]) =>
          `<tr><th style="padding:8px 12px;text-align:left;vertical-align:top;border-bottom:1px solid #eee">${escapeHtml(label)}</th><td style="padding:8px 12px;border-bottom:1px solid #eee">${escapeHtml(value).replaceAll("\n", "<br>")}</td></tr>`,
      )
      .join("");

    await env.EMAIL.send({
      to: ADMIN_EMAIL,
      from: { email: SENDER_EMAIL, name: "Removals Nationwide Bookings" },
      replyTo: booking.email,
      subject: `New booking: ${booking.fromPostcode} to ${booking.toPostcode}`,
      text,
      html: `<h1 style="font-family:Arial,sans-serif">New booking request</h1><table style="border-collapse:collapse;font-family:Arial,sans-serif;font-size:14px">${htmlRows}</table>`,
    });
  } catch (error) {
    // The booking is already safely stored in D1. Email delivery must never
    // turn a successful request into an error shown to the customer.
    console.error("Could not send booking notification email", error);
  }
}
