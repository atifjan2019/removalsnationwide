-- Move details: the answers a customer gives on their private
-- /move-details/<token>/ page after booking, and the photos and documents
-- they attach to it.
--
--   details_token        the secret in the customer's link (43 characters)
--   details              the answers, as one JSON object
--   details_version      how many times the answers have changed
--   details_save_id      the form's id for the save that made the last change
--   details_updated_at   last change to the answers or files
--   details_submitted_at when the customer pressed send; null until then
--
-- booking_files holds one row per uploaded file (the file itself lives in the
-- private R2 bucket bound as UPLOADS, under move-details/<bookingId>/<fileId>).
-- booking_files_removed notes the form's ids of files a customer removed, so a
-- removed photo cannot come back from another tab or a retried upload.
--
-- Apply once with:
--   wrangler d1 execute removals-nationwide --remote --file=./d1/migrations/0006_move_details.sql
-- A second run stops at the first ALTER ("duplicate column"), which is harmless.

alter table bookings add column details_token text;
alter table bookings add column details text;
alter table bookings add column details_version integer not null default 0;
alter table bookings add column details_save_id text;
alter table bookings add column details_updated_at text;
alter table bookings add column details_submitted_at text;

create unique index if not exists bookings_details_token_idx
  on bookings (details_token) where details_token is not null;

create table if not exists booking_files (
  id           text primary key,
  booking_id   text not null,
  client_id    text,
  name         text not null,
  content_type text not null,
  size         integer not null,
  is_image     integer not null default 0,
  thumb        text,
  r2_key       text not null,
  created_at   text not null default (strftime('%Y-%m-%dT%H:%M:%fZ', 'now'))
);

create index if not exists booking_files_booking_idx on booking_files (booking_id);
-- The form's own id for a file, so an upload sent twice is stored once.
create unique index if not exists booking_files_client_idx
  on booking_files (booking_id, client_id) where client_id is not null;
-- For the daily upload limits, which count the last day's files and add up their sizes.
create index if not exists booking_files_created_idx on booking_files (created_at, size);

create table if not exists booking_files_removed (
  booking_id text not null,
  client_id  text not null,
  removed_at text not null default (strftime('%Y-%m-%dT%H:%M:%fZ', 'now')),
  primary key (booking_id, client_id)
);
