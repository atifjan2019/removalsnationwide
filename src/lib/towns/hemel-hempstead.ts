import type { Borough } from "@/lib/boroughs";
import { HERO_ALT, HERO_IMAGE, VALUE_LINE, faqInsured, faqPrice } from "@/lib/boroughs";

export const town: Borough = {
  slug: "hemel-hempstead",
  name: "Hemel Hempstead",
  kind: "town",
  county: "Hertfordshire",
  distanceFromLondon: "about 25 miles from central London",
  areaServedName: "Hemel Hempstead, Hertfordshire",
  h1: "Removals in Hemel Hempstead",
  subhead:
    "Experienced, insured man and van and removals in Hemel Hempstead, from £55 per hour plus VAT, 7 days a week, with real local knowledge of the new town neighbourhoods, the Magic Roundabout and property across HP1, HP2 and HP3.",
  metaTitle: "Removals Hemel Hempstead | Man and Van from £55/hr",
  metaDescription:
    "Experienced man and van and removals in Hemel Hempstead (HP1, HP2, HP3) from £55/hr plus VAT. Insured, 7 days a week, estates and permit zones planned.",
  postcodes: ["HP1", "HP2", "HP3"],
  heroImage: HERO_IMAGE,
  heroImageAlt: HERO_ALT,
  introLine: "An experienced and fully insured removals company that genuinely serves and knows Hemel Hempstead.",
  valueLine: VALUE_LINE,
  localBody: [
    "Removals Nationwide moves homes, offices and single items across the whole of Hemel Hempstead and the surrounding area, 7 days a week, from the planned neighbourhoods of Adeyfield, Bennetts End, Grovehill and Woodhall Farm to the older streets of Boxmoor and Apsley and the village homes of Bovingdon and Leverstock Green. We are an experienced, insured removals company based in Purfleet, Essex, and Hemel Hempstead is well within our regular range on the M25. You get one team and one point of contact from quote to completion, and moves between Hemel Hempstead and London, or long distance, get a fixed written price after a free survey.",
    "Hemel Hempstead was laid out as a new town, so our crews plan for neighbourhood estates with shared parking courts, garage blocks and footpath access to the front door, where the van may stop a short walk from the house. Where a street has resident permit parking we check with Dacorum Borough Council, which enforces parking in the town, about a dispensation or bay suspension before the day. We route around the Plough Roundabout, known to everyone as the Magic Roundabout, and load for the pedestrianised Marlowes from the service roads behind it.",
  ],
  coverageIntro:
    "We cover the whole of Hemel Hempstead, including the HP1, HP2 and HP3 postcode districts. Neighbourhoods we move people in and out of include:",
  neighbourhoods:
    "Adeyfield, Bennetts End, Boxmoor, Apsley, Chaulden, Gadebridge, Grovehill, Highfield, Warners End, Woodhall Farm, Leverstock Green, Nash Mills, Felden and Bovingdon.",
  coverageOutro:
    "We also cover Kings Langley, Berkhamsted and the villages up the Gade valley such as Great Gaddesden and Piccotts End. Tell us your postcode and we will confirm coverage and a price.",
  knowIntro:
    "Hemel Hempstead is a post war new town wrapped around an older centre, and the layout shapes every move. Here is what our crews plan for.",
  knowBlocks: [
    {
      label: "Estate layouts and parking",
      body: "The new town neighbourhoods were built from the 1950s with each one centred on a local shopping centre, and many streets have garage courts, shared parking areas and houses reached by footpath rather than a kerb outside the door. Our crews check the nearest point a van can legally stop and bring trolleys for the carry. Where a street has resident permit parking we check with Dacorum Borough Council about a dispensation or bay suspension in advance.",
    },
    {
      label: "The Magic Roundabout and main roads",
      body: "The Plough Roundabout at Moor End, where six routes meet around a ring of mini roundabouts, is the Magic Roundabout and our drivers know it well. The A41 dual carriageway bypasses the town, the A414 runs through it to the M1 at junction 8, and from the M25 we come off at junction 20. The A4146 takes us north out of the roundabout towards Gadebridge, and Marlowes in the centre has been pedestrianised since the early 1990s.",
    },
    {
      label: "Property types",
      body: "Adeyfield was the first planned neighbourhood of the new town and Bennetts End was built from 1951 as new town housing, so expect terraces and short rows with small front gardens. Highfield followed from 1959 around The Heights local centre. Boxmoor, Apsley and Nash Mills predate the new town and have older terraces and villas, and Felden, Bovingdon and Leverstock Green bring detached village houses with wide drives.",
    },
    {
      label: "The London link",
      body: "Hemel Hempstead is about 25 miles north west of central London. We drive in on the M25 and leave at junction 20 for the A41, or use the M1 at junction 8 and the A414 for the east of the town. The railway station is on the West Coast Main Line about a mile south of the centre in Boxmoor, with regular trains to London Euston, so many moves here are for London commuters coming out to the new town neighbourhoods for a house and garden.",
    },
  ],
  nearby: [
    { label: "Watford", href: "/areas/watford", miles: "6" },
    { label: "St Albans", href: "/areas/st-albans" },
    { label: "Luton", href: "/areas/luton" },
    { label: "Aylesbury", href: "/areas/aylesbury" },
  ],
  faqs: [
    {
      question: "Do you cover my Hemel Hempstead postcode?",
      answer:
        "Yes. We cover the whole of Hemel Hempstead, including HP1, HP2 and HP3, from Boxmoor, Chaulden and Gadebridge to Adeyfield, Grovehill, Woodhall Farm, Leverstock Green, Apsley and Bovingdon. Send your postcode and we will confirm coverage and a price.",
    },
    faqPrice("Hemel Hempstead"),
    {
      question: "My house in Hemel Hempstead is reached by a footpath, not a road. Can you still move me?",
      answer:
        "Yes. Many of the new town neighbourhoods have houses set back from the road with parking in shared courts or garage blocks. We find the closest legal stopping point for the van, bring trolleys and extra hands for the carry, and price the time honestly so there are no surprises. If the nearest bay has permit restrictions we check with Dacorum Borough Council about a dispensation or suspension first.",
    },
    {
      question: "Can you move me from Hemel Hempstead to London, or from London to Hemel Hempstead?",
      answer:
        "Yes, in either direction. You get a fixed written price after a free survey, one crew that loads at one end and unloads at the other, and the drive planned around the route, usually the A41 to the M25 at junction 20 or the A414 to the M1 at junction 8, then into London on the M1 or A41.",
    },
    faqInsured(),
    {
      question: "Can you move a new town house in Adeyfield or Bennetts End?",
      answer:
        "Yes. Adeyfield was the first neighbourhood of the new town and Bennetts End followed from 1951, so these are terraces and short rows with small front gardens, straight staircases and parking in courts or on the road rather than on a drive. We stop the van at the nearest legal point, protect doors and banisters, dismantle beds and wardrobes that will not turn the stair and allow for the carry in the price. Near Maylands Business Park we time arrivals around the working day traffic.",
    },
  ],
};
