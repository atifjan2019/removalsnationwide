import type { Borough } from "@/lib/boroughs";
import { HERO_ALT, HERO_IMAGE, VALUE_LINE, faqInsured, faqPrice } from "@/lib/boroughs";

export const town: Borough = {
  slug: "stevenage",
  name: "Stevenage",
  kind: "town",
  county: "Hertfordshire",
  distanceFromLondon: "about 30 miles from central London",
  areaServedName: "Stevenage, Hertfordshire",
  h1: "Removals in Stevenage",
  subhead:
    "Experienced, insured man and van and removals in Stevenage, from £55 per hour plus VAT, 7 days a week, with real local knowledge of the new town neighbourhoods, the traffic free town centre and property across SG1 and SG2.",
  metaTitle: "Removals in Stevenage | Man and Van from £55/hr, 7 Days",
  metaDescription:
    "Man and van and removals in Stevenage (SG1, SG2) from £55/hr plus VAT. Insured, 7 days a week, new town estates and the traffic free centre planned.",
  postcodes: ["SG1", "SG2"],
  heroImage: HERO_IMAGE,
  heroImageAlt: HERO_ALT,
  introLine: "An experienced and fully insured removals company that genuinely serves and knows Stevenage.",
  valueLine: VALUE_LINE,
  localBody: [
    "Removals Nationwide moves homes, offices and single items across the whole of Stevenage and the surrounding area, 7 days a week, from the Old Town High Street and the 1950s neighbourhoods of Bedwell, Broadwater, Chells and Shephall to the newer homes at Great Ashby and the flats rising in the town centre. We are an experienced, insured removals company based in Purfleet, Essex, and we reach Stevenage on the M25 and the A1(M). You get one team and one point of contact from quote to completion, and moves between Stevenage and London, or long distance, get a fixed written price after a free survey.",
    "Stevenage was Britain's first post war new town, and its layout is kind to movers in most places: wide roads, a segregated cycleway network that stays out of the way of the van, and estates with garage blocks and parking courts. Our crews plan for the exceptions, which are the traffic free town centre, the pay and display streets of the Old Town and the streets where Stevenage Borough Council has introduced resident permit parking. We arrive on the A602 from junction 7 or 8 of the A1(M).",
  ],
  coverageIntro:
    "We cover the whole of Stevenage, including the SG1 and SG2 postcode districts. Neighbourhoods we move people in and out of include:",
  neighbourhoods:
    "Old Town, Bedwell, Broadwater, Chells, Chells Manor, Pin Green, Poplars, Shephall, Symonds Green, St Nicholas, Great Ashby, Bragbury End and Knebworth.",
  coverageOutro:
    "We also cover the villages around the town, including Walkern, Aston, Benington, Graveley and Little Wymondley, and Hitchin and Letchworth to the north. Tell us your postcode and we will confirm coverage and a price.",
  knowIntro:
    "Stevenage is a planned town with a traffic free centre and distinct residential neighbourhoods, so access is predictable once you know it. Here is what our crews plan for.",
  knowBlocks: [
    {
      label: "The traffic free town centre",
      body: "The pedestrianised town centre, opened in 1959, was the first purpose built traffic free shopping zone in Britain, so there is no kerbside loading on the main squares. New flats are being built in and around the centre under the SG1 regeneration programme, and Queensway North is being redeveloped on the former Marks and Spencer site, with each scheme having its own service access and lift. We confirm the loading point and lift booking with the managing agent before the day.",
    },
    {
      label: "Permit streets and bay suspensions",
      body: "Most of Stevenage is unrestricted, but Stevenage Borough Council runs resident permit parking in a number of streets and publishes a street list of where permits and visitor vouchers apply, with further streets consulted on from time to time. If your street is on it, we apply to the council for a bay suspension with the dates and purpose of the move, and the council also takes applications for parking exemptions and dispensations, which can cover a removal van where a full suspension is not needed.",
    },
    {
      label: "Roads, junctions and cycleways",
      body: "The A1(M) bypasses the town to the west, and the A602 carries us in from junction 7 in the north or junction 8 in the south, where it meets Lytton Way and the station. The B197 is the old Great North Road through the town, and the A602 continues east to Hertford and Ware. Stevenage has a network of completely segregated cycleways, so our drivers watch for the crossings on estate roads and never block a cycleway entrance while loading.",
    },
    {
      label: "Property types",
      body: "Shephall, Broadwater, Chells and St Nicholas were built as new town neighbourhoods of terraced housing for families moving out of London, and many homes are now extended or converted. The Old Town is older, with cottages and shops along the High Street. Great Ashby on the northern edge is a modern estate with narrower cul de sacs and allocated parking, and Bragbury End and Knebworth add detached village homes with drives.",
    },
  ],
  nearby: [
    { label: "Welwyn Garden City", href: "/areas/welwyn-garden-city" },
    { label: "Luton", href: "/areas/luton" },
    { label: "Bishop's Stortford", href: "/areas/bishops-stortford" },
    { label: "St Albans", href: "/areas/st-albans" },
  ],
  faqs: [
    {
      question: "Do you cover my Stevenage postcode?",
      answer:
        "Yes. We cover the whole of Stevenage, including SG1 and SG2, from the Old Town and Great Ashby to Bedwell, Chells, Pin Green, Shephall, Symonds Green and Bragbury End, plus Knebworth and the villages around the town. Send your postcode and we will confirm coverage and a price.",
    },
    faqPrice("Stevenage"),
    {
      question: "Can you load in the Stevenage town centre or the Old Town?",
      answer:
        "Yes, with planning. The main town centre is traffic free, so flats there are loaded from the service roads and car parks behind the squares, and we confirm the route and any lift booking with the managing agent first. The Old Town High Street is lined with shops and pay and display parking, and where a nearby street has resident permit parking we apply to Stevenage Borough Council for a bay suspension if the van needs a reserved space.",
    },
    {
      question: "Can you move me from Stevenage to London, or from London to Stevenage?",
      answer:
        "Yes, in either direction. You get a fixed written price after a free survey, one crew from loading to unloading, and the drive planned around the route, normally the A602 to the A1(M) and then the A1 or M25 into London depending on where you are going. Stevenage is on the East Coast Main Line with fast trains to London King's Cross, so many moves here start or finish in London.",
    },
    faqInsured(),
    {
      question: "Can you move an original new town terraced house in Shephall, Broadwater or Chells?",
      answer:
        "Yes, these are typical Stevenage homes and our crews plan for them. The original new town terraces have narrow halls and straight staircases, and the van usually stops on the road or in a parking court a short walk away. We bring door and banister protection, dismantle wardrobes and beds where they will not turn the stair, and allow for the carry in the price so the hourly estimate is honest.",
    },
  ],
};
