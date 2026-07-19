import Link from "next/link";
import { getDbPosts, getAreas } from "@/lib/cms";
import { getDb } from "@/lib/d1";

export const dynamic = "force-dynamic";

export default async function AdminDashboard() {
  const configured = (await getDb()) !== null;
  const [posts, areas] = await Promise.all([getDbPosts(true), getAreas(true)]);

  return (
    <div>
      <h1 className="text-2xl font-bold text-brand-navy">Dashboard</h1>
      <p className="mt-1 text-sm text-brand-charcoal/70">
        Manage your Moving News posts and service areas.
      </p>

      {!configured && (
        <div className="mt-6 rounded-xl border border-brand-red bg-white p-4 text-sm text-black">
          The D1 database is not available in this environment. Check the{" "}
          <code className="font-mono">DB</code> binding in{" "}
          <code className="font-mono">wrangler.jsonc</code>, and apply{" "}
          <code className="font-mono">d1/schema.sql</code> with{" "}
          <code className="font-mono">wrangler d1 execute</code>.
        </div>
      )}

      <div className="mt-8 grid gap-6 sm:grid-cols-2">
        <Link
          href="/admin/posts"
          className="rounded-2xl border border-black/5 bg-white p-7 shadow-sm transition hover:shadow-md"
        >
          <p className="text-4xl font-extrabold text-brand-red">{posts.length}</p>
          <p className="mt-1 text-lg font-bold text-brand-navy">Blog Posts</p>
          <p className="mt-1 text-sm text-brand-charcoal/60">Manage Moving News articles →</p>
        </Link>
        <Link
          href="/admin/areas"
          className="rounded-2xl border border-black/5 bg-white p-7 shadow-sm transition hover:shadow-md"
        >
          <p className="text-4xl font-extrabold text-brand-red">{areas.length}</p>
          <p className="mt-1 text-lg font-bold text-brand-navy">Service Areas</p>
          <p className="mt-1 text-sm text-brand-charcoal/60">Manage area pages →</p>
        </Link>
      </div>

      <div className="mt-8 flex flex-wrap gap-3">
        <Link
          href="/admin/posts/new"
          className="rounded-lg bg-brand-red px-5 py-3 text-sm font-semibold text-white transition hover:bg-brand-red-dark"
        >
          + New Post
        </Link>
        <Link
          href="/admin/areas/new"
          className="rounded-lg bg-brand-navy px-5 py-3 text-sm font-semibold text-white transition hover:bg-brand-navy-dark"
        >
          + New Area
        </Link>
      </div>
    </div>
  );
}
