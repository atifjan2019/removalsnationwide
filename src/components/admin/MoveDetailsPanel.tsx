"use client";

import { useCallback, useEffect, useState } from "react";
import { emailMoveDetailsLink, loadBookingMoveDetails, type AdminMoveDetails } from "@/app/admin/bookings/actions";
import { describeDetails } from "@/lib/move-details";

type Row = { label: string; value: string; list?: string[] };

const formatWhen = (value: string | null) => {
  const date = value ? new Date(value) : null;
  return date && !Number.isNaN(date.getTime())
    ? date.toLocaleString("en-GB", { day: "numeric", month: "long", hour: "2-digit", minute: "2-digit" })
    : "";
};

const formatSize = (bytes: number) =>
  bytes >= 1024 * 1024 ? `${(bytes / (1024 * 1024)).toFixed(1)} MB` : `${Math.max(1, Math.round(bytes / 1024))} KB`;

/** Where the customer has got to with the form, as the line at the top of the panel. */
function progressOf(data: AdminMoveDetails) {
  if (data.submittedAt) {
    return {
      dot: "bg-emerald-500",
      text: `Sent by the customer on ${formatWhen(data.submittedAt)}`,
      edited: data.updatedAt && data.updatedAt > data.submittedAt ? `Changed since, last saved ${formatWhen(data.updatedAt)}` : "",
    };
  }
  // Photos can be added before any answer is saved.
  if (data.details || data.files.length) {
    return { dot: "bg-amber-500", text: data.updatedAt ? `In progress, last saved ${formatWhen(data.updatedAt)}` : "In progress", edited: "" };
  }
  return { dot: "bg-slate-300", text: "Not started yet", edited: "" };
}

/**
 * The customer's move details in Booking Details: how far they have got, their
 * answers, their photos and files, and their private link with a way to email
 * it to them. It has a refresh of its own, since the office is often on the
 * phone to the customer while they fill it in.
 */
