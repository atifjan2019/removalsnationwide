import type { Borough } from "@/lib/boroughs";
import { HERO_ALT, HERO_IMAGE, VALUE_LINE, faqInsured, faqPrice } from "@/lib/boroughs";

export const town: Borough = {
  slug: "st-albans",
  name: "St Albans",
  kind: "town",
  county: "Hertfordshire",
  distanceFromLondon: "about 20 miles from central London",
  areaServedName: "St Albans, Hertfordshire",
  h1: "Removals in St Albans",
  subhead:
    "Experienced, insured man and van and removals in St Albans, from £55 per hour plus VAT, 7 days a week, with real local knowledge of city centre permit zones, narrow historic streets and property across AL1, AL2, AL3 and AL4.",
  metaTitle: "Removals in St Albans | Man and Van from £55/hr, 7 Days",
  metaDescription:
    "Man and van and removals in St Albans (AL1, AL2, AL3, AL4) from £55/hr plus VAT. Insured, 7 days a week, permit zones and historic streets planned.",
  postcodes: ["AL1", "AL2", "AL3", "AL4"],
  heroImage: HERO_IMAGE,
  heroImageAlt: HERO_ALT,
  introLine: "An experienced and fully insured removals company that genuinely serves and knows St Albans.",
  valueLine: VALUE_LINE,
  localBody: [
    "Removals Nationwide moves homes, offices and single items across the whole of St Albans and the surrounding area, 7 days a week, from Georgian houses on Fishpool Street and Victorian and Edwardian streets around Clarence Park to the family homes of Marshalswick and Jersey Farm and the villages out towards Redbourn and Wheathampstead. We are an experienced, insured removals company based in Purfleet, Essex, and St Albans is a straightforward run for us around the M25. You deal with one team and one point of contact from quote to completion, and moves between St Albans and London, or long distance, get a fixed written price after a free survey.",
    "St Albans is a cathedral city with a historic core, so our crews plan for narrow streets, listed buildings and the controlled parking zones that St Albans City and District Council runs across the centre and the streets around St Albans City station. Where a reserved space matters we ask the council about a bay suspension or dispensation well before the day. We come in from the M25 at junction 21A or 22 or the M1 at junction 6, and we avoid loading on St Peter's Street itself during trading hours.",
  ],
  coverageIntro:
    "We cover the whole of St Albans, including the AL1, AL2, AL3 and AL4 postcode districts. Neighbourhoods we move people in and out of include:",
  neighbourhoods:
    "Marshalswick, Fleetville, Bernards Heath, Jersey Farm, Sopwell, St Stephens, Cottonmill, Batchwood, New Greens, The Camp, Chiswell Green, London Colney, Park Street and Bricket Wood.",
  coverageOutro:
    "We also cover the villages around the city, including Redbourn, Sandridge, Wheathampstead, Colney Heath and Harpenden on the AL5 side. Tell us your postcode and we will confirm coverage and a price.",
  knowIntro:
    "St Albans mixes a protected historic centre with large suburban estates, so access varies street by street. Here is what our crews plan for.",
  knowBlocks: [
    {
      label: "Permit zones and bay suspensions",
      body: "St Albans City and District Council runs controlled parking zones across the city centre and the streets around St Albans City station, with resident permit bays, shared use bays and hours that vary from zone to zone. We check which zone your street is in and what the signs say, and where a reserved space matters we ask the council about a bay suspension or dispensation well ahead of the move. Outside the zones most streets in Marshalswick, Jersey Farm and Chiswell Green have a driveway or unrestricted parking.",
    },
    {
      label: "Historic streets and the city centre",
      body: "The centre of St Albans is a conservation area, and Fishpool Street, George Street and the lanes around the Abbey are narrow, with timber framed and Georgian frontages, so we send a van that fits, protect doorways and carry further where a large vehicle cannot get close. St Peter's Street is the main shopping street and we plan any loading there around its trading hours, and around the Clock Tower end of the High Street the crew works from the nearest side street rather than the frontage.",
    },
    {
      label: "Roads and motorway junctions",
      body: "From the south we leave the M25 at junction 21A for the A405 or junction 22 for the A1081 into the city. From the M1 we use junction 6 for the A405, junction 7 for the A414 or junction 9 for the A5183, which runs south east from Redbourn into the north of the city. The A414 passes just south of the city between Hemel Hempstead and Hatfield, which is our route across to Welwyn Garden City, and the A1081 continues north through the city towards Harpenden.",
    },
    {
      label: "Property types",
      body: "The Victorian and Edwardian streets around Clarence Park, Fleetville and the City station are terraces and villas with on street parking and narrow hallways. Marshalswick was developed from the 1920s onwards and Jersey Farm was built in the 1970s, with semi detached and detached houses and driveways. Sopwell and Cottonmill include post war estates, and Chiswell Green, London Colney and Park Street add larger village homes with wide drives.",
    },
  ],
  nearby: [
    { label: "Watford", href: "/areas/watford", miles: "8" },
    { label: "Hemel Hempstead", href: "/areas/hemel-hempstead" },
    { label: "Welwyn Garden City", href: "/areas/welwyn-garden-city", miles: "8" },
    { label: "Luton", href: "/areas/luton" },
  ],
  faqs: [
    {
      question: "Do you cover my St Albans postcode?",
      answer:
        "Yes. We cover the whole of St Albans, including AL1, AL2, AL3 and AL4, from the city centre and Fleetville to Marshalswick, Jersey Farm, Chiswell Green, London Colney and the villages around Redbourn and Wheathampstead. Send your postcode and we will confirm coverage and a price.",
    },
    faqPrice("St Albans"),
    {
      question: "Can a removal van get down the narrow streets in the centre of St Albans?",
      answer:
        "Usually, with the right van. Fishpool Street, George Street and the lanes around the Abbey are narrow and lined with listed buildings, so we send a vehicle that fits, protect doorways and carry a little further where a large van cannot park close. If your street is in a council permit zone we ask the council about a bay suspension so the van has a reserved space outside.",
    },
    {
      question: "Can you move me from St Albans to London, or from London to St Albans?",
      answer:
        "Yes, in either direction. You get a fixed written price after a free survey, one crew that loads in St Albans and unloads in London or the other way round, and the drive planned around the route, normally the A1081 or A405 to the M25 and then the M1 or A1 into town depending on where you are heading.",
    },
    faqInsured(),
    {
      question: "Can you move a Victorian or Edwardian house near Clarence Park or the City station?",
      answer:
        "Yes. These streets have narrow hallways, tight staircases and on street parking in a permit zone, so we survey first, send a crew that can dismantle and reassemble large furniture, protect banisters and floors, and ask the council for a bay suspension where the van needs a reserved space. The streets nearest the City station are busy at commuter times, so we plan loading outside the peak.",
    },
  ],
};
