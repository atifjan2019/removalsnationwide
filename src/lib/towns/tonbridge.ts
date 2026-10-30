import type { Borough } from "@/lib/boroughs";
import { HERO_ALT, HERO_IMAGE, VALUE_LINE, faqInsured, faqPrice } from "@/lib/boroughs";

export const town: Borough = {
  slug: "tonbridge",
  name: "Tonbridge",
  kind: "town",
  county: "Kent",
  distanceFromLondon: "about 40 miles from central London",
  areaServedName: "Tonbridge, Kent",
  h1: "Removals in Tonbridge",
  subhead:
    "Experienced, insured man and van and removals in Tonbridge, from £55 per hour plus VAT, 7 days a week, with real local knowledge of parking, access and property across TN9, TN10 and TN11.",
  metaTitle: "Removals in Tonbridge, Kent | Man and Van from £55/hr",
  metaDescription:
    "Man and van and removals in Tonbridge (TN9, TN10, TN11) from £55/hr plus VAT. Insured, 7 days a week, with real knowledge of the High Street and the A21.",
  postcodes: ["TN9", "TN10", "TN11"],
  heroImage: HERO_IMAGE,
  heroImageAlt: HERO_ALT,
  introLine: "An experienced and fully insured removals company that genuinely serves and knows Tonbridge.",
  valueLine: VALUE_LINE,
  localBody: [
    "Removals Nationwide moves homes, offices and single items across the whole of Tonbridge and the surrounding area, 7 days a week, from the Victorian terraces around Barden Park to the post-war streets of Trench Wood and Higham Wood and out to Hildenborough and Hadlow. We are an experienced, insured removals company based in Purfleet, Essex, reaching Tonbridge over the Dartford Crossing and down the A21. One team covers your man and van job, house or office move, packing and storage, and you keep one point of contact from quote to completion. Moves between Tonbridge and London, or long distance, get a fixed written price after a free survey.",
    "Our crews plan around a long High Street with short-stay pay bays on Avebury Avenue, River Lawn Road and the High Street itself, and most town centre parking in council car parks. On-street bays are enforced by Tonbridge and Malling Borough Council, so we check the rules outside both addresses before the day. The A21 bypass, the A26 and the A227 carry traffic in and out, and the Medway and its floodplain decide which roads cross the town, so a move from north to south funnels over the river. Many homes to the north have driveways, so those loads are straightforward.",
  ],
  coverageIntro:
    "We cover the whole of Tonbridge and the villages around it, including the TN9, TN10 and TN11 postcodes. Areas we move people in and out of include:",
  neighbourhoods:
    "Tonbridge town centre, Barden Park, Trench Wood, Cage Green, Higham Wood, Vauxhall, Dryhill, Hildenborough, Hadlow, Tudeley, Leigh and Penshurst.",
  coverageOutro:
    "If your home is out towards Hildenborough and Sevenoaks on the A21, or east along the A26 towards Hadlow, we cover that too. Tell us your postcode and we will confirm coverage and a price.",
  knowIntro:
    "Tonbridge is a market town on the Medway with a busy commuter station, a long High Street and mostly post-war suburbs to the north. Here is what our crews plan for.",
  knowBlocks: [
    {
      label: "Parking and loading",
      body: "Tonbridge and Malling Borough Council enforces on-street parking in the town and runs the council car parks. Close to the High Street the kerbside space is mostly short-stay pay and display with no return rules, including the bays on Avebury Avenue, River Lawn Road and the High Street near Castle Street, so we plan the load from the nearest legal spot and agree with the council in advance where a move needs the van outside the door. Further out, most streets are unrestricted.",
    },
    {
      label: "Roads and access",
      body: "The A21 passes the town on a bypass, the A26 runs through towards Maidstone and the A227 arrives from the north along Shipbourne Road, with the B245 Tonbridge Road coming in from Hildenborough. The High Street crosses the Medway at the Big Bridge, so moves between the north and south of town cross the river at the same point. Our crews time the drive to avoid the school and station peaks and route larger vans around the narrow centre.",
    },
    {
      label: "Property types",
      body: "The streets around Barden Park and Douglas Road are Victorian railway terraces with kerbside parking and narrow frontages. Trench Wood, Cage Green and Higham Wood to the north are largely post-war family houses, many with driveways, and the estates off Brook Street to the south west use Radburn layouts where the front door faces a path rather than the road. We measure the walk from van to door and bring the right crew for each.",
    },
    {
      label: "The London link",
      body: "Tonbridge sits about 40 miles from central London by road, and its station is a junction for lines to London, Ashford, Hastings and Redhill, which is why so many moves here involve commuters arriving from the capital. From our Purfleet base we come over the Dartford Crossing, where Dart Charge applies, and down the A21, and that drive is planned into every fixed price for a move between Tonbridge and London.",
    },
  ],
  nearby: [
    { label: "Tunbridge Wells", href: "/areas/tunbridge-wells", miles: "7" },
    { label: "Sevenoaks", href: "/areas/sevenoaks" },
    { label: "Maidstone", href: "/areas/maidstone", miles: "14" },
  ],
  faqs: [
    {
      question: "Do you cover my Tonbridge postcode?",
      answer:
        "Yes. We cover the whole of Tonbridge, including TN9 in the centre and south, TN10 to the north around Higham Wood and TN11 for Hildenborough, Hadlow, Tudeley and Penshurst. Send your postcode and we will confirm coverage and a price.",
    },
    faqPrice("Tonbridge"),
    {
      question: "Can you park a removal van near Tonbridge High Street?",
      answer:
        "Usually, with planning. Streets close to the High Street are mostly short-stay pay bays enforced by Tonbridge and Malling Borough Council, so we identify the nearest legal loading point before the day and, where the move needs the van outside the door, agree the arrangement with the council in advance. Away from the centre most streets are unrestricted and many homes have driveways.",
    },
    {
      question: "Can you move me from Tonbridge to London, or from London to Tonbridge?",
      answer:
        "Yes, in both directions. You get a fixed written price after a free survey, one crew handles the move end to end, and we plan the drive around the A21, the M25 and the Dartford Crossing so the van arrives when the keys do.",
    },
    faqInsured(),
    {
      question: "Do you move people to the villages around Tonbridge such as Hildenborough and Hadlow?",
      answer:
        "Yes. Hildenborough, Hadlow, Leigh, Penshurst and Tudeley are all within our Tonbridge coverage. Village lanes and older cottages can mean a longer carry from the van, so we check access on the survey and bring the right size of vehicle for the street.",
    },
  ],
};
