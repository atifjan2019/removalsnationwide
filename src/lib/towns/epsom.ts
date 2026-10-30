import type { Borough } from "@/lib/boroughs";
import { HERO_ALT, HERO_IMAGE, VALUE_LINE, faqInsured, faqPrice } from "@/lib/boroughs";

export const town: Borough = {
  slug: "epsom",
  name: "Epsom",
  kind: "town",
  county: "Surrey",
  distanceFromLondon: "about 15 miles from central London",
  areaServedName: "Epsom, Surrey",
  h1: "Removals in Epsom",
  subhead:
    "Experienced, insured man and van and removals in Epsom, from £55 per hour plus VAT, 7 days a week, with real local knowledge of parking, access and property across KT17, KT18 and KT19.",
  metaTitle: "Removals Epsom, Surrey | Man and Van from £55 per hour",
  metaDescription:
    "Insured removals and man and van in Epsom (KT17, KT18, KT19) from £55/hr plus VAT, 7 days a week. Permit bays handled, fixed prices for London moves.",
  postcodes: ["KT17", "KT18", "KT19"],
  heroImage: HERO_IMAGE,
  heroImageAlt: HERO_ALT,
  introLine: "An experienced and fully insured removals company that genuinely serves and knows Epsom.",
  valueLine: VALUE_LINE,
  localBody: [
    "Removals Nationwide moves homes, offices and single items across the whole of Epsom and the surrounding area, 7 days a week, from the Victorian terraces near the town centre and the interwar semis of Stoneleigh and West Ewell to the new estates on the old hospital land at Horton and Langley Vale under the Downs. We are an experienced, insured removals company based in Purfleet, Essex, reaching the town by the M25 and the A24 or A240, with one team and one point of contact from quote to completion. Moves between Epsom and London, or long distance, get a fixed written price after a free survey.",
    "Epsom's High Street runs east to west and the A24 loops round a one way system by the Ashley Centre and the Clock Tower, so a removal van cannot simply pull up in the centre and our crews plan the stop street by street. Epsom and Ewell Borough Council runs the car parks, but on street permits, bay suspensions and waivers come from Surrey County Council through its contractor NSL, with suspensions needing about ten days' notice. The A24 Ewell Bypass and the A240 carry traffic north towards Kingston and London, and junction 9 of the M25 at Leatherhead is the motorway link to the south.",
  ],
  coverageIntro:
    "We cover the whole of Epsom and Ewell and the villages around them, including the KT17, KT18 and KT19 postcodes. Areas we move people in and out of include:",
  neighbourhoods:
    "Ewell, West Ewell, East Ewell, Ewell Court, Stoneleigh, Horton, Woodcote, Langley Vale, Epsom Downs, Tattenham Corner, Headley and Clarendon Park.",
  coverageOutro:
    "On the edges we cover Epsom Downs and Tattenham Corner on the border with Reigate and Banstead, Headley out towards Leatherhead, and the Kingston and Sutton borders at Stoneleigh and Ewell. Tell us your postcode and we will confirm coverage and a price.",
  knowIntro:
    "Epsom is a market and racing town on the edge of the Downs, with a busy one way centre, interwar suburbs and new estates on the old hospital land. Here is what our crews plan for.",
  knowBlocks: [
    {
      label: "The one way system and the Downs",
      body: "The A24 comes in from Ewell along the Ewell Bypass and East Street, loops round the one way system near the Ashley Centre and the Clock Tower, then leaves as South Street and Dorking Road. Loading in the centre means picking the right side of the loop and the right hour. South of town the roads climb to Epsom Downs, and on the big race days the roads around the racecourse are far busier than usual, so we check the racing calendar before fixing a date in KT18.",
    },
    {
      label: "Parking permits and suspensions",
      body: "Epsom and Ewell Borough Council looks after the town's car parks, but on street permits, suspensions and waivers are issued by Surrey County Council as highway authority through its contractor NSL. The county normally wants a suspension application at least ten days before the date, so a permit or time limited bay outside your door is something we deal with as soon as the move is booked, and a waiver covers a named van on a single yellow line. We sort that out at the survey.",
    },
    {
      label: "The hospital cluster estates",
      body: "West of the centre at Horton, five large psychiatric hospitals once stood in their own grounds. Most of the land was redeveloped for housing in the early 2000s, with the retained Long Grove buildings converted into apartments inside the Clarendon Park development of houses and flats, and the former Horton administration block also turned into apartments. These estates have modern roads and off street parking, but the converted hospital blocks bring long corridors and shared entrances that we allow for in the plan.",
    },
    {
      label: "The London link",
      body: "Epsom station, just north of the centre, has trains to London Victoria and London Bridge via Sutton and to London Waterloo via Wimbledon, so plenty of our customers are swapping a London flat for a house with a garden. By road the A24 and A240 lead north through Ewell towards Kingston, Sutton and the A3, and for our own runs from Essex it is the M25 to junction 9 and the A24 in. One crew handles both ends on a fixed written price.",
    },
  ],
  nearby: [
    { label: "Sutton", href: "/areas/sutton" },
    { label: "Kingston upon Thames", href: "/areas/kingston-upon-thames" },
    { label: "Redhill", href: "/areas/redhill" },
    { label: "Croydon", href: "/areas/croydon" },
  ],
  faqs: [
    {
      question: "Do you cover my Epsom postcode?",
      answer:
        "Yes. We cover all of Epsom and Ewell, including KT17, KT18 and KT19, from Stoneleigh, Ewell and West Ewell to Horton, Woodcote, Langley Vale, Epsom Downs and Tattenham Corner. Send your postcode and we will confirm coverage and a price.",
    },
    faqPrice("Epsom"),
    {
      question: "Can you park a removal van in Epsom town centre?",
      answer:
        "Yes, with a plan. The centre runs on a one way system around the Ashley Centre and the Clock Tower, and most kerbside space is restricted, so we agree the loading point at the survey. If it is a permit or time limited bay, Surrey County Council can suspend it with at least ten days' notice; if a single yellow line will do, we arrange a waiver for the van. For flats above the shops we also plan the trolley run from the nearest legal stop.",
    },
    {
      question: "Can you move me from Epsom to London, or from London to Epsom?",
      answer:
        "Yes. Epsom is about 15 miles from central London, and the A24 and A240 run north through Ewell towards Kingston, Sutton and the A3. You get a fixed written price after a free survey, one crew end to end, and the drive planned around the route and the time of day.",
    },
    faqInsured(),
    {
      question: "Should I avoid moving in Epsom during the big race meetings?",
      answer:
        "If you live in KT18 near the racecourse or along the roads up to the Downs, it helps. Epsom Downs hosts the Derby and the Oaks, and on those days the roads around the course are far busier than normal, which slows a loaded van and makes kerbside space scarce. We check the racing calendar when you enquire and will suggest a quieter date or an earlier start if your move falls on a race day.",
    },
  ],
};
