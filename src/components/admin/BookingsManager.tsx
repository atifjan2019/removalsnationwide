"use client";

import { useEffect, useMemo, useState, useSyncExternalStore, useTransition } from "react";
import { createPortal } from "react-dom";
import { setOptions } from "@googlemaps/js-api-loader";
import {
  deleteBooking,
  resendBookingEmails,
  saveBooking,
  updateBookingStatus,
} from "@/app/admin/bookings/actions";
import { PageHeading, StatusBadge, money, shortDate } from "@/components/admin/AdminPrimitives";
import {
  bookingRoute,
  moveStatus,
  MOVE_STATUSES,
  type Booking,
  type MoveStatus,
} from "@/lib/bookings-shared";
import { calculateDrivingRoute } from "@/lib/google-route";

const moveLabels: Record<string, string> = {
  house: "House move",
  flat: "Flat or studio",
  office: "Office move",
  items: "Single items",
};

const fieldClass = "mt-1 w-full rounded-xl border border-slate-200 bg-white px-3 py-2.5 text-sm outline-none focus:border-slate-950 focus:ring-2 focus:ring-slate-950/10";
const subscribeToClient = () => () => undefined;
let mapsConfigured = false;

async function calculateBrowserRoute(apiKey: string, booking: Booking) {
  if (!apiKey) return null;
  if (!mapsConfigured) {
    setOptions({
      key: apiKey,
      v: "weekly",
      language: "en",
      region: "GB",
      authReferrerPolicy: "origin",
    });
    mapsConfigured = true;
  }
  return calculateDrivingRoute({
    origin: booking.from_address || booking.from_postcode,
    destination: booking.to_address || booking.to_postcode,
  });
}

function sizeLabel(booking: Booking) {
  if (booking.move_type !== "house" && booking.move_type !== "flat") return "Not applicable";
  return booking.bedrooms === 0 ? "Studio" : `${booking.bedrooms}${booking.bedrooms >= 5 ? "+" : ""} Bed`;
}

function Field({ label, name, defaultValue = "", type = "text", required = false }: { label: string; name: string; defaultValue?: string | number; type?: string; required?: boolean }) {
  return <label className="block text-xs font-bold uppercase tracking-wide text-slate-500">{label}<input name={name} type={type} defaultValue={defaultValue} required={required} className={fieldClass} /></label>;
}

