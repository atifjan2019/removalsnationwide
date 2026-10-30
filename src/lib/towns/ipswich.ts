import type { Borough } from "@/lib/boroughs";
import { HERO_ALT, HERO_IMAGE, VALUE_LINE, faqInsured, faqPrice } from "@/lib/boroughs";

export const town: Borough = {
  slug: "ipswich",
  name: "Ipswich",
  kind: "town",
  county: "Suffolk",
  distanceFromLondon: "about 75 miles from central London",
  areaServedName: "Ipswich, Suffolk",
  h1: "Removals in Ipswich",
  subhead:
    "Experienced, insured man and van and removals in Ipswich, from £55 per hour plus VAT, 7 days a week, with real local knowledge of parking, access and property across IP1, IP2, IP3, IP4 and IP5.",
  metaTitle: "Removals Ipswich | Man and Van from £55/hr | Suffolk",
  metaDescription:
    "Man and van and removals in Ipswich (IP1 to IP5) from £55/hr plus VAT. Insured, 7 days a week, residents' zones, the Waterfront and the A14 planned for.",
  postcodes: ["IP1", "IP2", "IP3", "IP4", "IP5"],
  heroImage: HERO_IMAGE,
  heroImageAlt: HERO_ALT,
  introLine: "An experienced and fully insured removals company that genuinely serves and knows Ipswich.",
  valueLine: VALUE_LINE,
  localBody: [
    "Removals Nationwide moves homes, offices and single items across the whole of Ipswich and the surrounding area, 7 days a week, from Waterfront apartments and the red brick terraces north of the centre to the estates at Chantry, Whitton and Ravenswood and newer homes at Henley Gate. We are an experienced, insured removals company based in Purfleet, Essex, and Ipswich is a direct A12 run for us. One crew covers your man and van job, house or office move, packing and storage, with one contact from quote to completion. Moves between Ipswich and London, or long distance, get a fixed written price after a free survey.",
    "In Ipswich our crews plan around the residents' parking zones that ring the centre, enforced by Ipswich Borough Council, and around the Orwell Bridge, which carries the A14 past the town and sends traffic through the streets whenever it closes. Inner streets near the centre are permit controlled and tightly parked, the Waterfront has tall blocks where lifts and loading bays must be booked, and the outer estates give us driveways and easy access. We confirm the loading point for both addresses, apply for a bay suspension where a zone street needs it, and size the van to the street.",
  ],
  coverageIntro:
    "We cover the whole of Ipswich and the suburbs around it, including the IP1, IP2, IP3, IP4 and IP5 postcodes. Areas we move people in and out of include:",
  neighbourhoods:
    "Ipswich town centre, the Waterfront, Chantry, Whitton, Castle Hill, Westbourne, Rushmere, Ravenswood, Stoke Park, Gainsborough, Priory Heath, Broke Hall, Maidenhall, Pinewood and Kesgrave.",
  coverageOutro:
    "If you live over the borough line in Kesgrave, Rushmere St Andrew or Martlesham Heath, or south of the town at Wherstead and Belstead, we cover that too. Tell us your postcode and we will confirm coverage and a price.",
  knowIntro:
    "Ipswich is Suffolk's county town, with a regenerated Waterfront, permit zones around the centre and large estates on every side. Here is what our crews plan for.",
  knowBlocks: [
    {
      label: "Residents' zones and enforcement",
      body: "Ipswich Borough Council enforces on-street parking in the town and runs five residents' parking zones around the centre with virtual permits. A resident's permit does not cover our van, so we never assume it will. The council issues bay suspensions where a restricted bay needs reserving for a reason such as moving house, and dispensations only where there is no viable alternative, so we apply for the right one in advance where a zone street needs the van outside the door, and otherwise load from the nearest legal spot.",
    },
    {
      label: "Roads and the Orwell Bridge",
      body: "The A14 skirts the south of the town and crosses the river on the Orwell Bridge, and at junction 55, the Copdock Interchange, it meets the A12 from London and the A1214 into town. When the bridge closes in high winds, traffic for Felixstowe diverts through Ipswich itself, so we watch the forecast on move day. The centre around the Cornhill is tight, and our crews plan the approach to town centre flats from the nearest open street.",
    },
    {
      label: "Property types",
      body: "Ipswich mixes late 19th century red brick terraces close to the centre with post-war estates like Chantry, Whitton and Gainsborough, where driveways and wide roads make loading easy. The Waterfront has tall apartment blocks, including The Mill, where we book lifts and loading bays with the building. Ravenswood on the old airport site to the south east and Henley Gate to the north west are modern estates of family homes, often with driveways but sometimes with tight parking courts.",
    },
    {
      label: "The London link",
      body: "Ipswich is about 75 miles from central London by road, and Greater Anglia runs direct trains from the station to Liverpool Street, so it draws households moving out of the capital for space. From Purfleet our crews follow the A12 straight up through Essex with no river crossing to pay, and that drive is built into a fixed written price for every move between Ipswich and London, whichever direction you are heading.",
    },
  ],
  nearby: [
    { label: "Colchester", href: "/areas/colchester", miles: "17" },
    { label: "Chelmsford", href: "/areas/chelmsford", miles: "40" },
    { label: "Cambridge", href: "/areas/cambridge" },
  ],
  faqs: [
    {
      question: "Do you cover my Ipswich postcode?",
      answer:
        "Yes. We cover the whole of Ipswich, including IP1 to the north west, IP2 to the south west with Stoke Park, IP3 to the south east with Ravenswood, IP4 to the north east and IP5 for Kesgrave, Rushmere St Andrew and Martlesham Heath. Send your postcode and we will confirm coverage and a price.",
    },
    faqPrice("Ipswich"),
    {
      question: "My Ipswich street is in a residents' parking zone. Can you still park the van?",
      answer:
        "Yes. Ipswich Borough Council runs the five zones and handles bay suspensions, including for moving house, and dispensations where there is no alternative, so where your street needs the van outside the door we apply in advance. A resident's permit does not cover our vehicle, so we plan this on the survey rather than on the day.",
    },
    {
      question: "Can you move me from Ipswich to London, or from London to Ipswich?",
      answer:
        "Yes, in both directions. You get a fixed written price after a free survey, one crew handles the move end to end, and we plan the drive around the A12 and the A14, including the Orwell Bridge, so the van arrives when you do.",
    },
    faqInsured(),
    {
      question: "Can you move me into a Waterfront apartment in Ipswich?",
      answer:
        "Yes. The Waterfront blocks are tall and busy, so we book the lift and the loading bay with the building management, protect the lift and corridors, and bring a crew sized for the number of trips. Tell us the floor and the building and we will plan it on the survey.",
    },
  ],
};
