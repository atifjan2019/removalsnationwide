import type { Borough } from "@/lib/boroughs";
import { HERO_ALT, HERO_IMAGE, VALUE_LINE, faqInsured, faqPrice } from "@/lib/boroughs";

export const town: Borough = {
  slug: "southampton",
  name: "Southampton",
  kind: "town",
  county: "Hampshire",
  distanceFromLondon: "about 80 miles from central London",
  areaServedName: "Southampton, Hampshire",
  h1: "Removals in Southampton",
  subhead:
    "Experienced, insured man and van and removals in Southampton, from £55 per hour plus VAT, 7 days a week, with real local knowledge of parking, access and property across SO14, SO15, SO16, SO17, SO18 and SO19.",
  metaTitle: "Removals Southampton, Hampshire | Man and Van from £55/hr",
  metaDescription:
    "Insured removals and man and van in Southampton (SO14 to SO19) from £55/hr plus VAT, 7 days a week. Flats, terraces and suburbs, fixed London prices.",
  postcodes: ["SO14", "SO15", "SO16", "SO17", "SO18", "SO19"],
  heroImage: HERO_IMAGE,
  heroImageAlt: HERO_ALT,
  introLine: "An experienced and fully insured removals company that genuinely serves and knows Southampton.",
  valueLine: VALUE_LINE,
  localBody: [
    "Removals Nationwide moves homes, offices and single items across the whole of Southampton and the surrounding area, 7 days a week, from the waterfront apartments of Ocean Village and the city centre to Shirley, Portswood and Bassett and across the Itchen to Bitterne, Woolston and Sholing. We are an experienced, insured removals company based in Purfleet, Essex, reaching the city by the M25 and M3, with one team and one point of contact from quote to completion. Moves between Southampton and London, or long distance, get a fixed written price after a free survey.",
    "Southampton is a port city split by the River Itchen, so the first thing our crews plan is which side of the water each address sits on and whether the Itchen Bridge, a council owned toll crossing from Woolston to the Chapel area, saves time over the A27 at Mansbridge. The M27 runs across the north of the city, the M3 brings traffic in from London and the M271 spur drops to the Western Docks and the Redbridge roundabout with the A33 and A35. Inner suburbs such as Portswood and Bevois Valley have tight streets with restrictions, so we check each one before the van arrives.",
  ],
  coverageIntro:
    "We cover the whole of Southampton, including the SO14, SO15, SO16, SO17, SO18 and SO19 postcodes. Areas we move people in and out of include:",
  neighbourhoods:
    "Shirley, Portswood, Highfield, Bassett, Swaythling, St Denys, Bevois Valley, Ocean Village, Bitterne, Bitterne Park, Woolston, Sholing, Thornhill and Lordshill.",
  coverageOutro:
    "At the edges we cover Millbrook, Redbridge and Maybush to the west, Townhill Park and Weston to the east, and the neighbouring areas of Totton, Eastleigh, Hedge End and West End. Tell us your postcode and we will confirm coverage and a price.",
  knowIntro:
    "Southampton is a large port city with a river down the middle, waterfront flats, student terraces and big post war estates. Here is what our crews plan for.",
  knowBlocks: [
    {
      label: "Parking and the inner suburbs",
      body: "Southampton City Council is the unitary authority, so one body sets the on street rules across the city. The closer you get to the centre, the station and the university, the more yellow lines, limited waiting bays and permit controlled streets you meet, and the terraces around the Highfield campus fill with resident and student cars. Further out, in Bassett, Bitterne Park and Sholing, a driveway or open kerb is the usual stop. We confirm the restriction on your street and plan the stop before moving day.",
    },
    {
      label: "Roads, bridges and the toll",
      body: "The M27 crosses the north of the city, the M3 joins it from London and the M271 spur runs down to the Western Docks and ends at the Redbridge roundabout, where it meets the A35 heading west and the A33 into the centre. East of the Itchen, the choice is the A27 crossing at Mansbridge or the Itchen Bridge, the council owned toll bridge from Woolston to Chapel near Ocean Village and St Mary's Stadium. Any toll on your route is confirmed in writing before you book.",
    },
    {
      label: "Property types",
      body: "The centre and waterfront are dominated by flats, from the marina apartments of Ocean Village to the newer blocks around Westquay and the regeneration sites near the docks, so lifts and loading bays are booked first. Shirley is the main suburban centre of the west with council housing in the middle and larger houses in Upper Shirley. Portswood sits beside the Highfield campus with a large student share, while east of the river Thornhill was expanded with council housing in the 1960s and Weston was largely built after the war.",
    },
    {
      label: "The London link",
      body: "Southampton Central is the main station, with direct trains to London Waterloo, and Southampton Airport Parkway and the suburban stations feed the same lines, so many customers are moving between the two cities. Our route from Purfleet runs round the M25 via the Dartford Crossing, which carries Dart Charge, then down the M3 to the M27, and for London moves we plan the M3 run with one crew at both ends and a fixed written price after a free survey.",
    },
  ],
  nearby: [
    { label: "Portsmouth", href: "/areas/portsmouth", miles: "about 22 miles" },
    { label: "Basingstoke", href: "/areas/basingstoke" },
    { label: "Guildford", href: "/areas/guildford" },
  ],
  faqs: [
    {
      question: "Do you cover my Southampton postcode?",
      answer:
        "Yes. We cover the whole city, including SO14, SO15, SO16, SO17, SO18 and SO19, from Ocean Village and the centre to Shirley, Portswood, Bassett, Bitterne, Woolston and Sholing. Send your postcode and we will confirm coverage and a price.",
    },
    faqPrice("Southampton"),
    {
      question: "How do you handle parking for a move in Southampton?",
      answer:
        "We check your street first. Southampton City Council sets the on street rules across the city, and the terraced streets around the university and the centre carry yellow lines, limited waiting bays and resident permit controls, while most outer suburbs have driveways and open roads. For a flat in Ocean Village or the city centre we book the lift and loading bay with the building manager before the day.",
    },
    {
      question: "Can you move me from Southampton to London, or from London to Southampton?",
      answer:
        "Yes. Southampton is about 80 miles from central London and the M3 and M25 make it a direct run. You get a fixed written price after a free survey, one crew end to end, and the drive planned around the route and the M27 and M3 junctions.",
    },
    faqInsured(),
    {
      question: "Do you do student moves around Portswood and Highfield?",
      answer:
        "Yes. Portswood and Highfield sit beside the University of Southampton campus and students make up a notable share of residents, so we move shared houses and single rooms in and out of terraced streets with tight parking. A man and van with one or two movers on an hourly rate usually suits, and we can collect from halls or storage on the same trip.",
    },
  ],
};
