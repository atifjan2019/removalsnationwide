import type { Metadata } from "next";
import { notFound } from "next/navigation";
import BookingHeader from "@/components/layout/BookingHeader";
import MoveDetailsForm from "@/components/booking/MoveDetailsForm";
import { CalendarIcon, MapPinIcon, VanIcon } from "@/components/ui/icons";
import { MOVE_TYPE_LABELS } from "@/lib/move-details";
import { loadMoveDetails, TOKEN_PATTERN } from "@/lib/move-details-server";
import { getResolvedSettings } from "@/lib/settings";

// A private page reached from the booking form and the confirmation email,
// never from search. The address is the key to it, so it is not indexed and
// is never sent on to another site as a referrer.
export const metadata: Metadata = {
  title: "Your move details",
  robots: { index: false, follow: false },
  referrer: "no-referrer",
};

// Each visit reads the booking's saved answers afresh: nothing here is shared
// between customers, so nothing here is cached.
export const dynamic = "force-dynamic";

// Sample booking for the local design preview at /move-details/preview/,
// which saves nothing and only exists outside production.
const PREVIEW = {
  enquiry: { moveType: "flat", fromPostcode: "SW1A 1AA", toPostcode: "M1 1AE", moveDate: "2026-11-21" },
  details: null,
  version: 0,
  saveId: null,
  updatedAt: null,
  submittedAt: null,
  files: [],
};

type Loaded = (typeof PREVIEW & { preview?: boolean; failed?: false }) | { failed: true; preview?: false };

/**
 * What a details link opens. Null for a link that matches no booking; `failed`
 * when the database could not be reached, which is not the customer's link
 * being wrong.
 */
async function load(token: string): Promise<Loaded | null> {
  if (process.env.NODE_ENV !== "production" && token === "preview") return { ...PREVIEW, preview: true };
  if (!TOKEN_PATTERN.test(token)) return null;
  try {
    return (await loadMoveDetails(token)) as Loaded | null;
  } catch (error) {
    console.error("Move details could not be loaded", error instanceof Error ? error.message : error);
    return { failed: true };
  }
}

export default async function MoveDetailsPage({ params }: { params: Promise<{ token: string }> }) {
  const { token } = await params;
  const [loaded, settings] = await Promise.all([load(token), getResolvedSettings()]);
  if (!loaded) notFound();

  const phone = settings.showPhone && settings.phonePrimary.label ? settings.phonePrimary : null;
  const header = (
    <BookingHeader
      logoUrl={settings.logoUrl}
      phonePrimary={settings.phonePrimary}
      whatsapp={settings.whatsapp}
      showPhone={settings.showPhone}
    />
  );

  if (loaded.failed) {
    return (
      <>
        {header}
        <main className="mx-auto max-w-2xl px-4 pb-16 pt-8 sm:px-6 sm:pt-10">
          <h1 className="text-3xl font-bold leading-tight text-black sm:text-4xl">We could not open your details just now</h1>
          <p className="mt-3 text-base leading-relaxed text-black/65">
            Nothing you have already sent is lost. Please try this link again in a minute
            {phone ? (
              <>
                , or call us on{" "}
                <a href={phone.href} className="font-semibold text-black underline underline-offset-4">
                  {phone.label}
                </a>
              </>
            ) : null}
            .
          </p>
        </main>
      </>
    );
  }

  const { enquiry, preview = false } = loaded;
  const date = enquiry.moveDate ? new Date(`${enquiry.moveDate}T12:00:00Z`) : null;
  const moveDate =
    date && !Number.isNaN(date.getTime())
      ? new Intl.DateTimeFormat("en-GB", { weekday: "short", day: "numeric", month: "long", year: "numeric", timeZone: "UTC" }).format(date)
      : "";
  const summary = [
    { icon: VanIcon, text: (MOVE_TYPE_LABELS as Record<string, string>)[enquiry.moveType] || enquiry.moveType },
    enquiry.fromPostcode && enquiry.toPostcode ? { icon: MapPinIcon, text: `${enquiry.fromPostcode} to ${enquiry.toPostcode}` } : null,
    moveDate ? { icon: CalendarIcon, text: moveDate } : null,
  ].filter((chip): chip is { icon: typeof VanIcon; text: string } => Boolean(chip?.text));

  return (
    <div className="min-h-screen bg-slate-50">
      {preview ? (
        <p className="bg-amber-100 px-4 py-2 text-center text-xs font-semibold text-amber-900">
          Design preview. Nothing on this page is sent to the office.
        </p>
      ) : null}
      {header}

      <main className="mx-auto max-w-2xl px-4 pb-16 pt-8 sm:px-6 sm:pt-10">
        <p className="text-xs font-bold uppercase tracking-wider text-brand-red">Booking request received</p>
        <h1 className="mt-2 text-3xl font-bold leading-tight text-black sm:text-4xl">A few details about your move</h1>
        <p className="mt-3 text-base leading-relaxed text-black/65">
          Answer these and we can give you an accurate price without the back and forth. It takes a couple of
          minutes, and we have emailed you this link too, so you can finish later.
        </p>

        <ul className="mt-5 flex flex-wrap gap-2">
          {summary.map(({ icon: Icon, text }) => (
            <li key={text} className="flex items-center gap-2 rounded-full border border-slate-200 bg-white px-3.5 py-1.5 text-sm font-medium text-black">
              <Icon className="h-4 w-4 text-brand-red" />
              {text}
            </li>
          ))}
        </ul>

        <div className="mt-7">
          <MoveDetailsForm
            enquiry={enquiry}
            token={token}
            apiBase="/api"
            initial={{
              details: loaded.details || null,
              version: loaded.version ?? 0,
              submittedAt: loaded.submittedAt || null,
              updatedAt: loaded.updatedAt || null,
              files: loaded.files || [],
            }}
            preview={preview}
          />
        </div>
      </main>
    </div>
  );
}
