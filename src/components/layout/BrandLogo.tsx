type BrandLogoProps = {
  className?: string;
};

export default function BrandLogo({ className = "" }: BrandLogoProps) {
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
