import type { Borough } from "@/lib/boroughs";
import { HERO_ALT, HERO_IMAGE, VALUE_LINE, faqInsured, faqPrice } from "@/lib/boroughs";

export const town: Borough = {
  slug: "ashford",
  name: "Ashford",
  kind: "town",
  county: "Kent",
  distanceFromLondon: "about 60 miles from central London",
  areaServedName: "Ashford, Kent",
  h1: "Removals in Ashford",
  subhead:
    "Experienced, insured man and van and removals in Ashford, from £55 per hour plus VAT, 7 days a week, with real local knowledge of parking, access and property across TN23, TN24, TN25 and TN26.",
  metaTitle: "Removals in Ashford, Kent | Man and Van from £55/hr",
  metaDescription:
    "Man and van and removals in Ashford, Kent (TN23 to TN26) from £55/hr plus VAT. Insured, 7 days a week, the M20, ring road and new estates planned for.",
  postcodes: ["TN23", "TN24", "TN25", "TN26"],
  heroImage: HERO_IMAGE,
  heroImageAlt: HERO_ALT,
  introLine: "An experienced and fully insured removals company that genuinely serves and knows Ashford.",
  valueLine: VALUE_LINE,
  localBody: [
    "Removals Nationwide moves homes, offices and single items across the whole of Ashford and the surrounding area, 7 days a week, from the older suburbs of Kennington and Willesborough to the new estates at Finberry, Repton Park and Park Farm and the villages towards Wye and Hamstreet. We are an experienced, insured removals company based in Purfleet, Essex, and Ashford is a straight M20 run for us. One crew takes on your man and van job, house or office move, packing and storage, with a single contact from quote to completion. Moves between Ashford and London, or long distance, get a fixed written price after a free survey.",
    "Ashford is built around its roads, so our crews plan the approach first. The M20 serves the town at junctions 9, 10 and 10A, the ring road circles the centre and includes a shared space section where traffic moves slowly among cyclists and pedestrians, and flats above the central shopping streets need a loading plan from the nearest open street. Most Ashford homes are on estates with a driveway or parking court, while flats near the station need that plan agreed before the day. Ashford Borough Council offers parking dispensations and bay suspensions, which we use when a restricted street needs the van outside the door.",
  ],
  coverageIntro:
    "We cover the whole of Ashford and the villages around it, including the TN23, TN24, TN25 and TN26 postcodes. Areas we move people in and out of include:",
  neighbourhoods:
    "Ashford town centre, South Ashford, Willesborough, Kennington, Singleton, Kingsnorth, Stanhope, Godinton, Bybrook, Bockhanger, Park Farm, Repton Park, Finberry, Great Chart and Sevington.",
  coverageOutro:
    "If you are out in the villages, from Wye and Challock in TN25 to Hamstreet, Bethersden and Woodchurch in TN26, we cover those too. Tell us your postcode and we will confirm coverage and a price.",
  knowIntro:
    "Ashford is a fast-growing railway town with a ring road, a shared space scheme and large new estates on its edges. Here is what our crews plan for.",
  knowBlocks: [
    {
      label: "Town centre parking and permissions",
      body: "Ashford Borough Council runs the town car parks and residential permit schemes on qualifying streets, and it publishes a process for parking dispensations, bay suspensions and waivers. A dispensation lets a vehicle stand in some restricted areas, including permit bays, limited waiting bays and loading bays, while a bay suspension keeps a space clear for unloading bulky goods and needs at least ten days' notice, so we settle which one your street needs on the survey and apply well before the day.",
    },
    {
      label: "Roads and the ring road",
      body: "Ashford is reached from the M20 at junctions 9, 10 and 10A, with the A20 heading towards Maidstone, the A28 to Canterbury and the A2070 south towards Romney Marsh. The two-way ring road around the centre includes the first shared space scheme in the country, where vehicles, cyclists and pedestrians mix at low speed, so our drivers slow down and plan the approach. Traffic for the Channel Tunnel and the Designer Outlet can build at the motorway junctions, which we work around.",
    },
    {
      label: "New estates and property types",
      body: "Ashford has grown quickly. Finberry to the south east, Repton Park on the former Templer Barracks and the planned Chilmington Green are modern estates of family houses, often with driveways but sometimes with tight shared parking courts. Kennington and Willesborough are older suburbs, South Ashford and Stanhope have more terraces, and Charter House in the centre is a converted office block of flats, where we check lift and loading access in advance.",
    },
    {
      label: "The London link",
      body: "Ashford is about 60 miles from central London by road, but Ashford International sits on High Speed 1 with domestic trains running straight to St Pancras, so many of the homes we move here belong to London commuters. From Purfleet our crews take the Dartford Crossing, where Dart Charge applies, then the M20 all the way, and that drive is costed into a fixed written price for every move between Ashford and the capital.",
    },
  ],
  nearby: [
    { label: "Canterbury", href: "/areas/canterbury", miles: "15" },
    { label: "Maidstone", href: "/areas/maidstone" },
    { label: "Medway", href: "/areas/medway" },
  ],
  faqs: [
    {
      question: "Do you cover my Ashford postcode?",
      answer:
        "Yes. We cover the whole of Ashford, including TN23 for the town centre, Kingsnorth and Singleton, TN24 for Willesborough, Kennington and Goat Lees, and the villages in TN25 and TN26 such as Wye, Challock, Hamstreet and Woodchurch. Send your postcode and we will confirm coverage and a price.",
    },
    faqPrice("Ashford"),
    {
      question: "Can you get a removal van into Ashford town centre?",
      answer:
        "Yes, with planning. Flats above the central shopping streets are usually loaded from the nearest street a van can legally use, with the ring road and the council car parks as the fallback. Where a restricted street needs the van outside the door we apply to Ashford Borough Council for a dispensation or a bay suspension, which needs notice, before the day.",
    },
    {
      question: "Can you move me from Ashford to London, or from London to Ashford?",
      answer:
        "Yes, in both directions. You get a fixed written price after a free survey, one crew handles the move end to end, and we plan the drive around the M20, the M25 and the Dartford Crossing so that the van and your keys arrive together.",
    },
    faqInsured(),
    {
      question: "Do you move people onto the new estates at Finberry, Repton Park and Chilmington Green?",
      answer:
        "Yes. New estates often have driveways but also narrow shared courts, unfinished roads and show-home parking rules, so we check the plot on the survey, choose a van that fits and plan where to stand. We can also store your goods if your completion date slips.",
    },
  ],
};
