"use server";

import { revalidatePath } from "next/cache";
import { after } from "next/server";
import { logActivity } from "@/lib/admin-dashboard";
import { sendMoveDetailsReceived } from "@/lib/booking-email";
import {
  DETAILS_EMAILED_EVENT,
  HttpError,
  submitMoveDetails as submitDetails,
  TOKEN_PATTERN,
} from "@/lib/move-details-server";

const SECTIONS = ["from", "to", "items", "dismantle", "movers"];

/**
 * The customer pressing "Send my move details". Open to the public, like the
 * booking form: the token in the customer's link is what authorises it, and
 * the answers are checked again on the server. It is a server action, rather
 * than a call from the browser like the saves, so that details can never be
 * marked as sent without the office being emailed.
 *
 * `payload` is { details, baseVersion, saveId, sentIds }: the answers, and
 * which version of them the page started from, so a page that has fallen
 * behind another device cannot send the office an old copy.
 */
export async function submitMoveDetails(token: unknown, payload: unknown) {
  if (typeof token !== "string" || !TOKEN_PATTERN.test(token)) {
    return { success: false, error: "This link is not valid. Please use the link in your email, or call us." };
  }
  const details = (payload as { details?: unknown } | null)?.details;
  if (!details || typeof details !== "object" || Array.isArray(details)) {
    return { success: false, error: "We could not read your answers. Please refresh the page and try again." };
  }

  let result;
  try {
    result = await submitDetails(token, payload);
  } catch (error) {
    if (error instanceof HttpError && error.status === 404) {
      return { success: false, error: "This link is no longer in use. Please call us and we will take your details." };
    }
    if (error instanceof HttpError && error.status === 429) {
      return {
        success: false,
        error: "Your answers are saved, but they have already been sent to us several times today. Please call us if something has changed.",
      };
    }
    if (error instanceof HttpError && error.status === 400 && error.details) {
      // Which sections the server found unfinished, for the form to point at.
      const fields = Object.fromEntries(
        SECTIONS.filter((key) => typeof error.details?.[key] === "string").map((key) => [key, error.details?.[key]]),
      );
      return { success: false, error: "Some answers are missing above.", fields };
    }
    console.error("Move details could not be sent", error instanceof Error ? error.message : error);
    return { success: false, error: "We could not send your details just now. Please try again in a minute, or call us." };
  }

  // Changed on another device since this page last looked: the form puts the
  // two sets of answers together and asks the customer to check them.
  if (!result.ok) return { success: false, conflict: true, current: result.conflict };

  // The office is due an email for a send with something new in it, or for a
  // repeat of one it was never emailed about. It goes after the response,
  // rather than holding the customer on a slow mail server, and is recorded
  // once it has gone, which is how the next send knows.
  const sent = result.data;
  if (sent.notify) {
    after(async () => {
      const outcome = await sendMoveDetailsReceived(sent);
      if (!outcome.sent) {
        console.error("Move details email to the office failed:", outcome.error);
        return;
      }
      try {
        await logActivity(DETAILS_EMAILED_EVENT, `Office emailed ${sent.booking.customer.fullName}'s move details`, sent.booking.id, "api");
      } catch (error) {
        console.error("Could not record the move details email", error);
      }
    });
  }

  revalidatePath("/admin/bookings");
  return { success: true, version: sent.version ?? null };
}
