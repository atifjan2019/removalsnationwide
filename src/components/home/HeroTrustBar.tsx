import { CheckIcon, StarIcon } from "@/components/ui/icons";

type TrustItem = {
  icon: React.ReactNode;
  label: React.ReactNode;
};

const ITEMS: TrustItem[] = [
  {
    icon: <StarIcon className="h-4 w-4 text-brand-orange" aria-hidden="true" />,
    label: (
      <>
        <strong className="font-semibold text-brand-navy">Excellent</strong>
        <span className="text-brand-charcoal/70"> on Trustpilot</span>
      </>
    ),
  },
  {
    icon: <CheckIcon className="h-4 w-4 text-brand-orange" strokeWidth={3} aria-hidden="true" />,
    label: <span className="text-brand-charcoal/70">BAR Accredited</span>,
  },
  {
    icon: <CheckIcon className="h-4 w-4 text-brand-orange" strokeWidth={3} aria-hidden="true" />,
    label: <span className="text-brand-charcoal/70">NGRS Accredited</span>,
  },
  {
    icon: <CheckIcon className="h-4 w-4 text-brand-orange" strokeWidth={3} aria-hidden="true" />,
    label: <span className="text-brand-charcoal/70">Fully Insured</span>,
  },
  /* CONFIRM: add verified established year, then restore this item:
  {
    icon: <CheckIcon className="h-4 w-4 text-brand-orange" strokeWidth={3} aria-hidden="true" />,
    label: <span className="text-brand-charcoal/70">Established XXXX</span>,
  },
  */
];

export default function HeroTrustBar() {
  return (
    <div
      className="border-b border-black/6 bg-white py-3 sm:py-4"
      aria-label="Trust and accreditation highlights"
    >
      <div className="mx-auto max-w-[88rem] px-6">
        <ul className="grid grid-cols-2 gap-x-4 gap-y-3 sm:flex sm:flex-wrap sm:items-center sm:gap-x-8 sm:gap-y-2 md:gap-x-10">
          {ITEMS.map((item, i) => (
            <li key={i} className="flex items-center gap-2 text-sm">
              {item.icon}
              {item.label}
            </li>
          ))}
        </ul>
      </div>
    </div>
  );
}
