import { CheckIcon } from "@/components/ui/icons";

/** A plain string, or a bold lead-in followed by the rest of the line. */
export type CheckItem = string | { lead: string; text: string };

type Props = {
  items: CheckItem[];
  /** Number of columns on large screens. Defaults to 1. */
  columns?: 1 | 2 | 3;
  className?: string;
};

const colClass: Record<number, string> = {
  1: "",
  2: "sm:grid-cols-2",
  3: "sm:grid-cols-2 lg:grid-cols-3",
};

const keyOf = (item: CheckItem) => (typeof item === "string" ? item : item.lead);

/** Reusable red-check bullet list, used across service detail pages. */
export default function CheckList({ items, columns = 1, className = "" }: Props) {
  return (
    <ul className={`grid gap-x-8 gap-y-4 ${colClass[columns]} ${className}`}>
      {items.map((item) => (
        <li key={keyOf(item)} className="flex items-start gap-3">
          <span className="mt-0.5 inline-flex h-6 w-6 shrink-0 items-center justify-center rounded-full bg-brand-red text-white">
            <CheckIcon className="h-4 w-4" strokeWidth={3} />
          </span>
          <span className="text-base leading-relaxed text-brand-charcoal/90">
            {typeof item === "string" ? (
              item
            ) : (
              <>
                <strong className="font-semibold text-brand-navy">{item.lead}</strong>:{" "}
                {item.text}
              </>
            )}
          </span>
        </li>
      ))}
    </ul>
  );
}
