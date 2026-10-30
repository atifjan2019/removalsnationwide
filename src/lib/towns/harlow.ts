import type { Borough } from "@/lib/boroughs";
import { HERO_ALT, HERO_IMAGE, VALUE_LINE, faqInsured, faqPrice } from "@/lib/boroughs";

export const town: Borough = {
  slug: "harlow",
  name: "Harlow",
  kind: "town",
  county: "Essex",
  distanceFromLondon: "about 25 miles from central London",
  areaServedName: "Harlow, Essex",
  h1: "Removals in Harlow",
  subhead:
    "Experienced, insured man and van and removals in Harlow, from £55 per hour plus VAT, 7 days a week, with real local knowledge of parking, access and property across CM17, CM18, CM19 and CM20.",
  metaTitle: "Removals Harlow | Man and Van from £55/hr | Insured",
  metaDescription:
    "Man and van and removals in Harlow (CM17 to CM20) from £55/hr plus VAT. Insured, 7 days, with real knowledge of new town estates, the M11 and Old Harlow.",
  postcodes: ["CM17", "CM18", "CM19", "CM20"],
  heroImage: HERO_IMAGE,
  heroImageAlt: HERO_ALT,
  introLine: "An experienced and fully insured removals company that genuinely serves and knows Harlow.",
  valueLine: VALUE_LINE,
  localBody: [
    "Removals Nationwide moves homes, offices and single items across the whole of Harlow and the surrounding area, 7 days a week, from the original new town neighbourhoods of Mark Hall, Netteswell and Great Parndon to Old Harlow, Church Langley and the newer homes at Newhall. We are an experienced, insured removals company based in Purfleet, Essex, and the same team and the same point of contact stay with you from quote to completion. Moves between Harlow and London, or long distance, get a fixed written price after a free survey.",
    "Harlow was planned in 1947 with housing grouped into neighbourhoods, footpaths separated from roads and open fronts without driveways, so our crews often cannot park at the door and plan the carry from the nearest road or hardstanding. On-street parking is managed by the North Essex Parking Partnership rather than Harlow Council, which runs the car parks, so we check restrictions with the right body. The M11 serves the town at junctions 7 and 7a, the A414 runs along Edinburgh Way, and avenues such as Second Avenue, Third Avenue and Southern Way carry traffic between the neighbourhoods.",
  ],
  coverageIntro:
    "We cover every part of Harlow, including the CM17, CM18, CM19 and CM20 postcode districts. Neighbourhoods we move people in and out of include:",
  neighbourhoods:
    "Old Harlow, Mark Hall, Netteswell, Church Langley, Newhall, Potter Street, Great Parndon, Little Parndon, Latton Bush, Tye Green, Bush Fair, Staple Tye, Sumners and Katherines.",
  coverageOutro:
    "If you are in Roydon, Gilston, Sheering, Matching or on the Epping Forest side of the town, we cover that too. Tell us your postcode and we will confirm coverage and a price.",
  knowIntro:
    "Harlow is a post-war new town, built to Frederick Gibberd's plan, with its own parking quirks and a fast road link to London. Here is what our crews plan for.",
  knowBlocks: [
    {
      label: "Parking in a new town",
      body: "Harlow's neighbourhoods were designed with open front gardens, separate footpaths and shared garages and hardstandings rather than driveways, so many homes have no parking at the door and the nearest hardstanding can be a short walk away. Garage courts and parking squares often sit behind the houses, reached from a service road rather than the front path. We plan the carry distance into the quote, bring trolleys and floor protection, and check restrictions with the North Essex Parking Partnership, which manages on-street parking in Harlow.",
    },
    {
      label: "Roads and access",
      body: "The M11 serves Harlow at junction 7 and the newer junction 7a, which opened in 2022, and the A414 runs along Edinburgh Way on the north side of the town. Inside Harlow the avenues do the work: Third Avenue and Second Avenue form the A1025, Fifth Avenue is the A1019 and Southern Way is the A1169. For flats in the town centre around the Water Gardens and the shopping streets we agree a loading point and a time in advance.",
    },
    {
      label: "Property types",
      body: "Most of Harlow is 1950s to 1970s new town housing: terraces and low rise flats grouped into neighbourhoods such as Mark Hall, Netteswell, Tye Green and Great Parndon, with the 1970s estates of Sumners and Katherines to the west. Old Harlow keeps the original village with older houses and narrower streets. Church Langley and Newhall are modern developments with driveways and garages, and many homes are still council or housing association owned, so we are used to estate access and communal entrances.",
    },
    {
      label: "The London link and the Garden Town",
      body: "Harlow Town and Harlow Mill stations sit on the line from Liverpool Street to Cambridge, and Harlow Town is a Stansted Express stop, so the town is a long standing London commuter base. By road the M11 runs straight down into east London, and we plan London moves around junction 7 or 7a and the time of day. The Harlow and Gilston Garden Town, designated in 2017, is bringing new homes around the town, including a large scheme north of the River Stort at Gilston.",
    },
  ],
  nearby: [
    { label: "Bishop's Stortford", href: "/areas/bishops-stortford", miles: "7 miles" },
    { label: "Brentwood", href: "/areas/brentwood", miles: "19 miles" },
    { label: "Enfield", href: "/areas/enfield" },
    { label: "Chelmsford", href: "/areas/chelmsford" },
  ],
  faqs: [
    {
      question: "Do you cover my Harlow postcode?",
      answer:
        "Yes. We cover the whole of Harlow, CM17, CM18, CM19 and CM20, from Old Harlow and Mark Hall to Church Langley, Newhall, Staple Tye and Sumners. Send your postcode and we will confirm coverage and a price.",
    },
    faqPrice("Harlow"),
    {
      question: "My Harlow home has no parking outside. How do you manage the move?",
      answer:
        "This is common in Harlow's original neighbourhoods, where homes face footpaths and the parking is in garages or hardstandings behind. We check the nearest point a van can legally stand, include the carry distance in your quote, bring trolleys and protection, and confirm any restrictions with the North Essex Parking Partnership before the day.",
    },
    {
      question: "Can you move me from Harlow to London, or from London to Harlow?",
      answer:
        "Yes, in both directions. You get a fixed written price after a free survey, one crew end to end, and the drive planned around the route, normally the M11 from junction 7 or 7a into east London. We plan the timing around the motorway and the access at your London address.",
    },
    faqInsured(),
    {
      question: "Can you move me into Church Langley or Newhall?",
      answer:
        "Yes. Church Langley and Newhall are modern developments with driveways, garages and wider roads than the older neighbourhoods, so access is usually straightforward. We confirm any estate rules or building access with you in advance, protect new floors and doors, and can hold your goods in storage if your completion date moves.",
    },
  ],
};
