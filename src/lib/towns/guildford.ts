import type { Borough } from "@/lib/boroughs";
import { HERO_ALT, HERO_IMAGE, VALUE_LINE, faqInsured, faqPrice } from "@/lib/boroughs";

export const town: Borough = {
  slug: "guildford",
  name: "Guildford",
  kind: "town",
  county: "Surrey",
  distanceFromLondon: "about 30 miles from central London",
  areaServedName: "Guildford, Surrey",
  h1: "Removals in Guildford",
  subhead:
    "Experienced, insured man and van and removals in Guildford, from £55 per hour plus VAT, 7 days a week, with real local knowledge of parking, access and property across GU1, GU2, GU3 and GU4.",
  metaTitle: "Removals Guildford, Surrey | Man and Van from £55/hr",
  metaDescription:
    "Insured removals and man and van in Guildford (GU1 to GU4) from £55/hr plus VAT, 7 days a week. Permit bays handled, fixed prices for London moves.",
  postcodes: ["GU1", "GU2", "GU3", "GU4"],
  heroImage: HERO_IMAGE,
  heroImageAlt: HERO_ALT,
  introLine: "An experienced and fully insured removals company that genuinely serves and knows Guildford.",
  valueLine: VALUE_LINE,
  localBody: [
    "Removals Nationwide moves homes, offices and single items across the whole of Guildford and the surrounding area, 7 days a week, from the Victorian terraces of Charlotteville and the garden suburb of Onslow Village to Burpham, Merrow, Stoughton and Bellfields, and out to Shalford, Chilworth and Worplesdon. We are an experienced, insured removals company based in Purfleet, Essex, reaching the town by the M25 and the A3, with one team and one point of contact from quote to completion. Moves between Guildford and London, or long distance, get a fixed written price after a free survey.",
    "Guildford is a hilly county town on the River Wey where the centre climbs steeply from the river up a High Street paved with granite setts towards Pewley Down, so our crews plan the loading point and the trolley route before the van arrives. Surrey County Council is the highway authority for on street parking, and its permit bays can be suspended for a removal with around ten days' notice, which we build into the booking. The A3 cuts through the town as a dual carriageway from the M25 at junction 10, with the A31 coming in along the Hog's Back and the A320 running north towards Woking and Staines.",
  ],
  coverageIntro:
    "We cover the whole of Guildford and the villages around it, including the GU1, GU2, GU3 and GU4 postcodes. Areas we move people in and out of include:",
  neighbourhoods:
    "Charlotteville, Onslow Village, Guildford Park, Stoughton, Bellfields, Slyfield, Burpham, Merrow, Park Barn, Westborough, Jacobs Well, Shalford, Chilworth and Worplesdon.",
  coverageOutro:
    "Further out we cover Normandy, Puttenham and Flexford to the west, Bramley, Shere and Albury in GU5 to the south and east, and Ripley and Send towards Woking. Tell us your postcode and we will confirm coverage and a price.",
  knowIntro:
    "Guildford is a steep, historic county town where the centre is tight, the suburbs are spread out along the A3 and the university sits on the western edge. Here is what our crews plan for.",
  knowBlocks: [
    {
      label: "Permits, suspensions and waivers",
      body: "On street parking across Guildford is the responsibility of Surrey County Council as highway authority, with permits, suspensions and waivers administered by its contractor NSL, so the borough council deals only with its own car parks. A permit or time limited bay can be suspended for a removal, but the application normally has to be in at least ten days ahead. Where a bay is not needed, a waiver lets a named van wait on a single yellow line for the job, and we arrange whichever fits your street.",
    },
    {
      label: "The A3 and the roads in",
      body: "The A3 runs straight through Guildford as a dual carriageway rather than skirting it, linking the town to the M25 at the Wisley interchange, junction 10, in one direction and to the Godalming bypass and the Hindhead tunnel in the other. The A31 arrives from Farnham along the Hog's Back, the A320 heads north out of town towards Woking and Staines, and the A25 sets off east towards Dorking. Our crews from Purfleet come round the M25 and down the A3, timing the run to avoid the Wisley queues.",
    },
    {
      label: "Property types",
      body: "Charlotteville, laid out from 1862, was one of the first planned suburbs in Britain and its Victorian streets climb the slopes below Pewley Down. Onslow Village was begun in 1920 on garden city lines, forms a wedge between the A3 and the A31 and is partly a conservation area. The Westborough estate dates from the 1920s, Dennisville was founded in 1934 for Dennis Brothers workers, and Park Barn is a social housing estate. Stoughton Barracks became Cardwell's Keep in the 1990s, and flats cluster near the station.",
    },
    {
      label: "The London link",
      body: "Guildford station, north west of the centre, has South Western Railway trains to London Waterloo via Clapham Junction, and London Road station on the other side of town also reaches Waterloo via Epsom or Oxshott, so a good share of our enquiries are commuters moving out from London or back in. By road it is the A3 to the M25 at junction 10 and on round to Essex, or straight up the A3 through Kingston into south west London, with one crew at both ends and a fixed written price.",
    },
  ],
  nearby: [
    { label: "Woking", href: "/areas/woking", miles: "about 6 miles" },
    { label: "Epsom", href: "/areas/epsom" },
    { label: "Staines-upon-Thames", href: "/areas/staines-upon-thames" },
    { label: "Kingston upon Thames", href: "/areas/kingston-upon-thames" },
  ],
  faqs: [
    {
      question: "Do you cover my Guildford postcode?",
      answer:
        "Yes. We cover all of Guildford and the villages around it, including GU1, GU2, GU3 and GU4, from Charlotteville and Onslow Village to Burpham, Merrow, Stoughton, Shalford, Chilworth and Worplesdon, and out to Bramley and Shere in GU5. Send your postcode and we will confirm coverage and a price.",
    },
    faqPrice("Guildford"),
    {
      question: "Can a removal van park outside my house in Guildford town centre?",
      answer:
        "Often, with the right paperwork. Many streets near the centre and the station have permit or time limited bays managed by Surrey County Council. We check your street at the survey; where a bay is needed we apply to suspend it at least ten days ahead, and where a single yellow line will do we arrange a waiver for the van. On the steep streets around Pewley Down and Charlotteville we also plan where the van stops so the trolley run stays safe.",
    },
    {
      question: "Can you move me from Guildford to London, or from London to Guildford?",
      answer:
        "Yes. Guildford is about 30 miles from central London and the A3 links it to the M25 at junction 10 and directly into south west London. You get a fixed written price after a free survey, one crew end to end, and the drive planned around the route and the time of day on the A3.",
    },
    faqInsured(),
    {
      question: "Can you move me into a flat near Guildford station or the university?",
      answer:
        "Yes. The streets around Guildford station and the University of Surrey in GU2 have plenty of flats, from converted houses to newer blocks. We confirm the lift, the stairs and where the van can stand before the day, and for a block we check with whoever manages the building about loading bays and timings so the crew is not held up.",
    },
  ],
};
