"use client";

import { useMemo, useState, useTransition } from "react";
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
} from "@/lib/bookings";

const moveLabels: Record<string, string> = {
  house: "House move",
  flat: "Flat or studio",
  office: "Office move",
  items: "Single items",
};

const fieldClass = "mt-1 w-full rounded-xl border border-slate-200 bg-white px-3 py-2.5 text-sm outline-none focus:border-slate-950 focus:ring-2 focus:ring-slate-950/10";

function sizeLabel(booking: Booking) {
  if (booking.move_type !== "house" && booking.move_type !== "flat") return "Not applicable";
  return booking.bedrooms === 0 ? "Studio" : `${booking.bedrooms}${booking.bedrooms >= 5 ? "+" : ""} Bed`;
}

function Field({ label, name, defaultValue = "", type = "text", required = false }: { label: string; name: string; defaultValue?: string | number; type?: string; required?: boolean }) {
  return <label className="block text-xs font-bold uppercase tracking-wide text-slate-500">{label}<input name={name} type={type} defaultValue={defaultValue} required={required} className={fieldClass} /></label>;
}

export default function BookingsManager({ bookings, initialStatus, dateFilter }: { bookings: Booking[]; initialStatus: MoveStatus | "All"; dateFilter: string }) {
  const [filter, setFilter] = useState<MoveStatus | "All">(initialStatus);
  const [selected, setSelected] = useState<Booking | null>(null);
  const [creating, setCreating] = useState(false);
  const [pending, startTransition] = useTransition();
  const filtered = useMemo(() => bookings.filter((booking) => (filter === "All" || moveStatus(booking.status) === filter) && (!dateFilter || booking.move_date === dateFilter)), [bookings, filter, dateFilter]);

  const active = selected;
  const submit = async (formData: FormData) => {
    await saveBooking(active?.id || "", formData);
    setSelected(null);
    setCreating(false);
  };

  return (
    <div className="mx-auto max-w-[1500px]">
      <PageHeading title="Moves" subtitle="Manage every booking request from lead to completed move." action={<button onClick={() => setCreating(true)} className="rounded-xl bg-slate-950 px-5 py-3 text-sm font-semibold text-white hover:bg-brand-red">+ Add Move manually</button>} />
      <div className="mt-7 flex flex-wrap gap-2">
        {(["All", ...MOVE_STATUSES] as const).map((status) => <button key={status} onClick={() => setFilter(status)} className={`rounded-full px-4 py-2 text-sm font-semibold transition ${filter === status ? "bg-slate-950 text-white" : "border border-slate-200 bg-white text-slate-600 hover:border-slate-400"}`}>{status}</button>)}
        {dateFilter && <span className="rounded-full bg-blue-50 px-4 py-2 text-sm font-semibold text-blue-700">Date: {shortDate(dateFilter)}</span>}
      </div>

      <div className="mt-6 grid gap-4">
        {filtered.map((booking) => { const route = bookingRoute(booking); const status = moveStatus(booking.status); return (
          <button key={booking.id} onClick={() => setSelected(booking)} className="grid w-full gap-5 rounded-2xl border border-slate-200 bg-white p-5 text-left shadow-sm transition hover:-translate-y-0.5 hover:border-slate-300 hover:shadow-md lg:grid-cols-[minmax(200px,1.15fr)_minmax(240px,1.5fr)_minmax(150px,.8fr)_minmax(220px,1fr)_auto] lg:items-center">
            <span className="flex items-center gap-3"><span className="flex h-11 w-11 shrink-0 items-center justify-center rounded-full bg-slate-950 font-bold text-white">{booking.full_name.charAt(0).toUpperCase()}</span><span><span className="block font-bold text-slate-950">{booking.full_name}</span><span className="mt-0.5 block font-mono text-xs text-slate-400">#{booking.id.slice(0, 8)}</span></span></span>
            <span><span className="block text-[10px] font-bold uppercase tracking-widest text-slate-400">Route</span><span className="mt-1 block line-clamp-2 text-sm font-medium text-slate-700">{route.from} <span className="text-brand-red">→</span> {route.to}</span></span>
            <span><span className="block text-[10px] font-bold uppercase tracking-widest text-slate-400">Type & size</span><span className="mt-1 block text-sm font-semibold text-slate-700">{moveLabels[booking.move_type] || booking.move_type} • {sizeLabel(booking)}</span><span className="mt-1 block text-xs text-slate-500">{shortDate(booking.move_date)}</span></span>
            <span><span className="block text-[10px] font-bold uppercase tracking-widest text-slate-400">Contact</span><span className="mt-1 block text-sm text-slate-700">{booking.phone || "Not provided"}</span><span className="block truncate text-xs text-slate-500">{booking.email || "Not provided"}</span></span>
            <span className="justify-self-start lg:justify-self-end"><StatusBadge status={status} /></span>
          </button>
        ); })}
        {!filtered.length && <div className="rounded-2xl border border-dashed border-slate-300 bg-white p-12 text-center text-sm text-slate-500">No moves match this filter.</div>}
      </div>

      {(active || creating) && (
        <div className="fixed inset-0 z-[100] flex justify-end bg-slate-950/45 backdrop-blur-sm" role="dialog" aria-modal="true" aria-label="Move details">
          <div className="h-full w-full max-w-3xl overflow-y-auto bg-slate-50 shadow-2xl">
            <div className="sticky top-0 z-10 flex items-center justify-between border-b border-slate-200 bg-white px-6 py-5">
              <div><p className="text-xs font-bold uppercase tracking-widest text-brand-red">{active ? "Details" : "New move"}</p><h2 className="mt-1 text-xl font-bold text-slate-950">{active?.full_name || "Add a move manually"}</h2>{active && <p className="mt-1 font-mono text-xs text-slate-400">{active.id}</p>}</div>
              <button onClick={() => { setSelected(null); setCreating(false); }} className="flex h-10 w-10 items-center justify-center rounded-full border border-slate-200 bg-white text-xl hover:bg-slate-100" aria-label="Close details">×</button>
            </div>

            <form action={submit} className="space-y-6 p-6">
              <section className="rounded-2xl border border-slate-200 bg-white p-5 shadow-sm"><h3 className="font-bold text-slate-950">Edit</h3><div className="mt-5 grid gap-4 sm:grid-cols-2">
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
                <label className="sm:col-span-2 block text-xs font-bold uppercase tracking-wide text-slate-500">Additional details<textarea name="notes" defaultValue={active?.notes} rows={4} className={fieldClass} /></label>
                <input type="hidden" name="status" value={active ? moveStatus(active.status) : "New"} />
              </div><button disabled={pending} className="mt-5 rounded-xl bg-slate-950 px-5 py-3 text-sm font-semibold text-white hover:bg-brand-red disabled:opacity-60">Save Changes</button></section>
            </form>

            {active && <div className="space-y-6 px-6 pb-8">
              <div className="grid gap-6 sm:grid-cols-2"><section className="rounded-2xl border border-slate-200 bg-white p-5"><h3 className="font-bold">Customer</h3><p className="mt-4 font-semibold">{active.full_name}</p><p className="mt-1 text-sm text-slate-500">{active.phone || "Not provided"}</p><p className="text-sm text-slate-500">{active.email || "Not provided"}</p></section><section className="rounded-2xl border border-slate-200 bg-white p-5"><h3 className="font-bold">Details</h3><p className="mt-4 text-sm text-slate-600">{moveLabels[active.move_type]} • {sizeLabel(active)}</p><p className="mt-1 text-sm text-slate-600">{shortDate(active.move_date)}</p><p className="mt-3 font-semibold">{money(active.quote)} revenue</p></section></div>
              <section className="rounded-2xl border border-slate-200 bg-white p-5"><h3 className="font-bold">Logistics</h3><div className="mt-4 grid gap-4 sm:grid-cols-2"><div><p className="text-xs font-bold uppercase text-slate-400">Pickup</p><p className="mt-1 text-sm">{bookingRoute(active).from}</p></div><div><p className="text-xs font-bold uppercase text-slate-400">Drop-off</p><p className="mt-1 text-sm">{bookingRoute(active).to}</p></div></div></section>
              <section className="rounded-2xl border border-slate-200 bg-white p-5"><div className="flex flex-wrap items-center justify-between gap-4"><div><h3 className="font-bold">Email Delivery</h3><p className="mt-1 text-xs text-slate-500">Last checked: {active.email_checked_at ? new Date(active.email_checked_at).toLocaleString("en-GB") : "Never"}</p></div><button disabled={pending} onClick={() => startTransition(async () => { await resendBookingEmails(active.id); })} className="rounded-xl border border-slate-200 px-4 py-2 text-sm font-semibold hover:bg-slate-50">Resend emails</button></div><div className="mt-4 flex flex-wrap gap-3"><span className={`rounded-full px-3 py-1 text-xs font-bold ${active.customer_email_sent ? "bg-emerald-50 text-emerald-700" : "bg-red-50 text-red-700"}`}>Customer: {active.customer_email_sent ? "Sent" : "Not sent"}</span><span className={`rounded-full px-3 py-1 text-xs font-bold ${active.admin_email_sent ? "bg-emerald-50 text-emerald-700" : "bg-red-50 text-red-700"}`}>Admin: {active.admin_email_sent ? "Sent" : "Not sent"}</span></div></section>
              <section className="rounded-2xl border border-slate-200 bg-white p-5"><h3 className="font-bold">Status</h3><div className="mt-4 flex flex-wrap gap-2">{MOVE_STATUSES.map((status) => <button key={status} disabled={pending} onClick={() => startTransition(async () => { const form = new FormData(); form.set("status", status); await updateBookingStatus(active.id, form); })} className={`rounded-xl px-4 py-2 text-sm font-semibold ${moveStatus(active.status) === status ? "bg-slate-950 text-white" : "border border-slate-200 bg-white"}`}>{status}</button>)}</div></section>
              <div className="flex flex-wrap items-center justify-between gap-3 border-t border-slate-200 pt-6"><button disabled={pending} onClick={() => { if (window.confirm("Delete this move permanently?")) startTransition(async () => { await deleteBooking(active.id); setSelected(null); }); }} className="rounded-xl border border-red-200 bg-red-50 px-4 py-2.5 text-sm font-bold text-red-700 hover:bg-red-100">Delete Move</button><button onClick={() => setSelected(null)} className="rounded-xl bg-slate-950 px-5 py-2.5 text-sm font-semibold text-white">Close Details</button></div>
            </div>}
          </div>
        </div>
      )}
    </div>
  );
}
