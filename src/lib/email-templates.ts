/**
 * The HTML and plain-text bodies of every email the site sends.
 *
 * Pure functions, no app imports: booking-email.ts calls these and sends the
 * result, and scripts can render them on their own for a preview. The design
 * is deliberately plain: a white card, the company name as text, one table of
 * labels and values, one button where there is something to do, and a short
 * footer. Everything is inline-styled for email clients.
 */

export const escapeHtml = (value: string) =>
  value
    .replaceAll("&", "&amp;")
    .replaceAll("<", "&lt;")
    .replaceAll(">", "&gt;")
    .replaceAll('"', "&quot;")
    .replaceAll("'", "&#039;");

const htmlValue = (value: string) => escapeHtml(value).replaceAll("\n", "<br>");

export const moveLabels: Record<string, string> = {
  house: "House move",
  flat: "Flat or studio",
  office: "Office move",
  items: "Single items",
};

export const formatMoveDate = (value: string, flexible: boolean) => {
  if (flexible) return "Flexible dates";
  if (!value) return "To be confirmed";
  const date = new Date(`${value}T12:00:00Z`);
  return Number.isNaN(date.getTime())
    ? value
    : new Intl.DateTimeFormat("en-GB", {
        weekday: "short",
        day: "numeric",
        month: "long",
        year: "numeric",
        timeZone: "UTC",
      }).format(date);
};

export const describeBedrooms = (moveType: string, bedrooms: number) =>
  moveType === "house" || moveType === "flat"
    ? bedrooms === 0
      ? "Studio"
      : `${bedrooms}${bedrooms >= 5 ? "+" : ""} bedroom${bedrooms === 1 ? "" : "s"}`
    : "Not applicable";

/* ─── Building blocks ─── */

const TEXT = "#1f2937";
const MUTED = "#6b7280";
const RULE = "#e5e7eb";
const BRAND = "#d71920";
const FONT = "font-family:Arial,Helvetica,sans-serif;";

export type Row = [label: string, value: string];

/** A table of label/value rows separated by thin rules. */
export const rows = (items: Row[]) => `
  <table role="presentation" width="100%" cellpadding="0" cellspacing="0" style="border-collapse:collapse;margin:20px 0 0;">
    ${items
      .map(
        ([label, value], index) => `
    <tr>
      <td style="padding:10px 12px 10px 0;vertical-align:top;width:34%;font-size:14px;line-height:20px;color:${MUTED};${FONT}${index ? `border-top:1px solid ${RULE};` : ""}">${escapeHtml(label)}</td>
      <td style="padding:10px 0;vertical-align:top;font-size:14px;line-height:20px;color:${TEXT};${FONT}${index ? `border-top:1px solid ${RULE};` : ""}">${htmlValue(value)}</td>
    </tr>`,
      )
      .join("")}
  </table>`;

export const heading = (text: string) =>
  `<h1 style="margin:0 0 12px;font-size:22px;line-height:28px;font-weight:700;color:${TEXT};${FONT}">${escapeHtml(text)}</h1>`;

export const paragraph = (text: string) =>
  `<p style="margin:0 0 12px;font-size:15px;line-height:23px;color:${TEXT};${FONT}">${htmlValue(text)}</p>`;

export const note = (text: string) =>
  `<p style="margin:8px 0 0;font-size:13px;line-height:19px;color:${MUTED};${FONT}">${htmlValue(text)}</p>`;

export const button = (label: string, href: string) => `
  <table role="presentation" cellpadding="0" cellspacing="0" style="border-collapse:collapse;margin:24px 0 0;">
    <tr><td style="background:${BRAND};border-radius:6px;">
      <a href="${escapeHtml(href)}" style="display:inline-block;padding:12px 20px;font-size:15px;line-height:20px;font-weight:700;color:#ffffff;text-decoration:none;${FONT}">${escapeHtml(label)}</a>
    </td></tr>
  </table>`;

