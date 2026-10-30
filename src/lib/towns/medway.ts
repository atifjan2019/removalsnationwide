import type { Borough } from "@/lib/boroughs";
import { HERO_ALT, HERO_IMAGE, VALUE_LINE, faqInsured, faqPrice } from "@/lib/boroughs";

export const town: Borough = {
  slug: "medway",
  name: "Medway",
  kind: "town",
  county: "Kent",
  distanceFromLondon: "about 30 miles from central London",
  areaServedName: "Medway, Kent",
  h1: "Removals in Medway",
  subhead:
    "Experienced, insured man and van and removals in Medway, from £55 per hour plus VAT, 7 days a week, with real local knowledge of parking, access and property across ME1, ME2, ME3, ME4, ME5, ME7 and ME8.",
  metaTitle: "Removals in Medway, Kent | Man and Van from £55/hr",
  metaDescription:
    "Insured removals and man and van across Medway, Strood to Rainham, from £55/hr plus VAT, 7 days a week. Fixed written prices for London moves.",
  postcodes: ["ME1", "ME2", "ME3", "ME4", "ME5", "ME7", "ME8"],
  heroImage: HERO_IMAGE,
  heroImageAlt: HERO_ALT,
  introLine: "An experienced and fully insured removals company that genuinely serves and knows Medway.",
  valueLine: VALUE_LINE,
  localBody: [
    "Removals Nationwide moves homes, offices and single items across the whole of Medway and the surrounding area, 7 days a week, covering all five towns, Strood, Rochester, Chatham, Gillingham and Rainham, plus Frindsbury, Walderslade, Hempstead and the villages of the Hoo Peninsula. We are an experienced, insured removals company based in Purfleet, Essex, a straightforward run down the A2 and M2, and you get one team and one point of contact from quote to completion. Moves between Medway and London, or long distance, get a fixed written price after a free survey.",
    "Medway Council is a unitary authority, so one parking team covers all five towns, with controlled parking zones mapped online and bay suspensions that must be applied for in advance by the company doing the work. Our crews plan around that lead time, around Chatham's traffic free High Street and the narrow streets of Rochester's historic centre, and around the river itself: the A2 crosses at Rochester Bridge, the A289 uses the Medway Tunnel between Strood and Gillingham, and the M2 serves the towns from junction 1 at Strood to junction 4 for Gillingham. Housing runs from older terraces to new waterfront flats at Chatham Maritime and Rochester Riverside.",
  ],
  coverageIntro:
    "We cover every part of Medway, including the ME1, ME2, ME3, ME4, ME5, ME7 and ME8 postcodes. Towns and neighbourhoods we move people in and out of include:",
  neighbourhoods:
    "Strood, Rochester, Chatham, Gillingham, Rainham, Frindsbury, Borstal, Brompton, Walderslade, Lordswood, Hempstead, Wigmore, Twydall and St Mary's Island.",
  coverageOutro:
    "We also cover the Hoo Peninsula villages such as Hoo St Werburgh and High Halstow, the Gravesham border at Higham and the Maidstone border at Blue Bell Hill and Bredhurst. Tell us your postcode and we will confirm coverage and a price.",
  knowIntro:
    "Medway is five towns run by one unitary council, strung along the river and the A2, so planning starts with the right side of the Medway and the right parking zone. Here is what our crews plan for.",
  knowBlocks: [
    {
      label: "Controlled parking zones",
      body: "Medway Council runs controlled parking zones across the towns and publishes an interactive map where a postcode or road name shows whether an address is in a zone and which zone it is. Resident permits are valid only in their own zone and never on yellow lines, so a removal van cannot borrow one. We look up both addresses on the map first and settle the loading point before anyone lifts a box.",
    },
    {
      label: "Bay suspensions",
      body: "Where a move needs a suspended bay, Medway Council takes the application from the company or contractor doing the work, not from the resident, so that part falls to us and we handle it. The council needs time to process it and put the suspension signs out, so if your street is permit controlled we raise it at the survey, apply early and confirm the cost to you in writing rather than leaving it to the week of the move.",
    },
    {
      label: "Roads, the bridge and the tunnel",
      body: "The A2 runs through the towns and crosses the river at Rochester Bridge, the A289 Northern Relief Road uses the Medway Tunnel between Strood and Gillingham, and the M2 has junction 1 at Strood, junction 2 for the A228, junction 3 for the A229 and Chatham, and junction 4 for Gillingham. Chatham High Street is traffic free, with vehicles routed around it, and Rochester's historic High Street is narrow, so central addresses need a planned loading point.",
    },
    {
      label: "Waterfront flats and the London link",
      body: "The waterfront is where the new homes are: St Mary's Island at Chatham Maritime, Chatham Waters on part of the commercial docks, Rochester Riverside beside the station and Strood Riverside across the water. These are flats with lifts and managed access, so we confirm bay bookings and lift sizes beforehand. High speed trains from Strood, Rochester and Chatham reach St Pancras, with Victoria and Charing Cross services too, so London moves are a regular request.",
    },
  ],
  nearby: [
    { label: "Gravesend", href: "/areas/gravesend" },
    { label: "Maidstone", href: "/areas/maidstone" },
    { label: "Dartford", href: "/areas/dartford" },
  ],
  faqs: [
    {
      question: "Do you cover my Medway postcode?",
      answer:
        "Yes. We cover all of Medway, including ME1, ME2, ME3, ME4, ME5, ME7 and ME8, from Strood and Rochester through Chatham and Gillingham to Rainham, and out to the Hoo Peninsula. Send your postcode and we will confirm coverage and a price.",
    },
    faqPrice("Medway"),
    {
      question: "How does parking work for a removal in Medway?",
      answer:
        "Medway Council runs controlled parking zones across the towns, and its online map shows whether your address is in one and which zone. A resident permit does not cover a removal van, so where a bay needs suspending we apply to the council ourselves, as it only accepts applications from the company doing the work, and we confirm the cost in writing. Outside the zones most streets are unrestricted and the van loads from the kerb.",
    },
    {
      question: "Can you move me from Medway to London, or from London to Medway?",
      answer:
        "Yes. Medway is about 30 miles from central London by the A2 and M2, and we run moves in both directions. You get a fixed written price after a free survey, one crew end to end, and the drive planned around the route, including which bridge or tunnel suits your side of the river.",
    },
    faqInsured(),
    {
      question: "Can you move me into a flat at Chatham Maritime or Rochester Riverside?",
      answer:
        "Yes. These waterfront developments are mainly apartment blocks with lifts, managed entrances and in some cases a bay that must be booked through the management company. We confirm the access rules and lift dimensions before the day, protect the shared areas and send a crew sized for the carry, so the move is done in one visit.",
    },
  ],
};
