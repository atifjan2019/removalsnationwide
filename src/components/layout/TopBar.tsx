import { PhoneIcon, StarIcon, StarHalfIcon } from "@/components/ui/icons";
import type { ResolvedSettings } from "@/lib/settings";

export default function TopBar({ settings }: { settings: ResolvedSettings }) {
  const { phones } = settings;
  return (
    <div className="bg-brand-red text-white">
      <div className="mx-auto flex max-w-[88rem] flex-col items-center gap-2 px-4 py-2 text-center text-[11px] font-medium tracking-wide sm:text-xs lg:flex-row lg:justify-between lg:text-left">
        <p className="uppercase tracking-[0.12em]">
          Nationwide and International Removals and Storage
        </p>

        <div className="flex flex-col items-center gap-2 sm:flex-row sm:gap-4">
          {/* Trustpilot-style rating badge */}
          <span className="inline-flex items-center gap-1.5 rounded-full bg-white/15 px-3 py-1">
            <span className="font-semibold uppercase tracking-wide">Excellent</span>
            <span className="flex items-center text-white" aria-hidden="true">
              <StarIcon className="h-3.5 w-3.5" />
              <StarIcon className="h-3.5 w-3.5" />
              <StarIcon className="h-3.5 w-3.5" />
              <StarIcon className="h-3.5 w-3.5" />
              <StarHalfIcon className="h-3.5 w-3.5" />
            </span>
            <span className="sr-only">Rated excellent, four and a half out of five stars</span>
          </span>

          {settings.showPhone && <div className="flex flex-wrap items-center justify-center gap-x-3 gap-y-1">
            <span className="hidden uppercase tracking-wide opacity-90 md:inline">
              To speak with our customer service:
            </span>
            <a
              href={phones.freephone.href}
              className="inline-flex items-center gap-1.5 font-semibold transition hover:underline"
            >
              <PhoneIcon className="h-3.5 w-3.5" />
              {phones.freephone.label}
            </a>
            <a
              href={phones.london.href}
              className="inline-flex items-center gap-1.5 font-semibold transition hover:underline"
            >
              <PhoneIcon className="h-3.5 w-3.5" />
              {phones.london.label}
            </a>
          </div>}
        </div>
      </div>
    </div>
  );
}
