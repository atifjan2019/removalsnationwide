"use client";

import { useState, useTransition } from "react";
import ImageField from "@/components/admin/ImageField";
import { saveArea } from "@/app/admin/actions";
import {
  parseAreaTemplateData,
  type AreaTemplateData,
} from "@/lib/area-template";

const input =
  "mt-1.5 w-full rounded-lg border border-black/15 bg-white px-4 py-2.5 text-base shadow-sm focus:border-brand-red focus:outline-none focus:ring-2 focus:ring-brand-red/30";
const label = "text-sm font-semibold text-brand-navy";

type EditableArea = {
  id?: string;
  slug?: string;
  name?: string;
  intro?: string;
  cover_image?: string;
  template_data?: string;
  published?: boolean;
};

type Props = { area?: EditableArea };

function SectionCard({
  title,
  description,
  children,
}: {
  title: string;
  description: string;
  children: React.ReactNode;
}) {
  return (
    <section className="rounded-2xl border border-slate-200 bg-white p-5 shadow-sm sm:p-7">
      <div className="border-b border-slate-100 pb-4">
        <h2 className="text-lg font-bold text-slate-950">{title}</h2>
        <p className="mt-1 text-sm leading-relaxed text-slate-500">{description}</p>
      </div>
      <div className="mt-5 space-y-5">{children}</div>
    </section>
  );
}

function TextField({
  title,
  value,
  onChange,
  placeholder,
  required,
}: {
  title: string;
  value: string;
  onChange: (value: string) => void;
  placeholder?: string;
  required?: boolean;
}) {
  return (
    <div>
      <label className={label}>{title}</label>
      <input
        className={input}
        value={value}
        onChange={(event) => onChange(event.target.value)}
        placeholder={placeholder}
        required={required}
      />
    </div>
  );
}

function TextAreaField({
  title,
  value,
  onChange,
  placeholder,
  rows = 4,
}: {
  title: string;
  value: string;
  onChange: (value: string) => void;
  placeholder?: string;
  rows?: number;
}) {
  return (
    <div>
      <label className={label}>{title}</label>
      <textarea
        className={`${input} resize-y`}
        rows={rows}
        value={value}
        onChange={(event) => onChange(event.target.value)}
        placeholder={placeholder}
      />
    </div>
  );
}

function RemoveButton({ onClick }: { onClick: () => void }) {
  return (
    <button
      type="button"
      onClick={onClick}
      className="text-xs font-bold uppercase tracking-wide text-red-600 hover:underline"
    >
      Remove
    </button>
  );
}

function AddButton({ children, onClick }: { children: React.ReactNode; onClick: () => void }) {
  return (
    <button
      type="button"
      onClick={onClick}
      className="rounded-lg border border-slate-300 bg-white px-4 py-2 text-sm font-semibold text-slate-700 transition hover:border-slate-950 hover:text-slate-950"
    >
      + {children}
    </button>
  );
}

