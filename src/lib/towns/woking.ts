import type { Borough } from "@/lib/boroughs";
import { HERO_ALT, HERO_IMAGE, VALUE_LINE, faqInsured, faqPrice } from "@/lib/boroughs";

export const town: Borough = {
  slug: "woking",
  name: "Woking",
  kind: "town",
  county: "Surrey",
  distanceFromLondon: "about 25 miles from central London",
  areaServedName: "Woking, Surrey",
  h1: "Removals in Woking",
  subhead:
    "Experienced, insured man and van and removals in Woking, from £55 per hour plus VAT, 7 days a week, with real local knowledge of parking, access and property across GU21, GU22, GU23 and GU24.",
  metaTitle: "Removals Woking, Surrey | Man and Van from £55 per hour",
  metaDescription:
    "Insured removals and man and van in Woking (GU21 to GU24) from £55/hr plus VAT, 7 days a week. Permit bays handled, fixed prices for London moves.",
  postcodes: ["GU21", "GU22", "GU23", "GU24"],
  heroImage: HERO_IMAGE,
  heroImageAlt: HERO_ALT,
  introLine: "An experienced and fully insured removals company that genuinely serves and knows Woking.",
  valueLine: VALUE_LINE,
  localBody: [
    "Removals Nationwide moves homes, offices and single items across the whole of Woking and the surrounding area, 7 days a week, from the new apartment towers at Victoria Square and the big houses of Horsell and Hook Heath to Goldsworth Park, Knaphill, Maybury and Sheerwater, and out to Pyrford, West Byfleet and Brookwood. We are an experienced, insured removals company based in Purfleet, Essex, reaching the town round the M25 to junction 11, with one team and one point of contact from quote to completion. Moves between Woking and London, or long distance, get a fixed written price after a free survey.",
    "Woking grew up around its railway, and the town centre still sits between the South West Main Line and the Basingstoke Canal with only a handful of routes for vehicles across the tracks, so our crews time town centre loading carefully and know which side of the line your address sits on. Permits, bay suspensions and waivers on the public road are run by Surrey County Council through its contractor NSL rather than by the borough, and a suspension normally needs about ten days' notice. The A320 brings traffic in from the M25 at junction 11, with junction 3 of the M3 the alternative from the west.",
  ],
  coverageIntro:
    "We cover the whole of Woking and the villages around it, including the GU21, GU22, GU23 and GU24 postcodes. Areas we move people in and out of include:",
  neighbourhoods:
    "Horsell, Knaphill, St John's, Goldsworth Park, Maybury, Sheerwater, Hook Heath, Mayford, Old Woking, Pyrford, Westfield, Byfleet, West Byfleet and Brookwood.",
  coverageOutro:
    "Further out we cover Send, Ripley, Ockham and Wisley in GU23, and Bisley, Chobham, West End and Pirbright in GU24 towards the Hampshire border. Tell us your postcode and we will confirm coverage and a price.",
  knowIntro:
    "Woking is a railway town whose centre has been rebuilt again and again, with a dense core between the line and the canal, leafy private roads and large post war estates. Here is what our crews plan for.",
  knowBlocks: [
    {
      label: "Who controls the parking",
      body: "Surrey County Council is the highway authority for every public road in Woking, and its contractor NSL administers the permits, bay suspensions and waivers on the county's behalf, while Woking Borough Council looks after the car parks. For a removal in a permit bay we apply for a suspension at least ten days before the date, as the county asks. On a single yellow line a waiver for the named van is usually enough, and we tell you which applies once we have seen the street.",
    },
    {
      label: "Roads and the railway",
      body: "The M25 at junction 11 feeds the A320 into Woking, and junction 3 of the M3 is the other motorway link. In the centre the shops and offices lie between the main line and the Basingstoke Canal, and there are only a few routes for vehicles across the railway, so a van moving between the north and south sides of town has limited options at busy times. We plan town centre loading for early or mid morning and keep the larger lorry on the edge rather than through the centre.",
    },
    {
      label: "Property types",
      body: "Much of the centre has been rebuilt since Victorian times, with the two Victoria Square residential towers completed in 2022 and the former Unwins print works at Old Woking converted into the Gresham Mill apartments. Beyond the centre, Hook Heath and Horsell have large detached houses on quiet roads, Goldsworth Park is a big planned estate with its own lake and shops, and Sheerwater was laid out by the London County Council after 1947 as an overspill estate. Each needs a different van and a different loading plan.",
    },
    {
      label: "The London link",
      body: "Woking station has frequent South Western Railway trains to London Waterloo via Clapham Junction, and the same operator serves West Byfleet, Brookwood and Worplesdon, so this is one of the most commuter heavy towns we cover. Moving between Woking and London is a run up the A320 to the M25 at junction 11 and then into town on the A3 or the M3, or around the orbital to Essex for our own return. One crew handles both ends and the price is fixed in writing after a free survey.",
    },
  ],
  nearby: [
    { label: "Guildford", href: "/areas/guildford", miles: "about 6 miles" },
    { label: "Staines-upon-Thames", href: "/areas/staines-upon-thames" },
    { label: "Epsom", href: "/areas/epsom" },
    { label: "Kingston upon Thames", href: "/areas/kingston-upon-thames" },
  ],
  faqs: [
    {
      question: "Do you cover my Woking postcode?",
      answer:
        "Yes. We cover all of Woking and the villages around it, including GU21, GU22, GU23 and GU24, from Horsell, Knaphill and Goldsworth Park to Hook Heath, Pyrford, Old Woking, West Byfleet, Brookwood, Send and Chobham. Send your postcode and we will confirm coverage and a price.",
    },
    faqPrice("Woking"),
    {
      question: "Will the van be able to stop outside my flat in Woking town centre?",
      answer:
        "Usually, but it takes planning. The centre is squeezed between the railway and the canal and most kerbside space is restricted, so we agree a loading point with you at the survey. Where that is a permit or time limited bay, Surrey County Council can suspend it with at least ten days' notice; where it is a single yellow line we arrange a waiver for the van. For the blocks around Victoria Square we also confirm the service entrance and lift arrangements with the building management.",
    },
    {
      question: "Can you move me from Woking to London, or from London to Woking?",
      answer:
        "Yes. Woking is about 25 miles from central London and the A320 to the M25 at junction 11, with the A3 or M3 beyond, makes it a straightforward run. You get a fixed written price after a free survey, one crew end to end, and the drive planned around the route and the time of day.",
    },
    faqInsured(),
    {
      question: "Can you move me into one of the Victoria Square towers or another town centre block?",
      answer:
        "Yes. Town centre blocks usually have a service entrance, a goods lift and a booking system for move ins, so we confirm those details with the building management before the day and plan the van's stop around the limited routes across the railway. A tall block with a working lift is often quicker to move than a three storey house, but we allow time in case the lift has to be shared.",
    },
  ],
};
