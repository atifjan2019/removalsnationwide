import type { Borough } from "@/lib/boroughs";
import { HERO_ALT, HERO_IMAGE, VALUE_LINE, faqInsured, faqPrice } from "@/lib/boroughs";

export const town: Borough = {
  slug: "basingstoke",
  name: "Basingstoke",
  kind: "town",
  county: "Hampshire",
  distanceFromLondon: "about 50 miles from central London",
  areaServedName: "Basingstoke, Hampshire",
  h1: "Removals in Basingstoke",
  subhead:
    "Experienced, insured man and van and removals in Basingstoke, from £55 per hour plus VAT, 7 days a week, with real local knowledge of parking, access and property across RG21, RG22, RG23 and RG24.",
  metaTitle: "Removals Basingstoke, Hampshire | Man and Van from £55/hr",
  metaDescription:
    "Insured removals and man and van in Basingstoke (RG21 to RG24) from £55/hr plus VAT, 7 days a week. Estate access planned, fixed prices for London moves.",
  postcodes: ["RG21", "RG22", "RG23", "RG24"],
  heroImage: HERO_IMAGE,
  heroImageAlt: HERO_ALT,
  introLine: "An experienced and fully insured removals company that genuinely serves and knows Basingstoke.",
  valueLine: VALUE_LINE,
  localBody: [
    "Removals Nationwide moves homes, offices and single items across the whole of Basingstoke and the surrounding area, 7 days a week, from the 1960s estates of South Ham and Buckskin to the newer streets of Chineham, Hatch Warren and Beggarwood and the villages of Old Basing and Sherborne St John. We are an experienced, insured removals company based in Purfleet, Essex, reaching the town by the M25 and M3, with one team and one point of contact from quote to completion. Moves between Basingstoke and London, or long distance, get a fixed written price after a free survey.",
    "Basingstoke grew from a market town into an expanded town in the 1960s under the London overspill plan, so most of it is estate housing laid out as self contained neighbourhoods, with cul de sacs, garage courts and shared parking courts rather than permit zones. Our crews plan for the Ringway ring road around the centre, the A3010 Churchill Way through the middle of town and the M3 at junctions 6, 7 and 8 on the south eastern edge. Hampshire County Council is responsible for yellow lines and resident parking areas, so we check each address and arrange any permission needed before the van arrives.",
  ],
  coverageIntro:
    "We cover the whole of Basingstoke and the villages around it, including the RG21, RG22, RG23 and RG24 postcodes. Areas we move people in and out of include:",
  neighbourhoods:
    "Popley, Chineham, Lychpit, Winklebury, Oakridge, Kempshott, Brighton Hill, South Ham, Black Dam, Buckskin, Hatch Warren, Beggarwood, Rooksdown and Old Basing.",
  coverageOutro:
    "Beyond the town we cover Eastrop and South View near the centre, Worting and Oakley to the west, and the RG25 villages of Cliddesden, Dummer, Overton and North Waltham. Tell us your postcode and we will confirm coverage and a price.",
  knowIntro:
    "Basingstoke is a planned expanded town ringed by the M3, so most moves are estate loads with the centre the only tight spot. Here is what our crews plan for.",
  knowBlocks: [
    {
      label: "Estate parking and permits",
      body: "Most Basingstoke homes sit on estates built from the 1960s onwards, where parking is a mix of driveways, garage courts and shared courts and the main job is finding a bay close enough to the door. Where a street has yellow lines or a resident parking area, Hampshire County Council is the authority for the public highway, with Basingstoke and Deane civil enforcement officers patrolling the borough. We check the restriction on your street before the day and arrange whatever permission the move needs.",
    },
    {
      label: "The Ringway and the M3",
      body: "The town centre is enclosed by the Ringway, the 1960s ring road, with the A3010 Churchill Way running east to west through the middle, so a central move is planned around which arm of the ring gives the nearest stop. The M3 skirts the south eastern edge at junctions 6, 7 and 8, the A33 heads north east to Reading and the M4, the A30 runs east towards Hook and the A339 links Newbury and Alton.",
    },
    {
      label: "Property types",
      body: "Housing runs from terraces and flats on the original overspill estates at Buckskin and South Ham, each planned as an almost self contained community, to the private estates that grew quickly at Hatch Warren, Beggarwood and Popley through the 2000s and the suburb of Chineham, developed from the late 1970s on the north eastern side by the A33. The old town around St Michael's Church and the village streets of Old Basing add older stock, so we size the crew and van to the house.",
    },
    {
      label: "The London link",
      body: "Basingstoke station has frequent South Western Railway trains to London Waterloo and a direct line to Reading, so many of our customers are leaving or joining a London commute. Our crews come from Purfleet by the Dartford Crossing and the M25, with Dart Charge applying on the crossing, then down the M3 to junction 6 or 7, and for London moves we use the M3 and M25 or the A30 with one crew at both ends and a fixed written price agreed after a free survey.",
    },
  ],
  nearby: [
    { label: "Reading", href: "/areas/reading" },
    { label: "Southampton", href: "/areas/southampton" },
    { label: "Woking", href: "/areas/woking" },
  ],
  faqs: [
    {
      question: "Do you cover my Basingstoke postcode?",
      answer:
        "Yes. We cover all of Basingstoke and the surrounding villages, including RG21, RG22, RG23 and RG24, from Popley and Chineham to Hatch Warren, Beggarwood, Rooksdown and Old Basing, plus Oakley and the RG25 villages such as Overton and Dummer. Send your postcode and we will confirm coverage and a price.",
    },
    faqPrice("Basingstoke"),
    {
      question: "Is parking a problem for a removal van in Basingstoke?",
      answer:
        "Rarely. Most of the town is estate housing with driveways, garage courts and shared parking courts, so the van usually pulls up close to the door. Streets with yellow lines or a resident parking area fall under Hampshire County Council as highway authority, and Basingstoke and Deane civil enforcement officers patrol. We check your street at the survey and arrange any permission the loading needs.",
    },
    {
      question: "Can you move me from Basingstoke to London, or from London to Basingstoke?",
      answer:
        "Yes. Basingstoke is about 50 miles from central London and the M3 and M25 make it a straightforward run. You get a fixed written price after a free survey, one crew end to end, and the drive planned around the route and the M3 junctions.",
    },
    faqInsured(),
    {
      question: "Can you move me to a new build in Hatch Warren, Beggarwood or Chineham?",
      answer:
        "Yes. Chineham has been built out since the late 1970s, Hatch Warren and Beggarwood grew quickly through the 2000s, and all three are mostly private houses with driveways and narrow estate roads, so we choose a van that fits the turning circles and protect new floors and door frames. Where a developer sets access rules for a site still being built, tell us and we plan around them.",
    },
  ],
};
