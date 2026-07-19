import DeleteButton from "@/components/admin/DeleteButton";
import { BOOKING_STATUSES, getBookings } from "@/lib/bookings";
import { deleteBooking, updateBookingStatus } from "@/app/admin/bookings/actions";

export const dynamic = "force-dynamic";

const moveLabels: Record<string, string> = {
  house: "House move",
  flat: "Flat or studio",
  office: "Office move",
  items: "Single items",
};

const dateLabel = (value: string) => {
  if (!value) return "Flexible";
  const date = new Date(`${value}T12:00:00`);
  return Number.isNaN(date.getTime())
    ? value
    : date.toLocaleDateString("en-GB", { day: "numeric", month: "short", year: "numeric" });
};

export default async function AdminBookingsPage() {
  const bookings = await getBookings();

  return (
    <div>
      <div className="flex flex-wrap items-end justify-between gap-3">
        <div>
          <h1 className="text-2xl font-bold text-black">Bookings</h1>
          <p className="mt-1 text-sm text-black/60">Booking requests submitted through the website.</p>
        </div>
        <span className="rounded-full bg-brand-red px-3 py-1 text-sm font-bold text-white">
          {bookings.length} total
        </span>
      </div>

      <div className="mt-8 overflow-x-auto rounded-2xl border border-black/5 bg-white shadow-sm">
        {bookings.length === 0 ? (
          <p className="p-10 text-center text-sm text-black/55">
            No booking requests yet. New submissions will appear here.
          </p>
        ) : (
          <table className="min-w-[1050px] w-full text-left">
            <thead className="bg-brand-grey text-xs font-bold uppercase tracking-wide text-black">
              <tr>
                <th className="px-5 py-3">Customer</th>
                <th className="px-5 py-3">Move</th>
                <th className="px-5 py-3">Route</th>
                <th className="px-5 py-3">Date</th>
                <th className="px-5 py-3">Received</th>
                <th className="px-5 py-3">Status</th>
                <th className="px-5 py-3 text-right">Action</th>
              </tr>
            </thead>
            <tbody className="divide-y divide-black/5">
              {bookings.map((booking) => {
                const statusAction = updateBookingStatus.bind(null, booking.id);
                return (
                  <tr key={booking.id} className="align-top">
                    <td className="px-5 py-4">
                      <p className="font-semibold text-black">{booking.full_name}</p>
                      <a href={`tel:${booking.phone}`} className="mt-1 block text-xs text-brand-red hover:underline">
                        {booking.phone}
                      </a>
                      <a href={`mailto:${booking.email}`} className="block text-xs text-black/55 hover:text-brand-red">
                        {booking.email}
                      </a>
                    </td>
                    <td className="px-5 py-4 text-sm text-black/70">
                      <p className="font-semibold text-black">{moveLabels[booking.move_type] ?? booking.move_type}</p>
                      {(booking.move_type === "house" || booking.move_type === "flat") && (
                        <p className="mt-1 text-xs">{booking.bedrooms === 0 ? "Studio" : `${booking.bedrooms}${booking.bedrooms >= 5 ? "+" : ""} bedroom`}</p>
                      )}
                      {booking.notes && <p className="mt-2 max-w-56 text-xs text-black/50">{booking.notes}</p>}
                    </td>
                    <td className="px-5 py-4 text-sm font-medium text-black">
                      {booking.from_postcode}<span className="mx-2 text-brand-red">→</span>{booking.to_postcode}
                    </td>
                    <td className="px-5 py-4 text-sm text-black/70">
                      {booking.flexible_dates ? "Flexible" : dateLabel(booking.move_date)}
                    </td>
                    <td className="px-5 py-4 text-xs text-black/55">
                      {new Date(booking.created_at).toLocaleString("en-GB", {
                        day: "numeric",
                        month: "short",
                        year: "numeric",
                        hour: "2-digit",
                        minute: "2-digit",
                      })}
                    </td>
                    <td className="px-5 py-4">
                      <form action={statusAction} className="flex items-center gap-2">
                        <select
                          name="status"
                          defaultValue={booking.status}
                          className="rounded-lg border border-black/10 bg-white px-2 py-2 text-xs font-semibold text-black"
                        >
                          {BOOKING_STATUSES.map((status) => (
                            <option key={status} value={status}>{status}</option>
                          ))}
                        </select>
                        <button type="submit" className="rounded-lg bg-black px-3 py-2 text-xs font-semibold text-white hover:bg-brand-red">
                          Save
                        </button>
                      </form>
                    </td>
                    <td className="px-5 py-4 text-right">
                      <DeleteButton id={booking.id} action={deleteBooking} />
                    </td>
                  </tr>
                );
              })}
            </tbody>
          </table>
        )}
      </div>
    </div>
  );
}
