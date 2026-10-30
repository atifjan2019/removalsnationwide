import type { Borough } from "@/lib/boroughs";
import { HERO_ALT, HERO_IMAGE, VALUE_LINE, faqInsured, faqPrice } from "@/lib/boroughs";

export const town: Borough = {
  slug: "southend-on-sea",
  name: "Southend-on-Sea",
  h1: "Removals in Southend-on-Sea",
  subhead:
    "Experienced, insured man and van and removals in Southend-on-Sea, from £55 per hour plus VAT, 7 days a week, with real local knowledge of parking, access and property across SS0, SS1, SS2, SS3 and SS9.",
  metaTitle: "Removals Southend-on-Sea | Man and Van from £55/hr",
  metaDescription:
    "Man and van and removals in Southend (SS0, SS1, SS2, SS3, SS9) from £55/hr plus VAT. Insured, 7 days a week, from Leigh and Westcliff to Shoeburyness.",
  postcodes: ["SS0", "SS1", "SS2", "SS3", "SS9"],
  areaServedName: "Southend-on-Sea, Essex",
  kind: "town",
  county: "Essex",
  distanceFromLondon: "about 40 miles from central London",
  heroImage: HERO_IMAGE,
  heroImageAlt: HERO_ALT,
  introLine: "An experienced and fully insured removals company that genuinely serves and knows Southend-on-Sea.",
  valueLine: VALUE_LINE,
  localBody: [
    "Removals Nationwide moves homes, offices and single items across the whole of Southend-on-Sea and the surrounding area, 7 days a week, from Leigh-on-Sea and Chalkwell in the west through Westcliff and the city centre to Thorpe Bay and Shoeburyness in the east. We are an experienced, insured removals company based in Purfleet, Essex, so the run along the A13 or A127 is one our drivers know well. One team and one point of contact look after you from quote to completion. Moves between Southend-on-Sea and London, or long distance, get a fixed written price after a free survey.",
    "Southend is a seaside city of converted houses and flats, so our crews plan for stairs, bay windows and shared entrances as much as for parking. Many of the older streets nearest the seafront and the town centre sit in resident permit schemes run by Southend-on-Sea City Council, the High Street is a pedestrian zone, and seafront parking fills early on a warm day. Away from the centre, Thorpe Bay, Eastwood and Shoeburyness are mostly houses with driveways, and the A127, A13 and A1159 get us to each side of the city without crossing the middle.",
  ],
  coverageIntro:
    "We cover the whole of Southend-on-Sea, including the SS0, SS1, SS2, SS3 and SS9 postcodes. Neighbourhoods we move people in and out of include:",
  neighbourhoods:
    "Westcliff-on-Sea, Chalkwell, Leigh-on-Sea, Thorpe Bay, Shoeburyness, Prittlewell, Southchurch, Eastwood, Clifftown, Milton and Great Wakering.",
  coverageOutro:
    "If you are just over the city boundary in Great Wakering, Hadleigh or towards the airport, we cover that too. Tell us your postcode and we will confirm coverage and a price.",
  knowIntro:
    "Southend-on-Sea mixes period flats and permit streets near the seafront with suburban houses further out, and here is what our crews plan for.",
  knowBlocks: [
    {
      label: "Permit schemes and the seafront",
      body: "Southend-on-Sea City Council runs resident parking schemes across the older streets nearest the seafront and the town centre, each with its own hours and street list, and the terraces behind the cliffs were built long before anyone owned a car. The seafront itself gets busy on warm weekends and bank holidays, so an Esplanade or Clifftown move is planned for an early start. We check your street against the council's scheme details before the day and arrange the right space for the van.",
    },
    {
      label: "The High Street and city centre",
      body: "Southend High Street is a pedestrian zone, so flats above the shops and around the centre are loaded from the service roads behind the parades or from a nearby car park rather than from the High Street itself. In Leigh-on-Sea, the streets around the Broadway and the Leigh Old Town conservation area are narrow and busy, with their own restrictions, so we size the van to the street. Our crews identify the legal loading point for your building before we quote.",
    },
    {
      label: "Property types",
      body: "Clifftown is a conservation area of Georgian and Victorian terraces, and Westcliff has Victorian and Edwardian streets, including The Leas, Shorefields and Milton conservation areas, where many large houses are now split into flats with shared stairs. Leigh-on-Sea ranges from cottages in the old town to modern waterfront apartments. Thorpe Bay, Southchurch and Eastwood are largely detached and semi-detached houses with driveways, and Shoeburyness grew up around its former garrison.",
    },
    {
      label: "Roads and the London link",
      body: "The A127 ends in the city centre beside Southend Victoria station, the A13 runs in through Hadleigh, Leigh-on-Sea and Westcliff and on to Shoeburyness, and the A1159 leaves the A127 at Cuckoo Corner for the airport one way and Thorpe Bay the other. Southend is about 40 miles from central London, and c2c trains from Southend Central reach Fenchurch Street in under an hour while Greater Anglia runs from Southend Victoria to Liverpool Street, so a commuter's move in either direction fits comfortably into one day for one crew.",
    },
  ],
  nearby: [
    { label: "Basildon", href: "/areas/basildon" },
    { label: "Chelmsford", href: "/areas/chelmsford" },
    { label: "Grays", href: "/areas/grays" },
  ],
  faqs: [
    {
      question: "Do you cover my Southend-on-Sea postcode?",
      answer:
        "Yes. We cover the whole of Southend-on-Sea across SS0, SS1, SS2, SS3 and SS9, from Leigh-on-Sea and Chalkwell to Westcliff, the city centre, Thorpe Bay and Shoeburyness. Send your postcode and we will confirm coverage and a price.",
    },
    faqPrice("Southend-on-Sea"),
    {
      question: "How do you handle parking for a move near the Southend seafront or in Clifftown?",
      answer:
        "We check your street against the council's resident scheme details, because the older streets nearest the seafront and the town centre each sit in their own zone with their own hours. On warm weekends the seafront fills early, so we start early and plan where the van will stand before the day. For a flat above the High Street we load from the service road behind the parade or a nearby car park, as the High Street itself is a pedestrian zone.",
    },
    {
      question: "Can you move me from Southend-on-Sea to London, or from London to Southend-on-Sea?",
      answer:
        "Yes, in both directions. You get a fixed written price after a free survey, one crew handles the move end to end, and we plan the drive along the A127 or the A13 to suit your London address, including any parking suspension at the London end.",
    },
    faqInsured(),
    {
      question: "Can you move a flat in a converted house in Westcliff or Leigh-on-Sea?",
      answer:
        "Yes, this is one of the most common Southend moves. Converted Victorian and Edwardian houses have shared stairs, tight landings and bay windows, so we send a crew used to carrying furniture up and down them, protect the common parts, and check with you whether any large items need to come apart first.",
    },
  ],
};
