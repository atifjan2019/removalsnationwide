import type { Phone } from "@/lib/settings-shared";

/**
 * The row of call links that closes most service pages.
 *
 * This block used to be copy-pasted into seven page files, each hardcoding two
 * anchors: the London number and the freephone. When both settings held the
 * same line, every one of those pages printed the number twice. Rendering from
 * the deduplicated `phoneList` fixes all of them at once, and an empty list
 * renders nothing rather than an anchor with an empty href.
 */
export default function PhoneLinks({
  phones,
  tone = "light",
  className = "mt-8",
}: {
  phones: Phone[];
  /** "light" for white text on a dark band, "dark" for navy text on white. */
  tone?: "light" | "dark";
  className?: string;
}) {
  if (phones.length === 0) return null;
  const colour = tone === "light" ? "text-white" : "text-brand-navy";

  return (
    <div
      className={`flex flex-col items-center gap-2 sm:flex-row sm:justify-center sm:gap-8 ${className}`}
    >
      {phones.map((phone) => (
        <a
          key={phone.label}
          href={phone.href}
          className={`flex items-center gap-2 text-base font-bold ${colour} transition hover:text-brand-red`}
        >
          <span aria-hidden="true" className="text-brand-red">
            &#9742;
          </span>
          {phone.label}
        </a>
      ))}
    </div>
  );
}
