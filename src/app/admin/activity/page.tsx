import Link from "next/link";
import { PageHeading } from "@/components/admin/AdminPrimitives";
import { getActivity } from "@/lib/admin-dashboard";

export const dynamic = "force-dynamic";

const eventTypes = ["All Events", "Created", "Deleted", "Email status updated", "Updated", "Customer Deleted", "Abandoned Lead", "Lead Converted", "Settings Updated"];
const relative = (value: string) => { const days=Math.floor((Date.now()-new Date(value).getTime())/86400000); return days<=0?"Today":days===1?"1d ago":`${days}d ago`; };

export default async function ActivityPage({ searchParams }: { searchParams: Promise<{ search?: string; type?: string }> }) {
  const [events, query] = await Promise.all([getActivity(), searchParams]);
  const search=(query.search||"").toLowerCase(); const type=query.type||"All Events";
  const filtered=events.filter(event=>(type==="All Events"||event.event_type===type)&&(!search||`${event.description} ${event.related_id}`.toLowerCase().includes(search)));
  const groups=new Map<string, typeof filtered>(); filtered.forEach(event=>{const key=new Date(event.created_at).toLocaleDateString("en-GB",{weekday:"long",day:"numeric",month:"long",year:"numeric"}); groups.set(key,[...(groups.get(key)||[]),event]);});
  return <div className="mx-auto max-w-[1200px]"><PageHeading title="Activity Log" subtitle={`${events.length} events recorded • last 30 days, auto-cleaned`} />
    <form className="mt-7 flex flex-wrap gap-3 rounded-2xl border border-slate-200 bg-white p-4 shadow-sm"><input name="search" defaultValue={query.search} placeholder="Search activity…" className="min-w-64 flex-1 rounded-xl border border-slate-200 px-4 py-2.5 text-sm"/><select name="type" defaultValue={type} className="rounded-xl border border-slate-200 px-4 py-2.5 text-sm">{eventTypes.map(item=><option key={item}>{item}</option>)}</select><button className="rounded-xl bg-slate-950 px-4 py-2.5 text-sm font-semibold text-white">Filter</button></form>
    <div className="mt-7 space-y-8">{Array.from(groups).map(([date,items])=><section key={date}><h2 className="mb-3 text-xs font-bold uppercase tracking-widest text-slate-500">{date} — {items.length} events</h2><div className="overflow-hidden rounded-2xl border border-slate-200 bg-white shadow-sm divide-y divide-slate-100">{items.map(event=>{const destructive=event.event_type.includes("Deleted")||event.event_type.includes("Abandoned"); return <article key={event.id} className="grid gap-3 px-5 py-4 sm:grid-cols-[auto_auto_1fr_auto] sm:items-center"><span className={`flex h-9 w-9 items-center justify-center rounded-full ${destructive?"bg-red-50 text-red-600":"bg-slate-100 text-slate-700"}`}>{destructive?"×":"•"}</span><div><span className={`rounded-full px-2.5 py-1 text-[10px] font-bold uppercase ${destructive?"bg-red-50 text-red-700":"bg-blue-50 text-blue-700"}`}>{event.event_type}</span><span className="ml-2 rounded bg-slate-100 px-2 py-1 font-mono text-[10px] text-slate-500">{event.source}</span></div><div><p className="text-sm font-medium text-slate-800">{event.description}</p>{event.related_id&&<p className="mt-1 font-mono text-xs text-slate-400">#{event.related_id.slice(0,12)}</p>}</div><div className="text-right"><p className="text-xs font-semibold text-slate-600">{relative(event.created_at)}</p><p className="mt-1 text-[10px] text-slate-400">{new Date(event.created_at).toLocaleString("en-GB")}</p><Link href={event.related_id.includes("@")?"/admin/customers":"/admin/bookings"} className="mt-2 inline-block text-xs font-semibold text-brand-red">View details →</Link></div></article>;})}</div></section>)}{!filtered.length&&<p className="rounded-2xl border border-dashed border-slate-300 bg-white p-12 text-center text-sm text-slate-500">No activity matches these filters.</p>}</div>
  </div>;
}
