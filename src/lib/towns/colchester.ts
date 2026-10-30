import type { Borough } from "@/lib/boroughs";
import { HERO_ALT, HERO_IMAGE, VALUE_LINE, faqInsured, faqPrice } from "@/lib/boroughs";

export const town: Borough = {
  slug: "colchester",
  name: "Colchester",
  h1: "Removals in Colchester",
  subhead:
    "Experienced, insured man and van and removals in Colchester, from £55 per hour plus VAT, 7 days a week, with real local knowledge of parking, access and property across CO1, CO2, CO3 and CO4.",
  metaTitle: "Removals Colchester | Man and Van from £55/hr | Essex",
  metaDescription:
    "Man and van and removals in Colchester (CO1 to CO4) from £55/hr plus VAT. Insured, 7 days a week, city centre permit zones and narrow lanes planned for.",
  postcodes: ["CO1", "CO2", "CO3", "CO4"],
  areaServedName: "Colchester, Essex",
  kind: "town",
  county: "Essex",
  distanceFromLondon: "about 60 miles from central London",
  heroImage: HERO_IMAGE,
  heroImageAlt: HERO_ALT,
  introLine: "An experienced and fully insured removals company that genuinely serves and knows Colchester.",
  valueLine: VALUE_LINE,
  localBody: [
    "Removals Nationwide moves homes, offices and single items across the whole of Colchester and the surrounding area, 7 days a week, from the lanes of the Dutch Quarter and the terraces of New Town to Lexden, Mile End, Highwoods and the new homes on the former Garrison. We are an experienced, insured removals company based in Purfleet, Essex, and the A12 takes us to Colchester without touching London traffic. One team and one point of contact handle everything from quote to completion. Moves between Colchester and London, or long distance, get a fixed written price after a free survey.",
    "Colchester's centre sits inside the Roman wall, so our crews plan for narrow one way streets, resident permit zones run by the North Essex Parking Partnership and a High Street where traffic has been restricted for years. The Dutch Quarter lanes are too tight for a large vehicle, so we size the van to the street. Outside the wall the A133 and the A134 bring traffic in from the A12, and the junctions at Stanway, Colchester North and Ardleigh Crown put us on the right side of the city for Lexden, Highwoods or Greenstead without crossing the middle.",
  ],
  coverageIntro:
    "We cover the whole of Colchester, including the CO1, CO2, CO3 and CO4 postcodes. Neighbourhoods and villages we move people in and out of include:",
  neighbourhoods:
    "Lexden, Stanway, Old Heath, Berechurch, Greenstead, Highwoods, Mile End, Braiswick, New Town, the Dutch Quarter, Wivenhoe, West Bergholt and Boxted.",
  coverageOutro:
    "If you are in a village on the edge of the city such as Wivenhoe, West Bergholt or Boxted, we cover that too. Tell us your postcode and we will confirm coverage and a price.",
  knowIntro:
    "Colchester is a historic walled centre with permit streets and tight lanes, ringed by suburbs and large new estates, and here is what our crews plan for.",
  knowBlocks: [
    {
      label: "Permit zones and the Parking Partnership",
      body: "On-street parking in Colchester is run by the North Essex Parking Partnership rather than by the city council on its own, so permits, zone maps and enforcement all come through the partnership. Resident permit schemes cover the streets inside and immediately around the wall and reach into several of the older inner suburbs, where kerb space is already tight. We check which zone your street falls in before the day and plan where the van will stand so the move is not held up.",
    },
    {
      label: "The walled centre and the Dutch Quarter",
      body: "The city centre developed inside the Roman wall, and traffic on the High Street has been restricted for some years, so it is not a place to pull up a van. Just north of the High Street, the Dutch Quarter is a tangle of lanes around Maidenburgh Street, East and West Stockwell Street and St Helen's Lane, lined with painted period houses, with inclines and corners that a large vehicle cannot manage. For these addresses we send a smaller van and plan the walk from the nearest legal loading point.",
    },
    {
      label: "Property types",
      body: "Colchester runs from timber framed and Georgian houses inside the wall and Victorian terraces in New Town to the suburbs of Lexden, Stanway, Highwoods and Greenstead, where most homes have a driveway or unrestricted kerb. The former Garrison land south of the centre is being redeveloped into a large new neighbourhood, the new estates north of Mile End are still being built out, and Wivenhoe adds a riverside village with narrow older streets near the quay.",
    },
    {
      label: "The A12 and the London link",
      body: "Colchester is about 60 miles from central London, with the A12 running the whole way and the A120 joining at the Crown interchange at junction 29. Junctions 25 at Marks Tey, 26 at Stanway, 27 for the A133 and 28 for the A134 give us separate ways into the west, centre and north of the city. Greater Anglia trains from Colchester reach London Liverpool Street in under an hour, with Colchester Town station serving the centre, so a commuter's move between the two fits into one crew's day.",
    },
  ],
  nearby: [
    { label: "Chelmsford", href: "/areas/chelmsford", miles: "25" },
    { label: "Ipswich", href: "/areas/ipswich" },
    { label: "Harlow", href: "/areas/harlow" },
  ],
  faqs: [
    {
      question: "Do you cover my Colchester postcode?",
      answer:
        "Yes. We cover the whole of Colchester across CO1, CO2, CO3 and CO4, from the city centre, New Town and the Dutch Quarter to Lexden, Stanway, Highwoods, Greenstead, Mile End and the surrounding villages. Send your postcode and we will confirm coverage and a price.",
    },
    faqPrice("Colchester"),
    {
      question: "Can you get a removal van into Colchester city centre and the Dutch Quarter?",
      answer:
        "Yes, with the right van. The centre inside the Roman wall has resident permit zones run by the North Essex Parking Partnership, traffic restrictions on the High Street and lanes in the Dutch Quarter that a large vehicle cannot manage. We check your street's zone, send a van sized for the lane and plan the carry from the nearest legal loading point, so the move is costed properly before the day.",
    },
    {
      question: "Can you move me from Colchester to London, or from London to Colchester?",
      answer:
        "Yes, in both directions. You get a fixed written price after a free survey, one crew handles the move end to end, and we plan the drive down the A12 to suit your London address, including any parking suspension at the London end.",
    },
    faqInsured(),
    {
      question: "Can you move me into a new build on the Garrison or at Mile End?",
      answer:
        "Yes. The Garrison redevelopment south of the centre and the new estates north of Mile End are both large new neighbourhoods still being built out, so some roads and parking areas are unfinished. We confirm the approach with you beforehand, work within any developer rules on where vans can stand and keep the crew's timing flexible around site traffic.",
    },
  ],
};
