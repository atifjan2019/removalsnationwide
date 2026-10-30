import type { Borough } from "@/lib/boroughs";
import { HERO_ALT, HERO_IMAGE, VALUE_LINE, faqInsured, faqPrice } from "@/lib/boroughs";

export const town: Borough = {
  slug: "crawley",
  name: "Crawley",
  kind: "town",
  county: "West Sussex",
  distanceFromLondon: "about 30 miles from central London",
  areaServedName: "Crawley, West Sussex",
  h1: "Removals in Crawley",
  subhead:
    "Experienced, insured man and van and removals in Crawley, from £55 per hour plus VAT, 7 days a week, with real local knowledge of parking, access and property across RH10 and RH11.",
  metaTitle: "Removals Crawley | Man and Van from £55/hr | Insured",
  metaDescription:
    "Man and van and removals in Crawley (RH10, RH11) from £55/hr plus VAT. Insured, 7 days a week, with real knowledge of permit zones and New Town streets.",
  postcodes: ["RH10", "RH11"],
  heroImage: HERO_IMAGE,
  heroImageAlt: HERO_ALT,
  introLine: "An experienced and fully insured removals company that genuinely serves and knows Crawley.",
  valueLine: VALUE_LINE,
  localBody: [
    "Removals Nationwide moves homes, offices and single items across the whole of Crawley and the surrounding area, 7 days a week, from the New Town neighbourhoods of Three Bridges, Pound Hill and Maidenbower to Ifield, Bewbush and the newer homes at Forge Wood. We are an experienced, insured removals company based in Purfleet, Essex, not a booking marketplace, and the same team handles your man and van job, full house or office move, packing and clearance, with one point of contact from quote to completion. Moves between Crawley and London, or long distance, get a fixed written price after a free survey.",
    "Crawley was laid out as a New Town, so most of the housing is terraced, semi-detached and detached family homes with gardens set back from the road, which usually means a driveway or a quiet kerb to load from. Our crews plan for the resident permit zones that Crawley Borough Council runs in West Green, Northgate, Three Bridges, Southgate and Pound Hill, the pay and display Central Zone, and the traffic on the A23, the A264 and the A2011 around Manor Royal and Gatwick. We confirm parking per street before the day.",
  ],
  coverageIntro:
    "We cover every part of Crawley, including the RH10 and RH11 postcodes, from the town centre and Three Bridges to the outer neighbourhoods. Areas we move people in and out of include:",
  neighbourhoods:
    "Three Bridges, Pound Hill, Maidenbower, Furnace Green, Tilgate, Broadfield, Bewbush, Ifield, West Green, Gossops Green, Southgate, Northgate, Langley Green and Forge Wood.",
  coverageOutro:
    "On the edges we also cover Copthorne, Pease Pottage and Kilnwood Vale, which sits just over the border in Horsham district. Tell us your postcode and we will confirm coverage and a price.",
  knowIntro:
    "Crawley is a planned New Town beside Gatwick Airport, so most moves are easy driveway loads with a few permit zones to check. Here is what our crews plan for.",
  knowBlocks: [
    {
      label: "Permit zones and pay and display",
      body: "Crawley Borough Council's resident parking zones are lettered A to K and cover streets in West Green, Northgate, Three Bridges, Southgate and Pound Hill, mostly permit holders only from 9am to 5pm Monday to Saturday, with a Central Zone that is pay and display in the same hours. Permits are digital and bay suspensions are applied for online, which we handle where your street has no free kerb. Outside the zones most streets are unrestricted, and we confirm the rules for your road before the day.",
    },
    {
      label: "M23, A23 and the town's roads",
      body: "Crawley sits on the M23, with junction 10 linking the A2011 and the A264 at the Crawley interchange and junction 11 at Pease Pottage, where the motorway becomes the A23 towards Brighton. North of the town the A23 carries on past Gatwick Airport and the former village of Lowfield Heath. Inside the town the neighbourhoods are joined by distributor roads, so our crews route around the airport and Manor Royal peaks rather than through them.",
    },
    {
      label: "New Town housing",
      body: "Each of Crawley's neighbourhoods was planned around a shopping parade, a school and open space, with three bedroom family houses the most common early type and low rise flats and bungalows mixed in. The only residential tower is the eight storey Milton Mount flats at the north end of Pound Hill. Forge Wood, under construction since the mid 2010s, adds new estate homes to the north east. Most loads are therefore straightforward driveway or kerbside jobs.",
    },
    {
      label: "The London link",
      body: "Our crews come from Purfleet over the Dartford Crossing and round the M25 to the M23, so Dart Charge is confirmed on the quote with no surprises. Three Bridges station sits on the Brighton Main Line and Crawley station on the Arun Valley line, both with trains to London, which is why many people moving here are coming from the capital. A London to Crawley move is one crew end to end with a fixed written price after a free survey.",
    },
  ],
  nearby: [
    { label: "Horsham", href: "/areas/horsham", miles: "10" },
    { label: "Redhill", href: "/areas/redhill", miles: "10" },
    { label: "Brighton", href: "/areas/brighton", miles: "25" },
  ],
  faqs: [
    {
      question: "Do you cover my Crawley postcode?",
      answer:
        "Yes. We cover the whole of Crawley, RH10 and RH11, from Three Bridges and Pound Hill to Ifield, Bewbush and Forge Wood, plus the villages around the borough edge. Send your postcode and we will confirm coverage and a price.",
    },
    faqPrice("Crawley"),
    {
      question: "Is parking easy for a move in Crawley?",
      answer:
        "Usually yes. Most of the town is New Town housing with driveways or unrestricted kerbside space. In West Green, Northgate, Three Bridges, Southgate and Pound Hill, Crawley Borough Council runs lettered permit zones, and the Central Zone is pay and display, so we check the rules for your street and position the van legally before the crew starts.",
    },
    {
      question: "Can you move me from Crawley to London, or from London to Crawley?",
      answer:
        "Yes. Crawley to London and London to Crawley moves get a fixed written price after a free survey. One crew loads, drives and unloads end to end, and we plan the drive around the M23, the M25 and the route into your London street, including any suspension needed at the London end.",
    },
    faqInsured(),
    {
      question: "Can you move me into a new build at Forge Wood?",
      answer:
        "Yes. Forge Wood is Crawley's newest neighbourhood, under construction since the mid 2010s in the north east of the town between the railway and the M23, and new estate roads are usually easy to load from, though some are still being finished while building continues. We check the access and the van size that suits the street on the survey and give you a fixed written price.",
    },
  ],
};
