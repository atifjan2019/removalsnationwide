import Link from "next/link";
import { getAreas } from "@/lib/cms";
import { deleteArea } from "@/app/admin/actions";
import DeleteButton from "@/components/admin/DeleteButton";
import { EyeIcon, PencilIcon } from "@/components/admin/Icons";

export const dynamic = "force-dynamic";

const PAGE_SIZE = 10;

type AdminAreasPageProps = {
  searchParams: Promise<{
    q?: string | string[];
    page?: string | string[];
  }>;
};

function firstValue(value: string | string[] | undefined) {
  return Array.isArray(value) ? value[0] : value;
}

function paginationHref(page: number, query: string) {
  const params = new URLSearchParams();
  if (query) params.set("q", query);
  if (page > 1) params.set("page", String(page));
  const search = params.toString();
  return search ? `/admin/areas?${search}` : "/admin/areas";
}

function paginationItems(currentPage: number, totalPages: number) {
  const pages = new Set([1, totalPages]);
  for (let page = currentPage - 2; page <= currentPage + 2; page += 1) {
    if (page > 1 && page < totalPages) pages.add(page);
  }

  const sortedPages = [...pages].sort((a, b) => a - b);
  return sortedPages.flatMap<(number | "ellipsis")>((page, index) => {
    const previousPage = sortedPages[index - 1];
    return previousPage && page - previousPage > 1 ? ["ellipsis", page] : [page];
  });
}

