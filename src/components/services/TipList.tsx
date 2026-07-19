export type Tip = {
  title: string;
  body: string;
};

type Props = {
  tips: Tip[];
  /** Render as a numbered list when true. */
  numbered?: boolean;
  className?: string;
};

/** Reusable "tips" layout: bold sub-heading + paragraph cards. */
export default function TipList({ tips, numbered = false, className = "" }: Props) {
  return (
    <div className={`grid gap-6 sm:grid-cols-2 ${className}`}>
      {tips.map((tip, i) => (
        <article
          key={tip.title}
          className="flex flex-col rounded-2xl border border-black/5 bg-white p-7 shadow-sm transition-shadow duration-300 hover:shadow-md"
        >
          <div className="mb-3 flex items-center gap-3">
            {numbered && (
              <span className="flex h-9 w-9 shrink-0 items-center justify-center rounded-full bg-brand-red text-sm font-bold text-white">
                {i + 1}
              </span>
            )}
            <h3 className="text-lg font-bold text-brand-navy">{tip.title}</h3>
          </div>
          <p className="text-base leading-relaxed text-brand-charcoal/85">{tip.body}</p>
        </article>
      ))}
    </div>
  );
}