export default function BookingsManager({ bookings, initialStatus, dateFilter, mapsApiKey }: { bookings: Booking[]; initialStatus: MoveStatus | "All"; dateFilter: string; mapsApiKey: string }) {
  const [filter, setFilter] = useState<MoveStatus | "All">(initialStatus);
  const [selected, setSelected] = useState<Booking | null>(null);
  const [creating, setCreating] = useState(false);
  const [editing, setEditing] = useState(false);
  const mounted = useSyncExternalStore(subscribeToClient, () => true, () => false);
  const [pending, startTransition] = useTransition();
  const [emailPending, startEmailTransition] = useTransition();
  const [emailFeedback, setEmailFeedback] = useState<{ ok: boolean; message: string } | null>(null);
  const filtered = useMemo(() => bookings.filter((booking) => (filter === "All" || moveStatus(booking.status) === filter) && (!dateFilter || booking.move_date === dateFilter)), [bookings, filter, dateFilter]);

  const active = selected;
  const modalOpen = Boolean(active || creating);
  const showEditForm = creating || editing;
  const closeModal = () => {
    setSelected(null);
    setCreating(false);
    setEditing(false);
    setEmailFeedback(null);
  };

  useEffect(() => {
    if (!modalOpen) return;

    const previousOverflow = document.body.style.overflow;
    const closeOnEscape = (event: KeyboardEvent) => {
      if (event.key === "Escape") {
        setSelected(null);
        setCreating(false);
      }
    };

    document.body.style.overflow = "hidden";
    document.addEventListener("keydown", closeOnEscape);

    return () => {
      document.body.style.overflow = previousOverflow;
      document.removeEventListener("keydown", closeOnEscape);
    };
  }, [modalOpen]);

  const submit = async (formData: FormData) => {
    await saveBooking(active?.id || "", formData);
    closeModal();
  };

  return (
    <div className="mx-auto max-w-[1500px]">
      <PageHeading title="Moves" subtitle="Manage every booking request from lead to completed move." action={<button onClick={() => { setCreating(true); setEditing(false); }} className="rounded-xl bg-slate-950 px-5 py-3 text-sm font-semibold text-white hover:bg-brand-red">+ Add Move manually</button>} />
      <div className="mt-7 flex flex-wrap gap-2">
        {(["All", ...MOVE_STATUSES] as const).map((status) => <button key={status} onClick={() => setFilter(status)} className={`rounded-full px-4 py-2 text-sm font-semibold transition ${filter === status ? "bg-slate-950 text-white" : "border border-slate-200 bg-white text-slate-600 hover:border-slate-400"}`}>{status}</button>)}
        {dateFilter && <span className="rounded-full bg-blue-50 px-4 py-2 text-sm font-semibold text-blue-700">Date: {shortDate(dateFilter)}</span>}
      </div>

      <div className="mt-6 grid gap-4">
        {filtered.map((booking) => { const route = bookingRoute(booking); const status = moveStatus(booking.status); return (
          <button type="button" key={booking.id} aria-haspopup="dialog" onClick={() => { setSelected(booking); setCreating(false); setEditing(false); setEmailFeedback(null); }} className="grid w-full cursor-pointer gap-5 rounded-2xl border border-slate-200 bg-white p-5 text-left shadow-sm transition hover:-translate-y-0.5 hover:border-slate-300 hover:shadow-md lg:grid-cols-[minmax(200px,1.15fr)_minmax(240px,1.5fr)_minmax(150px,.8fr)_minmax(220px,1fr)_auto] lg:items-center">
            <span className="flex items-center gap-3"><span className="flex h-11 w-11 shrink-0 items-center justify-center rounded-full bg-slate-950 font-bold text-white">{booking.full_name.charAt(0).toUpperCase()}</span><span><span className="block font-bold text-slate-950">{booking.full_name}</span><span className="mt-0.5 block font-mono text-xs text-slate-400">#{booking.id.slice(0, 8)}</span></span></span>
            <span><span className="block text-[10px] font-bold uppercase tracking-widest text-slate-400">Route</span><span className="mt-1 block line-clamp-2 text-sm font-medium text-slate-700">{route.from} <span className="text-brand-red">→</span> {route.to}</span></span>
            <span><span className="block text-[10px] font-bold uppercase tracking-widest text-slate-400">Type & size</span><span className="mt-1 block text-sm font-semibold text-slate-700">{moveLabels[booking.move_type] || booking.move_type} • {sizeLabel(booking)}</span><span className="mt-1 block text-xs text-slate-500">{shortDate(booking.move_date)}</span></span>
            <span><span className="block text-[10px] font-bold uppercase tracking-widest text-slate-400">Contact</span><span className="mt-1 block text-sm text-slate-700">{booking.phone || "Not provided"}</span><span className="block truncate text-xs text-slate-500">{booking.email || "Not provided"}</span></span>
            <span className="justify-self-start lg:justify-self-end"><StatusBadge status={status} /></span>
          </button>
        ); })}
        {!filtered.length && <div className="rounded-2xl border border-dashed border-slate-300 bg-white p-12 text-center text-sm text-slate-500">No moves match this filter.</div>}
      </div>

      {mounted && (active || creating) && createPortal((
        <div
          className="fixed inset-0 z-[100] flex items-center justify-center bg-slate-950/55 p-3 backdrop-blur-[2px] sm:p-6"
          onMouseDown={(event) => {
            if (event.target === event.currentTarget) closeModal();
          }}
        >
          <div
            className="flex max-h-[calc(100dvh-1.5rem)] w-full max-w-4xl flex-col overflow-hidden rounded-2xl bg-white shadow-2xl sm:max-h-[calc(100dvh-3rem)]"
            role="dialog"
            aria-modal="true"
            aria-labelledby="booking-details-title"
          >
            <header className="z-10 flex shrink-0 items-start justify-between gap-4 border-b border-slate-200 bg-white px-5 py-4 sm:px-6 sm:py-5">
              <div className="min-w-0">
                <h2 id="booking-details-title" className="text-xl font-bold text-slate-950">
                  {active ? "Booking Details" : "Add Booking Manually"}
                </h2>
                {active && <p className="mt-1 break-all font-mono text-xs text-slate-400">{active.id}</p>}
              </div>
              <div className="flex shrink-0 items-center gap-2">
                {active && !editing && <button type="button" onClick={() => setEditing(true)} className="rounded-xl bg-slate-950 px-4 py-2 text-sm font-semibold text-white transition hover:bg-brand-red">Edit Booking</button>}
                <button type="button" onClick={closeModal} className="flex h-9 w-9 shrink-0 items-center justify-center rounded-full border border-slate-200 bg-white text-xl leading-none text-slate-600 transition hover:bg-slate-100 hover:text-slate-950" aria-label="Close booking details">×</button>
              </div>
            </header>

            <div className="min-h-0 flex-1 overflow-y-auto bg-slate-50 p-4 sm:p-6">
              {showEditForm && <form action={submit}>
                <section className="rounded-2xl border border-slate-200 bg-white p-5 shadow-sm">
                  <div className="flex items-center justify-between gap-3">
                    <h3 className="font-bold text-slate-950">{active ? "Edit Booking" : "Add Booking"}</h3>
                    {active && <button type="button" onClick={() => setEditing(false)} className="text-sm font-semibold text-slate-500 hover:text-slate-950">Cancel edit</button>}
                  </div>
                  <div className="mt-5 grid gap-4 sm:grid-cols-2">
                    <Field label="Full name" name="fullName" defaultValue={active?.full_name} required />
                    <Field label="Email" name="email" type="email" defaultValue={active?.email} />
                    <Field label="Phone" name="phone" defaultValue={active?.phone} />
                    <label className="block text-xs font-bold uppercase tracking-wide text-slate-500">Type<select name="moveType" defaultValue={active?.move_type || "house"} className={fieldClass}>{Object.entries(moveLabels).map(([value, label]) => <option key={value} value={value}>{label}</option>)}</select></label>
                    <Field label="From location" name="fromAddress" defaultValue={active?.from_address || active?.from_postcode} />
                    <Field label="To location" name="toAddress" defaultValue={active?.to_address || active?.to_postcode} />
                    <Field label="Collection postcode" name="fromPostcode" defaultValue={active?.from_postcode} />
                    <Field label="Drop-off postcode" name="toPostcode" defaultValue={active?.to_postcode} />
                    <Field label="Move date" name="moveDate" type="date" defaultValue={active?.move_date} />
                    <Field label="Size / bedrooms" name="bedrooms" type="number" defaultValue={active?.bedrooms ?? 1} />
                    <Field label="Quote / revenue (£)" name="quote" type="number" defaultValue={active?.quote ?? 0} />
                    <Field label="Expenses (£)" name="expenses" type="number" defaultValue={active?.expenses ?? 0} />
                    <label className="block text-xs font-bold uppercase tracking-wide text-slate-500 sm:col-span-2">Additional details<textarea name="notes" defaultValue={active?.notes} rows={4} className={fieldClass} /></label>
                    <input type="hidden" name="status" value={active ? moveStatus(active.status) : "New"} />
                  </div>
                  <button disabled={pending} className="mt-5 rounded-xl bg-slate-950 px-5 py-3 text-sm font-semibold text-white hover:bg-brand-red disabled:opacity-60">{active ? "Save Changes" : "Add Move"}</button>
                </section>
              </form>}

              {active && <div className={`${showEditForm ? "mt-6" : ""} space-y-6`}>
                <div className="grid gap-6 sm:grid-cols-2">
                  <section className="rounded-2xl border border-slate-200 bg-white p-5"><h3 className="font-bold">Customer</h3><p className="mt-4 font-semibold">{active.full_name}</p><p className="mt-1 text-sm text-slate-500">{active.phone || "Not provided"}</p><p className="text-sm text-slate-500">{active.email || "Not provided"}</p></section>
                  <section className="rounded-2xl border border-slate-200 bg-white p-5"><h3 className="font-bold">Details</h3><p className="mt-4 text-sm text-slate-600">{moveLabels[active.move_type]} • {sizeLabel(active)}</p><p className="mt-1 text-sm text-slate-600">{shortDate(active.move_date)}</p><p className="mt-3 font-semibold">{money(active.quote)} revenue</p></section>
                </div>
                <section className="rounded-2xl border border-slate-200 bg-white p-5"><h3 className="font-bold">Logistics</h3><div className="mt-4 grid gap-4 sm:grid-cols-2"><div><p className="text-xs font-bold uppercase text-slate-400">Pickup</p><p className="mt-1 text-sm">{bookingRoute(active).from}</p></div><div><p className="text-xs font-bold uppercase text-slate-400">Drop-off</p><p className="mt-1 text-sm">{bookingRoute(active).to}</p></div></div></section>
                <section className="rounded-2xl border border-slate-200 bg-white p-5">
                  <div className="flex flex-wrap items-center justify-between gap-4">
                    <div><h3 className="font-bold">Email Delivery</h3><p className="mt-1 text-xs text-slate-500">Last checked: {active.email_checked_at ? new Date(active.email_checked_at).toLocaleString("en-GB") : "Never"}</p></div>
                    <button
                      type="button"
                      disabled={emailPending}
                      onClick={() => startEmailTransition(async () => {
                        setEmailFeedback(null);
                        try {
                          let route = active.route_distance && active.route_duration
                            ? { distance: active.route_distance, duration: active.route_duration }
                            : null;
                          if (!route) {
                            try {
                              route = await calculateBrowserRoute(mapsApiKey, active);
                            } catch {
                              route = null;
                            }
                          }
                          const result = await resendBookingEmails(active.id, route ?? undefined);
                          setSelected((current) => current?.id === active.id ? {
                            ...current,
                            route_distance: route?.distance ?? current.route_distance,
                            route_duration: route?.duration ?? current.route_duration,
                            customer_email_sent: result.customerSent ? 1 : 0,
                            admin_email_sent: result.adminSent ? 1 : 0,
                            email_checked_at: result.checkedAt,
                          } : current);
                          setEmailFeedback({ ok: result.ok, message: result.message });
                        } catch {
                          setEmailFeedback({ ok: false, message: "The resend request failed. Please try again or check the Worker logs." });
                        }
                      })}
                      className="rounded-xl border border-slate-200 px-4 py-2 text-sm font-semibold hover:bg-slate-50 disabled:cursor-wait disabled:opacity-60"
                    >
                      {emailPending ? "Sending…" : "Resend emails"}
                    </button>
                  </div>
                  {emailFeedback && <p role="status" aria-live="polite" className={`mt-4 rounded-xl border px-3 py-2.5 text-sm ${emailFeedback.ok ? "border-emerald-200 bg-emerald-50 text-emerald-800" : "border-amber-200 bg-amber-50 text-amber-900"}`}>{emailFeedback.message}</p>}
                  <div className="mt-4 flex flex-wrap gap-3"><span className={`rounded-full px-3 py-1 text-xs font-bold ${active.customer_email_sent ? "bg-emerald-50 text-emerald-700" : "bg-red-50 text-red-700"}`}>Customer: {active.customer_email_sent ? "Sent" : "Not sent"}</span><span className={`rounded-full px-3 py-1 text-xs font-bold ${active.admin_email_sent ? "bg-emerald-50 text-emerald-700" : "bg-red-50 text-red-700"}`}>Admin: {active.admin_email_sent ? "Sent" : "Not sent"}</span></div>
                </section>
                <section className="rounded-2xl border border-slate-200 bg-white p-5"><h3 className="font-bold">Status</h3><div className="mt-4 flex flex-wrap gap-2">{MOVE_STATUSES.map((status) => <button type="button" key={status} disabled={pending} onClick={() => startTransition(async () => { const form = new FormData(); form.set("status", status); await updateBookingStatus(active.id, form); })} className={`rounded-xl px-4 py-2 text-sm font-semibold ${moveStatus(active.status) === status ? "bg-slate-950 text-white" : "border border-slate-200 bg-white"}`}>{status}</button>)}</div></section>
                <section className="rounded-2xl border border-slate-200 bg-white p-5"><h3 className="font-bold">Additional Details</h3><p className="mt-4 whitespace-pre-wrap text-sm text-slate-600">{active.notes || "No additional details provided."}</p></section>
              </div>}
            </div>

            <footer className="flex shrink-0 items-center justify-between gap-3 border-t border-slate-200 bg-white px-5 py-4 sm:px-6">
              {active ? <button type="button" disabled={pending} onClick={() => { if (window.confirm("Delete this move permanently?")) startTransition(async () => { await deleteBooking(active.id); closeModal(); }); }} className="rounded-xl border border-red-300 bg-white px-4 py-2.5 text-sm font-bold text-red-700 transition hover:bg-red-50 disabled:opacity-60">Delete Booking</button> : <span />}
              <button type="button" onClick={closeModal} className="rounded-xl bg-slate-950 px-5 py-2.5 text-sm font-semibold text-white transition hover:bg-slate-800">Close Details</button>
            </footer>
          </div>
        </div>
      ), document.body)}
    </div>
  );
}
