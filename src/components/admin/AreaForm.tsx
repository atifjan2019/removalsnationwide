"use client";

import {
  useCallback,
  useEffect,
  useId,
  useRef,
  useState,
  useTransition,
} from "react";
import { useSearchParams, useRouter } from "next/navigation";
import ImageField from "@/components/admin/ImageField";
import { saveArea, findNearbyAreas } from "@/app/admin/actions";
import {
  parseAreaTemplateData,
  type AreaTemplateData,
} from "@/lib/area-template";

const STORAGE_KEY = (id: string) => `removals-area-draft-${id}`;

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

type DraftState = {
  name: string;
  slug: string;
  template: AreaTemplateData;
  savedAt: string;
};

function buildInitialTemplate(area?: EditableArea): AreaTemplateData {
  const stored = parseAreaTemplateData(area?.template_data);
  return {
    ...stored,
    heroImage: stored.heroImage || area?.cover_image || "",
    introLine: stored.introLine || area?.intro || "",
    localBody: stored.localBody.length > 0 ? stored.localBody : [""],
    knowBlocks:
      stored.knowBlocks.length > 0
        ? stored.knowBlocks
        : [{ label: "", body: "" }],
    nearby:
      stored.nearby.length > 0 ? stored.nearby : [{ label: "", href: "" }],
    faqs:
      stored.faqs.length > 0 ? stored.faqs : [{ question: "", answer: "" }],
  };
}

function readDraft(area?: EditableArea): DraftState | null {
  if (typeof window === "undefined") return null;
  try {
    const raw = localStorage.getItem(STORAGE_KEY(area?.id ?? "new"));
    if (!raw) return null;
    const draft = JSON.parse(raw) as DraftState;
    if (!draft || typeof draft !== "object") return null;
    return draft;
  } catch {
    return null;
  }
}

const tabs = [
  { id: "area-seo", label: "Area & SEO", shortLabel: "SEO" },
  { id: "hero", label: "Hero & conversion", shortLabel: "Hero" },
  { id: "introduction", label: "Local introduction", shortLabel: "Introduction" },
  { id: "coverage", label: "Coverage", shortLabel: "Coverage" },
  { id: "knowledge", label: "Local knowledge", shortLabel: "Knowledge" },
  { id: "nearby", label: "Nearby areas", shortLabel: "Nearby" },
  { id: "faqs", label: "FAQs", shortLabel: "FAQs" },
] as const;

