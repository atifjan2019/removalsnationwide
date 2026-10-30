import type { Borough } from "@/lib/boroughs";
import { HERO_ALT, HERO_IMAGE, VALUE_LINE, faqInsured, faqPrice } from "@/lib/boroughs";

export const town: Borough = {
  slug: "aylesbury",
  name: "Aylesbury",
  kind: "town",
  county: "Buckinghamshire",
  distanceFromLondon: "about 40 miles from central London",
  areaServedName: "Aylesbury, Buckinghamshire",
  h1: "Removals in Aylesbury",
  subhead:
    "Experienced, insured man and van and removals in Aylesbury, from £55 per hour plus VAT, 7 days a week, with real local knowledge of the new estates, the old town streets and property across HP19, HP20, HP21 and HP22.",
  metaTitle: "Removals Aylesbury | Man and Van from £55/hr, 7 Days",
  metaDescription:
    "Man and van and removals in Aylesbury (HP19, HP20, HP21, HP22) from £55/hr plus VAT. Insured, 7 days a week, new estates and old town streets planned for.",
  postcodes: ["HP19", "HP20", "HP21", "HP22"],
  heroImage: HERO_IMAGE,
  heroImageAlt: HERO_ALT,
  introLine: "An experienced and fully insured removals company that genuinely serves and knows Aylesbury.",
  valueLine: VALUE_LINE,
  localBody: [
    "Removals Nationwide moves homes, offices and single items across the whole of Aylesbury and the surrounding area, 7 days a week, from brand new houses at Kingsbrook, Berryfields and Buckingham Park to the established estates of Bedgrove, Southcourt and Elmhurst, the old town streets around Market Square and the villages of Bierton, Wendover and Stoke Mandeville. We are an experienced, insured removals company based in Purfleet, Essex, and we reach Aylesbury on the M25, the M40 and the A41. You get one team and one point of contact from quote to completion, and moves between Aylesbury and London, or long distance, get a fixed written price after a free survey.",
    "In Aylesbury our crews plan for a town that is growing outwards fast. New build estates mean fresh tarmac, unfinished roads and strict developer rules about where a van can stand, so we confirm the plot access and any show home restrictions in advance. In the centre, Buckinghamshire Council runs on-street resident permits in specific zones and offers residents season tickets for its car parks, and the old streets around Market Square and Church Street are narrow with market days to work around. The A41, A413 and A418 meet here, so we choose the approach that lands on your side of town.",
  ],
  coverageIntro:
    "We cover the whole of Aylesbury, including the HP19, HP20, HP21 and HP22 postcode districts, which reach out to Wendover, Aston Clinton and the surrounding villages. Neighbourhoods we move people in and out of include:",
  neighbourhoods:
    "Bedgrove, Southcourt, Elmhurst, Quarrendon, Walton, Walton Court, Queens Park, Haydon Hill, Watermead, Fairford Leys, Berryfields, Buckingham Park, Kingsbrook and Broughton.",
  coverageOutro:
    "If you live in one of the villages around town such as Bierton, Stoke Mandeville, Weston Turville, Aston Clinton, Wendover or Haddenham, we cover that too. Tell us your postcode and we will confirm coverage and a price.",
  knowIntro:
    "Aylesbury is a county town ringed by new estates, with an old centre of narrow streets and a market on the cobbles. Here is what our crews plan for.",
  knowBlocks: [
    {
      label: "New estates and developer rules",
      body: "Aylesbury's growth is on its edges. Kingsbrook to the north east is split into Oakfield Village, Canal Quarter and Orchard Green and has been building since 2016, while Berryfields and Buckingham Park to the north west have Aylesbury Vale Parkway station, opened for the new housing. On these sites roads may still be unfinished, parking is often in courts or garages behind the house, and developers restrict where vans stand near sales areas, so we confirm the plot, the nearest hard standing and any site rules before the day.",
    },
    {
      label: "Permits, car parks and the old town",
      body: "Buckinghamshire Council issues on-street resident permits for specific zones and sells Aylesbury residents season tickets for named council car parks, so for a central move we check the traffic order for your street and, if a bay must be held, apply for a suspension at least 28 days ahead. The old town around Market Square and Church Street is narrow, and the market sets up on the cobbles four days a week, so we avoid those mornings or stage from a neighbouring street.",
    },
    {
      label: "Roads and the way in",
      body: "Three A roads meet in Aylesbury: the A41 running from London towards Bicester, where it becomes the M40, and the A413 and A418 which both run through the town, with the A4010 arriving from Princes Risborough through Stoke Mandeville onto the A413. The Western Link Road joins the A41 and A418 past Berryfields, which is handy for the north west estates. From Purfleet we use the M25 and either the M40 or the M1 and then the A41, picking the side that suits your street.",
    },
    {
      label: "Property types and the London link",
      body: "Bedgrove, Southcourt, Elmhurst and Quarrendon are established family estates where loading is usually from a driveway, the old town around Market Square has listed buildings and narrow streets with tight access, and Fairford Leys, Watermead, Berryfields and Kingsbrook are modern estates where parking is often in courts or allocated bays. Chiltern Railways runs from Aylesbury and Aylesbury Vale Parkway to London Marylebone, so we plan for families leaving London for a new build and commuters heading the other way.",
    },
  ],
  nearby: [
    { label: "High Wycombe", href: "/areas/high-wycombe", miles: "16" },
    { label: "Hemel Hempstead", href: "/areas/hemel-hempstead", miles: "17" },
    { label: "Milton Keynes", href: "/areas/milton-keynes", miles: "18" },
    { label: "Luton", href: "/areas/luton" },
  ],
  faqs: [
    {
      question: "Do you cover my Aylesbury postcode?",
      answer:
        "Yes. We cover the whole of Aylesbury across HP19, HP20, HP21 and HP22, from Bedgrove, Southcourt and Elmhurst to Fairford Leys, Berryfields, Buckingham Park and Kingsbrook, plus Bierton, Stoke Mandeville, Wendover, Aston Clinton and the other villages around town. Send your postcode and we will confirm coverage and a price.",
    },
    faqPrice("Aylesbury"),
    {
      question: "Is parking a problem for a move in Aylesbury?",
      answer:
        "Rarely on the estates, where most houses have a drive or an allocated bay, though on the newest parts of Kingsbrook and Berryfields we check site rules and unfinished roads first. In the centre, some streets are in Buckinghamshire Council permit zones or on yellow lines, so we check the traffic order and apply for a bay suspension at least 28 days ahead where a held space is needed. We also work around the market days in Market Square.",
    },
    {
      question: "Can you move me from Aylesbury to London, or from London to Aylesbury?",
      answer:
        "Yes, in either direction. You get a fixed written price after a free survey, one crew that loads in one place and unloads in the other, and the drive planned around the route, usually the A41 to the M25 and then the M40 or the M1 depending on where in London you are going.",
    },
    faqInsured(),
    {
      question: "Can you move me into a new build at Kingsbrook, Berryfields or Buckingham Park?",
      answer:
        "Yes. New build completions in Aylesbury often land on a Friday with the keys released late in the day, so we book a flexible start, confirm the plot number and the nearest place a van can legally stand with the site office, and protect new flooring and door frames on the way in. If completion slips we hold your date where we can and tell you straight away if a change is needed.",
    },
  ],
};
