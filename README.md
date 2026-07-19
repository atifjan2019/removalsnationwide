# Removals Nationwide

Marketing site for Removals Nationwide, built with Next.js 16 (App Router) and
deployed to **Cloudflare Workers** via the OpenNext adapter.

- Live: https://removalsnationwide.uk
- Media (R2): https://media.removalsnationwide.uk

## Stack

| Concern   | Choice                                         |
| --------- | ---------------------------------------------- |
| Framework | Next.js 16, App Router, TypeScript, Tailwind 4 |
| Hosting   | Cloudflare Workers (`@opennextjs/cloudflare`)  |
| Database  | Cloudflare D1 (SQLite) — `DB` binding          |
| Media     | Cloudflare R2 — `MEDIA` binding                |
| ISR cache | Cloudflare R2 — `NEXT_INC_CACHE_R2_BUCKET`     |
| Sanitiser | `sanitize-html`                                |

## Getting started

```bash
npm install
npm run dev          # http://localhost:3000
```

`predev` and `prebuild` run `scripts/build-news.mjs`, which compiles
`content/news/*.md` into `src/generated/news.json`. That file is generated, is
not committed, and should not be edited by hand — change the markdown instead.

Local dev gets real Cloudflare bindings through the wrangler platform proxy,
wired up by `initOpenNextCloudflareForDev()` in `next.config.ts`. Seed the local
D1 database first:

```bash
npm run db:local
```

## Deploying

Pushes to `main` build and deploy automatically via Cloudflare Workers Builds.
To deploy by hand:

```bash
npm run cf:deploy
```

### Constraints worth knowing

These are not preferences — each one caused a production failure and is load
bearing:

- **Build with Webpack, not Turbopack.** `npm run build` passes `--webpack`.
  Turbopack emits chunks named `[root-of-the-server]__*.js`, and the square
  brackets break chunk resolution inside the Worker, giving a `ChunkLoadError`
  and a 500 on every SSR route.
- **No filesystem at runtime.** Workers has no `fs`. Anything reading from disk
  must be precompiled at build time, which is why the news markdown becomes
  JSON.
- **No Node.js middleware.** Next 16 proxies default to the Node runtime and
  throw if `runtime` is set; OpenNext refuses to build them. `src/proxy.ts` was
  removed for this reason.
- **Node-only dependencies fail.** `isomorphic-dompurify` pulls in jsdom and
  cannot run here.
- **Building on Windows needs Developer Mode**, otherwise OpenNext's symlink
  step fails with `EPERM`. Cloudflare's Linux CI is unaffected.

## Database

Schema lives in `d1/schema.sql`.

```bash
npm run db:local     # apply to the local dev database
npm run db:remote    # apply to production
```

SQLite differs from the previous Postgres schema in ways the data layer papers
over: ids are TEXT generated with `crypto.randomUUID()`, and `published` is
INTEGER 0/1 normalised back to a boolean in `src/lib/d1.ts`. There is no
row-level security — a D1 binding is not reachable from the browser, but it
also means every query is fully trusted, so public read paths must filter
`published` explicitly.

After changing bindings in `wrangler.jsonc`, regenerate types:

```bash
npx wrangler types
```

`worker-configuration.d.ts` is generated but **is** committed, because
`next build` typechecks and needs it on a fresh clone. Mirror any new binding
in `cloudflare-env.d.ts` so `getCloudflareContext().env` stays typed.

## Images

`next/image` runs with `unoptimized: true`. Workers has no Vercel image
optimizer, and Cloudflare Image Resizing is a paid zone feature. If it is
enabled later, drop that flag and add a loader pointing at `/cdn-cgi/image/`.

Some hero images are still served from the previous WordPress host, which is
allow-listed in `next.config.ts` until those assets move to R2.
