import type { Borough } from "@/lib/boroughs";
import { HERO_ALT, HERO_IMAGE, VALUE_LINE, faqInsured, faqPrice } from "@/lib/boroughs";

export const town: Borough = {
  slug: "maidenhead",
  name: "Maidenhead",
  kind: "town",
  county: "Berkshire",
  distanceFromLondon: "about 30 miles from central London",
  areaServedName: "Maidenhead, Berkshire",
  h1: "Removals in Maidenhead",
  subhead:
    "Experienced, insured man and van and removals in Maidenhead, from £55 per hour plus VAT, 7 days a week, with real local knowledge of permit streets, the A4 and the M4 junction and property across SL6.",
  metaTitle: "Removals Maidenhead | Man and Van from £55/hr, 7 Days",
  metaDescription:
    "Man and van and removals in Maidenhead (SL6) from £55/hr plus VAT. Insured, 7 days, permit streets, the High Street and new centre flats planned for.",
  postcodes: ["SL6"],
  heroImage: HERO_IMAGE,
  heroImageAlt: HERO_ALT,
  introLine: "An experienced and fully insured removals company that genuinely serves and knows Maidenhead.",
  valueLine: VALUE_LINE,
  localBody: [
    "Removals Nationwide moves homes, offices and single items across the whole of Maidenhead and the surrounding area, 7 days a week, from the houses of Cox Green, Furze Platt and Boyn Hill to the Victorian red brick streets of the older town, new flats at Chapel Arches and The Landing, and the river villages of Bray and Cookham. We are an experienced, insured removals company based in Purfleet, Essex, and we reach Maidenhead along the M25 and the M4. You get one team and one point of contact from quote to completion, and moves between Maidenhead and London, or long distance, get a fixed written price after a free survey.",
    "In Maidenhead our crews plan around the Royal Borough's resident parking streets, which are listed road by road rather than as broad zones, and we book a residential move bay suspension where a guaranteed space matters. The High Street is a pedestrian area with loading banned during the day, so central moves are staged from side streets or the Nicholsons, Grove Road and Hines Meadow car parks. We leave the M4 at junction 8/9 and come in on the A308(M) or the A404(M), and we treat the A4 over Maidenhead Bridge as a route to avoid at peak times.",
  ],
  coverageIntro:
    "We cover the whole of Maidenhead, including the SL6 postcode district, which stretches out to Cookham, Taplow and the villages west of town. Neighbourhoods we move people in and out of include:",
  neighbourhoods:
    "Boyn Hill, Cox Green, Furze Platt, Pinkneys Green, Braywick, Bray, Holyport, Woodlands Park, Cookham, Cookham Rise, Taplow and White Waltham.",
  coverageOutro:
    "If you are a little further out in Hurley, Littlewick Green or Burnham, we cover that too. Tell us your postcode and we will confirm coverage and a price.",
  knowIntro:
    "Maidenhead is a commuter town with a fast changing centre, permit streets near the station and easy driveway loading in the suburbs. Here is what our crews plan for.",
  knowBlocks: [
    {
      label: "Permit streets and suspensions",
      body: "The Royal Borough of Windsor and Maidenhead publishes resident parking street by street, so we check whether your road needs a permit. Where a reserved space is needed we apply for the council's suspension for a residential move, lodged at least 28 days ahead, including two weeks for the yellow notices, with bays measured at 5.5 metres. On a yellow line we ask for a dispensation, which lets the van stand but does not hold the space. Cox Green and Furze Platt streets are mostly unrestricted or have a driveway.",
    },
    {
      label: "Town centre, the A4 and the M4",
      body: "Maidenhead High Street is a pedestrian area with no waiting at any time and no loading during set daytime hours, and the council grants access permits for it only in exceptional circumstances, so central moves work from the surrounding streets or the Nicholsons, Grove Road, Hines Meadow and Stafferton Way car parks. The A4 runs through town and over the 1777 Maidenhead Bridge to Taplow. We arrive from M4 junction 8/9 on the A308(M) or the A404(M), which leads on to the A404 for Marlow and High Wycombe.",
    },
    {
      label: "Property types",
      body: "Maidenhead runs from the Victorian red brick streets near the centre to the suburban streets of Cox Green, Boyn Hill, Furze Platt and Pinkneys Green, where we usually load from a driveway or an unrestricted road. The centre is changing fast, with the Chapel Arches and The Landing apartment schemes and the Nicholsons shopping centre earmarked for redevelopment, so we plan for flat moves with lifts to book and managing agents to deal with. Bray, Holyport and Cookham are villages with narrower lanes.",
    },
    {
      label: "The London link",
      body: "Maidenhead is about 30 miles west of central London on the Great Western Main Line, and since the Elizabeth line reached the town we plan for commuters arriving from London or going back. The Marlow branch line also starts here. Our vans come round the M25 from Purfleet and along the M4, and into London we use the M4 to the A4 or the M25, depending on which side of the capital you are heading for.",
    },
  ],
  nearby: [
    { label: "Slough", href: "/areas/slough", miles: "7" },
    { label: "Windsor", href: "/areas/windsor", miles: "7" },
    { label: "Reading", href: "/areas/reading", miles: "13" },
    { label: "High Wycombe", href: "/areas/high-wycombe", miles: "10" },
  ],
  faqs: [
    {
      question: "Do you cover my Maidenhead postcode?",
      answer:
        "Yes. We cover the whole of the SL6 district, from Cox Green, Boyn Hill and Furze Platt to Pinkneys Green, Bray, Holyport, Cookham and Taplow, plus Hurley and Littlewick Green further west. Send your postcode and we will confirm coverage and a price.",
    },
    faqPrice("Maidenhead"),
    {
      question: "How do you handle parking for a move in Maidenhead town centre?",
      answer:
        "The High Street is a pedestrian area with no waiting at any time and loading banned during the day, so we stage central moves from the nearest open side street or one of the council car parks such as Nicholsons on The Broadway or Grove Road and plan the carry into the price. On resident permit streets we apply to the Royal Borough for a residential move suspension, which needs at least 28 days notice, so tell us your date as early as you can.",
    },
    {
      question: "Can you move me from Maidenhead to London, or from London to Maidenhead?",
      answer:
        "Yes, in either direction. You get a fixed written price after a free survey, one crew that loads in one place and unloads in the other, and the drive planned around the route, usually the M4 from junction 8/9 and then the A4 or the M25 depending on where in London you are going.",
    },
    faqInsured(),
    {
      question: "Can you move me into a new apartment at The Landing or Chapel Arches?",
      answer:
        "Yes. The new blocks in the centre have lifts, loading areas and managing agents with their own rules, and they sit right by the High Street pedestrian area. We ask you for the agent's contact, book the lift and a loading slot, protect the lobby and lift, and bring the right crew size so the move is finished inside the booked window.",
    },
  ],
};
