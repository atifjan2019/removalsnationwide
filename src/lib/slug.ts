/**
 * Deterministic slug for heading anchors. Shared so the rendered heading `id`
 * (ArticleBody) and the clause-index links (Terms page) always match.
 */
export function slugify(text: string): string {
  return text
    .toLowerCase()
    .replace(/[^\w]+/g, "-")
    .replace(/^-+|-+$/g, "");
}
