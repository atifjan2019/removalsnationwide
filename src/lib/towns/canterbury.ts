import type { Borough } from "@/lib/boroughs";
import { HERO_ALT, HERO_IMAGE, VALUE_LINE, faqInsured, faqPrice } from "@/lib/boroughs";

export const town: Borough = {
  slug: "canterbury",
  name: "Canterbury",
  kind: "town",
  county: "Kent",
  distanceFromLondon: "about 60 miles from central London",
  areaServedName: "Canterbury, Kent",
  h1: "Removals in Canterbury",
  subhead:
    "Experienced, insured man and van and removals in Canterbury, from £55 per hour plus VAT, 7 days a week, with real local knowledge of parking, access and property across CT1, CT2, CT3 and CT4.",
  metaTitle: "Removals Canterbury | Man and Van from £55/hr | Kent",
  metaDescription:
    "Man and van and removals in Canterbury (CT1 to CT4) from £55/hr plus VAT. Insured, 7 days a week, walled centre, ring road and student moves planned for.",
  postcodes: ["CT1", "CT2", "CT3", "CT4"],
  heroImage: HERO_IMAGE,
  heroImageAlt: HERO_ALT,
  introLine: "An experienced and fully insured removals company that genuinely serves and knows Canterbury.",
  valueLine: VALUE_LINE,
  localBody: [
    "Removals Nationwide moves homes, offices and single items across the whole of Canterbury and the surrounding area, 7 days a week, from timber-framed houses inside the walls and terraces in Wincheap to student lets in Hales Place and family homes at Sturry and Bridge. We are an experienced, insured removals company based in Purfleet, Essex, and Canterbury is the end of our A2 and M2 run into East Kent. One crew runs your man and van job, house or office move, packing and storage, with one contact from quote to completion. Moves between Canterbury and London, or long distance, get a fixed written price after a free survey.",
    "Canterbury asks more planning of a removals crew than most towns its size. The medieval centre is pedestrianised inside the walls, the ring road carries everything around it, and the inner streets fall into residents' parking zones run by Canterbury City Council, some of them already full. Three universities mean a rush of shared-house moves in September and June, and the older houses have low doors, narrow stairs and no off-street parking. Our crews fix the loading point before the day, time central moves for the hours when vehicles can enter, and agree with the council how the van will stand on a zone street.",
  ],
  coverageIntro:
    "We cover the whole of Canterbury and the villages around it, including the CT1, CT2, CT3 and CT4 postcodes. Areas we move people in and out of include:",
  neighbourhoods:
    "Canterbury city centre, St Dunstan's, Northgate, St Stephen's, Hales Place, Wincheap, Thanington, South Canterbury, St Martin's, Harbledown, Rough Common, Sturry, Blean, Bridge and Chartham.",
  coverageOutro:
    "If your home is further out towards Littlebourne and Wingham in CT3, or Bekesbourne and Lower Hardres in CT4, we cover those too. Tell us your postcode and we will confirm coverage and a price.",
  knowIntro:
    "Canterbury is a walled cathedral city with a pedestrianised core, a ring road and a large student population. Here is what our crews plan for.",
  knowBlocks: [
    {
      label: "The walled centre and parking",
      body: "Canterbury's historic core is pedestrianised inside the city walls, so a move to a flat above a High Street shop is timed around the hours when vehicles are allowed in and often loaded from the ring road side. Canterbury City Council runs residents' parking zones on the inner streets, looked up by road name, and some zones are full because of demand, so we check which zone your street falls in and arrange the right permission before the day rather than hoping for a space.",
    },
    {
      label: "Roads and access",
      body: "The A2 links Canterbury to the M2 at junction 7 and on towards London, the A28 forms part of the ring road before leaving through Wincheap and Thanington, and the A290 heads north west towards Whitstable. Park and ride sites at Wincheap, New Dover Road and Sturry Road sit on the main approaches. Our crews route around the city walls rather than through them and plan for the ring road rather than the lanes inside it.",
    },
    {
      label: "Property types",
      body: "Inside the walls are timber-framed houses with low doors and steep stairs, so protection and patience matter. St Dunstan's, Northgate and Wincheap have terraces with kerbside parking, Hales Place and St Stephen's house many students from the University of Kent and Canterbury Christ Church, so there are plenty of shared houses and term-time moves, and Harbledown, Rough Common and the villages in CT3 and CT4 bring detached houses and cottages on lanes where the carry from the van is longer.",
    },
    {
      label: "The London link",
      body: "Canterbury is about 60 miles from central London by road and has two stations, Canterbury West and Canterbury East, with high speed trains from Canterbury West to St Pancras, so plenty of households here split their week between the city and the capital. From Purfleet our crews use the Dartford Crossing, where Dart Charge applies, then the A2 and M2, and we plan that drive into a fixed written price for every move between Canterbury and London.",
    },
  ],
  nearby: [
    { label: "Ashford", href: "/areas/ashford", miles: "15" },
    { label: "Medway", href: "/areas/medway", miles: "30" },
    { label: "Maidstone", href: "/areas/maidstone" },
  ],
  faqs: [
    {
      question: "Do you cover my Canterbury postcode?",
      answer:
        "Yes. We cover the whole of Canterbury, including CT1 for the city centre, Northgate, South Canterbury and Thanington, CT2 for Hales Place, St Stephen's, St Dunstan's, Harbledown, Sturry and Blean, CT4 for Chartham, Bridge and Nackington, and the villages of CT3. Send your postcode and we will confirm coverage and a price.",
    },
    faqPrice("Canterbury"),
    {
      question: "Can you get a removal van inside the Canterbury city walls?",
      answer:
        "Yes, with timing. The centre is pedestrianised, so we load during the hours vehicles are allowed in or work from the nearest street on the ring road and carry through. For inner streets in a residents' parking zone we check the restriction on the survey and arrange the right permission with Canterbury City Council before the day.",
    },
    {
      question: "Can you move me from Canterbury to London, or from London to Canterbury?",
      answer:
        "Yes, in both directions. You get a fixed written price after a free survey, one crew handles the move end to end, and we plan the drive around the A2, the M2 and the Dartford Crossing so the van arrives when you do.",
    },
    faqInsured(),
    {
      question: "Do you do student moves in Canterbury?",
      answer:
        "Yes. We move students and shared houses in Hales Place, St Stephen's and around the universities, from a single room by man and van to a whole house at the end of a tenancy. September and June are busy, so book early, and we can store belongings over the summer if the next tenancy has not started.",
    },
  ],
};
