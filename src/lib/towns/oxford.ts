import type { Borough } from "@/lib/boroughs";
import { HERO_ALT, HERO_IMAGE, VALUE_LINE, faqInsured, faqPrice } from "@/lib/boroughs";

export const town: Borough = {
  slug: "oxford",
  name: "Oxford",
  kind: "town",
  county: "Oxfordshire",
  distanceFromLondon: "about 60 miles from central London",
  areaServedName: "Oxford, Oxfordshire",
  h1: "Removals in Oxford",
  subhead:
    "Experienced, insured man and van and removals in Oxford, from £55 per hour plus VAT, 7 days a week, with real local knowledge of parking, access and property across OX1, OX2, OX3 and OX4.",
  metaTitle: "Removals Oxford | Man and Van from £55/hr | Insured",
  metaDescription:
    "Man and van and removals in Oxford (OX1 to OX4) from £55/hr plus VAT. Insured, 7 days, with real knowledge of parking zones, the ring road and terraces.",
  postcodes: ["OX1", "OX2", "OX3", "OX4"],
  heroImage: HERO_IMAGE,
  heroImageAlt: HERO_ALT,
  introLine: "An experienced and fully insured removals company that genuinely serves and knows Oxford.",
  valueLine: VALUE_LINE,
  localBody: [
    "Removals Nationwide moves homes, offices and single items across the whole of Oxford and the surrounding area, 7 days a week, from the canal-side streets of Jericho and the large houses of Summertown to the hospital district around Headington, the car-factory housing of Cowley and the estates at Blackbird Leys and Barton. We are an experienced, insured removals company based in Purfleet, Essex, and you deal with one team and one point of contact from the first quote to the last box. Moves between Oxford and London, or long distance, get a fixed written price after a free survey, so you know the cost before the van is booked.",
    "In Oxford our crews plan around two councils: Oxfordshire County Council runs on-street parking and the resident permit controlled parking zones, while Oxford City Council runs the car parks and Park and Ride sites. The ring road, made up of the A34, A40, A4142 and A423, keeps the van off the inner streets until the last mile, and the centre has bus gates that only buses and authorised vehicles may pass, so we route around them. The housing ranges from two-up two-down Victorian terraces to post-war estates, and we size the crew and the van to the street in front of your door.",
  ],
  coverageIntro:
    "We cover the whole of Oxford, including the OX1, OX2, OX3 and OX4 postcode districts. Neighbourhoods we move people in and out of include:",
  neighbourhoods:
    "Jericho, Summertown, Wolvercote, Osney, Botley, Headington, Marston, Barton, Risinghurst, Cowley, Iffley, Rose Hill, Littlemore and Blackbird Leys.",
  coverageOutro:
    "If your home sits just beyond the ring road at Kennington, Wheatley, Horspath or Garsington, we cover that too. Tell us your postcode and we will confirm coverage and a price.",
  knowIntro:
    "Oxford is a compact historic city with a ring road, tight Victorian streets and two councils sharing the parking rules. Here is what our crews plan for.",
  knowBlocks: [
    {
      label: "Controlled parking zones",
      body: "On-street parking in Oxford is run by Oxfordshire County Council, which operates the controlled parking zones and issues the resident permits for them, while Oxford City Council looks after the car parks and Park and Ride sites. In a controlled zone the van must stand where the signs allow, so we check your street before the day and agree with the county how a removal vehicle can legally load there. Where there is a driveway or an unrestricted road, loading is straightforward.",
    },
    {
      label: "The ring road and bus gates",
      body: "The Oxford Ring Road circles the city as the A34 on the west, the A40 on the north and north east, and the A4142 and A423 on the east and south, with named junctions at Headington, Littlemore, Kennington and the Botley Interchange for the A420. The M40 reaches the city through junction 8 via the A40 and junction 9 via the A34. The city has eight bus gates, short stretches of road that only buses and authorised vehicles may pass, so our drivers route around them to reach your street.",
    },
    {
      label: "Property types",
      body: "Jericho is mostly two-up two-down Victorian workers' houses on narrow streets by the Oxford Canal, with later council housing added. North Oxford and Summertown are Victorian suburbs of large houses along the Banbury and Woodstock Roads. Cowley has streets built from the 1920s for car-factory workers, Florence Park among them, and Blackbird Leys is a 1950s and 1960s estate with the Evenlode and Windrush towers. Barton is a 1930s council estate, with the new Barton Park homes being built to its west.",
    },
    {
      label: "The London link",
      body: "Oxford is well connected to the capital. Great Western Railway runs from Oxford station to London Paddington, and Chiltern Railways runs from Oxford Parkway to London Marylebone. By road, the A40 east to M40 junction 8 is the direct line towards London, with the A34 to junction 9 as the alternative. For moves to or from London we plan the route around the M40 and the time of day, and the same crew loads in Oxford and unloads in London, so nothing changes hands part way.",
    },
  ],
  nearby: [
    { label: "Aylesbury", href: "/areas/aylesbury" },
    { label: "High Wycombe", href: "/areas/high-wycombe" },
    { label: "Reading", href: "/areas/reading" },
    { label: "Milton Keynes", href: "/areas/milton-keynes" },
  ],
  faqs: [
    {
      question: "Do you cover my Oxford postcode?",
      answer:
        "Yes. We cover the whole of Oxford, OX1, OX2, OX3 and OX4, from Jericho and Summertown to Headington, Cowley, Iffley and Blackbird Leys, and the villages just outside the ring road. Send your postcode and we will confirm coverage and a price.",
    },
    faqPrice("Oxford"),
    {
      question: "Will parking be a problem for my move in Oxford?",
      answer:
        "Only inside the controlled parking zones, where the van must stand where the signs allow. Oxfordshire County Council runs on-street parking in the city, so we check your street in advance and agree the arrangement with the county where needed. On the outer estates and in streets with driveways, loading is simple. We also route around the city centre bus gates, which only buses and authorised vehicles may pass.",
    },
    {
      question: "Can you move me from Oxford to London, or from London to Oxford?",
      answer:
        "Yes, in both directions. You get a fixed written price after a free survey, one crew end to end, and the drive planned around the route, which for Oxford is normally the A40 to M40 junction 8 or the A34 to junction 9 and then the M40 into west London. We plan the timing around the motorway and your building's access at the London end.",
    },
    faqInsured(),
    {
      question: "Can you move a terraced house in Jericho or East Oxford?",
      answer:
        "Yes. Jericho's two-up two-down Victorian houses and the terraces off the Cowley and Iffley Roads have narrow hallways, steep stairs and doors close to the pavement, so we send a crew used to carrying through small spaces, protect the doorframes and stairs, and position the van as close as the controlled parking zone allows. We sort the parking arrangement with the county council before the day.",
    },
  ],
};
