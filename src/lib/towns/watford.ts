import type { Borough } from "@/lib/boroughs";
import { HERO_ALT, HERO_IMAGE, VALUE_LINE, faqInsured, faqPrice } from "@/lib/boroughs";

export const town: Borough = {
  slug: "watford",
  name: "Watford",
  kind: "town",
  county: "Hertfordshire",
  distanceFromLondon: "about 15 miles from central London",
  areaServedName: "Watford, Hertfordshire",
  h1: "Removals in Watford",
  subhead:
    "Experienced, insured man and van and removals in Watford, from £55 per hour plus VAT, 7 days a week, with real local knowledge of permit zones, the ring road and property across WD17, WD18, WD19, WD24 and WD25.",
  metaTitle: "Removals in Watford | Man and Van from £55/hr, 7 Days",
  metaDescription:
    "Man and van and removals in Watford (WD17, WD18, WD19, WD24, WD25) from £55/hr plus VAT. Insured, 7 days a week, permit zones and ring road planned.",
  postcodes: ["WD17", "WD18", "WD19", "WD24", "WD25"],
  heroImage: HERO_IMAGE,
  heroImageAlt: HERO_ALT,
  introLine: "An experienced and fully insured removals company that genuinely serves and knows Watford.",
  valueLine: VALUE_LINE,
  localBody: [
    "Removals Nationwide moves homes, offices and single items across the whole of Watford and the surrounding area, 7 days a week, from the 1930s detached houses of Cassiobury and Nascot Wood to the terraces of North Watford and Callowland and the flats near Watford Junction and the new homes at the Watford Health Campus beside the hospital. We are an experienced, insured removals company based in Purfleet, Essex, and we reach Watford on the M25. You get one team and one point of contact from quote to completion, and moves between Watford and London, or long distance, get a fixed written price after a free survey.",
    "In Watford our crews plan around Watford Borough Council's lettered controlled parking zones, which cover many of the streets around the town centre and the stations. Where a move needs a legal space inside a zone we apply to the council for a dispensation, which it lists removals as a reason for, or ask for a bay suspension where a reserved kerb matters, and both need booking ahead of the day. The A411 ring road circles the centre, so we plan the exit for your street before we arrive, and we load for the High Street and Harlequin Watford from side streets and service roads outside the busiest hours.",
  ],
  coverageIntro:
    "We cover the whole of Watford, including the WD17, WD18, WD19, WD24 and WD25 postcode districts. Neighbourhoods we move people in and out of include:",
  neighbourhoods:
    "Cassiobury, Nascot Wood, North Watford, West Watford, Holywell, Callowland, Oxhey, Garston, Leavesden, Carpenders Park, South Oxhey and Bushey.",
  coverageOutro:
    "If you are just over the edge of town in Abbots Langley, Kings Langley, Croxley Green or Rickmansworth, we cover that too. Tell us your postcode and we will confirm coverage and a price.",
  knowIntro:
    "Watford is a busy commuter town with controlled parking in the middle and easy driveway loading on the edges. Here is what our crews plan for.",
  knowBlocks: [
    {
      label: "Permit zones and bay suspensions",
      body: "Watford Borough Council runs a set of lettered controlled parking zones, from Zone A onwards, around the town centre and the stations, with permit holder bays, shared use bays and pay and display bays. Where your street is in a zone we check the hours and apply for a dispensation, which the council processes in a few working days and lists removals as a valid reason, or for a bay suspension if the van needs a guaranteed space. Outside the zones most streets are unrestricted or have a driveway.",
    },
    {
      label: "Ring road and motorway access",
      body: "The A411 runs through the centre of Watford as the ring road and meets the A41 at both ends, so we plan the exit for your street before we set off rather than circling. From the north we leave the M1 at junction 5 for the A41 into town, and from the M25 we use junction 19 or junction 20 for the A41. The High Street and the streets around Harlequin Watford are busy with shoppers and buses, so loading there is done from side streets and service roads.",
    },
    {
      label: "Property types",
      body: "The suburban streets of Cassiobury were laid out in the early 1930s and are mostly detached and semi detached mock Tudor houses, like neighbouring Nascot Wood, so these are large family moves with a driveway to load from. North Watford, Garston and Callowland are mainly terraced and semi detached streets, including the 1920s Harebreaks estate. Near Watford Junction there are flats with lifts to book, and the Watford Health Campus scheme beside Watford General Hospital is adding new homes near Vicarage Road.",
    },
    {
      label: "The London link",
      body: "Watford sits about 15 miles north west of central London, so moves to and from the capital are common. Our vans come up the M25 and into town on the A41 or A411, and go into London on the A41 or the M1. Watford Junction is on the West Coast Main Line with fast trains to London Euston, and the Metropolitan line ends at Watford station near Cassiobury Park, which is why so many Watford moves are families coming out of London for more space.",
    },
  ],
  nearby: [
    { label: "St Albans", href: "/areas/st-albans", miles: "8" },
    { label: "Hemel Hempstead", href: "/areas/hemel-hempstead", miles: "6" },
    { label: "Harrow", href: "/areas/harrow" },
    { label: "Barnet", href: "/areas/barnet" },
  ],
  faqs: [
    {
      question: "Do you cover my Watford postcode?",
      answer:
        "Yes. We cover the whole of Watford, including WD17, WD18, WD19, WD24 and WD25, from Cassiobury and Nascot Wood to North Watford, Oxhey and Garston, plus Bushey and the villages just outside. Send your postcode and we will confirm coverage and a price.",
    },
    faqPrice("Watford"),
    {
      question: "Is parking a problem for a move in Watford?",
      answer:
        "Only in the middle. The streets around the town centre and the stations sit in Watford Borough Council controlled parking zones with permit and shared use bays. We check your zone and its hours, and if a legal space is needed we apply for a dispensation, which the council lists removals as a reason for, or a bay suspension where a guaranteed kerb matters, so tell us your date early. Most streets in Cassiobury, Garston and Oxhey have driveways or unrestricted parking.",
    },
    {
      question: "Can you move me from Watford to London, or from London to Watford?",
      answer:
        "Yes, in either direction. You get a fixed written price after a free survey, one crew that loads in one place and unloads in the other, and the drive planned around the route, usually the A41 or the M1 and M25 depending on where in London you are going.",
    },
    faqInsured(),
    {
      question: "Can you move me into a new flat at the Watford Health Campus or near Watford Junction?",
      answer:
        "Yes. The blocks around Watford Junction and the new homes at the Watford Health Campus beside the hospital have lifts, loading areas and managing agents with their own rules. We ask you for the agent's contact, book the lift and loading bay for your slot, protect the lobby and lift, and bring the right crew size so the move is done inside the booked window.",
    },
  ],
};
