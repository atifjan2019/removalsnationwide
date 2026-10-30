import type { Borough } from "@/lib/boroughs";
import { HERO_ALT, HERO_IMAGE, VALUE_LINE, faqInsured, faqPrice } from "@/lib/boroughs";

export const town: Borough = {
  slug: "hastings",
  name: "Hastings",
  kind: "town",
  county: "East Sussex",
  distanceFromLondon: "about 65 miles from central London",
  areaServedName: "Hastings, East Sussex",
  h1: "Removals in Hastings",
  subhead:
    "Experienced, insured man and van and removals in Hastings and St Leonards, from £55 per hour plus VAT, 7 days a week, with real local knowledge of parking, access and property across TN34, TN35, TN37 and TN38.",
  metaTitle: "Removals Hastings | Man and Van from £55/hr | Insured",
  metaDescription:
    "Man and van removals in Hastings and St Leonards (TN34, TN35, TN37, TN38) from £55/hr plus VAT. Insured, 7 days, Old Town access and permit zones handled.",
  postcodes: ["TN34", "TN35", "TN37", "TN38"],
  heroImage: HERO_IMAGE,
  heroImageAlt: HERO_ALT,
  introLine: "An experienced and fully insured removals company that genuinely serves and knows Hastings.",
  valueLine: VALUE_LINE,
  localBody: [
    "Removals Nationwide moves homes, offices and single items across the whole of Hastings and the surrounding area, 7 days a week, from the Old Town and the town centre to St Leonards, Silverhill, Ore, Hollington and West St Leonards. We are an experienced, insured removals company based in Purfleet, Essex, and one team with one point of contact looks after you from quote to completion, whatever the size of the job. Moves between Hastings and London, or long distance, get a fixed written price after a free survey, which matters when the drive is around 65 miles each way and the price should not move once agreed.",
    "Hastings is steep, old and tightly packed, so our crews plan the approach first. The Old Town sits in the valley between the West Hill and the East Hill with narrow streets off the High Street, St Leonards has seafront terraces along Marina from James Burton's 1820s new town and later Victorian ones around Warrior Square, and much of the rest is Victorian terrace on a hill. East Sussex County Council runs lettered permit zones across central Hastings and St Leonards, many of them seven days a week, and Hastings Borough Council runs the car parks. The A21 is the London road and the A259 runs along the coast.",
  ],
  coverageIntro:
    "We cover the whole of Hastings and St Leonards, including the TN34, TN35, TN37 and TN38 postcodes. Areas we move people in and out of include:",
  neighbourhoods:
    "Old Town, St Leonards, Central St Leonards, Silverhill, Ore, Clive Vale, Hollington, West St Leonards, Bulverhythe, Wishing Tree, Maze Hill, Warrior Square and Hastings town centre.",
  coverageOutro:
    "On the edges we also cover Westfield, Guestling and Pett in TN35 and Bexhill next door. Tell us your postcode and we will confirm coverage and a price.",
  knowIntro:
    "Hastings and St Leonards are hilly seaside towns with narrow old streets, tall converted terraces and permit zones run by the county. Here is what our crews plan for.",
  knowBlocks: [
    {
      label: "Permit zones in two councils' hands",
      body: "On street parking in Hastings and St Leonards is run by East Sussex County Council, which operates lettered permit zones across the central areas. Several central zones are controlled from 9am to 8pm seven days a week, others from 9am to 6pm Monday to Saturday, and a couple carry only a short midday or afternoon restriction. Hastings Borough Council runs the car parks. Where your street is all permit bays we ask the county's parking team what can be put in place and confirm it in writing.",
    },
    {
      label: "Old Town and the hills",
      body: "The Old Town sits in a sheltered valley between the West Hill and the East Hill, with narrow streets off the High Street and All Saints Street, so some homes can only be reached on foot from the nearest wide road. Elsewhere Hastings is Victorian terraces on steep gradients, from Clive Vale and Ore down to Silverhill. We send a van that fits the street, add movers for the carry, and never assume the kerb outside the door is usable.",
    },
    {
      label: "Burton's St Leonards and the seafront",
      body: "St Leonards was laid out by James Burton from 1826, and his original new town survives along Marina and around St Leonards Gardens and the Royal Victoria Hotel, with tall seafront houses that his son Decimus finished. Warrior Square and the terraces around it came later in the Victorian era. Many of these tall houses are now flats over several floors without a lift, so we size the crew for the stairs and protect the common parts, planned on the survey rather than on the morning.",
    },
    {
      label: "Roads and the London link",
      body: "The A21 is the trunk road from Hastings to London and the M25, the A259 runs along the coast, the A2100 links the town to Battle and the A2690 is the Hastings to Bexhill link road. Our crews come from Purfleet over the Dartford Crossing, which is covered by Dart Charge and shown on your quote, then down the M25 and the A21. Hastings, St Leonards Warrior Square, West St Leonards and Ore stations serve the town for London trains.",
    },
  ],
  nearby: [
    { label: "Eastbourne", href: "/areas/eastbourne", miles: "20" },
    { label: "Tunbridge Wells", href: "/areas/tunbridge-wells", miles: "30" },
    { label: "Ashford", href: "/areas/ashford" },
  ],
  faqs: [
    {
      question: "Do you cover my Hastings postcode?",
      answer:
        "Yes. We cover Hastings and St Leonards, TN34, TN35, TN37 and TN38, from the Old Town and the town centre to Silverhill, Ore, Hollington and West St Leonards, plus the villages out to Pett and Westfield. Send your postcode and we will confirm coverage and a price.",
    },
    faqPrice("Hastings"),
    {
      question: "Can you get a van to a house in Hastings Old Town?",
      answer:
        "Often not right to the door. The Old Town lies in a narrow valley between the West Hill and the East Hill, with tight streets off the High Street and All Saints Street, so for some homes the van stands on the nearest wide road and the crew carries. We check the approach on the survey, send a smaller vehicle where that helps, and ask East Sussex County Council's parking team what can be arranged if your street is all permit bays.",
    },
    {
      question: "Can you move me from Hastings to London, or from London to Hastings?",
      answer:
        "Yes. Hastings to London and London to Hastings moves get a fixed written price after a free survey. One crew loads, drives and unloads end to end, and we plan the drive around the A21, the M25 and the Dartford Crossing, with any suspension or access arranged at both ends.",
    },
    faqInsured(),
    {
      question: "Can you move a flat in a converted terrace in St Leonards?",
      answer:
        "Yes. The tall terraces of Burton's St Leonards along Marina and the Victorian ones around Warrior Square and the seafront are mostly flats over several floors, usually without a lift. We size the crew for the stairs, protect the common parts and plan the carry from the kerb, and we confirm the permit zone and hours with the county council before the day.",
    },
  ],
};
