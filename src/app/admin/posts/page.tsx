import Link from "next/link";
import { getDbPosts } from "@/lib/cms";
import { deletePost } from "@/app/admin/actions";
import DeleteButton from "@/components/admin/DeleteButton";

export const dynamic = "force-dynamic";

export default async function AdminPostsPage() {
  const posts = await getDbPosts(true);

  return (
    <div>
      <div className="flex items-center justify-between">
        <h1 className="text-2xl font-bold text-brand-navy">Posts</h1>
        <Link
          href="/admin/posts/new"
          className="rounded-lg bg-brand-orange px-5 py-2.5 text-sm font-semibold text-white transition hover:bg-brand-orange-dark"
        >
          + New Post
        </Link>
      </div>

      <div className="mt-8 overflow-hidden rounded-2xl border border-black/5 bg-white shadow-sm">
        {posts.length === 0 ? (
          <p className="p-8 text-center text-sm text-brand-charcoal/60">
            No posts yet. Create your first one.
          </p>
        ) : (
          <table className="w-full text-left">
            <thead className="bg-brand-grey text-xs font-bold uppercase tracking-wide text-brand-navy">
              <tr>
                <th className="px-5 py-3">Title</th>
                <th className="px-5 py-3">Date</th>
                <th className="px-5 py-3">Status</th>
                <th className="px-5 py-3 text-right">Actions</th>
              </tr>
            </thead>
            <tbody className="divide-y divide-black/5">
              {posts.map((p) => (
                <tr key={p.id}>
                  <td className="px-5 py-3">
                    <p className="font-semibold text-brand-navy">{p.title}</p>
                    <p className="text-xs text-brand-charcoal/50">/news/{p.slug}</p>
                  </td>
                  <td className="px-5 py-3 text-sm text-brand-charcoal/70">{p.date}</td>
                  <td className="px-5 py-3">
                    <span
                      className={`rounded-full px-2.5 py-1 text-xs font-semibold ${
                        p.published ? "bg-green-100 text-green-700" : "bg-amber-100 text-amber-700"
                      }`}
                    >
                      {p.published ? "Published" : "Draft"}
                    </span>
                  </td>
                  <td className="px-5 py-3">
                    <div className="flex items-center justify-end gap-4">
                      <Link
                        href={`/admin/posts/${p.id}`}
                        className="text-sm font-semibold text-brand-orange hover:underline"
                      >
                        Edit
                      </Link>
                      <DeleteButton id={p.id} action={deletePost} />
                    </div>
                  </td>
                </tr>
              ))}
            </tbody>
          </table>
        )}
      </div>
    </div>
  );
}
