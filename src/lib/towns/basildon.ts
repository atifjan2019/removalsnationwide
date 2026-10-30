import type { Borough } from "@/lib/boroughs";
import { HERO_ALT, HERO_IMAGE, VALUE_LINE, faqInsured, faqPrice } from "@/lib/boroughs";

export const town: Borough = {
  slug: "basildon",
  name: "Basildon",
  h1: "Removals in Basildon",
  subhead:
    "Experienced, insured man and van and removals in Basildon, from £55 per hour plus VAT, 7 days a week, with real local knowledge of parking, access and property across SS13, SS14, SS15 and SS16.",
  metaTitle: "Removals Basildon | Man and Van from £55/hr | Essex",
  metaDescription:
    "Experienced man and van and removals in Basildon (SS13 to SS16) from £55/hr plus VAT. Insured, 7 days a week, covering Laindon, Pitsea and Langdon Hills.",
  postcodes: ["SS13", "SS14", "SS15", "SS16"],
  areaServedName: "Basildon, Essex",
  kind: "town",
  county: "Essex",
  distanceFromLondon: "about 30 miles from central London",
  heroImage: HERO_IMAGE,
  heroImageAlt: HERO_ALT,
  introLine: "An experienced and fully insured removals company that genuinely serves and knows Basildon.",
  valueLine: VALUE_LINE,
  localBody: [
    "Removals Nationwide moves homes, offices and single items across the whole of Basildon and the surrounding area, 7 days a week, taking in the new town neighbourhoods of Fryerns, Lee Chapel and Kingswood as well as Laindon, Pitsea, Vange and Langdon Hills. We are an experienced, insured removals company based in Purfleet, Essex, a short run along the A13, and you deal with one team and one point of contact from quote to completion. Whether it is a single sofa or a four bedroom house, the same crew does the work. Moves between Basildon and London, or long distance, get a fixed written price after a free survey.",
    "Basildon was laid out as a new town from the late 1940s, so our crews plan for neighbourhoods linked by spine roads, where a home can face a footpath or a parking court rather than the road. Carrying distance matters more here than permits do. The town centre is a pedestrian precinct around Town Square, so flats there are loaded from a service road or a car park, and we check which one applies to your block. The A127 and A13 frame the town, with the A176 and A132 taking us in from either side.",
  ],
  coverageIntro:
    "We cover the whole of Basildon, including the SS13, SS14, SS15 and SS16 postcodes. Neighbourhoods we move people in and out of include:",
  neighbourhoods:
    "Laindon, Pitsea, Vange, Langdon Hills, Fryerns, Lee Chapel North, Lee Chapel South, Kingswood, Felmores, Noak Bridge, Steeple View, Bowers Gifford, Great Berry and Crays Hill.",
  coverageOutro:
    "If you are on the edge of the borough towards Billericay, Wickford or Bowers Gifford, we cover that too. Tell us your postcode and we will confirm coverage and a price.",
  knowIntro:
    "Basildon is a post-war new town where access is about estate layouts and carrying distance rather than permit zones, and here is what our crews plan for.",
  knowBlocks: [
    {
      label: "Estate layouts and parking",
      body: "Most of Basildon was built after it was designated a new town in 1949, with neighbourhoods linked to the centre by spine roads. Where a home faces a footpath, a parking court or a garage block rather than the road, our crews check the nearest point a van can legally stand and plan the carry from there, bringing extra hands where the walk is long. Resident permits here are handled by the South Essex Parking Partnership, and we check your street before the day.",
    },
    {
      label: "Town centre access",
      body: "The town centre was laid out as a pedestrian precinct from the 1950s, spreading out from Town Square and the Eastgate Centre, so there is no kerb outside the front door of a central flat. Brooke House, the tower block on Town Square, and the newer blocks around the centre are loaded from service roads and car parks rather than the precinct itself, and the right loading point is not always obvious from the entrance. We agree the loading point and lift booking with your building before we arrive.",
    },
    {
      label: "Roads in and out",
      body: "Basildon sits between the A127 to the north and the A13 to the south, both dual carriageways. The A176 leaves the A127 for the town centre and the hospital, and the A132 comes up from the A13 at Pitsea towards Wickford. Our crews pick the approach that suits your estate rather than defaulting to the town centre, and plan around the A127 and A13 peaks so the van is not sitting in traffic on your time.",
    },
    {
      label: "The London link",
      body: "Basildon is about 30 miles from central London by road, with the A13 and the A127 both running straight in, so a Basildon to London move is a half day drive each way rather than a long haul. c2c trains run from Basildon, Laindon and Pitsea to London Fenchurch Street in a little over half an hour, so a commuter swapping a London flat for a house in Langdon Hills, Laindon or Noak Bridge, or heading the other way, can be moved by one crew in a single day.",
    },
  ],
  nearby: [
    { label: "Chelmsford", href: "/areas/chelmsford", miles: "15" },
    { label: "Southend-on-Sea", href: "/areas/southend-on-sea" },
    { label: "Grays", href: "/areas/grays", miles: "11" },
    { label: "Brentwood", href: "/areas/brentwood" },
  ],
  faqs: [
    {
      question: "Do you cover my Basildon postcode?",
      answer:
        "Yes. We cover the whole of Basildon across SS13, SS14, SS15 and SS16, from Pitsea and Vange in the east to Laindon, Langdon Hills and Noak Bridge in the west, plus the town centre. Send your postcode and we will confirm coverage and a price.",
    },
    faqPrice("Basildon"),
    {
      question: "My Basildon home is on a footpath with no road outside. Can you still move me?",
      answer:
        "Yes, this is common in the new town neighbourhoods. We find the nearest point a van can legally stand, often a parking court or garage block, measure the carry and bring the right number of movers for it. Tell us the layout when you book and we will plan the route from the van to your door before the day.",
    },
    {
      question: "Can you move me from Basildon to London, or from London to Basildon?",
      answer:
        "Yes, in both directions. You get a fixed written price after a free survey, one crew handles the move end to end, and we plan the drive around the A13 or the A127, whichever suits your London address, including any parking suspension needed at the London end.",
    },
    faqInsured(),
    {
      question: "Can you move me into a flat in Basildon town centre?",
      answer:
        "Yes. Town centre flats, including Brooke House and the newer blocks around the centre, are loaded from a service road or car park because the precinct is pedestrianised. We confirm the loading point, book the lift where the building needs it and plan the timing so you are not carrying through a busy shopping afternoon.",
    },
  ],
};
