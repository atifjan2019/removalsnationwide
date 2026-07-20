-- Preserve Google route details for admin notifications and email resends.
alter table bookings add column route_distance text not null default '';
alter table bookings add column route_duration text not null default '';