/** The page around every email: company name, the content, a one-line footer. */
export const shell = (preheader: string, content: string) => `<!doctype html>
<html lang="en"><head><meta charset="utf-8"><meta name="viewport" content="width=device-width,initial-scale=1"><title>Removals Nationwide</title></head>
<body style="margin:0;padding:0;background:#f4f5f7;${FONT}">
  <div style="display:none;max-height:0;overflow:hidden;opacity:0;color:transparent;">${escapeHtml(preheader)}</div>
  <table role="presentation" width="100%" cellpadding="0" cellspacing="0" style="border-collapse:collapse;background:#f4f5f7;">
    <tr><td align="center" style="padding:24px 12px;">
      <table role="presentation" width="100%" cellpadding="0" cellspacing="0" style="width:100%;max-width:560px;border-collapse:collapse;background:#ffffff;border:1px solid ${RULE};border-radius:8px;">
        <tr><td style="padding:24px 32px 16px;border-bottom:1px solid ${RULE};">
          <span style="font-size:17px;line-height:22px;font-weight:700;color:${TEXT};${FONT}">Removals <span style="color:${BRAND};">Nationwide</span></span>
        </td></tr>
        <tr><td style="padding:28px 32px 32px;">${content}</td></tr>
        <tr><td style="padding:16px 32px 20px;border-top:1px solid ${RULE};font-size:12px;line-height:18px;color:${MUTED};${FONT}">
          Removals Nationwide · Professional removals across the UK<br>Questions? Reply to this email.
        </td></tr>
      </table>
    </td></tr>
  </table>
</body></html>`;

/* ─── The emails ─── */

export type BookingSummary = {
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
  /** The customer's move details link, put in their email. */
  detailsUrl?: string;
};

export type Email = { subject: string; text: string; html: string };

const describe = (booking: BookingSummary) => ({
  moveType: moveLabels[booking.moveType] ?? booking.moveType,
  bedrooms: describeBedrooms(booking.moveType, booking.bedrooms),
  moveDate: formatMoveDate(booking.moveDate, booking.flexibleDates),
  distance: booking.routeDistance || "Not calculated",
  duration: booking.routeDuration || "Not calculated",
  // The autocomplete field already contains the customer's chosen location.
  // Showing its postcode again would duplicate the same information.
  collection: booking.fromAddress || booking.fromPostcode || "Not supplied",
  destination: booking.toAddress || booking.toPostcode || "Not supplied",
  notes: booking.notes || "None",
  reference: booking.bookingId.slice(0, 8).toUpperCase(),
});

/** To the office: a new booking request, with a button into the admin. */
export function newBookingForAdmin(booking: BookingSummary, adminUrl: string): Email {
  const d = describe(booking);
  const items: Row[] = [
    ["Reference", d.reference],
    ["Customer", booking.fullName],
    ["Phone", booking.phone],
    ["Email", booking.email],
    ["Collection", d.collection],
    ["Drop-off", d.destination],
    ["Distance", `${d.distance} · ${d.duration}`],
    ["Move", `${d.moveType} · ${d.bedrooms}`],
    ["Move date", d.moveDate],
    ["Notes", d.notes],
  ];
  return {
    subject: `New booking: ${d.collection} to ${d.destination}`,
    text: ["NEW BOOKING REQUEST", "", ...items.map(([l, v]) => `${l}: ${v}`), "", `Open in the admin: ${adminUrl}`].join("\n"),
    html: shell(
      `New booking from ${booking.fullName}: ${d.collection} to ${d.destination}`,
      heading("New booking request") +
        paragraph(`${booking.fullName} has asked for a quote. The details are below.`) +
        rows(items) +
        button("Open booking", adminUrl),
    ),
  };
}

