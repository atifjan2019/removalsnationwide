type Props = {
  steps: string[];
  className?: string;
};

/** Reusable numbered "How does it work?" step list with a connecting rail. */
export default function StepList({ steps, className = "" }: Props) {
  return (
    <ol className={`relative space-y-8 ${className}`}>
      {steps.map((step, i) => (
        <li key={i} className="relative flex gap-5 pl-2">
          {/* connecting line */}
          {i < steps.length - 1 && (
            <span
              aria-hidden="true"
              className="absolute left-[1.75rem] top-12 h-[calc(100%-1rem)] w-0.5 bg-brand-red/25"
            />
          )}
          <span className="relative z-10 flex h-12 w-12 shrink-0 items-center justify-center rounded-full bg-brand-navy text-lg font-bold text-white shadow-md">
            {i + 1}
          </span>
          <p className="pt-2 text-base leading-relaxed text-brand-charcoal/90">{step}</p>
        </li>
      ))}
    </ol>
  );
}
