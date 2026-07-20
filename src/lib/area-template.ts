export type AreaKnowledgeBlock = {
  label: string;
  body: string;
};

export type AreaNearbyLink = {
  label: string;
  href: string;
  miles?: string;
};

export type AreaFaq = {
  question: string;
  answer: string;
};

export type AreaTemplateData = {
  h1: string;
  subhead: string;
  metaTitle: string;
  metaDescription: string;
  areaServedName: string;
  postcodes: string[];
  heroImage: string;
  heroImageAlt: string;
  introLine: string;
  valueLine: string;
  localBody: string[];
  coverageIntro: string;
  neighbourhoods: string;
  coverageOutro: string;
  knowIntro: string;
  knowBlocks: AreaKnowledgeBlock[];
  nearby: AreaNearbyLink[];
  faqs: AreaFaq[];
};

export const EMPTY_AREA_TEMPLATE: AreaTemplateData = {
  h1: "",
  subhead: "",
  metaTitle: "",
  metaDescription: "",
  areaServedName: "",
  postcodes: [],
  heroImage: "",
  heroImageAlt: "",
  introLine: "",
  valueLine: "",
  localBody: [],
  coverageIntro: "",
  neighbourhoods: "",
  coverageOutro: "",
  knowIntro: "",
  knowBlocks: [],
  nearby: [],
  faqs: [],
};

const text = (value: unknown) => (typeof value === "string" ? value : "");
const stringList = (value: unknown) =>
  Array.isArray(value) ? value.map(text).filter(Boolean) : [];

export function normalizeAreaTemplateData(value: unknown): AreaTemplateData {
  const source = value && typeof value === "object" ? value as Record<string, unknown> : {};
  const pairList = <T extends Record<string, string>>(
    input: unknown,
    keys: (keyof T)[],
  ): T[] =>
    Array.isArray(input)
      ? input
          .filter((item): item is Record<string, unknown> => Boolean(item) && typeof item === "object")
          .map((item) => Object.fromEntries(keys.map((key) => [key, text(item[String(key)])])) as T)
          .filter((item) => keys.some((key) => Boolean(item[key])))
      : [];

  return {
    h1: text(source.h1),
    subhead: text(source.subhead),
    metaTitle: text(source.metaTitle),
    metaDescription: text(source.metaDescription),
    areaServedName: text(source.areaServedName),
    postcodes: stringList(source.postcodes),
    heroImage: text(source.heroImage),
    heroImageAlt: text(source.heroImageAlt),
    introLine: text(source.introLine),
    valueLine: text(source.valueLine),
    localBody: stringList(source.localBody),
    coverageIntro: text(source.coverageIntro),
    neighbourhoods: text(source.neighbourhoods),
    coverageOutro: text(source.coverageOutro),
    knowIntro: text(source.knowIntro),
    knowBlocks: pairList<AreaKnowledgeBlock>(source.knowBlocks, ["label", "body"]),
    nearby: pairList<AreaNearbyLink>(source.nearby, ["label", "href", "miles"]),
    faqs: pairList<AreaFaq>(source.faqs, ["question", "answer"]),
  };
}

export function parseAreaTemplateData(value: string | null | undefined): AreaTemplateData {
  if (!value) return { ...EMPTY_AREA_TEMPLATE };
  try {
    return normalizeAreaTemplateData(JSON.parse(value));
  } catch {
    return { ...EMPTY_AREA_TEMPLATE };
  }
}

const plain = (value: unknown, max = 2000) =>
  typeof value === "string" ? value.trim().slice(0, max) : "";

export function cleanAreaTemplate(value: AreaTemplateData): AreaTemplateData {
  const stringList = (items: unknown, maxItems: number, maxLength: number) =>
    Array.isArray(items)
      ? items.map((item) => plain(item, maxLength)).filter(Boolean).slice(0, maxItems)
      : [];
  const pairs = <T,>(
    items: unknown,
    make: (item: Record<string, unknown>) => T,
    keep: (item: T) => boolean,
    maxItems: number,
  ) =>
    Array.isArray(items)
      ? items
          .filter((item): item is Record<string, unknown> => Boolean(item) && typeof item === "object")
          .map(make)
          .filter(keep)
          .slice(0, maxItems)
      : [];

  return {
    h1: plain(value.h1, 140),
    subhead: plain(value.subhead, 500),
    metaTitle: plain(value.metaTitle, 180),
    metaDescription: plain(value.metaDescription, 320),
    areaServedName: plain(value.areaServedName, 160),
    postcodes: [...new Set(stringList(value.postcodes, 30, 16).map((item) => item.toUpperCase()))],
    heroImage: plain(value.heroImage, 1000),
    heroImageAlt: plain(value.heroImageAlt, 240),
    introLine: plain(value.introLine, 700),
    valueLine: plain(value.valueLine, 700),
    localBody: stringList(value.localBody, 8, 3000),
    coverageIntro: plain(value.coverageIntro, 3000),
    neighbourhoods: plain(value.neighbourhoods, 5000),
    coverageOutro: plain(value.coverageOutro, 3000),
    knowIntro: plain(value.knowIntro, 3000),
    knowBlocks: pairs<AreaKnowledgeBlock>(
      value.knowBlocks,
      (item) => ({ label: plain(item.label, 120), body: plain(item.body, 4000) }),
      (item) => Boolean(item.label && item.body),
      8,
    ),
    nearby: pairs<AreaNearbyLink>(
      value.nearby,
      (item) => ({ label: plain(item.label, 120), href: plain(item.href, 300), miles: plain(item.miles, 20) }),
      (item) => Boolean(item.label && item.href),
      12,
    ),
    faqs: pairs<AreaFaq>(
      value.faqs,
      (item) => ({ question: plain(item.question, 300), answer: plain(item.answer, 5000) }),
      (item) => Boolean(item.question && item.answer),
      12,
    ),
  };
}
