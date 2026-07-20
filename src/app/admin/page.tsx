import Link from "next/link";
import { PageHeading, StatusBadge, money, shortDate } from "@/components/admin/AdminPrimitives";
import { getDashboardData } from "@/lib/admin-dashboard";
import { bookingRoute, moveStatus } from "@/lib/bookings";

export const dynamic = "force-dynamic";

const statIcons = ["£", "↗", "◎", "✓"];

export default async function AdminDashboard() {
  const data = await getDashboardData();
  const stats = [
    { label: "Revenue (All Time)", value: money(data.allTimeRevenue), pill: "Live" },
    { label: "Revenue (This Month)", value: money(data.monthRevenue), pill: "This Month" },
    { label: "Profit (This Month)", value: money(data.monthProfit), pill: "Positive" },
    { label: "Completed Moves", value: String(data.completedMoves), pill: "All Time" },
  ];
  const today = new Date().toISOString().slice(0, 10);

  return (
    <div className="mx-auto max-w-[1500px]">
      <PageHeading
        title="Dashboard Overview"
        subtitle="A clear view of moves, customers and financial performance."
        action={<Link href="/admin/reports" className="rounded-xl bg-slate-950 px-5 py-3 text-sm font-semibold text-white hover:bg-brand-red">View Reports</Link>}
      />

      <div className="mt-8 grid gap-4 sm:grid-cols-2 xl:grid-cols-4">
        {stats.map((stat, index) => (
          <article key={stat.label} className="rounded-2xl border border-slate-200 bg-white p-5 shadow-sm">
            <div className="flex items-start justify-between">
              <span className="flex h-10 w-10 items-center justify-center rounded-xl bg-slate-950 text-lg font-bold text-white">{statIcons[index]}</span>
              <span className="rounded-full bg-red-50 px-2.5 py-1 text-[10px] font-bold uppercase tracking-wide text-brand-red">{stat.pill}</span>
            </div>
            <p className="mt-6 text-sm font-medium text-slate-500">{stat.label}</p>
            <p className="mt-1 text-3xl font-bold tracking-tight text-slate-950">{stat.value}</p>
          </article>
        ))}
      </div>

      <div className="mt-4 grid gap-4 sm:grid-cols-2 xl:max-w-2xl">
        {[["Total Moves", data.totalMoves], ["Total Customers", data.totalCustomers]].map(([label, value]) => (
          <article key={String(label)} className="rounded-2xl border border-slate-200 bg-white p-5 shadow-sm">
            <p className="text-sm font-medium text-slate-500">{label}</p>
            <p className="mt-2 text-3xl font-bold text-slate-950">{value}</p>
          </article>
        ))}
      </div>

      <div className="mt-8 grid gap-6 xl:grid-cols-[minmax(0,1fr)_300px]">
        <section className="overflow-hidden rounded-2xl border border-slate-200 bg-white shadow-sm">
          <div className="flex items-center justify-between border-b border-slate-100 px-5 py-4">
            <div><h2 className="font-bold text-slate-950">Upcoming Moves</h2><p className="text-xs text-slate-500">New and scheduled work</p></div>
            <Link href="/admin/bookings?status=Upcoming" className="text-sm font-semibold text-brand-red">View All →</Link>
          </div>
          {data.upcoming.length ? (
            <div className="overflow-x-auto">
              <table className="min-w-[720px] w-full text-left text-sm">
                <thead className="bg-slate-50 text-xs uppercase tracking-wide text-slate-500"><tr><th className="px-5 py-3">Customer</th><th className="px-5 py-3">Route</th><th className="px-5 py-3">Date</th><th className="px-5 py-3">Status</th><th className="px-5 py-3 text-right">Revenue</th></tr></thead>
                <tbody className="divide-y divide-slate-100">
                  {data.upcoming.map((booking) => { const route = bookingRoute(booking); return (
                    <tr key={booking.id}><td className="px-5 py-4 font-semibold text-slate-900">{booking.full_name}</td><td className="max-w-64 px-5 py-4 text-slate-600"><span className="line-clamp-1">{route.from} → {route.to}</span></td><td className="px-5 py-4 text-slate-600">{shortDate(booking.move_date)}</td><td className="px-5 py-4"><StatusBadge status={moveStatus(booking.status)} /></td><td className="px-5 py-4 text-right font-semibold">{money(booking.quote)}</td></tr>
                  ); })}
                </tbody>
              </table>
            </div>
          ) : <p className="p-10 text-center text-sm text-slate-500">No upcoming moves yet.</p>}
        </section>

        <aside className="grid gap-4 sm:grid-cols-2 xl:grid-cols-1">
          <Link href="/admin/reports" className="rounded-2xl bg-slate-950 p-6 text-white shadow-sm transition hover:-translate-y-0.5">
            <span className="text-2xl">↗</span><h3 className="mt-8 text-lg font-bold">Financial Reports</h3><p className="mt-2 text-sm leading-6 text-white/65">Filter by date range to see revenue, expenses and profit breakdowns.</p>
          </Link>
          <Link href={`/admin/bookings?date=${today}`} className="rounded-2xl border border-slate-200 bg-white p-6 shadow-sm transition hover:-translate-y-0.5">
            <span className="text-2xl">⌁</span><h3 className="mt-8 text-lg font-bold text-slate-950">Today&apos;s Moves</h3><p className="mt-2 text-sm leading-6 text-slate-500">Open the moves list filtered to today&apos;s scheduled work.</p>
          </Link>
        </aside>
      </div>
    </div>
  );
}
