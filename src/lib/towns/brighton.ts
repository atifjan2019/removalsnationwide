import type { Borough } from "@/lib/boroughs";
import { HERO_ALT, HERO_IMAGE, VALUE_LINE, faqInsured, faqPrice } from "@/lib/boroughs";

export const town: Borough = {
  slug: "brighton",
  name: "Brighton",
  kind: "town",
  county: "East Sussex",
  distanceFromLondon: "about 55 miles from central London",
  areaServedName: "Brighton, East Sussex",
  h1: "Removals in Brighton",
  subhead:
    "Experienced, insured man and van and removals in Brighton, from £55 per hour plus VAT, 7 days a week, with real local knowledge of parking, access and property across BN1, BN2, BN3 and BN41.",
  metaTitle: "Removals Brighton | Man and Van from £55/hr | Insured",
  metaDescription:
    "Man and van and removals in Brighton (BN1, BN2, BN3, BN41) from £55/hr plus VAT. Insured, 7 days, with parking zones, bay suspensions and hills handled.",
  postcodes: ["BN1", "BN2", "BN3", "BN41"],
  heroImage: HERO_IMAGE,
  heroImageAlt: HERO_ALT,
  introLine: "An experienced and fully insured removals company that genuinely serves and knows Brighton.",
  valueLine: VALUE_LINE,
  localBody: [
    "Removals Nationwide moves homes, offices and single items across the whole of Brighton and the surrounding area, 7 days a week, from the Regency squares of Kemptown and the steep streets of Hanover to Preston Park, Patcham, Hove and Portslade. We are an experienced, insured removals company based in Purfleet, Essex, and the same crew handles your man and van job, full house move, office relocation, packing or clearance, with one point of contact from quote to completion. Moves between Brighton and London, or long distance, get a fixed written price after a free survey, so there is nothing to argue about on the day.",
    "Brighton is a city of hills, lettered parking zones and tall converted houses, so our crews plan the kerb before anything else. Brighton and Hove City Council runs controlled parking zones across most of the inner city, with an online map showing the zone for any street, and suspends bays on application, which we book where needed. Many homes are Regency or Victorian houses split into flats over several floors, often with no lift, and the streets off Lewes Road climb a steep valley. We route in on the A23 and the A27 bypass and use the A259 along the seafront and the A270 into the city.",
  ],
  coverageIntro:
    "We cover the whole of Brighton and Hove, including the BN1, BN2, BN3 and BN41 postcodes, from the seafront to the edge of the Downs. Areas we move people in and out of include:",
  neighbourhoods:
    "Kemptown, Hanover, Seven Dials, Preston Park, Withdean, Patcham, Hollingbury, Moulsecoomb, Whitehawk, Woodingdean, Rottingdean, Saltdean, Hove and Portslade.",
  coverageOutro:
    "On the edges we also cover Ovingdean, Coldean, Falmer and Southwick in BN42. Tell us your postcode and we will confirm coverage and a price.",
  knowIntro:
    "Brighton is dense, hilly and largely covered by controlled parking, so the planning is about the kerb and the stairs. Here is what our crews plan for.",
  knowBlocks: [
    {
      label: "Controlled parking zones and suspensions",
      body: "Brighton and Hove City Council divides the inner city into lettered controlled parking zones, and its online map shows which zone a street sits in, so we look your address up rather than guess from the neighbourhood. The council suspends bays on application, and a standard suspension runs from 6am on the first day to the end of the last. We book that where your street is all permit or pay bays, confirm it in writing, and time the crew's arrival to the start of the suspension.",
    },
    {
      label: "Converted houses and stairs",
      body: "Kemp Town is a Regency estate of squares, crescents and terraces above Brighton Marina, and many of its grand houses are now flats over four or five floors with narrow stairs and no lift. Hanover is a steep hill of tightly packed Victorian cottages, and the streets off Lewes Road climb the valley sides. We send the right number of movers for the stairs, protect the common parts, and allow for the carry where the front door is a long way from where the van can stand.",
    },
    {
      label: "Roads into the city",
      body: "The A23 brings traffic down from the M23 and London past Preston Park to Old Steine by the pier, the A27 bypass runs along the north of the city past Patcham and round to Falmer, the A270 Lewes Road carries the valley route out past Moulsecoomb to the bypass, and the A259 runs along the seafront from Old Steine past Kemptown and Brighton Marina to Rottingdean. Our crews pick the approach for your address and avoid the seafront on busy summer weekends wherever the job allows.",
    },
    {
      label: "The London link",
      body: "Our crews leave Purfleet, cross the Dartford Crossing, which is covered by Dart Charge and confirmed on your quote, then take the M25 and M23 to the A23 into Brighton. Brighton station runs fast trains to London, so plenty of people moving here keep a London job, and a London to Brighton move is one crew, one van and a fixed written price after a free survey, with the suspension booked at both ends if needed.",
    },
  ],
  nearby: [
    { label: "Eastbourne", href: "/areas/eastbourne", miles: "25" },
    { label: "Crawley", href: "/areas/crawley", miles: "25" },
    { label: "Horsham", href: "/areas/horsham" },
  ],
  faqs: [
    {
      question: "Do you cover my Brighton postcode?",
      answer:
        "Yes. We cover Brighton and Hove, BN1, BN2, BN3 and BN41, from Kemptown and Hanover to Patcham, Woodingdean, Rottingdean, Hove and Portslade. Send your postcode and we will confirm coverage and a price.",
    },
    faqPrice("Brighton"),
    {
      question: "How do you handle parking for a move in Brighton?",
      answer:
        "Most of inner Brighton and Hove sits inside Brighton and Hove City Council's lettered controlled parking zones, with permit and pay bays rather than free kerb, and the council's online map shows which zone your street is in. Where there is no legal loading space we apply to the council to suspend bays outside your door, confirm the cost in writing before you book, and time the crew's arrival to the suspension.",
    },
    {
      question: "Can you move me from Brighton to London, or from London to Brighton?",
      answer:
        "Yes. Brighton to London and London to Brighton moves get a fixed written price after a free survey. One crew loads, drives and unloads end to end, and we plan the drive around the A23, the M23 and the M25, with any suspension or access arranged at both ends.",
    },
    faqInsured(),
    {
      question: "Can you move a flat on the top floor of a converted Regency house?",
      answer:
        "Yes. Converted houses in Kemp Town and across the centre often have no lift and narrow stairs, so we size the crew for the stairs, bring protection for the common parts and plan the carry from where the van can legally stand. Tell us the floor and whether there is a lift and we will price it accurately.",
    },
  ],
};
