type BrandLogoProps = {
  className?: string;
  /**
   * Public URL of a logo uploaded from /admin/settings. When empty (nothing
   * uploaded yet) the built-in wordmark below is used, so the header is never
   * blank.
   */
  src?: string;
};

export default function BrandLogo({ className = "", src = "" }: BrandLogoProps) {
  if (src.trim()) {
    return (
      <span className={`inline-flex items-center ${className}`}>
        {/* Plain <img>: the source is an operator-supplied R2 URL, and
            next/image runs unoptimized on Workers anyway. */}
        {/* eslint-disable-next-line @next/next/no-img-element */}
        {/* h-13 (3.25rem) is the previous h-11 (2.75rem) plus ~20%, with the
            max-width scaled to match so wide logos are not clipped. */}
        <img
          src={src}
          alt="Removals Nationwide"
          className="h-[3.25rem] w-auto max-w-[264px] object-contain"
        />
      </span>
    );
  }

  return (
    <span className={`inline-flex items-center gap-2 ${className}`} aria-hidden="true">
      <span className="flex h-11 w-11 shrink-0 items-center justify-center rounded-lg bg-brand-red font-heading text-xl font-black text-white">
        RN
      </span>
      <span className="flex flex-col text-left font-heading font-black uppercase leading-none">
        <span className="text-lg tracking-[-0.04em] text-black">Removals</span>
        <span className="mt-0.5 text-[0.68rem] tracking-[0.18em] text-brand-red">Nationwide</span>
      </span>
    </span>
  );
}
