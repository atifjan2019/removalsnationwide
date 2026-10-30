import type { Borough } from "@/lib/boroughs";
import { HERO_ALT, HERO_IMAGE, VALUE_LINE, faqInsured, faqPrice } from "@/lib/boroughs";

export const town: Borough = {
  slug: "peterborough",
  name: "Peterborough",
  kind: "town",
  county: "Cambridgeshire",
  distanceFromLondon: "about 85 miles from central London",
  areaServedName: "Peterborough, Cambridgeshire",
  h1: "Removals in Peterborough",
  subhead:
    "Experienced, insured man and van and removals in Peterborough, from £55 per hour plus VAT, 7 days a week, with real local knowledge of parking, the parkways and property across PE1, PE2, PE3, PE4 and PE7.",
  metaTitle: "Removals Peterborough | Man and Van from £55/hr | Insured",
  metaDescription:
    "Man and van and removals in Peterborough (PE1 to PE4, PE7) from £55/hr plus VAT. Insured, 7 days, with real knowledge of the parkways and townships.",
  postcodes: ["PE1", "PE2", "PE3", "PE4", "PE7"],
  heroImage: HERO_IMAGE,
  heroImageAlt: HERO_ALT,
  introLine: "An experienced and fully insured removals company that genuinely serves and knows Peterborough.",
  valueLine: VALUE_LINE,
  localBody: [
    "Removals Nationwide moves homes, offices and single items across the whole of Peterborough and the surrounding area, 7 days a week, from the railway streets of New England and Millfield and the brickworks district of Fletton to the new town townships of Bretton, the Ortons and Werrington and the newer homes at Hampton Hargate and Hampton Vale. We are an experienced, insured removals company working out of Purfleet, Essex, and the team that quotes your move is the team that turns up and sees it through, with one point of contact throughout. Moves between Peterborough and London, or long distance, get a fixed written price after a free survey.",
    "In Peterborough our crews plan around the parkways, the dual carriageways built in the new town years that ring the city. The A1139 runs from the A47 at Eye as Frank Perkins Parkway and then Fletton Parkway round to the A1(M) at junction 17, the A1260 Nene Parkway runs north to south on the west side, the A47 Soke Parkway crosses the north, and the A15 comes through the centre as Bourges Boulevard. Peterborough City Council runs resident parking zones on some inner streets and a set of council car parks around the centre, so for central moves we confirm the kerb before the day.",
  ],
  coverageIntro:
    "We cover the whole of Peterborough, including the PE1, PE2, PE3, PE4 and PE7 postcode districts. Neighbourhoods we move people in and out of include:",
  neighbourhoods:
    "New England, Millfield, Dogsthorpe, Fletton, Woodston, Stanground, Orton Longueville, Orton Goldhay, Bretton, Longthorpe, Werrington, Paston, Walton and Hampton Hargate.",
  coverageOutro:
    "If your home sits on the edge of the city at Yaxley, Eye, Glinton, Castor, Ailsworth or Wansford, we cover that too. Tell us your postcode and we will confirm coverage and a price.",
  knowIntro:
    "Peterborough is a cathedral city that grew into a new town, with Victorian railway streets, planned townships and a ring of parkways. Here is what our crews plan for.",
  knowBlocks: [
    {
      label: "Resident parking zones",
      body: "Peterborough City Council runs resident parking zones on streets and bays close to the centre, where parking is restricted to permit holders, and the council itself says a permit does not guarantee a space. The council does not publish a removals dispensation for these zones, so for a move inside one we contact its parking services team beforehand and agree how the van can stand on your street. Across the townships and the Hamptons a driveway or parking court usually makes loading simple.",
    },
    {
      label: "The parkways",
      body: "The A1139 starts at the A47 near Eye, runs south as Frank Perkins Parkway across the River Nene to meet the A605 at Stanground, then turns west as Fletton Parkway past Hampton and the Ortons to the A1 and A1(M) at junction 17. The A1260 Nene Parkway runs from the A15 at Hampton north past the Ortons to the A47 at Longthorpe, the A47 Soke Parkway crosses the north of the city past Werrington, and the A605 Oundle Road threads through the Ortons.",
    },
    {
      label: "Property types",
      body: "New England grew as railway workers' housing after the Great Northern Railway's main line opened in 1850, and Fletton south of the river is the home of the Fletton brick, with the Fletton Quays development now on its riverside. Peterborough was designated a new town in 1967: Bretton was the first township, built from 1970, and Orton the second, with Orton Goldhay and Malborne from the mid 1970s, Brimbles and Wistow in the 1980s and Northgate the newest. Hampton has been built since 1996, Hargate first and Vale after it.",
    },
    {
      label: "The London link",
      body: "Peterborough sits on the East Coast Main Line, with LNER trains to London King's Cross and Thameslink services that run through central London via St Pancras and on to Horsham. By road the route is the A1(M) south from junction 17 and then the A1 or the M25 into London. For moves to or from the capital we plan the drive around the A1 and the time of day, and you keep the same crew from the first box in Peterborough to the last one in London.",
    },
  ],
  nearby: [
    { label: "Cambridge", href: "/areas/cambridge" },
    { label: "Northampton", href: "/areas/northampton" },
    { label: "Bedford", href: "/areas/bedford" },
  ],
  faqs: [
    {
      question: "Do you cover my Peterborough postcode?",
      answer:
        "Yes. We cover the whole of Peterborough, PE1, PE2, PE3, PE4 and PE7, from New England, Millfield and Fletton to Bretton, the Ortons, Werrington, Stanground and the Hamptons, plus the villages around the city. Send your postcode and we will confirm coverage and a price.",
    },
    faqPrice("Peterborough"),
    {
      question: "Will parking be a problem for my move in Peterborough?",
      answer:
        "Only on the inner streets that sit in Peterborough City Council's resident parking zones, where parking is for permit holders. We check your street in advance and agree the arrangement with the council's parking team where needed. Across Bretton, the Ortons, Werrington and the Hamptons a driveway or parking court usually puts the van within a few steps of your door, and the parkways keep the drive across the city quick.",
    },
    {
      question: "Can you move me from Peterborough to London, or from London to Peterborough?",
      answer:
        "Yes, in both directions. You get a fixed written price after a free survey, one crew end to end, and the drive planned around the route, which for Peterborough is normally Fletton Parkway to the A1(M) at junction 17 and then the A1 south towards London. We plan the timing around the A1 and your building's access at the London end.",
    },
    faqInsured(),
    {
      question: "Can you move a new build home in Hampton Hargate or Hampton Vale?",
      answer:
        "Yes. Hampton has been built since 1996 and its streets are modern, with driveways, shared parking courts and some narrow access roads, so we match the van to the street and park off the carriageway where the layout allows. Hampton is reached from the A15 or Fletton Parkway junction 2, so the crew comes in off the parkway without crossing the city.",
    },
  ],
};
