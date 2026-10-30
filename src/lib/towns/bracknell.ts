import type { Borough } from "@/lib/boroughs";
import { HERO_ALT, HERO_IMAGE, VALUE_LINE, faqInsured, faqPrice } from "@/lib/boroughs";

export const town: Borough = {
  slug: "bracknell",
  name: "Bracknell",
  kind: "town",
  county: "Berkshire",
  distanceFromLondon: "about 30 miles from central London",
  areaServedName: "Bracknell, Berkshire",
  h1: "Removals in Bracknell",
  subhead:
    "Experienced, insured man and van and removals in Bracknell, from £55 per hour plus VAT, 7 days a week, with real local knowledge of parking, access and property across RG12 and RG42.",
  metaTitle: "Removals Bracknell, Berkshire | Man and Van from £55/hr",
  metaDescription:
    "Insured removals and man and van in Bracknell (RG12, RG42) from £55/hr plus VAT, 7 days a week. Estates and permit zones planned, fixed London prices.",
  postcodes: ["RG12", "RG42"],
  heroImage: HERO_IMAGE,
  heroImageAlt: HERO_ALT,
  introLine: "An experienced and fully insured removals company that genuinely serves and knows Bracknell.",
  valueLine: VALUE_LINE,
  localBody: [
    "Removals Nationwide moves homes, offices and single items across the whole of Bracknell and the surrounding area, 7 days a week, from the new town neighbourhoods of Great Hollands, Harmans Water and Priestwood to Jennett's Park, Martins Heron and the villages of Binfield and Warfield. We are an experienced, insured removals company based in Purfleet, Essex, reaching the town by the M25 and M3 or M4, with one team and one point of contact from quote to completion. Moves between Bracknell and London, or long distance, get a fixed written price after a free survey.",
    "Bracknell was designated a New Town in 1949 and built on a neighbourhood principle, so most homes sit on planned estates with their own local centre, like Great Hollands with its circular Ringmead and alphabetical street names. Our crews plan around the A329(M), which runs from M4 junction 10 to the edge of town, the A322 south to M3 junction 3 and on towards Guildford, and the A3095 across the south of town. Bracknell Forest Council runs a resident permit scheme only in streets close to the town centre and issues on street dispensations for domestic removals, so we check each address before booking.",
  ],
  coverageIntro:
    "We cover the whole of Bracknell and the villages around it, including the RG12 and RG42 postcodes. Areas we move people in and out of include:",
  neighbourhoods:
    "Great Hollands, Birch Hill, Hanworth, Crown Wood, Forest Park, Harmans Water, Wildridings, Easthampstead, Bullbrook, Priestwood, Jennett's Park, Martins Heron, Binfield and Warfield.",
  coverageOutro:
    "Beyond the town we cover Crowthorne and Sandhurst to the south, Winkfield and Ascot to the east, and Wokingham to the west. Tell us your postcode and we will confirm coverage and a price.",
  knowIntro:
    "Bracknell is a post war new town with a rebuilt centre, planned neighbourhoods and permit streets only around the middle. Here is what our crews plan for.",
  knowBlocks: [
    {
      label: "Permits and dispensations",
      body: "Bracknell Forest Council runs its resident parking scheme only in streets near the town centre, introduced to protect those roads from parking pressure around the centre's redevelopment. The current zones are B around Priestwood and the Garth, D around Deepfield Road, E at Goodways Drive and F around Old Bracknell Lane, with permits required during the published operating hours. For loading where restrictions apply the council issues a temporary dispensation for domestic removals, applied for by form through its highways team, which we raise when you book.",
    },
    {
      label: "Roads and the motorways",
      body: "Bracknell sits at the end of the A329(M), which links it to junction 10 of the M4, while the A322 runs south to junction 3 of the M3, so we choose the motorway that suits the direction of travel. The A3095 crosses the south of the town, the A3290 continues the A329(M) towards Reading, and the A322 carries on towards Guildford. The rebuilt town centre, The Lexicon, opened in 2017 with large car parks at The Avenue, High Street, Braccan Walk and Princess Square.",
    },
    {
      label: "Property types",
      body: "Most of Bracknell is planned new town housing from the 1950s to the 1970s, with Great Hollands begun in 1967 around its circular Ringmead, and Easthampstead, Priestwood and Harmans Water among the older neighbourhoods. Jennett's Park, south of the A329 near the A329(M), has been built since 2007 with every street named after a bird, and the former RAF Staff College site in Harmans Water was redeveloped for housing from 2008. Garages, parking courts and cul de sacs are the norm.",
    },
    {
      label: "The London link",
      body: "Bracknell and Martins Heron stations are on the South Western Railway line between Reading and London Waterloo, with trains towards London running via Richmond, so many of our customers commute or are swapping a London flat for a house here. From Purfleet we take the M25 over the Dartford Crossing, where Dart Charge applies, and leave at the M3 or the M4 for the A329(M), with one crew at both ends and a fixed written price agreed after a free survey.",
    },
  ],
  nearby: [
    { label: "Reading", href: "/areas/reading", miles: "about 11 miles" },
    { label: "Maidenhead", href: "/areas/maidenhead", miles: "about 9 miles" },
    { label: "Windsor", href: "/areas/windsor", miles: "about 10 miles" },
    { label: "Woking", href: "/areas/woking" },
  ],
  faqs: [
    {
      question: "Do you cover my Bracknell postcode?",
      answer:
        "Yes. We cover all of Bracknell and the villages around it, including RG12 and RG42, from Great Hollands, Harmans Water and Birch Hill to Priestwood, Jennett's Park, Martins Heron, Binfield and Warfield. Send your postcode and we will confirm coverage and a price.",
    },
    faqPrice("Bracknell"),
    {
      question: "Will I need a parking permit or dispensation for my move in Bracknell?",
      answer:
        "Only in the resident parking zones close to the town centre, around Priestwood, Deepfield Road, Goodways Drive and Old Bracknell Lane, where vehicles must show a permit during operating hours. Bracknell Forest Council issues a temporary dispensation for domestic removals so a van can load where restrictions apply, and we apply for it when you book and confirm the cost in writing. On the estates a driveway or parking court usually does the job.",
    },
    {
      question: "Can you move me from Bracknell to London, or from London to Bracknell?",
      answer:
        "Yes. Bracknell is about 30 miles from central London, with the A329(M) giving a quick link to the M4 and the A322 to the M3, both leading on to the M25. You get a fixed written price after a free survey, one crew end to end, and the drive planned around the route and the junction that suits your side of town.",
    },
    faqInsured(),
    {
      question: "Can you move me to a new build in Jennett's Park or Warfield?",
      answer:
        "Yes. Jennett's Park has been built out since 2007 on the south western edge of town and Warfield to the north has newer streets too, with narrow estate roads, shared driveways and some plots still under construction. We choose a van that fits the turning circles, protect new floors and door frames, and plan around any access arrangements the site sets.",
    },
  ],
};
