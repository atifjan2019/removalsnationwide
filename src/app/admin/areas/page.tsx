import Link from "next/link";
import { getAreas } from "@/lib/cms";
import { deleteArea } from "@/app/admin/actions";
import DeleteButton from "@/components/admin/DeleteButton";
import { PencilIcon } from "@/components/admin/Icons";

export const dynamic = "force-dynamic";

export default async function AdminAreasPage() {
  const areas = await getAreas(true);

  return (
    <div>
      <div className="flex items-center justify-between">
        <h1 className="text-2xl font-bold text-brand-navy">Service Areas</h1>
        <Link
          href="/admin/areas/new"
          className="rounded-lg bg-brand-red px-5 py-2.5 text-sm font-semibold text-white transition hover:bg-brand-red-dark"
        >
          + New Area
        </Link>
      </div>

      <div className="mt-8 overflow-hidden rounded-2xl border border-black/5 bg-white shadow-sm">
        {areas.length === 0 ? (
          <p className="p-8 text-center text-sm text-brand-charcoal/60">
            No areas yet. Create your first one.
          </p>
        ) : (
          <table className="w-full text-left">
            <thead className="bg-brand-grey text-xs font-bold uppercase tracking-wide text-brand-navy">
              <tr>
                <th className="px-5 py-3">Name</th>
                <th className="px-5 py-3">Status</th>
                <th className="px-5 py-3 text-right">Actions</th>
              </tr>
            </thead>
            <tbody className="divide-y divide-black/5">
              {areas.map((a) => (
                <tr key={a.id}>
                  <td className="px-5 py-3">
                    <p className="font-semibold text-brand-navy">{a.name}</p>
                    <p className="text-xs text-brand-charcoal/50">/areas/{a.slug}</p>
                  </td>
                  <td className="px-5 py-3">
                    <span
                      className={`rounded-full px-2.5 py-1 text-xs font-semibold ${
                        a.published ? "bg-black text-white" : "bg-brand-red text-white"
                      }`}
                    >
                      {a.published ? "Published" : "Draft"}
                    </span>
                  </td>
                  <td className="px-5 py-3">
                    <div className="flex items-center justify-end gap-1">
                      <Link
                        href={`/admin/areas/${a.id}`}
                        title="Edit"
                        aria-label="Edit"
                        className="inline-flex h-9 w-9 items-center justify-center rounded-lg text-brand-red transition hover:bg-brand-red/10"
                      >
                        <PencilIcon className="h-5 w-5" />
                      </Link>
                      <DeleteButton id={a.id} action={deleteArea} />
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
