# Removals Nationwide

Marketing site for Removals Nationwide, built with Next.js 16 (App Router) and
deployed to **Vercel**. The database and media stayed on Cloudflare: D1 for
content and bookings, R2 for images and customers' uploaded files.

- Live: https://removalsnationwide.uk
- Media (R2): https://media.removalsnationwide.uk

## Stack

| Concern   | Choice                                                        |
| --------- | ------------------------------------------------------------- |
| Framework | Next.js 16, App Router, TypeScript, Tailwind 4                |
| Hosting   | Vercel (Node.js functions, London region, see `vercel.json`)  |
| Database  | Cloudflare D1 (SQLite) over its HTTP API — `src/lib/d1.ts`    |
| Media     | Cloudflare R2 over its S3 API — `src/lib/r2.ts`, `r2-client.ts` |
| Sanitiser | `sanitize-html`                                               |

## Getting started

```bash
npm install
cp .env.example .env.local   # then fill in CLOUDFLARE_API_TOKEN and the admin secrets
npm run dev                  # http://localhost:3000
```

`predev` and `prebuild` run `scripts/build-news.mjs`, which compiles
`content/news/*.md` into `src/generated/news.json`. That file is generated, is
not committed, and should not be edited by hand — change the markdown instead.

Development talks to the real D1 database and R2 buckets through the API token
in `.env.local`; there is no local copy of either.

## Deploying

The Vercel project `removals-nationwide` builds from this repository. To deploy
by hand from a linked checkout:

```bash
vercel deploy --prod
```

### Environment variables

See `.env.example` for the full list. The three that connect the app to
Cloudflare are `CLOUDFLARE_ACCOUNT_ID`, `CLOUDFLARE_API_TOKEN` (a token with
*D1: Edit* and *Workers R2 Storage: Edit* on the account) and
`CLOUDFLARE_D1_DATABASE_ID`. R2's S3 credentials are derived from that same
token, so no separate access keys are needed.

`ADMIN_SESSION_SECRET` also encrypts the SMTP password stored in the admin
settings. If it changes, re-enter the SMTP password in /admin/settings.

### Constraints worth knowing

- **Build with Webpack, not Turbopack.** `npm run build` passes `--webpack`.
  The site shipped that way; switching is possible but untested.
- **Binary data does not go in D1.** The D1 HTTP API carries JSON, so files
  (branding, content images, customers' documents) are stored in R2 and only
  their URL or key is kept in the database.
- **Public pages render per request.** The `(site)` layout is force-dynamic
  so edited contact details and branding appear the moment they are saved.
  Each public page view makes one small D1 read.

## Database

Schema lives in `d1/schema.sql`.

```bash
npm run db:remote    # apply to production (uses npx wrangler; log in with `npx wrangler login`)
```

SQLite differs from the previous Postgres schema in ways the data layer papers
over: ids are TEXT generated with `crypto.randomUUID()`, and `published` is
INTEGER 0/1 normalised back to a boolean in `src/lib/d1.ts`. There is no
row-level security — the database is only reachable with the server's API
token, but that also means every query is fully trusted, so public read paths
must filter `published` explicitly.

## Images

`next/image` runs with `unoptimized: true`, as it did on Cloudflare. Vercel's
image optimizer is available now: remove that flag in `next.config.ts` to turn
it on, bearing in mind the plan's image transformation allowance.

Some hero images are still served from the previous WordPress host, which is
allow-listed in `next.config.ts` until those assets move to R2.
