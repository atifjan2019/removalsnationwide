import type { Borough } from "@/lib/boroughs";
import { HERO_ALT, HERO_IMAGE, VALUE_LINE, faqInsured, faqPrice } from "@/lib/boroughs";

export const town: Borough = {
  slug: "eastbourne",
  name: "Eastbourne",
  kind: "town",
  county: "East Sussex",
  distanceFromLondon: "about 65 miles from central London",
  areaServedName: "Eastbourne, East Sussex",
  h1: "Removals in Eastbourne",
  subhead:
    "Experienced, insured man and van and removals in Eastbourne, from £55 per hour plus VAT, 7 days a week, with real local knowledge of parking, access and property across BN20, BN21, BN22 and BN23.",
  metaTitle: "Removals Eastbourne | Man and Van from £55/hr | Insured",
  metaDescription:
    "Man and van and removals in Eastbourne (BN20 to BN23) from £55/hr plus VAT. Insured, 7 days, with permit zones, the seafront and Sovereign Harbour known.",
  postcodes: ["BN20", "BN21", "BN22", "BN23"],
  heroImage: HERO_IMAGE,
  heroImageAlt: HERO_ALT,
  introLine: "An experienced and fully insured removals company that genuinely serves and knows Eastbourne.",
  valueLine: VALUE_LINE,
  localBody: [
    "Removals Nationwide moves homes, offices and single items across the whole of Eastbourne and the surrounding area, 7 days a week, from the seafront and Meads to Old Town, Upperton, Hampden Park, Langney and Sovereign Harbour. We are an experienced, insured removals company based in Purfleet, Essex, and you get one team and one point of contact from quote to completion, whether that is a single sofa, a full house, an office or a clearance. Moves between Eastbourne and London, or long distance, get a fixed written price after a free survey, so families and retirees relocating to the coast know the cost before the van is booked.",
    "In Eastbourne the on street parking is run by East Sussex County Council, with lettered permit zones around the town centre and the seafront that run through the day and, in some zones, seven days a week. The centre around Terminus Road and the Beacon shopping centre is busy with shoppers and buses, so a town centre flat or shop move needs a planned loading point. Further out, Langney is largely estates built since the 1970s and Sovereign Harbour is a marina development begun in the 1990s. The A22 is the route to London, the A27 runs west to Brighton and the A259 heads east along the coast.",
  ],
  coverageIntro:
    "We cover the whole of Eastbourne, including the BN20, BN21, BN22 and BN23 postcodes, from Beachy Head to Sovereign Harbour. Areas we move people in and out of include:",
  neighbourhoods:
    "Meads, Holywell, Old Town, Upperton, Ocklynge, Ratton, Hampden Park, St Anthony's, Langney, Langney Point, Shinewater, Sovereign Harbour, Willingdon and Polegate.",
  coverageOutro:
    "On the edges we also cover East Dean, Friston, Stone Cross, Westham and Pevensey Bay. Tell us your postcode and we will confirm coverage and a price.",
  knowIntro:
    "Eastbourne splits into a controlled seafront and centre and easy suburban estates beyond, with the county council running the on street parking. Here is what our crews plan for.",
  knowBlocks: [
    {
      label: "Permit zones and the seafront",
      body: "East Sussex County Council runs the on street permit zones in Eastbourne, lettered by area and mostly controlled from 8am to 6pm Monday to Saturday, with the seafront, Wilmington Square and zones M and N controlled every day of the week and a short Monday to Friday midday restriction in zone B. The hours matter as much as the zone, so we check them first. Where your street has no legal loading space we ask the county's parking team what can be arranged and confirm it in writing.",
    },
    {
      label: "Terminus Road and the centre",
      body: "Terminus Road, the station and the Beacon shopping centre, the former Arndale Centre, form the heart of the town centre, so the streets there are busy with shoppers, buses and deliveries through the day. For a town centre flat or office we load from the nearest side street or service access, check where the van can legally stand and for how long, and plan the time of day around the shops. A smaller van sometimes beats a large one here because it can get closer to the door.",
    },
    {
      label: "Victorian seafront to Sovereign Harbour",
      body: "The seafront is lined with Victorian hotels and tall terraces, many split into flats, while Meads has large Victorian and Edwardian houses, many now converted into flats, and Old Town sits around the original settlement. Langney is mostly housing estates built since the 1970s, and Sovereign Harbour has been adding houses and apartments around its harbours since the early 1990s. Each type changes the crew size and the loading plan, which we settle on the free survey.",
    },
    {
      label: "The route from London",
      body: "Eastbourne is about 65 road miles from central London and the A22 is the direct route, with the A27 running west to Brighton and the A259 east along the coast towards Pevensey Bay and Hastings. Our crews come from Purfleet over the Dartford Crossing, covered by Dart Charge and shown on your quote, then down the M25 and the A22 through the Weald. Eastbourne station runs direct trains to London Victoria, so the town works for people keeping a London job.",
    },
  ],
  nearby: [
    { label: "Hastings", href: "/areas/hastings", miles: "20" },
    { label: "Brighton", href: "/areas/brighton", miles: "25" },
  ],
  faqs: [
    {
      question: "Do you cover my Eastbourne postcode?",
      answer:
        "Yes. We cover the whole of Eastbourne, BN20, BN21, BN22 and BN23, from Meads and Old Town to Hampden Park, Langney and Sovereign Harbour, plus Willingdon and Polegate next door. Send your postcode and we will confirm coverage and a price.",
    },
    faqPrice("Eastbourne"),
    {
      question: "Who do you deal with for parking on my Eastbourne street?",
      answer:
        "On street parking in Eastbourne is run by East Sussex County Council, which operates the lettered permit zones around the centre and the seafront, some of them seven days a week. We check which zone and hours apply to your road, ask the county's parking team what can be arranged where there is no legal loading space, and confirm any cost in writing before you book.",
    },
    {
      question: "Can you move me from Eastbourne to London, or from London to Eastbourne?",
      answer:
        "Yes. Eastbourne to London and London to Eastbourne moves get a fixed written price after a free survey. One crew loads, drives and unloads end to end, and we plan the drive around the A22, the M25 and the Dartford Crossing, with access arranged at both addresses.",
    },
    faqInsured(),
    {
      question: "Can you move me into Sovereign Harbour?",
      answer:
        "Yes. Sovereign Harbour is a large marina development on the eastern edge of town, in BN23, developed since the early 1990s with houses and apartments around its harbours. We check whether your home is a house or an apartment, whether there is a lift and where the van can stand, and bring the crew size the building needs.",
    },
  ],
};