export default async function AdminAreasPage({ searchParams }: AdminAreasPageProps) {
  const areas = await getAreas(true);
  const params = await searchParams;
  const query = (firstValue(params.q) ?? "").trim();
  const normalisedQuery = query.toLocaleLowerCase("en-GB");
  const filteredAreas = normalisedQuery
    ? areas.filter((area) =>
        `${area.name} ${area.slug}`.toLocaleLowerCase("en-GB").includes(normalisedQuery),
      )
    : areas;
  const requestedPage = Number.parseInt(firstValue(params.page) ?? "1", 10);
  const totalPages = Math.max(1, Math.ceil(filteredAreas.length / PAGE_SIZE));
  const currentPage = Number.isFinite(requestedPage)
    ? Math.min(Math.max(requestedPage, 1), totalPages)
    : 1;
  const startIndex = (currentPage - 1) * PAGE_SIZE;
  const visibleAreas = filteredAreas.slice(startIndex, startIndex + PAGE_SIZE);
  const firstResult = filteredAreas.length === 0 ? 0 : startIndex + 1;
  const lastResult = Math.min(startIndex + PAGE_SIZE, filteredAreas.length);

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

      <div className="mt-8 rounded-2xl border border-black/5 bg-white shadow-sm">
        <div className="border-b border-black/5 p-4 sm:p-5">
          <form action="/admin/areas" method="get" className="flex flex-col gap-3 sm:flex-row">
            <label htmlFor="area-search" className="sr-only">
              Search service areas
            </label>
            <input
              id="area-search"
              name="q"
              type="search"
              defaultValue={query}
              placeholder="Search by area name or slug…"
              className="min-w-0 flex-1 rounded-lg border border-black/10 bg-white px-4 py-2.5 text-sm text-brand-navy outline-none transition placeholder:text-brand-charcoal/40 focus:border-brand-red focus:ring-2 focus:ring-brand-red/15"
            />
            <div className="flex gap-2">
              <button
                type="submit"
                className="flex-1 rounded-lg bg-brand-navy px-5 py-2.5 text-sm font-semibold text-white transition hover:bg-brand-navy/90 sm:flex-none"
              >
                Search
              </button>
              {query ? (
                <Link
                  href="/admin/areas"
                  className="flex-1 rounded-lg border border-black/10 px-5 py-2.5 text-center text-sm font-semibold text-brand-navy transition hover:bg-slate-50 sm:flex-none"
                >
                  Clear
                </Link>
              ) : null}
            </div>
          </form>
        </div>

        {areas.length === 0 ? (
          <p className="p-8 text-center text-sm text-brand-charcoal/60">
            No areas yet. Create your first one.
          </p>
        ) : filteredAreas.length === 0 ? (
          <div className="p-8 text-center">
            <p className="text-sm font-semibold text-brand-navy">No areas found</p>
            <p className="mt-1 text-sm text-brand-charcoal/60">
              Try another name or slug.
            </p>
          </div>
        ) : (
          <>
            <div className="overflow-x-auto">
              <table className="w-full min-w-[560px] text-left">
                <thead className="bg-brand-grey text-xs font-bold uppercase tracking-wide text-brand-navy">
                  <tr>
                    <th className="px-5 py-3">Name</th>
                    <th className="px-5 py-3">Status</th>
                    <th className="px-5 py-3 text-right">Actions</th>
                  </tr>
                </thead>
                <tbody className="divide-y divide-black/5">
                  {visibleAreas.map((a) => (
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
                            href={`/areas/${a.slug}`}
                            target="_blank"
                            title="View page"
                            aria-label={`View ${a.name} page`}
                            className="inline-flex h-9 w-9 items-center justify-center rounded-lg text-brand-navy transition hover:bg-slate-100"
                          >
                            <EyeIcon className="h-5 w-5" />
                          </Link>
                          <Link
                            href={`/admin/areas/${a.id}`}
                            title="Edit"
                            aria-label={`Edit ${a.name}`}
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
            </div>

            <div className="flex flex-col gap-4 border-t border-black/5 px-4 py-4 sm:flex-row sm:items-center sm:justify-between sm:px-5">
              <p className="text-sm text-brand-charcoal/60">
                Showing {firstResult}–{lastResult} of {filteredAreas.length}{" "}
                {filteredAreas.length === 1 ? "area" : "areas"}
              </p>

              {totalPages > 1 ? (
                <nav aria-label="Areas pagination" className="flex flex-wrap items-center gap-1">
                  <Link
                    href={paginationHref(currentPage - 1, query)}
                    aria-disabled={currentPage === 1}
                    tabIndex={currentPage === 1 ? -1 : undefined}
                    className={`rounded-lg border px-3 py-2 text-sm font-semibold transition ${
                      currentPage === 1
                        ? "pointer-events-none border-black/5 text-brand-charcoal/30"
                        : "border-black/10 text-brand-navy hover:bg-slate-50"
                    }`}
                  >
                    Previous
                  </Link>

                  {paginationItems(currentPage, totalPages).map((item, index) =>
                    item === "ellipsis" ? (
                      <span
                        key={`ellipsis-${index}`}
                        aria-hidden="true"
                        className="px-2 text-sm text-brand-charcoal/50"
                      >
                        …
                      </span>
                    ) : (
                      <Link
                        key={item}
                        href={paginationHref(item, query)}
                        aria-current={item === currentPage ? "page" : undefined}
                        aria-label={`Page ${item}`}
                        className={`inline-flex h-9 min-w-9 items-center justify-center rounded-lg px-2 text-sm font-semibold transition ${
                          item === currentPage
                            ? "bg-brand-red text-white"
                            : "text-brand-navy hover:bg-slate-100"
                        }`}
                      >
                        {item}
                      </Link>
                    ),
                  )}

                  <Link
                    href={paginationHref(currentPage + 1, query)}
                    aria-disabled={currentPage === totalPages}
                    tabIndex={currentPage === totalPages ? -1 : undefined}
                    className={`rounded-lg border px-3 py-2 text-sm font-semibold transition ${
                      currentPage === totalPages
                        ? "pointer-events-none border-black/5 text-brand-charcoal/30"
                        : "border-black/10 text-brand-navy hover:bg-slate-50"
                    }`}
                  >
                    Next
                  </Link>
                </nav>
              ) : null}
            </div>
          </>
        )}
      </div>
    </div>
  );
}
