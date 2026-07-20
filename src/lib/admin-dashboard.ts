import "server-only";
import { getDb, requireDb } from "@/lib/d1";
import { getBookings, moveStatus, type Booking } from "@/lib/bookings";

export type ActivityEvent = {
  id: string;
  event_type: string;
  source: "api" | "app";
  description: string;
  related_id: string;
  created_at: string;
};

export type CustomerSummary = {
  email: string;
  name: string;
  phone: string;
  moves: number;
  created_at: string;
};

export async function logActivity(
  eventType: string,
  description: string,
  relatedId = "",
  source: "api" | "app" = "app",
) {
  const db = await requireDb();
  await db
    .prepare(
      `insert into activity_log (id, event_type, source, description, related_id)
       values (?, ?, ?, ?, ?)`,
    )
    .bind(crypto.randomUUID(), eventType, source, description, relatedId)
    .run();
}

export async function getActivity(): Promise<ActivityEvent[]> {
  const db = await getDb();
  if (!db) return [];
  try {
    const cutoff = new Date(Date.now() - 30 * 86400000).toISOString();
    await db.prepare("delete from activity_log where created_at < ?").bind(cutoff).run();
    const { results } = await db
      .prepare("select * from activity_log order by created_at desc limit 500")
      .all<ActivityEvent>();
    return results ?? [];
  } catch {
    return [];
  }
}

export async function getCustomers(): Promise<CustomerSummary[]> {
  const db = await getDb();
  if (!db) return [];
  try {
    const { results } = await db
      .prepare(
        `select email, max(full_name) as name, max(phone) as phone,
                count(*) as moves, min(created_at) as created_at
         from bookings group by lower(email) order by created_at desc`,
      )
      .all<CustomerSummary>();
    return results ?? [];
  } catch {
    return [];
  }
}

export type DashboardData = {
  allTimeRevenue: number;
  monthRevenue: number;
  monthProfit: number;
  completedMoves: number;
  totalMoves: number;
  totalCustomers: number;
  upcoming: Booking[];
};

export async function getDashboardData(): Promise<DashboardData> {
  const bookings = await getBookings();
  const customers = new Set(bookings.map((booking) => booking.email.toLowerCase()));
  const now = new Date();
  const month = now.toISOString().slice(0, 7);
  const completed = bookings.filter((booking) => moveStatus(booking.status) === "Completed");
  const thisMonth = completed.filter((booking) => booking.move_date.startsWith(month));
  const upcoming = bookings
    .filter((booking) => {
      const status = moveStatus(booking.status);
      return status === "New" || status === "Upcoming";
    })
    .sort((a, b) => (a.move_date || "9999").localeCompare(b.move_date || "9999"))
    .slice(0, 5);
  return {
    allTimeRevenue: completed.reduce((sum, booking) => sum + Number(booking.quote || 0), 0),
    monthRevenue: thisMonth.reduce((sum, booking) => sum + Number(booking.quote || 0), 0),
    monthProfit: thisMonth.reduce(
      (sum, booking) => sum + Number(booking.quote || 0) - Number(booking.expenses || 0),
      0,
    ),
    completedMoves: completed.length,
    totalMoves: bookings.length,
    totalCustomers: customers.size,
    upcoming,
  };
}

export function filterBookingsByRange(bookings: Booking[], from: string, to: string) {
  return bookings.filter((booking) => {
    const value = booking.move_date || booking.created_at.slice(0, 10);
    return (!from || value >= from) && (!to || value <= to);
  });
}
