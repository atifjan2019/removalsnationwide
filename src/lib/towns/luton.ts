import type { Borough } from "@/lib/boroughs";
import { HERO_ALT, HERO_IMAGE, VALUE_LINE, faqInsured, faqPrice } from "@/lib/boroughs";

export const town: Borough = {
  slug: "luton",
  name: "Luton",
  kind: "town",
  county: "Bedfordshire",
  distanceFromLondon: "about 35 miles from central London",
  areaServedName: "Luton, Bedfordshire",
  h1: "Removals in Luton",
  subhead:
    "Experienced, insured man and van and removals in Luton, from £55 per hour plus VAT, 7 days a week, with real local knowledge of parking, access and property across LU1, LU2, LU3 and LU4.",
  metaTitle: "Removals Luton | Man and Van from £55/hr | Insured",
  metaDescription:
    "Man and van and removals in Luton (LU1 to LU4) from £55/hr plus VAT. Insured, 7 days, with real knowledge of permit zones, the M1 and Luton's estates.",
  postcodes: ["LU1", "LU2", "LU3", "LU4"],
  heroImage: HERO_IMAGE,
  heroImageAlt: HERO_ALT,
  introLine: "An experienced and fully insured removals company that genuinely serves and knows Luton.",
  valueLine: VALUE_LINE,
  localBody: [
    "Removals Nationwide moves homes, offices and single items across the whole of Luton and the surrounding area, 7 days a week, from the Victorian terraces of High Town and Bury Park to the post-war estates at Marsh Farm, Farley Hill and Stopsley and the family streets of Wigmore and Bramingham. Our firm is an experienced, insured removals company based in Purfleet, Essex, not a lead-selling website, so one team and one point of contact see your move through from quote to completion. Moves between Luton and London, or long distance, get a fixed written price after a free survey.",
    "In Luton our crews plan around Luton Council's controlled parking zones, where parking is only allowed in marked bays and the restrictions are signed at the zone entrances rather than on every street, so we confirm what applies to your road before we arrive. The M1 serves the town from junctions 10 and 11, the A6 runs north through it towards Bedford, and the A505 runs through the centre and on towards the airport. Terraced streets in High Town and Bury Park are tight for a large van, while the outer estates usually have driveways or off-street space with easier access.",
  ],
  coverageIntro:
    "We cover the whole of Luton, including the LU1, LU2, LU3 and LU4 postcode districts. Neighbourhoods we move people in and out of include:",
  neighbourhoods:
    "High Town, Bury Park, Round Green, Stopsley, Wigmore, Leagrave, Limbury, Marsh Farm, Farley Hill, Bramingham, Sundon Park, Lewsey Farm, Challney and Biscot.",
  coverageOutro:
    "If your home sits on the edge of Luton towards Dunstable, Houghton Regis or the villages to the south, we cover that too. Tell us your postcode and we will confirm coverage and a price.",
  knowIntro:
    "Luton is a large unitary town with a dense Victorian core, big post-war estates and the M1 on its doorstep. Here is what our crews plan for.",
  knowBlocks: [
    {
      label: "Controlled parking zones",
      body: "Luton Council runs a number of controlled parking zones and resident permit zones, where parking is only allowed in marked bays and the rest of the kerb is restricted by yellow lines. The zones are signed at each entry and exit point rather than with time plates on every street, so it is easy to be inside one without realising. If your street is in a zone we confirm with the council how a removal van can legally load there before the day, and where the nearest unrestricted kerb is.",
    },
    {
      label: "Roads and access",
      body: "The M1 serves Luton from junctions 10 and 11, the A6 runs north through the town towards Bedford, and the A505 runs through the centre and on towards London Luton Airport, while the A1081 New Airport Way links the airport back to the M1 at junction 10. The town centre is busy around the shopping centre and the station, so for central moves we time the arrival, agree the loading point and keep the van as close to your door as the restrictions allow.",
    },
    {
      label: "Property types",
      body: "High Town and Bury Park are Victorian and early twentieth century terraces, with front doors close to the pavement, narrow hallways and on-street parking only. Around them Luton grew through the 1920s and 1930s, and then with large post-war council estates at Farley Hill, Stopsley, Limbury, Marsh Farm and Leagrave, including the Hockwell Ring estate. Newer apartment blocks around the centre add lift bookings and loading bays to plan for.",
    },
    {
      label: "The London link",
      body: "Luton is a commuter town. Thameslink trains run from Luton, Leagrave and Luton Airport Parkway stations, with East Midlands Railway services at Luton as well, and by road the M1 takes you straight into north west London. For moves to or from the capital we plan the route around M1 junctions 10 and 11 and the time of day, and one crew handles both ends so nothing is handed over part way.",
    },
  ],
  nearby: [
    { label: "Bedford", href: "/areas/bedford", miles: "19 miles" },
    { label: "St Albans", href: "/areas/st-albans" },
    { label: "Hemel Hempstead", href: "/areas/hemel-hempstead" },
    { label: "Stevenage", href: "/areas/stevenage" },
  ],
  faqs: [
    {
      question: "Do you cover my Luton postcode?",
      answer:
        "Yes. We cover the whole of Luton, LU1, LU2, LU3 and LU4, from High Town and Bury Park to Stopsley, Wigmore, Leagrave and Marsh Farm. Send your postcode and we will confirm coverage and a price.",
    },
    faqPrice("Luton"),
    {
      question: "Will parking be a problem for my move in Luton?",
      answer:
        "Only in the controlled parking zones around the town centre and the station, where the van must stand in a marked bay or with the council's agreement. We check your street in advance and confirm the arrangement with Luton Council where needed. Across most of Luton's outer estates, a driveway or unrestricted street makes loading simple.",
    },
    {
      question: "Can you move me from Luton to London, or from London to Luton?",
      answer:
        "Yes, in both directions. You get a fixed written price after a free survey, one crew end to end, and the drive planned around the route, which for Luton is normally the M1 from junction 10 or 11 into north west London. We plan the timing around the motorway and your building's access at the London end.",
    },
    faqInsured(),
    {
      question: "Can you move a terraced house in High Town or Bury Park?",
      answer:
        "Yes. These are narrow Victorian terraces with doors close to the pavement, tight hallways and on-street parking, so we send a crew used to carrying through small spaces, protect the doorframes and stairs, and position the van as close as the bays and restrictions allow. If the street is in a controlled parking zone we sort the parking arrangement before the day.",
    },
  ],
};
