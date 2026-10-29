-- Content version for the edge HTML cache (cf-worker.ts). Every admin save that
-- changes public pages bumps v; the Worker puts v in every cache key, so all
-- data centres switch to fresh pages at once without a purge.
--
-- Apply once with:
--   wrangler d1 execute removals-nationwide --remote --file=./d1/migrations/0007_site_cache_version.sql
create table if not exists site_cache_version (
  id         integer primary key check (id = 1),
  v          integer not null default 0,
  updated_at text    not null default (strftime('%Y-%m-%dT%H:%M:%fZ', 'now'))
);
insert or ignore into site_cache_version (id, v) values (1, 0);
