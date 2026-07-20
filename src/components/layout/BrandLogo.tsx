type BrandLogoProps = {
  className?: string;
  size?: "default" | "sm";
  /**
   * Public URL of a logo uploaded from /admin/settings. When empty (nothing
   * uploaded yet) the built-in wordmark below is used, so the header is never
   * blank.
   */
  src?: string;
};

export default function BrandLogo({
  className = "",
  size = "default",
  src = "",
}: BrandLogoProps) {
  const compact = size === "sm";

  if (src.trim()) {
    return (
      <span className={`inline-flex items-center ${className}`}>
        {/* Plain <img>: the source is an operator-supplied R2 URL, and
            next/image runs unoptimized on Workers anyway. */}
        {/* h-13 (3.25rem) is the previous h-11 (2.75rem) plus ~20%, with the
            max-width scaled to match so wide logos are not clipped. */}
        {/* eslint-disable-next-line @next/next/no-img-element */}
        <img
          src={src}
          alt="Removals Nationwide"
          className={`${compact ? "h-10 max-w-[180px]" : "h-[3.25rem] max-w-[264px]"} w-auto object-contain`}
        />
      </span>
    );
  }

  return (
    <span className={`inline-flex items-center gap-2 ${className}`} aria-hidden="true">
      <span
        className={`${compact ? "h-9 w-9 text-base" : "h-11 w-11 text-xl"} flex shrink-0 items-center justify-center rounded-lg bg-brand-red font-heading font-black text-white`}
      >
        RN
      </span>
      <span className="flex flex-col text-left font-heading font-black uppercase leading-none">
        <span className={`${compact ? "text-base" : "text-lg"} tracking-[-0.04em] text-black`}>
          Removals
        </span>
        <span
          className={`${compact ? "text-[0.58rem]" : "text-[0.68rem]"} mt-0.5 tracking-[0.18em] text-brand-red`}
        >
          Nationwide
        </span>
      </span>
    </span>
  );
}
