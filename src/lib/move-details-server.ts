import "server-only";
import { getCloudflareContext } from "@opennextjs/cloudflare";

/**
 * The move details a customer gives on their private /move-details/<token>/
 * page after booking: their answers, saved as they type, and the photos and
 * documents they attach. Everything here is reached with the token in the
 * customer's link and nothing else, so every input is checked as if it came
 * from a stranger.
 *
 * Saves name the version of the answers they started from. A save from a page
 * that has fallen behind another device is turned away with the current
 * answers (409), and the form lays its own changes over them answer by answer
 * (see src/lib/move-details-merge.js). A page left open can therefore never
 * replace newer answers with old ones.
 */

const PROPERTY_TYPES = ["house", "flat", "other"] as const;
const FLOORS = ["ground", "1", "2", "3", "4+"] as const;
const YES_NO = ["yes", "no"] as const;
const BOX_RANGES = ["none", "1-10", "11-20", "21-40", "40+"] as const;
const MOVER_OPTIONS = ["1", "2", "3", "4+", "unsure"] as const;

type PlaceDetails = {
  type: (typeof PROPERTY_TYPES)[number] | "";
  floor: (typeof FLOORS)[number] | "";
  lift: (typeof YES_NO)[number] | "";
};

// A question that has not been answered is "", never missing:
// sanitizeDetails() builds exactly this shape from whatever a request sends,
// and the form relies on getting it back.
export type MoveDetails = {
  from: PlaceDetails;
  to: PlaceDetails;
  items: Record<string, number>;
  boxes: (typeof BOX_RANGES)[number] | "";
  itemsNotes: string;
  dismantle: (typeof YES_NO)[number] | "";
  dismantleNotes: string;
  movers: (typeof MOVER_OPTIONS)[number] | "";
  notes: string;
};

// A booking as the move details routes need it, found by its token.
type DetailsBookingRow = {
  id: string;
  move_type: string;
  from_postcode: string;
  to_postcode: string;
  move_date: string;
  details: string | null;
  details_version: number;
  details_save_id: string | null;
  details_updated_at: string | null;
  details_submitted_at: string | null;
  full_name: string;
  phone: string;
  email: string;
};

type BookingFileRow = {
  id: string;
  client_id: string | null;
  name: string;
  content_type: string;
  size: number;
  is_image: number;
  thumb: string | null;
  created_at: string;
};

type NewBookingFile = {
  id: string;
  bookingId: string;
  clientId: string | null;
  name: string;
  contentType: string;
  size: number;
  isImage: boolean;
  thumb: string | null;
  r2Key: string;
};

export const DETAILS_LINK_NOT_FOUND = "Move details link not found";
const DETAILS_CHANGED_ELSEWHERE = "These answers have been changed somewhere else";
const MAX_DETAILS_BODY_BYTES = 20 * 1024;
// The office is emailed when details are sent with something new in them. One
// booking can only be sent that way this many times in a day: after that a
// send is refused (the answers themselves are still saved as they are typed),
// so whoever holds a link cannot use it to flood the office's inbox.
const MAX_DETAILS_SENDS_PER_DAY = 5;
const MAX_NOTES_LENGTH = 2000;
const MAX_DISMANTLE_NOTES_LENGTH = 1000;
const MAX_ITEM_ENTRIES = 60;
const MAX_ITEM_NAME_LENGTH = 60;
const MAX_ITEM_COUNT = 99;

const MAX_FILES_PER_BOOKING = 12;
const MAX_FILE_BYTES = 15 * 1024 * 1024;
// A brake on the service as a whole, not on one customer. Anyone can book and
// so be given a link, and the per-booking limits alone would not stop a script
// filling the bucket, or the database with thumbnails, through thousands of
// them. A normal day comes nowhere near either figure.
const MAX_UPLOAD_BYTES_PER_DAY = 2 * 1024 * 1024 * 1024;
const MAX_UPLOAD_FILES_PER_DAY = 1500;
// An upload also carries its form fields and a thumbnail.
const MAX_UPLOAD_BODY_BYTES = MAX_FILE_BYTES + 1024 * 1024;
const MAX_FILE_NAME_LENGTH = 120;
// The form's previews are 200 px JPEGs of a few thousand characters. They are
// stored in the database, so their length and declared size are capped.
const MAX_THUMB_LENGTH = 24_000;
const MAX_THUMB_SIDE = 320;
// How many removed files a booking keeps a note of. Far more than twelve
// files' worth of adding and removing; the cap only stops a link filling the table.
const MAX_REMOVED_PER_BOOKING = 200;
const MAX_SENT_IDS = 20;

// Times are kept in the same ISO format as the rest of the database, so they
// sort and compare as text.
const NOW = "strftime('%Y-%m-%dT%H:%M:%fZ', 'now')";
const A_DAY_AGO = "strftime('%Y-%m-%dT%H:%M:%fZ', 'now', '-1 day')";
// The time of a change to the details. One made in the same millisecond as
// they were sent is put just after it: "changed after it was sent" has to be
// true of every change, however quick.
const DETAILS_SAVED_NOW = `CASE
  WHEN details_submitted_at IS NOT NULL AND ${NOW} <= details_submitted_at
    THEN strftime('%Y-%m-%dT%H:%M:%fZ', details_submitted_at, '+0.001 seconds')
  ELSE ${NOW}
END`;

// Activity log entries this feature writes and counts.
export const DETAILS_SENT_EVENT = "Move details sent";
export const DETAILS_EMAILED_EVENT = "Move details emailed";
export const DETAILS_LINK_EVENT = "Details link emailed";