/** To the customer: we have your request, here is what you told us, add your move details. */
export function confirmationForCustomer(booking: BookingSummary): Email {
  const d = describe(booking);
  const items: Row[] = [
    ["Reference", d.reference],
    ["Collection", d.collection],
    ["Drop-off", d.destination],
    ["Move", `${d.moveType} · ${d.bedrooms}`],
    ["Move date", d.moveDate],
    ["Notes", d.notes],
  ];
  const next =
    "One of our team will review your request and contact you to agree the price and the date. Your move is booked once those are agreed.";
  const detailsIntro =
    "To give you an accurate price, we need a few details about your property and the items you are moving. You can add them, with photos if you like, on your move details page.";
  return {
    subject: `We have received your booking request – #${d.reference}`,
    text: [
      `Hi ${booking.fullName},`,
      "",
      "Thank you for your booking request. We have received your details.",
      "",
      ...items.map(([l, v]) => `${l}: ${v}`),
      "",
      next,
      ...(booking.detailsUrl ? ["", detailsIntro, booking.detailsUrl, "This link is private to your move. Please do not share it."] : []),
      "",
      "Removals Nationwide",
    ].join("\n"),
    html: shell(
      `We have received your booking request, ${booking.fullName}.`,
      heading("Thank you, we have your booking request") +
        paragraph(`Hi ${booking.fullName}, here is what you sent us.`) +
        rows(items) +
        `<div style="margin-top:24px;">${paragraph(next)}</div>` +
        (booking.detailsUrl
          ? paragraph(detailsIntro) + button("Add your move details", booking.detailsUrl) + note("This link is private to your move. Please do not share it.")
          : ""),
    ),
  };
}

/** To the customer, from the admin: just the move details link. */
export function moveDetailsLinkForCustomer(booking: {
  fullName: string;
  moveType: string;
  fromPostcode: string;
  toPostcode: string;
  moveDate: string;
  flexibleDates: boolean;
  detailsUrl: string;
}): Email {
  const firstName = booking.fullName.split(" ")[0] || "there";
  const moveType = moveLabels[booking.moveType] ?? booking.moveType;
  const moveDate = formatMoveDate(booking.moveDate, booking.flexibleDates);
  const route = `${booking.fromPostcode} to ${booking.toPostcode}`;
  const intro =
    "To give you an accurate price, we need a few details about your property and the items you are moving. You can add them, with photos if you like, on your move details page.";
  return {
    subject: "Add your move details – Removals Nationwide",
    text: [
      `Hi ${firstName},`,
      "",
      `Thank you for your booking request with Removals Nationwide (${moveType}, ${route}, ${moveDate}).`,
      "",
      intro,
      booking.detailsUrl,
      "",
      "This link is private to your move. Please do not share it.",
      "",
      "Removals Nationwide",
    ].join("\n"),
    html: shell(
      "A few details about your move, all in one place.",
      heading("A few details about your move") +
        paragraph(`Hi ${firstName}, thank you for your booking request.`) +
        rows([
          ["Move", moveType],
          ["Route", route],
          ["Move date", moveDate],
        ]) +
        `<div style="margin-top:24px;">${paragraph(intro)}</div>` +
        button("Add your move details", booking.detailsUrl) +
        note("This link is private to your move. Please do not share it."),
    ),
  };
}

/** To the office: a customer has sent (or updated) their move details. */
export function moveDetailsReceivedForAdmin(data: {
  customerName: string;
  phone: string;
  email: string;
  moveType: string;
  fromPostcode: string;
  toPostcode: string;
  details: { label: string; value: string; list?: string[] }[];
  fileNames: string[];
  resubmitted: boolean;
  adminUrl: string;
}): Email {
  const headingText = data.resubmitted ? "Move details updated" : "Move details received";
  const route = `${data.fromPostcode} to ${data.toPostcode}`;
  const moveType = moveLabels[data.moveType] ?? data.moveType;
  const items: Row[] = [
    ["Customer", data.customerName],
    ["Phone", data.phone],
    ["Email", data.email],
    ["Move", `${moveType} · ${route}`],
    ...data.details.map((row): Row => [row.label, row.list?.length ? row.list.join("\n") : row.value]),
    ["Photos and files", data.fileNames.length ? `${data.fileNames.length}: ${data.fileNames.join(", ")}` : "None"],
  ];
  return {
    subject: `${headingText}: ${data.customerName}, ${route}`,
    text: [headingText.toUpperCase(), "", ...items.map(([l, v]) => `${l}: ${v}`), "", `Open in the admin: ${data.adminUrl}`].join("\n"),
    html: shell(
      `${headingText} from ${data.customerName}: ${route}`,
      heading(headingText) +
        paragraph(`${data.customerName} has ${data.resubmitted ? "updated" : "sent"} the details of their move.`) +
        rows(items) +
        button("Open booking", data.adminUrl),
    ),
  };
}
