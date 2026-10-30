import type { Borough } from "@/lib/boroughs";
import { HERO_ALT, HERO_IMAGE, VALUE_LINE, faqInsured, faqPrice } from "@/lib/boroughs";

export const town: Borough = {
  slug: "cambridge",
  name: "Cambridge",
  kind: "town",
  county: "Cambridgeshire",
  distanceFromLondon: "about 60 miles from central London",
  areaServedName: "Cambridge, Cambridgeshire",
  h1: "Removals in Cambridge",
  subhead:
    "Experienced, insured man and van and removals in Cambridge, from £55 per hour plus VAT, 7 days a week, with real local knowledge of parking, access and property across CB1, CB2, CB3, CB4 and CB5.",
  metaTitle: "Removals Cambridge | Man and Van from £55/hr | Insured",
  metaDescription:
    "Man and van and removals in Cambridge (CB1 to CB5) from £55/hr plus VAT. Insured, 7 days, with real knowledge of resident parking, the M11 and terraces.",
  postcodes: ["CB1", "CB2", "CB3", "CB4", "CB5"],
  heroImage: HERO_IMAGE,
  heroImageAlt: HERO_ALT,
  introLine: "An experienced and fully insured removals company that genuinely serves and knows Cambridge.",
  valueLine: VALUE_LINE,
  localBody: [
    "Removals Nationwide moves homes, offices and single items across the whole of Cambridge and the surrounding area, 7 days a week, from the railway terraces of Romsey and Petersfield off Mill Road to Chesterton north of the river, the estates at Arbury and King's Hedges, and the new quarters at Eddington, Trumpington Meadows and Great Kneighton. As an experienced, insured removals company based in Purfleet, Essex, we give you one crew and one named contact who stays with the job from the quote to the last box off the van. Moves between Cambridge and London, or long distance, get a fixed written price after a free survey.",
    "In Cambridge our crews plan for a city where the kerb space is tightly managed. Many inner streets sit inside resident parking schemes, and where a bay needs to be kept clear for the van we apply through Cambridgeshire County Council's MiPermit system for a suspension, which lists domestic removals as a reason and needs at least seven days' notice. The M11 ends at the Girton Interchange with the A14 and serves the city from junctions 11, 12 and 13, and the historic core and Mill Road have bus gates and restricted streets, so we plan the route to your door before the day.",
  ],
  coverageIntro:
    "We cover the whole of Cambridge, including the CB1, CB2, CB3, CB4 and CB5 postcode districts. Neighbourhoods we move people in and out of include:",
  neighbourhoods:
    "Chesterton, Arbury, King's Hedges, Castle Hill, Newnham, Petersfield, Romsey, Mill Road, Coleridge, Cherry Hinton, Abbey, Trumpington, Eddington and Girton.",
  coverageOutro:
    "If your home sits just outside the city at Histon, Impington, Milton, Fulbourn, Great Shelford or Cambourne, we cover that too. Tell us your postcode and we will confirm coverage and a price.",
  knowIntro:
    "Cambridge is a historic university city with a restricted core, resident parking streets and a ring of new developments. Here is what our crews plan for.",
  knowBlocks: [
    {
      label: "Resident parking and bay suspensions",
      body: "Cambridgeshire County Council manages on-street parking in Cambridge, and the resident parking schemes cover many of the streets inside the city. Permits are handled through the MiPermit portal, and the same portal takes applications to suspend an on-street bay for domestic or business removals. The council asks for at least seven days' notice, puts a sign on the suspended bay showing the reason, dates and times, and a vehicle left there can be ticketed. We arrange this in advance so the van has a lawful space on the day.",
    },
    {
      label: "Roads and the city centre",
      body: "The M11 arrives from north east London and ends at the Girton Interchange with the A14, which skirts the north of the city. Junction 11 serves the A10 and the Trumpington side, junction 12 the A603 and junction 13 the A1303 Madingley Road. Milton Road is the main arterial route into Chesterton from the A14. The historic centre and Mill Road carry bus gates and restricted streets that only authorised vehicles may use, so we approach from the nearest open side and route around them.",
    },
    {
      label: "Property types",
      body: "Romsey, east of the railway line, was built largely in the ten years after 1885 for railway workers, and Petersfield to the west was developed by Gonville and Caius and Corpus Christi colleges, so both are terraced streets with narrow frontages off Mill Road. Chesterton, north of the Cam, has a large housing association estate in East Chesterton, with Cambridge North station built on its edge. Eddington, Trumpington Meadows, Great Kneighton, the CB1 scheme by the station and Accordia off Brooklands Avenue are mostly apartments and town houses.",
    },
    {
      label: "The London link",
      body: "Cambridge station has direct trains to London King's Cross, Liverpool Street and St Pancras, Cambridge North opened beside Chesterton in 2017, and Cambridge South by the Biomedical Campus opened in 2026. By road the M11 runs straight down to north east London, and the A10 follows the old route south. For moves to or from the capital we plan the drive around the M11 and the time of day, and the crew that packs the van in Cambridge is the crew that unpacks it in London.",
    },
  ],
  nearby: [
    { label: "Peterborough", href: "/areas/peterborough" },
    { label: "Bishop's Stortford", href: "/areas/bishops-stortford" },
    { label: "Stevenage", href: "/areas/stevenage" },
    { label: "Bedford", href: "/areas/bedford" },
  ],
  faqs: [
    {
      question: "Do you cover my Cambridge postcode?",
      answer:
        "Yes. We cover the whole of Cambridge, CB1, CB2, CB3, CB4 and CB5, from Romsey and Mill Road to Chesterton, Arbury, Newnham, Cherry Hinton, Trumpington and Eddington, plus the villages around the city. Send your postcode and we will confirm coverage and a price.",
    },
    faqPrice("Cambridge"),
    {
      question: "Can you suspend a parking bay for my move in Cambridge?",
      answer:
        "Yes. Where your street is in a resident parking scheme or has pay and display bays, we apply through Cambridgeshire County Council's MiPermit portal to suspend a bay for domestic removals. The council needs at least seven days' notice and places a sign on the bay showing the dates and times, so tell us your date early. On streets with a driveway or no restrictions, no suspension is needed.",
    },
    {
      question: "Can you move me from Cambridge to London, or from London to Cambridge?",
      answer:
        "Yes, in both directions. You get a fixed written price after a free survey, one crew end to end, and the drive planned around the route, which for Cambridge is normally the M11 from junction 11, 12 or 13 down to north east London. We plan the timing around the motorway and your building's access at the London end.",
    },
    faqInsured(),
    {
      question: "Can you move me into a flat at Eddington, Great Kneighton or CB1?",
      answer:
        "Yes. These newer developments are mostly apartment blocks and town houses with lifts, courtyards and limited car access, so we agree the loading point and lift booking with the building manager, protect the lift and corridors, and plan the van's position before the day. Eddington is reached from Madingley Road or Huntingdon Road, and Great Kneighton and Trumpington Meadows sit off the Trumpington side of the city near M11 junction 11.",
    },
  ],
};
