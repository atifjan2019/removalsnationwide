import type { Borough } from "@/lib/boroughs";
import { HERO_ALT, HERO_IMAGE, VALUE_LINE, faqInsured, faqPrice } from "@/lib/boroughs";

export const town: Borough = {
  slug: "staines-upon-thames",
  name: "Staines-upon-Thames",
  kind: "town",
  county: "Surrey",
  distanceFromLondon: "about 20 miles from central London",
  areaServedName: "Staines-upon-Thames, Surrey",
  h1: "Removals in Staines-upon-Thames",
  subhead:
    "Experienced, insured man and van and removals in Staines-upon-Thames, from £55 per hour plus VAT, 7 days a week, with real local knowledge of parking, access and property across TW18 and TW19.",
  metaTitle: "Removals Staines-upon-Thames | Man and Van from £55/hr",
  metaDescription:
    "Insured removals and man and van in Staines (TW18, TW19) from £55/hr plus VAT, 7 days a week. Permit bays handled, fixed prices for London moves.",
  postcodes: ["TW18", "TW19"],
  heroImage: HERO_IMAGE,
  heroImageAlt: HERO_ALT,
  introLine: "An experienced and fully insured removals company that genuinely serves and knows Staines-upon-Thames.",
  valueLine: VALUE_LINE,
  localBody: [
    "Removals Nationwide moves homes, offices and single items across the whole of Staines-upon-Thames and the surrounding area, 7 days a week, from the 1930s roads south of the centre and the post war streets off Kingston Road to the riverside at Laleham, Egham Hythe over the bridge, and Stanwell and Stanwell Moor towards Heathrow. We are an experienced, insured removals company based in Purfleet, Essex, reaching the town round the M25 to junction 13 and the A30, with one team and one point of contact from quote to completion. Moves between Staines-upon-Thames and London, or long distance, get a fixed written price after a free survey.",
    "Staines sits where the Colne meets the Thames, and much of the town is built on low gravel islands barely above the floodplain, with a High Street largely pedestrianised since 2002 and the Elmsleigh and Two Rivers shopping centres filling the middle, so our crews load from the roads behind the shops. Spelthorne Borough Council runs the car parks, but on street permits, suspensions and waivers are issued by Surrey County Council through its contractor NSL, and a suspension needs ten days' notice. The A30 links the town to the M25 at junction 13, the A308 runs to the M3, and Staines Bridge carries traffic over to Egham Hythe.",
  ],
  coverageIntro:
    "We cover the whole of Staines-upon-Thames and the villages around it, including the TW18 and TW19 postcodes. Areas we move people in and out of include:",
  neighbourhoods:
    "Knowle Green, Moormede, Laleham, Egham Hythe, Stanwell, Stanwell Moor, Wraysbury, Hythe End, Sunnymeads and Egham.",
  coverageOutro:
    "We also cover Ashford in TW15 and Sunbury to the east, Chertsey and Virginia Water to the south and west, and Datchet over the Berkshire border. Tell us your postcode and we will confirm coverage and a price.",
  knowIntro:
    "Staines-upon-Thames is a riverside town hemmed in by the Thames, the reservoirs and Heathrow, with a pedestrianised centre and mostly interwar and post war housing. Here is what our crews plan for.",
  knowBlocks: [
    {
      label: "Town centre and the river",
      body: "Much of the High Street has been pedestrianised since 2002, and the Elmsleigh Centre, open since 1980, and the Two Rivers centre, built in 2002 on the old linoleum works, take up the heart of town. Flats around the centre therefore load from the back streets or a car park entrance that we agree in advance. The town also floods; the Thames came up badly in 2014, and the riverside roads at Laleham and towards Egham Hythe are ones we check for closures in a wet winter.",
    },
    {
      label: "Parking permits and waivers",
      body: "Spelthorne Borough Council manages the town's car parks, but permits for on street bays, bay suspensions and waivers are the business of Surrey County Council as highway authority, administered through its contractor NSL. For a move in a permit bay we apply to suspend it at least ten days ahead, which is the notice the county normally asks for; on a single yellow line a waiver for the named van is usually enough, and we confirm which applies to your street before the date is fixed.",
    },
    {
      label: "Property types",
      body: "Staines kept its medieval street plan around the High Street until the bridge moved in the 1830s, and artisans' cottages followed along London Road and Kingston Road from the mid nineteenth century. The roads south and south east of the centre were laid out in the early 1930s, and post war housing on Commercial Road and between Kingston Road and Elizabeth Avenue was built for Heathrow workers. There are plenty of flats in the central ward too, so we size the van and crew to the property.",
    },
    {
      label: "Roads and the London link",
      body: "The A30 links Staines to the M25 at junction 13 and runs east towards Hounslow and west London, and the A308 heads to the M3. Staines station has South Western Railway trains to London Waterloo via Clapham Junction, plus services to Windsor and to Reading via Ascot, so London moves are a big part of what we do here. For a London move we take the A30 or the M25, with one crew at both ends and a fixed written price after a free survey.",
    },
  ],
  nearby: [
    { label: "Hounslow", href: "/areas/hounslow" },
    { label: "Windsor", href: "/areas/windsor", miles: "about 6 miles" },
    { label: "Slough", href: "/areas/slough" },
    { label: "Woking", href: "/areas/woking" },
  ],
  faqs: [
    {
      question: "Do you cover my Staines-upon-Thames postcode?",
      answer:
        "Yes. We cover all of Staines-upon-Thames in TW18 and TW19, from Knowle Green and Moormede to Laleham, Egham Hythe, Stanwell, Stanwell Moor, Wraysbury, Hythe End and Sunnymeads, plus Ashford in TW15 next door. Send your postcode and we will confirm coverage and a price.",
    },
    faqPrice("Staines-upon-Thames"),
    {
      question: "Can a removal van get close to the flats in Staines town centre?",
      answer:
        "Yes, with a plan. The High Street is largely pedestrianised and the Elmsleigh and Two Rivers centres take up the middle of town, so we agree a stop on a back street or at a car park entrance before the day. If that stop is a permit or time limited bay, Surrey County Council can suspend it with at least ten days' notice; if it is a single yellow line we arrange a waiver for the van. We bring trolleys for the walk from the stop to your door.",
    },
    {
      question: "Can you move me from Staines-upon-Thames to London, or from London to Staines-upon-Thames?",
      answer:
        "Yes. Staines-upon-Thames is about 20 miles from central London, with the A30 running east towards Hounslow and the M25 at junction 13 for everything else. You get a fixed written price after a free survey, one crew end to end, and the drive planned around the route and the time of day on the A30.",
    },
    faqInsured(),
    {
      question: "Do you move people in Stanwell and Stanwell Moor near Heathrow?",
      answer:
        "Yes. Stanwell and Stanwell Moor are in TW19 and we cover them along with Wraysbury, Hythe End and Sunnymeads on the Berkshire side. The roads around the airport perimeter and the reservoirs are busy at shift change times, so we plan the arrival around that, and we confirm where the van can stand on the estate roads before the day so the crew can start straight away.",
    },
  ],
};
