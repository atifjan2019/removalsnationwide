import "server-only";

import { sendSmtpEmail } from "@/lib/smtp";
import { getSmtpConfiguration } from "@/lib/smtp-settings";

const ADMIN_EMAIL = "atifjan2019@gmail.com";
const ADMIN_BOOKINGS_URL = "https://removalsnationwide.uk/admin/bookings/";

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

const htmlValue = (value: string) => escapeHtml(value).replaceAll("\n", "<br>");

const formatMoveDate = (value: string, flexible: boolean) => {
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

const detailRow = (label: string, value: string, last = false) => `
  <tr>
    <td style="padding:14px 0;${last ? "" : "border-bottom:1px solid #e7ebf1;"}">
      <div style="font-size:11px;line-height:16px;letter-spacing:.08em;text-transform:uppercase;color:#718096;font-weight:700;">${escapeHtml(label)}</div>
      <div style="padding-top:3px;font-size:15px;line-height:22px;color:#17233c;font-weight:600;">${htmlValue(value)}</div>
    </td>
  </tr>`;

const routeCard = (collection: string, destination: string) => `
  <table role="presentation" width="100%" cellpadding="0" cellspacing="0" style="border-collapse:separate;background:#f7f9fc;border:1px solid #e2e8f0;border-radius:14px;">
    <tr>
      <td width="42" style="padding:20px 0 6px 20px;vertical-align:top;">
        <div style="width:12px;height:12px;border-radius:50%;background:#d71920;border:4px solid #fde8e9;font-size:0;line-height:0;">&nbsp;</div>
      </td>
      <td style="padding:18px 20px 10px 4px;">
        <div style="font-size:11px;line-height:16px;letter-spacing:.08em;text-transform:uppercase;color:#718096;font-weight:700;">Collection</div>
        <div style="padding-top:3px;font-size:15px;line-height:22px;color:#17233c;font-weight:700;">${htmlValue(collection)}</div>
      </td>
    </tr>
    <tr>
      <td width="42" style="padding:7px 0 20px 20px;vertical-align:top;">
        <div style="width:12px;height:12px;border-radius:3px;background:#17233c;border:4px solid #e5eaf1;font-size:0;line-height:0;">&nbsp;</div>
      </td>
      <td style="padding:5px 20px 18px 4px;">
        <div style="font-size:11px;line-height:16px;letter-spacing:.08em;text-transform:uppercase;color:#718096;font-weight:700;">Drop-off</div>
        <div style="padding-top:3px;font-size:15px;line-height:22px;color:#17233c;font-weight:700;">${htmlValue(destination)}</div>
      </td>
    </tr>
  </table>`;

const emailShell = (preheader: string, content: string) => `<!doctype html>
<html lang="en"><head><meta charset="utf-8"><meta name="viewport" content="width=device-width,initial-scale=1"></head>
<body style="margin:0;padding:0;background:#eef1f5;color:#17233c;font-family:Arial,Helvetica,sans-serif;">
  <div style="display:none;max-height:0;overflow:hidden;opacity:0;color:transparent;">${escapeHtml(preheader)}</div>
  <table role="presentation" width="100%" cellpadding="0" cellspacing="0" style="border-collapse:collapse;background:#eef1f5;">
    <tr><td align="center" style="padding:32px 12px;">
      <table role="presentation" width="100%" cellpadding="0" cellspacing="0" style="width:100%;max-width:640px;border-collapse:separate;background:#ffffff;border-radius:18px;box-shadow:0 8px 28px rgba(23,35,60,.08);overflow:hidden;">
        <tr><td style="padding:22px 30px;background:#111d36;border-bottom:4px solid #d71920;">
          <div style="font-size:19px;line-height:24px;font-weight:800;letter-spacing:.01em;color:#ffffff;">REMOVALS <span style="color:#ef3340;">NATIONWIDE</span></div>
          <div style="padding-top:3px;font-size:11px;line-height:16px;letter-spacing:.12em;text-transform:uppercase;color:#aeb8ca;">Moving made simple</div>
        </td></tr>
        <tr><td style="padding:32px 30px 28px;">${content}</td></tr>
        <tr><td style="padding:20px 30px;background:#111d36;text-align:center;">
          <div style="font-size:13px;line-height:20px;color:#dbe2ee;">Removals Nationwide &nbsp;&bull;&nbsp; Professional removals across the UK</div>
          <div style="padding-top:5px;font-size:12px;line-height:18px;color:#91a0b8;">Questions? Reply directly to this email.</div>
        </td></tr>
      </table>
    </td></tr>
  </table>
</body></html>`;

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
          : `${booking.bedrooms}${booking.bedrooms >= 5 ? "+" : ""} bedroom${booking.bedrooms === 1 ? "" : "s"}`
        : "Not applicable";
    const moveDate = formatMoveDate(booking.moveDate, booking.flexibleDates);
    const distance = booking.routeDistance || "Not calculated";
    const duration = booking.routeDuration || "Not calculated";
    // The autocomplete field already contains the customer's chosen location.
    // Showing its postcode again would duplicate the same information.
    const collection = booking.fromAddress || booking.fromPostcode || "Not supplied";
    const destination = booking.toAddress || booking.toPostcode || "Not supplied";
    const notes = booking.notes || "No additional notes";
    const shortReference = booking.bookingId.slice(0, 8).toUpperCase();

    const adminText = [
      "NEW BOOKING REQUEST",
      "",
      `Reference: ${booking.bookingId}`,
      `Customer: ${booking.fullName}`,
      `Phone: ${booking.phone}`,
      `Email: ${booking.email}`,
      `Collection: ${collection}`,
      `Drop-off: ${destination}`,
      `Driving distance: ${distance}`,
      `Estimated duration: ${duration}`,
      `Move type: ${moveType}`,
      `Property size: ${bedrooms}`,
      `Move date: ${moveDate}`,
      `Notes: ${notes}`,
    ].join("\n");

    const adminHtml = emailShell(
      `New booking from ${booking.fullName}: ${collection} to ${destination}`,
      `<div style="font-size:12px;line-height:18px;letter-spacing:.1em;text-transform:uppercase;color:#d71920;font-weight:800;">New booking request</div>
       <h1 style="margin:7px 0 8px;font-size:28px;line-height:35px;color:#17233c;">A new move is ready to review</h1>
       <div style="font-size:13px;line-height:20px;color:#718096;">Reference <span style="display:inline-block;padding:3px 8px;margin-left:4px;background:#eef1f5;border-radius:6px;font-family:Courier New,monospace;color:#17233c;font-weight:700;">#${escapeHtml(shortReference)}</span></div>
       <div style="height:24px;line-height:24px;">&nbsp;</div>
       ${routeCard(collection, destination)}
       <table role="presentation" width="100%" cellpadding="0" cellspacing="0" style="margin-top:14px;border-collapse:separate;">
         <tr>
           <td width="48%" style="padding:16px;background:#fff5f5;border:1px solid #fed7d7;border-radius:12px;">
             <div style="font-size:11px;letter-spacing:.08em;text-transform:uppercase;color:#a33a3f;font-weight:700;">Driving distance</div>
             <div style="padding-top:5px;font-size:20px;line-height:26px;color:#17233c;font-weight:800;">${htmlValue(distance)}</div>
           </td>
           <td width="4%">&nbsp;</td>
           <td width="48%" style="padding:16px;background:#f2f6fb;border:1px solid #dce5f0;border-radius:12px;">
             <div style="font-size:11px;letter-spacing:.08em;text-transform:uppercase;color:#52647e;font-weight:700;">Estimated duration</div>
             <div style="padding-top:5px;font-size:20px;line-height:26px;color:#17233c;font-weight:800;">${htmlValue(duration)}</div>
           </td>
         </tr>
       </table>
       <h2 style="margin:28px 0 6px;font-size:18px;line-height:25px;color:#17233c;">Customer &amp; move details</h2>
       <table role="presentation" width="100%" cellpadding="0" cellspacing="0" style="border-collapse:collapse;">
         ${detailRow("Customer", booking.fullName)}
         ${detailRow("Phone", booking.phone)}
         ${detailRow("Email", booking.email)}
         ${detailRow("Move", `${moveType} · ${bedrooms}`)}
         ${detailRow("Move date", moveDate)}
         ${detailRow("Additional notes", notes, true)}
       </table>
       <div style="padding-top:24px;text-align:center;">
         <a href="${ADMIN_BOOKINGS_URL}" style="display:inline-block;padding:13px 22px;background:#d71920;border-radius:9px;color:#ffffff;text-decoration:none;font-size:14px;line-height:20px;font-weight:800;">Open booking details</a>
       </div>`,
    );

    const customerText = [
      `Hi ${booking.fullName},`,
      "",
      "Thank you for your booking request. We have received your details and our team will contact you shortly.",
      "",
      `Reference: ${booking.bookingId}`,
      `Collection: ${collection}`,
      `Drop-off: ${destination}`,
      `Move type: ${moveType}`,
      `Property size: ${bedrooms}`,
      `Move date: ${moveDate}`,
      `Notes: ${notes}`,
      "",
      "Removals Nationwide",
    ].join("\n");

    const customerHtml = emailShell(
      `We have received your booking request, ${booking.fullName}.`,
      `<div style="width:44px;height:44px;border-radius:50%;background:#e9f8ef;color:#178044;text-align:center;font-size:24px;line-height:44px;font-weight:800;">&#10003;</div>
       <h1 style="margin:16px 0 9px;font-size:28px;line-height:35px;color:#17233c;">Booking request received</h1>
       <p style="margin:0;font-size:16px;line-height:25px;color:#4a5870;">Hi ${escapeHtml(booking.fullName)}, thank you for choosing Removals Nationwide. Our team has your details and will contact you shortly.</p>
       <div style="margin:22px 0 24px;padding:12px 15px;background:#f7f9fc;border-left:4px solid #d71920;border-radius:6px;font-size:13px;line-height:20px;color:#52647e;">Your reference is <strong style="color:#17233c;font-family:Courier New,monospace;">#${escapeHtml(shortReference)}</strong></div>
       ${routeCard(collection, destination)}
       <h2 style="margin:28px 0 6px;font-size:18px;line-height:25px;color:#17233c;">Your move details</h2>
       <table role="presentation" width="100%" cellpadding="0" cellspacing="0" style="border-collapse:collapse;">
         ${detailRow("Move", `${moveType} · ${bedrooms}`)}
         ${detailRow("Move date", moveDate)}
         ${detailRow("Additional notes", notes, true)}
       </table>
       <div style="margin-top:24px;padding:17px 18px;background:#fff7e6;border:1px solid #f7dfad;border-radius:10px;font-size:14px;line-height:22px;color:#674b16;"><strong>What happens next?</strong><br>One of our moving specialists will review your request and contact you to confirm the details.</div>`,
    );

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
        subject: `New booking: ${collection} to ${destination}`,
        text: adminText,
        html: adminHtml,
      }),
      ...(customerEmail
        ? [
            sendSmtpEmail({
              ...smtp,
              to: customerEmail,
              replyTo: ADMIN_EMAIL,
              subject: `Your booking request is confirmed – #${shortReference}`,
              text: customerText,
              html: customerHtml,
            }),
          ]
        : []),
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
