import type { Borough } from "@/lib/boroughs";
import { HERO_ALT, HERO_IMAGE, VALUE_LINE, faqInsured, faqPrice } from "@/lib/boroughs";

export const town: Borough = {
  slug: "redhill",
  name: "Redhill",
  kind: "town",
  county: "Surrey",
  distanceFromLondon: "about 20 miles from central London",
  areaServedName: "Redhill, Surrey",
  h1: "Removals in Redhill",
  subhead:
    "Experienced, insured man and van and removals in Redhill, from £55 per hour plus VAT, 7 days a week, with real local knowledge of parking, access and property across RH1, from Merstham to Earlswood and Salfords.",
  metaTitle: "Removals Redhill, Surrey | Man and Van from £55/hr",
  metaDescription:
    "Insured removals and man and van in Redhill and Merstham (RH1) from £55/hr plus VAT, 7 days a week. Permit bays handled, fixed prices for London moves.",
  postcodes: ["RH1"],
  heroImage: HERO_IMAGE,
  heroImageAlt: HERO_ALT,
  introLine: "An experienced and fully insured removals company that genuinely serves and knows Redhill.",
  valueLine: VALUE_LINE,
  localBody: [
    "Removals Nationwide moves homes, offices and single items across the whole of Redhill and the surrounding area, 7 days a week, from the terraces around the station and Redstone Hill to the post war Merstham estate, Earlswood, Whitebushes and the Watercolour development, and out to Nutfield, Bletchingley and Salfords. We are an experienced, insured removals company based in Purfleet, Essex, reaching the town round the M25 to junction 6 or junction 8, with one team and one point of contact from quote to completion. Moves between Redhill and London, or long distance, get a fixed written price after a free survey.",
    "Redhill sits where the A23 London to Brighton road crosses the A25 from Guildford to Sevenoaks, and the centre has a pedestrianised High Street, the Belfry shopping centre and the Warwick Quadrant, so our crews load from the side streets and service roads rather than the front. On street permits, suspensions and waivers across Reigate and Banstead are issued by Surrey County Council through its contractor NSL, with a suspension needing about ten days' notice, while the borough council runs the car parks. From the M25 we use junction 6 at Godstone from the east or junction 8 at Reigate from the west, and the M23 runs south towards Gatwick.",
  ],
  coverageIntro:
    "We cover the whole of Redhill and the villages around it across the RH1 postcode. Areas we move people in and out of include:",
  neighbourhoods:
    "Redstone Hill, St John's, Earlswood, Whitebushes, Meadvale, Merstham, South Merstham, Watercolour, Salfords, Nutfield, South Nutfield, Bletchingley and Outwood.",
  coverageOutro:
    "We also cover Reigate and Woodhatch next door in RH2, Nutfield Marsh and Outwood to the east and south, and Chipstead to the north and Caterham to the north east. Tell us your postcode and we will confirm coverage and a price.",
  knowIntro:
    "Redhill is a Victorian railway town that grew where the Brighton line met the line from Guildford to Tonbridge, with a compact pedestrianised centre and estates spread along the A23. Here is what our crews plan for.",
  knowBlocks: [
    {
      label: "Town centre access",
      body: "The High Street is pedestrianised, the Belfry shopping centre and the Warwick Quadrant with the Harlequin Theatre fill much of the centre, and a street market runs from Thursday to Saturday. A removal into one of the flats above or around the centre therefore means agreeing a loading point on the surrounding roads, timing it away from the market hours when the stalls are up, and using trolleys for the last stretch. We confirm all of that at the survey rather than discovering it on the day.",
    },
    {
      label: "Permits and suspensions",
      body: "Reigate and Banstead Borough Council runs the car parks in Redhill, but the public roads belong to the county: Surrey County Council is the highway authority and its contractor NSL administers permits, bay suspensions and waivers on its behalf. Where your street has permit or time limited bays we apply for a suspension at least ten days before the move, which is the notice the county normally needs, and where a single yellow line will do we arrange a waiver for the van and send you the confirmation.",
    },
    {
      label: "Property types",
      body: "Redstone Hill and the roads around the station have Victorian and Edwardian terraces, Fengates House is a listed Georgian survivor, and South Merstham is mainly Victorian and Edwardian terraces too. The Merstham estate to the east was built by the London County Council after the war in a geometric layout and completed into the early 1970s, and Watercolour near Merstham is a mid and low rise development from 2008 to 2012. Narrow terrace frontages shape where the van stops and how far the crew carries.",
    },
    {
      label: "The London link",
      body: "Redhill station is the junction of the Brighton Main Line, the North Downs Line and the line to Tonbridge, with trains to London Victoria and London Bridge, and Merstham shares those termini, so south London moves are a big part of what we do. By road it is the A23 north through Merstham and on towards Croydon, the M25 from junction 6 or 8 for the rest of the orbital, or the M25 east to Essex for our own return. One crew, one fixed written price after a free survey.",
    },
  ],
  nearby: [
    { label: "Croydon", href: "/areas/croydon" },
    { label: "Crawley", href: "/areas/crawley", miles: "about 10 miles" },
    { label: "Sevenoaks", href: "/areas/sevenoaks" },
    { label: "Epsom", href: "/areas/epsom" },
  ],
  faqs: [
    {
      question: "Do you cover my Redhill postcode?",
      answer:
        "Yes. We cover the whole of RH1, from Redstone Hill and St John's to Earlswood, Whitebushes, Merstham, Watercolour, Salfords, Nutfield, South Nutfield and Bletchingley, and Reigate next door in RH2. Send your postcode and we will confirm coverage and a price.",
    },
    faqPrice("Redhill"),
    {
      question: "Can you load outside a flat on Redhill High Street?",
      answer:
        "Not from the High Street itself, which is pedestrianised, but we plan around it. We agree a stop on the nearest surrounding road or service area at the survey, time the move away from the Thursday to Saturday market hours, and bring trolleys for the walk. If the stop is in a permit or time limited bay we apply to Surrey County Council to suspend it at least ten days ahead, and we confirm the arrangement to you in writing.",
    },
    {
      question: "Can you move me from Redhill to London, or from London to Redhill?",
      answer:
        "Yes. Redhill is about 20 miles from central London, with the A23 heading north through Merstham and the M25 at junctions 6 and 8 and the M23 close by. You get a fixed written price after a free survey, one crew end to end, and the drive planned around the route and the time of day.",
    },
    faqInsured(),
    {
      question: "Can you move me onto the Watercolour development or the Merstham estate?",
      answer:
        "Yes. Watercolour is a mid and low rise development near Merstham from 2008 to 2012, so we check the lift, the parking court and where a van can legally stand before the day. The Merstham estate was built by the London County Council after the war in a geometric layout, with mostly houses and quiet estate roads, so the van normally stops at the frontage. Either way we survey first so the crew and the vehicle match the address.",
    },
  ],
};
