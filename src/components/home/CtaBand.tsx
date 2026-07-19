import Button from "@/components/ui/Button";

type Action = {
  label: string;
  href: string;
  variant?: "red" | "navy" | "outline" | "outline-light";
};

type Props = {
  heading: string;
  subtext?: string;
  buttonLabel?: string;
  buttonHref?: string;
  /** Optional set of buttons; takes precedence over buttonLabel/buttonHref. */
  actions?: Action[];
};

export default function CtaBand({
  heading,
  subtext,
  buttonLabel,
  buttonHref,
  actions,
}: Props) {
  const resolvedActions: Action[] =
    actions ??
    (buttonLabel && buttonHref
      ? [{ label: buttonLabel, href: buttonHref, variant: "navy" }]
      : []);
  return (
    <section className="relative overflow-hidden bg-brand-red">
      {/* subtle diagonal texture */}
      <div
        className="pointer-events-none absolute inset-0 opacity-10"
        aria-hidden="true"
        style={{
          backgroundImage:
            "repeating-linear-gradient(45deg, #fff 0 2px, transparent 2px 22px)",
        }}
      />
      <div className="relative mx-auto flex max-w-[88rem] flex-col items-center gap-5 px-4 py-12 text-center md:flex-row md:justify-between md:text-left">
        <div className="md:max-w-3xl">
          <h2 className="text-xl font-bold uppercase tracking-wide text-white sm:text-2xl md:text-3xl">
            {heading}
          </h2>
          {subtext && <p className="mt-2 text-base text-white/90">{subtext}</p>}
        </div>
        {resolvedActions.length > 0 && (
          <div className="flex shrink-0 flex-wrap justify-center gap-3">
            {resolvedActions.map((action) => (
              <Button
                key={action.label}
                href={action.href}
                variant={action.variant ?? "navy"}
                size="lg"
                className="shadow-lg"
              >
                {action.label}
              </Button>
            ))}
          </div>
        )}
      </div>
    </section>
  );
}
