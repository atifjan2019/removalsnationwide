/** Renders a JSON-LD <script>. Pass a schema.org object (or @graph). */
export default function JsonLd({ data }: { data: object }) {
  // The site layout already emits the single settings-aware MovingCompany
  // entity. Older route components still pass a static copy, so suppress that
  // duplicate while retaining every route-specific schema object.
  if ((data as Record<string, unknown>)["@type"] === "MovingCompany") {
    return null;
  }

  const schemaData =
    "@context" in data ? data : { "@context": "https://schema.org", ...data };

  return (
    <script
      type="application/ld+json"
      dangerouslySetInnerHTML={{
        __html: JSON.stringify(schemaData).replace(/</g, "\\u003c"),
      }}
    />
  );
}
