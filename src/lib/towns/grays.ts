import type { Borough } from "@/lib/boroughs";
import { HERO_ALT, HERO_IMAGE, VALUE_LINE, faqInsured, faqPrice } from "@/lib/boroughs";

export const town: Borough = {
  slug: "grays",
  name: "Grays",
  h1: "Removals in Grays",
  subhead:
    "Experienced, insured man and van and removals in Grays, from £55 per hour plus VAT, 7 days a week, with real local knowledge of parking, access and property across RM16, RM17 and RM20.",
  metaTitle: "Removals Grays | Man and Van from £55/hr | Thurrock",
  metaDescription:
    "Experienced man and van and removals in Grays, Thurrock (RM16, RM17, RM20) from £55/hr plus VAT. Insured, 7 days a week, minutes from our Purfleet base.",
  postcodes: ["RM16", "RM17", "RM20"],
  areaServedName: "Grays, Essex",
  kind: "town",
  county: "Essex",
  distanceFromLondon: "about 20 miles from central London",
  heroImage: HERO_IMAGE,
  heroImageAlt: HERO_ALT,
  introLine: "An experienced and fully insured removals company that genuinely serves and knows Grays.",
  valueLine: VALUE_LINE,
  localBody: [
    "Removals Nationwide moves homes, offices and single items across the whole of Grays and the surrounding area, 7 days a week, from the town centre and Grays Riverside to Little Thurrock, Stifford Clays, Chadwell St Mary and the Chafford Hundred estate. We are an experienced, insured removals company based in Purfleet, Essex, which puts Grays only a few minutes from where our vans start the day. You get one team and one point of contact from quote to completion, whatever the size of the job. Moves between Grays and London, or long distance, get a fixed written price after a free survey.",
    "In the town centre our crews plan around Thurrock Council's controlled parking zones, which cover the streets around the station and the High Street with permit only and pay and display bays, and around the station and the shopping centre, where kerb space is scarcest. The A13 is the spine of the area, with the A1012 bringing us in from the Stifford interchange and the A126 London Road from the Lakeside side, so we pick the approach that avoids the retail traffic. Out in Stifford Clays, Chadwell St Mary and Chafford Hundred, loading is usually from a driveway or an estate road.",
  ],
  coverageIntro:
    "We cover the whole of Grays and the surrounding part of Thurrock, including the RM16, RM17 and RM20 postcodes. Neighbourhoods we move people in and out of include:",
  neighbourhoods:
    "Grays Riverside, Little Thurrock, Stifford Clays, Chadwell St Mary, Chafford Hundred, North Stifford, South Stifford, West Thurrock, Badgers Dene, Blackshots, Orsett and Purfleet-on-Thames.",
  coverageOutro:
    "If you are on the edge of Grays towards Tilbury, South Ockendon or Purfleet, we cover that too. Tell us your postcode and we will confirm coverage and a price.",
  knowIntro:
    "Grays is a riverside town with a controlled town centre, a big modern estate at Chafford Hundred and suburban streets in between, and here is what our crews plan for.",
  knowBlocks: [
    {
      label: "Controlled zones in the town centre",
      body: "Grays town centre is covered by controlled parking zones run by Thurrock Council, each with its own list of roads and hours, so a street two minutes from the station can have different rules from the one beside it. Residents park on permits and the bays nearest the shops are pay and display, mostly short stay, which leaves little room for a van on a weekday. We check your road's zone before the day, plan the van's position around it and brief the crew.",
    },
    {
      label: "Roads and junctions",
      body: "The A13 runs across the top of Grays, with the M25 Thurrock interchange at junction 30 and junction 31 for Lakeside and the Dartford Crossing both close by. The A1012 leads into town from the Stifford interchange on the A13, and the A126 London Road comes in from Lakeside and West Thurrock and runs on towards Tilbury. The railway cuts through the centre beside the station, so we route for the right side of the line from the start.",
    },
    {
      label: "Property types",
      body: "Grays runs from older terraced streets around the station and the town centre, where the controlled zones sit, to post-war suburban semis in Little Thurrock, Stifford Clays, Blackshots and Chadwell St Mary. Chafford Hundred is a large modern estate built from the late 1980s on a former chalk quarry, with its own station and estate roads laid out for cars. New flats are also going up near the station and the riverside, so we move people into new central blocks as well as out of family houses.",
    },
    {
      label: "The London link and the Dartford Crossing",
      body: "Grays is about 20 miles from central London along the A13, the most direct road in, and c2c trains from Grays reach Fenchurch Street in under 40 minutes with Oyster pay as you go accepted at the station. For moves to Kent we use the Dartford Crossing from junction 31 and account for the Dart Charge in your written quote. Because our base is in Purfleet, a Grays to London move needs no long positioning drive before the clock starts.",
    },
  ],
  nearby: [
    { label: "Havering", href: "/areas/havering" },
    { label: "Dartford", href: "/areas/dartford" },
    { label: "Basildon", href: "/areas/basildon", miles: "11" },
    { label: "Barking and Dagenham", href: "/areas/barking-and-dagenham" },
  ],
  faqs: [
    {
      question: "Do you cover my Grays postcode?",
      answer:
        "Yes. We cover the whole of Grays across RM16, RM17 and RM20, including the town centre, Grays Riverside, Little Thurrock, Stifford Clays, Chadwell St Mary, Chafford Hundred and West Thurrock. Send your postcode and we will confirm coverage and a price.",
    },
    faqPrice("Grays"),
    {
      question: "How does parking work for a move in Grays town centre?",
      answer:
        "The town centre is covered by controlled parking zones run by Thurrock Council, each with its own roads and hours, and the on-street bays nearest the shops are pay and display. We check which zone your road is in before the day, plan where the van will stand and pick the approach that lands us on the right side of the railway. Outside the centre most streets are unrestricted and loading is from the kerb or a driveway.",
    },
    {
      question: "Can you move me from Grays to London, or from London to Grays?",
      answer:
        "Yes, in both directions. You get a fixed written price after a free survey, one crew handles the move end to end, and we plan the drive along the A13 to suit your London address, including any parking suspension at the London end. With our base in Purfleet, Grays is one of the shortest runs we do.",
    },
    faqInsured(),
    {
      question: "Can you move me into a house in Chafford Hundred?",
      answer:
        "Yes. Chafford Hundred is a modern estate built from the late 1980s, with estate roads that vary in width, so we send a van that fits your street and confirm the approach with you beforehand. Shoppers heading for Lakeside fill the roads around the estate at weekends, so a weekday or an early weekend start keeps the move moving.",
    },
  ],
};
