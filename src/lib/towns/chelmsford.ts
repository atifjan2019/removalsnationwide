import type { Borough } from "@/lib/boroughs";
import { HERO_ALT, HERO_IMAGE, VALUE_LINE, faqInsured, faqPrice } from "@/lib/boroughs";

export const town: Borough = {
  slug: "chelmsford",
  name: "Chelmsford",
  h1: "Removals in Chelmsford",
  subhead:
    "Experienced, insured man and van and removals in Chelmsford, from £55 per hour plus VAT, 7 days a week, with real local knowledge of parking, access and property across CM1, CM2 and CM3.",
  metaTitle: "Removals Chelmsford | Man and Van from £55/hr | Essex",
  metaDescription:
    "Experienced man and van and removals in Chelmsford (CM1, CM2, CM3) from £55/hr plus VAT. Insured, 7 days a week, city centre parking handled for you.",
  postcodes: ["CM1", "CM2", "CM3"],
  areaServedName: "Chelmsford, Essex",
  kind: "town",
  county: "Essex",
  distanceFromLondon: "about 30 miles from central London",
  heroImage: HERO_IMAGE,
  heroImageAlt: HERO_ALT,
  introLine: "An experienced and fully insured removals company that genuinely serves and knows Chelmsford.",
  valueLine: VALUE_LINE,
  localBody: [
    "Removals Nationwide moves homes, offices and single items across the whole of Chelmsford and the surrounding area, 7 days a week, from the Victorian streets of Moulsham and the suburbs of Springfield and Great Baddow to the new homes at Beaulieu Park and the villages of Writtle and Broomfield. We are an experienced, insured removals company based in Purfleet, Essex, so Essex is home ground for us rather than a long trip out. You get one team and one point of contact from quote to completion. Moves between Chelmsford and London, or long distance, get a fixed written price after a free survey.",
    "Our crews plan Chelmsford moves around the city centre first. The High Street is pedestrianised and the streets around the station and Moulsham Street sit in resident permit zones run through the South Essex Parking Partnership, so we check whether your street is in a zone before the day and arrange what is needed. The A12 feeds the city from the south and the Army and Navy junction is the pinch point for anything coming in from the Great Baddow side, so we time the drive to avoid the worst of it. Further out, driveways and quieter cul-de-sacs make loading simple.",
  ],
  coverageIntro:
    "We cover the whole of Chelmsford, including the CM1, CM2 and CM3 postcodes. Neighbourhoods and villages we move people in and out of include:",
  neighbourhoods:
    "Springfield, Moulsham, Great Baddow, Writtle, Broomfield, Galleywood, Chelmer Village, Beaulieu Park, Boreham, Widford and Hatfield Peverel.",
  coverageOutro:
    "If you are on the edge of the city in a village such as Boreham, Hatfield Peverel or Writtle, we cover that too. Tell us your postcode and we will confirm coverage and a price.",
  knowIntro:
    "Chelmsford is a compact city centre with a pedestrianised core and resident permit streets, surrounded by suburbs and villages where most loading is straight off a driveway, and here is what our crews plan for.",
  knowBlocks: [
    {
      label: "Resident permit zones and the centre",
      body: "On-street parking in Chelmsford is run by the South Essex Parking Partnership, which is based at Chelmsford City Council, and resident permits are issued through the council's website rather than at the kerb. Streets around the station, Moulsham Street and the central conservation areas are the ones most likely to be controlled. We check your street in advance, plan where the van will stand and keep loading tidy so the job runs without a ticket or a dispute.",
    },
    {
      label: "Roads and access",
      body: "The A12 runs along the south and east of the city, with junctions for the A414 and the A130, and the Boreham interchange at junction 19 serves Springfield, Beaulieu Park and the A131 towards Braintree. The Army and Navy junction is the busiest approach from the Great Baddow side and is due for a redesign, so we time arrivals around it. The High Street itself is pedestrianised, so central flats are loaded from the nearest permitted street.",
    },
    {
      label: "Property types",
      body: "Chelmsford has Victorian terraces along and behind Moulsham Street and New London Road, both conservation areas, with narrow frontages and on-street parking. Springfield, Great Baddow, Galleywood and Chelmer Village are mainly post-war semis and detached houses with driveways. Beaulieu Park and Channels to the north east are large new build estates with modern layouts and tighter turning space, and villages such as Writtle and Broomfield mix older cottages with newer homes.",
    },
    {
      label: "The London link",
      body: "Chelmsford sits about 30 miles from central London on the A12, which is the route our crews use for moves in either direction, with the choice of the A414 or the A130 where it suits the start point. Greater Anglia runs trains from Chelmsford to London Liverpool Street in a little over half an hour, and the new Beaulieu Park station serves the north east of the city, so a commuter's move in either direction is an easy day's work for one crew.",
    },
  ],
  nearby: [
    { label: "Brentwood", href: "/areas/brentwood" },
    { label: "Basildon", href: "/areas/basildon", miles: "15" },
    { label: "Colchester", href: "/areas/colchester", miles: "25" },
    { label: "Harlow", href: "/areas/harlow" },
  ],
  faqs: [
    {
      question: "Do you cover my Chelmsford postcode?",
      answer:
        "Yes. We cover the whole of Chelmsford across CM1, CM2 and CM3, from the city centre and Moulsham to Springfield, Great Baddow, Beaulieu Park, Writtle and the villages around the edge. Send your postcode and we will confirm coverage and a price.",
    },
    faqPrice("Chelmsford"),
    {
      question: "Is parking difficult for a move in Chelmsford city centre?",
      answer:
        "It needs planning rather than being difficult. The High Street is pedestrianised and the streets around the station and Moulsham Street sit in resident permit zones run through the South Essex Parking Partnership, so we check your street against the permit zone details before the day and plan where the van will stand. Away from the centre, most homes have a driveway or unrestricted street parking and loading is straightforward.",
    },
    {
      question: "Can you move me from Chelmsford to London, or from London to Chelmsford?",
      answer:
        "Yes, in both directions. You get a fixed written price after a free survey, one crew handles the move end to end, and we plan the drive around the A12 and the right approach for your London address, including any parking suspension at the London end.",
    },
    faqInsured(),
    {
      question: "Can you move me into a new build at Beaulieu Park or Channels?",
      answer:
        "Yes. These estates have modern layouts with shared drives and tighter turning space, so we send a van that fits the street and confirm access with you beforehand. If your developer has a move in window or a site rule about where vans can stand, tell us and we will work within it.",
    },
  ],
};