export default function MoveDetailsPanel({ bookingId, email }: { bookingId: string; email: string }) {
  const [data, setData] = useState<AdminMoveDetails | null>(null);
  const [error, setError] = useState("");
  const [loading, setLoading] = useState(true);
  const [copied, setCopied] = useState(false);
  const [confirming, setConfirming] = useState(false);
  const [sending, setSending] = useState(false);
  const [sendResult, setSendResult] = useState<{ ok: boolean; message: string } | null>(null);

  const load = useCallback(async () => {
    setLoading(true);
    setError("");
    try {
      setData(await loadBookingMoveDetails(bookingId));
    } catch {
      setError("The move details could not be loaded. If you have been signed out, sign in again.");
    } finally {
      setLoading(false);
    }
  }, [bookingId]);

  useEffect(() => {
    // Loaded on open: a fetch, not a render-time derivation.
    // eslint-disable-next-line react-hooks/set-state-in-effect
    load();
  }, [load]);

  const copyLink = async () => {
    if (!data?.link) return;
    try {
      await navigator.clipboard.writeText(data.link);
      setCopied(true);
      setTimeout(() => setCopied(false), 2000);
    } catch {
      setCopied(false);
    }
  };

  const send = async () => {
    setConfirming(false);
    setSending(true);
    setSendResult(null);
    try {
      const result = await emailMoveDetailsLink(bookingId);
      setSendResult(result);
      if (result.ok) await load();
    } catch {
      setSendResult({ ok: false, message: "The email was not sent. Try again in a moment." });
    } finally {
      setSending(false);
    }
  };

  const rows: Row[] = data?.details ? (describeDetails(data.details) as Row[]) : [];
  const progress = data ? progressOf(data) : null;
  const emailedBefore = data?.linkEmails.count
    ? `Link emailed${data.linkEmails.count > 1 ? ` ${data.linkEmails.count} times` : ""}, last on ${formatWhen(data.linkEmails.lastAt)}.`
    : "";

  return (
    <section className="rounded-2xl border border-slate-200 bg-white p-5">
      <div className="flex items-start justify-between gap-3">
        <div>
          <h3 className="font-bold">Move Details From Customer</h3>
          {progress && (
            <p className="mt-2 flex items-center gap-2 text-sm font-semibold text-slate-800">
              <span aria-hidden="true" className={`h-2 w-2 shrink-0 rounded-full ${progress.dot}`} />
              {progress.text}
            </p>
          )}
          {progress?.edited && <p className="mt-1 text-xs font-medium text-amber-700">{progress.edited}</p>}
        </div>
        <button
          type="button"
          onClick={load}
          disabled={loading}
          className="rounded-lg px-3 py-1.5 text-xs font-semibold text-slate-500 hover:bg-slate-100 hover:text-slate-950 disabled:opacity-60"
        >
          {loading ? "Loading…" : "Refresh"}
        </button>
      </div>

      {error && <p role="alert" className="mt-4 text-sm font-medium text-red-700">{error}</p>}

      {rows.length > 0 && (
        <dl className="mt-4 divide-y divide-slate-100 rounded-xl border border-slate-100 bg-slate-50">
          {rows.map((row) => (
            <div key={row.label} className="px-4 py-3 sm:grid sm:grid-cols-[9.5rem_minmax(0,1fr)] sm:gap-4">
              <dt className="text-xs font-bold uppercase tracking-wide text-slate-400 sm:pt-0.5">{row.label}</dt>
              <dd className="mt-1 whitespace-pre-line text-sm text-slate-800 [overflow-wrap:anywhere] sm:mt-0">
                {row.list?.length ? (
                  <ul className="grid gap-x-6 gap-y-1 sm:grid-cols-2">
                    {row.list.map((item) => <li key={item}>{item}</li>)}
                  </ul>
                ) : (
                  row.value
                )}
              </dd>
            </div>
          ))}
        </dl>
      )}

      {data && data.files.length > 0 && (
        <div className="mt-4">
          <p className="text-xs font-bold uppercase tracking-wide text-slate-400">Photos and files ({data.files.length})</p>
          <ul className="mt-2 grid grid-cols-3 gap-2.5 sm:grid-cols-4">
            {data.files.map((file) => (
              <li key={file.id}>
                {/* The file is served only to a signed-in admin. A photo opens
                    in a new tab; a document downloads. */}
                <a
                  href={`/api/admin/booking-files/${encodeURIComponent(file.id)}/`}
                  target="_blank"
                  rel="noopener noreferrer"
                  title={file.name}
                  className="block overflow-hidden rounded-xl border border-slate-200 bg-slate-50 transition hover:border-slate-400"
                >
                  {file.isImage && file.thumb?.startsWith("data:image/jpeg;base64,") ? (
                    // eslint-disable-next-line @next/next/no-img-element
                    <img src={file.thumb} alt={file.name} width={200} height={200} className="aspect-square w-full object-cover" />
                  ) : (
                    <span className="flex aspect-square w-full flex-col items-center justify-center gap-1 p-2 text-center">
                      <span className="line-clamp-3 text-[11px] font-semibold leading-tight text-slate-700 [overflow-wrap:anywhere]">{file.name}</span>
                      <span className="text-[10px] text-slate-400">{formatSize(file.size)}</span>
                    </span>
                  )}
                </a>
              </li>
            ))}
          </ul>
        </div>
      )}

      {data?.link && (
        <div className="mt-5 rounded-xl border border-slate-100 bg-slate-50 p-4">
          <p className="text-xs font-bold uppercase tracking-wide text-slate-400">Customer&apos;s private link (the one in their email)</p>
          <div className="mt-2 flex flex-col gap-2 sm:flex-row sm:items-start">
            <p className="w-full min-w-0 flex-1 select-all break-all rounded-xl border border-slate-200 bg-white px-3 py-2.5 font-mono text-xs text-slate-700">{data.link}</p>
            <button type="button" onClick={copyLink} className="shrink-0 rounded-xl border border-slate-200 bg-white px-4 py-2 text-sm font-semibold hover:bg-slate-100">
              <span aria-live="polite">{copied ? "Copied" : "Copy link"}</span>
            </button>
          </div>
          <p className="mt-2 text-xs text-slate-500">Paste it into WhatsApp or an email so the customer can add or change their move details.</p>

          {email && (
            <div className="mt-4 flex flex-wrap items-center gap-2 text-sm">
              {confirming ? (
                <>
                  <span className="text-slate-700">
                    {emailedBefore ? "Already emailed. Send it again to " : "Email the link to "}
                    <strong className="break-all">{email}</strong>?
                  </span>
                  <button type="button" onClick={send} className="rounded-lg bg-slate-950 px-3 py-1.5 font-semibold text-white hover:bg-brand-red">Send email</button>
                  <button type="button" onClick={() => setConfirming(false)} className="rounded-lg px-3 py-1.5 font-semibold text-slate-600 hover:bg-slate-100">Cancel</button>
                </>
              ) : (
                <button
                  type="button"
                  onClick={() => setConfirming(true)}
                  disabled={sending}
                  className="rounded-lg border border-slate-200 bg-white px-3 py-1.5 font-semibold hover:bg-slate-100 disabled:cursor-wait disabled:opacity-60"
                >
                  {sending ? "Sending…" : emailedBefore ? "Email the link again" : "Email the link to the customer"}
                </button>
              )}
              {!confirming && (sendResult || emailedBefore) && (
                <span role="status" className={`font-medium ${sendResult && !sendResult.ok ? "text-red-700" : "text-emerald-700"}`}>
                  {sendResult?.message || emailedBefore}
                </span>
              )}
            </div>
          )}
        </div>
      )}
    </section>
  );
}
