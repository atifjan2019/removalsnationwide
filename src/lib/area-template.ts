export type AreaKnowledgeBlock = {
  label: string;
  body: string;
};

export type AreaNearbyLink = {
  label: string;
  href: string;
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
    nearby: pairList<AreaNearbyLink>(source.nearby, ["label", "href"]),
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
