import type { Borough } from "@/lib/boroughs";
import { HERO_ALT, HERO_IMAGE, VALUE_LINE, faqInsured, faqPrice } from "@/lib/boroughs";

export const town: Borough = {
  slug: "bishops-stortford",
  name: "Bishop's Stortford",
  kind: "town",
  county: "Hertfordshire",
  distanceFromLondon: "about 30 miles from central London",
  areaServedName: "Bishop's Stortford, Hertfordshire",
  h1: "Removals in Bishop's Stortford",
  subhead:
    "Experienced, insured man and van and removals in Bishop's Stortford, from £55 per hour plus VAT, 7 days a week, with real local knowledge of parking, access and property across CM23 and CM22.",
  metaTitle: "Removals Bishop's Stortford | Man and Van from £55/hr",
  metaDescription:
    "Man and van and removals in Bishop's Stortford (CM23, CM22) from £55/hr plus VAT. Insured, 7 days, with real knowledge of permit zones and new estates.",
  postcodes: ["CM23", "CM22"],
  heroImage: HERO_IMAGE,
  heroImageAlt: HERO_ALT,
  introLine:
    "An experienced and fully insured removals company that genuinely serves and knows Bishop's Stortford.",
  valueLine: VALUE_LINE,
  localBody: [
    "Removals Nationwide moves homes, offices and single items across the whole of Bishop's Stortford and the surrounding area, 7 days a week, from the terraced streets around the station and New Town to the family estates at Thorley Park, Bishop's Park and St Michael's Mead and the villages along the Stort. We are an experienced, insured removals company based in Purfleet, Essex, rather than a booking marketplace, and one team with one point of contact looks after you from quote to completion. Moves between Bishop's Stortford and London, or long distance, get a fixed written price after a free survey.",
    "In Bishop's Stortford our crews plan around a compact, historic town centre where East Herts Council runs numbered resident permit zones on the streets closest to the centre and the station, so we check whether your road sits in one before the day. The A1250 carries traffic through the middle of town along Hockerill Street, The Causeway and Link Road, and the A120 and the M11 at junction 8 sit on the northern and eastern edges. Older streets near the station are narrow and terraced, while the newer estates to the south and west have driveways and wider turning space for a van.",
  ],
  coverageIntro:
    "We cover every part of Bishop's Stortford, including the CM23 postcode district and the CM22 villages around it. Neighbourhoods we move people in and out of include:",
  neighbourhoods:
    "Hockerill, New Town, Thorley, Thorley Park, Bishop's Park, St Michael's Mead, Windhill, Havers, Silverleys, Parsonage and Stortford Fields.",
  coverageOutro:
    "If you are in Sawbridgeworth, Stansted Mountfitchet, Little Hallingbury, Great Hallingbury or Hatfield Heath on the edges of town, we cover that too. Tell us your postcode and we will confirm coverage and a price.",
  knowIntro:
    "Bishop's Stortford is a market town on the Hertfordshire and Essex border with a historic centre, a busy commuter station and large new estates on its edges. Here is what our crews plan for.",
  knowBlocks: [
    {
      label: "Resident permit zones and parking",
      body: "East Herts Council runs numbered resident permit schemes in Bishop's Stortford, with zones such as B1 around Stansted Road, B2 around Dunmow Road, B3 at Windhill and B7 in Chantry covering streets close to the centre and the station. If your street is inside a zone we confirm where the van can legally stand before the day and whether a dispensation is needed. Outside the zones most streets are unrestricted and the newer estates have driveways, so loading is straightforward.",
    },
    {
      label: "Roads and access",
      body: "The M11 passes east of the town and junction 8 links it to Bishop's Stortford and Stansted Airport, while the A120 runs along the northern edge. The A1250 carries traffic through the centre on Hockerill Street, The Causeway and Link Road, and the A1184 heads south to Sawbridgeworth and Harlow. Town centre streets are narrow, so we time central loads to avoid the busiest periods and agree the loading point with you in advance.",
    },
    {
      label: "Property types",
      body: "The streets around the station and New Town are Victorian and Edwardian terraces with on-street parking and narrow hallways, while Hockerill, across the river to the east, has older houses on the hill up to the Hockerill junction. To the south and west the town is largely post-war and modern family housing on estates such as Thorley Park, Bishop's Park and St Michael's Mead, with driveways and garages. Riverside apartments near the Stort add lift and communal access to plan for.",
    },
    {
      label: "New estates and the London link",
      body: "Bishop's Stortford is growing. Stortford Fields is a large new development north of the town, split into eastern and western neighbourhoods, St James' Park sits on the southern edge at Thorley, and new homes have been built close to the station and the town centre. For London moves we plan the route down the M11 into north east London, and with the West Anglia Main Line running to Liverpool Street the town is a commuter base, so moves to and from the capital suit one crew end to end.",
    },
  ],
  nearby: [
    { label: "Harlow", href: "/areas/harlow", miles: "7 miles" },
    { label: "Brentwood", href: "/areas/brentwood", miles: "27 miles" },
    { label: "Stevenage", href: "/areas/stevenage" },
    { label: "Cambridge", href: "/areas/cambridge" },
  ],
  faqs: [
    {
      question: "Do you cover my Bishop's Stortford postcode?",
      answer:
        "Yes. We cover the whole of Bishop's Stortford, CM23 and the CM22 villages around it, from Hockerill and the town centre to Thorley, Bishop's Park and the new estates at Stortford Fields. Send your postcode and we will confirm coverage and a price.",
    },
    faqPrice("Bishop's Stortford"),
    {
      question: "Is parking difficult for a move in Bishop's Stortford town centre?",
      answer:
        "It can be on the streets nearest the centre and the station, where East Herts Council runs resident permit zones and the roads are narrow. We check your street in advance, confirm with the council what is needed for a van to load there, and agree the plan with you before the day. On the estates further out, a driveway usually gives direct access.",
    },
    {
      question: "Can you move me from Bishop's Stortford to London, or from London to Bishop's Stortford?",
      answer:
        "Yes, in both directions. You get a fixed written price after a free survey, one crew end to end, and the drive planned around the route, normally the M11 into London. Many Bishop's Stortford households commute to Liverpool Street, so we plan around weekday timings and your working day.",
    },
    faqInsured(),
    {
      question: "Can you move me into a new-build at Stortford Fields or St James' Park?",
      answer:
        "Yes. New estates like Stortford Fields north of the town and St James' Park at Thorley often have unfinished roads, show-home traffic and completion day timings to work around. We confirm access with you and your developer, bring floor and door protection for a new home, and can hold your goods in storage if your completion date moves.",
    },
  ],
};