// What a customer may upload, by file extension, with the content type each is
// stored and served as. The type always comes from these tables and never from
// the browser, so a file cannot be labelled as something that would run when
// the office opens it. SVG is left out on purpose: it is an image that can
// carry script. Keep in step with src/lib/move-details.js.
const IMAGE_TYPES = new Map([
  ["jpg", "image/jpeg"],
  ["jpeg", "image/jpeg"],
  ["png", "image/png"],
  ["webp", "image/webp"],
  ["gif", "image/gif"],
  ["heic", "image/heic"],
  ["heif", "image/heif"],
  ["avif", "image/avif"],
  ["bmp", "image/bmp"],
]);
const DOCUMENT_TYPES = new Map([
  ["pdf", "application/pdf"],
  ["txt", "text/plain"],
  ["csv", "text/csv"],
  ["doc", "application/msword"],
  ["docx", "application/vnd.openxmlformats-officedocument.wordprocessingml.document"],
  ["xls", "application/vnd.ms-excel"],
  ["xlsx", "application/vnd.openxmlformats-officedocument.spreadsheetml.sheet"],
  ["rtf", "application/rtf"],
  ["odt", "application/vnd.oasis.opendocument.text"],
  ["ods", "application/vnd.oasis.opendocument.spreadsheet"],
  ["pages", "application/vnd.apple.pages"],
  ["numbers", "application/vnd.apple.numbers"],
]);
// Types a browser gives to web pages and scripts. A document that arrives
// calling itself one of these is not the document its name says it is.
const ACTIVE_CONTENT_TYPE = /html|javascript|ecmascript|svg|^(?:text|application)\/xml$/;
export const TOKEN_PATTERN = /^[A-Za-z0-9_-]{43}$/;
const THUMB_PREFIX = "data:image/jpeg;base64,";
const THUMB_PATTERN = /^data:image\/jpeg;base64,[A-Za-z0-9+/]+={0,2}$/;
// Ids the form makes up: one for each save of the answers, one for each file.
const SAVE_ID_PATTERN = /^[A-Za-z0-9_-]{1,40}$/;
const CLIENT_ID_PATTERN = /^[A-Za-z0-9_-]{1,64}$/;

export class HttpError extends Error {
  constructor(
    message: string,
    readonly status: number,
    readonly details?: Record<string, string>,
  ) {
    super(message);
  }
}

async function bindings() {
  const { env, ctx } = await getCloudflareContext({ async: true });
  if (!env.DB || !env.UPLOADS) throw new Error("The DB and UPLOADS bindings are required for move details.");
  return { db: env.DB, uploads: env.UPLOADS, ctx };
}

const NO_STORE = { "Cache-Control": "no-store" };

function json(payload: unknown, status = 200): Response {
  return Response.json(payload, { status, headers: NO_STORE });
}

function failure(message: string, status: number): Response {
  return json({ error: { message } }, status);
}

/**
 * Runs a route's work and turns a thrown HttpError into its JSON answer. Any
 * other error is logged and answered with a 500 that gives nothing away.
 */
export async function respond(work: () => Promise<Response>): Promise<Response> {
  try {
    return await work();
  } catch (error) {
    if (error instanceof HttpError) {
      return json({ error: { message: error.message, ...(error.details ? { details: error.details } : {}) } }, error.status);
    }
    console.error("Move details request failed", error);
    return failure("Something went wrong. Please try again.", 500);
  }
}

/* ─── The customer's routes ─── */

/** GET /api/move-details/<token>/: the answers and files as they stand. */
export async function getMoveDetails(token: string): Promise<Response> {
  const data = await loadMoveDetails(token);
  return data ? json({ data }) : failure(DETAILS_LINK_NOT_FOUND, 404);
}

/**
 * What a details link opens, for the page and for GET. Only what belongs to
 * this one booking: not the customer's name, phone or email, the booking id,
 * the price or the office's notes. Null for a link that matches no booking.
 */
export async function loadMoveDetails(token: string) {
  const { db } = await bindings();
  const booking = await findBookingByToken(db, token);
  if (!booking) return null;
  const files = await listBookingFiles(db, booking.id);
  return {
    enquiry: {
      moveType: booking.move_type,
      fromPostcode: booking.from_postcode,
      toPostcode: booking.to_postcode,
      moveDate: booking.move_date,
    },
    ...currentDetails(booking),
    files: files.map(toPublicFile),
  };
}

/**
 * PUT /api/move-details/<token>/: saves the answers as the customer types.
 * Allowed after the details have been sent as well, so a customer can come
 * back and correct something.
 */
export async function saveMoveDetails(token: string, request: Request): Promise<Response> {
  const { db } = await bindings();
  const booking = await findBookingByToken(db, token);
  if (!booking) return failure(DETAILS_LINK_NOT_FOUND, 404);

  const body = await readJson(request, MAX_DETAILS_BODY_BYTES);
  // A body with no details in it would otherwise be sanitised into a blank set
  // of answers and saved over the real ones.
  if (!isRecord(body) || !isRecord(body.details)) return failure("details must be an object", 400);

  const basis = readSaveBasis(body);
  if (isStaleBasis(basis, booking)) return detailsConflict(booking);

  const detailsJson = JSON.stringify(sanitizeDetails(body.details));

  // The same answers again are not a change, so they leave the version and the
  // last-saved time where they are: that time moving is what tells the office,
  // and a second send, that something is different.
  if (booking.details === detailsJson) {
    return json({ data: { updatedAt: booking.details_updated_at, version: booking.details_version } });
  }

  // Only written if the version is still the one checked above, so a save that
  // arrived in between is not overwritten either.
  const saved = await db
    .prepare(
      `update bookings
       set details = ?1, details_version = details_version + 1, details_save_id = ?3,
           details_updated_at = ${DETAILS_SAVED_NOW}
       where id = ?2 and details_version = ?4
       returning details_updated_at, details_version`,
    )
    .bind(detailsJson, booking.id, basis.saveId, booking.details_version)
    .first<{ details_updated_at: string; details_version: number }>();

  if (!saved) {
    const latest = await findBookingByToken(db, token);
    return latest ? detailsConflict(latest) : failure(DETAILS_LINK_NOT_FOUND, 404);
  }
  return json({ data: { updatedAt: saved.details_updated_at, version: saved.details_version } });
}

