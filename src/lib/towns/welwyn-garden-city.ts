import type { Borough } from "@/lib/boroughs";
import { HERO_ALT, HERO_IMAGE, VALUE_LINE, faqInsured, faqPrice } from "@/lib/boroughs";

export const town: Borough = {
  slug: "welwyn-garden-city",
  name: "Welwyn Garden City",
  kind: "town",
  county: "Hertfordshire",
  distanceFromLondon: "about 20 miles from central London",
  areaServedName: "Welwyn Garden City, Hertfordshire",
  h1: "Removals in Welwyn Garden City",
  subhead:
    "Experienced, insured man and van and removals in Welwyn Garden City, from £55 per hour plus VAT, 7 days a week, with real local knowledge of the garden city verges, permit zones and property across AL7 and AL8.",
  metaTitle: "Removals Welwyn Garden City | Man and Van from £55/hr",
  metaDescription:
    "Man and van and removals in Welwyn Garden City (AL7, AL8) from £55/hr plus VAT. Insured, 7 days a week, verges, permit zones and estate rules planned.",
  postcodes: ["AL7", "AL8"],
  heroImage: HERO_IMAGE,
  heroImageAlt: HERO_ALT,
  introLine: "An experienced and fully insured removals company that genuinely serves and knows Welwyn Garden City.",
  valueLine: VALUE_LINE,
  localBody: [
    "Removals Nationwide moves homes, offices and single items across the whole of Welwyn Garden City and the surrounding area, 7 days a week, from the oldest streets of Handside on the west side to Panshanger, Haldens and Peartree in the east and the new flats on the former Shredded Wheat site by the railway. We are an experienced, insured removals company based in Purfleet, Essex, and the A1(M) brings us straight to Welwyn Garden City. You have one team and one point of contact from quote to completion, and moves between Welwyn Garden City and London, or long distance, get a fixed written price after a free survey.",
    "The garden city was laid out along tree lined boulevards and every road has a wide grass verge, so our crews plan to keep the van on the carriageway or driveway and never on the grass, which the town protects. Welwyn Hatfield Borough Council runs resident permit parking in a number of streets, publishes a map of the permit areas, and grants dispensations and bay suspensions for home removals with notice. We come in from the A1(M) at junction 4 or 6 and load for the town centre from the service roads off Parkway and Howardsgate.",
  ],
  coverageIntro:
    "We cover the whole of Welwyn Garden City, including the AL7 and AL8 postcode districts. Neighbourhoods we move people in and out of include:",
  neighbourhoods:
    "Handside, Sherrards, Panshanger, Haldens, Peartree, Hollybush, Hatfield Hyde, Woodhall, Knightsfield, Digswell, Lemsford and Welwyn village.",
  coverageOutro:
    "We also cover Hatfield to the south, Welwyn and Oaklands to the north and Tewin and Hertford to the east. Tell us your postcode and we will confirm coverage and a price.",
  knowIntro:
    "Welwyn Garden City is a planned town with protected streetscapes and a growing station quarter, and both affect how we park and load. Here is what our crews plan for.",
  knowBlocks: [
    {
      label: "Verges, permit zones and dispensations",
      body: "Every road in the garden city has a wide grass verge, protected by the town's Scheme of Management, so we keep wheels off the grass and load from the carriageway or your drive. Welwyn Hatfield Borough Council runs resident permit parking in a number of streets and publishes a map of the permit areas. There it grants a removals dispensation with two working days' notice, or a bay suspension with at least ten days' notice, so we ask for your date early.",
    },
    {
      label: "Roads and motorway junctions",
      body: "The A1(M) runs along the west of the town, and we leave it at junction 4 for the south and the A414, or junction 6 for Welwyn village and the north. The A1000 and A1001 link to Hatfield, the B653 runs west towards St Albans and Harpenden and the B1000 heads east to Hertford. Parkway is the central boulevard, almost a mile long, with the shops along Howardsgate and in the Howard Centre, so town centre loading is done from the service roads behind the frontages.",
    },
    {
      label: "Property types",
      body: "The west side around Handside has the oldest streets, laid out after the garden city was founded in 1920, with houses on mature, hedged plots. Panshanger on the east side is a later neighbourhood named after the Panshanger estate, with family homes, cul de sacs and driveways. The Scheme of Management controls alterations to houses, fences and frontages across most of the town, which is why the streets look so consistent and why we take extra care with fences, hedges and verges.",
    },
    {
      label: "The station and the Wheat Quarter",
      body: "Welwyn Garden City station sits inside the Howard Centre in the town centre, with Great Northern trains to London King's Cross and Moorgate and peak Thameslink services, so this is a commuter town and many moves here start or end in London. The Grade II listed Shredded Wheat factory, long a landmark from the railway, is being redeveloped as the Wheat Quarter with new homes, and we book lifts and loading bays with the managing agent for moves into the new blocks.",
    },
  ],
  nearby: [
    { label: "Stevenage", href: "/areas/stevenage" },
    { label: "St Albans", href: "/areas/st-albans", miles: "8" },
    { label: "Enfield", href: "/areas/enfield" },
    { label: "Barnet", href: "/areas/barnet" },
  ],
  faqs: [
    {
      question: "Do you cover my Welwyn Garden City postcode?",
      answer:
        "Yes. We cover the whole of Welwyn Garden City, including AL7 and AL8, from Handside, Sherrards and Knightsfield in the west to Panshanger, Haldens, Peartree and Hatfield Hyde in the east, plus Digswell, Lemsford, Welwyn village and Hatfield. Send your postcode and we will confirm coverage and a price.",
    },
    faqPrice("Welwyn Garden City"),
    {
      question: "Can your van park on the grass verge outside my house in Welwyn Garden City?",
      answer:
        "No, and we would not want to. The wide verges are part of what makes the garden city, the town's Scheme of Management protects them, and a loaded van would damage them. We park on the carriageway or your driveway. If your street is in a Welwyn Hatfield Borough Council permit zone we apply for a removals dispensation or a bay suspension so the van has a legal space close to the door.",
    },
    {
      question: "Can you move me from Welwyn Garden City to London, or from London to Welwyn Garden City?",
      answer:
        "Yes, in either direction. You get a fixed written price after a free survey, one crew that loads at one end and unloads at the other, and the drive planned around the route, usually the A1(M) from junction 4 or 6 and then the A1 or M25 into London depending on your destination.",
    },
    faqInsured(),
    {
      question: "Can you move me into a new flat at the Wheat Quarter or near the Howard Centre?",
      answer:
        "Yes. The new blocks on the former Shredded Wheat site by the railway, and the flats around the Howard Centre, have managed entrances, lifts and set loading areas. We get the managing agent's contact from you, book the lift and loading slot, protect the lobby and lift walls, and size the crew so everything is in within the booked window rather than queuing on the service road.",
    },
  ],
};
