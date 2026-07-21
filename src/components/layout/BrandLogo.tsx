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
    <span className={`inline-flex items-center ${className}`}>
      {/* The bundled logo is the default; an admin-uploaded logo can still override it. */}
      {/* eslint-disable-next-line @next/next/no-img-element */}
      <img
        src="/images/brand/removals-nationwide-logo.png"
        alt="Removals Nationwide"
        className={`${compact ? "h-9 max-w-[150px]" : "h-12 max-w-[210px]"} w-auto object-contain`}
      />
    </span>
  );
}
