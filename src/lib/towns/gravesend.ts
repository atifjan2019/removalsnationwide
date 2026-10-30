import type { Borough } from "@/lib/boroughs";
import { HERO_ALT, HERO_IMAGE, VALUE_LINE, faqInsured, faqPrice } from "@/lib/boroughs";

export const town: Borough = {
  slug: "gravesend",
  name: "Gravesend",
  kind: "town",
  county: "Kent",
  distanceFromLondon: "about 25 miles from central London",
  areaServedName: "Gravesend, Kent",
  h1: "Removals in Gravesend",
  subhead:
    "Experienced, insured man and van and removals in Gravesend, from £55 per hour plus VAT, 7 days a week, with real local knowledge of parking, access and property across DA11, DA12 and DA13.",
  metaTitle: "Removals Gravesend, Kent | Man and Van from £55/hr",
  metaDescription:
    "Insured removals and man and van in Gravesend (DA11, DA12, DA13) from £55/hr plus VAT, 7 days a week. Pedestrian zone timing planned, fixed London prices.",
  postcodes: ["DA11", "DA12", "DA13"],
  heroImage: HERO_IMAGE,
  heroImageAlt: HERO_ALT,
  introLine: "An experienced and fully insured removals company that genuinely serves and knows Gravesend.",
  valueLine: VALUE_LINE,
  localBody: [
    "Removals Nationwide moves homes, offices and single items across the whole of Gravesend and the surrounding area, 7 days a week, from the riverside streets of Milton and the town centre to Northfleet, Singlewell, King's Farm and Riverview Park, and out to Chalk, Shorne and Meopham. We are an experienced, insured removals company based in Purfleet, Essex, just across the Thames, and you deal with one team and one point of contact from quote to completion. Moves between Gravesend and London, or long distance, get a fixed written price after a free survey.",
    "Gravesend's centre is tightly managed. New Road, the High Street, King Street and part of Windmill Street form a gated pedestrian zone where no vehicles are allowed between 10am and 8pm, with the gates open outside those hours for access and loading, so a move inside that zone is planned for early morning or evening. Around the centre many streets sit in Gravesham Borough Council's Residents Parking Scheme zones, where on most roads the bays are permit holders only from 6.30pm to 8am. The A2 runs about two miles south of the centre and the A226 wraps the centre as a ring road.",
  ],
  coverageIntro:
    "We cover every part of Gravesend and the Gravesham borough around it, including the DA11, DA12 and DA13 postcodes. Areas we move people in and out of include:",
  neighbourhoods:
    "Northfleet, Milton, Denton, Chalk, Singlewell, King's Farm, Riverview Park, Christianfields, Perry Street, Windmill Hill, Istead Rise, Shorne, Cobham and Meopham.",
  coverageOutro:
    "Westwards the town joins Northfleet, Swanscombe and the new homes of Ebbsfleet Garden City, and eastwards the A226 runs on to Higham and Strood, and we cover all of it. Tell us your postcode and we will confirm coverage and a price.",
  knowIntro:
    "Gravesend is a compact riverside town with a protected pedestrian centre and estates spreading south towards the A2. Here is what our crews plan for.",
  knowBlocks: [
    {
      label: "The pedestrian zone",
      body: "Gravesham Borough Council closes the gates on New Road, the High Street, King Street and part of Windmill Street between 10am and 8pm, and no vehicles are permitted inside during those hours. From 8pm to 10am the gates are open for access, and stopping is allowed for loading and unloading, which is exactly what a removal needs. For a flat above the shops or a business inside the zone, we schedule the van for the early morning or the evening and plan the carry from the nearest gate.",
    },
    {
      label: "Residents parking zones",
      body: "Streets around the centre fall within the council's Residents Parking Scheme, which runs seven lettered zones, A to D and F to H. On most of those roads the permit holder restriction applies from 6.30pm to 8am, seven days a week, so a daytime move can often use the bays freely while an evening move cannot. Times vary road by road, so we look up the exact street, check the sign on the day and confirm the loading plan in writing before you book.",
    },
    {
      label: "Roads and the ring road",
      body: "The A2 passes about two miles south of the town centre, with the A227 leading directly in from the Tonbridge direction and the A226 running west to east from Dartford through Gravesend and on past Higham to Strood. Through the town the A226 forms a ring road around the pedestrian centre, so we plan the approach and the exit before the van arrives rather than circling with a loaded vehicle, and we pick a side of the ring that puts the back doors nearest your gate.",
    },
    {
      label: "Property and the London link",
      body: "King's Farm was mostly built in the 1920s, Riverview Park went up on a former airfield in the 1960s and Christianfields was completely rebuilt between 2007 and 2013, so housing runs from interwar semis to recent estates, with older streets near the river. Gravesend station has high speed trains to St Pancras and services to Charing Cross and Victoria, and we move commuters both ways with a fixed written price after a free survey.",
    },
  ],
  nearby: [
    { label: "Dartford", href: "/areas/dartford" },
    { label: "Medway", href: "/areas/medway" },
    { label: "Grays", href: "/areas/grays" },
    { label: "Bexley", href: "/areas/bexley" },
  ],
  faqs: [
    {
      question: "Do you cover my Gravesend postcode?",
      answer:
        "Yes. We cover the whole of Gravesend and Gravesham, including DA11, DA12 and DA13, from Northfleet and the riverside to Singlewell, Chalk, Istead Rise and the Meopham villages. Send your postcode and we will confirm coverage and a price.",
    },
    faqPrice("Gravesend"),
    {
      question: "Can a removal van get into Gravesend town centre?",
      answer:
        "Only outside the gated hours. New Road, the High Street, King Street and part of Windmill Street are closed to all vehicles from 10am to 8pm, and between 8pm and 10am the gates are open with stopping allowed for loading and unloading. For an address inside the zone we book an early morning or evening slot, plan the route in through the nearest gate and confirm the timing in writing before the day.",
    },
    {
      question: "Can you move me from Gravesend to London, or from London to Gravesend?",
      answer:
        "Yes. You get a fixed written price after a free survey, one crew end to end, and we plan the drive around the route, normally the A2 into south east London or across the Dartford Crossing for north and east London, with any Dart Charge or toll confirmed in writing before you book.",
    },
    faqInsured(),
    {
      question: "Can you do an early morning or evening move in Gravesend?",
      answer:
        "Yes. For addresses inside the town centre pedestrian area an early or evening slot is the practical answer, because the gates are open and loading is allowed before 10am and after 8pm. Bear in mind that the Residents Parking Scheme bays nearby switch to permit holders only from 6.30pm on most roads, so an early start usually beats a late finish. We work 7 days a week and will confirm the timing in writing.",
    },
  ],
};
