-- Operational admin dashboard additions. Apply once to existing databases.
alter table bookings add column from_address text not null default '';
alter table bookings add column to_address text not null default '';
alter table bookings add column quote real not null default 0;
alter table bookings add column expenses real not null default 0;
alter table bookings add column customer_email_sent integer not null default 0;
alter table bookings add column admin_email_sent integer not null default 0;
alter table bookings add column email_checked_at text not null default '';

alter table settings add column show_phone integer not null default 1;
alter table settings add column url_instagram text not null default '';
alter table settings add column url_youtube text not null default '';
alter table settings add column url_tiktok text not null default '';
alter table settings add column footer_logo_url text not null default '';

create table if not exists activity_log (
  id          text primary key,
  event_type  text not null,
  source      text not null default 'app',
  description text not null,
  related_id  text not null default '',
  created_at  text not null default (strftime('%Y-%m-%dT%H:%M:%fZ', 'now'))
);

create table if not exists site_assets (
  kind        text primary key check (kind in ('logo', 'favicon', 'footer-logo')),
  data        blob not null,
  mime_type   text not null,
  updated_at  text not null default (strftime('%Y-%m-%dT%H:%M:%fZ', 'now'))
);

create index if not exists activity_log_created_at_idx on activity_log (created_at desc);
create index if not exists bookings_move_date_idx on bookings (move_date asc);
