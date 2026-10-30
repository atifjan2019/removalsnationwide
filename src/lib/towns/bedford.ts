import type { Borough } from "@/lib/boroughs";
import { HERO_ALT, HERO_IMAGE, VALUE_LINE, faqInsured, faqPrice } from "@/lib/boroughs";

export const town: Borough = {
  slug: "bedford",
  name: "Bedford",
  kind: "town",
  county: "Bedfordshire",
  distanceFromLondon: "about 55 miles from central London",
  areaServedName: "Bedford, Bedfordshire",
  h1: "Removals in Bedford",
  subhead:
    "Experienced, insured man and van and removals in Bedford, from £55 per hour plus VAT, 7 days a week, with real local knowledge of parking, access and property across MK40, MK41, MK42 and MK43.",
  metaTitle: "Removals Bedford | Man and Van from £55/hr | Insured",
  metaDescription:
    "Man and van and removals in Bedford (MK40, MK41, MK42) from £55/hr plus VAT. Insured, 7 days, with real knowledge of parking zones, the A421 and Kempston.",
  postcodes: ["MK40", "MK41", "MK42", "MK43"],
  heroImage: HERO_IMAGE,
  heroImageAlt: HERO_ALT,
  introLine: "An experienced and fully insured removals company that genuinely serves and knows Bedford.",
  valueLine: VALUE_LINE,
  localBody: [
    "Removals Nationwide moves homes, offices and single items across the whole of Bedford and the surrounding area, 7 days a week, from the Victorian and Edwardian villas of De Parys Avenue and the terraces of Queens Park to Kempston, Brickhill, Putnoe and the new town at Wixams. As an experienced, insured removals company based in Purfleet, Essex, we give you one team and one point of contact from quote to completion, with no marketplace or subcontractor in between. Moves between Bedford and London, or long distance, get a fixed written price after a free survey.",
    "Bedford Borough Council runs lettered controlled parking zones across the streets around the town centre, most enforced in the daytime from Monday to Saturday and one around the clock, so we ask for your street early and check whether the van can use a bay or needs council agreement. The A421 bypasses the town to the south and west and links it to the M1 at junction 13, the A6 runs north to south, and the River Great Ouse divides the centre, so we plan the bridge crossings into the day. The historic core has narrow streets, while Kempston, Brickhill and the villages are mostly driveways and open roads.",
  ],
  coverageIntro:
    "We cover the whole of Bedford, including the MK40, MK41 and MK42 postcode districts and the MK43 villages to the west. Neighbourhoods we move people in and out of include:",
  neighbourhoods:
    "Kempston, Brickhill, Putnoe, Goldington, Queens Park, De Parys, Castle, Cauldwell, Biddenham, Great Denham, Elstow, Shortstown, Wixams and Clapham.",
  coverageOutro:
    "If you live in Bromham, Oakley, Renhold, Cardington, Wootton or another village around the town, we cover that too. Tell us your postcode and we will confirm coverage and a price.",
  knowIntro:
    "Bedford is the county town of Bedfordshire, with a river through the middle, a ring of controlled parking zones and fast-growing estates on its edges. Here is what our crews plan for.",
  knowBlocks: [
    {
      label: "Controlled parking zones",
      body: "Bedford Borough Council runs controlled parking zones lettered from A to N around the town centre and the inner residential streets. Most are enforced from 8am to 6pm, Monday to Saturday, zone J is weekdays only and zone K applies around the clock. Inside a zone the van can only stand in a bay or with the council's agreement, so we ask for your street as early as possible, check the zone map and arrange whatever the council needs before the day.",
    },
    {
      label: "Roads and access",
      body: "The A421 bypasses Bedford to the south and west and links the town to the M1 at junction 13 and to the A1 to the east. The A6 runs north to south through the borough towards Luton, and the old route through the town is now numbered the A4280. The River Great Ouse runs through the centre, so moves between north and south Bedford depend on a handful of bridges and we time them to avoid the peaks.",
    },
    {
      label: "Property types",
      body: "Central Bedford has conservation areas of Victorian and Edwardian streets, with the large villas of De Parys Avenue on the north side of the centre and tighter terraces around Castle Road and the riverside. Queens Park, west of the station, is an established early twentieth century estate of terraced streets. Kempston, Brickhill and Putnoe are mainly post-war family houses with driveways, and Biddenham and the villages add period cottages and large detached homes.",
    },
    {
      label: "New estates and the London link",
      body: "Bedford is growing to the south and west. Wixams is a new town being developed south of Bedford, Great Denham sits west of the town in MK40, and both are modern estates with driveways and wide roads. For London moves the route is the A421 to the M1 at junction 13 and then the motorway into the capital, while Thameslink and East Midlands Railway trains run from Bedford to St Pancras, so commuter moves in both directions are common.",
    },
  ],
  nearby: [
    { label: "Luton", href: "/areas/luton", miles: "19 miles" },
    { label: "Milton Keynes", href: "/areas/milton-keynes" },
    { label: "Northampton", href: "/areas/northampton" },
    { label: "Cambridge", href: "/areas/cambridge" },
  ],
  faqs: [
    {
      question: "Do you cover my Bedford postcode?",
      answer:
        "Yes. We cover the whole of Bedford, MK40, MK41 and MK42, plus the MK43 villages, from the town centre and De Parys to Kempston, Brickhill, Putnoe and Wixams. Send your postcode and we will confirm coverage and a price.",
    },
    faqPrice("Bedford"),
    {
      question: "Do I need a parking suspension for a move in Bedford town centre?",
      answer:
        "If your street is in one of Bedford Borough Council's controlled parking zones, often yes, because the van needs somewhere legal to stand for several hours. Any suspension or dispensation has to be arranged with the council in advance, so tell us your address early and we will advise and handle it. Outside the zones, most Bedford streets and driveways are unrestricted.",
    },
    {
      question: "Can you move me from Bedford to London, or from London to Bedford?",
      answer:
        "Yes, in both directions. You get a fixed written price after a free survey, one crew end to end, and the drive planned around the route, normally the A421 to the M1 at junction 13 and down the motorway into London. We plan the timing around the M1 and the access at your London address.",
    },
    faqInsured(),
    {
      question: "Can you move me into a new-build at Wixams or Great Denham?",
      answer:
        "Yes. Wixams and Great Denham are modern estates with driveways and wide roads, so access is usually easy, but completion dates and developer handovers can shift. We confirm the date with you, protect new floors and doors, and can hold your goods in our storage if your keys are delayed.",
    },
  ],
};
