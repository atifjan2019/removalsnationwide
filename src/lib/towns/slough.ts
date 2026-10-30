import type { Borough } from "@/lib/boroughs";
import { HERO_ALT, HERO_IMAGE, VALUE_LINE, faqInsured, faqPrice } from "@/lib/boroughs";

export const town: Borough = {
  slug: "slough",
  name: "Slough",
  kind: "town",
  county: "Berkshire",
  distanceFromLondon: "about 20 miles from central London",
  areaServedName: "Slough, Berkshire",
  h1: "Removals in Slough",
  subhead:
    "Experienced, insured man and van and removals in Slough, from £55 per hour plus VAT, 7 days a week, with real local knowledge of permit zones, the M4 junctions and property across SL1, SL2 and SL3.",
  metaTitle: "Removals Slough | Man and Van from £55/hr, 7 Days a Week",
  metaDescription:
    "Man and van and removals in Slough (SL1, SL2, SL3) from £55/hr plus VAT. Insured, 7 days, with permit zones, M4 junctions and estate access planned.",
  postcodes: ["SL1", "SL2", "SL3"],
  heroImage: HERO_IMAGE,
  heroImageAlt: HERO_ALT,
  introLine: "An experienced and fully insured removals company that genuinely serves and knows Slough.",
  valueLine: VALUE_LINE,
  localBody: [
    "Removals Nationwide moves homes, offices and single items across the whole of Slough and the surrounding area, 7 days a week, from the post-war estate streets of Britwell and the newer homes at Windsor Meadows and Cedar Parks in Cippenham to the flats going up around the town centre and the houses of Langley and Upton. We are an experienced, insured removals company based in Purfleet, Essex, and we reach Slough along the M25 and the M4. You get one team and one point of contact from quote to completion, and moves between Slough and London, or long distance, get a fixed written price after a free survey.",
    "In Slough our crews plan around Slough Borough Council's resident parking zones, which cover a number of residential streets and are run through virtual permits, so we check whether your street is in a zone and apply for a dispensation where the van needs to sit on a restriction. The A4 Bath Road carries the town's east to west traffic and the A355 and A412 also serve the town, with the M4 served by junctions 5, 6 and 7, so we pick the junction nearest your street and time town centre loading away from the busiest hours.",
  ],
  coverageIntro:
    "We cover the whole of Slough, including the SL1, SL2 and SL3 postcode districts. Neighbourhoods we move people in and out of include:",
  neighbourhoods:
    "Chalvey, Cippenham, Langley, Britwell, Upton, Upton Lea, Wexham, Manor Park, Salt Hill, Huntercombe, Colnbrook, Poyle, Brands Hill and Windsor Meadows.",
  coverageOutro:
    "If you are just over the borough edge in Burnham, Farnham Royal, Stoke Poges or Datchet, we cover that too. Tell us your postcode and we will confirm coverage and a price.",
  knowIntro:
    "Slough is a large, busy town with permit streets near the centre, estates and driveways further out and three M4 junctions. Here is what our crews plan for.",
  knowBlocks: [
    {
      label: "Permit zones and dispensations",
      body: "Slough Borough Council runs resident parking zones on a number of residential streets, with permits issued as virtual permits through its online system. If your street is in a zone we check the hours and, where the van must stand on a restriction, apply for a dispensation. Newer blocks built with little or no parking do not qualify for zone permits, so there we agree a loading spot with the managing agent. Many Britwell, Cippenham and Langley streets are unrestricted or have a driveway, but we still check yours.",
    },
    {
      label: "The M4, the A4 and the trading estate",
      body: "Slough sits on the M4 with three junctions, 5, 6 and 7, and junction 6 links to the town centre and Windsor on the A332 and A355, so we route to the one nearest your street. The A4 Bath Road runs east to west past the Slough Trading Estate, and the A355 and the A412 also serve the town. The trading estate is one of the largest industrial estates in Europe, so we plan for office and warehouse moves in Slough as well as homes.",
    },
    {
      label: "Property types",
      body: "Slough grew with large post-war housing built for families moving out of bombed London. Britwell was a London County Council overspill estate whose first tenants arrived in 1956, so expect semi detached and terraced streets with front gardens and mostly free parking. Cippenham has the newer Windsor Meadows and Cedar Parks developments, Langley has housing built on the former Hawker aircraft factory site, and the town centre is adding blocks of flats with lifts to book. Upton, Chalvey and Wexham are former villages now part of the town.",
    },
    {
      label: "The London link",
      body: "Slough is about 20 miles west of central London, and its station has fast Great Western trains to Paddington alongside Elizabeth line services, so we plan for commuters arriving from London or heading back in. Our vans come round the M25 from Purfleet and in on the M4, and into London we use the M4 or the A4 depending on where in the capital you are going. The branch line from Slough to Windsor and Eton Central means we cover Windsor and Slough as one patch.",
    },
  ],
  nearby: [
    { label: "Windsor", href: "/areas/windsor", miles: "3" },
    { label: "Maidenhead", href: "/areas/maidenhead", miles: "7" },
    { label: "Hillingdon", href: "/areas/hillingdon" },
    { label: "Hounslow", href: "/areas/hounslow" },
  ],
  faqs: [
    {
      question: "Do you cover my Slough postcode?",
      answer:
        "Yes. We cover the whole of Slough, including SL1, SL2 and SL3, from Cippenham and Britwell to Chalvey, Langley, Colnbrook and Wexham, plus Burnham, Farnham Royal and Stoke Poges just over the border. Send your postcode and we will confirm coverage and a price.",
    },
    faqPrice("Slough"),
    {
      question: "Is parking a problem for a move in Slough?",
      answer:
        "Only on some streets. A number of residential streets sit in Slough Borough Council resident parking zones run on virtual permits. We check your street before the day and apply for a dispensation where the van needs to stand on a restriction. Many streets further out in Britwell, Cippenham, Langley and Wexham are unrestricted or have a driveway, and for new flats in the centre we agree a loading spot with the managing agent.",
    },
    {
      question: "Can you move me from Slough to London, or from London to Slough?",
      answer:
        "Yes, in either direction. You get a fixed written price after a free survey, one crew that loads in one place and unloads in the other, and the drive planned around the route, usually the M4 and then the A4 or the M25 depending on where in London you are going.",
    },
    faqInsured(),
    {
      question: "Can you move me into one of the new flats in Slough town centre?",
      answer:
        "Yes. The newer blocks in and around the town centre have lifts, loading areas and managing agents with their own rules, and many were built with little or no parking. We ask you for the agent's contact, book the lift and a loading spot for your slot, protect the lobby and lift, and bring the right crew size so the move is done inside the booked window.",
    },
  ],
};
