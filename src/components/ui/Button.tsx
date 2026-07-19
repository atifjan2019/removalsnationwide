import Link from "next/link";
import type { ComponentProps, ReactNode } from "react";

type Variant = "red" | "navy" | "outline" | "outline-light";
type Size = "sm" | "md" | "lg";

const base =
  "inline-flex items-center justify-center gap-2 rounded-md font-semibold uppercase tracking-wide transition-all duration-200 focus-visible:outline-none disabled:opacity-60 disabled:pointer-events-none";

const variants: Record<Variant, string> = {
  red:
    "bg-brand-red text-white shadow-md shadow-brand-red/25 hover:bg-brand-red-dark hover:shadow-lg hover:-translate-y-0.5",
  navy: "bg-brand-navy text-white hover:bg-brand-navy-dark hover:-translate-y-0.5",
  outline:
    "border-2 border-brand-navy text-brand-navy hover:bg-brand-navy hover:text-white",
  "outline-light":
    "border-2 border-white/80 text-white hover:bg-white hover:text-brand-navy",
};

const sizes: Record<Size, string> = {
  sm: "px-4 py-2 text-xs",
  md: "px-6 py-3 text-sm",
  lg: "px-8 py-4 text-sm md:text-base",
};

type BaseProps = {
  variant?: Variant;
  size?: Size;
  children: ReactNode;
  className?: string;
};

type ButtonAsLink = BaseProps & { href: string } & Omit<
    ComponentProps<typeof Link>,
    "href" | "className"
  >;
type ButtonAsButton = BaseProps & { href?: undefined } & Omit<
    ComponentProps<"button">,
    "className"
  >;

export default function Button(props: ButtonAsLink | ButtonAsButton) {
  const { variant = "red", size = "md", className = "", children } = props;
  const classes = `${base} ${variants[variant]} ${sizes[size]} ${className}`;

  if (props.href !== undefined) {
    const { href, variant: _v, size: _s, className: _c, children: _ch, ...rest } =
      props as ButtonAsLink;
    void _v;
    void _s;
    void _c;
    void _ch;
    return (
      <Link href={href} className={classes} {...rest}>
        {children}
      </Link>
    );
  }

  const { variant: _v, size: _s, className: _c, children: _ch, ...rest } =
    props as ButtonAsButton;
  void _v;
  void _s;
  void _c;
  void _ch;
  return (
    <button className={classes} {...rest}>
      {children}
    </button>
  );
}
