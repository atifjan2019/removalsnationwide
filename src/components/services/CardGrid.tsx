export type Card = {
  title: string;
  body: string;
};

type Props = {
  cards: Card[];
  /** Columns on large screens. Defaults to 3. */
  columns?: 2 | 3;
  className?: string;
};

const colClass: Record<number, string> = {
  2: "sm:grid-cols-2",
  3: "sm:grid-cols-2 lg:grid-cols-3",
};

/** Reusable grid of simple "title + paragraph" cards. */
export default function CardGrid({ cards, columns = 3, className = "" }: Props) {
  return (
    <div className={`grid gap-6 ${colClass[columns]} ${className}`}>
      {cards.map((card) => (
        <article
          key={card.title}
          className="flex h-full flex-col rounded-2xl border border-black/5 bg-white p-7 shadow-sm transition-shadow duration-300 hover:shadow-md"
        >
          <h3 className="mb-3 border-l-4 border-brand-red pl-3 text-lg font-bold text-brand-navy">
            {card.title}
          </h3>
          <p className="text-base leading-relaxed text-brand-charcoal/85">{card.body}</p>
        </article>
      ))}
    </div>
  );
}
