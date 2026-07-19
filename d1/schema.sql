-- ============================================================
-- Removals Nationwide — CMS schema (Cloudflare D1 / SQLite)
-- Tables: posts (Moving News blog) + areas (service-area pages)
--
-- Apply with:
--   wrangler d1 execute removals-nationwide --local  --file=./d1/schema.sql
--   wrangler d1 execute removals-nationwide --remote --file=./d1/schema.sql
--
-- Ported from the previous Postgres/Supabase schema. Three differences matter:
--   * No gen_random_uuid(). Ids are TEXT, generated app-side with
--     crypto.randomUUID() before insert.
--   * No boolean type. `published` is INTEGER 0/1; the data layer maps it back
--     to a JS boolean so callers still see a real boolean.
--   * No row-level security. In Postgres, RLS was the backstop in case the anon
--     key ever reached the browser. A D1 binding is not reachable from the
--     browser at all, so the equivalent guarantee comes from the binding itself
--     — but it also means every query here is fully trusted. Filter `published`
--     explicitly on public read paths.
-- ============================================================

-- Blog posts ------------------------------------------------
create table if not exists posts (
  id          text    primary key,
  slug        text    not null unique,
  title       text    not null,
  excerpt     text    not null default '',
  date        text    not null default '',            -- display date, DD/MM/YYYY
  author      text    not null default 'Stephanie Cooper',
  author_bio  text    not null default '',
  cover_image text    not null default '',            -- /news/<slug>.jpg or a URL
  body_html   text    not null default '',            -- Quill HTML (sanitised on save)
  published   integer not null default 1,             -- 0/1, mapped to boolean in cms.ts
  created_at  text    not null default (strftime('%Y-%m-%dT%H:%M:%fZ', 'now'))
);

-- Service-area pages ----------------------------------------
create table if not exists areas (
  id          text    primary key,
  slug        text    not null unique,
  name        text    not null,
  intro       text    not null default '',
  body_html   text    not null default '',            -- Quill HTML (sanitised on save)
  cover_image text    not null default '',
  published   integer not null default 1,
  created_at  text    not null default (strftime('%Y-%m-%dT%H:%M:%fZ', 'now'))
);

create index if not exists posts_created_at_idx on posts (created_at desc);
create index if not exists areas_name_idx       on areas (name asc);

-- Partial indexes for the public read paths, which always filter on published.
create index if not exists posts_published_idx on posts (published, created_at desc);
create index if not exists areas_published_idx on areas (published, name asc);

-- Seed one example area so /areas isn't empty before real content is added.
insert or ignore into areas (id, slug, name, intro, body_html, cover_image, published)
values (
  'a0000000-0000-4000-8000-000000000001',
  'london',
  'London',
  'Removals Nationwide provides house, office and international removals across all of London.',
  '<p>Welcome to our London service area. Edit this content from the admin dashboard.</p>',
  '',
  1
);