/** POST /api/move-details/<token>/files/: one photo or document. */
export async function uploadMoveDetailsFile(token: string, request: Request): Promise<Response> {
  const { db, uploads, ctx } = await bindings();
  const booking = await findBookingByToken(db, token);
  if (!booking) return failure(DETAILS_LINK_NOT_FOUND, 404);

  const refuse = (outcome: "full" | "paused") =>
    outcome === "full"
      ? failure(`This booking already has ${MAX_FILES_PER_BOOKING} files`, 409)
      : failure("Uploads are paused for the moment. Please try again later.", 503);

  // The form gives each file an id of its own and sends it with every attempt,
  // in the address as well as in the body. A phone can lose its connection
  // after the file has arrived and before the reply gets back; the form then
  // tries again, and the id is how that second attempt is recognised and
  // answered with the file already stored. It is looked for before the limits:
  // the repeat of a booking's twelfth file must not be told the booking is full.
  const hintedId = cleanClientId(new URL(request.url).searchParams.get("clientId"));

  // A file the customer has removed never comes back: not from a copy still
  // waiting on another device or tab, nor from a retry that went out before
  // the removal.
  if (hintedId && (await wasRemoved(db, booking.id, hintedId))) return fileRemoved();
  const hinted = hintedId ? await findFileByClientId(db, booking.id, hintedId) : null;
  if (hinted) return json({ data: toPublicFile(hinted) });

  // An early answer for a booking that is already full, or a day that is,
  // before the upload is read. The insert in storeFile() is what actually
  // holds both limits.
  const room = await db
    .prepare(
      `select
         (select count(*) from booking_files where booking_id = ?1) as for_booking,
         (select count(*) from booking_files where created_at > ${A_DAY_AGO}) as files_today,
         (select coalesce(sum(size), 0) from booking_files where created_at > ${A_DAY_AGO}) as bytes_today`,
    )
    .bind(booking.id)
    .first<{ for_booking: number; files_today: number; bytes_today: number }>();
  if ((room?.for_booking ?? 0) >= MAX_FILES_PER_BOOKING) return refuse("full");
  if ((room?.files_today ?? 0) >= MAX_UPLOAD_FILES_PER_DAY || (room?.bytes_today ?? 0) >= MAX_UPLOAD_BYTES_PER_DAY) {
    return refuse("paused");
  }

  const form = await readFormData(request, MAX_UPLOAD_BODY_BYTES);
  const file = form.get("file");
  if (!(file instanceof File)) return failure("A file is required", 400);
  if (file.size === 0) return failure("That file is empty", 400);
  // file.size is the number of bytes that arrived, not a figure the sender supplied.
  if (file.size > MAX_FILE_BYTES) return failure("That file is larger than 15 MB", 413);

  const name = cleanFileName(file.name);
  const type = acceptedFileType(name, file.type);
  if (!type) return failure("That file type is not accepted", 415);

  // A client that sent the id only in the body (the form sends both).
  const clientId = cleanClientId(form.get("clientId")) ?? hintedId;
  if (clientId && clientId !== hintedId && (await wasRemoved(db, booking.id, clientId))) return fileRemoved();
  const already = clientId && clientId !== hintedId ? await findFileByClientId(db, booking.id, clientId) : null;
  if (already) return json({ data: toPublicFile(already) });

  // Whether a file is an image is decided by its name alone, so a document
  // cannot be passed off as a photo to get a thumbnail stored or be shown inline.
  const id = crypto.randomUUID();
  const record: NewBookingFile = {
    id,
    bookingId: booking.id,
    clientId,
    name,
    contentType: type.contentType,
    size: file.size,
    isImage: type.isImage,
    thumb: type.isImage ? cleanThumb(form.get("thumb")) : null,
    r2Key: `move-details/${booking.id}/${id}`,
  };

  // A phone can drop its connection the moment the upload completes.
  // waitUntil() lets the two steps of storing a file finish together even then.
  const stored = storeFile(db, uploads, record, file);
  ctx.waitUntil(stored.catch(() => undefined));
  const outcome = await stored;

  if (outcome === "repeat") {
    const winner = clientId ? await findFileByClientId(db, booking.id, clientId) : null;
    if (winner) return json({ data: toPublicFile(winner) });
    throw new Error("A repeated upload could not be matched to its file");
  }
  if (outcome === "removed") return fileRemoved();
  if (outcome !== "stored") return refuse(outcome);

  return json(
    {
      data: {
        id: record.id,
        clientId: record.clientId,
        name: record.name,
        isImage: record.isImage,
        size: record.size,
        thumb: record.thumb,
      },
    },
    201,
  );
}

/** DELETE /api/move-details/<token>/files/<id>/: by the file's id, or by the form's id for it. */
export async function deleteMoveDetailsFile(token: string, fileId: string): Promise<Response> {
  const { db, uploads } = await bindings();
  const booking = await findBookingByToken(db, token);
  if (!booking) return failure(DETAILS_LINK_NOT_FOUND, 404);

  // The id is noted as removed before anything is looked up. An upload of the
  // same file that is still landing is then refused at its insert (storeFile),
  // and one that got there first is found below, so a file removed at any
  // moment of its upload is gone either way. The note is kept per booking.
  const namedId = cleanClientId(fileId);
  if (namedId) await recordRemoved(db, booking.id, namedId);

  // Matching on the booking as well as the file is what stops one customer's
  // link removing another customer's file.
  const file = await db
    .prepare("select id, client_id, r2_key from booking_files where booking_id = ?2 and (id = ?1 or client_id = ?1)")
    .bind(fileId, booking.id)
    .first<{ id: string; client_id: string | null; r2_key: string }>();
  if (!file) return failure("File not found", 404);

  if (file.client_id && file.client_id !== namedId) await recordRemoved(db, booking.id, file.client_id);

  // The object goes first. If that fails the row is still there, so the file
  // stays listed and the customer can remove it again.
  await uploads.delete(file.r2_key);
  await db.prepare("delete from booking_files where id = ?1 and booking_id = ?2").bind(file.id, booking.id).run();
  await touchDetails(db, booking.id);
  return new Response(null, { status: 204, headers: NO_STORE });
}

