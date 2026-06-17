import Link from "next/link";
import { getDbPosts, getAreas } from "@/lib/cms";
import { getServiceClient } from "@/lib/supabase";

export const dynamic = "force-dynamic";

export default async function AdminDashboard() {
  const configured = getServiceClient() !== null;
  const [posts, areas] = await Promise.all([getDbPosts(true), getAreas(true)]);

  return (
    <div>
      <h1 className="text-2xl font-bold text-brand-navy">Dashboard</h1>
      <p className="mt-1 text-sm text-brand-charcoal/70">
        Manage your Moving News posts and service areas.
      </p>

      {!configured && (
        <div className="mt-6 rounded-xl border border-amber-300 bg-amber-50 p-4 text-sm text-amber-800">
          Supabase is not configured in this environment. Set{" "}
          <code className="font-mono">NEXT_PUBLIC_SUPABASE_URL</code> and{" "}
          <code className="font-mono">SUPABASE_SERVICE_ROLE_KEY</code>, and run{" "}
          <code className="font-mono">supabase/schema.sql</code> in your Supabase project.
        </div>
      )}

      <div className="mt-8 grid gap-6 sm:grid-cols-2">
        <Link
          href="/admin/posts"
          className="rounded-2xl border border-black/5 bg-white p-7 shadow-sm transition hover:shadow-md"
        >
          <p className="text-4xl font-extrabold text-brand-orange">{posts.length}</p>
          <p className="mt-1 text-lg font-bold text-brand-navy">Blog Posts</p>
          <p className="mt-1 text-sm text-brand-charcoal/60">Manage Moving News articles →</p>
        </Link>
        <Link
          href="/admin/areas"
          className="rounded-2xl border border-black/5 bg-white p-7 shadow-sm transition hover:shadow-md"
        >
          <p className="text-4xl font-extrabold text-brand-orange">{areas.length}</p>
          <p className="mt-1 text-lg font-bold text-brand-navy">Service Areas</p>
          <p className="mt-1 text-sm text-brand-charcoal/60">Manage area pages →</p>
        </Link>
      </div>

      <div className="mt-8 flex flex-wrap gap-3">
        <Link
          href="/admin/posts/new"
          className="rounded-lg bg-brand-orange px-5 py-3 text-sm font-semibold text-white transition hover:bg-brand-orange-dark"
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
