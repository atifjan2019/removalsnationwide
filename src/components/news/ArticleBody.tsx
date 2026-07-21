import type { ReactNode } from "react";
import ReactMarkdown from "react-markdown";
import remarkGfm from "remark-gfm";
import type { Components } from "react-markdown";
import { slugify } from "@/lib/slug";

/** Flatten a rendered markdown node to plain text (for heading anchor slugs). */
function toText(node: ReactNode): string {
  if (typeof node === "string" || typeof node === "number") return String(node);
  if (Array.isArray(node)) return node.map(toText).join("");
  if (node && typeof node === "object" && "props" in node) {
    return toText((node as { props: { children?: ReactNode } }).props.children);
  }
  return "";
}

const components: Components = {
  h2: ({ children }) => (
    <h2
      id={slugify(toText(children))}
      className="mt-10 scroll-mt-28 text-2xl font-bold text-brand-navy"
    >
      {children}
    </h2>
  ),
  h3: ({ children }) => (
    <h3 className="mt-8 text-xl font-bold text-brand-navy">{children}</h3>
  ),
  p: ({ children }) => (
    <p className="mt-4 text-base leading-relaxed text-brand-charcoal/85">{children}</p>
  ),
  ul: ({ children }) => (
    <ul className="mt-4 space-y-2 [&>li]:relative [&>li]:pl-6">{children}</ul>
  ),
  ol: ({ children }) => (
    <ol className="mt-4 list-decimal space-y-2 pl-6 marker:font-semibold marker:text-brand-red">
      {children}
    </ol>
  ),
  li: ({ children }) => (
    <li className="text-base leading-relaxed text-brand-charcoal/85 before:absolute before:left-0 before:text-brand-red [ol>&]:before:content-none [ul>&]:before:content-['•']">
      {children}
    </li>
  ),
  blockquote: ({ children }) => (
    <blockquote className="mt-6 rounded-r-lg border-l-4 border-brand-red bg-brand-grey p-5 italic text-brand-charcoal/85">
      {children}
    </blockquote>
  ),
  a: ({ href, children }) => (
    <a
      href={href}
      target="_blank"
      rel="noopener noreferrer"
      className="font-semibold text-brand-red hover:underline"
    >
      {children}
    </a>
  ),
  strong: ({ children }) => <strong className="font-semibold text-brand-navy">{children}</strong>,
};

export default function ArticleBody({ markdown }: { markdown: string }) {
  return (
    <div>
      <ReactMarkdown remarkPlugins={[remarkGfm]} components={components}>
        {markdown}
      </ReactMarkdown>
    </div>
  );
}
