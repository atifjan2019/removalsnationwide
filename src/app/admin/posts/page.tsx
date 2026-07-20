import Link from "next/link";
import { getDbPosts } from "@/lib/cms";
import { deletePost } from "@/app/admin/actions";
import DeleteButton from "@/components/admin/DeleteButton";
import { EyeIcon, PencilIcon } from "@/components/admin/Icons";

export const dynamic = "force-dynamic";

export default async function AdminPostsPage() {
  const posts = await getDbPosts(true);

  return (
    <div>
      <div className="flex items-center justify-between">
        <h1 className="text-2xl font-bold text-brand-navy">Posts</h1>
        <Link
          href="/admin/posts/new"
          className="rounded-lg bg-brand-red px-5 py-2.5 text-sm font-semibold text-white transition hover:bg-brand-red-dark"
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
                        p.published ? "bg-black text-white" : "bg-brand-red text-white"
                      }`}
                    >
                      {p.published ? "Published" : "Draft"}
                    </span>
                  </td>
                  <td className="px-5 py-3">
                    <div className="flex items-center justify-end gap-1">
                      <Link
                        href={`/news/${p.slug}`}
                        target="_blank"
                        title="View post"
                        aria-label="View post"
                        className="inline-flex h-9 w-9 items-center justify-center rounded-lg text-brand-navy transition hover:bg-slate-100"
                      >
                        <EyeIcon className="h-5 w-5" />
                      </Link>
                      <Link
                        href={`/admin/posts/${p.id}`}
                        title="Edit"
                        aria-label="Edit"
                        className="inline-flex h-9 w-9 items-center justify-center rounded-lg text-brand-red transition hover:bg-brand-red/10"
                      >
                        <PencilIcon className="h-5 w-5" />
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
