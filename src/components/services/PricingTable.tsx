export type PricingRow = {
  /** Row label shown in the first column. */
  label: string;
  /** One value per data column (aligns with `columns` minus the first header). */
  values: string[];
};

type Props = {
  /** Column headings. The first is the row-label column header. */
  columns: string[];
  rows: PricingRow[];
  className?: string;
};

/**
 * Reusable, responsive pricing table.
 * Desktop: a styled table. Mobile: stacked cards (one per row).
 */
export default function PricingTable({ columns, rows, className = "" }: Props) {
  const [rowHeader, ...dataColumns] = columns;

  return (
    <div className={className}>
      {/* Desktop / tablet table */}
      <div className="hidden overflow-hidden rounded-2xl border border-black/10 shadow-sm sm:block">
        <table className="w-full border-collapse text-left">
          <thead>
            <tr className="bg-brand-navy text-white">
              {columns.map((col, i) => (
                <th
                  key={col}
                  scope="col"
                  className={`px-6 py-4 text-sm font-bold uppercase tracking-wide ${
                    i === 0 ? "" : "text-center"
                  }`}
                >
                  {col}
                </th>
              ))}
            </tr>
          </thead>
          <tbody>
            {rows.map((row, r) => (
              <tr
                key={row.label}
                className={r % 2 === 0 ? "bg-white" : "bg-brand-grey"}
              >
                <th
                  scope="row"
                  className="px-6 py-4 text-sm font-semibold text-brand-navy"
                >
                  {row.label}
                </th>
                {row.values.map((value, i) => (
                  <td
                    key={dataColumns[i] ?? i}
                    className="px-6 py-4 text-center text-base font-medium text-brand-charcoal"
                  >
                    {value}
                  </td>
                ))}
              </tr>
            ))}
          </tbody>
        </table>
      </div>

      {/* Mobile stacked cards */}
      <div className="space-y-4 sm:hidden">
        {rows.map((row) => (
          <div
            key={row.label}
            className="overflow-hidden rounded-2xl border border-black/10 shadow-sm"
          >
            <p className="bg-brand-navy px-5 py-3 text-sm font-bold uppercase tracking-wide text-white">
              {row.label}
            </p>
            <dl className="divide-y divide-black/5">
              {row.values.map((value, i) => (
                // Extra right padding keeps the value clear of the fixed WhatsApp
                // FAB, which floats over the right edge on mobile.
                <div key={dataColumns[i] ?? i} className="flex items-center justify-between py-3 pl-5 pr-16">
                  <dt className="text-sm font-semibold text-brand-navy">{dataColumns[i]}</dt>
                  <dd className="text-base font-medium text-brand-charcoal">{value}</dd>
                </div>
              ))}
            </dl>
          </div>
        ))}
      </div>
      <span className="sr-only">{rowHeader}</span>
    </div>
  );
}
