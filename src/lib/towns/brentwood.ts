import type { Borough } from "@/lib/boroughs";
import { HERO_ALT, HERO_IMAGE, VALUE_LINE, faqInsured, faqPrice } from "@/lib/boroughs";

export const town: Borough = {
  slug: "brentwood",
  name: "Brentwood",
  kind: "town",
  county: "Essex",
  distanceFromLondon: "about 20 miles from central London",
  areaServedName: "Brentwood, Essex",
  h1: "Removals in Brentwood",
  subhead:
    "Experienced, insured man and van and removals in Brentwood, from £55 per hour plus VAT, 7 days a week, with real local knowledge of parking, access and property across CM13, CM14 and CM15.",
  metaTitle: "Removals Brentwood | Man and Van from £55/hr | Insured",
  metaDescription:
    "Man and van and removals in Brentwood (CM13 to CM15) from £55/hr plus VAT. Insured, 7 days, with real knowledge of Shenfield, Hutton, Warley and the A12.",
  postcodes: ["CM13", "CM14", "CM15"],
  heroImage: HERO_IMAGE,
  heroImageAlt: HERO_ALT,
  introLine: "An experienced and fully insured removals company that genuinely serves and knows Brentwood.",
  valueLine: VALUE_LINE,
  localBody: [
    "Removals Nationwide moves homes, offices and single items across the whole of Brentwood and the surrounding area, 7 days a week, from the large detached houses of Hutton Mount and Shenfield to the family streets of Warley and Pilgrims Hatch and the villages at Ingrave, Doddinghurst and Kelvedon Hatch. We are an experienced, insured removals company based in Purfleet, Essex, not a booking marketplace, and you get one team and one point of contact from quote to completion. Moves between Brentwood and London, or long distance, get a fixed written price after a free survey.",
    "Brentwood is one of the closest towns to our Purfleet base, reached up the M25 without crossing the Thames, and our crews know the Brook Street interchange at junction 28 where the M25, the A12 and the A1023 into town meet. On-street parking in Brentwood is run by the South Essex Parking Partnership, administered from Chelmsford, with resident permit zones on some streets, while Brentwood Borough Council runs the town centre car parks. The High Street follows the old Roman road through the centre and the A128 crosses the town, so we time central loads carefully.",
  ],
  coverageIntro:
    "We cover every part of Brentwood, including the CM13, CM14 and CM15 postcode districts. Neighbourhoods we move people in and out of include:",
  neighbourhoods:
    "Shenfield, Hutton, Hutton Mount, Warley, Great Warley, Brook Street, Pilgrims Hatch, Ingrave, West Horndon, Doddinghurst, Kelvedon Hatch and Mountnessing.",
  coverageOutro:
    "If you are in Blackmore, Stondon Massey, Navestock or Ingatestone on the edges of the borough, we cover that too. Tell us your postcode and we will confirm coverage and a price.",
  knowIntro:
    "Brentwood is a commuter town on the edge of Essex with an Elizabeth line station, big suburban houses and the M25 close by. Here is what our crews plan for.",
  knowBlocks: [
    {
      label: "Permits and parking",
      body: "On-street parking across Brentwood is managed by the South Essex Parking Partnership, which Chelmsford City Council administers, and permits are bought and managed through its MiPermit online account rather than as paper permits. Brentwood Borough Council runs the town centre car parks, including the Coptfold Road multi storey and Chatham Way. We check whether your street is in a permit zone, agree where the van will stand and arrange any dispensation or suspension needed through the partnership before the day.",
    },
    {
      label: "Roads and access",
      body: "The A12 bypasses Brentwood to the north and meets the M25 at junction 28, the Brook Street interchange, where the A1023 begins and runs north east through the town to rejoin the A12. The A128 runs through the town centre between Ongar and Orsett, and the High Street follows the line of the old Roman road. Junction 28 queues at busy times, so we plan arrival windows around it, and for Shenfield and Hutton we come in from the A129 side where that is quicker.",
    },
    {
      label: "Property types",
      body: "Brentwood is largely suburban. Hutton Mount is a private estate of tree lined avenues and very large detached houses close to Shenfield station, and Shenfield and Hutton add substantial family homes with drives. Warley has newer housing on the former Warley Hospital site at Clements Park, The Galleries and Mascalls Park, including converted period buildings with communal access. Pilgrims Hatch and the villages are a mix of estates, cottages and farmhouses.",
    },
    {
      label: "The London link",
      body: "Brentwood station is on the Elizabeth line, with services through Liverpool Street to Paddington and some trains continuing to Heathrow, and Shenfield adds fast Greater Anglia trains, so the town is full of London commuters. By road the M25 and the A12 give a direct run into east London, and because Brentwood and our Purfleet base are both north of the Thames there is no river crossing on the way. We plan London moves around junction 28 and the time of day.",
    },
  ],
  nearby: [
    { label: "Havering", href: "/areas/havering" },
    { label: "Harlow", href: "/areas/harlow", miles: "19 miles" },
    { label: "Chelmsford", href: "/areas/chelmsford" },
    { label: "Basildon", href: "/areas/basildon" },
  ],
  faqs: [
    {
      question: "Do you cover my Brentwood postcode?",
      answer:
        "Yes. We cover the whole of Brentwood borough, CM13, CM14 and CM15, from the town centre and Warley to Shenfield, Hutton, Pilgrims Hatch and the villages. Send your postcode and we will confirm coverage and a price.",
    },
    faqPrice("Brentwood"),
    {
      question: "Is there anywhere for a removal van to park near Brentwood High Street?",
      answer:
        "Central streets are the tightest part of Brentwood, with resident permit zones run by the South Essex Parking Partnership and council car parks rather than long free bays. We check your street in advance, agree the loading point with you and arrange a suspension through the partnership where one is needed. In Shenfield, Hutton and the villages a driveway usually gives direct access.",
    },
    {
      question: "Can you move me from Brentwood to London, or from London to Brentwood?",
      answer:
        "Yes, in both directions. You get a fixed written price after a free survey, one crew end to end, and the drive planned around the route, normally the A12 or the M25 from junction 28 into east London. There is no river crossing between Brentwood and our base, which keeps the timing predictable.",
    },
    faqInsured(),
    {
      question: "Can you move a large house in Hutton Mount or Shenfield?",
      answer:
        "Yes. Hutton Mount is a private estate of large detached homes on tree lined avenues, and Shenfield has similar substantial family houses, usually with a driveway for direct loading. We bring a bigger crew, full protection for furniture and floors, and plan the day around your completion time, with storage available if the dates do not line up.",
    },
  ],
};