type TabId = (typeof tabs)[number]["id"];

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
  error,
}: {
  title: string;
  value: string;
  onChange: (value: string) => void;
  placeholder?: string;
  required?: boolean;
  error?: string;
}) {
  const id = useId();

  return (
    <div>
      <label htmlFor={id} className={label}>{title}</label>
      <input
        id={id}
        className={input}
        value={value}
        onChange={(event) => onChange(event.target.value)}
        placeholder={placeholder}
        required={required}
        aria-invalid={error ? true : undefined}
        aria-describedby={error ? `${id}-error` : undefined}
      />
      {error && <p id={`${id}-error`} className="mt-1.5 text-sm font-medium text-red-600">{error}</p>}
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
  const id = useId();

  return (
    <div>
      <label htmlFor={id} className={label}>{title}</label>
      <textarea
        id={id}
        className={`${input} resize-y`}
        rows={rows}
        value={value}
        onChange={(event) => onChange(event.target.value)}
        placeholder={placeholder}
      />
    </div>
  );
}

function TabPanel({
  id,
  active,
  children,
}: {
  id: TabId;
  active: boolean;
  children: React.ReactNode;
}) {
  if (!active) return null;

  return (
    <div
      id={`area-panel-${id}`}
      role="tabpanel"
      aria-labelledby={`area-tab-${id}`}
      tabIndex={0}
      className="outline-none focus-visible:ring-2 focus-visible:ring-brand-red/40"
    >
      {children}
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
  const draftId = area?.id ?? "new";
  const router = useRouter();
  const searchParams = useSearchParams();

  const [name, setName] = useState(area?.name ?? "");
  const [slug, setSlug] = useState(area?.slug ?? "");
  const [template, setTemplate] = useState<AreaTemplateData>(() =>
    buildInitialTemplate(area),
  );
  const [autoSaveStatus, setAutoSaveStatus] = useState("");

  const [pending, startTransition] = useTransition();
  const [findingNearby, startFindingNearby] = useTransition();
  const [activeTab, setActiveTabState] = useState<TabId>(() => {
    const fromUrl = searchParams.get("tab");
    return tabs.some((tab) => tab.id === fromUrl)
      ? (fromUrl as TabId)
      : "area-seo";
  });
  const [nameError, setNameError] = useState("");
  const [nearbyError, setNearbyError] = useState("");
  const tabRefs = useRef<Array<HTMLButtonElement | null>>([]);

  // Restore draft from localStorage after hydration to avoid SSR mismatch.
  useEffect(() => {
    const draft = readDraft(area);
    if (!draft) return;
    startTransition(() => {
      setName(draft.name ?? area?.name ?? "");
      setSlug(draft.slug ?? area?.slug ?? "");
      setTemplate(parseAreaTemplateData(JSON.stringify(draft.template)));
      setAutoSaveStatus(
        `Draft restored from ${new Date(draft.savedAt).toLocaleTimeString()}`,
      );
    });
  }, [area]);

  const set = <K extends keyof AreaTemplateData>(key: K, value: AreaTemplateData[K]) =>
    setTemplate((current) => ({ ...current, [key]: value }));

  const setActiveTab = useCallback(
    (tabId: TabId) => {
      setActiveTabState(tabId);
      const params = new URLSearchParams(searchParams.toString());
      params.set("tab", tabId);
      router.replace(`?${params.toString()}`, { scroll: false });
    },
    [router, searchParams],
  );

  // Auto-save to localStorage whenever form state changes.
  useEffect(() => {
    const timeout = setTimeout(() => {
      try {
        const draft: DraftState = {
          name,
          slug,
          template,
          savedAt: new Date().toISOString(),
        };
        localStorage.setItem(STORAGE_KEY(draftId), JSON.stringify(draft));
        setAutoSaveStatus(`Auto-saved at ${new Date().toLocaleTimeString()}`);
      } catch {
        setAutoSaveStatus("Could not auto-save");
      }
    }, 1000);
    return () => clearTimeout(timeout);
  }, [draftId, name, slug, template]);

  // Clear draft after a successful server save.
  function clearDraft() {
    try {
      localStorage.removeItem(STORAGE_KEY(draftId));
    } catch {
      // Ignore localStorage errors.
    }
  }

  function save(publish: boolean) {
    if (!name.trim()) {
      setNameError("Enter an area name before saving.");
      setActiveTab("area-seo");
      return;
    }
    setNameError("");
    startTransition(async () => {
      await saveArea({ id: area?.id, name, slug, published: publish, template });
      clearDraft();
    });
  }

  const published = area?.published ?? false;

  function handleFindNearby() {
    const areaName = name.trim();
    if (!areaName) {
      setNameError("Enter an area name first.");
      setActiveTab("area-seo");
      return;
    }
    setNearbyError("");
    startFindingNearby(async () => {
      try {
        const places = await findNearbyAreas(areaName);
        if (places.length === 0) {
          setNearbyError("No nearby areas found. Check the area name and try again.");
          return;
        }
        if (places.length > 0 && places[0] && "error" in places[0]) {
          setNearbyError(String(places[0].error));
          return;
        }
        const existing = new Set(template.nearby.map((item) => item.href));
        const newItems = places
          .filter((place) => !existing.has(`/areas/${place.slug}`))
          .map((place) => ({
            label: `${place.name} (${place.distanceKm} km)`,
            href: `/areas/${place.slug}`,
          }));
        set("nearby", [...template.nearby, ...newItems]);
        setAutoSaveStatus(`Added ${newItems.length} nearby area${newItems.length === 1 ? "" : "s"}`);
      } catch {
        setNearbyError("Could not fetch nearby areas. Please try again in a moment.");
      }
    });
  }

  function selectTab(index: number) {
    const tab = tabs[index];
    if (!tab) return;
    setActiveTab(tab.id);
    tabRefs.current[index]?.focus();
  }

  function handleTabKeyDown(event: React.KeyboardEvent<HTMLButtonElement>, index: number) {
    let nextIndex: number | undefined;
    if (event.key === "ArrowRight") nextIndex = (index + 1) % tabs.length;
    if (event.key === "ArrowLeft") nextIndex = (index - 1 + tabs.length) % tabs.length;
    if (event.key === "Home") nextIndex = 0;
    if (event.key === "End") nextIndex = tabs.length - 1;
    if (nextIndex === undefined) return;
    event.preventDefault();
    selectTab(nextIndex);
  }

  return (
    <form onSubmit={(event) => { event.preventDefault(); save(false); }} noValidate className="max-w-6xl space-y-6 pb-16">
      <div className="rounded-2xl border border-brand-red/20 bg-brand-red/5 p-5 text-sm leading-relaxed text-slate-700">
        <strong className="text-slate-950">Barnet template enabled.</strong> Pricing,
        services, trust signals, the five-step process and quote sections are added
        automatically. Complete the local fields below to make this page specific and useful.
      </div>

      <div className="sticky top-0 z-20 rounded-2xl border border-slate-200 bg-white/95 p-2 shadow-sm backdrop-blur">
        <div
          role="tablist"
          aria-label="Area page sections"
          className="flex gap-1 overflow-x-auto overscroll-x-contain"
        >
          {tabs.map((tab, index) => {
            const selected = activeTab === tab.id;
            return (
              <button
                key={tab.id}
                ref={(node) => { tabRefs.current[index] = node; }}
                id={`area-tab-${tab.id}`}
                type="button"
                role="tab"
                aria-selected={selected}
                aria-controls={`area-panel-${tab.id}`}
                tabIndex={selected ? 0 : -1}
                onClick={() => setActiveTab(tab.id)}
                onKeyDown={(event) => handleTabKeyDown(event, index)}
                className={`shrink-0 rounded-xl px-4 py-3 text-left text-sm font-semibold transition focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-brand-red/50 ${
                  selected
                    ? "bg-brand-red text-white shadow-sm"
                    : "text-slate-600 hover:bg-slate-100 hover:text-slate-950"
                }`}
              >
                <span className="mr-2 text-xs opacity-70">{index + 1}</span>
                <span className="hidden lg:inline">{tab.label}</span>
                <span className="lg:hidden">{tab.shortLabel}</span>
              </button>
            );
          })}
        </div>
      </div>

      <TabPanel id="area-seo" active={activeTab === "area-seo"}>
        <SectionCard
        title="1. Area and SEO"
        description="Controls the page URL, search result and structured service-area data."
      >
        <div className="grid gap-5 sm:grid-cols-2">
          <TextField
            title="Area name"
            value={name}
            onChange={(value) => {
              setName(value);
              if (value.trim()) setNameError("");
            }}
            required
            error={nameError}
            placeholder="Barnet"
          />
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
      </TabPanel>

      <TabPanel id="hero" active={activeTab === "hero"}>
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
      </TabPanel>

      <TabPanel id="introduction" active={activeTab === "introduction"}>
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
      </TabPanel>

      <TabPanel id="coverage" active={activeTab === "coverage"}>
        <SectionCard
        title="4. Coverage"
        description="Defines the postcode and neighbourhood section shown after the local introduction."
      >
        <TextAreaField title="Coverage introduction" value={template.coverageIntro} onChange={(value) => set("coverageIntro", value)} rows={4} placeholder={`We cover every part of ${name || "the area"}, including…`} />
        <TextAreaField title="Neighbourhoods covered" value={template.neighbourhoods} onChange={(value) => set("neighbourhoods", value)} rows={5} placeholder="List the principal neighbourhoods in natural prose." />
        <TextAreaField title="Coverage closing paragraph" value={template.coverageOutro} onChange={(value) => set("coverageOutro", value)} rows={4} placeholder="Explain border coverage and invite the customer to confirm their postcode." />
        </SectionCard>
      </TabPanel>

      <TabPanel id="knowledge" active={activeTab === "knowledge"}>
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
      </TabPanel>

      <TabPanel id="nearby" active={activeTab === "nearby"}>
        <SectionCard
        title="6. Nearby areas"
        description="Links this page into the local coverage network. Use an existing /areas/ URL."
      >
        <div className="flex flex-col gap-3 rounded-xl border border-brand-red/10 bg-brand-red/5 p-4 sm:flex-row sm:items-center sm:justify-between">
          <div>
            <p className="text-sm font-semibold text-brand-navy">
              Auto-fill nearby areas
            </p>
            <p className="text-xs text-slate-500">
              Finds towns and villages within 50 miles of {name || "this area"}.
            </p>
          </div>
          <div className="flex flex-col items-start gap-2 sm:items-end">
            <button
              type="button"
              onClick={handleFindNearby}
              disabled={findingNearby || !name.trim()}
              className="inline-flex items-center gap-2 rounded-lg border border-brand-red/30 bg-white px-4 py-2 text-sm font-semibold text-brand-red transition hover:bg-brand-red/10 disabled:cursor-not-allowed disabled:opacity-60"
            >
              {findingNearby ? (
                <>
                  <span className="h-4 w-4 animate-spin rounded-full border-2 border-brand-red/30 border-t-brand-red" />
                  Finding areas…
                </>
              ) : (
                "Find nearby areas (50 miles)"
              )}
            </button>
            {nearbyError && (
              <p className="text-sm font-medium text-red-600">{nearbyError}</p>
            )}
          </div>
        </div>

        {template.nearby.map((nearby, index) => (
          <div key={index} className="grid gap-3 rounded-xl border border-slate-200 bg-slate-50 p-4 sm:grid-cols-[1fr_1fr_auto] sm:items-end">
            <TextField title="Area label" value={nearby.label} onChange={(value) => set("nearby", template.nearby.map((item, itemIndex) => itemIndex === index ? { ...item, label: value } : item))} placeholder="Camden" />
            <TextField title="Area URL" value={nearby.href} onChange={(value) => set("nearby", template.nearby.map((item, itemIndex) => itemIndex === index ? { ...item, href: value } : item))} placeholder="/areas/camden" />
            <div className="pb-2"><RemoveButton onClick={() => set("nearby", template.nearby.filter((_, itemIndex) => itemIndex !== index))} /></div>
          </div>
        ))}
        <AddButton onClick={() => set("nearby", [...template.nearby, { label: "", href: "" }])}>Add nearby area</AddButton>
        </SectionCard>
      </TabPanel>

      <TabPanel id="faqs" active={activeTab === "faqs"}>
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
      </TabPanel>

      <div className="sticky bottom-4 z-20 flex flex-col gap-4 rounded-2xl border border-slate-200 bg-white/95 p-4 shadow-xl backdrop-blur sm:flex-row sm:items-center sm:justify-between">
        <div className="flex flex-col gap-1">
          <span className="text-xs font-semibold text-slate-500">
            {autoSaveStatus || "Changes auto-saved locally"}
          </span>
          <span className="text-xs text-slate-400">
            {area?.id
              ? published
                ? "This area is currently published."
                : "This area is currently a draft."
              : "New areas stay draft until published."}
          </span>
        </div>
        <div className="flex items-center gap-3">
          <button
            type="button"
            onClick={() => save(false)}
            disabled={pending}
            className="rounded-lg border border-slate-300 bg-white px-5 py-3 text-sm font-semibold uppercase tracking-wide text-slate-700 transition hover:border-slate-950 hover:text-slate-950 disabled:opacity-60"
          >
            {pending ? "Saving…" : "Save draft"}
          </button>
          <button
            type="button"
            onClick={() => save(true)}
            disabled={pending}
            className="rounded-lg bg-brand-red px-7 py-3 text-sm font-semibold uppercase tracking-wide text-white transition hover:bg-black disabled:opacity-60"
          >
            {pending ? "Saving…" : "Publish"}
          </button>
        </div>
      </div>
    </form>
  );
}
