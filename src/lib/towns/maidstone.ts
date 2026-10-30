import type { Borough } from "@/lib/boroughs";
import { HERO_ALT, HERO_IMAGE, VALUE_LINE, faqInsured, faqPrice } from "@/lib/boroughs";

export const town: Borough = {
  slug: "maidstone",
  name: "Maidstone",
  kind: "town",
  county: "Kent",
  distanceFromLondon: "about 40 miles from central London",
  areaServedName: "Maidstone, Kent",
  h1: "Removals in Maidstone",
  subhead:
    "Experienced, insured man and van and removals in Maidstone, from £55 per hour plus VAT, 7 days a week, with real local knowledge of parking, access and property across ME14, ME15, ME16, ME17 and ME18.",
  metaTitle: "Removals Maidstone, Kent | Man and Van from £55/hr",
  metaDescription:
    "Insured removals and man and van in Maidstone (ME14 to ME18) from £55/hr plus VAT, 7 days a week. Town centre access planned, fixed London prices.",
  postcodes: ["ME14", "ME15", "ME16", "ME17", "ME18"],
  heroImage: HERO_IMAGE,
  heroImageAlt: HERO_ALT,
  introLine: "An experienced and fully insured removals company that genuinely serves and knows Maidstone.",
  valueLine: VALUE_LINE,
  localBody: [
    "Removals Nationwide moves homes, offices and single items across the whole of Maidstone and the surrounding area, 7 days a week, from the streets of Fant and Tovil near the river to the estates at Grove Green, Shepway, Senacre and Vinters Park and the villages of Bearsted, Loose and Coxheath. We are an experienced, insured removals company based in Purfleet, Essex, reaching the county town by the M20 or the A229, with one team and one point of contact from quote to completion. Moves between Maidstone and London, or long distance, get a fixed written price after a free survey.",
    "Our crews plan for a town centre where the pedestrianised High Street and King Street run up from the river crossing at Lockmeadow and Week Street and Gabriel's Hill cross them, so a central move needs a loading point agreed in advance rather than a hopeful stop outside the door. Many streets near the centre carry parking restrictions, so we check the signs outside both addresses before the day, and the A229 through the town is a well known bottleneck, so we set arrival times to avoid the morning and evening queues. Suburbs such as Allington, Barming and Bearsted are mainly houses with drives, which load easily.",
  ],
  coverageIntro:
    "We cover the whole of Maidstone and the borough's villages, including the ME14, ME15, ME16, ME17 and ME18 postcodes. Areas we move people in and out of include:",
  neighbourhoods:
    "Allington, Barming, Bearsted, Penenden Heath, Tovil, Grove Green, Ringlestone, Shepway, Senacre, Vinters Park, Park Wood, Downswood, Loose and Coxheath.",
  coverageOutro:
    "Further out we cover Boxley, Harrietsham, Lenham, Yalding and Wateringbury, and the edge with Medway at Blue Bell Hill and Walderslade. Tell us your postcode and we will confirm coverage and a price.",
  knowIntro:
    "Maidstone is Kent's county town, with a pedestrian core beside the Medway and estates and villages fanning out to the M20. Here is what our crews plan for.",
  knowBlocks: [
    {
      label: "Town centre access",
      body: "The pedestrianised High Street and King Street climb from the river at Lockmeadow, Week Street and Gabriel's Hill cross that route, and Fremlin Walk opens off Week Street on the old brewery site. Between them they form the shopping core, and a removal van cannot simply pull up outside a central flat during trading hours. We agree the nearest legal loading point, often a side street or service road, before the day, and we size the crew for the carry from there.",
    },
    {
      label: "Parking and loading",
      body: "Close to the centre, on street space is scarce and much of it is restricted, and a resident's permit never covers a visiting removal van, so we do not assume the van can stop outside the door. Away from the centre, Allington, Barming, Bearsted and most of the estates have drives and unrestricted kerbs, which is the easy case. We check the restriction outside both addresses in advance, agree the loading point and confirm in writing anything that needs arranging before you book.",
    },
    {
      label: "Roads and junctions",
      body: "The M20 passes north of the town, with junction 5 for the A20 towards Aylesford and junction 6 for the A229, and the slip roads for the two overlap, so a van needs to be in the right lane early. The A229 then runs through the centre and is the town's main bottleneck, with long queues morning and evening, while the A249 heads north east towards Sittingbourne and Sheerness and the A26 serves Tonbridge. We time arrivals around those peaks.",
    },
    {
      label: "Property types",
      body: "The town has absorbed Allington, Barming, Bearsted, Penenden Heath, Tovil and Weavering Street as it grew, and its estates include Grove Green, Harbourland, Ringlestone, Roseacre, Shepway, Senacre and Vinters Park, mostly family houses with drives. Downswood and Park Wood fill in the ME15 side of town, and Loose and Coxheath are villages just to the south. Nearer the centre, flats need lift and access checks before a crew is booked, and we do that at the survey.",
    },
  ],
  nearby: [
    { label: "Medway", href: "/areas/medway" },
    { label: "Tonbridge", href: "/areas/tonbridge" },
    { label: "Sevenoaks", href: "/areas/sevenoaks", miles: "about 20 miles" },
    { label: "Ashford", href: "/areas/ashford" },
  ],
  faqs: [
    {
      question: "Do you cover my Maidstone postcode?",
      answer:
        "Yes. We cover all of Maidstone and the borough around it, including ME14, ME15, ME16, ME17 and ME18, from the town centre and Tovil to Bearsted, Allington, Loose and the Lenham villages. Send your postcode and we will confirm coverage and a price.",
    },
    faqPrice("Maidstone"),
    {
      question: "Can a removal van get close to a flat in Maidstone town centre?",
      answer:
        "Week Street, Gabriel's Hill, the High Street and King Street form a pedestrianised core, so a van cannot stop outside every door. We agree the nearest legal loading point in advance, usually a side street or service access, check the restrictions on the surrounding streets and tell you the plan in writing before the move.",
    },
    {
      question: "Can you move me from Maidstone to London, or from London to Maidstone?",
      answer:
        "Yes. Maidstone is about 40 miles from central London by the M20 and A20 or the A229 and M2, and we run moves in both directions. You get a fixed written price after a free survey, one crew end to end, and the drive planned around the route and the A229 peaks.",
    },
    faqInsured(),
    {
      question: "When is the best time to move in Maidstone?",
      answer:
        "Outside the A229 peaks. The road through the town queues every morning and evening, so we aim to load early, travel through the middle of the day and avoid a late afternoon arrival at a central address. We work 7 days a week, and weekends are quieter on the approach roads though busier with shoppers in the centre, so we balance the two for your address.",
    },
  ],
};
