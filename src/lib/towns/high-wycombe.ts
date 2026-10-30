import type { Borough } from "@/lib/boroughs";
import { HERO_ALT, HERO_IMAGE, VALUE_LINE, faqInsured, faqPrice } from "@/lib/boroughs";

export const town: Borough = {
  slug: "high-wycombe",
  name: "High Wycombe",
  kind: "town",
  county: "Buckinghamshire",
  distanceFromLondon: "about 30 miles from central London",
  areaServedName: "High Wycombe, Buckinghamshire",
  h1: "Removals in High Wycombe",
  subhead:
    "Experienced, insured man and van and removals in High Wycombe, from £55 per hour plus VAT, 7 days a week, with real local knowledge of the valley hills, permit streets and property across HP10, HP11, HP12, HP13, HP14 and HP15.",
  metaTitle: "Removals High Wycombe | Man and Van from £55/hr, 7 Days",
  metaDescription:
    "Man and van and removals in High Wycombe (HP10 to HP15) from £55/hr plus VAT. Insured, 7 days, with valley roads, permit streets and M40 access planned.",
  postcodes: ["HP10", "HP11", "HP12", "HP13", "HP14", "HP15"],
  heroImage: HERO_IMAGE,
  heroImageAlt: HERO_ALT,
  introLine: "An experienced and fully insured removals company that genuinely serves and knows High Wycombe.",
  valueLine: VALUE_LINE,
  localBody: [
    "Removals Nationwide moves homes, offices and single items across the whole of High Wycombe and the surrounding area, 7 days a week, from the Victorian terraces in the Wye valley bottom and period houses on Amersham Hill to the estates of Castlefield, Micklefield and Totteridge on the valley sides and the villages of Hazlemere and Downley. We are an experienced, insured removals company based in Purfleet, Essex, and we reach High Wycombe on the M25 and the M40. You get one team and one point of contact from quote to completion, and moves between High Wycombe and London, or long distance, get a fixed written price after a free survey.",
    "In High Wycombe our crews plan for hills first. The town sits in the River Wye valley with housing climbing both sides, so steep drives, stepped front gardens and tight turning are normal and we bring the right size van rather than the biggest. Buckinghamshire Council runs on-street resident permits in specific zones, and its bay suspensions need around four weeks notice. The High Street has been pedestrianised since the early 1990s, so central moves are worked from the streets around the Eden Centre and Abbey Way.",
  ],
  coverageIntro:
    "We cover the whole of High Wycombe, including the HP10, HP11, HP12, HP13, HP14 and HP15 postcode districts. Neighbourhoods we move people in and out of include:",
  neighbourhoods:
    "Downley, Totteridge, Terriers, Hazlemere, Tylers Green, Loudwater, Flackwell Heath, Wooburn Green, Castlefield, Micklefield, Sands, Booker, Cressex and Wycombe Marsh.",
  coverageOutro:
    "If you are further into the Chilterns at West Wycombe, Lane End, Stokenchurch, Hughenden Valley, Penn or Holmer Green, we cover that too. Tell us your postcode and we will confirm coverage and a price.",
  knowIntro:
    "High Wycombe is a valley town where the hills shape every move and the M40 makes the run from London quick. Here is what our crews plan for.",
  knowBlocks: [
    {
      label: "Hills, access and van size",
      body: "High Wycombe lies in the valley of the River Wye, and the housing runs up both slopes, so roads like Marlow Hill and Amersham Hill are steep and many homes have a stepped approach or a sloping drive. We survey the access before we book, choose a van that can turn and park on your street, and add crew where the carry is long. In the valley bottom the Victorian terraces are tight with on-street parking, so we time arrival to find a space close to your door.",
    },
    {
      label: "Permits, suspensions and the town centre",
      body: "Buckinghamshire Council issues on-street resident permits for specific zones, which it lists in its published traffic orders, and sells season tickets for its car parks. We check your street against the council's traffic orders and, where a guaranteed space is needed, apply for a bay suspension, which the council asks to receive at least 28 days before the move. The High Street was pedestrianised in the early 1990s and the Eden Centre runs beneath the Abbey Way flyover, so central moves are staged from the surrounding streets.",
    },
    {
      label: "The M40, the A40 and the A404",
      body: "The M40 serves the town at junction 3, which only connects towards London, for Loudwater and the east side, and at junction 4 at Handy Cross for Cressex, Booker and the south. From Handy Cross the A4010 runs through Cressex and Sands to the A40 on West Wycombe Road, the A404 heads north east to Amersham and south to Marlow, and the A40 runs to Beaconsfield and Oxford. We pick the junction for your side of town so the van avoids crossing the valley in traffic.",
    },
    {
      label: "Property types and the London link",
      body: "The valley bottom has compact Victorian terraces, the hillsides carry large post-war estates such as Castlefield and Micklefield, Amersham Hill has big period houses, and recent schemes have added blocks of flats on former industrial land, with Buckinghamshire New University adding student housing near Queen Alexandra Road. Hazlemere grew fast in the 1960s and 1970s with family houses and driveways. High Wycombe station is on the Chiltern Main Line to Marylebone, so we plan for London moves in both directions.",
    },
  ],
  nearby: [
    { label: "Maidenhead", href: "/areas/maidenhead", miles: "10" },
    { label: "Aylesbury", href: "/areas/aylesbury", miles: "16" },
    { label: "Slough", href: "/areas/slough", miles: "13" },
    { label: "Hillingdon", href: "/areas/hillingdon" },
  ],
  faqs: [
    {
      question: "Do you cover my High Wycombe postcode?",
      answer:
        "Yes. We cover the whole of High Wycombe across HP10, HP11, HP12, HP13, HP14 and HP15, from Downley, Totteridge and Hazlemere to Cressex, Booker, Loudwater and Flackwell Heath, plus the Chiltern villages such as Lane End, Stokenchurch and West Wycombe. Send your postcode and we will confirm coverage and a price.",
    },
    faqPrice("High Wycombe"),
    {
      question: "Can your van get up the hill to my house in High Wycombe?",
      answer:
        "Yes. Steep roads and sloping drives are the norm on both sides of the Wye valley, so we ask about the approach at survey, send a van that can park and turn on your street rather than the largest we have, and add a crew member where the carry from the road is long or stepped. If a bigger load needs a larger vehicle we plan a safe spot for it lower down and shuttle with a smaller van.",
    },
    {
      question: "Can you move me from High Wycombe to London, or from London to High Wycombe?",
      answer:
        "Yes, in either direction. You get a fixed written price after a free survey, one crew that loads in one place and unloads in the other, and the drive planned around the route, usually the M40 from junction 3 or 4 and then the A40 or the M25 depending on where in London you are going.",
    },
    faqInsured(),
    {
      question: "Do you move students and staff for Buckinghamshire New University?",
      answer:
        "Yes. We handle single rooms, shared houses and staff relocations around the Queen Alexandra Road campus and the student housing nearby, and term start and term end dates fill up fast. For a student room a one mover man and van with the two hour minimum is usually enough; for a shared house we send a bigger crew. Book early for September and June.",
    },
  ],
};
