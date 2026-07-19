import Link from "next/link";
import type { ComponentType, SVGProps } from "react";
import { ArrowRight } from "@/components/ui/icons";

export type Service = {
  title: string;
  description: string;
  href: string;
  Icon: ComponentType<SVGProps<SVGSVGElement>>;
};

export default function ServiceCard({ title, description, href, Icon }: Service) {
  return (
    <article className="group flex h-full flex-col rounded-2xl border border-black/5 bg-white p-7 shadow-sm transition-all duration-300 hover:-translate-y-1.5 hover:border-brand-red/30 hover:shadow-xl">
      <span className="mb-5 inline-flex h-16 w-16 items-center justify-center rounded-xl bg-brand-navy text-white transition-colors duration-300 group-hover:bg-brand-red">
        <Icon className="h-8 w-8" />
      </span>
      <h3 className="mb-3 text-lg font-bold uppercase tracking-wide text-brand-navy">
        {title}
      </h3>
      <p className="flex-1 text-sm leading-relaxed text-brand-charcoal/80">{description}</p>
      <Link
        href={href}
        className="mt-5 inline-flex items-center gap-1.5 text-sm font-semibold uppercase tracking-wide text-brand-red transition group-hover:gap-2.5"
      >
        View More
        <ArrowRight className="h-4 w-4" />
      </Link>
    </article>
  );
}
