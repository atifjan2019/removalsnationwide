import type { Borough } from "@/lib/boroughs";
import { HERO_ALT, HERO_IMAGE, VALUE_LINE, faqInsured, faqPrice } from "@/lib/boroughs";

export const town: Borough = {
  slug: "horsham",
  name: "Horsham",
  kind: "town",
  county: "West Sussex",
  distanceFromLondon: "about 35 miles from central London",
  areaServedName: "Horsham, West Sussex",
  h1: "Removals in Horsham",
  subhead:
    "Experienced, insured man and van and removals in Horsham, from £55 per hour plus VAT, 7 days a week, with real local knowledge of parking, access and property across RH12 and RH13.",
  metaTitle: "Removals Horsham | Man and Van from £55/hr | Insured",
  metaDescription:
    "Man and van and removals in Horsham (RH12, RH13) from £55/hr plus VAT. Insured, 7 days a week, with knowledge of the Carfax, parking zones and the A24.",
  postcodes: ["RH12", "RH13"],
  heroImage: HERO_IMAGE,
  heroImageAlt: HERO_ALT,
  introLine: "An experienced and fully insured removals company that genuinely serves and knows Horsham.",
  valueLine: VALUE_LINE,
  localBody: [
    "Removals Nationwide moves homes, offices and single items across the whole of Horsham and the surrounding area, 7 days a week, covering the market town itself, Roffey, Holbrook and Littlehaven to the north and Broadbridge Heath and Southwater on the edges. We are an experienced, insured removals company based in Purfleet, Essex, and you deal with one team and one point of contact from quote to completion, whether it is a man and van job, a full house, an office or a clearance. Moves between Horsham and London, or long distance, get a fixed written price after a free survey.",
    "Horsham's centre is a largely pedestrianised hub around the Carfax, West Street and East Street, with the shops served by the town centre car parks rather than kerbside bays, so a town centre flat move needs the delivery access planned in advance. A West Sussex County Council controlled parking zone covers the streets around the centre and the station, and our crews check which hours and bay types apply to your road. Beyond that the A24 dual carriageway, the A264 to Crawley and the M23, the A281 and the A29 carry the traffic, and most suburban streets are unrestricted.",
  ],
  coverageIntro:
    "We cover the whole of Horsham and its villages, including the RH12 and RH13 postcodes. Areas we move people in and out of include:",
  neighbourhoods:
    "Roffey, Holbrook, Littlehaven, Needles, Tower Hill, Trafalgar, Oakhill, North Heath, Broadbridge Heath, Southwater, Mannings Heath, Warnham, Faygate and Kilnwood Vale.",
  coverageOutro:
    "Further out we also reach Slinfold, Billingshurst and the villages along the A24 and A281. Tell us your postcode and we will confirm coverage and a price.",
  knowIntro:
    "Horsham is a market town with a pedestrianised core, a controlled parking zone around it and quiet suburbs beyond. Here is what our crews plan for.",
  knowBlocks: [
    {
      label: "Controlled parking zone",
      body: "Horsham has one of West Sussex County Council's established controlled parking zones, covering the streets around the town centre and the station, and the county has had the zone under review. Inside it the kerb is permit or limited waiting bays during the controlled hours, so a space that looks free may not be usable for a van all day. Our crews read the signs and hours for your road and, where the kerb is all permit bays, agree a loading plan with you before the day.",
    },
    {
      label: "Town centre access",
      body: "The Carfax, West Street and East Street form a largely pedestrianised core linking to the Swan Walk shopping centre, so a flat above the shops or an office in the centre is loaded from the nearest service road or car park rather than the front door. We use a smaller van where the approach is tight and carry further where we have to, and we plan the time of day around deliveries and the busiest shopping hours.",
    },
    {
      label: "Roads in and out",
      body: "The A24 runs north to south past the town as a dual carriageway towards Dorking, and the A264 heads east to junction 11 of the M23 at Pease Pottage, which is the route our crews use from Purfleet. The A281 links Guildford and Brighton through the town and the A29 heads west. Horsham, Littlehaven and Christ's Hospital stations sit on the Arun Valley line into London Victoria, so the town has a steady flow of commuter moves.",
    },
    {
      label: "Property types",
      body: "Horsham mixes Victorian and Edwardian houses north of Brighton Road, mostly late twentieth century homes in Holbrook, council built houses on the Needles estate and semi detached streets with corner shops in Trafalgar. The new neighbourhood of Kilnwood Vale, east of Faygate on the Crawley side of the district, has been adding homes over the past decade. Most loads are driveway or kerbside, and the few tight spots are the older streets nearest the centre.",
    },
  ],
  nearby: [
    { label: "Crawley", href: "/areas/crawley", miles: "10" },
    { label: "Guildford", href: "/areas/guildford", miles: "20" },
    { label: "Brighton", href: "/areas/brighton" },
  ],
  faqs: [
    {
      question: "Do you cover my Horsham postcode?",
      answer:
        "Yes. We cover Horsham and its villages, RH12 and RH13, from the town centre and Roffey to Broadbridge Heath, Southwater and Warnham. Send your postcode and we will confirm coverage and a price.",
    },
    faqPrice("Horsham"),
    {
      question: "Can you park near a flat in Horsham town centre?",
      answer:
        "The Carfax, West Street and East Street are largely pedestrianised, so a central flat or office is loaded from the nearest service road or one of the town centre car parks. The streets around the centre and the station sit in the controlled parking zone, so we check the hours and bay types for your road and agree the loading position with you before the day.",
    },
    {
      question: "Can you move me from Horsham to London, or from London to Horsham?",
      answer:
        "Yes. Horsham to London and London to Horsham moves get a fixed written price after a free survey. One crew loads, drives and unloads end to end, and we plan the drive around the A264, the M23 and the M25 and the access at your London address.",
    },
    faqInsured(),
    {
      question: "Can you move me into a new home at Kilnwood Vale?",
      answer:
        "Yes. Kilnwood Vale is a new neighbourhood east of Faygate on the Crawley side of Horsham district, in RH12, and it is still growing. New estates are usually easy to load from, though some roads are still being finished, so we confirm access and the right van size on the survey and give you a fixed written price.",
    },
  ],
};