export default function AreaForm({ area }: Props) {
  const storedTemplate = parseAreaTemplateData(area?.template_data);
  const [name, setName] = useState(area?.name ?? "");
  const [slug, setSlug] = useState(area?.slug ?? "");
  const [published, setPublished] = useState(area?.published ?? true);
  const [template, setTemplate] = useState<AreaTemplateData>({
    ...storedTemplate,
    heroImage: storedTemplate.heroImage || area?.cover_image || "",
    introLine: storedTemplate.introLine || area?.intro || "",
    localBody:
      storedTemplate.localBody.length > 0 ? storedTemplate.localBody : [""],
    knowBlocks:
      storedTemplate.knowBlocks.length > 0
        ? storedTemplate.knowBlocks
        : [{ label: "", body: "" }],
    nearby:
      storedTemplate.nearby.length > 0
        ? storedTemplate.nearby
        : [{ label: "", href: "" }],
    faqs:
      storedTemplate.faqs.length > 0
        ? storedTemplate.faqs
        : [{ question: "", answer: "" }],
  });
  const [pending, startTransition] = useTransition();

  const set = <K extends keyof AreaTemplateData>(key: K, value: AreaTemplateData[K]) =>
    setTemplate((current) => ({ ...current, [key]: value }));

  function submit(event: React.FormEvent) {
    event.preventDefault();
    startTransition(() =>
      saveArea({ id: area?.id, name, slug, published, template }),
    );
  }

  return (
    <form onSubmit={submit} className="max-w-5xl space-y-6 pb-16">
      <div className="rounded-2xl border border-brand-red/20 bg-brand-red/5 p-5 text-sm leading-relaxed text-slate-700">
        <strong className="text-slate-950">Barnet template enabled.</strong> Pricing,
        services, trust signals, the five-step process and quote sections are added
        automatically. Complete the local fields below to make this page specific and useful.
      </div>

      <SectionCard
        title="1. Area and SEO"
        description="Controls the page URL, search result and structured service-area data."
      >
        <div className="grid gap-5 sm:grid-cols-2">
          <TextField title="Area name" value={name} onChange={setName} required placeholder="Barnet" />
          <TextField title="Slug (optional)" value={slug} onChange={setSlug} placeholder="auto-generated-from-name" />
        </div>
        <TextField title="Page H1" value={template.h1} onChange={(value) => set("h1", value)} placeholder={`Removals in ${name || "Area"}`} />
        <TextAreaField title="Detailed service summary" value={template.subhead} onChange={(value) => set("subhead", value)} rows={3} placeholder="Experienced, insured removals and man and van…" />
        <div className="grid gap-5 sm:grid-cols-2">
          <TextField title="Meta title" value={template.metaTitle} onChange={(value) => set("metaTitle", value)} placeholder={`Removals ${name || "Area"} | Man and Van £55/hr`} />
          <TextField title="Schema area name" value={template.areaServedName} onChange={(value) => set("areaServedName", value)} placeholder={`Borough or district of ${name || "Area"}`} />
        </div>
        <TextAreaField title="Meta description" value={template.metaDescription} onChange={(value) => set("metaDescription", value)} rows={3} placeholder="Aim for a concise, location-specific description." />
      </SectionCard>

      <SectionCard
        title="2. Hero and conversion copy"
        description="Appears directly below the page banner beside the image, price and quote buttons."
      >
        <ImageField label="Hero image" value={template.heroImage} onChange={(value) => set("heroImage", value)} />
        <TextField title="Hero image alt text" value={template.heroImageAlt} onChange={(value) => set("heroImageAlt", value)} placeholder={`Removal crew working in ${name || "the area"}`} />
        <TextAreaField title="Opening statement" value={template.introLine} onChange={(value) => set("introLine", value)} rows={3} placeholder={`An experienced and fully insured removals company that serves and knows ${name || "this area"}.`} />
        <TextAreaField title="Value statement" value={template.valueLine} onChange={(value) => set("valueLine", value)} rows={3} placeholder="Published rates, insurance included, parking and access handled…" />
        <div>
          <label className={label}>Postcodes covered</label>
          <input
            className={input}
            value={template.postcodes.join(", ")}
            onChange={(event) => set("postcodes", event.target.value.split(",").map((item) => item.trim().toUpperCase()).filter(Boolean))}
            placeholder="N2, N3, N12, NW4"
          />
          <p className="mt-1.5 text-xs text-slate-500">Separate postcode districts with commas.</p>
        </div>
      </SectionCard>

      <SectionCard
        title="3. Local team introduction"
        description="Two or three substantial paragraphs explaining the service and what makes local moves different."
      >
        {template.localBody.map((paragraph, index) => (
          <div key={index} className="rounded-xl border border-slate-200 bg-slate-50 p-4">
            <div className="flex items-center justify-between gap-3">
              <span className="text-xs font-bold uppercase tracking-wide text-slate-500">Paragraph {index + 1}</span>
              <RemoveButton onClick={() => set("localBody", template.localBody.filter((_, itemIndex) => itemIndex !== index))} />
            </div>
            <textarea className={`${input} resize-y`} rows={5} value={paragraph} onChange={(event) => set("localBody", template.localBody.map((item, itemIndex) => itemIndex === index ? event.target.value : item))} />
          </div>
        ))}
        <AddButton onClick={() => set("localBody", [...template.localBody, ""])}>Add paragraph</AddButton>
      </SectionCard>

      <SectionCard
        title="4. Coverage"
        description="Defines the postcode and neighbourhood section shown after the local introduction."
      >
        <TextAreaField title="Coverage introduction" value={template.coverageIntro} onChange={(value) => set("coverageIntro", value)} rows={4} placeholder={`We cover every part of ${name || "the area"}, including…`} />
        <TextAreaField title="Neighbourhoods covered" value={template.neighbourhoods} onChange={(value) => set("neighbourhoods", value)} rows={5} placeholder="List the principal neighbourhoods in natural prose." />
        <TextAreaField title="Coverage closing paragraph" value={template.coverageOutro} onChange={(value) => set("coverageOutro", value)} rows={4} placeholder="Explain border coverage and invite the customer to confirm their postcode." />
      </SectionCard>

      <SectionCard
        title="5. Local knowledge"
        description="The strongest differentiator in the Barnet template: researched parking, access, property and road information."
      >
        <TextAreaField title="Section introduction" value={template.knowIntro} onChange={(value) => set("knowIntro", value)} rows={4} />
        {template.knowBlocks.map((block, index) => (
          <div key={index} className="rounded-xl border border-slate-200 bg-slate-50 p-4">
            <div className="flex items-center justify-between gap-3">
              <span className="text-xs font-bold uppercase tracking-wide text-slate-500">Knowledge card {index + 1}</span>
              <RemoveButton onClick={() => set("knowBlocks", template.knowBlocks.filter((_, itemIndex) => itemIndex !== index))} />
            </div>
            <div className="mt-3 space-y-3">
              <input className={input} value={block.label} onChange={(event) => set("knowBlocks", template.knowBlocks.map((item, itemIndex) => itemIndex === index ? { ...item, label: event.target.value } : item))} placeholder="Parking and permits" />
              <textarea className={`${input} resize-y`} rows={6} value={block.body} onChange={(event) => set("knowBlocks", template.knowBlocks.map((item, itemIndex) => itemIndex === index ? { ...item, body: event.target.value } : item))} placeholder="Specific, verified local information…" />
            </div>
          </div>
        ))}
        <AddButton onClick={() => set("knowBlocks", [...template.knowBlocks, { label: "", body: "" }])}>Add knowledge card</AddButton>
      </SectionCard>

      <SectionCard
        title="6. Nearby areas"
        description="Links this page into the local coverage network. Use an existing /areas/ URL."
      >
        {template.nearby.map((nearby, index) => (
          <div key={index} className="grid gap-3 rounded-xl border border-slate-200 bg-slate-50 p-4 sm:grid-cols-[1fr_1fr_auto] sm:items-end">
            <TextField title="Area label" value={nearby.label} onChange={(value) => set("nearby", template.nearby.map((item, itemIndex) => itemIndex === index ? { ...item, label: value } : item))} placeholder="Camden" />
            <TextField title="Area URL" value={nearby.href} onChange={(value) => set("nearby", template.nearby.map((item, itemIndex) => itemIndex === index ? { ...item, href: value } : item))} placeholder="/areas/camden" />
            <div className="pb-2"><RemoveButton onClick={() => set("nearby", template.nearby.filter((_, itemIndex) => itemIndex !== index))} /></div>
          </div>
        ))}
        <AddButton onClick={() => set("nearby", [...template.nearby, { label: "", href: "" }])}>Add nearby area</AddButton>
      </SectionCard>

      <SectionCard
        title="7. Frequently asked questions"
        description="Add local questions about postcodes, parking, property types, pricing or availability."
      >
        {template.faqs.map((faq, index) => (
          <div key={index} className="rounded-xl border border-slate-200 bg-slate-50 p-4">
            <div className="flex items-center justify-between gap-3">
              <span className="text-xs font-bold uppercase tracking-wide text-slate-500">FAQ {index + 1}</span>
              <RemoveButton onClick={() => set("faqs", template.faqs.filter((_, itemIndex) => itemIndex !== index))} />
            </div>
            <div className="mt-3 space-y-3">
              <input className={input} value={faq.question} onChange={(event) => set("faqs", template.faqs.map((item, itemIndex) => itemIndex === index ? { ...item, question: event.target.value } : item))} placeholder={`Do you cover my ${name || "local"} postcode?`} />
              <textarea className={`${input} resize-y`} rows={5} value={faq.answer} onChange={(event) => set("faqs", template.faqs.map((item, itemIndex) => itemIndex === index ? { ...item, answer: event.target.value } : item))} placeholder="A direct, useful answer." />
            </div>
          </div>
        ))}
        <AddButton onClick={() => set("faqs", [...template.faqs, { question: "", answer: "" }])}>Add FAQ</AddButton>
      </SectionCard>

      <div className="sticky bottom-4 z-20 flex flex-col gap-4 rounded-2xl border border-slate-200 bg-white/95 p-4 shadow-xl backdrop-blur sm:flex-row sm:items-center sm:justify-between">
        <label className="flex items-center gap-3 text-sm font-semibold text-brand-navy">
          <input type="checkbox" checked={published} onChange={(event) => setPublished(event.target.checked)} className="h-5 w-5 accent-brand-red" />
          Published
        </label>
        <button type="submit" disabled={pending} className="rounded-lg bg-brand-red px-7 py-3 text-sm font-semibold uppercase tracking-wide text-white transition hover:bg-black disabled:opacity-60">
          {pending ? "Saving…" : "Save Area"}
        </button>
      </div>
    </form>
  );
}
