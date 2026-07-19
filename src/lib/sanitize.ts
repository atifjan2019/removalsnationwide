import sanitizeHtml from "sanitize-html";

/**
 * HTML sanitiser for Quill rich-text content.
 *
 * Replaces isomorphic-dompurify, which pulled in jsdom. jsdom is Node-only and
 * does not run on Cloudflare Workers, so sanitising in a server action would
 * have failed at runtime. sanitize-html is pure JS (htmlparser2) and runs
 * anywhere.
 *
 * The allow-list is built around what the Quill editor emits, rather than the
 * library defaults — those omit h1/h2, img and the inline styles Quill uses for
 * alignment, all of which this site relies on.
 */
const options: sanitizeHtml.IOptions = {
  allowedTags: [
    "h1", "h2", "h3", "h4", "h5", "h6",
    "p", "br", "hr", "div", "span",
    "strong", "b", "em", "i", "u", "s", "strike", "sub", "sup",
    "blockquote", "pre", "code",
    "ul", "ol", "li",
    "a", "img",
    "table", "thead", "tbody", "tfoot", "tr", "th", "td",
  ],
  allowedAttributes: {
    a: ["href", "title", "target", "rel"],
    img: ["src", "alt", "title", "width", "height", "loading"],
    // Quill encodes alignment and indent as classes, and colour as inline style.
    "*": ["class", "style"],
  },
  // Block javascript:/data: URLs; keep the schemes real content needs.
  allowedSchemes: ["http", "https", "mailto", "tel"],
  allowedSchemesByTag: { img: ["http", "https", "data"] },
  // Only these CSS properties survive, so `style` cannot be used to inject
  // positioning or behaviour.
  allowedStyles: {
    "*": {
      color: [/^#[0-9a-f]{3,8}$/i, /^rgba?\(/i, /^[a-z-]+$/i],
      "background-color": [/^#[0-9a-f]{3,8}$/i, /^rgba?\(/i, /^[a-z-]+$/i],
      "text-align": [/^(left|right|center|justify)$/],
    },
  },
  // Force external links to be safe to open.
  transformTags: {
    a: (tagName, attribs) => {
      const href = attribs.href ?? "";
      const isExternal = /^https?:\/\//i.test(href);
      return {
        tagName,
        attribs: isExternal
          ? { ...attribs, target: "_blank", rel: "noopener noreferrer" }
          : attribs,
      };
    },
  },
};

export function sanitize(html: string): string {
  return sanitizeHtml(html ?? "", options);
}
