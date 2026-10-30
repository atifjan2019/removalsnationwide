import type { Borough } from "@/lib/boroughs";
import { HERO_ALT, HERO_IMAGE, VALUE_LINE, faqInsured, faqPrice } from "@/lib/boroughs";

export const town: Borough = {
  slug: "milton-keynes",
  name: "Milton Keynes",
  kind: "town",
  county: "Buckinghamshire",
  distanceFromLondon: "about 55 miles from central London",
  areaServedName: "Milton Keynes, Buckinghamshire",
  h1: "Removals in Milton Keynes",
  subhead:
    "Experienced, insured man and van and removals in Milton Keynes, from £55 per hour plus VAT, 7 days a week, with real local knowledge of parking, grid roads and property across MK1 to MK15.",
  metaTitle: "Removals Milton Keynes | Man and Van from £55/hr | Insured",
  metaDescription:
    "Man and van and removals in Milton Keynes (MK1 to MK15) from £55/hr plus VAT. Insured, 7 days, with real knowledge of the grid roads and CMK parking.",
  postcodes: [
    "MK1",
    "MK2",
    "MK3",
    "MK4",
    "MK5",
    "MK6",
    "MK7",
    "MK8",
    "MK9",
    "MK10",
    "MK11",
    "MK12",
    "MK13",
    "MK14",
    "MK15",
  ],
  heroImage: HERO_IMAGE,
  heroImageAlt: HERO_ALT,
  introLine: "An experienced and fully insured removals company that genuinely serves and knows Milton Keynes.",
  valueLine: VALUE_LINE,
  localBody: [
    "Removals Nationwide moves homes, offices and single items across the whole of Milton Keynes and the surrounding area, 7 days a week, from the railway town of Wolverton and the old towns of Bletchley and Stony Stratford to the grid squares at Bradwell, Loughton and Walton, the apartment blocks of Central Milton Keynes and the newer homes at Whitehouse, Fairfields and Broughton. Based in Purfleet, Essex, we are an experienced and insured removals company, and a single team with a single point of contact runs your move from quote to completion. Moves between Milton Keynes and London, or long distance, get a fixed written price after a free survey.",
    "In Milton Keynes our crews plan for a city built around its roads. The grid roads run about a kilometre apart with roundabouts at almost every junction, so each grid square is entered from a few points and we map the way in before the day. The M1 serves the city at junctions 13 and 14, and the A5 runs as a dual carriageway along the west of the centre. Most homes outside the centre have a driveway or a parking court, while Central Milton Keynes has on-street pay bays run by Milton Keynes City Council, so for central moves we check the kerb outside your building in advance.",
  ],
  coverageIntro:
    "We cover the whole of Milton Keynes, including the MK1 to MK15 postcode districts. Neighbourhoods we move people in and out of include:",
  neighbourhoods:
    "Central Milton Keynes, Bletchley, Fenny Stratford, Wolverton, Stony Stratford, Bradwell, Great Linford, Loughton, Shenley Church End, Walton, Willen, Broughton, Whitehouse and Fairfields.",
  coverageOutro:
    "If your home sits on the edge of the city at Newport Pagnell, Woburn Sands, Newton Leys, Hanslope or Deanshanger, we cover that too. Tell us your postcode and we will confirm coverage and a price.",
  knowIntro:
    "Milton Keynes is a planned city of grid roads, roundabouts and distinct estates with a purpose-built centre. Here is what our crews plan for.",
  knowBlocks: [
    {
      label: "Grid roads and access",
      body: "The grid roads are the key to moving around Milton Keynes. The east to west roads are Ways, numbered H1 to H10, and the north to south roads are Streets, V1 to V11, with names such as Portway, Standing Way and Watling Street. They run between the districts rather than through them, almost every junction is a roundabout and most carry the national speed limit. Each estate is reached from a handful of entry points off the grid, so we plan the way into your square before the day.",
    },
    {
      label: "Parking in Central Milton Keynes",
      body: "Central Milton Keynes is laid out on wide boulevards with on-street pay bays run by Milton Keynes City Council, and the apartment blocks around Milton Keynes Central station have little private parking at street level. For moves into or out of buildings such as The Hub and Vizion we ask the council's parking service in advance whether the restrictions outside can be temporarily suspended for the day, agree the loading point with the building's management, and plan the walk from the van to the lift.",
    },
    {
      label: "Property types",
      body: "Wolverton grew from 1838 as a railway works town, Bletchley grew around its railway junction, and the Lakes Estate at Water Eaton was built in the 1960s by the Greater London Council for families from London. Stony Stratford is a former coaching town along Watling Street with a High Street of listed buildings. The grid squares laid out after the 1967 designation are mostly houses with driveways and parking courts, and the newest estates are Whitehouse and Fairfields on the western edge and Broughton on the eastern edge.",
    },
    {
      label: "The London link",
      body: "Milton Keynes Central and Bletchley stations sit on the West Coast Main Line with trains to London Euston, and Bletchley also serves the Marston Vale line to Bedford. By road the M1 runs along the east of the city and junctions 13 and 14 take you straight down towards north London. For moves to or from the capital we plan the route around the M1 and the time of day, with the same crew at the Milton Keynes end and the London end.",
    },
  ],
  nearby: [
    { label: "Northampton", href: "/areas/northampton" },
    { label: "Bedford", href: "/areas/bedford" },
    { label: "Luton", href: "/areas/luton" },
    { label: "Aylesbury", href: "/areas/aylesbury" },
  ],
  faqs: [
    {
      question: "Do you cover my Milton Keynes postcode?",
      answer:
        "Yes. We cover the whole of Milton Keynes, MK1 to MK15, from Bletchley and Wolverton to Central Milton Keynes, Bradwell, Walton, Broughton, Whitehouse and Fairfields, plus the villages around the city. Send your postcode and we will confirm coverage and a price.",
    },
    faqPrice("Milton Keynes"),
    {
      question: "Will parking be a problem for my move in Milton Keynes?",
      answer:
        "Rarely. Most homes in the grid squares have a driveway or a nearby parking court, so the van stands close to your door. Central Milton Keynes is different, with council-run pay bays around the apartment blocks, so for moves there we check with Milton Keynes City Council in advance whether the restrictions outside your building can be suspended for the day. In Wolverton, Bletchley and Stony Stratford's older streets we check the restrictions on your road before the day.",
    },
    {
      question: "Can you move me from Milton Keynes to London, or from London to Milton Keynes?",
      answer:
        "Yes, in both directions. You get a fixed written price after a free survey, one crew end to end, and the drive planned around the route, which for Milton Keynes is normally the M1 from junction 13 or 14 down into north west London. We plan the timing around the motorway and your building's access at the London end.",
    },
    faqInsured(),
    {
      question: "Can you move me into a flat in The Hub or Vizion in Central Milton Keynes?",
      answer:
        "Yes. These are apartment blocks of ten storeys and more beside Milton Keynes Central station, so we book the lift and loading arrangement with the building manager, protect the lift and corridors, and check with the council in advance how the van can stand at the entrance for the duration of the move.",
    },
  ],
};
