import type { ReactNode } from "react";

type Props = {
  eyebrow?: string;
  title: ReactNode;
  align?: "left" | "center";
  tone?: "dark" | "light";
  className?: string;
  as?: "h2" | "h3";
};

export default function SectionHeading({
  eyebrow,
  title,
  align = "center",
  tone = "dark",
  className = "",
  as: Tag = "h2",
}: Props) {
  const alignment = align === "center" ? "items-center text-center" : "items-start text-left";
  const titleColor = tone === "light" ? "text-white" : "text-brand-navy";
  const eyebrowColor = tone === "light" ? "text-brand-red" : "text-brand-red";

  return (
    <div className={`flex flex-col gap-3 ${alignment} ${className}`}>
      {eyebrow && (
        <span className={`heading-eyebrow text-xs font-bold tracking-widest ${eyebrowColor}`}>
          {eyebrow}
        </span>
      )}
      <Tag
        className={`max-w-3xl text-3xl font-bold leading-[1.1] tracking-tight sm:text-4xl md:text-5xl ${titleColor}`}
      >
        {title}
      </Tag>
      <span
        className={`mt-1 h-1 w-16 rounded-full bg-brand-red ${
          align === "center" ? "self-center" : ""
        }`}
        aria-hidden="true"
      />
    </div>
  );
}
