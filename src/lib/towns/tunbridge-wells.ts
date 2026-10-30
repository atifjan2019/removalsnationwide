import type { Borough } from "@/lib/boroughs";
import { HERO_ALT, HERO_IMAGE, VALUE_LINE, faqInsured, faqPrice } from "@/lib/boroughs";

export const town: Borough = {
  slug: "tunbridge-wells",
  name: "Tunbridge Wells",
  kind: "town",
  county: "Kent",
  distanceFromLondon: "about 45 miles from central London",
  areaServedName: "Tunbridge Wells, Kent",
  h1: "Removals in Tunbridge Wells",
  subhead:
    "Experienced, insured man and van and removals in Tunbridge Wells, from £55 per hour plus VAT, 7 days a week, with real local knowledge of parking, access and property across TN1, TN2, TN3 and TN4.",
  metaTitle: "Removals Tunbridge Wells | Man and Van from £55/hr",
  metaDescription:
    "Man and van and removals in Tunbridge Wells (TN1 to TN4) from £55/hr plus VAT. Insured, 7 days a week, permit zones and hilly streets planned for.",
  postcodes: ["TN1", "TN2", "TN3", "TN4"],
  heroImage: HERO_IMAGE,
  heroImageAlt: HERO_ALT,
  introLine: "An experienced and fully insured removals company that genuinely serves and knows Tunbridge Wells.",
  valueLine: VALUE_LINE,
  localBody: [
    "Removals Nationwide moves homes, offices and single items across the whole of Tunbridge Wells and the surrounding area, 7 days a week, from Decimus Burton villas in Calverley Park and flats near the Pantiles to family houses in Hawkenbury and cottages out at Langton Green. We are an experienced, insured removals company based in Purfleet, Essex, covering Tunbridge Wells with the rest of West Kent. One crew handles your man and van job, house or office move, packing and storage, and you deal with one person from quote to completion. Moves between Tunbridge Wells and London, or long distance, get a fixed written price after a free survey.",
    "What our crews plan for in Tunbridge Wells is the combination of hills and permit zones. Tunbridge Wells Borough Council runs resident parking zones across the streets around the town centre, and we agree with the council in advance how the van will stand where a zone street needs it. The town sits on the northern edge of the High Weald, so streets climb steeply and period homes have front steps. The A26 runs through the town, the A264 and A267 come in from the west and south, and the central station and the High Street are tight for large vehicles, so we size the van to the street.",
  ],
  coverageIntro:
    "We cover the whole of Tunbridge Wells and the villages around it, including the TN1, TN2, TN3 and TN4 postcodes. Areas we move people in and out of include:",
  neighbourhoods:
    "Tunbridge Wells town centre, the Pantiles, Calverley Park, High Brooms, Hawkenbury, Rusthall, Southborough, Sherwood, Ramslye, Pembury, Langton Green, Speldhurst, Groombridge and Frant.",
  coverageOutro:
    "If your home is on the edge of town towards Tunbridge Wells Hospital at Pembury, Bidborough or the Sussex border at Frant and Groombridge, we cover that too. Tell us your postcode and we will confirm coverage and a price.",
  knowIntro:
    "Tunbridge Wells is a hilly spa town with resident permit zones around the centre and a wealth of period housing. Here is what our crews plan for.",
  knowBlocks: [
    {
      label: "Resident parking zones",
      body: "Tunbridge Wells Borough Council runs resident parking zones covering many of the streets around the town centre, and demand for kerbside space there is high. Where your street sits in a zone we check on the survey whether the van can stand legally outside the door, and if it cannot we arrange the right permission with the council, which needs notice, and build that into the plan rather than leaving it to the day. Outside the zones, Southborough, Rusthall and the outer estates are far easier to load from.",
    },
    {
      label: "Hills, roads and access",
      body: "The town sits on the northern edge of the High Weald, a ridge of hard sandstone, so many streets climb and the crew plans for ramps and steps. The A26 runs through from Tonbridge and Southborough and on south into Sussex, the A264 comes in from East Grinstead and the A267 leaves south towards Hailsham, while the A21 passes to the east. The station is at the end of the High Street, where the streets are narrow and busy, and High Brooms has its own station to the north.",
    },
    {
      label: "Property types",
      body: "Calverley Park is a Decimus Burton scheme of villas set around a park, and the Pantiles has its colonnaded walk, so moves here mean period doors, stairs and careful protection of old interiors. Sherwood and Ramslye are post-war estates with wider roads and shorter carries, High Brooms and Hawkenbury mix older terraces with newer homes, and the newer estates on the edge of town add modern family houses with driveways. We measure the carry and bring the right crew for each.",
    },
    {
      label: "The London link",
      body: "Tunbridge Wells is about 45 miles from central London by road. Southeastern trains run from the central station to Charing Cross, with additional peak services to Cannon Street, so many moves here are London households heading for the Weald. From Purfleet our crews cross the Dartford Crossing, where Dart Charge applies, and come down the A21 and A26, and that route is priced into a fixed written quote for every move between the town and the capital.",
    },
  ],
  nearby: [
    { label: "Tonbridge", href: "/areas/tonbridge", miles: "7" },
    { label: "Sevenoaks", href: "/areas/sevenoaks" },
    { label: "Maidstone", href: "/areas/maidstone", miles: "18" },
  ],
  faqs: [
    {
      question: "Do you cover my Tunbridge Wells postcode?",
      answer:
        "Yes. We cover the whole of Tunbridge Wells, including TN1 in the centre, TN2 to the south and east with Pembury, TN3 for Langton Green, Speldhurst, Groombridge and Frant, and TN4 to the north with Rusthall and Southborough. Send your postcode and we will confirm coverage and a price.",
    },
    faqPrice("Tunbridge Wells"),
    {
      question: "My street is in a Tunbridge Wells permit zone. Can you still park the van?",
      answer:
        "Yes. Tunbridge Wells Borough Council runs the zones, so where your street needs the van outside the door we check the restriction on the survey and arrange the right permission with the council, with the notice it requires, before the day. Where the kerb cannot be used we load from the nearest legal spot and plan the carry. We confirm the arrangement in writing before you book.",
    },
    {
      question: "Can you move me from Tunbridge Wells to London, or from London to Tunbridge Wells?",
      answer:
        "Yes, in both directions. You get a fixed written price after a free survey, one crew handles the move end to end, and we plan the drive around the A21, the A26 and the Dartford Crossing so the day runs to time at both ends.",
    },
    faqInsured(),
    {
      question: "Can you move a period villa in Calverley Park or near the Pantiles?",
      answer:
        "Yes. The Calverley Park villas are Decimus Burton designs and the streets around the Pantiles are narrow, so we protect floors, banisters and doorways, choose a van that fits the road and plan the carry on the survey. We bring the crew size the house needs rather than the smallest that will do.",
    },
  ],
};
