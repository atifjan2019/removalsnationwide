import DOMPurify from "isomorphic-dompurify";

/** Renders sanitised rich-text HTML (from the Quill editor) with on-brand
 *  typography matching the markdown ArticleBody. */
export default function HtmlContent({ html }: { html: string }) {
  const clean = DOMPurify.sanitize(html ?? "");
  return (
    <div
      className="text-base leading-relaxed text-brand-charcoal/85 [&_a]:font-semibold [&_a]:text-brand-orange hover:[&_a]:underline [&_blockquote]:mt-6 [&_blockquote]:rounded-r-lg [&_blockquote]:border-l-4 [&_blockquote]:border-brand-orange [&_blockquote]:bg-brand-grey [&_blockquote]:p-5 [&_blockquote]:italic [&_h2]:mt-10 [&_h2]:text-2xl [&_h2]:font-bold [&_h2]:text-brand-navy [&_h3]:mt-8 [&_h3]:text-xl [&_h3]:font-bold [&_h3]:text-brand-navy [&_li]:mt-1 [&_ol]:mt-4 [&_ol]:list-decimal [&_ol]:pl-6 [&_p]:mt-4 [&_strong]:font-semibold [&_strong]:text-brand-navy [&_ul]:mt-4 [&_ul]:list-disc [&_ul]:pl-6"
      dangerouslySetInnerHTML={{ __html: clean }}
    />
  );
}
