import type { Borough } from "@/lib/boroughs";
import { HERO_ALT, HERO_IMAGE, VALUE_LINE, faqInsured, faqPrice } from "@/lib/boroughs";

export const town: Borough = {
  slug: "reading",
  name: "Reading",
  kind: "town",
  county: "Berkshire",
  distanceFromLondon: "about 40 miles from central London",
  areaServedName: "Reading, Berkshire",
  h1: "Removals in Reading",
  subhead:
    "Experienced, insured man and van and removals in Reading, from £55 per hour plus VAT, 7 days a week, with real local knowledge of parking, access and property across RG1, RG2, RG4, RG5, RG6, RG30 and RG31.",
  metaTitle: "Removals Reading, Berkshire | Man and Van from £55/hr",
  metaDescription:
    "Insured removals and man and van in Reading (RG1 to RG31) from £55/hr plus VAT, 7 days a week. Permit zones and IDR planned, fixed London prices.",
  postcodes: ["RG1", "RG2", "RG4", "RG5", "RG6", "RG30", "RG31"],
  heroImage: HERO_IMAGE,
  heroImageAlt: HERO_ALT,
  introLine: "An experienced and fully insured removals company that genuinely serves and knows Reading.",
  valueLine: VALUE_LINE,
  localBody: [
    "Removals Nationwide moves homes, offices and single items across the whole of Reading and the surrounding area, 7 days a week, from the Victorian terraces of Katesgrove and Newtown to Caversham across the Thames, Tilehurst and Southcote in the west, Whitley in the south and Earley and Woodley to the east. We are an experienced, insured removals company based in Purfleet, Essex, reaching the town by the M25 and M4, with one team and one point of contact from quote to completion. Moves between Reading and London, or long distance, get a fixed written price after a free survey.",
    "Reading is a dense town centre inside the Inner Distribution Road with suburbs fanning out on both banks of the Thames and the Kennet, so our crews plan the IDR exit, the river crossing and the permit zone before the van leaves. Reading Borough Council runs residents parking zones in the inner streets and pay and display bays around the centre, so loading in Katesgrove, Newtown or the streets near the station needs a checked bay rather than luck. The M4 serves the borough at junctions 10, 11 and 12, with the A33 relief road linking junction 11 straight to the IDR.",
  ],
  coverageIntro:
    "We cover the whole of Reading and the suburbs around it, including the RG1, RG2, RG4, RG5, RG6, RG30 and RG31 postcodes. Areas we move people in and out of include:",
  neighbourhoods:
    "Katesgrove, Newtown, Coley, Caversham, Emmer Green, Lower Caversham, Caversham Heights, Tilehurst, Southcote, Whitley, Kennet Island, Earley, Lower Earley and Woodley.",
  coverageOutro:
    "At the edges we cover Calcot and Purley on Thames to the west, Shinfield and Green Park to the south, and Sonning and Winnersh to the east. Tell us your postcode and we will confirm coverage and a price.",
  knowIntro:
    "Reading is a busy regional centre with a ring road, two rivers and permit controlled inner streets. Here is what our crews plan for.",
  knowBlocks: [
    {
      label: "Permit zones and pay and display",
      body: "Reading Borough Council runs residents parking zones in the streets around the centre, where the inner terraces of Katesgrove and Newtown and the roads near the station are reserved for permit holders for much of the day. The town centre itself is served by pay and display bays. Someone who has just moved into a zone can apply to the council for a short term permit while a full one is processed. We check the zone for both addresses and plan the loading stop in advance.",
    },
    {
      label: "The IDR, the M4 and the bridges",
      body: "The Inner Distribution Road rings the centre for local traffic and is linked to the M4 by the A33 relief road from junction 11, with junctions 10 and 12 serving the east and west of the borough and the Mereoak park and ride just south of junction 11. The A329(M) becomes the A3290 near Winnersh Triangle, and the A4 Bath Road still carries local traffic. The Thames is crossed by road in town only at Reading Bridge and Caversham Bridge, so a Caversham move is planned around those two.",
    },
    {
      label: "Property types",
      body: "Katesgrove, just south of the centre, is a dense grid of narrow streets lined with Victorian terraces, many with ornate brickwork and a high share of flats and private renting. Tilehurst mixes Victorian and Edwardian terraces with 1930s and 1950s semis, Caversham runs from Lower Caversham by the river up to Caversham Heights and Emmer Green, Whitley now includes the Kennet Island development beside the A33, and Lower Earley is a private estate built from 1977. The centre adds new flats around Station Hill and The Oracle.",
    },
    {
      label: "The London link",
      body: "Reading station is 36 miles from Paddington on the Great Western Main Line, the western terminus of the Elizabeth line, and the start of the South Western Railway line to London Waterloo through Wokingham, Bracknell and Richmond, so many of our customers move between Reading and London. Our vans leave Purfleet by the Dartford Crossing, which carries Dart Charge, and follow the M25 to the M4 and junction 10, 11 or 12, with one crew at both ends and a fixed written price after a free survey.",
    },
  ],
  nearby: [
    { label: "Bracknell", href: "/areas/bracknell", miles: "about 11 miles" },
    { label: "Maidenhead", href: "/areas/maidenhead" },
    { label: "Basingstoke", href: "/areas/basingstoke" },
    { label: "Slough", href: "/areas/slough" },
  ],
  faqs: [
    {
      question: "Do you cover my Reading postcode?",
      answer:
        "Yes. We cover all of Reading and its suburbs, including RG1, RG2, RG4, RG5, RG6, RG30 and RG31, from Katesgrove and Newtown to Caversham, Tilehurst, Southcote, Whitley, Earley and Woodley. Send your postcode and we will confirm coverage and a price.",
    },
    faqPrice("Reading"),
    {
      question: "How does parking work for a move in a Reading permit zone?",
      answer:
        "Reading Borough Council runs residents parking zones in the streets around the centre and pay and display bays in the town centre itself. We check which zone each address falls in, plan where the van can legally stand for loading and confirm any permit or parking cost in writing before you book. If you are moving into a zone you can apply to the council for a short term permit for your own car while the full one is processed.",
    },
    {
      question: "Can you move me from Reading to London, or from London to Reading?",
      answer:
        "Yes. Reading is about 40 miles from central London and the M4 and M25 make it a direct run. You get a fixed written price after a free survey, one crew end to end, and the drive planned around the route and the M4 junction that suits your address.",
    },
    faqInsured(),
    {
      question: "Can you move a terraced house in Katesgrove or Newtown?",
      answer:
        "Yes. These are narrow Victorian streets close to the centre where the van has to sit tight to the kerb and the house often opens straight onto the pavement, so we plan the stop, bring floor and door protection for narrow hallways and size the crew for the stairs. Many are split into flats, so we confirm which floor and whether there is rear access at the survey.",
    },
  ],
};