export type SubmittedDetails = {
  submittedAt: string | null;
  version: number;
  resubmitted: boolean;
  changed: boolean;
  notify: boolean;
  booking: {
    id: string;
    moveType: string;
    fromPostcode: string;
    toPostcode: string;
    moveDate: string;
    customer: { fullName: string; phone: string; email: string };
  };
  details: MoveDetails;
  files: { id: string; name: string; isImage: boolean; size: number }[];
};

/**
 * The customer pressing "Send my move details". Called from the server action
 * rather than from the browser, so that details can never be marked as sent
 * without the office being emailed. Throws HttpError with status 404, 409
 * (`details` then holds no fields; see `conflict`), 429 or 400 (with the
 * unfinished sections in `details`).
 */
export async function submitMoveDetails(
  token: string,
  body: unknown,
): Promise<{ ok: true; data: SubmittedDetails } | { ok: false; conflict: ReturnType<typeof currentDetails> }> {
  const { db } = await bindings();
  const booking = await findBookingByToken(db, token);
  if (!booking) throw new HttpError(DETAILS_LINK_NOT_FOUND, 404);

  // The same check as a save: answers sent from a page that has fallen behind
  // are turned away, so the office is never emailed an old copy.
  if (isRecord(body) && isStaleBasis(readSaveBasis(body), booking)) {
    return { ok: false, conflict: currentDetails(booking) };
  }

  const details = sanitizeDetails(isRecord(body) ? body.details : undefined);
  const files = await listBookingFiles(db, booking.id);
  const errors = validateMoveDetails(details, files.length);
  if (Object.keys(errors).length) throw new HttpError("Move details are incomplete", 400, errors);

  const detailsJson = JSON.stringify(details);
  const resubmitted = booking.details_submitted_at !== null;
  const newAnswers = booking.details !== detailsJson;
  // Sent before, with no answer saved and no file added or removed since (any
  // of those moves the last-saved time on), and the same answers again now:
  // the office already has exactly this, and nothing new is recorded.
  const changed = !resubmitted || booking.details_updated_at !== booking.details_submitted_at || newAnswers;
  let submittedAt = booking.details_submitted_at;
  let version = booking.details_version;

  // What has been recorded for this booking lately: sends with something new
  // in them, and the emails the site managed to send the office about them.
  const recent = await db
    .prepare(
      `select
         coalesce(sum(case when event_type = ?2 and created_at > ${A_DAY_AGO} then 1 else 0 end), 0) as sends_today,
         coalesce(sum(case when event_type = ?3 and created_at > ${A_DAY_AGO} then 1 else 0 end), 0) as emails_today,
         max(case when event_type = ?3 then created_at end) as last_email
       from activity_log
       where related_id = ?1 and event_type in (?2, ?3)`,
    )
    .bind(booking.id, DETAILS_SENT_EVENT, DETAILS_EMAILED_EVENT)
    .first<{ sends_today: number; emails_today: number; last_email: string | null }>();

  // Refused rather than recorded without an email: details are never marked as
  // sent unless the office is going to be told.
  if (changed && (recent?.sends_today ?? 0) >= MAX_DETAILS_SENDS_PER_DAY) {
    throw new HttpError("These details have been sent too many times today", 429);
  }

  if (changed) {
    const saveId = isRecord(body) ? readSaveBasis(body).saveId : null;
    const saved = await db
      .prepare(
        `update bookings
         set details = ?1,
             details_version = details_version + ?3,
             details_save_id = case when ?3 = 1 then ?4 else details_save_id end,
             details_updated_at = ${NOW},
             details_submitted_at = ${NOW}
         where id = ?2 and details_version = ?5
         returning details_submitted_at, details_version`,
      )
      .bind(detailsJson, booking.id, newAnswers ? 1 : 0, saveId, booking.details_version)
      .first<{ details_submitted_at: string; details_version: number }>();

    if (!saved) {
      const latest = await findBookingByToken(db, token);
      if (!latest) throw new HttpError(DETAILS_LINK_NOT_FOUND, 404);
      return { ok: false, conflict: currentDetails(latest) };
    }
    submittedAt = saved.details_submitted_at;
    version = saved.details_version;

    // The entry names the customer and the booking. The token is a secret and
    // is never written to the log. The details are already recorded as sent,
    // so a failure to write the entry must not turn the send into an error.
    try {
      await db
        .prepare("insert into activity_log (id, event_type, source, description, related_id) values (?, ?, 'api', ?, ?)")
        .bind(
          crypto.randomUUID(),
          DETAILS_SENT_EVENT,
          `${resubmitted ? "Move details sent again" : "Move details sent"} by ${booking.full_name} (${files.length} file${files.length === 1 ? "" : "s"})`,
          booking.id,
        )
        .run();
    } catch (error) {
      console.error("Could not record that move details were sent", error);
    }
  }

  // Whether the office should be emailed now. The site records each email it
  // manages to send as a DETAILS_EMAILED_EVENT entry. The office is due one for
  // every send with something new in it, and for a repeat of a send it was
  // never emailed about (the first try failed, or never got its answer).
  const emailedSinceSent = recent?.last_email != null && submittedAt !== null && recent.last_email >= submittedAt;
  const notify = changed || (!emailedSinceSent && (recent?.emails_today ?? 0) < MAX_DETAILS_SENDS_PER_DAY);

  return {
    ok: true,
    data: {
      submittedAt,
      version,
      resubmitted,
      changed,
      notify,
      booking: {
        id: booking.id,
        moveType: booking.move_type,
        fromPostcode: booking.from_postcode,
        toPostcode: booking.to_postcode,
        moveDate: booking.move_date,
        customer: { fullName: booking.full_name, phone: booking.phone, email: booking.email },
      },
      details,
      files: files.map((file) => ({ id: file.id, name: file.name, isImage: file.is_image === 1, size: file.size })),
    },
  };
}

/* ─── The office's side ─── */

