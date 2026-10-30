import type { Borough } from "@/lib/boroughs";
import { HERO_ALT, HERO_IMAGE, VALUE_LINE, faqInsured, faqPrice } from "@/lib/boroughs";

export const town: Borough = {
  slug: "dartford",
  name: "Dartford",
  kind: "town",
  county: "Kent",
  distanceFromLondon: "about 20 miles from central London",
  areaServedName: "Dartford, Kent",
  h1: "Removals in Dartford",
  subhead:
    "Experienced, insured man and van and removals in Dartford, from £55 per hour plus VAT, 7 days a week, with real local knowledge of parking, access and property across DA1, DA2, DA9 and DA10.",
  metaTitle: "Removals in Dartford, Kent | Man and Van from £55/hr",
  metaDescription:
    "Insured removals and man and van in Dartford (DA1, DA2, DA9, DA10) from £55/hr plus VAT, 7 days a week. One crew, fixed written prices for London moves.",
  postcodes: ["DA1", "DA2", "DA9", "DA10"],
  heroImage: HERO_IMAGE,
  heroImageAlt: HERO_ALT,
  introLine: "An experienced and fully insured removals company that genuinely serves and knows Dartford.",
  valueLine: VALUE_LINE,
  localBody: [
    "Removals Nationwide moves homes, offices and single items across the whole of Dartford and the surrounding area, 7 days a week, from the Temple Hill estate and the terraces around the town centre to the new flats near the station and the family houses of Wilmington, Stone and Greenhithe. We are an experienced, insured removals company based in Purfleet, Essex, just across the river, so Dartford is a short run for our vans. You get one team and one point of contact from quote to completion, and moves between Dartford and London, or long distance, get a fixed written price after a free survey.",
    "In Dartford our crews plan around a town centre served by council car parks such as Acacia, Mansion House Gardens and Overy Street, with on street bays paid through the RingGo app, and around the permit parking schemes Dartford Borough Council runs on streets in Dartford itself, Greenhithe and Darenth, so we check each address before the day rather than on it. The A2 bypasses the town along Princes Road, the A206 skirts the north of the town on its way to the Crossing and the A226 is the original road through the centre, which gets busy, so we time the loading around it rather than sitting in it.",
  ],
  coverageIntro:
    "We cover every part of Dartford and the borough around it, including the DA1, DA2, DA9 and DA10 postcodes. Areas we move people in and out of include:",
  neighbourhoods:
    "Temple Hill, The Brent, Fleet Downs, Joyce Green, Wilmington, Stone, Greenhithe, Swanscombe, Bean, Hawley, Darenth, Sutton-at-Hone, Joydens Wood and Castle Hill at Ebbsfleet.",
  coverageOutro:
    "On the western edge Dartford runs into Crayford and Bexley, and to the east into Northfleet and Gravesend, and we cover both sides of those lines along with Southfleet and the villages off the A225. Tell us your postcode and we will confirm coverage and a price.",
  knowIntro:
    "Dartford sits at the Kent end of the Crossing, with a compact centre and suburbs that spread east along the river. Here is what our crews plan for.",
  knowBlocks: [
    {
      label: "Parking and loading",
      body: "Central Dartford has a ring of council car parks, several of them ticketless, plus on street pay and display bays, and both can be paid for by phone. Permit parking covers a dozen or so streets near the centre, a cluster in Greenhithe and a handful in Darenth, while most streets further out are uncontrolled and load from the kerb. We check the restriction outside both addresses in advance and choose a loading point that keeps the van legal and as close to the door as the street allows.",
    },
    {
      label: "Roads and the Crossing",
      body: "The A2 passes south of the centre along Princes Road, the A206 runs north of the town to the Dartford Crossing and the A282, and the A226 is the original road through the centre. The approaches to the Crossing are busy at peak times, and the Crossing itself carries Dart Charge, which must be paid by midnight the day after a crossing, so when a route crosses the river we build it into the plan and confirm it in writing before you book.",
    },
    {
      label: "Property types",
      body: "Dartford has the 1947 Temple Hill estate, older terraces around the High Street, and a wave of new flats near the station, including Langley Square on the former GlaxoSmithKline site. Further out, Wilmington, Stone and Greenhithe are mainly family houses, and Castle Hill at Ebbsfleet Garden City is new build. New flats need lift and loading bay checks, while houses with drives usually load straight from the frontage.",
    },
    {
      label: "The London link",
      body: "Dartford station in the town centre has Southeastern services to Charing Cross, Cannon Street and Victoria, and many residents commute, so moves to and from London are a regular request. For a London move we plan the drive on the A2 or the A206 and A282, and give one fixed written price after a free survey, with one crew loading and unloading at both ends.",
    },
  ],
  nearby: [
    { label: "Bexley", href: "/areas/bexley" },
    { label: "Gravesend", href: "/areas/gravesend" },
    { label: "Grays", href: "/areas/grays" },
    { label: "Bromley", href: "/areas/bromley" },
  ],
  faqs: [
    {
      question: "Do you cover my Dartford postcode?",
      answer:
        "Yes. We cover the whole of Dartford and the borough around it, including DA1, DA2, DA9 and DA10, from the town centre and Temple Hill to Wilmington, Stone, Greenhithe and Swanscombe. Send your postcode and we will confirm coverage and a price.",
    },
    faqPrice("Dartford"),
    {
      question: "Can a removal van park in Dartford town centre?",
      answer:
        "Usually, with planning. The centre is served by council car parks and on street pay and display bays, and a number of surrounding streets are in permit parking schemes run by Dartford Borough Council, which also handles bay suspension requests. We check the restriction outside your address before the day, pick the closest legal loading point and, where a bay needs suspending for the move, we arrange it and confirm the cost in writing.",
    },
    {
      question: "Can you move me from Dartford to London, or from London to Dartford?",
      answer:
        "Yes, this is one of our most common routes. You get a fixed written price after a free survey, one crew end to end, and we plan the drive around the route, usually the A2 or the A206 and A282, with any Dart Charge or toll confirmed in writing before you book.",
    },
    faqInsured(),
    {
      question: "Do you move people into the new flats near Dartford station?",
      answer:
        "Yes. Developments such as Langley Square sit a short walk from the station, and like most new blocks they have lifts, managed entrances and sometimes a loading bay that needs booking. We confirm the building's access arrangements with you before the day, bring protection for shared corridors and size the crew to the lift, so the move runs in one visit.",
    },
  ],
};
