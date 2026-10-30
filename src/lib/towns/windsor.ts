import type { Borough } from "@/lib/boroughs";
import { HERO_ALT, HERO_IMAGE, VALUE_LINE, faqInsured, faqPrice } from "@/lib/boroughs";

export const town: Borough = {
  slug: "windsor",
  name: "Windsor",
  kind: "town",
  county: "Berkshire",
  distanceFromLondon: "about 25 miles from central London",
  areaServedName: "Windsor, Berkshire",
  h1: "Removals in Windsor",
  subhead:
    "Experienced, insured man and van and removals in Windsor, from £55 per hour plus VAT, 7 days a week, with real local knowledge of resident parking streets, the castle town centre and property across SL4.",
  metaTitle: "Removals Windsor | Man and Van from £55/hr, 7 Days",
  metaDescription:
    "Man and van and removals in Windsor (SL4) from £55/hr plus VAT. Insured, 7 days, with resident parking, bay suspensions and town centre access handled.",
  postcodes: ["SL4"],
  heroImage: HERO_IMAGE,
  heroImageAlt: HERO_ALT,
  introLine: "An experienced and fully insured removals company that genuinely serves and knows Windsor.",
  valueLine: VALUE_LINE,
  localBody: [
    "Removals Nationwide moves homes, offices and single items across the whole of Windsor and the surrounding area, 7 days a week, from the streets below the castle and the permit roads around Alma Road and Arthur Road to the semi detached estates of Dedworth, the village streets of Clewer, Eton across the river and the village of Datchet. We are an experienced, insured removals company based in Purfleet, Essex, and we reach Windsor along the M25 and the M4. You get one team and one point of contact from quote to completion, and moves between Windsor and London, or long distance, get a fixed written price after a free survey.",
    "In Windsor our crews plan around the Royal Borough of Windsor and Maidenhead's street by street resident parking, where a single road can be split by house number, and we lodge a residential move bay suspension with the council well ahead where a reserved space is needed. Peascod Street is a pedestrian area with no waiting at any time and timed loading bans, so moves on or next to it are worked from the surrounding streets. We come off the M4 at junction 6 on the A332 and avoid the castle approaches at the busiest visitor times.",
  ],
  coverageIntro:
    "We cover the whole of Windsor, including the SL4 postcode district, which also takes in Eton and the villages around the town. Neighbourhoods we move people in and out of include:",
  neighbourhoods:
    "Windsor town centre, Clewer, Dedworth, Old Windsor, Eton, Eton Wick, Dorney, Oakley Green and Winkfield.",
  coverageOutro:
    "If you are just outside town in Datchet, Ascot, Sunninghill or Sunningdale, we cover that too. Tell us your postcode and we will confirm coverage and a price.",
  knowIntro:
    "Windsor is a compact castle town where parking rules change street by street and visitor traffic shapes the timing. Here is what our crews plan for.",
  knowBlocks: [
    {
      label: "Resident parking and bay suspensions",
      body: "The Royal Borough of Windsor and Maidenhead lists resident parking by individual street, so one road can need a permit while the next does not, and Arthur Road is even split by house number. We look your street up before the day. Where a reserved space is needed the council offers a suspension for a residential move, which the resident or the removal company can apply for, counts bays in 5.5 metre lengths and needs at least 28 days notice so the yellow notices can go up.",
    },
    {
      label: "Peascod Street and the town centre",
      body: "Peascod Street, the main shopping street, is a pedestrian area with no waiting at any time and loading banned during set hours, and the council issues access permits for it only in exceptional circumstances. Moves on or beside it are worked from the surrounding streets with a longer carry, which we price in. The council car parks at King Edward VII Avenue, River Street, Alma Road and Romney Lock give the crew somewhere to wait if a slot is tight. Around the castle we avoid the busiest visitor hours.",
    },
    {
      label: "Roads and motorway access",
      body: "Windsor is about three miles south of M4 junction 6, which we reach on the A332, with the A355 spur linking across to Slough. From the east, M25 junction 13 is about five miles away on the A308, and the A332 continues south past Ascot to the M3. The A332 Windsor bypass runs round the edge of the town. We decide the approach before we set off so the van arrives on the right side of town for your street.",
    },
    {
      label: "Property types and the London link",
      body: "Dedworth, the most westerly part of Windsor, is largely semi detached houses from the 1950s to 1980s with driveways and easier loading. Clewer is older than the town itself, Old Windsor is a village two miles south, and Eton sits across the Thames. Two stations serve the town: Windsor and Eton Central on the branch from Slough with connections to Paddington, and Windsor and Eton Riverside with direct South Western trains from Waterloo, so we plan for London moves in both directions.",
    },
  ],
  nearby: [
    { label: "Slough", href: "/areas/slough", miles: "3" },
    { label: "Maidenhead", href: "/areas/maidenhead", miles: "7" },
    { label: "Staines-upon-Thames", href: "/areas/staines-upon-thames", miles: "7" },
    { label: "Bracknell", href: "/areas/bracknell" },
  ],
  faqs: [
    {
      question: "Do you cover my Windsor postcode?",
      answer:
        "Yes. We cover the whole of the SL4 district, from the town centre and Clewer to Dedworth, Old Windsor, Eton, Eton Wick and Dorney, plus Datchet, Ascot, Sunninghill and Sunningdale just outside. Send your postcode and we will confirm coverage and a price.",
    },
    faqPrice("Windsor"),
    {
      question: "Can you reserve a parking space for my move in Windsor?",
      answer:
        "Yes, where your street needs it. The Royal Borough of Windsor and Maidenhead offers a suspension for a residential move on resident parking streets, which we can apply for on your behalf. It needs at least 28 days notice so the council can put up yellow notices, and bays are counted in 5.5 metre lengths, so we book enough for the van. Where a street only has yellow lines we ask for a dispensation instead, which lets the van stand but does not hold a space.",
    },
    {
      question: "Can you move me from Windsor to London, or from London to Windsor?",
      answer:
        "Yes, in either direction. You get a fixed written price after a free survey, one crew that loads in one place and unloads in the other, and the drive planned around the route, usually the M4 from junction 6 or the A308 to the M25 at junction 13 depending on where in London you are going.",
    },
    faqInsured(),
    {
      question: "Can you move me to or from a flat near Peascod Street or the castle?",
      answer:
        "Yes. Peascod Street is a pedestrian area with no waiting at any time and loading banned during set hours, and the council grants access permits only in exceptional circumstances, so we normally work from the nearest open street or a council car park and plan a longer carry into the price. We avoid the peak visitor hours around the castle and bring an extra pair of hands where the walk is long.",
    },
  ],
};
