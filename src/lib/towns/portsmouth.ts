import type { Borough } from "@/lib/boroughs";
import { HERO_ALT, HERO_IMAGE, VALUE_LINE, faqInsured, faqPrice } from "@/lib/boroughs";

export const town: Borough = {
  slug: "portsmouth",
  name: "Portsmouth",
  kind: "town",
  county: "Hampshire",
  distanceFromLondon: "about 75 miles from central London",
  areaServedName: "Portsmouth, Hampshire",
  h1: "Removals in Portsmouth",
  subhead:
    "Experienced, insured man and van and removals in Portsmouth, from £55 per hour plus VAT, 7 days a week, with real local knowledge of parking, access and property across PO1, PO2, PO3, PO4, PO5 and PO6.",
  metaTitle: "Removals Portsmouth, Hampshire | Man and Van from £55/hr",
  metaDescription:
    "Insured removals and man and van in Portsmouth and Southsea (PO1 to PO6) from £55/hr plus VAT, 7 days a week. Bay suspensions handled, fixed London prices.",
  postcodes: ["PO1", "PO2", "PO3", "PO4", "PO5", "PO6"],
  heroImage: HERO_IMAGE,
  heroImageAlt: HERO_ALT,
  introLine: "An experienced and fully insured removals company that genuinely serves and knows Portsmouth.",
  valueLine: VALUE_LINE,
  localBody: [
    "Removals Nationwide moves homes, offices and single items across the whole of Portsmouth and the surrounding area, 7 days a week, from the terraces of Southsea, Fratton and North End to Old Portsmouth and Gunwharf Quays, and north off the island to Cosham, Drayton, Farlington and Port Solent. We are an experienced, insured removals company based in Purfleet, Essex, reaching the city by the M25, M3 and M27 or the A3, with one team and one point of contact from quote to completion. Moves between Portsmouth and London, or long distance, get a fixed written price after a free survey.",
    "Portsmouth is an island city. Most of it sits on Portsea Island, reached from the mainland only by the M275, the A3 London Road and the A2030 Eastern Road across Portsbridge Creek, so our crews plan the way on and off before anything else. Once on the island the streets are densely built Victorian and Edwardian terraces in Southsea, Fratton, Somerstown and North End, many of them in resident parking zones, where Portsmouth City Council will suspend parking for a home removal and mark it with a yellow notice. We raise that suspension with the booking and confirm the street before the van arrives.",
  ],
  coverageIntro:
    "We cover the whole of Portsmouth, including the PO1, PO2, PO3, PO4, PO5 and PO6 postcodes. Areas we move people in and out of include:",
  neighbourhoods:
    "Southsea, Old Portsmouth, Portsea, Fratton, Somerstown, Milton, Eastney, Baffins, Copnor, North End, Hilsea, Cosham, Drayton and Farlington.",
  coverageOutro:
    "Off the island we cover Paulsgrove, Wymering and Port Solent along the M27, Anchorage Park in Hilsea, and the neighbouring areas of Havant, Fareham and Portchester. Tell us your postcode and we will confirm coverage and a price.",
  knowIntro:
    "Portsmouth is a densely built island city with three roads on and off, so the route and the bay matter more than anywhere else we cover. Here is what our crews plan for.",
  knowBlocks: [
    {
      label: "Resident zones and suspensions",
      body: "Portsmouth City Council runs resident parking zones across many of the island's terraced streets and publishes the roads covered by each scheme with maps, alongside on street pay and display bays. For a home removal the council will suspend a section of road, posting an approved yellow notice on the nearest street furniture, and any unauthorised vehicle parked in the suspended area can be given a penalty charge notice. We apply for the suspension when you book and confirm the arrangement in writing.",
    },
    {
      label: "Getting on and off the island",
      body: "Only three roads cross Portsbridge Creek onto Portsea Island: the M275 from the M27, the A3 London Road through Cosham and Hilsea, and the A2030 Eastern Road down the east shore. The M275 is the main way in, with junction 1 at Tipner and junction 2 feeding the A3 towards Buckland and the A2047 towards Fratton. The M27 and A27 run across the mainland north of the city past Cosham, Drayton and Farlington.",
    },
    {
      label: "Property types",
      body: "Southsea keeps the late Georgian and early Victorian villas and terraces built by Thomas Ellis Owen around Kent Road, Elm Grove and Osborne Road, now a conservation area with many listed buildings, with apartments along Clarence Parade and the Common. North End and Copnor are late Victorian and early 20th century terraces, Landport and Portsea were heavily bombed and largely rebuilt after the war, Old Portsmouth is the historic quarter with narrow streets, and Gunwharf Quays adds a largely residential tower and waterside flats with managed access.",
    },
    {
      label: "The London link",
      body: "Portsmouth Harbour and Portsmouth and Southsea stations sit on the island, and South Western Railway runs two routes to London Waterloo, via Guildford or via Fareham and Basingstoke, with Southern to London Victoria, so plenty of customers are moving to or from the capital. Leaving Purfleet we cross the Thames at Dartford, where Dart Charge applies, and follow the M25 to either the A3 or the M3 and M27, with one crew at both ends and a fixed written price after a free survey.",
    },
  ],
  nearby: [
    { label: "Southampton", href: "/areas/southampton", miles: "about 22 miles" },
    { label: "Brighton", href: "/areas/brighton", miles: "about 50 miles" },
    { label: "Guildford", href: "/areas/guildford" },
  ],
  faqs: [
    {
      question: "Do you cover my Portsmouth postcode?",
      answer:
        "Yes. We cover the whole city, including PO1, PO2, PO3, PO4, PO5 and PO6, from Southsea, Old Portsmouth and Fratton to North End, Copnor, Hilsea, Cosham, Drayton and Farlington. Send your postcode and we will confirm coverage and a price.",
    },
    faqPrice("Portsmouth"),
    {
      question: "Will I need a parking suspension for my move in Portsmouth or Southsea?",
      answer:
        "In the resident parking zones that cover many terraced streets in Southsea, Fratton, Somerstown and North End, usually yes, because every bay outside your own permit is spoken for. Portsmouth City Council lists home removals as a reason for a parking suspension and marks the suspended area with a yellow notice, so we apply when you book and confirm the cost in writing. Off the island in Cosham, Drayton and Farlington most homes have a driveway and no suspension is needed.",
    },
    {
      question: "Can you move me from Portsmouth to London, or from London to Portsmouth?",
      answer:
        "Yes. Portsmouth is about 75 miles from central London by the A3 or the M27 and M3. You get a fixed written price after a free survey, one crew end to end, and the drive planned around the route and the three crossings onto Portsea Island.",
    },
    faqInsured(),
    {
      question: "Can you move me into a flat at Gunwharf Quays or on the Southsea seafront?",
      answer:
        "Yes. Gunwharf Quays is a managed development with a largely residential tower, lifts and controlled service access, so we book the lift and loading slot with the building management before the day. Along Clarence Parade and the Common the apartments are conversions of tall period terraces, so we bring stair protection and a crew sized for the floors involved.",
    },
  ],
};
