import BookingsManager from "@/components/admin/BookingsManager";
import { getBookings, MOVE_STATUSES, type MoveStatus } from "@/lib/bookings";
import { getCloudflareContext } from "@opennextjs/cloudflare";

export const dynamic = "force-dynamic";

export default async function AdminBookingsPage({
  searchParams,
}: {
  searchParams: Promise<{ status?: string; date?: string }>;
}) {
  const [bookings, query, { env }] = await Promise.all([
    getBookings(),
    searchParams,
    getCloudflareContext({ async: true }),
  ]);
  const initialStatus = MOVE_STATUSES.includes(query.status as MoveStatus)
    ? (query.status as MoveStatus)
    : "All";
  return (
    <BookingsManager
      bookings={bookings}
      initialStatus={initialStatus}
      dateFilter={query.date || ""}
      mapsApiKey={env.NEXT_PUBLIC_GOOGLE_MAPS_API_KEY || process.env.NEXT_PUBLIC_GOOGLE_MAPS_API_KEY || ""}
    />
  );
}
