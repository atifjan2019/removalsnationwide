import BookingsManager from "@/components/admin/BookingsManager";
import { getBookings, MOVE_STATUSES, type MoveStatus } from "@/lib/bookings";

export const dynamic = "force-dynamic";

export default async function AdminBookingsPage({
  searchParams,
}: {
  searchParams: Promise<{ status?: string; date?: string }>;
}) {
  const [bookings, query] = await Promise.all([getBookings(), searchParams]);
  const initialStatus = MOVE_STATUSES.includes(query.status as MoveStatus)
    ? (query.status as MoveStatus)
    : "All";
  return <BookingsManager bookings={bookings} initialStatus={initialStatus} dateFilter={query.date || ""} />;
}
