-- ============================================================
-- Top Removals — CMS schema (run in Supabase SQL editor)
-- Tables: posts (Moving News blog) + areas (service-area pages)
-- ============================================================

-- Blog posts ------------------------------------------------
create table if not exists public.posts (
  id          uuid primary key default gen_random_uuid(),
  slug        text not null unique,
  title       text not null,
  excerpt     text not null default '',
  date        text not null default '',           -- display date, DD/MM/YYYY
  author      text not null default 'Stephanie Cooper',
  author_bio  text not null default '',
  cover_image text not null default '',            -- /news/<slug>.jpg or a URL
  body_html   text not null default '',            -- Quill HTML (sanitised on save)
  published   boolean not null default true,
  created_at  timestamptz not null default now()
);

-- Service-area pages ----------------------------------------
create table if not exists public.areas (
  id          uuid primary key default gen_random_uuid(),
  slug        text not null unique,
  name        text not null,
  intro       text not null default '',
  body_html   text not null default '',            -- Quill HTML (sanitised on save)
  cover_image text not null default '',
  published   boolean not null default true,
  created_at  timestamptz not null default now()
);

create index if not exists posts_created_at_idx on public.posts (created_at desc);
create index if not exists areas_name_idx on public.areas (name asc);

-- Row Level Security ----------------------------------------
-- The app reads/writes server-side with the SERVICE ROLE key, which bypasses
-- RLS. We still enable RLS and expose a public read of published rows only,
-- in case the anon key is ever used from the browser.
alter table public.posts enable row level security;
alter table public.areas enable row level security;

drop policy if exists "public read published posts" on public.posts;
create policy "public read published posts"
  on public.posts for select
  using (published = true);

drop policy if exists "public read published areas" on public.areas;
create policy "public read published areas"
  on public.areas for select
  using (published = true);

-- Optional: seed one example area so /areas isn't empty before you add your own.
insert into public.areas (slug, name, intro, body_html, cover_image, published)
values (
  'london',
  'London',
  'Top Removals provides house, office and international removals across all of London.',
  '<p>Welcome to our London service area. Edit this content from the admin dashboard.</p>',
  '',
  true
)
on conflict (slug) do nothing;