export type BookingMoveDetails = {
  token: string | null;
  details: MoveDetails | null;
  updatedAt: string | null;
  submittedAt: string | null;
  files: { id: string; name: string; isImage: boolean; size: number; contentType: string; thumb: string | null; createdAt: string }[];
};

/**
 * A booking's move details for the admin. A booking made before move details
 * existed is given its link here, so the office can send it to the customer.
 */
export async function getBookingMoveDetails(bookingId: string): Promise<BookingMoveDetails | null> {
  const { db } = await bindings();
  const booking = await db
    .prepare("select details_token, details, details_updated_at, details_submitted_at from bookings where id = ?1")
    .bind(bookingId)
    .first<{ details_token: string | null; details: string | null; details_updated_at: string | null; details_submitted_at: string | null }>();
  if (!booking) return null;

  const token = booking.details_token ?? (await ensureDetailsToken(db, bookingId));
  const files = await listBookingFiles(db, bookingId);
  return {
    token,
    details: parseDetails(booking.details),
    updatedAt: booking.details_updated_at,
    submittedAt: booking.details_submitted_at,
    files: files.map((file) => ({
      id: file.id,
      name: file.name,
      isImage: file.is_image === 1,
      size: file.size,
      contentType: file.content_type,
      thumb: file.thumb,
      createdAt: file.created_at,
    })),
  };
}

/**
 * One of a booking's files, for the signed-in office to open. A customer chose
 * what is in it, so it is sent with the type fixed at upload, the browser is
 * told not to guess another, and the sandbox policy stops it running anything
 * or reaching this origin even if it is opened as a page. Only images are shown
 * in the browser; everything else downloads.
 */
export async function serveBookingFile(fileId: string): Promise<Response> {
  const { db, uploads } = await bindings();
  const file = await db
    .prepare("select name, content_type, is_image, r2_key from booking_files where id = ?1")
    .bind(fileId)
    .first<{ name: string; content_type: string; is_image: number; r2_key: string }>();
  const object = file ? await uploads.get(file.r2_key) : null;
  if (!file || !object) return failure("File not found", 404);

  return new Response(object.body, {
    headers: {
      "Content-Type": file.content_type,
      "Content-Disposition": contentDisposition(file.name, file.is_image === 1),
      "X-Content-Type-Options": "nosniff",
      "Content-Security-Policy": "default-src 'none'; sandbox",
      "Cache-Control": "private, no-store",
      "Referrer-Policy": "no-referrer",
    },
  });
}

/**
 * Removes every file stored for a booking, before the booking itself is
 * deleted. The photos and documents are the customer's personal data. R2 goes
 * first, by key prefix rather than from the rows, so an object whose row was
 * never written (an upload that failed part-way) is removed as well.
 */
export async function deleteBookingFiles(bookingId: string): Promise<void> {
  const { db, uploads } = await bindings();
  let cursor: string | undefined;
  do {
    const listed = await uploads.list({ prefix: `move-details/${bookingId}/`, cursor });
    const keys = listed.objects.map((object) => object.key);
    if (keys.length) await uploads.delete(keys);
    cursor = listed.truncated ? listed.cursor : undefined;
  } while (cursor);
  await db.prepare("delete from booking_files where booking_id = ?1").bind(bookingId).run();
  await db.prepare("delete from booking_files_removed where booking_id = ?1").bind(bookingId).run();
}

