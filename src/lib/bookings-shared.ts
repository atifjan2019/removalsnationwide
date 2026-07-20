export const BOOKING_STATUSES = [
  "New",
  "Contacted",
  "Quoted",
  "Booked",
  "Completed",
  "Cancelled",
] as const;

export type BookingStatus = (typeof BOOKING_STATUSES)[number];

export type Booking = {
  id: string;
  full_name: string;
  phone: string;
  email: string;
  move_type: string;
  bedrooms: number;
  from_postcode: string;
  to_postcode: string;
  from_address: string;
  to_address: string;
  route_distance: string;
  route_duration: string;
  move_date: string;
  flexible_dates: number;
  notes: string;
  status: BookingStatus;
  quote: number;
  expenses: number;
  customer_email_sent: number;
  admin_email_sent: number;
  email_checked_at: string;
  created_at: string;
  updated_at: string;
};

export const MOVE_STATUSES = ["New", "Upcoming", "Completed", "Abandoned"] as const;
export type MoveStatus = (typeof MOVE_STATUSES)[number];

export function moveStatus(status: BookingStatus): MoveStatus {
  if (status === "Completed") return "Completed";
  if (status === "Cancelled") return "Abandoned";
  if (status === "Booked") return "Upcoming";
  return "New";
}

export function bookingStatus(status: MoveStatus): BookingStatus {
  if (status === "Completed") return "Completed";
  if (status === "Abandoned") return "Cancelled";
  if (status === "Upcoming") return "Booked";
  return "New";
}

export function bookingRoute(booking: Booking) {
  return {
    from: booking.from_address || booking.from_postcode || "Not supplied",
    to: booking.to_address || booking.to_postcode || "Not supplied",
  };
}
