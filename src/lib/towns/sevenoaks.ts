import type { Borough } from "@/lib/boroughs";
import { HERO_ALT, HERO_IMAGE, VALUE_LINE, faqInsured, faqPrice } from "@/lib/boroughs";

export const town: Borough = {
  slug: "sevenoaks",
  name: "Sevenoaks",
  kind: "town",
  county: "Kent",
  distanceFromLondon: "about 25 miles from central London",
  areaServedName: "Sevenoaks, Kent",
  h1: "Removals in Sevenoaks",
  subhead:
    "Experienced, insured man and van and removals in Sevenoaks, from £55 per hour plus VAT, 7 days a week, with real local knowledge of parking, access and property across TN13, TN14 and TN15.",
  metaTitle: "Removals Sevenoaks, Kent | Man and Van from £55/hr",
  metaDescription:
    "Insured removals and man and van in Sevenoaks (TN13, TN14, TN15) from £55/hr plus VAT, 7 days a week. Station permit zones handled, fixed London prices.",
  postcodes: ["TN13", "TN14", "TN15"],
  heroImage: HERO_IMAGE,
  heroImageAlt: HERO_ALT,
  introLine: "An experienced and fully insured removals company that genuinely serves and knows Sevenoaks.",
  valueLine: VALUE_LINE,
  localBody: [
    "Removals Nationwide moves homes, offices and single items across the whole of Sevenoaks and the surrounding area, 7 days a week, from the large detached houses of Kippington and Wildernesse to the streets around the station, Greatness and St John's, and out to Riverhead, Dunton Green, Otford and Seal. We are an experienced, insured removals company based in Purfleet, Essex, reaching the town by the M25 and A21, with one team and one point of contact from quote to completion. Moves between Sevenoaks and London, or long distance, get a fixed written price after a free survey.",
    "Sevenoaks is a commuter town with controlled parking zones around the station and the High Street, where Sevenoaks District Council issues resident permits and limited non resident permits on the roads nearest the trains, so a van needs a plan rather than luck. The council offers bay suspensions for domestic removals with at least ten working days' notice, which we build into the booking. Access is by the A21, which bypasses the town from M25 junction 5, with the A225 and A224 bringing traffic into the centre and the A25 crossing the north of town at Riverhead.",
  ],
  coverageIntro:
    "We cover the whole of Sevenoaks and the villages around it, including the TN13, TN14 and TN15 postcodes. Areas we move people in and out of include:",
  neighbourhoods:
    "Kippington, Wildernesse, Greatness, St John's, Hollybush, Sevenoaks Common, Riverhead, Dunton Green, Otford, Seal, Kemsing, Shoreham, Sundridge and Sevenoaks Weald.",
  coverageOutro:
    "Further afield we cover Brasted and Westerham to the west, Knockholt on the Bromley border, Borough Green and Wrotham to the east and Hildenborough towards Tonbridge. Tell us your postcode and we will confirm coverage and a price.",
  knowIntro:
    "Sevenoaks is a hilly, leafy commuter town where the station streets are permit controlled and the big houses sit back on long drives. Here is what our crews plan for.",
  knowBlocks: [
    {
      label: "Permits and suspensions",
      body: "Sevenoaks District Council runs controlled parking zones where residents of homes built or converted before 2014 can hold on street permits, and newer conversions cannot, which catches some flat buyers out. Roads near the station, including Hitchen Hatch Lane and Mount Harry Road, also carry a limited number of non resident permits. For a house removal the council can suspend a bay, but it needs the application at least ten working days ahead, so we raise it at the survey and confirm the cost in writing.",
    },
    {
      label: "Roads and the motorway",
      body: "The A21 bypasses the town and links it to the M25 at junction 5, where the M26 also begins, but the M26 has no link to the A21 or to the M25 towards the Dartford Crossing, which shapes how we route from the Maidstone side. The A225 comes in from Otford to the north, the A224 arrives from the north west and ends in the town, and the A25 runs through the north of town at Riverhead, so we choose the approach that suits the address.",
    },
    {
      label: "Property types",
      body: "Housing here is dominated by houses, mainly detached and semi detached with large gardens. Wildernesse, on the Seal side east of the centre, is large detached homes on quiet avenues, with the old Wildernesse House now converted into retirement apartments, and Kippington is substantial houses on generous plots. Long drives, narrow gateways and period staircases mean we bring floor and banister protection and choose the size of van that will actually fit through the entrance.",
    },
    {
      label: "The London link",
      body: "Sevenoaks station, in the Tubs Hill area, has Southeastern trains to Charing Cross, Cannon Street, Waterloo East and London Bridge, and Thameslink services to Blackfriars, so a large share of movers are coming from or going to London. We plan those runs on the A21 and M25, or up the A224 and A21 towards south east London, with one crew at both ends and a fixed written price agreed after a free survey.",
    },
  ],
  nearby: [
    { label: "Bromley", href: "/areas/bromley" },
    { label: "Tonbridge", href: "/areas/tonbridge" },
    { label: "Maidstone", href: "/areas/maidstone", miles: "about 20 miles" },
    { label: "Tunbridge Wells", href: "/areas/tunbridge-wells" },
  ],
  faqs: [
    {
      question: "Do you cover my Sevenoaks postcode?",
      answer:
        "Yes. We cover all of Sevenoaks and the surrounding villages, including TN13, TN14 and TN15, from Kippington and Wildernesse to Riverhead, Otford, Kemsing and Sevenoaks Weald. Send your postcode and we will confirm coverage and a price.",
    },
    faqPrice("Sevenoaks"),
    {
      question: "Will I need a parking suspension for my move in Sevenoaks?",
      answer:
        "Only where your street is in a controlled parking zone, mainly around the station and the town centre. Sevenoaks District Council will suspend a bay for a domestic removal but needs the application at least ten working days before the date, so we raise it at the survey and confirm the cost in writing. On the drives of Kippington or Wildernesse no suspension is needed and the van loads from your frontage.",
    },
    {
      question: "Can you move me from Sevenoaks to London, or from London to Sevenoaks?",
      answer:
        "Yes. Sevenoaks is about 25 miles from central London and the A21 and M25 make it a straightforward run. You get a fixed written price after a free survey, one crew end to end, and the drive planned around the route and the M25 junction 5 layout.",
    },
    faqInsured(),
    {
      question: "Can you move a large house in Kippington or Wildernesse?",
      answer:
        "Yes. These are substantial detached houses, often with long drives and gateways that limit vehicle size, so we survey first, choose the van that fits and bring protection for period staircases and floors. Larger homes usually take a three person crew and a full day, and we can pack in advance so moving day itself runs to schedule.",
    },
  ],
};