/** A new secret for a details link: 32 random bytes as base64url. Never logged. */
export function createDetailsToken(): string {
  const bytes = crypto.getRandomValues(new Uint8Array(32));
  return btoa(String.fromCharCode(...bytes)).replace(/\+/g, "-").replace(/\//g, "_").replace(/=+$/, "");
}

/* ─── Helpers ─── */

async function findBookingByToken(db: D1Database, token: string): Promise<DetailsBookingRow | null> {
  // Anything that is not the shape of a token cannot be one.
  if (!TOKEN_PATTERN.test(token)) return null;
  return db
    .prepare(
      `select id, move_type, from_postcode, to_postcode, move_date,
              details, details_version, details_save_id, details_updated_at, details_submitted_at,
              full_name, phone, email
       from bookings where details_token = ?1`,
    )
    .bind(token)
    .first<DetailsBookingRow>();
}

// Only an empty slot is filled. If two requests get here together the second
// leaves the first one's token alone, and both read the same one back, so a
// link that has already been sent out is never replaced.
async function ensureDetailsToken(db: D1Database, bookingId: string): Promise<string | null> {
  await db
    .prepare("update bookings set details_token = ?1 where id = ?2 and details_token is null")
    .bind(createDetailsToken(), bookingId)
    .run();
  const updated = await db
    .prepare("select details_token from bookings where id = ?1")
    .bind(bookingId)
    .first<{ details_token: string | null }>();
  return updated?.details_token ?? null;
}

async function listBookingFiles(db: D1Database, bookingId: string): Promise<BookingFileRow[]> {
  // rowid gives the order the files were added in.
  const { results } = await db
    .prepare(
      `select id, client_id, name, content_type, size, is_image, thumb, created_at
       from booking_files where booking_id = ?1 order by rowid`,
    )
    .bind(bookingId)
    .all<BookingFileRow>();
  return results ?? [];
}

async function findFileByClientId(db: D1Database, bookingId: string, clientId: string): Promise<BookingFileRow | null> {
  return db
    .prepare(
      `select id, client_id, name, content_type, size, is_image, thumb, created_at
       from booking_files where booking_id = ?1 and client_id = ?2`,
    )
    .bind(bookingId, clientId)
    .first<BookingFileRow>();
}

// A file as the customer's own page is told about it.
function toPublicFile(file: BookingFileRow) {
  return {
    id: file.id,
    clientId: file.client_id,
    name: file.name,
    isImage: file.is_image === 1,
    size: file.size,
    thumb: file.thumb,
  };
}

// The answers as they stand, with what a page needs to tell whether its own
// copy is still based on them: the version, and the id of the save that made it.
function currentDetails(booking: DetailsBookingRow) {
  return {
    details: parseDetails(booking.details),
    version: booking.details_version,
    saveId: booking.details_save_id,
    updatedAt: booking.details_updated_at,
    submittedAt: booking.details_submitted_at,
  };
}

type SaveBasis = { baseVersion: number | null; saveId: string | null; sentIds: string[] };

// What a save says about where its answers came from: the version the page
// last saw, an id for this save, and the ids of the saves the same page made
// before it and may not have heard back from.
function readSaveBasis(body: Record<string, unknown>): SaveBasis {
  const { baseVersion, saveId, sentIds } = body;
  return {
    baseVersion: typeof baseVersion === "number" && Number.isInteger(baseVersion) && baseVersion >= 0 ? baseVersion : null,
    saveId: typeof saveId === "string" && SAVE_ID_PATTERN.test(saveId) ? saveId : null,
    sentIds: Array.isArray(sentIds)
      ? sentIds.filter((id): id is string => typeof id === "string" && SAVE_ID_PATTERN.test(id)).slice(-MAX_SENT_IDS)
      : [],
  };
}

// A page's answers are out of date when the stored version has moved on from
// the one it started with, unless the save that moved it was one of the page's
// own (a save whose reply never arrived, or two of its saves overlapping). A
// caller that names no version is not checked.
function isStaleBasis(basis: SaveBasis, booking: DetailsBookingRow): boolean {
  if (basis.baseVersion === null || basis.baseVersion === booking.details_version) return false;
  return booking.details_save_id === null || !basis.sentIds.includes(booking.details_save_id);
}

// 409 with the answers as they now stand, for the form to merge with its own.
function detailsConflict(booking: DetailsBookingRow): Response {
  return json({ error: { message: DETAILS_CHANGED_ELSEWHERE }, data: currentDetails(booking) }, 409);
}

// Stores an uploaded file: the object in R2, then its row. In that order a row
// never points at an object that is not there. Anything but "stored" means
// nothing was kept: the booking has its full number of files, the day's brake
// is on, the file was removed, or the same file (by the form's id for it)
// arrived twice at once and the other won.
async function storeFile(
  db: D1Database,
  uploads: R2Bucket,
  record: NewBookingFile,
  file: File,
): Promise<"stored" | "full" | "paused" | "repeat" | "removed"> {
  await uploads.put(record.r2Key, await file.arrayBuffer(), { httpMetadata: { contentType: record.contentType } });

  let inserted = false;
  let repeat = false;
  try {
    // The limits and the insert are one statement, so uploads that arrive
    // together cannot all take the last place, or all slip under the brake.
    // The booking has to still exist: one deleted while its upload was landing
    // gets no row, and its object is removed below.
    const result = await db
      .prepare(
        `insert into booking_files (id, booking_id, client_id, name, content_type, size, is_image, thumb, r2_key)
         select ?1, ?2, ?3, ?4, ?5, ?6, ?7, ?8, ?9
         where exists (select 1 from bookings where id = ?2)
           and (select count(*) from booking_files where booking_id = ?2) < ?10
           and (select count(*) from booking_files where created_at > ${A_DAY_AGO}) < ?11
           and (select coalesce(sum(size), 0) from booking_files where created_at > ${A_DAY_AGO}) + ?6 <= ?12
           and not exists (select 1 from booking_files_removed where booking_id = ?2 and client_id = ?3)`,
      )
      .bind(
        record.id,
        record.bookingId,
        record.clientId,
        record.name,
        record.contentType,
        record.size,
        record.isImage ? 1 : 0,
        record.thumb,
        record.r2Key,
        MAX_FILES_PER_BOOKING,
        MAX_UPLOAD_FILES_PER_DAY,
        MAX_UPLOAD_BYTES_PER_DAY,
      )
      .run();
    inserted = (result.meta.changes ?? 0) > 0;
  } catch (error) {
    // The only rule an insert can break is that a client id appears once in a
    // booking. If the row it collided with is there, this was a repeat.
    repeat = record.clientId !== null && (await findFileByClientId(db, record.bookingId, record.clientId)) !== null;
    if (!repeat) throw error;
  } finally {
    // No row, whatever the reason, means nothing refers to the object.
    if (!inserted) await uploads.delete(record.r2Key);
  }

  if (inserted) {
    await touchDetails(db, record.bookingId);
    return "stored";
  }
  if (repeat) return "repeat";
  if (record.clientId && (await wasRemoved(db, record.bookingId, record.clientId))) return "removed";

  const count = await db
    .prepare("select count(*) as count from booking_files where booking_id = ?1")
    .bind(record.bookingId)
    .first<{ count: number }>();
  return (count?.count ?? 0) >= MAX_FILES_PER_BOOKING ? "full" : "paused";
}

// Adding or removing a file is a change to the move details, so it moves their
// last-saved time on: that is how the office sees details were edited after
// they were sent, and how a second send knows there is something new in it.
// Best effort, because by now the file itself is already stored or gone.
async function touchDetails(db: D1Database, bookingId: string): Promise<void> {
  try {
    await db.prepare(`update bookings set details_updated_at = ${DETAILS_SAVED_NOW} where id = ?1`).bind(bookingId).run();
  } catch (error) {
    console.error("Could not move the details' last-saved time on", error);
  }
}

async function recordRemoved(db: D1Database, bookingId: string, clientId: string): Promise<void> {
  await db
    .prepare(
      `insert or ignore into booking_files_removed (booking_id, client_id)
       select ?1, ?2 where (select count(*) from booking_files_removed where booking_id = ?1) < ?3`,
    )
    .bind(bookingId, clientId, MAX_REMOVED_PER_BOOKING)
    .run();
}

async function wasRemoved(db: D1Database, bookingId: string, clientId: string): Promise<boolean> {
  const row = await db
    .prepare("select 1 as removed from booking_files_removed where booking_id = ?1 and client_id = ?2")
    .bind(bookingId, clientId)
    .first();
  return row !== null;
}

// 410: the customer removed this file, so an upload of it is not stored.
function fileRemoved(): Response {
  return failure("That file was removed", 410);
}

// Request bodies on these routes are open to anyone holding a link, so they
// are measured as they are read: a declared length is checked first, and the
// body is then counted as it arrives.
async function readJson(request: Request, limit: number): Promise<unknown> {
  if (!(request.headers.get("Content-Type") ?? "").includes("application/json")) {
    throw new HttpError("Content-Type must be application/json", 415);
  }
  if (Number(request.headers.get("Content-Length")) > limit) throw new HttpError("Request body is too large", 413);

  const chunks: Uint8Array[] = [];
  let total = 0;
  if (request.body) {
    const reader = request.body.getReader();
    for (;;) {
      const { done, value } = await reader.read();
      if (done) break;
      total += value.byteLength;
      if (total > limit) {
        await reader.cancel();
        throw new HttpError("Request body is too large", 413);
      }
      chunks.push(value);
    }
  }
  const bytes = new Uint8Array(total);
  let offset = 0;
  for (const chunk of chunks) {
    bytes.set(chunk, offset);
    offset += chunk.byteLength;
  }
  try {
    return JSON.parse(new TextDecoder().decode(bytes));
  } catch {
    throw new HttpError("Request body must be valid JSON", 400);
  }
}

async function readFormData(request: Request, limit: number): Promise<FormData> {
  if (!(request.headers.get("Content-Type") ?? "").includes("multipart/form-data")) {
    throw new HttpError("Content-Type must be multipart/form-data", 415);
  }
  // A browser always declares the length of an upload, and a body cannot run
  // past the length it declared. One that declares none is not read at all.
  const declared = request.headers.get("Content-Length");
  const declaredBytes = declared === null ? Number.NaN : Number(declared);
  if (!Number.isInteger(declaredBytes) || declaredBytes < 0) throw new HttpError("The size of the upload must be declared", 411);
  if (declaredBytes > limit) throw new HttpError("Request body is too large", 413);
  try {
    return await request.formData();
  } catch {
    throw new HttpError("Request body must be valid form data", 400);
  }
}

// Builds a clean set of answers from anything a request sends: unknown keys are
// dropped, a value of the wrong type or outside its list becomes "", and text
// is cut to its maximum. The result is safe to store and to hand back.
export function sanitizeDetails(input: unknown): MoveDetails {
  const source = isRecord(input) ? input : {};
  const dismantle = pickOption(source.dismantle, YES_NO);
  return {
    from: sanitizePlace(source.from),
    to: sanitizePlace(source.to),
    items: sanitizeItems(source.items),
    boxes: pickOption(source.boxes, BOX_RANGES),
    itemsNotes: cutText(source.itemsNotes, MAX_NOTES_LENGTH),
    dismantle,
    // The form hides this box unless the answer is yes, so text left in it
    // from an earlier answer is not kept.
    dismantleNotes: dismantle === "yes" ? cutText(source.dismantleNotes, MAX_DISMANTLE_NOTES_LENGTH) : "",
    movers: pickOption(source.movers, MOVER_OPTIONS),
    notes: cutText(source.notes, MAX_NOTES_LENGTH),
  };
}

function sanitizePlace(input: unknown): PlaceDetails {
  const place = isRecord(input) ? input : {};
  const type = pickOption(place.type, PROPERTY_TYPES);
  // A house has no floor to ask about and a ground floor needs no lift, so an
  // answer left over from an earlier choice is cleared rather than stored.
  const floor = type === "" || type === "house" ? "" : pickOption(place.floor, FLOORS);
  const lift = floor === "" || floor === "ground" ? "" : pickOption(place.lift, YES_NO);
  return { type, floor, lift };
}

function sanitizeItems(input: unknown): Record<string, number> {
  const items = new Map<string, number>();
  if (isRecord(input)) {
    for (const [rawName, rawCount] of Object.entries(input)) {
      if (items.size >= MAX_ITEM_ENTRIES) break;
      const name = cutText(rawName.trim(), MAX_ITEM_NAME_LENGTH).trim();
      const count = typeof rawCount === "number" && Number.isFinite(rawCount) ? Math.min(Math.trunc(rawCount), MAX_ITEM_COUNT) : 0;
      if (name && count > 0) items.set(name, count);
    }
  }
  // fromEntries defines plain properties, so an item named "__proto__" is
  // stored as a name like any other.
  return Object.fromEntries(items);
}

function pickOption<T extends string>(value: unknown, options: readonly T[]): T | "" {
  return typeof value === "string" && (options as readonly string[]).includes(value) ? (value as T) : "";
}

function cutText(value: unknown, max: number): string {
  if (typeof value !== "string") return "";
  const cut = value.slice(0, max);
  // A cut that lands in the middle of an emoji would leave half of it behind.
  return /[\uD800-\uDBFF]$/.test(cut) ? cut.slice(0, -1) : cut;
}

// The ready-to-send rules. validateDetails() in src/lib/move-details.js applies
// the same ones in the form, with the same keys and wording; they are repeated
// here so a request that skips the form cannot send half an answer.
function validateMoveDetails(details: MoveDetails, fileCount: number): Record<string, string> {
  const errors: Record<string, string> = {};
  for (const side of ["from", "to"] as const) {
    const place = details[side];
    if (!place.type) errors[side] = "Choose the type of property.";
    else if (place.type !== "house") {
      if (!place.floor) errors[side] = "Tell us which floor it is on.";
      else if (place.floor !== "ground" && !place.lift) errors[side] = "Tell us whether there is a lift.";
    }
  }
  // Ticked items, a typed list or an attached file each tell the office what
  // is being moved, so any one of them is enough.
  const hasItems = Object.values(details.items).some((count) => count > 0);
  if (!hasItems && details.itemsNotes.trim().length < 3 && fileCount === 0) {
    errors.items = "Tap some items, type a list, or add photos or a file, whichever is easiest.";
  }
  if (!details.dismantle) errors.dismantle = "Choose yes or no.";
  else if (details.dismantle === "yes" && details.dismantleNotes.trim().length < 2) {
    errors.dismantle = "Tell us which items need taking apart or putting together.";
  }
  if (!details.movers) errors.movers = "Choose how many people you need, or pick Not sure.";
  return errors;
}

function parseDetails(value: string | null): MoveDetails | null {
  if (!value) return null;
  try {
    // Sanitised again on the way out, so the form always gets the full shape
    // back even if the rules have changed since these answers were stored.
    return sanitizeDetails(JSON.parse(value));
  } catch {
    return null;
  }
}

// The name a file is stored and later downloaded under: the customer's own
// name for it, without anything that could act as a path or upset a header,
// and without the hidden direction marks that can make a name read as though
// it ends in a different extension.
function cleanFileName(name: string): string {
  const cleaned = name
    .toWellFormed()
    .replace(/[\\/]/g, "")
    .replace(/[\u0000-\u001f\u007f-\u009f\u202a-\u202e\u2066-\u2069]/g, "")
    .trim();
  if (cleaned.length <= MAX_FILE_NAME_LENGTH) return cleaned;

  // A long name is cut before its extension, not through it: the extension is
  // what decides the file's type, here and on the computer that downloads it.
  const dot = cleaned.lastIndexOf(".");
  const extension = dot > 0 && cleaned.length - dot <= 10 ? cleaned.slice(dot) : "";
  const stem = extension ? cleaned.slice(0, dot) : cleaned;
  return cutText(stem, MAX_FILE_NAME_LENGTH - extension.length) + extension;
}

function fileExtension(name: string): string {
  const dot = name.lastIndexOf(".");
  return dot === -1 ? "" : name.slice(dot + 1).toLowerCase();
}

// Decides whether an upload is accepted and what it is stored as. The name's
// extension decides; the type the browser declared can only get a file turned
// away, never change what it is stored as.
function acceptedFileType(name: string, declaredType: string): { contentType: string; isImage: boolean } | null {
  const extension = fileExtension(name);
  const imageType = IMAGE_TYPES.get(extension);
  const contentType = imageType ?? DOCUMENT_TYPES.get(extension);
  if (!contentType) return null;
  const isImage = imageType !== undefined;
  return declaredTypeAgrees(declaredType, isImage) ? { contentType, isImage } : null;
}

function declaredTypeAgrees(declaredType: string, isImage: boolean): boolean {
  const declared = declaredType.split(";")[0].trim().toLowerCase();
  // A browser sends no type, or this generic one, for a format the device does
  // not know: a HEIC photo on Windows, a Pages document anywhere but a Mac.
  if (declared === "" || declared === "application/octet-stream") return true;
  // Any image type will do for an image, other than SVG: browsers do not agree
  // on the names, so an exact match would turn away honest photos.
  if (isImage) return declared.startsWith("image/") && declared !== "image/svg+xml";
  return (declared.startsWith("application/") || declared.startsWith("text/")) && !ACTIVE_CONTENT_TYPE.test(declared);
}

// The small preview the form makes of a photo. It is shown as an image source
// in the admin and on the customer's page, so only a small base64 JPEG is kept.
function cleanThumb(value: FormDataEntryValue | null): string | null {
  if (typeof value !== "string" || value.length > MAX_THUMB_LENGTH || !THUMB_PATTERN.test(value)) return null;
  // A few thousand characters can still describe a picture tens of thousands
  // of pixels across, so the size the picture itself declares has to be small.
  let bytes: Uint8Array;
  try {
    bytes = Uint8Array.from(atob(value.slice(THUMB_PREFIX.length)), (character) => character.charCodeAt(0));
  } catch {
    return null;
  }
  const size = jpegSize(bytes);
  return size && size.width <= MAX_THUMB_SIDE && size.height <= MAX_THUMB_SIDE ? value : null;
}

// The width and height a JPEG declares in its frame header, or null for
// anything that does not read as a JPEG with one.
function jpegSize(bytes: Uint8Array): { width: number; height: number } | null {
  if (bytes.length < 4 || bytes[0] !== 0xff || bytes[1] !== 0xd8) return null;
  let offset = 2;
  while (offset + 8 < bytes.length) {
    if (bytes[offset] !== 0xff) return null;
    const marker = bytes[offset + 1];
    // Padding before a marker.
    if (marker === 0xff) {
      offset += 1;
      continue;
    }
    // The picture data, or the end of the file, with no frame header before it.
    if (marker === 0xda || marker === 0xd9) return null;
    // Markers that stand alone, with no length after them.
    if (marker === 0x01 || (marker >= 0xd0 && marker <= 0xd8)) {
      offset += 2;
      continue;
    }
    const length = (bytes[offset + 2] << 8) | bytes[offset + 3];
    if (length < 2) return null;
    // A frame header: every "start of frame" marker, which excludes the three
    // in that range that define tables instead.
    if (marker >= 0xc0 && marker <= 0xcf && marker !== 0xc4 && marker !== 0xc8 && marker !== 0xcc) {
      const height = (bytes[offset + 5] << 8) | bytes[offset + 6];
      const width = (bytes[offset + 7] << 8) | bytes[offset + 8];
      return width > 0 && height > 0 ? { width, height } : null;
    }
    offset += 2 + length;
  }
  return null;
}

function cleanClientId(value: FormDataEntryValue | null): string | null {
  return typeof value === "string" && CLIENT_ID_PATTERN.test(value) ? value : null;
}

function contentDisposition(name: string, inline: boolean): string {
  // A header can only hold plain ASCII, and a quote or backslash would end the
  // quoted name early, so the fallback swaps those for "_". filename* carries
  // the real name for the browsers that read it, which is all current ones.
  const fallback = name.replace(/[^\x20-\x7e]|["\\%]/g, "_") || "file";
  const encoded = encodeURIComponent(name.toWellFormed()).replace(
    /['()*]/g,
    (character) => `%${character.charCodeAt(0).toString(16).toUpperCase()}`,
  );
  return `${inline ? "inline" : "attachment"}; filename="${fallback}"; filename*=UTF-8''${encoded}`;
}

function isRecord(value: unknown): value is Record<string, unknown> {
  return typeof value === "object" && value !== null && !Array.isArray(value);
}
