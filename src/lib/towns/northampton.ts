import type { Borough } from "@/lib/boroughs";
import { HERO_ALT, HERO_IMAGE, VALUE_LINE, faqInsured, faqPrice } from "@/lib/boroughs";

export const town: Borough = {
  slug: "northampton",
  name: "Northampton",
  kind: "town",
  county: "Northamptonshire",
  distanceFromLondon: "about 70 miles from central London",
  areaServedName: "Northampton, Northamptonshire",
  h1: "Removals in Northampton",
  subhead:
    "Experienced, insured man and van and removals in Northampton, from £55 per hour plus VAT, 7 days a week, with real local knowledge of parking, access and property across NN1, NN2, NN3, NN4 and NN5.",
  metaTitle: "Removals Northampton | Man and Van from £55/hr | Insured",
  metaDescription:
    "Man and van and removals in Northampton (NN1 to NN5) from £55/hr plus VAT. Insured, 7 days, with real knowledge of permit zones, the M1 and the estates.",
  postcodes: ["NN1", "NN2", "NN3", "NN4", "NN5"],
  heroImage: HERO_IMAGE,
  heroImageAlt: HERO_ALT,
  introLine: "An experienced and fully insured removals company that genuinely serves and knows Northampton.",
  valueLine: VALUE_LINE,
  localBody: [
    "Removals Nationwide moves homes, offices and single items across the whole of Northampton and the surrounding area, 7 days a week, from the shoe-town streets of St James, Far Cotton and Kingsley to Abington and Kingsthorpe, the new town estates at Lumbertubs, Round Spinney and the Hunsburys, and the newer homes at Upton, Grange Park and Wootton. We are an experienced, insured removals firm based in Purfleet, Essex, and the crew you book is the crew that arrives, with one point of contact from quote to completion. Moves between Northampton and London, or long distance, get a fixed written price after a free survey.",
    "In Northampton our crews plan around a town with three motorway junctions and a dual carriageway along its south side. The M1 serves it at junctions 15, 15A and 16, the A45 sweeps around the south of the town sharing stretches with the A43 and the A508, and the A4500 comes in from the west past Upton. West Northamptonshire Council controls the permit and season ticket streets near the centre and offers a parking waiver that can exempt a vehicle from single yellow lines and permit bays for stated dates and times, which we apply for in advance where a terraced street needs it.",
  ],
  coverageIntro:
    "We cover the whole of Northampton, including the NN1, NN2, NN3, NN4 and NN5 postcode districts. Neighbourhoods we move people in and out of include:",
  neighbourhoods:
    "Abington, Kingsley, Kingsthorpe, Semilong, St James, Duston, Dallington, Upton, Far Cotton, Delapre, East Hunsbury, Wootton, Grange Park and Weston Favell.",
  coverageOutro:
    "If your home sits on the edge of town at Boughton, Hardingstone, Great Houghton, Harpole, Roade or Earls Barton, we cover that too. Tell us your postcode and we will confirm coverage and a price.",
  knowIntro:
    "Northampton is a former shoe town that became a new town, with Victorian streets, big post-war estates and the M1 on its doorstep. Here is what our crews plan for.",
  knowBlocks: [
    {
      label: "Permit zones and parking waivers",
      body: "West Northamptonshire Council manages parking in Northampton. Streets close to the centre sit in permit schemes where only vehicles with the right permit or season ticket may park in the marked bays. The council also offers a parking waiver that can exempt a vehicle from single yellow lines where no loading ban applies, from permit holder bays, on-street pay and display bays and time-limited bays, for the dates and times you state, applied for online in advance. Where your street needs one we arrange it before the day.",
    },
    {
      label: "Roads and access",
      body: "The M1 serves Northampton at junctions 15, 15A and 16. From junction 15 the A45 runs as a dual carriageway around the south of the town, sharing its route with the A43 and the A508, and the A4500 comes in from the west past Upton. The A5076, once part of the A45, loops from Upton round to Kingsthorpe, where the A508 and A5199 meet at the centre of the suburb. The town centre has pedestrianised shopping streets, so for central moves we agree a loading point before the day.",
    },
    {
      label: "Property types",
      body: "Northampton grew fast in the nineteenth century on the boot and shoe trade, spreading beyond the old town once the railway arrived in 1845. After the First World War the council built estates at Abington, Far Cotton, Kingsley, Kingsthorpe and Dallington, and after the 1968 new town designation came Lumbertubs, Moulton Park and Round Spinney to the east and Briar Hill, Camp Hill and East and West Hunsbury to the south. Grange Park dates from the late 1990s, and Upton is the current western expansion along the A4500.",
    },
    {
      label: "The London link",
      body: "Northampton station sits on the Northampton Loop of the West Coast Main Line, and London Northwestern Railway runs trains to London Euston, so the town draws plenty of movers from the capital. By road the M1 from junction 15, 15A or 16 runs straight down towards north west London. For moves to or from the capital we plan the drive around the motorway and the time of day, and the crew stays with your belongings from the Northampton door to the London one.",
    },
  ],
  nearby: [
    { label: "Milton Keynes", href: "/areas/milton-keynes" },
    { label: "Bedford", href: "/areas/bedford" },
    { label: "Peterborough", href: "/areas/peterborough" },
  ],
  faqs: [
    {
      question: "Do you cover my Northampton postcode?",
      answer:
        "Yes. We cover the whole of Northampton, NN1, NN2, NN3, NN4 and NN5, from Abington, Kingsthorpe and St James to Far Cotton, Duston, the Hunsburys, Wootton, Grange Park and Upton, plus the villages around the town. Send your postcode and we will confirm coverage and a price.",
    },
    faqPrice("Northampton"),
    {
      question: "Will parking be a problem for my move in Northampton?",
      answer:
        "Only on the inner streets around the town centre that sit in West Northamptonshire Council's permit schemes, or on terraced roads with single yellow lines. There we apply in advance for the council's parking waiver, which can exempt the van from permit bays and single yellow lines for the stated dates and times. Across the estates and the newer developments a driveway or parking court usually makes loading simple.",
    },
    {
      question: "Can you move me from Northampton to London, or from London to Northampton?",
      answer:
        "Yes, in both directions. You get a fixed written price after a free survey, one crew end to end, and the drive planned around the route, which for Northampton is normally the M1 from junction 15, 15A or 16 down into north west London. We plan the timing around the motorway and your building's access at the London end.",
    },
    faqInsured(),
    {
      question: "Can you move a terraced house in St James, Semilong or Far Cotton?",
      answer:
        "Yes. These are the town's older terraced streets, with doors close to the pavement, narrow hallways and on-street parking only, so we send a crew used to carrying through small spaces, protect the doorframes and stairs, and position the van as close as the restrictions allow. Where the street is in a permit zone or has single yellow lines we arrange the council's parking waiver before the day.",
    },
  ],
};
