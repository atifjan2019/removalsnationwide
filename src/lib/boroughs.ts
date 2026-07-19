import { REMOTE_IMAGES } from "@/lib/remote-images";

/**
 * Borough page data model and registry.
 *
 * The BoroughPage template keeps the hero, price table, services list,
 * service approach block, schema shape and FAQ shape identical for every borough.
 * Only the researched local data below changes per borough. To clone a new
 * borough, copy one of these objects, replace every local fact with that
 * borough's real data, and add its slug to the `boroughs` registry. The
 * /areas/[slug] route, sitemap and areas hub pick it up automatically.
 *
 * Confirmed company data (rates, the six service highlights, NAP, services) is
 * identical everywhere and lives in the template, not here.
 */

export type BoroughFaq = { question: string; answer: string };
export type BoroughKnowBlock = { label: string; body: string };
export type BoroughLink = { label: string; href: string };

export type Borough = {
  slug: string;
  name: string;
  h1: string;
  subhead: string;
  metaTitle: string;
  metaDescription: string;
  /** Headline postcode districts, also used as schema containsPlace. */
  postcodes: string[];
  /** Schema areaServed name override (e.g. "Royal Borough of ...", "City of London").
   *  Defaults to "London Borough of {name}". */
  areaServedName?: string;
  heroImage: string;
  heroImageAlt: string;
  introLine: string;
  valueLine: string;
  /** Paragraphs under "Your Local Removals and Man and Van Team". */
  localBody: string[];
  coverageIntro: string;
  neighbourhoods: string;
  coverageOutro: string;
  knowIntro: string;
  knowBlocks: BoroughKnowBlock[];
  nearby: BoroughLink[];
  faqs: BoroughFaq[];
};

/* ---- Shared, confirmed company copy (identical for every borough) ---- */

const HERO_IMAGE = REMOTE_IMAGES.movingVan;

const heroAlt = (n: string) => `Removals Nationwide man and van team loading a van in ${n}, London`;
const introLine = (n: string) =>
  `A experienced and fully insured removals company that genuinely serves and knows ${n}.`;
const VALUE_LINE =
  "Published hourly rates, insurance included, your own accountable crew, and the parking and access handled for you.";
const localPara1 = (n: string) =>
  `Removals Nationwide moves homes, offices and single items across the whole of ${n}, 7 days a week. We are a fully experienced and insured London removals company, not an inexperienced local operator and not a booking marketplace. The same team handles your man and van job, your full house or office move, your packing, your storage and your clearance, with one point of contact from quote to completion.`;

const faqPrice = (n: string): BoroughFaq => ({
  question: `How much is a man and van in ${n}?`,
  answer:
    "Our man and van starts at £55 per hour plus VAT for one mover and a van, from £70 for two movers and from £90 for three, with a two-hour minimum. Half-day and full-day rates are also published. The price includes loading, transport, unloading, parking, tolls and insurance.",
});
const faqInsured = (): BoroughFaq => ({
  question: "Are you insured and experienced?",
  answer:
    "Yes. Every move includes goods-in-transit insurance in the price. Our crews are trained, vetted and background-checked.",
});
const faqSameDay = (n: string): BoroughFaq => ({
  question: `Can you do a same-day move in ${n}?`,
  answer:
    "Often yes, subject to availability. We operate 7 days a week and usually arrange a crew and van at short notice for smaller moves. Call us and we will tell you what we can do today.",
});
const faqFullMove = (n: string): BoroughFaq => ({
  question: "Do you do full house and office moves, not just man and van?",
  answer: `Yes. We handle everything from a single item to a full house or office relocation in ${n}, plus packing, storage, clearance and international moves, all from one experienced team.`,
});
const faqNearby = (n: string, neighbours: string): BoroughFaq => ({
  question: `Do you cover areas near ${n}?`,
  answer: `Yes. We also serve neighbouring ${neighbours}, and all 32 London boroughs, Greater London and Surrey, with nationwide moves on request.`,
});

const subhead = (n: string, codes: string) =>
  `Experienced, insured man and van and removals in ${n}, from £55 per hour plus VAT, 7 days a week, with real local knowledge of parking, access and property across ${codes}.`;

/* ====================================================================== */
/* 0. ISLINGTON (model page)                                              */
/* ====================================================================== */

export const islington: Borough = {
  slug: "islington",
  name: "Islington",
  h1: "Removals in Islington",
  subhead: subhead("Islington", "N1, N5, N7, N19 and EC1"),
  metaTitle: "Removals Islington | Man and Van £55/hr | Removals Nationwide",
  metaDescription:
    "Experienced, insured removals and man and van in Islington from £55/hr plus VAT. Local knowledge of N1, N5, N7, N19 and EC1 parking and property.",
  postcodes: ["N1", "N5", "N7", "N19", "EC1"],
  heroImage: HERO_IMAGE,
  heroImageAlt: heroAlt("Islington"),
  introLine: introLine("Islington"),
  valueLine: VALUE_LINE,
  localBody: [
    localPara1("Islington"),
    "What sets a Removals Nationwide move in Islington apart is that we work in the borough constantly, so we plan around its realities: controlled parking, busy main roads, period staircases and tight access. That local knowledge means fewer delays and a smoother move on the day.",
  ],
  coverageIntro:
    "We cover every part of the London Borough of Islington, including the N1, N5, N7 and N19 postcodes and the EC1 area to the south. Neighbourhoods we move people in and out of every week include:",
  neighbourhoods:
    "Angel, Barnsbury, Canonbury, Highbury, Holloway, Upper Holloway and Lower Holloway, Tufnell Park, Archway, Kings Cross, Pentonville, Mildmay, Newington Green, and the Clerkenwell, Finsbury and St Luke's areas around EC1.",
  coverageOutro:
    "If your street sits on the Islington border with Camden, Hackney, Haringey or the City of London, we cover that too. Tell us your postcode and we will confirm coverage and a price.",
  knowIntro:
    "Islington is one of London's more demanding boroughs to move in, and the detail is where moves go wrong. Here is what our crews plan for.",
  knowBlocks: [
    // Council parking (confirm current charges and the day 1 to 2 treatment on the
    // Islington portal): among the more expensive London boroughs for a suspension.
    {
      label: "Parking and permits",
      body: "Islington operates controlled parking across the whole borough and is one of the more expensive boroughs for a suspension, so we arrange a bay suspension with the council where a move needs it and build it into the plan. Islington needs at least 14 days notice for most bay types, or 10 days for pay by phone bays, with the advance warning notice itself provided free; applications at short notice carry a £100 administration fee and may be declined. The space charge rises to £85 per space per day from the third day, excluding Sundays and bank holidays, so we book only the days and bays the move needs. Suspensions on estate land are arranged through the local Area Housing Office. Near the Emirates Stadium, resident and shared bays carry additional match day restrictions, which we check against your move date. We arrange the suspension and factor it into your quote.",
    },
    {
      label: "Main roads and access",
      body: "Busy routes such as Holloway Road, Caledonian Road, Upper Street, City Road and Essex Road carry traffic and loading restrictions, including red-route sections where stopping is limited. We plan timing and the loading point around these so the move stays efficient.",
    },
    {
      label: "Property types",
      body: "Much of Islington is Georgian and Victorian, so we move a lot of period townhouses around Canonbury and Barnsbury, terraced conversions and upper-floor flats with narrow original staircases, and mansion blocks with shared lifts and entrances. Around Angel and the City Road basin there are modern apartment blocks with concierge desks, loading bays and booking rules, which we coordinate in advance.",
    },
    {
      label: "Emissions and charges",
      body: "All of Islington sits within the Greater London Ultra Low Emission Zone. The ULEZ charge is £12.50 a day for non-compliant vehicles, but our fleet is compliant, so there is no emissions charge on your move. The southern EC1 edge near the City can fall inside the central Congestion Charge zone, so we confirm this by street and factor the £18 daily charge into the plan where it applies.",
    },
  ],
  nearby: [
    { label: "Camden", href: "/areas/camden" },
    { label: "Hackney", href: "/areas/hackney" },
    { label: "Haringey", href: "/areas/haringey" },
    { label: "City of London", href: "/areas/city-of-london" },
  ],
  faqs: [
    {
      question: "Do you cover my Islington postcode?",
      answer:
        "Yes. We cover the whole London Borough of Islington, including N1, N5, N7, N19 and the EC1 area, plus every named neighbourhood from Angel to Archway. Send us your postcode and we will confirm coverage and a price straight away.",
    },
    faqPrice("Islington"),
    {
      question: "Can you handle the parking and permits in Islington?",
      answer:
        "Yes. Islington has extensive controlled parking, so where a move needs it we arrange a suspended parking bay with the council in advance, so the van can load legally and close to your door. We plan this into the move rather than leaving it to you.",
    },
    faqInsured(),
    faqSameDay("Islington"),
    faqFullMove("Islington"),
    faqNearby("Islington", "Camden, Hackney, Haringey and the City of London"),
  ],
};

/* ====================================================================== */
/* 1. CAMDEN                                                              */
/* ====================================================================== */

export const camden: Borough = {
  slug: "camden",
  name: "Camden",
  h1: "Removals in Camden",
  subhead: subhead("Camden", "NW1, NW3, NW5 and WC1"),
  metaTitle: "Removals Camden | Man and Van £55/hr | Removals Nationwide",
  metaDescription:
    "Experienced, insured removals and man and van in Camden from £55/hr plus VAT. Local knowledge of Hampstead hills, parking and period access.",
  postcodes: ["NW1", "NW3", "NW5", "WC1"],
  heroImage: HERO_IMAGE,
  heroImageAlt: heroAlt("Camden"),
  introLine: introLine("Camden"),
  valueLine: VALUE_LINE,
  localBody: [
    localPara1("Camden"),
    "What sets a Removals Nationwide move in Camden apart is that the access varies sharply by neighbourhood, from the steep conservation streets above Belsize Park to the market crowds of Camden Town and the Georgian terraces of Bloomsbury. We work the borough constantly, plan the loading point and crew size for each, and that local knowledge means fewer delays on the day.",
  ],
  coverageIntro:
    "We cover every part of the London Borough of Camden, including the NW1, NW3, NW5 and WC1 postcodes, with parts of N6, N7, N19, NW6 and NW8. Neighbourhoods we move people in and out of every week include:",
  neighbourhoods:
    "Camden Town, Kentish Town, Hampstead, Belsize Park, Primrose Hill, Gospel Oak, Dartmouth Park, Swiss Cottage, Bloomsbury, Holborn, Somers Town, Chalk Farm, West Hampstead and the Highgate edge.",
  coverageOutro:
    "If your street sits on the Camden border with Westminster, Islington, Haringey, Barnet or Brent, we cover that too. Tell us your postcode and we will confirm coverage and a price.",
  knowIntro:
    "Camden is one of the harder central boroughs to move in, and the access varies sharply by neighbourhood. Here is what our crews plan for.",
  knowBlocks: [
    // Council parking (indicative, confirm on the Camden portal): administration
    // charge around £63 including the free first day, then around £52 per space per
    // day from day two; among the longest notice periods in London.
    {
      label: "Parking and permits",
      body: "Camden has extensive controlled parking, most restricted in Hampstead and Primrose Hill, so we arrange a bay suspension with the council where a move needs it. Camden requires one of the longest notice periods in London, at least 17 working days before the suspension starts, so we apply as soon as your date is confirmed. There is a genuine benefit for home moves: Camden waives the space charge for the first day, up to three consecutive spaces, and does not apply the short notice charge for a move, although the administration charge still applies. Charges are then tiered by duration, to a maximum of six months. We arrange the suspension and factor it into your quote.",
    },
    {
      label: "Hills, roads and access",
      body: "In Hampstead and above Belsize Park the roads are steep, narrow and within conservation areas, so crew size and a planned loading point matter. Camden Town and Chalk Farm carry heavy traffic and market crowds around Camden High Street, so timing the van matters, and we plan around Kentish Town Road, Haverstock Hill and Finchley Road, with red-route sections on Euston Road.",
    },
    {
      label: "Property types",
      body: "Camden runs from grand period houses in Hampstead and Primrose Hill and large mansion blocks in Swiss Cottage and Belsize Park to Georgian terraces and institutional buildings in Bloomsbury and ex-local-authority estates in Somers Town and Gospel Oak. We bring the right protection and crew size for multi-floor period homes, stairs and tight turns.",
    },
    {
      label: "Emissions and charges",
      body: "Camden sits within the Greater London Ultra Low Emission Zone, and the southern tip around Bloomsbury and Holborn falls inside the central Congestion Charge zone, so we confirm this by street. The ULEZ charge is £12.50 a day for non-compliant vehicles, but our fleet is compliant, so there is no emissions charge on your move. Where a move falls inside the zone, the £18 Congestion Charge, Monday to Friday 7am to 6pm and weekends and bank holidays 12pm to 6pm, is factored into the plan.",
    },
  ],
  nearby: [
    { label: "Westminster", href: "/areas/westminster" },
    { label: "Islington", href: "/areas/islington" },
    { label: "Haringey", href: "/areas/haringey" },
    { label: "Barnet", href: "/areas/barnet" },
    { label: "Brent", href: "/areas/brent" },
  ],
  faqs: [
    {
      question: "Do you cover my Camden postcode?",
      answer:
        "Yes. We cover the whole London Borough of Camden, including NW1, NW3, NW5 and WC1, with parts of N6, N7, N19, NW6 and NW8, and every named neighbourhood from Camden Town to Hampstead. Send us your postcode and we will confirm coverage and a price.",
    },
    faqPrice("Camden"),
    {
      question: "Can you handle the parking and permits in Camden?",
      answer:
        "Yes. Camden has extensive controlled parking, very restricted in Hampstead and Primrose Hill, so where a move needs it we arrange a suspended parking bay with the council in advance, close to your door. We plan this into the move rather than leaving it to you.",
    },
    faqInsured(),
    faqSameDay("Camden"),
    faqFullMove("Camden"),
    {
      question: "Can you move a large period house in Hampstead?",
      answer:
        "Yes. Hampstead and Primrose Hill have large multi-floor period houses on steep, narrow conservation streets. We bring the right crew size and protection for multiple floors and original staircases, plan the loading point around the limited parking, and arrange a suspended bay where the move needs one.",
    },
  ],
};

/* ====================================================================== */
/* 2. HACKNEY                                                             */
/* ====================================================================== */

export const hackney: Borough = {
  slug: "hackney",
  name: "Hackney",
  h1: "Removals in Hackney",
  subhead: subhead("Hackney", "E2, E5, E8, E9, N1 and N16"),
  metaTitle: "Removals Hackney | Man and Van £55/hr | Removals Nationwide",
  metaDescription:
    "Experienced, insured removals and man and van in Hackney from £55/hr plus VAT. Local knowledge of warehouse conversions, estates and parking.",
  postcodes: ["E2", "E5", "E8", "E9", "N1", "N16"],
  heroImage: HERO_IMAGE,
  heroImageAlt: heroAlt("Hackney"),
  introLine: introLine("Hackney"),
  valueLine: VALUE_LINE,
  localBody: [
    localPara1("Hackney"),
    "What sets a Removals Nationwide move in Hackney apart is that the borough mixes tight Victorian streets, warehouse conversions and a high number of estate tower blocks, and each needs a different plan. We coordinate goods lifts, loading bays and porters in advance, so the move stays smooth on the day.",
  ],
  coverageIntro:
    "We cover every part of the London Borough of Hackney, including the E2, E5, E8, E9 and N16 postcodes and the N1 and E1 areas. Neighbourhoods we move people in and out of every week include:",
  neighbourhoods:
    "Hackney Central, Dalston, Stoke Newington, Shoreditch, Hoxton, Upper and Lower Clapton, Homerton, London Fields, Hackney Wick, De Beauvoir Town, Stamford Hill, Haggerston and Victoria Park.",
  coverageOutro:
    "If your street sits on the Hackney border with Islington, Tower Hamlets, Newham, Waltham Forest, Haringey or the City of London, we cover that too. Tell us your postcode and we will confirm coverage and a price.",
  knowIntro:
    "Hackney mixes tight Victorian streets, warehouse conversions and a high number of estate tower blocks, and each needs a different plan. Here is what our crews plan for.",
  knowBlocks: [
    {
      label: "Parking and permits",
      body: "Hackney operates extensive controlled parking with resident-only bays across the period streets of London Fields, Clapton and De Beauvoir, and it is one of the higher-cost boroughs for a suspension. Most London boroughs need 10 to 14 working days notice for a bay suspension and apply a daily space charge tiered by duration, so we apply as soon as your date is confirmed and book only the days and bays the move needs. We arrange the suspension, plan the loading point around Kingsland Road, Mare Street and Morning Lane, and factor it into your quote, confirming the exact current council charge before we rely on it.",
    },
    {
      label: "Lifts, loading bays and access",
      body: "Shoreditch and Hackney Wick bring warehouse conversions and new-build blocks, often with goods lifts, loading bays and booking rules we coordinate in advance. The estates across Homerton, Clapton and Hackney Central mean lift access, parking bays and porter coordination. Main routes such as Kingsland Road, Mare Street, Lower and Upper Clapton Road and Morning Lane are busy, so we time the loading point.",
    },
    {
      label: "Property types",
      body: "Hackney runs from Victorian terraces around London Fields and Clapton and Georgian terraces in De Beauvoir Town to warehouse and industrial conversions in Shoreditch and Hackney Wick, a large number of ex-local-authority tower blocks and estates, and new-build apartments around the Wick. We bring the right crew and protection for each.",
    },
    {
      label: "Emissions",
      body: "Hackney sits within the Greater London Ultra Low Emission Zone. The ULEZ charge is £12.50 a day for non-compliant vehicles, but our fleet is compliant, so there is no emissions charge on your move.",
    },
  ],
  nearby: [
    { label: "Islington", href: "/areas/islington" },
    { label: "Tower Hamlets", href: "/areas/tower-hamlets" },
    { label: "Newham", href: "/areas/newham" },
    { label: "Waltham Forest", href: "/areas/waltham-forest" },
    { label: "Haringey", href: "/areas/haringey" },
    { label: "City of London", href: "/areas/city-of-london" },
  ],
  faqs: [
    {
      question: "Do you cover my Hackney postcode?",
      answer:
        "Yes. We cover the whole London Borough of Hackney, including E2, E5, E8, E9, N16 and the N1 and E1 areas, and every named neighbourhood from Dalston to Hackney Wick. Send us your postcode and we will confirm coverage and a price.",
    },
    faqPrice("Hackney"),
    {
      question: "Can you handle the parking and permits in Hackney?",
      answer:
        "Yes. Hackney has extensive controlled parking, so where a move needs it we arrange a suspended parking bay with the council in advance, close to your door. We plan this into the move rather than leaving it to you.",
    },
    faqInsured(),
    faqSameDay("Hackney"),
    faqFullMove("Hackney"),
    {
      question: "Can you move from a warehouse conversion or an estate tower with a goods lift?",
      answer:
        "Yes. For Shoreditch and Hackney Wick warehouse conversions and new-builds, and for the estate tower blocks across Homerton and Clapton, we book the goods lift and loading bay through the building management and coordinate any porter access in advance, so the move runs to schedule.",
    },
  ],
};

/* ====================================================================== */
/* 3. WANDSWORTH                                                          */
/* ====================================================================== */

export const wandsworth: Borough = {
  slug: "wandsworth",
  name: "Wandsworth",
  h1: "Removals in Wandsworth",
  subhead: subhead("Wandsworth", "SW11, SW12, SW15, SW17 and SW18"),
  metaTitle: "Removals Wandsworth | Man and Van £55/hr | Removals Nationwide",
  metaDescription:
    "Experienced, insured removals and man and van in Wandsworth from £55/hr plus VAT. Local knowledge of terraces, riverside new-builds and parking.",
  postcodes: ["SW11", "SW12", "SW15", "SW17", "SW18"],
  heroImage: HERO_IMAGE,
  heroImageAlt: heroAlt("Wandsworth"),
  introLine: introLine("Wandsworth"),
  valueLine: VALUE_LINE,
  localBody: [
    localPara1("Wandsworth"),
    "What sets a Removals Nationwide move in Wandsworth apart is that the borough has one of the highest move turnovers in London, mostly families and professionals in period terraces, with a riverside new-build edge at Nine Elms. We plan the loading point and crew size for each and coordinate concierge blocks in advance.",
  ],
  coverageIntro:
    "We cover every part of the London Borough of Wandsworth, including the SW11, SW12, SW15, SW17 and SW18 postcodes, with parts of SW8 at Nine Elms and SW19. Neighbourhoods we move people in and out of every week include:",
  neighbourhoods:
    "Battersea, Clapham Junction and Between the Commons, Balham, Putney, Tooting, Earlsfield, Wandsworth Town, Southfields, Roehampton and Nine Elms.",
  coverageOutro:
    "If your street sits on the Wandsworth border with Lambeth, Merton, Richmond upon Thames, Hammersmith and Fulham or Kensington and Chelsea, we cover that too. Tell us your postcode and we will confirm coverage and a price.",
  knowIntro:
    "Wandsworth has one of the highest move turnovers in London, mostly families and professionals in period terraces. Here is what our crews plan for.",
  knowBlocks: [
    {
      label: "Parking and permits",
      body: "Controlled parking applies across most of the borough, though Wandsworth is one of the more affordable inner boroughs for a suspension. Around Between the Commons, Tooting and Earlsfield the long Victorian terraces have resident bays. Most London boroughs need 10 to 14 working days notice for a bay suspension and apply a daily space charge tiered by duration, so we apply as soon as your date is confirmed and book only the days and bays the move needs. We arrange the suspension, plan the loading point around Trinity Road, Garratt Lane and Putney High Street, and factor it into your quote, confirming the exact current council charge before we rely on it.",
    },
    {
      label: "Roads and access",
      body: "The terraces have narrow staircases, so a planned loading point and the right crew size keep the day efficient. Clapham Junction around St John's Road and Lavender Hill is heavily congested, so timing the van matters, and we plan around Trinity Road, Garratt Lane, Battersea Park Road and Putney High Street.",
    },
    {
      label: "Property types",
      body: "Wandsworth runs from rows of Victorian terraces around Between the Commons, Tooting and Earlsfield and mansion blocks in Putney and Battersea to riverside new-build apartments at Nine Elms and Battersea Power Station with concierge, service lifts and booking slots, and ex-local-authority housing at Roehampton. We coordinate the riverside blocks in advance.",
    },
    {
      label: "Emissions",
      body: "Wandsworth sits within the Greater London Ultra Low Emission Zone. The ULEZ charge is £12.50 a day for non-compliant vehicles, but our fleet is compliant, so there is no emissions charge on your move.",
    },
  ],
  nearby: [
    { label: "Lambeth", href: "/areas/lambeth" },
    { label: "Merton", href: "/areas/merton" },
    { label: "Richmond upon Thames", href: "/areas/richmond-upon-thames" },
    { label: "Hammersmith and Fulham", href: "/areas/hammersmith-and-fulham" },
    { label: "Kensington and Chelsea", href: "/areas/kensington-and-chelsea" },
  ],
  faqs: [
    {
      question: "Do you cover my Wandsworth postcode?",
      answer:
        "Yes. We cover the whole London Borough of Wandsworth, including SW11, SW12, SW15, SW17 and SW18, with parts of SW8 and SW19, and every named neighbourhood from Battersea to Tooting. Send us your postcode and we will confirm coverage and a price.",
    },
    faqPrice("Wandsworth"),
    {
      question: "Can you handle the parking and permits in Wandsworth?",
      answer:
        "Yes. Controlled parking applies across most of Wandsworth, so where a move needs it we arrange a suspended parking bay with the council in advance, close to your door. We plan this into the move rather than leaving it to you.",
    },
    faqInsured(),
    faqSameDay("Wandsworth"),
    faqFullMove("Wandsworth"),
    {
      question: "Can you move within Between the Commons or a Nine Elms concierge block?",
      answer:
        "Yes. For the Victorian terraces around Between the Commons we plan the loading point and crew size for narrow staircases and resident parking. For the Nine Elms and Battersea Power Station riverside blocks we book the service lift and loading slot with the concierge in advance.",
    },
  ],
};

/* ====================================================================== */
/* 4. LAMBETH                                                             */
/* ====================================================================== */

export const lambeth: Borough = {
  slug: "lambeth",
  name: "Lambeth",
  h1: "Removals in Lambeth",
  subhead: subhead("Lambeth", "SW2, SW4, SW8, SW9, SW16 and SE11"),
  metaTitle: "Removals Lambeth | Man and Van £55/hr | Removals Nationwide",
  metaDescription:
    "Experienced, insured removals and man and van in Lambeth from £55/hr plus VAT. Local knowledge of Clapham, Brixton, estates and parking.",
  postcodes: ["SW2", "SW4", "SW8", "SW9", "SW16", "SE11"],
  heroImage: HERO_IMAGE,
  heroImageAlt: heroAlt("Lambeth"),
  introLine: introLine("Lambeth"),
  valueLine: VALUE_LINE,
  localBody: [
    localPara1("Lambeth"),
    "What sets a Removals Nationwide move in Lambeth apart is that the borough runs from period Clapham and Kennington to dense Brixton and Streatham, and the access changes with it. We plan the loading point and crew size for terraces, estate lifts and Vauxhall concierge towers alike.",
  ],
  coverageIntro:
    "We cover every part of the London Borough of Lambeth, including the SW2, SW4, SW8, SW9, SW16 and SE11 postcodes, with SE24 at Herne Hill and SE27 at West Norwood. Neighbourhoods we move people in and out of every week include:",
  neighbourhoods:
    "Brixton, Clapham, Streatham, Stockwell, Vauxhall, Kennington, Herne Hill, West Norwood, Tulse Hill, Gipsy Hill and the Waterloo edge.",
  coverageOutro:
    "If your street sits on the Lambeth border with Wandsworth, Southwark, Croydon, Merton or Westminster, we cover that too. Tell us your postcode and we will confirm coverage and a price.",
  knowIntro:
    "Lambeth runs from period Clapham and Kennington to dense Brixton and Streatham, and the access changes with it. Here is what our crews plan for.",
  knowBlocks: [
    {
      label: "Parking and permits",
      body: "Controlled parking is widespread across Lambeth, and it is one of the higher-cost boroughs for a suspension. Clapham, Kennington and Herne Hill are period terraces with resident bays. Most London boroughs need 10 to 14 working days notice for a bay suspension and apply a daily space charge tiered by duration, so we apply as soon as your date is confirmed and book only the days and bays the move needs. We arrange the suspension, plan the loading point around Clapham High Street, Streatham High Road and Stockwell Road, and factor it into your quote, confirming the exact current council charge before we rely on it.",
    },
    {
      label: "Roads, estates and access",
      body: "Brixton and Stockwell have a high number of estate blocks needing lift access and porter coordination, and Brixton town centre around Brixton Road and Brixton Hill is heavily congested. The period terraces have narrow staircases. We plan around Clapham High Street, Streatham High Road, Kennington Road and Stockwell Road, and book service lifts in the Vauxhall towers in advance.",
    },
    {
      label: "Property types",
      body: "Lambeth runs from Georgian and Victorian terraces in Clapham, Kennington and Herne Hill to a large number of ex-local-authority estates around Brixton and Stockwell, period conversions throughout, and new-build at Vauxhall, Nine Elms and Waterloo. We bring the right crew and protection for each.",
    },
    {
      label: "Emissions and charges",
      body: "Lambeth sits within the Greater London Ultra Low Emission Zone, and the northern tip around Waterloo and Vauxhall falls inside the central Congestion Charge zone, so we confirm this by street. The ULEZ charge is £12.50 a day for non-compliant vehicles, but our fleet is compliant, so there is no emissions charge on your move. The £18 Congestion Charge is factored into the plan where a move falls inside the zone.",
    },
  ],
  nearby: [
    { label: "Wandsworth", href: "/areas/wandsworth" },
    { label: "Southwark", href: "/areas/southwark" },
    { label: "Croydon", href: "/areas/croydon" },
    { label: "Merton", href: "/areas/merton" },
    { label: "Westminster", href: "/areas/westminster" },
  ],
  faqs: [
    {
      question: "Do you cover my Lambeth postcode?",
      answer:
        "Yes. We cover the whole London Borough of Lambeth, including SW2, SW4, SW8, SW9, SW16 and SE11, with SE24 and SE27, and every named neighbourhood from Clapham to Streatham. Send us your postcode and we will confirm coverage and a price.",
    },
    faqPrice("Lambeth"),
    {
      question: "Can you handle the parking and permits in Lambeth?",
      answer:
        "Yes. Controlled parking is widespread in Lambeth, so where a move needs it we arrange a suspended parking bay with the council in advance, close to your door. We plan this into the move rather than leaving it to you.",
    },
    faqInsured(),
    faqSameDay("Lambeth"),
    faqFullMove("Lambeth"),
    {
      question: "Can you move from a Brixton or Stockwell estate block?",
      answer:
        "Yes. The estates around Brixton and Stockwell need lift access and porter coordination, which we arrange in advance, and we plan the loading point around the Brixton town-centre congestion so the move runs to schedule.",
    },
  ],
};

/* ====================================================================== */
/* 5. TOWER HAMLETS                                                       */
/* ====================================================================== */

export const towerHamlets: Borough = {
  slug: "tower-hamlets",
  name: "Tower Hamlets",
  h1: "Removals in Tower Hamlets",
  subhead: subhead("Tower Hamlets", "E1, E2, E3 and E14"),
  metaTitle: "Removals Tower Hamlets | Man and Van £55/hr | Removals Nationwide",
  metaDescription:
    "Experienced, insured removals and man and van in Tower Hamlets from £55/hr plus VAT. Canary Wharf high-rise moves, parking and access.",
  postcodes: ["E1", "E2", "E3", "E14"],
  heroImage: HERO_IMAGE,
  heroImageAlt: heroAlt("Tower Hamlets"),
  introLine: introLine("Tower Hamlets"),
  valueLine: VALUE_LINE,
  localBody: [
    localPara1("Tower Hamlets"),
    "What sets a Removals Nationwide move in Tower Hamlets apart is that the borough has one of the highest concentrations of high-rise flat moves in London, and those moves live or die on building logistics. We book service lifts and loading bays through the building manager and coordinate private estate parking in advance.",
  ],
  coverageIntro:
    "We cover every part of the London Borough of Tower Hamlets, including the E1, E1W, E2, E3 and E14 postcodes. Neighbourhoods we move people in and out of every week include:",
  neighbourhoods:
    "Canary Wharf, Isle of Dogs, Bethnal Green, Bow, Whitechapel, Wapping, Shadwell, Mile End, Poplar, Limehouse, Stepney, Spitalfields and Blackwall.",
  coverageOutro:
    "If your street sits on the Tower Hamlets border with Hackney, Newham, the City of London, Greenwich or Southwark, we cover that too. Tell us your postcode and we will confirm coverage and a price.",
  knowIntro:
    "Tower Hamlets has one of the highest concentrations of high-rise flat moves in London, and those moves live or die on building logistics. Here is what our crews plan for.",
  knowBlocks: [
    {
      label: "Service lifts and loading bays",
      body: "At Canary Wharf, the Isle of Dogs and Blackwall the towers have managed access, so you book a service lift and a loading bay through the building manager. We coordinate all of this in advance, which is the single most important part of a high-rise move here.",
    },
    {
      label: "Parking and permits",
      body: "Parking is controlled by council zones and, on the Isle of Dogs and at Canary Wharf, by private estate management rather than just the council. Most London boroughs need 10 to 14 working days notice for a council bay suspension and apply a daily space charge tiered by duration, so we apply as soon as your date is confirmed, and on the private estates we arrange the estate permit instead. We arrange whichever applies, plan the loading point around the A13, Commercial Road and Whitechapel Road, and factor it into your quote, confirming the exact current charge before we rely on it.",
    },
    {
      label: "Roads, wharves and property",
      body: "Wapping and Limehouse add warehouse conversions with narrow cobbled approaches and goods lifts. Bow, Bethnal Green and Whitechapel are Victorian terraces, Spitalfields adds Georgian houses, and there are many ex-local-authority estates. Main routes such as the A13, Commercial Road, Mile End Road and Whitechapel Road are busy, so we time the van.",
    },
    {
      label: "Emissions and charges",
      body: "Tower Hamlets sits within the Greater London Ultra Low Emission Zone, and the western edge near the City falls inside the central Congestion Charge zone, so we confirm this by street. The ULEZ charge is £12.50 a day for non-compliant vehicles, but our fleet is compliant, so there is no emissions charge on your move. The £18 Congestion Charge is factored into the plan where a move falls inside the zone.",
    },
  ],
  nearby: [
    { label: "Hackney", href: "/areas/hackney" },
    { label: "Newham", href: "/areas/newham" },
    { label: "City of London", href: "/areas/city-of-london" },
    { label: "Greenwich", href: "/areas/greenwich" },
    { label: "Southwark", href: "/areas/southwark" },
  ],
  faqs: [
    {
      question: "Do you cover my Tower Hamlets postcode?",
      answer:
        "Yes. We cover the whole London Borough of Tower Hamlets, including E1, E1W, E2, E3 and E14, and every named neighbourhood from Bethnal Green to Canary Wharf. Send us your postcode and we will confirm coverage and a price.",
    },
    faqPrice("Tower Hamlets"),
    {
      question: "How do you handle a Canary Wharf tower move with a service lift?",
      answer:
        "We book the service lift and the loading bay through the building manager in advance, confirm the booking window and any private estate parking permit, and plan the crew and timing around it. This building coordination is the most important part of a high-rise move at Canary Wharf or the Isle of Dogs.",
    },
    {
      question: "Can you handle the parking and permits in Tower Hamlets?",
      answer:
        "Yes. Parking is controlled by council zones and, on the Isle of Dogs and at Canary Wharf, by private estate management. We arrange a suspended bay or the estate permit in advance so the van can load legally and close to your entrance.",
    },
    faqInsured(),
    faqSameDay("Tower Hamlets"),
    faqFullMove("Tower Hamlets"),
  ],
};

/* ====================================================================== */
/* 6. WESTMINSTER                                                         */
/* ====================================================================== */

export const westminster: Borough = {
  slug: "westminster",
  name: "Westminster",
  h1: "Removals in Westminster",
  subhead: subhead("Westminster", "W1, W2, SW1 and NW8"),
  metaTitle: "Removals Westminster | Man and Van £55/hr | Removals Nationwide",
  metaDescription:
    "Experienced, insured removals and man and van in Westminster from £55/hr plus VAT. Prime handling, Congestion Charge and parking managed.",
  postcodes: ["W1", "W2", "SW1", "NW8"],
  heroImage: HERO_IMAGE,
  heroImageAlt: heroAlt("Westminster"),
  introLine: introLine("Westminster"),
  valueLine: VALUE_LINE,
  localBody: [
    localPara1("Westminster"),
    "What sets a Removals Nationwide move in Westminster apart is that it is the most access-restricted borough in London and the homes are often high-value, so careful planning, full insurance and a suspended parking bay matter more here than anywhere. We coordinate porter buildings and protect listed interiors.",
  ],
  coverageIntro:
    "We cover every part of the City of Westminster, including the W1, W2, SW1, WC2, NW8 and W9 postcodes. Neighbourhoods we move people in and out of every week include:",
  neighbourhoods:
    "Mayfair, Marylebone, Soho, Fitzrovia, Belgravia, Pimlico, Victoria, Paddington, Bayswater, St John's Wood, Maida Vale, Covent Garden and the Knightsbridge edge.",
  coverageOutro:
    "If your street sits on the Westminster border with Camden, Kensington and Chelsea, the City of London, Lambeth or Wandsworth, we cover that too. Tell us your postcode and we will confirm coverage and a price.",
  knowIntro:
    "Westminster is the most access-restricted borough in London and the homes are often high-value, so careful planning and full insurance matter. Here is what our crews plan for.",
  knowBlocks: [
    // Council parking (indicative, confirm on the Westminster portal): central
    // space charge around £51 to £55 per bay per day; estate-land suspensions need
    // a posted application, not the online form.
    {
      label: "Parking and bay suspensions",
      body: "Westminster has the most controlled parking in London and most of the borough sits inside both the ULEZ and the Congestion Charge zone, so a bay suspension arranged with the council in advance is usually essential. Westminster needs at least 10 working days notice for a suspension; applications made within 10 calendar days of the start carry a £20 short notice administration fee and may be declined. Charges are tiered by duration and vary by location, with traffic sensitive streets costing more, although the council applies a concession for domestic removal vans on those streets, charging the lower standard rate. A suspended bay is counted as five metres unless individually marked, so we book the right number of bays for the van and ramp. We arrange all of this and factor the suspension into your quote.",
    },
    {
      label: "Roads and building access",
      body: "Mayfair, Belgravia and Marylebone are mansion blocks and grand stucco terraces with porters, lifts and strict building rules we coordinate. Soho, Fitzrovia and Covent Garden have narrow and partly pedestrianised streets with tight loading windows. Red routes run along Park Lane, Edgware Road, Marylebone Road, Bayswater Road and Victoria Street.",
    },
    {
      label: "Prime and listed property",
      body: "Much of the borough is high-value: prime mansion blocks in Marylebone, Maida Vale and St John's Wood, grand stucco terraces in Belgravia and Pimlico, porter and concierge buildings, and listed buildings. We protect high-value and listed interiors and move with insured, experienced crews.",
    },
    {
      label: "Emissions and charges",
      body: "Westminster sits within both the Greater London Ultra Low Emission Zone and the central Congestion Charge zone. The ULEZ charge is £12.50 a day for non-compliant vehicles, but our fleet is compliant, so there is no emissions charge on your move. The Congestion Charge is £18 a day, Monday to Friday 7am to 6pm and weekends and bank holidays 12pm to 6pm, which we factor into the plan.",
    },
  ],
  nearby: [
    { label: "Camden", href: "/areas/camden" },
    { label: "Kensington and Chelsea", href: "/areas/kensington-and-chelsea" },
    { label: "City of London", href: "/areas/city-of-london" },
    { label: "Lambeth", href: "/areas/lambeth" },
    { label: "Wandsworth", href: "/areas/wandsworth" },
  ],
  faqs: [
    {
      question: "Do you cover my Westminster postcode?",
      answer:
        "Yes. We cover the whole City of Westminster, including W1, W2, SW1, WC2, NW8 and W9, and every named neighbourhood from Mayfair to Maida Vale. Send us your postcode and we will confirm coverage and a price.",
    },
    faqPrice("Westminster"),
    {
      question: "How do the Congestion Charge and parking work for a Westminster move?",
      answer:
        "Most of Westminster sits inside the Congestion Charge zone and parking is the most controlled in London, so a suspended parking bay arranged with the council in advance is usually essential. We plan both into the move and our fleet is ULEZ compliant.",
    },
    {
      question: "Can you carefully handle high-value or listed interiors?",
      answer:
        "Yes. Much of Westminster is high-value mansion blocks, stucco terraces and listed buildings. Every move includes goods-in-transit insurance in the price, our crews are vetted and background-checked, and we bring full protection for high-value and listed interiors.",
    },
    faqInsured(),
    faqSameDay("Westminster"),
    faqFullMove("Westminster"),
  ],
};

/* ====================================================================== */
/* 7. KENSINGTON AND CHELSEA                                              */
/* ====================================================================== */

export const kensingtonAndChelsea: Borough = {
  slug: "kensington-and-chelsea",
  name: "Kensington and Chelsea",
  h1: "Removals in Kensington and Chelsea",
  subhead: subhead("Kensington and Chelsea", "SW3, SW5, SW7, W8 and W11"),
  metaTitle: "Removals Kensington & Chelsea | Insured | Removals Nationwide",
  metaDescription:
    "Experienced, insured removals and man and van in Kensington & Chelsea from £55/hr plus VAT. Prime and mews handling, parking and property.",
  postcodes: ["SW3", "SW5", "SW7", "W8", "W11"],
  areaServedName: "Royal Borough of Kensington and Chelsea",
  heroImage: HERO_IMAGE,
  heroImageAlt: heroAlt("Kensington and Chelsea"),
  introLine: introLine("Kensington and Chelsea"),
  valueLine: VALUE_LINE,
  localBody: [
    localPara1("Kensington and Chelsea"),
    "What sets a Removals Nationwide move in Kensington and Chelsea apart is that the borough is prime, high-value and tightly conserved, with many narrow mews houses, so careful handling, full insurance and a planned approach to access matter. We protect high-value interiors and plan a transfer where a mews entrance only fits a small vehicle.",
  ],
  coverageIntro:
    "We cover every part of the Royal Borough of Kensington and Chelsea, including the SW3, SW5, SW7, SW10, W8, W10 and W11 postcodes. Neighbourhoods we move people in and out of every week include:",
  neighbourhoods:
    "Chelsea, Knightsbridge, South Kensington, Kensington, Notting Hill, Earl's Court, Holland Park, Ladbroke Grove, North Kensington, World's End and Brompton.",
  coverageOutro:
    "If your street sits on the Kensington and Chelsea border with Westminster, Hammersmith and Fulham or Wandsworth, we cover that too. Tell us your postcode and we will confirm coverage and a price.",
  knowIntro:
    "Kensington and Chelsea is prime, high-value and tightly conserved, so the move needs careful handling and a planned approach to access. Here is what our crews plan for.",
  knowBlocks: [
    {
      label: "Mews and narrow access",
      body: "The borough has many mews houses reached through narrow cobbled entrances where only a small vehicle fits, so a transfer plan may be needed. We assess the access in advance and bring the right vehicle and crew so the move runs without surprises on the day.",
    },
    {
      label: "Parking and permits",
      body: "Parking is among the most controlled and most expensive in London, and short notice express applications carry a large surcharge, so we apply as soon as your date is confirmed. Most London boroughs need 10 to 14 working days notice for a bay suspension and apply a daily space charge tiered by duration, and we book only the days and bays the move needs. We arrange the suspension, plan the loading point around the King's Road, Cromwell Road and Holland Park Avenue and their red-route sections, and factor it into your quote, confirming the exact current council charge before we rely on it.",
    },
    {
      label: "Prime and conserved property",
      body: "Much of the borough is white-stucco terraces and grand townhouses in conservation areas, with mansion blocks in Knightsbridge and South Kensington that have porters, lifts and strict rules, plus ex-local-authority housing in North Kensington. We protect high-value interiors and coordinate mansion-block access in advance.",
    },
    {
      label: "Emissions",
      body: "Kensington and Chelsea sits within the Greater London Ultra Low Emission Zone. The ULEZ charge is £12.50 a day for non-compliant vehicles, but our fleet is compliant, so there is no emissions charge on your move.",
    },
  ],
  nearby: [
    { label: "Westminster", href: "/areas/westminster" },
    { label: "Hammersmith and Fulham", href: "/areas/hammersmith-and-fulham" },
    { label: "Wandsworth", href: "/areas/wandsworth" },
  ],
  faqs: [
    {
      question: "Do you cover my Kensington and Chelsea postcode?",
      answer:
        "Yes. We cover the whole Royal Borough of Kensington and Chelsea, including SW3, SW5, SW7, SW10, W8, W10 and W11, and every named neighbourhood from Chelsea to Notting Hill. Send us your postcode and we will confirm coverage and a price.",
    },
    faqPrice("Kensington and Chelsea"),
    {
      question: "Can you move to or from a mews house with restricted vehicle access?",
      answer:
        "Yes. Many mews are reached through narrow cobbled entrances where only a small vehicle fits, so we assess the access in advance, bring the right vehicle, and plan a transfer where needed so your belongings are moved safely without blocking the mews.",
    },
    {
      question: "Can you carefully handle high-value interiors?",
      answer:
        "Yes. Much of the borough is prime, high-value property in conservation areas. Every move includes goods-in-transit insurance in the price, our crews are vetted and background-checked, and we bring full protection for high-value interiors.",
    },
    faqInsured(),
    faqSameDay("Kensington and Chelsea"),
    faqFullMove("Kensington and Chelsea"),
  ],
};

/* ====================================================================== */
/* 8. HAMMERSMITH AND FULHAM                                              */
/* ====================================================================== */

export const hammersmithAndFulham: Borough = {
  slug: "hammersmith-and-fulham",
  name: "Hammersmith and Fulham",
  h1: "Removals in Hammersmith and Fulham",
  subhead: subhead("Hammersmith and Fulham", "W6, W12, W14 and SW6"),
  metaTitle: "Removals Hammersmith & Fulham | Insured | Removals Nationwide",
  metaDescription:
    "Experienced, insured removals and man and van in Hammersmith & Fulham from £55/hr plus VAT. Fulham terraces, riverside, parking and property.",
  postcodes: ["W6", "W12", "W14", "SW6"],
  heroImage: HERO_IMAGE,
  heroImageAlt: heroAlt("Hammersmith and Fulham"),
  introLine: introLine("Hammersmith and Fulham"),
  valueLine: VALUE_LINE,
  localBody: [
    localPara1("Hammersmith and Fulham"),
    "What sets a Removals Nationwide move in Hammersmith and Fulham apart is that the borough is mostly period terraces and conversions with a growing riverside new-build edge. We plan the loading point and crew size for narrow staircases and coordinate the Imperial Wharf and Fulham Reach concierge blocks in advance.",
  ],
  coverageIntro:
    "We cover every part of the London Borough of Hammersmith and Fulham, including the W6, W12, W14 and SW6 postcodes, with parts of W4 and NW10. Neighbourhoods we move people in and out of every week include:",
  neighbourhoods:
    "Hammersmith, Fulham, Shepherd's Bush, West Kensington, Parsons Green, Sands End, Fulham Broadway, White City, Brook Green and Barons Court.",
  coverageOutro:
    "If your street sits on the Hammersmith and Fulham border with Kensington and Chelsea, Brent, Ealing, Hounslow, Wandsworth or Richmond upon Thames, we cover that too. Tell us your postcode and we will confirm coverage and a price.",
  knowIntro:
    "Hammersmith and Fulham is mostly period terraces and conversions with a growing riverside new-build edge. Here is what our crews plan for.",
  knowBlocks: [
    {
      label: "Parking and permits",
      body: "Controlled parking applies in most areas, and Fulham is street after street of Victorian terraces with resident bays. Most London boroughs need 10 to 14 working days notice for a bay suspension and apply a daily space charge tiered by duration, so we apply as soon as your date is confirmed and book only the days and bays the move needs. We arrange the suspension, plan the loading point around Fulham Palace Road, Fulham Road and Wandsworth Bridge Road, and factor it into your quote, confirming the exact current council charge before we rely on it.",
    },
    {
      label: "Roads and access",
      body: "The terraces have narrow staircases, so a planned loading point and the right crew size keep the day moving. The Hammersmith gyratory and main routes such as Fulham Palace Road, Fulham Road, King Street, Uxbridge Road and Wandsworth Bridge Road are congested, so we time the van.",
    },
    {
      label: "Property types",
      body: "The borough runs from rows of Victorian terraces across Fulham, including the lettered streets and Brackenbury Village, and mansion blocks in West Kensington and Barons Court, to riverside new-build at Imperial Wharf and Fulham Reach with concierge and service-lift booking, and ex-local-authority housing around White City. We coordinate the riverside blocks in advance.",
    },
    {
      label: "Emissions",
      body: "Hammersmith and Fulham sits within the Greater London Ultra Low Emission Zone. The ULEZ charge is £12.50 a day for non-compliant vehicles, but our fleet is compliant, so there is no emissions charge on your move.",
    },
  ],
  nearby: [
    { label: "Kensington and Chelsea", href: "/areas/kensington-and-chelsea" },
    { label: "Brent", href: "/areas/brent" },
    { label: "Ealing", href: "/areas/ealing" },
    { label: "Hounslow", href: "/areas/hounslow" },
    { label: "Wandsworth", href: "/areas/wandsworth" },
    { label: "Richmond upon Thames", href: "/areas/richmond-upon-thames" },
  ],
  faqs: [
    {
      question: "Do you cover my Hammersmith and Fulham postcode?",
      answer:
        "Yes. We cover the whole London Borough of Hammersmith and Fulham, including W6, W12, W14 and SW6, with parts of W4 and NW10, and every named neighbourhood from Fulham to Shepherd's Bush. Send us your postcode and we will confirm coverage and a price.",
    },
    faqPrice("Hammersmith and Fulham"),
    {
      question: "Can you handle the parking and permits in Hammersmith and Fulham?",
      answer:
        "Yes. Controlled parking applies in most areas, so where a move needs it we arrange a suspended parking bay with the council in advance, close to your door. We plan this into the move rather than leaving it to you.",
    },
    faqInsured(),
    faqSameDay("Hammersmith and Fulham"),
    faqFullMove("Hammersmith and Fulham"),
    {
      question: "Can you move within the Fulham terraces or an Imperial Wharf concierge block?",
      answer:
        "Yes. For the Fulham terraced streets we plan the loading point and crew size for narrow staircases and resident parking. For the riverside blocks at Imperial Wharf and Fulham Reach we book the service lift and loading slot with the concierge in advance.",
    },
  ],
};

/* ====================================================================== */
/* 9. SOUTHWARK                                                           */
/* ====================================================================== */

export const southwark: Borough = {
  slug: "southwark",
  name: "Southwark",
  h1: "Removals in Southwark",
  subhead: subhead("Southwark", "SE1, SE5, SE15, SE16 and SE22"),
  metaTitle: "Removals Southwark | Man and Van £55/hr | Removals Nationwide",
  metaDescription:
    "Experienced, insured removals and man and van in Southwark from £55/hr plus VAT. Local knowledge of conversions, estates and parking.",
  postcodes: ["SE1", "SE5", "SE15", "SE16", "SE22"],
  heroImage: HERO_IMAGE,
  heroImageAlt: heroAlt("Southwark"),
  introLine: introLine("Southwark"),
  valueLine: VALUE_LINE,
  localBody: [
    localPara1("Southwark"),
    "What sets a Removals Nationwide move in Southwark apart is that the borough runs from riverside warehouse conversions to leafy Dulwich and dense Walworth, and the access varies with it. We plan vehicle size and the loading point for cobbled conversion approaches, estate lifts and Elephant new-build towers alike.",
  ],
  coverageIntro:
    "We cover every part of the London Borough of Southwark, including the SE1, SE5, SE15, SE16, SE17 and SE22 postcodes, with parts of SE21 and SE24 around Dulwich. Neighbourhoods we move people in and out of every week include:",
  neighbourhoods:
    "Bermondsey, Borough, Bankside, Peckham, Camberwell, Dulwich and Dulwich Village, Rotherhithe, Surrey Quays, Walworth, Nunhead, Elephant and Castle and London Bridge.",
  coverageOutro:
    "If your street sits on the Southwark border with Lambeth, Lewisham, the City of London or Tower Hamlets, we cover that too. Tell us your postcode and we will confirm coverage and a price.",
  knowIntro:
    "Southwark runs from riverside warehouse conversions to leafy Dulwich and dense Walworth, and the access varies with it. Here is what our crews plan for.",
  knowBlocks: [
    {
      label: "Warehouse conversions and goods lifts",
      body: "Bermondsey and Shad Thames are warehouse conversions reached by narrow cobbled streets with goods lifts, so vehicle size and a loading plan matter. We assess the access in advance and bring the right vehicle so the move runs without surprises.",
    },
    {
      label: "Parking and permits",
      body: "Controlled parking applies across the inner areas, and East Dulwich, Camberwell and Peckham are Victorian terraces with resident bays. Most London boroughs need 10 to 14 working days notice for a bay suspension and apply a daily space charge tiered by duration, so we apply as soon as your date is confirmed and book only the days and bays the move needs. We arrange the suspension, plan the loading point around the Old Kent Road, Walworth Road and Lordship Lane, and factor it into your quote, confirming the exact current council charge before we rely on it.",
    },
    {
      label: "Roads, estates and property",
      body: "Walworth and Elephant and Castle have a high number of estate blocks needing lift access and porter coordination, and the Elephant regeneration adds new-build towers with concierge booking. Dulwich Village adds Georgian houses. Borough Market and the Bankside riverside are congested, and we plan around the Old Kent Road, Walworth Road, Tower Bridge Road, Jamaica Road and Lordship Lane.",
    },
    {
      label: "Emissions and charges",
      body: "Southwark sits within the Greater London Ultra Low Emission Zone, and the northern tip around Bankside and Borough falls inside the central Congestion Charge zone, so we confirm this by street. The ULEZ charge is £12.50 a day for non-compliant vehicles, but our fleet is compliant, so there is no emissions charge on your move. The £18 Congestion Charge is factored into the plan where a move falls inside the zone.",
    },
  ],
  nearby: [
    { label: "Lambeth", href: "/areas/lambeth" },
    { label: "Lewisham", href: "/areas/lewisham" },
    { label: "City of London", href: "/areas/city-of-london" },
    { label: "Tower Hamlets", href: "/areas/tower-hamlets" },
  ],
  faqs: [
    {
      question: "Do you cover my Southwark postcode?",
      answer:
        "Yes. We cover the whole London Borough of Southwark, including SE1, SE5, SE15, SE16, SE17 and SE22, with parts of SE21 and SE24, and every named neighbourhood from Bermondsey to Dulwich. Send us your postcode and we will confirm coverage and a price.",
    },
    faqPrice("Southwark"),
    {
      question: "Can you handle the parking and permits in Southwark?",
      answer:
        "Yes. Controlled parking applies across the inner areas, so where a move needs it we arrange a suspended parking bay with the council in advance, close to your door. We plan this into the move rather than leaving it to you.",
    },
    faqInsured(),
    faqSameDay("Southwark"),
    faqFullMove("Southwark"),
    {
      question: "Can you move from a Shad Thames or Bermondsey warehouse conversion with a goods lift?",
      answer:
        "Yes. The Bermondsey and Shad Thames conversions are reached by narrow cobbled streets and use goods lifts, so we assess the access in advance, bring the right vehicle, book the goods lift, and plan the loading point so the move runs to schedule.",
    },
  ],
};

/* ====================================================================== */
/* 10. LEWISHAM                                                           */
/* ====================================================================== */

export const lewisham: Borough = {
  slug: "lewisham",
  name: "Lewisham",
  h1: "Removals in Lewisham",
  subhead: subhead("Lewisham", "SE4, SE6, SE8, SE13, SE14 and SE23"),
  metaTitle: "Removals Lewisham | Man and Van £55/hr | Removals Nationwide",
  metaDescription:
    "Experienced, insured removals and man and van in Lewisham from £55/hr plus VAT. Local knowledge of period terraces, parking and property.",
  postcodes: ["SE4", "SE6", "SE8", "SE13", "SE14", "SE23"],
  heroImage: HERO_IMAGE,
  heroImageAlt: heroAlt("Lewisham"),
  introLine: introLine("Lewisham"),
  valueLine: VALUE_LINE,
  localBody: [
    localPara1("Lewisham"),
    "What sets a Removals Nationwide move in Lewisham apart is that it is largely period terraces with pockets of estate housing and new-build, and parking control varies across the borough, so we confirm it per street rather than assume it.",
  ],
  coverageIntro:
    "We cover every part of the London Borough of Lewisham, including the SE4, SE6, SE8, SE12, SE13, SE14, SE23 and SE26 postcodes, with part of SE10. Neighbourhoods we move people in and out of every week include:",
  neighbourhoods:
    "Lewisham, Deptford, New Cross, Brockley, Catford, Forest Hill, Sydenham, Hither Green, Lee, Honor Oak, Ladywell, Bellingham, Grove Park and the Blackheath edge.",
  coverageOutro:
    "If your street sits on the Lewisham border with Greenwich, Southwark, Bromley or Tower Hamlets, we cover that too. Tell us your postcode and we will confirm coverage and a price.",
  knowIntro:
    "Lewisham is largely period terraces with pockets of estate housing and new-build, and parking control varies across the borough, which is a real planning point. Here is what our crews plan for.",
  knowBlocks: [
    {
      label: "Parking varies by street",
      body: "Inner areas such as New Cross, Deptford and Brockley have controlled parking zones, while outer areas around Grove Park and parts of Lee are less restricted, so we confirm parking per street rather than assume it. Where a suspension is needed, most London boroughs require 10 to 14 working days notice and apply a daily space charge tiered by duration, so we apply as soon as your date is confirmed and arrange a suspended bay only where the move needs one. We plan the loading point around Lewisham High Street, New Cross Road and Brockley Road and factor any suspension into your quote, confirming the exact current council charge before we rely on it.",
    },
    {
      label: "Roads and access",
      body: "Brockley, Hither Green and Forest Hill are Victorian terraces with narrow staircases, and Catford, Bellingham and Deptford add estate blocks needing lift access. Main routes such as Lewisham High Street, Lewisham Way, New Cross Road, Brockley Road and Bromley Road are busy around Lewisham town centre.",
    },
    {
      label: "Property types",
      body: "The borough has strong Victorian terrace stock in Brockley, Hither Green and Forest Hill, ex-local-authority estates around Catford, Bellingham and Deptford, some Georgian on the Blackheath edge, and new-build in Lewisham town centre and along the Deptford riverside. We bring the right crew and protection for each.",
    },
    {
      label: "Emissions",
      body: "Lewisham sits within the Greater London Ultra Low Emission Zone. The ULEZ charge is £12.50 a day for non-compliant vehicles, but our fleet is compliant, so there is no emissions charge on your move.",
    },
  ],
  nearby: [
    { label: "Greenwich", href: "/areas/greenwich" },
    { label: "Southwark", href: "/areas/southwark" },
    { label: "Bromley", href: "/areas/bromley" },
    { label: "Tower Hamlets", href: "/areas/tower-hamlets" },
  ],
  faqs: [
    {
      question: "Do you cover my Lewisham postcode?",
      answer:
        "Yes. We cover the whole London Borough of Lewisham, including SE4, SE6, SE8, SE12, SE13, SE14, SE23 and SE26, and every named neighbourhood from Deptford to Sydenham. Send us your postcode and we will confirm coverage and a price.",
    },
    faqPrice("Lewisham"),
    {
      question: "Is parking controlled for a move in Brockley versus Grove Park?",
      answer:
        "It varies. Inner areas such as New Cross, Deptford and Brockley have controlled parking zones, while outer areas around Grove Park and parts of Lee are less restricted. We confirm parking per street and arrange a suspended bay with the council only where the move needs one.",
    },
    faqInsured(),
    faqSameDay("Lewisham"),
    faqFullMove("Lewisham"),
    faqNearby("Lewisham", "Greenwich, Southwark, Bromley and Tower Hamlets"),
  ],
};

/* ====================================================================== */
/* 11. EALING                                                             */
/* ====================================================================== */

export const ealing: Borough = {
  slug: "ealing",
  name: "Ealing",
  h1: "Removals in Ealing",
  subhead: subhead("Ealing", "W3, W5, W7, W13, UB1 and UB6"),
  metaTitle: "Removals Ealing | Man and Van £55/hr | Removals Nationwide",
  metaDescription:
    "Experienced, insured removals and man and van in Ealing from £55/hr plus VAT. Local knowledge of suburban semis, driveways and parking.",
  postcodes: ["W3", "W5", "W7", "W13", "UB1", "UB6"],
  heroImage: HERO_IMAGE,
  heroImageAlt: heroAlt("Ealing"),
  introLine: introLine("Ealing"),
  valueLine: VALUE_LINE,
  localBody: [
    localPara1("Ealing"),
    "What sets a Removals Nationwide move in Ealing apart is that the borough is more suburban than inner London, so many moves are from larger houses and semis with their own driveways and wider streets, which can make access easier, though there are still congestion and controlled-parking pockets to plan for.",
  ],
  coverageIntro:
    "We cover every part of the London Borough of Ealing, including the W3, W5, W7, W13, UB1, UB2 and UB6 postcodes, with parts of NW10 at Park Royal and W4. Neighbourhoods we move people in and out of every week include:",
  neighbourhoods:
    "Ealing and Ealing Broadway, Acton, Southall, Greenford, Hanwell, West Ealing, Northolt, Perivale, Pitshanger and Northfields.",
  coverageOutro:
    "If your street sits on the Ealing border with Hammersmith and Fulham, Brent, Hounslow, Hillingdon or Harrow, we cover that too. Tell us your postcode and we will confirm coverage and a price.",
  knowIntro:
    "Ealing is more suburban than inner London, so many moves are from larger houses and semis with driveways, though the borough still has congestion and controlled-parking pockets to plan for. Here is what our crews plan for.",
  knowBlocks: [
    {
      label: "Driveways and easier access",
      body: "Ealing, Pitshanger and Northfields are large Edwardian and Victorian houses, while Greenford, Perivale and Northolt are interwar semis where a driveway often gives direct loading access. The wider suburban streets can make a move easier than in inner London.",
    },
    {
      label: "Parking varies by street",
      body: "Controlled parking applies around Ealing Broadway, Acton and the stations, while many outer residential streets are unrestricted, so we confirm parking per street, and Ealing sits at the more affordable end for a suspension. Where one is needed, most London boroughs require 10 to 14 working days notice and apply a daily space charge tiered by duration, so we apply as soon as your date is confirmed and arrange a suspended bay only where the move needs one. We plan the loading point around the Uxbridge Road and Greenford Road and factor any suspension into your quote, confirming the exact current council charge before we rely on it.",
    },
    {
      label: "Roads and property",
      body: "Acton and Southall add terraces and new-build with tighter parking near the town centres. The Hanger Lane gyratory, Western Avenue, the Uxbridge Road and Greenford Road carry heavy traffic, so we plan timing and the loading point around them.",
    },
    {
      label: "Emissions",
      body: "Ealing sits within the Greater London Ultra Low Emission Zone. The ULEZ charge is £12.50 a day for non-compliant vehicles, but our fleet is compliant, so there is no emissions charge on your move.",
    },
  ],
  nearby: [
    { label: "Hammersmith and Fulham", href: "/areas/hammersmith-and-fulham" },
    { label: "Brent", href: "/areas/brent" },
    { label: "Hounslow", href: "/areas/hounslow" },
    { label: "Hillingdon", href: "/areas/hillingdon" },
    { label: "Harrow", href: "/areas/harrow" },
  ],
  faqs: [
    {
      question: "Do you cover my Ealing postcode?",
      answer:
        "Yes. We cover the whole London Borough of Ealing, including W3, W5, W7, W13, UB1, UB2 and UB6, with parts of NW10 and W4, and every named neighbourhood from Acton to Southall. Send us your postcode and we will confirm coverage and a price.",
    },
    faqPrice("Ealing"),
    {
      question: "Can you move a larger family house with driveway access in Ealing?",
      answer:
        "Yes. Many Ealing homes are larger houses and semis with driveways and wider streets, which often makes loading easier. We bring the right crew and van size for a larger property and confirm whether the driveway gives direct access or a suspended bay is needed.",
    },
    {
      question: "Is parking controlled near Ealing Broadway versus the outer streets?",
      answer:
        "It varies. Controlled parking applies around Ealing Broadway, Acton and the stations, while many outer residential streets are unrestricted. We confirm parking per street and arrange a suspended bay with the council only where the move needs one.",
    },
    faqInsured(),
    faqSameDay("Ealing"),
    faqFullMove("Ealing"),
  ],
};

/* ====================================================================== */
/* 12. BARNET                                                             */
/* ====================================================================== */

export const barnet: Borough = {
  slug: "barnet",
  name: "Barnet",
  h1: "Removals in Barnet",
  subhead: subhead("Barnet", "N2, N3, N12, N20, NW4, NW7 and NW11"),
  metaTitle: "Removals Barnet | Man and Van £55/hr | Removals Nationwide",
  metaDescription:
    "Experienced, insured removals and man and van in Barnet from £55/hr plus VAT. Local knowledge of suburban homes, driveways and parking.",
  postcodes: ["N2", "N3", "N12", "N20", "NW4", "NW7", "NW11"],
  heroImage: HERO_IMAGE,
  heroImageAlt: heroAlt("Barnet"),
  introLine: introLine("Barnet"),
  valueLine: VALUE_LINE,
  localBody: [
    localPara1("Barnet"),
    "What sets a Removals Nationwide move in Barnet apart is that it is a large outer-London suburban borough, so most moves are from family houses and semis with gardens and driveways where loading is often easier, alongside the high-density Colindale new-build towers we coordinate in advance.",
  ],
  coverageIntro:
    "We cover every part of the London Borough of Barnet, including the N2, N3, N11, N12, N20, NW4, NW7, NW9 and NW11 postcodes, with parts of N10 and N14 and the EN4 and EN5 areas. Neighbourhoods we move people in and out of every week include:",
  neighbourhoods:
    "Finchley including Church End and North and East Finchley, Hendon, Golders Green, Mill Hill, Edgware, Chipping Barnet, New Barnet, Whetstone, Totteridge, Colindale, Burnt Oak and Friern Barnet.",
  coverageOutro:
    "If your street sits on the Barnet border with Camden, Haringey, Brent, Harrow or Enfield, we cover that too. Tell us your postcode and we will confirm coverage and a price.",
  knowIntro:
    "Barnet is a large outer-London suburban borough, so most moves are from family houses and semis with gardens and driveways, with its own access points to plan for. Here is what our crews plan for.",
  knowBlocks: [
    {
      label: "Driveways and easier access",
      body: "Finchley, Mill Hill, Totteridge and Hendon are interwar and period houses where a driveway usually gives direct access, and parking on many residential streets is unrestricted, so loading is often easier than in inner London.",
    },
    {
      label: "Parking varies by street",
      body: "Controlled parking applies around the stations and town centres such as Finchley and Golders Green, while many residential streets are unrestricted, so we confirm parking per street rather than assume it. Where a suspension is needed, most London boroughs require 10 to 14 working days notice and apply a daily space charge tiered by duration, so we apply as soon as your date is confirmed and arrange a suspended bay only where the move needs one. We plan the loading point around the A1, the North Circular and Finchley High Road and factor any suspension into your quote, confirming the exact current council charge before we rely on it.",
    },
    {
      label: "Roads and Colindale towers",
      body: "Colindale is a major regeneration area of high-density new-build towers with concierge desks, service lifts and booking rules we coordinate in advance. The A1 and Watford Way, the A406 North Circular, Finchley High Road and the Hendon Way carry heavy traffic, so we plan timing and the loading point.",
    },
    {
      label: "Emissions",
      body: "Barnet sits within the Greater London Ultra Low Emission Zone. The ULEZ charge is £12.50 a day for non-compliant vehicles, but our fleet is compliant, so there is no emissions charge on your move.",
    },
  ],
  nearby: [
    { label: "Camden", href: "/areas/camden" },
    { label: "Haringey", href: "/areas/haringey" },
    { label: "Brent", href: "/areas/brent" },
    { label: "Harrow", href: "/areas/harrow" },
    { label: "Enfield", href: "/areas/enfield" },
  ],
  faqs: [
    {
      question: "Do you cover my Barnet postcode?",
      answer:
        "Yes. We cover the whole London Borough of Barnet, including N2, N3, N11, N12, N20, NW4, NW7, NW9 and NW11, with parts of N10 and N14 and the EN4 and EN5 areas, and every named neighbourhood from Finchley to Mill Hill. Send us your postcode and we will confirm coverage and a price.",
    },
    faqPrice("Barnet"),
    {
      question: "Can you move a larger house with driveway access in Barnet?",
      answer:
        "Yes. Most Barnet homes are family houses and semis with gardens and driveways, where a driveway usually gives direct loading access. We bring the right crew and van size for a larger property and confirm whether the driveway works or a suspended bay is needed.",
    },
    {
      question: "Can you handle a concierge move at Colindale?",
      answer:
        "Yes. Colindale is high-density new-build with concierge desks and service lifts. We book the service lift and loading slot with the building management in advance and plan the crew and timing around it.",
    },
    faqInsured(),
    faqSameDay("Barnet"),
    faqFullMove("Barnet"),
  ],
};

/* ====================================================================== */
/* TIER A BATCH (verified council/TfL/ONS data)                          */
/* ====================================================================== */

/* 13. BRENT */
export const brent: Borough = {
  slug: "brent",
  name: "Brent",
  h1: "Removals in Brent",
  subhead:
    "Experienced, insured man and van and removals in Brent, from £55 per hour plus VAT, 7 days a week, with real local knowledge of parking, access and property across NW10, NW6, NW9, HA0 and HA9.",
  metaTitle: "Removals Brent | Man and Van £55/hr | Removals Nationwide",
  metaDescription:
    "Experienced man and van and removals in Brent (NW10, NW6, HA9) from £55/hr plus VAT. Insured, 7 days, expert in Wembley event-day and high-rise moves.",
  postcodes: ["NW10", "NW6", "NW9", "HA0", "HA9"],
  heroImage: HERO_IMAGE,
  heroImageAlt: heroAlt("Brent"),
  introLine: introLine("Brent"),
  valueLine: VALUE_LINE,
  localBody: [
    localPara1("Brent"),
    "What sets a Removals Nationwide move in Brent apart is that the borough splits between dense Victorian terraces in the east and Metroland semis in the west, with Wembley Park high-rise and event-day road closures in between. We work it constantly, plan the loading point and crew size for each, and check moves against the Wembley event calendar.",
  ],
  coverageIntro:
    "We cover every part of the London Borough of Brent, including the NW10, NW6, NW9, HA0 and HA9 postcodes. Neighbourhoods we move people in and out of every week include:",
  neighbourhoods:
    "Wembley, Wembley Park, Kilburn, Willesden, Willesden Green, Harlesden, Kensal Green, Queen's Park, Neasden, Kingsbury, Kenton, Queensbury, Preston, Sudbury, Alperton, Dollis Hill, Brondesbury, Stonebridge and Park Royal.",
  coverageOutro:
    "If your street sits on the Brent border with Camden, Barnet, Ealing, Hammersmith and Fulham or Harrow, we cover that too. Tell us your postcode and we will confirm coverage and a price.",
  knowIntro:
    "Brent splits sharply between dense eastern terraces, western Metroland semis and the Wembley Park high-rise, and event days reshape access. Here is what our crews plan for.",
  knowBlocks: [
    {
      label: "Parking and event-day access",
      body: "Brent runs extensive controlled parking and permit zones across the eastern terraces. Wembley Stadium and OVO Arena event days bring road closures and parking restrictions across the Wembley Park area, which can start in the early afternoon and run roughly 8am to midnight, with the exact times varying per event. We check your move against the event calendar and arrange a suspended parking bay with the council where a move needs it.",
    },
    {
      label: "Roads and access",
      body: "The A406 North Circular runs through the borough as a red route, where stopping and loading are not allowed, so we plan the loading point off it. Wembley Park is build-to-rent high-rise where towers require loading-bay slots and goods-lift booking, which we arrange in advance, applying for any suspension as soon as your date is confirmed.",
    },
    {
      label: "Property types",
      body: "East Brent is dense Victorian terrace in Kilburn, Willesden, Harlesden, Kensal Green, Queen's Park, Brondesbury and Dollis Hill, with narrow streets, no driveways and permit parking. West Brent is Metroland semis in Kingsbury, Kenton, Queensbury, Preston, Sudbury and Alperton, where driveways make loading easier. Wembley Park is concierge high-rise with goods lifts and loading bays.",
    },
    {
      label: "Emissions",
      body: "Brent sits within the Greater London Ultra Low Emission Zone. The ULEZ charge is £12.50 a day for non-compliant vehicles, but our fleet is compliant, so there is no emissions charge on your move.",
    },
  ],
  nearby: [
    { label: "Camden", href: "/areas/camden" },
    { label: "Barnet", href: "/areas/barnet" },
    { label: "Ealing", href: "/areas/ealing" },
    { label: "Hammersmith and Fulham", href: "/areas/hammersmith-and-fulham" },
    { label: "Harrow", href: "/areas/harrow" },
  ],
  faqs: [
    {
      question: "Do you cover my Brent postcode?",
      answer:
        "Yes. We cover the whole London Borough of Brent, including NW10, NW6, NW9, HA0 and HA9, and every named neighbourhood from Kilburn to Wembley. Send us your postcode and we will confirm coverage and a price.",
    },
    faqPrice("Brent"),
    {
      question: "Can you handle the parking and permits in Brent?",
      answer:
        "Yes. The eastern terraces sit in controlled parking and permit zones, so where a move needs it we arrange a suspended parking bay with the council in advance, close to your door. We plan this into the move rather than leaving it to you.",
    },
    faqInsured(),
    faqSameDay("Brent"),
    faqFullMove("Brent"),
    {
      question: "Can you move around a Wembley event day?",
      answer:
        "Yes. Wembley Stadium and OVO Arena event days bring road closures and parking restrictions across Wembley Park, often from the early afternoon and running roughly 8am to midnight. We check your move against the event calendar, plan the timing and loading point around the closures, and arrange a suspended bay where one is needed.",
    },
  ],
};

/* 14. CROYDON */
export const croydon: Borough = {
  slug: "croydon",
  name: "Croydon",
  h1: "Removals in Croydon",
  subhead:
    "Experienced, insured man and van and removals in Croydon, from £55 per hour plus VAT, 7 days a week, with real local knowledge of parking, access and property across CR0, CR2, CR7, CR8 and SE25.",
  metaTitle: "Removals Croydon | Man and Van £55/hr | Removals Nationwide",
  metaDescription:
    "Experienced man and van and removals in Croydon (CR0, CR2, CR7) from £55/hr plus VAT. Insured, 7 days, with real local parking and access knowledge.",
  postcodes: ["CR0", "CR2", "CR7", "CR8", "SE25"],
  heroImage: HERO_IMAGE,
  heroImageAlt: heroAlt("Croydon"),
  introLine: introLine("Croydon"),
  valueLine: VALUE_LINE,
  localBody: [
    localPara1("Croydon"),
    "What sets a Removals Nationwide move in Croydon apart is that the borough runs from town-centre towers to affluent driveway suburbs in the south, all inside the ULEZ. We plan the loading point and crew size for each, and our compliant fleet means no emissions charge on your move.",
  ],
  coverageIntro:
    "We cover every part of the London Borough of Croydon, including the CR0, CR2, CR7, CR8 and SE25 postcodes. Neighbourhoods we move people in and out of every week include:",
  neighbourhoods:
    "Croydon town centre, West Croydon, South Croydon, Addiscombe, Selhurst, South Norwood, Thornton Heath, Norbury, Waddon, Purley, Sanderstead, Selsdon, Coulsdon, Kenley, Shirley, New Addington and Upper Norwood.",
  coverageOutro:
    "If your street sits on the Croydon border with Lambeth, Bromley, Sutton or Merton, we cover that too. Tell us your postcode and we will confirm coverage and a price.",
  knowIntro:
    "Croydon runs from town-centre high-rise to affluent driveway suburbs, and the whole borough is inside the ULEZ. Here is what our crews plan for.",
  knowBlocks: [
    {
      label: "Parking and permits",
      body: "Controlled parking zones operate around Croydon town centre and the stations, so we confirm the zone and its hours on the council list and arrange a suspended bay where a move needs it. Selhurst and South Norwood see match-day pressure around Selhurst Park, which we check against the fixture list.",
    },
    {
      label: "Roads and access",
      body: "Croydon is not in the Congestion Charge zone. The A23 Purley Way is a heavy congestion and retail corridor, so we allow extra time at weekends, and the town-centre towers require loading-bay and lift booking, which we arrange in advance.",
    },
    {
      label: "Property types",
      body: "Croydon runs from town-centre and West Croydon high-rise and towers to Victorian and Edwardian terraces in Addiscombe, South Norwood and Thornton Heath, and affluent semis and detached homes with driveways in Purley, Sanderstead, Selsdon, Coulsdon and Shirley. We bring the right crew and van size for each.",
    },
    {
      label: "Emissions",
      body: "Croydon is inside the Greater London Ultra Low Emission Zone, which expanded across the borough in August 2023. The ULEZ charge is £12.50 a day for non-compliant vehicles, but our fleet is compliant, so there is no emissions charge on your move.",
    },
  ],
  nearby: [
    { label: "Lambeth", href: "/areas/lambeth" },
    { label: "Bromley", href: "/areas/bromley" },
    { label: "Sutton", href: "/areas/sutton" },
    { label: "Merton", href: "/areas/merton" },
  ],
  faqs: [
    {
      question: "Do you cover my Croydon postcode?",
      answer:
        "Yes. We cover the whole London Borough of Croydon, including CR0, CR2, CR7, CR8 and the SE25 area, and every named neighbourhood from Thornton Heath to Coulsdon. Send us your postcode and we will confirm coverage and a price.",
    },
    faqPrice("Croydon"),
    {
      question: "Can you handle the parking and permits in Croydon?",
      answer:
        "Yes. Controlled parking zones operate around the town centre and stations, so where a move needs it we confirm the zone and hours and arrange a suspended parking bay with the council in advance, close to your door.",
    },
    faqInsured(),
    faqSameDay("Croydon"),
    faqFullMove("Croydon"),
    {
      question: "Does the ULEZ add a charge to my Croydon move?",
      answer:
        "No. Croydon is inside the ULEZ, which expanded across the borough in August 2023, but our fleet is fully compliant, so there is no emissions charge on your move. Croydon is not in the Congestion Charge zone.",
    },
  ],
};

/* 15. NEWHAM */
export const newham: Borough = {
  slug: "newham",
  name: "Newham",
  h1: "Removals in Newham",
  subhead:
    "Experienced, insured man and van and removals in Newham, from £55 per hour plus VAT, 7 days a week, with real local knowledge of parking, access and property across E6, E7, E12, E13, E15 and E16.",
  metaTitle: "Removals Newham | Man and Van £55/hr | Removals Nationwide",
  metaDescription:
    "Experienced man and van and removals in Newham (E6, E13, E16) from £55/hr plus VAT. Insured, 7 days, expert in Stratford and Royal Docks high-rise moves.",
  postcodes: ["E6", "E7", "E12", "E13", "E15", "E16"],
  heroImage: HERO_IMAGE,
  heroImageAlt: heroAlt("Newham"),
  introLine: introLine("Newham"),
  valueLine: VALUE_LINE,
  localBody: [
    localPara1("Newham"),
    "What sets a Removals Nationwide move in Newham apart is that the borough mixes high-rise concierge towers at Stratford and the Royal Docks with Victorian terraces in the east, and London Stadium and Olympic Park event days reshape parking. We book service lifts and loading bays in advance and check moves against the event calendar.",
  ],
  coverageIntro:
    "We cover every part of the London Borough of Newham, including the E6, E7, E12, E13, E15 and E16 postcodes. Neighbourhoods we move people in and out of every week include:",
  neighbourhoods:
    "Stratford, Maryland, Forest Gate, Manor Park, East Ham, West Ham, Plaistow, Canning Town, Custom House, the Royal Docks, Royal Victoria, Royal Albert, Beckton, Silvertown and Upton Park.",
  coverageOutro:
    "If your street sits on the Newham border with Tower Hamlets, Hackney, Waltham Forest, Barking and Dagenham or Redbridge, we cover that too. Tell us your postcode and we will confirm coverage and a price.",
  knowIntro:
    "Newham mixes high-rise concierge towers with Victorian terraces, and stadium event days reshape parking. Here is what our crews plan for.",
  knowBlocks: [
    {
      label: "Parking and event-day access",
      body: "On London Stadium and Olympic Park event days, permit-only hours in some resident zones extend to 8am to 9pm, so we check your move against the event calendar. Controlled parking zones include Stratford, Royal Docks East, Upton Park, West Ham, Canning Town and Custom House, and we confirm the zone and hours and arrange a suspended bay where a move needs it.",
    },
    {
      label: "Roads and access",
      body: "The A13 is a major congestion corridor along the south of the borough, so we plan timing and the loading point around it. The Stratford and Royal Docks towers require goods-lift and loading-bay booking, which we arrange in advance.",
    },
    {
      label: "Property types",
      body: "Newham runs from high-rise concierge towers at Stratford, the Royal Docks, Canning Town and Royal Wharf, with goods-lift and loading-bay booking, to Victorian terraces in Forest Gate, East Ham, Manor Park and Plaistow, and mixed stock in Beckton and Custom House.",
    },
    {
      label: "Emissions",
      body: "Newham sits within the Greater London Ultra Low Emission Zone. The ULEZ charge is £12.50 a day for non-compliant vehicles, but our fleet is compliant, so there is no emissions charge on your move.",
    },
  ],
  nearby: [
    { label: "Tower Hamlets", href: "/areas/tower-hamlets" },
    { label: "Hackney", href: "/areas/hackney" },
    { label: "Waltham Forest", href: "/areas/waltham-forest" },
    { label: "Barking and Dagenham", href: "/areas/barking-and-dagenham" },
    { label: "Redbridge", href: "/areas/redbridge" },
  ],
  faqs: [
    {
      question: "Do you cover my Newham postcode?",
      answer:
        "Yes. We cover the whole London Borough of Newham, including E6, E7, E12, E13, E15 and E16, and every named neighbourhood from Stratford to East Ham. Send us your postcode and we will confirm coverage and a price.",
    },
    faqPrice("Newham"),
    {
      question: "Can you handle the parking and permits in Newham?",
      answer:
        "Yes. Controlled parking zones cover Stratford, the Royal Docks, Upton Park, West Ham, Canning Town and Custom House, and on stadium event days permit hours can extend to 8am to 9pm. We confirm the zone and hours and arrange a suspended bay where a move needs it.",
    },
    faqInsured(),
    faqSameDay("Newham"),
    faqFullMove("Newham"),
    {
      question: "Can you handle a Stratford or Royal Docks tower move?",
      answer:
        "Yes. The towers at Stratford, the Royal Docks, Canning Town and Royal Wharf use managed access, so we book the service lift and loading bay through the building management in advance and, on event days, plan the timing around the London Stadium and Olympic Park restrictions.",
    },
  ],
};

/* 16. HARINGEY */
export const haringey: Borough = {
  slug: "haringey",
  name: "Haringey",
  h1: "Removals in Haringey",
  subhead:
    "Experienced, insured man and van and removals in Haringey, from £55 per hour plus VAT, 7 days a week, with real local knowledge of parking, access and property across N4, N8, N10, N15, N17 and N22.",
  metaTitle: "Removals Haringey | Man and Van £55/hr | Removals Nationwide",
  metaDescription:
    "Experienced man and van and removals in Haringey (N8, N15, N22) from £55/hr plus VAT. Insured, 7 days, with real hilly and Spurs match-day parking knowledge.",
  postcodes: ["N4", "N8", "N10", "N15", "N17", "N22"],
  heroImage: HERO_IMAGE,
  heroImageAlt: heroAlt("Haringey"),
  introLine: introLine("Haringey"),
  valueLine: VALUE_LINE,
  localBody: [
    localPara1("Haringey"),
    "What sets a Removals Nationwide move in Haringey apart is that the borough runs from large period houses in Crouch End and Muswell Hill to denser Tottenham terraces and estates, and Tottenham Hotspur Stadium event days close roads in phases. We plan N17 moves around the fixture list and bring the right crew for period stairs.",
  ],
  coverageIntro:
    "We cover every part of the London Borough of Haringey, including the N4, N8, N10, N15, N17 and N22 postcodes. Neighbourhoods we move people in and out of every week include:",
  neighbourhoods:
    "Crouch End, Muswell Hill, Hornsey, Harringay, Stroud Green, Wood Green, Tottenham, Tottenham Hale, Seven Sisters, South Tottenham, Bruce Grove, Bounds Green, Alexandra Park, Noel Park, Northumberland Park and White Hart Lane.",
  coverageOutro:
    "If your street sits on the Haringey border with Islington, Camden, Barnet, Hackney, Waltham Forest or Enfield, we cover that too. Tell us your postcode and we will confirm coverage and a price.",
  knowIntro:
    "Haringey runs from large period houses to denser Tottenham terraces, and Spurs stadium event days close roads in phases. Here is what our crews plan for.",
  knowBlocks: [
    {
      label: "Parking and event-day access",
      body: "On Tottenham Hotspur Stadium event days the council closes roads in phases: Worcester Avenue from 8am, Park Lane about three hours before, and the northern High Road from White Hart Lane to Bromley Road about two hours before, with bays suspended around the stadium. We plan N17 moves around the fixture list. CPZ hours vary by zone, commonly Monday to Saturday 8am to 6.30pm, with extended hours in the Tottenham event-day and Tottenham Hale North zones.",
    },
    {
      label: "Roads and access",
      body: "Green Lanes in Harringay is a heavy congestion corridor, so we plan timing and the loading point around it. We arrange a suspended parking bay with the council where a move needs it and apply as soon as your date is confirmed.",
    },
    {
      label: "Property types",
      body: "Haringey runs from large Victorian and Edwardian houses and conversions in Crouch End, Muswell Hill, Harringay and Stroud Green, with narrow streets, permit zones and no driveways, to denser terraces and estates in Tottenham, Seven Sisters and Wood Green, and new-build at Tottenham Hale. We bring the right crew and protection for period stairs and tight access.",
    },
    {
      label: "Emissions",
      body: "Haringey sits within the Greater London Ultra Low Emission Zone. The ULEZ charge is £12.50 a day for non-compliant vehicles, but our fleet is compliant, so there is no emissions charge on your move.",
    },
  ],
  nearby: [
    { label: "Islington", href: "/areas/islington" },
    { label: "Camden", href: "/areas/camden" },
    { label: "Barnet", href: "/areas/barnet" },
    { label: "Hackney", href: "/areas/hackney" },
    { label: "Waltham Forest", href: "/areas/waltham-forest" },
  ],
  faqs: [
    {
      question: "Do you cover my Haringey postcode?",
      answer:
        "Yes. We cover the whole London Borough of Haringey, including N4, N8, N10, N15, N17 and N22, and every named neighbourhood from Crouch End to Tottenham. Send us your postcode and we will confirm coverage and a price.",
    },
    faqPrice("Haringey"),
    {
      question: "Can you handle the parking and permits in Haringey?",
      answer:
        "Yes. Most of the borough is controlled parking, commonly Monday to Saturday 8am to 6.30pm with extended hours in the Tottenham zones, so where a move needs it we arrange a suspended parking bay with the council in advance, close to your door.",
    },
    faqInsured(),
    faqSameDay("Haringey"),
    faqFullMove("Haringey"),
    {
      question: "Can you move in N17 on a Tottenham match day?",
      answer:
        "Yes. On stadium event days the council closes roads in phases around the ground and suspends nearby bays, so we plan N17 moves around the fixture list, time the van to avoid the closures, and arrange a suspended bay where one is needed.",
    },
  ],
};

/* 17. GREENWICH */
export const greenwich: Borough = {
  slug: "greenwich",
  name: "Greenwich",
  h1: "Removals in Greenwich",
  subhead:
    "Experienced, insured man and van and removals in Greenwich, from £55 per hour plus VAT, 7 days a week, with real local knowledge of parking, access and property across SE3, SE7, SE9, SE10 and SE18.",
  metaTitle: "Removals Greenwich | Man and Van £55/hr | Removals Nationwide",
  metaDescription:
    "Experienced man and van and removals in Greenwich (SE3, SE10, SE18) from £55/hr plus VAT. Insured, 7 days, with real conservation and riverside knowledge.",
  postcodes: ["SE3", "SE7", "SE9", "SE10", "SE18"],
  areaServedName: "Royal Borough of Greenwich",
  heroImage: HERO_IMAGE,
  heroImageAlt: heroAlt("Greenwich"),
  introLine: introLine("Greenwich"),
  valueLine: VALUE_LINE,
  localBody: [
    localPara1("Greenwich"),
    "What sets a Removals Nationwide move in Greenwich, officially the Royal Borough of Greenwich, apart is that it runs from tight Georgian conservation streets and a World Heritage core to Peninsula and Kidbrooke new-build towers. We plan the loading point and crew for narrow period access and book service lifts in the towers in advance.",
  ],
  coverageIntro:
    "We cover every part of the Royal Borough of Greenwich, including the SE3, SE7, SE9, SE10 and SE18 postcodes. Neighbourhoods we move people in and out of every week include:",
  neighbourhoods:
    "Greenwich, West Greenwich, Greenwich Peninsula, Maze Hill, Blackheath, Charlton, Woolwich, Plumstead, Eltham, Kidbrooke, Creekside, Shooters Hill and parts of Thamesmead and Abbey Wood.",
  coverageOutro:
    "If your street sits on the Greenwich border with Lewisham, Tower Hamlets, Newham, Bexley or Bromley, we cover that too. Tell us your postcode and we will confirm coverage and a price.",
  knowIntro:
    "Greenwich runs from tight Georgian conservation streets and a World Heritage core to Peninsula new-build towers. Here is what our crews plan for.",
  knowBlocks: [
    {
      label: "Parking and conservation access",
      body: "Controlled parking zones operate across the town centre and stations, so we confirm the zone and hours on the Royal Borough directory and arrange a suspended bay where a move needs it. The Greenwich town centre and World Heritage core around the Old Royal Naval College, the Cutty Sark and Greenwich Market carry heavy tourist traffic and tight conservation streets, so weekday mornings are easier for a van.",
    },
    {
      label: "Roads, events and towers",
      body: "Events at The O2 at North Greenwich and matches at The Valley in SE7 bring localised congestion, which we check against your move date. The Peninsula and Kidbrooke Village towers require goods-lift and loading-bay booking, which we arrange in advance.",
    },
    {
      label: "Property types",
      body: "Greenwich runs from Georgian and period housing in West Greenwich, Blackheath and the conservation areas, with narrow streets and tight access, to new-build high-rise on Greenwich Peninsula and at Kidbrooke Village, and terraces and estates in Charlton, Woolwich, Plumstead and Eltham.",
    },
    {
      label: "Emissions",
      body: "Greenwich sits within the Greater London Ultra Low Emission Zone. The ULEZ charge is £12.50 a day for non-compliant vehicles, but our fleet is compliant, so there is no emissions charge on your move.",
    },
  ],
  nearby: [
    { label: "Lewisham", href: "/areas/lewisham" },
    { label: "Bexley", href: "/areas/bexley" },
    { label: "Tower Hamlets", href: "/areas/tower-hamlets" },
    { label: "Newham", href: "/areas/newham" },
  ],
  faqs: [
    {
      question: "Do you cover my Greenwich postcode?",
      answer:
        "Yes. We cover the whole Royal Borough of Greenwich, including SE3, SE7, SE9, SE10 and SE18, and every named neighbourhood from Greenwich to Eltham. Send us your postcode and we will confirm coverage and a price.",
    },
    faqPrice("Greenwich"),
    {
      question: "Can you handle the parking and permits in Greenwich?",
      answer:
        "Yes. Controlled parking zones operate across the town centre and stations, so where a move needs it we confirm the zone and hours and arrange a suspended parking bay with the council in advance, close to your door.",
    },
    faqInsured(),
    faqSameDay("Greenwich"),
    faqFullMove("Greenwich"),
    {
      question: "Can you move from a Greenwich conservation street or a Peninsula tower?",
      answer:
        "Yes. For the tight conservation streets of West Greenwich and Blackheath we plan the loading point and crew size and favour weekday mornings to avoid tourist traffic. For the Peninsula and Kidbrooke towers we book the service lift and loading bay with the building management in advance.",
    },
  ],
};

/* 18. WALTHAM FOREST */
export const walthamForest: Borough = {
  slug: "waltham-forest",
  name: "Waltham Forest",
  h1: "Removals in Waltham Forest",
  subhead:
    "Experienced, insured man and van and removals in Waltham Forest, from £55 per hour plus VAT, 7 days a week, with real local knowledge of parking, access and property across E4, E10, E11 and E17.",
  metaTitle: "Removals Waltham Forest | Insured | Removals Nationwide",
  metaDescription:
    "Experienced man and van and removals in Waltham Forest (E17, E10, E11) from £55/hr plus VAT. Insured, 7 days, with real terrace and parking knowledge.",
  postcodes: ["E4", "E10", "E11", "E17"],
  heroImage: HERO_IMAGE,
  heroImageAlt: heroAlt("Waltham Forest"),
  introLine: introLine("Waltham Forest"),
  valueLine: VALUE_LINE,
  localBody: [
    localPara1("Waltham Forest"),
    "What sets a Removals Nationwide move in Waltham Forest apart is that the borough runs from gentrifying Walthamstow and Leyton terraces in tight permit zones to suburban Chingford semis with driveways. We plan the loading point and crew for narrow terraced streets and arrange a suspension or dispensation where the permit bays need it.",
  ],
  coverageIntro:
    "We cover every part of the London Borough of Waltham Forest, including the E4, E10, E11 and E17 postcodes and part of E18. Neighbourhoods we move people in and out of every week include:",
  neighbourhoods:
    "Walthamstow, Walthamstow Village, Leyton, Leytonstone, Chingford, Highams Park, Wood Street and Upper Walthamstow.",
  coverageOutro:
    "If your street sits on the Waltham Forest border with Haringey, Redbridge, Newham, Hackney or Enfield, we cover that too. Tell us your postcode and we will confirm coverage and a price.",
  knowIntro:
    "Waltham Forest runs from gentrifying terraced permit zones to suburban driveway streets, so parking varies sharply. Here is what our crews plan for.",
  knowBlocks: [
    {
      label: "Parking and permits",
      body: "Walthamstow and Leyton sit largely in controlled parking zones with permit-only bays and narrow terraced streets, so a parking suspension or dispensation may be needed for the van, which we arrange with the council where a move needs it. Chingford and Highams Park are more suburban, with driveways and lighter restrictions, so we confirm parking per street.",
    },
    {
      label: "Roads and access",
      body: "The North Circular (A406) runs along the south of the borough, so we plan timing and the loading point around it, and we apply for any suspension as soon as your date is confirmed.",
    },
    {
      label: "Property types",
      body: "Waltham Forest runs from Victorian terraces across Walthamstow and Leyton, gentrifying with narrow streets, permit zones and no driveways, to larger suburban semis with driveways in Chingford and Highams Park, where loading is easier.",
    },
    {
      label: "Emissions",
      body: "Waltham Forest sits within the Greater London Ultra Low Emission Zone. The ULEZ charge is £12.50 a day for non-compliant vehicles, but our fleet is compliant, so there is no emissions charge on your move.",
    },
  ],
  nearby: [
    { label: "Haringey", href: "/areas/haringey" },
    { label: "Redbridge", href: "/areas/redbridge" },
    { label: "Newham", href: "/areas/newham" },
    { label: "Hackney", href: "/areas/hackney" },
    { label: "Enfield", href: "/areas/enfield" },
  ],
  faqs: [
    {
      question: "Do you cover my Waltham Forest postcode?",
      answer:
        "Yes. We cover the whole London Borough of Waltham Forest, including E4, E10, E11 and E17 and part of E18, and every named neighbourhood from Walthamstow to Chingford. Send us your postcode and we will confirm coverage and a price.",
    },
    faqPrice("Waltham Forest"),
    {
      question: "Do I need a parking permit suspension for a Walthamstow terrace move?",
      answer:
        "Often yes. Walthamstow and Leyton are largely permit-only controlled parking with narrow terraced streets, so a parking suspension or dispensation is usually the safe way to load close to your door. We confirm the zone and arrange it with the council where a move needs it.",
    },
    faqInsured(),
    faqSameDay("Waltham Forest"),
    faqFullMove("Waltham Forest"),
    {
      question: "Is parking easier in Chingford than Walthamstow?",
      answer:
        "Usually. Chingford and Highams Park are more suburban, with driveways and lighter on-street restrictions, while Walthamstow and Leyton are tighter permit zones. We confirm parking per street and arrange a suspension only where the move needs one.",
    },
  ],
};

/* 19. REDBRIDGE */
export const redbridge: Borough = {
  slug: "redbridge",
  name: "Redbridge",
  h1: "Removals in Redbridge",
  subhead:
    "Experienced, insured man and van and removals in Redbridge, from £55 per hour plus VAT, 7 days a week, with real local knowledge of parking, access and property across IG1, IG2, IG4, IG5, IG6, IG8, E11 and E18.",
  metaTitle: "Removals Redbridge | Man and Van £55/hr | Removals Nationwide",
  metaDescription:
    "Experienced man and van and removals in Redbridge (IG1, IG6, E18) from £55/hr plus VAT. Insured, 7 days, with real suburban parking and access knowledge.",
  postcodes: ["IG1", "IG2", "IG4", "IG5", "IG6", "IG8"],
  heroImage: HERO_IMAGE,
  heroImageAlt: heroAlt("Redbridge"),
  introLine: introLine("Redbridge"),
  valueLine: VALUE_LINE,
  localBody: [
    localPara1("Redbridge"),
    "What sets a Removals Nationwide move in Redbridge apart is that the borough runs from Ilford terraces and new-build regeneration to affluent driveway suburbs in Wanstead and Woodford. We plan the loading point and crew for each, route around the A12 and the Gants Hill gyratory, and book loading bays for the Ilford new-builds.",
  ],
  coverageIntro:
    "We cover every part of the London Borough of Redbridge, including the IG1, IG2, IG4, IG5, IG6, IG8, E11 and E18 postcodes. Neighbourhoods we move people in and out of every week include:",
  neighbourhoods:
    "Ilford, Seven Kings, Goodmayes, Gants Hill, Newbury Park, Barkingside, Wanstead, Woodford, South Woodford, Hainault and Clayhall.",
  coverageOutro:
    "If your street sits on the Redbridge border with Waltham Forest, Newham, Barking and Dagenham or Havering, we cover that too. Tell us your postcode and we will confirm coverage and a price.",
  knowIntro:
    "Redbridge runs from Ilford terraces and regeneration new-build to affluent driveway suburbs, with the A12 and Gants Hill gyratory the main pressure points. Here is what our crews plan for.",
  knowBlocks: [
    {
      label: "Parking and access",
      body: "Ilford town centre has controlled parking and new-build loading-bay rules, so we confirm the zone before move day and arrange a suspended bay where a move needs it. Wanstead and Woodford are largely driveway properties with lighter on-street restrictions, so we confirm parking per street.",
    },
    {
      label: "Roads and access",
      body: "The Gants Hill gyratory and the A12 Eastern Avenue are the main congestion points, so we route around peak times and plan the loading point accordingly. New-build flats around Ilford use loading bays and lifts that we book in advance.",
    },
    {
      label: "Property types",
      body: "Redbridge runs from terraces and semis in Ilford, Seven Kings and Goodmayes to affluent semis and detached homes with driveways in Wanstead, Woodford, South Woodford and Barkingside, and new-build flats around Ilford from the Elizabeth line regeneration, with concierge and lift booking.",
    },
    {
      label: "Emissions",
      body: "Redbridge sits within the Greater London Ultra Low Emission Zone. The ULEZ charge is £12.50 a day for non-compliant vehicles, but our fleet is compliant, so there is no emissions charge on your move.",
    },
  ],
  nearby: [
    { label: "Waltham Forest", href: "/areas/waltham-forest" },
    { label: "Newham", href: "/areas/newham" },
    { label: "Barking and Dagenham", href: "/areas/barking-and-dagenham" },
    { label: "Havering", href: "/areas/havering" },
  ],
  faqs: [
    {
      question: "Do you cover my Redbridge postcode?",
      answer:
        "Yes. We cover the whole London Borough of Redbridge, including IG1, IG2, IG4, IG5, IG6, IG8, E11 and E18, and every named neighbourhood from Ilford to Woodford. Send us your postcode and we will confirm coverage and a price.",
    },
    faqPrice("Redbridge"),
    {
      question: "Can you handle the parking and permits in Redbridge?",
      answer:
        "Yes. Ilford town centre has controlled parking and new-build loading-bay rules, while Wanstead and Woodford are largely driveway properties with lighter restrictions. We confirm parking per street and arrange a suspended bay where a move needs it.",
    },
    faqInsured(),
    faqSameDay("Redbridge"),
    faqFullMove("Redbridge"),
    {
      question: "Can you move a driveway house in Wanstead or a new-build flat in Ilford?",
      answer:
        "Yes. In Wanstead and Woodford a driveway usually gives direct loading access, which we confirm in advance. For the Ilford new-builds we book the loading bay and lift with the building management and route around the A12 and Gants Hill gyratory.",
    },
  ],
};

/* ====================================================================== */
/* TIER B BATCH (suburban; driveways and lighter parking the differentiator) */
/* ====================================================================== */

/* 20. ENFIELD */
export const enfield: Borough = {
  slug: "enfield",
  name: "Enfield",
  h1: "Removals in Enfield",
  subhead:
    "Experienced, insured man and van and removals in Enfield, from £55 per hour plus VAT, 7 days a week, with real local knowledge of parking, access and property across EN1, EN2, EN3, N9, N13 and N21.",
  metaTitle: "Removals Enfield | Man and Van £55/hr | Removals Nationwide",
  metaDescription:
    "Experienced man and van and removals in Enfield (EN1, N13, N21) from £55/hr plus VAT. Insured, 7 days, with real suburban parking and driveway knowledge.",
  postcodes: ["EN1", "EN2", "EN3", "N9", "N13", "N21"],
  heroImage: HERO_IMAGE,
  heroImageAlt: heroAlt("Enfield"),
  introLine: introLine("Enfield"),
  valueLine: VALUE_LINE,
  localBody: [
    localPara1("Enfield"),
    "What sets a Removals Nationwide move in Enfield apart is that most of the borough is leafy suburb where driveways and unrestricted parking make loading easy, with controlled parking only around the centres and the denser east. We confirm parking per street and bring the right crew for a larger family house.",
  ],
  coverageIntro:
    "We cover every part of the London Borough of Enfield, including the EN1, EN2, EN3, N9, N13 and N21 postcodes. Neighbourhoods we move people in and out of every week include:",
  neighbourhoods:
    "Enfield Town, Southgate, Palmers Green, Winchmore Hill, Edmonton, Ponders End, Bush Hill Park, Oakwood, Grange Park and Bowes Park.",
  coverageOutro:
    "If your street sits on the Enfield border with Barnet, Haringey or Waltham Forest, we cover that too. Tell us your postcode and we will confirm coverage and a price.",
  knowIntro:
    "Enfield is a large suburban borough where driveways make many moves easy, with planning needed around the centres and the dense east. Here is what our crews plan for.",
  knowBlocks: [
    {
      label: "Driveways and parking",
      body: "Many Enfield moves are from semis and detached houses with driveways and wider streets, which makes access easier. Southgate, Winchmore Hill, Grange Park and Oakwood are leafy houses where a driveway often gives direct access and street parking is unrestricted. We confirm parking per street and arrange a bay suspension only where a move needs it, with the usual 10 to 14 working days notice.",
    },
    {
      label: "Centres and the dense east",
      body: "Palmers Green, Bush Hill Park and Enfield Town are period houses near busier centres with controlled parking around the stations. Edmonton and Ponders End are denser, with terraces, estate blocks and new-build at Meridian Water. We plan around the A10 Great Cambridge Road and Hertford Road.",
    },
    {
      label: "Property types",
      body: "Enfield runs from leafy semis and detached houses in Southgate, Winchmore Hill and Oakwood to period houses around the centres and denser terraces, estates and new-build in Edmonton and Ponders End.",
    },
    {
      label: "Emissions",
      body: "Enfield sits within the Greater London Ultra Low Emission Zone. The ULEZ charge is £12.50 a day for non-compliant vehicles, but our fleet is compliant, so there is no emissions charge on your move.",
    },
  ],
  nearby: [
    { label: "Barnet", href: "/areas/barnet" },
    { label: "Haringey", href: "/areas/haringey" },
    { label: "Waltham Forest", href: "/areas/waltham-forest" },
  ],
  faqs: [
    {
      question: "Do you cover my Enfield postcode?",
      answer:
        "Yes. We cover the whole London Borough of Enfield, including EN1, EN2, EN3, N9, N13, N14, N18 and N21, from Enfield Town and Southgate to Palmers Green and Edmonton. Send your postcode and we will confirm coverage and a price.",
    },
    faqPrice("Enfield"),
    {
      question: "Is parking easy for a move in Enfield?",
      answer:
        "In the suburban areas like Southgate, Winchmore Hill and Grange Park many homes have driveways and unrestricted street parking, which makes access easier. Around the town centres and in Edmonton the streets are controlled, so we arrange a bay suspension where a move needs it.",
    },
    faqInsured(),
    faqSameDay("Enfield"),
    {
      question: "Can you move a large family house in Southgate or Winchmore Hill?",
      answer:
        "Yes. These are large houses, often with a driveway that gives direct loading access. We bring the right crew size and protection for the move and plan it around your schedule.",
    },
  ],
};

/* 21. BROMLEY */
export const bromley: Borough = {
  slug: "bromley",
  name: "Bromley",
  h1: "Removals in Bromley",
  subhead:
    "Experienced, insured man and van and removals in Bromley, from £55 per hour plus VAT, 7 days a week, with real local knowledge of parking, access and property across BR1, BR2, BR3, BR4, BR5, BR6 and BR7.",
  metaTitle: "Removals Bromley | Man and Van £55/hr | Removals Nationwide",
  metaDescription:
    "Experienced man and van and removals in Bromley (BR1, BR2, BR3) from £55/hr plus VAT. Insured, 7 days, with real suburban driveway and parking knowledge.",
  postcodes: ["BR1", "BR2", "BR3", "BR4", "BR5", "BR6", "BR7"],
  heroImage: HERO_IMAGE,
  heroImageAlt: heroAlt("Bromley"),
  introLine: introLine("Bromley"),
  valueLine: VALUE_LINE,
  localBody: [
    localPara1("Bromley"),
    "What sets a Removals Nationwide move in Bromley apart is that it is the largest London borough and mostly leafy suburb, so most homes have a driveway and unrestricted parking that make loading easier than inner London. We confirm parking per street and arrange a suspension only where a central move needs it.",
  ],
  coverageIntro:
    "We cover every part of the London Borough of Bromley, including the BR1, BR2, BR3, BR4, BR5, BR6 and BR7 postcodes. Neighbourhoods we move people in and out of every week include:",
  neighbourhoods:
    "Bromley, Beckenham, Orpington, Chislehurst, Penge, Hayes, West Wickham, Petts Wood, Shortlands, Bickley and Downham.",
  coverageOutro:
    "If your street sits on the Bromley border with Lewisham, Croydon, Greenwich or Bexley, we cover that too. Tell us your postcode and we will confirm coverage and a price.",
  knowIntro:
    "Bromley is the largest London borough by area and mostly leafy suburb, so most moves are easy driveway loads. Here is what our crews plan for.",
  knowBlocks: [
    {
      label: "Driveways and parking",
      body: "Most Bromley moves are from large houses with their own driveways and unrestricted street parking, which makes access easier than inner London. Beckenham, Chislehurst, Petts Wood and Bickley are large semis and detached houses where a driveway usually gives direct loading access. We confirm parking per street and arrange a bay suspension only where a central move needs it, with the usual 10 to 14 working days notice.",
    },
    {
      label: "Centres and roads",
      body: "Central Bromley and Penge are denser, with Victorian terraces and controlled parking around the town centre and stations. We plan around the A21, the High Street and Beckenham Road.",
    },
    {
      label: "Property types",
      body: "Bromley runs from large suburban semis and detached houses in Beckenham, Chislehurst, Petts Wood and Bickley to Victorian terraces around central Bromley and Penge.",
    },
    {
      label: "Emissions",
      body: "Bromley sits within the Greater London Ultra Low Emission Zone. The ULEZ charge is £12.50 a day for non-compliant vehicles, but our fleet is compliant, so there is no emissions charge on your move.",
    },
  ],
  nearby: [
    { label: "Lewisham", href: "/areas/lewisham" },
    { label: "Croydon", href: "/areas/croydon" },
    { label: "Greenwich", href: "/areas/greenwich" },
    { label: "Bexley", href: "/areas/bexley" },
  ],
  faqs: [
    {
      question: "Do you cover my Bromley postcode?",
      answer:
        "Yes. We cover the whole London Borough of Bromley, including BR1, BR2, BR3, BR4, BR5, BR6 and BR7, from Bromley and Beckenham to Orpington and Chislehurst. Send your postcode and we will confirm coverage and a price.",
    },
    faqPrice("Bromley"),
    {
      question: "Is parking a problem for a move in Bromley?",
      answer:
        "Usually not. Most of the borough is suburban, with driveways and unrestricted street parking, which makes loading easier. Around central Bromley and the stations the streets are controlled, so we arrange a bay suspension only where a move needs it.",
    },
    faqInsured(),
    faqSameDay("Bromley"),
    {
      question: "Can you move a large house in Chislehurst or Petts Wood?",
      answer:
        "Yes. These are large suburban homes, usually with a driveway that gives direct loading access. We bring the right crew size and protection and plan the move around your schedule.",
    },
  ],
};

/* 22. MERTON */
export const merton: Borough = {
  slug: "merton",
  name: "Merton",
  h1: "Removals in Merton",
  subhead:
    "Experienced, insured man and van and removals in Merton, from £55 per hour plus VAT, 7 days a week, with real local knowledge of parking, access and property across SW19, SW20, CR4 and SM4.",
  metaTitle: "Removals Merton | Man and Van £55/hr | Removals Nationwide",
  metaDescription:
    "Experienced man and van and removals in Merton (SW19, SW20, CR4) from £55/hr plus VAT. Insured, 7 days, with real Wimbledon and suburban parking knowledge.",
  postcodes: ["SW19", "SW20", "CR4", "SM4"],
  heroImage: HERO_IMAGE,
  heroImageAlt: heroAlt("Merton"),
  introLine: introLine("Merton"),
  valueLine: VALUE_LINE,
  localBody: [
    localPara1("Merton"),
    "What sets a Removals Nationwide move in Merton apart is the range from prime Wimbledon Village on the hill to suburban Morden and Mitcham, plus the summer Championships restrictions we plan around. We bring the right crew for period houses and confirm parking per street.",
  ],
  coverageIntro:
    "We cover every part of the London Borough of Merton, including the SW19, SW20, CR4 and SM4 postcodes. Neighbourhoods we move people in and out of every week include:",
  neighbourhoods:
    "Wimbledon, Wimbledon Village, Raynes Park, Mitcham, Morden, Colliers Wood, South Wimbledon, Merton Park and Motspur Park.",
  coverageOutro:
    "If your street sits on the Merton border with Wandsworth, Lambeth, Croydon, Sutton or Kingston upon Thames, we cover that too. Tell us your postcode and we will confirm coverage and a price.",
  knowIntro:
    "Merton runs from prime Wimbledon Village to suburban Morden and Mitcham, and the summer tennis reshapes access. Here is what our crews plan for.",
  knowBlocks: [
    {
      label: "Wimbledon and parking",
      body: "Wimbledon Village is large period houses on a hill with tight controlled parking and conservation streets, so a planned loading point and the right crew size matter. Wimbledon, Raynes Park and South Wimbledon are period houses and terraces with controlled parking near the stations. Morden, Motspur Park and Mitcham are interwar semis, often with driveways and lighter parking control. We confirm parking per street and arrange a bay suspension where needed.",
    },
    {
      label: "The Championships and roads",
      body: "During the Wimbledon Championships in summer, parking and roads around the All England Club and Wimbledon Village are heavily restricted, which we check against your move date. We plan around the A24, Kingston Road and the Broadway.",
    },
    {
      label: "Property types",
      body: "Merton runs from large period houses in Wimbledon Village and period houses and terraces in Wimbledon, Raynes Park and South Wimbledon to interwar semis in Morden, Motspur Park and Mitcham.",
    },
    {
      label: "Emissions",
      body: "Merton sits within the Greater London Ultra Low Emission Zone. The ULEZ charge is £12.50 a day for non-compliant vehicles, but our fleet is compliant, so there is no emissions charge on your move.",
    },
  ],
  nearby: [
    { label: "Wandsworth", href: "/areas/wandsworth" },
    { label: "Lambeth", href: "/areas/lambeth" },
    { label: "Croydon", href: "/areas/croydon" },
    { label: "Sutton", href: "/areas/sutton" },
    { label: "Kingston upon Thames", href: "/areas/kingston-upon-thames" },
  ],
  faqs: [
    {
      question: "Do you cover my Merton postcode?",
      answer:
        "Yes. We cover the whole London Borough of Merton, including SW19, SW20, CR4 and SM4, from Wimbledon and Raynes Park to Mitcham and Morden. Send your postcode and we will confirm coverage and a price.",
    },
    faqPrice("Merton"),
    {
      question: "Do you plan around the Wimbledon Championships?",
      answer:
        "Yes. During the tennis in summer, parking and roads around the All England Club and Wimbledon Village are heavily restricted, so we check your move date against the tournament and plan the timing and loading point to avoid the closures and crowds.",
    },
    {
      question: "How does parking work elsewhere in Merton?",
      answer:
        "Wimbledon town, the Village and Colliers Wood have controlled parking, so we arrange a bay suspension where a move needs it. In Morden, Motspur Park and Mitcham many homes have driveways and lighter parking control, which makes access easier.",
    },
    faqInsured(),
    {
      question: "Can you move a large period house in Wimbledon Village?",
      answer:
        "Yes. These are large houses on a hill with conservation streets and tight parking, so we bring the right crew and protection, plan the loading point, and arrange a bay suspension so the move stays efficient.",
    },
  ],
};

/* 23. HOUNSLOW */
export const hounslow: Borough = {
  slug: "hounslow",
  name: "Hounslow",
  h1: "Removals in Hounslow",
  subhead:
    "Experienced, insured man and van and removals in Hounslow, from £55 per hour plus VAT, 7 days a week, with real local knowledge of parking, access and property across TW3, TW4, TW5, TW7, TW8 and W4.",
  metaTitle: "Removals Hounslow | Man and Van £55/hr | Removals Nationwide",
  metaDescription:
    "Experienced man and van and removals in Hounslow (TW3, W4, TW8) from £55/hr plus VAT. Insured, 7 days, with real Chiswick and riverside knowledge.",
  postcodes: ["TW3", "TW4", "TW5", "TW7", "TW8", "W4"],
  heroImage: HERO_IMAGE,
  heroImageAlt: heroAlt("Hounslow"),
  introLine: introLine("Hounslow"),
  valueLine: VALUE_LINE,
  localBody: [
    localPara1("Hounslow"),
    "What sets a Removals Nationwide move in Hounslow apart is the range from conservation-area Chiswick and the Brentford riverside new-build to suburban Feltham near Heathrow. We coordinate concierge towers and protect period interiors alike.",
  ],
  coverageIntro:
    "We cover every part of the London Borough of Hounslow, including the TW3, TW4, TW5, TW7, TW8 and W4 postcodes. Neighbourhoods we move people in and out of every week include:",
  neighbourhoods:
    "Hounslow, Chiswick, Brentford, Isleworth, Feltham, Heston, Bedfont, Cranford, Osterley and Hanworth.",
  coverageOutro:
    "If your street sits on the Hounslow border with Hammersmith and Fulham, Ealing, Hillingdon or Richmond upon Thames, we cover that too. Tell us your postcode and we will confirm coverage and a price.",
  knowIntro:
    "Hounslow runs from prime Chiswick and the Brentford riverside to suburban Feltham near Heathrow. Here is what our crews plan for.",
  knowBlocks: [
    {
      label: "Chiswick and parking",
      body: "Chiswick is affluent period terraces and large houses, much of it conservation, with tight controlled parking, so a planned loading point matters. Hounslow, Heston and Feltham are interwar semis, often with driveways and lighter parking control. We confirm parking per street and arrange a bay suspension where a Chiswick or town move needs it.",
    },
    {
      label: "Riverside new-build and roads",
      body: "Brentford and Kew Bridge are a major riverside new-build cluster with concierge desks and service-lift booking we coordinate in advance. Isleworth is period houses near the river, and Feltham and Bedfont sit near Heathrow. We plan around the A4 Great West Road and the A316.",
    },
    {
      label: "Property types",
      body: "Hounslow runs from Chiswick period terraces and large houses and Isleworth riverside period homes to Brentford and Kew Bridge new-build and interwar semis in Hounslow, Heston, Feltham and Bedfont.",
    },
    {
      label: "Emissions",
      body: "Hounslow sits within the Greater London Ultra Low Emission Zone. The ULEZ charge is £12.50 a day for non-compliant vehicles, but our fleet is compliant, so there is no emissions charge on your move.",
    },
  ],
  nearby: [
    { label: "Hammersmith and Fulham", href: "/areas/hammersmith-and-fulham" },
    { label: "Ealing", href: "/areas/ealing" },
    { label: "Hillingdon", href: "/areas/hillingdon" },
    { label: "Richmond upon Thames", href: "/areas/richmond-upon-thames" },
  ],
  faqs: [
    {
      question: "Do you cover my Hounslow postcode?",
      answer:
        "Yes. We cover the whole London Borough of Hounslow, including TW3, TW4, TW5, TW7, TW8, TW13 and TW14 and the W4 Chiswick area, from Chiswick and Brentford to Feltham and Heston. Send your postcode and we will confirm coverage and a price.",
    },
    faqPrice("Hounslow"),
    {
      question: "Can you handle a move in Chiswick?",
      answer:
        "Yes. Chiswick is affluent period housing in conservation areas with tight controlled parking, so we plan the loading point, arrange a bay suspension where needed, and protect period interiors throughout the move.",
    },
    {
      question: "Can you move from a riverside new-build at Brentford or Kew Bridge?",
      answer:
        "Yes. We move regularly in these developments. We book the service lift and a loading bay through the building manager in advance, and plan the timing around the building's rules so the move runs smoothly.",
    },
    faqInsured(),
    {
      question: "Is parking easier in the outer parts of Hounslow?",
      answer:
        "Yes. In Feltham, Heston and Bedfont many homes are suburban semis with driveways and lighter parking control, which makes loading easier than in Chiswick or the town centre.",
    },
  ],
};

/* 24. HARROW */
export const harrow: Borough = {
  slug: "harrow",
  name: "Harrow",
  h1: "Removals in Harrow",
  subhead:
    "Experienced, insured man and van and removals in Harrow, from £55 per hour plus VAT, 7 days a week, with real local knowledge of parking, access and property across HA1, HA2, HA3, HA5 and HA7.",
  metaTitle: "Removals Harrow | Man and Van £55/hr | Removals Nationwide",
  metaDescription:
    "Experienced man and van and removals in Harrow (HA1, HA2, HA5) from £55/hr plus VAT. Insured, 7 days, with real suburban driveway and parking knowledge.",
  postcodes: ["HA1", "HA2", "HA3", "HA5", "HA7"],
  heroImage: HERO_IMAGE,
  heroImageAlt: heroAlt("Harrow"),
  introLine: introLine("Harrow"),
  valueLine: VALUE_LINE,
  localBody: [
    localPara1("Harrow"),
    "What sets a Removals Nationwide move in Harrow apart is that it is classic Metroland, so most homes have a driveway and unrestricted parking that make loading easier, with tighter access only on Harrow on the Hill and around the centres. We confirm parking per street.",
  ],
  coverageIntro:
    "We cover every part of the London Borough of Harrow, including the HA1, HA2, HA3, HA5 and HA7 postcodes. Neighbourhoods we move people in and out of every week include:",
  neighbourhoods:
    "Harrow, Pinner, Stanmore, Wealdstone, Harrow on the Hill, Rayners Lane, Kenton, Harrow Weald, Hatch End and North Harrow.",
  coverageOutro:
    "If your street sits on the Harrow border with Brent, Barnet, Hillingdon or Ealing, we cover that too. Tell us your postcode and we will confirm coverage and a price.",
  knowIntro:
    "Harrow is classic Metroland suburb, so most moves are easy driveway loads, with tighter access on the Hill and around the centres. Here is what our crews plan for.",
  knowBlocks: [
    {
      label: "Metroland driveways",
      body: "Most Harrow moves are from interwar semis and detached houses with their own driveways and wider streets, which makes access easier. Pinner, Stanmore and the residential streets of Harrow are large houses where a driveway usually gives direct loading access and street parking is unrestricted. We confirm parking per street and arrange a bay suspension only where a central move needs it.",
    },
    {
      label: "The Hill and centres",
      body: "Harrow on the Hill is historic and on a steep slope, with conservation streets and tighter access. Central Harrow and Wealdstone are denser, with controlled parking around the town centre and stations. We plan around Station Road, Pinner Road and the A409.",
    },
    {
      label: "Property types",
      body: "Harrow runs from large interwar semis and detached Metroland houses in Pinner, Stanmore and across the borough to historic housing on Harrow on the Hill and denser stock around central Harrow and Wealdstone.",
    },
    {
      label: "Emissions",
      body: "Harrow sits within the Greater London Ultra Low Emission Zone. The ULEZ charge is £12.50 a day for non-compliant vehicles, but our fleet is compliant, so there is no emissions charge on your move.",
    },
  ],
  nearby: [
    { label: "Brent", href: "/areas/brent" },
    { label: "Barnet", href: "/areas/barnet" },
    { label: "Hillingdon", href: "/areas/hillingdon" },
    { label: "Ealing", href: "/areas/ealing" },
  ],
  faqs: [
    {
      question: "Do you cover my Harrow postcode?",
      answer:
        "Yes. We cover the whole London Borough of Harrow, including HA1, HA2, HA3, HA5 and HA7, from Harrow and Pinner to Stanmore and Wealdstone. Send your postcode and we will confirm coverage and a price.",
    },
    faqPrice("Harrow"),
    {
      question: "Is parking easy for a move in Harrow?",
      answer:
        "Usually yes. Most of the borough is suburban Metroland housing with driveways and unrestricted street parking, which makes loading easier. Around central Harrow, Harrow on the Hill and the stations the streets are controlled, so we arrange a bay suspension only where needed.",
    },
    faqInsured(),
    faqSameDay("Harrow"),
    {
      question: "Can you move a large house in Pinner or Stanmore?",
      answer:
        "Yes. These are large suburban homes, usually with a driveway that gives direct loading access. We bring the right crew size and protection and plan the move around your schedule.",
    },
  ],
};

/* 25. BARKING AND DAGENHAM */
export const barkingAndDagenham: Borough = {
  slug: "barking-and-dagenham",
  name: "Barking and Dagenham",
  h1: "Removals in Barking and Dagenham",
  subhead:
    "Experienced, insured man and van and removals in Barking and Dagenham, from £55 per hour plus VAT, 7 days a week, with real local knowledge of parking, access and property across IG11, RM8, RM9 and RM10.",
  metaTitle: "Removals Barking and Dagenham | Removals Nationwide",
  metaDescription:
    "Experienced man and van and removals in Barking and Dagenham (IG11, RM8, RM10) from £55/hr plus VAT. Insured, 7 days, with real local parking knowledge.",
  postcodes: ["IG11", "RM8", "RM9", "RM10"],
  heroImage: HERO_IMAGE,
  heroImageAlt: heroAlt("Barking and Dagenham"),
  introLine: introLine("Barking and Dagenham"),
  valueLine: VALUE_LINE,
  localBody: [
    localPara1("Barking and Dagenham"),
    "What sets a Removals Nationwide move in Barking and Dagenham apart is the wider interwar streets and driveways that make most moves easier than inner London, alongside the Barking Riverside new-build we coordinate in advance.",
  ],
  coverageIntro:
    "We cover every part of the London Borough of Barking and Dagenham, including the IG11, RM8, RM9 and RM10 postcodes. Neighbourhoods we move people in and out of every week include:",
  neighbourhoods:
    "Barking, Dagenham, Becontree, Chadwell Heath, Marks Gate, Castle Green, Thames View and Barking Riverside.",
  coverageOutro:
    "If your street sits on the Barking and Dagenham border with Newham, Redbridge or Havering, we cover that too. Tell us your postcode and we will confirm coverage and a price.",
  knowIntro:
    "Barking and Dagenham is mostly interwar housing and major new-build, so access is generally easier than inner London. Here is what our crews plan for.",
  knowBlocks: [
    {
      label: "Wider streets and parking",
      body: "The Becontree estate covers much of the borough in interwar semis and terraces, now mixed tenure, with wider streets and largely unrestricted parking, and many homes have driveways. We confirm parking per street and arrange a bay suspension only where a central move needs it.",
    },
    {
      label: "Barking centre and Riverside",
      body: "Central Barking is denser, with Victorian terraces and controlled parking around the town centre and station. Barking Riverside is a large new-build development with estate management and service-lift booking we coordinate in advance. We plan around the A13, Ripple Road and the Heathway.",
    },
    {
      label: "Property types",
      body: "The borough runs from the interwar Becontree estate semis and terraces and Victorian terraces around central Barking to the major new-build at Barking Riverside.",
    },
    {
      label: "Emissions",
      body: "Barking and Dagenham sits within the Greater London Ultra Low Emission Zone. The ULEZ charge is £12.50 a day for non-compliant vehicles, but our fleet is compliant, so there is no emissions charge on your move.",
    },
  ],
  nearby: [
    { label: "Newham", href: "/areas/newham" },
    { label: "Redbridge", href: "/areas/redbridge" },
    { label: "Havering", href: "/areas/havering" },
  ],
  faqs: [
    {
      question: "Do you cover my Barking and Dagenham postcode?",
      answer:
        "Yes. We cover the whole London Borough of Barking and Dagenham, including IG11, RM8, RM9 and RM10, from Barking and Barking Riverside to Dagenham and Becontree. Send your postcode and we will confirm coverage and a price.",
    },
    faqPrice("Barking and Dagenham"),
    {
      question: "Is parking easy for a move here?",
      answer:
        "Usually. Much of the borough is interwar housing on wider streets with driveways and largely unrestricted parking, which makes loading easier. Around central Barking the streets are controlled, so we arrange a bay suspension where a move needs it.",
    },
    faqInsured(),
    faqSameDay("Barking and Dagenham"),
    {
      question: "Can you move from a new-build at Barking Riverside?",
      answer:
        "Yes. We move regularly at Barking Riverside. We book the service lift and a loading bay through the estate management in advance, and plan the timing around the development's rules so the move runs smoothly.",
    },
  ],
};

/* 26. BEXLEY */
export const bexley: Borough = {
  slug: "bexley",
  name: "Bexley",
  h1: "Removals in Bexley",
  subhead:
    "Experienced, insured man and van and removals in Bexley, from £55 per hour plus VAT, 7 days a week, with real local knowledge of parking, access and property across DA1, DA5, DA6, DA7, DA8 and DA15.",
  metaTitle: "Removals Bexley | Man and Van £55/hr | Removals Nationwide",
  metaDescription:
    "Experienced man and van and removals in Bexley (DA5, DA6, DA15) from £55/hr plus VAT. Insured, 7 days, with real suburban driveway and parking knowledge.",
  postcodes: ["DA1", "DA5", "DA6", "DA7", "DA8", "DA15"],
  heroImage: HERO_IMAGE,
  heroImageAlt: heroAlt("Bexley"),
  introLine: introLine("Bexley"),
  valueLine: VALUE_LINE,
  localBody: [
    localPara1("Bexley"),
    "What sets a Removals Nationwide move in Bexley apart is that it is a suburban outer borough where most homes have a driveway and unrestricted parking, with controlled parking limited to Bexleyheath and the busy stations. We confirm parking per street.",
  ],
  coverageIntro:
    "We cover every part of the London Borough of Bexley, including the DA1, DA5, DA6, DA7, DA8 and DA15 postcodes. Neighbourhoods we move people in and out of every week include:",
  neighbourhoods:
    "Bexleyheath, Sidcup, Erith, Welling, Crayford, Bexley Village, Belvedere, Abbey Wood, Blackfen and Barnehurst.",
  coverageOutro:
    "If your street sits on the Bexley border with Greenwich or Bromley, we cover that too. Tell us your postcode and we will confirm coverage and a price.",
  knowIntro:
    "Bexley is a suburban outer borough where most moves are easy driveway loads, with limited controlled parking. Here is what our crews plan for.",
  knowBlocks: [
    {
      label: "Suburban driveways",
      body: "Most Bexley moves are from interwar semis and detached houses with their own driveways and unrestricted street parking, which makes access easier. Bexleyheath, Sidcup, Welling and Blackfen are large suburban houses where a driveway usually gives direct loading access. Controlled parking is limited, mostly around Bexleyheath town centre and the busier stations, so we confirm parking per street and arrange a bay suspension only where needed.",
    },
    {
      label: "Roads and the Elizabeth line",
      body: "Erith and Crayford add Victorian houses, and Abbey Wood has new-build driven by the Elizabeth line. We plan around the A2, the Broadway and Watling Street.",
    },
    {
      label: "Property types",
      body: "Bexley runs from large interwar semis and detached houses in Bexleyheath, Sidcup, Welling and Blackfen to Victorian houses in Erith and Crayford and new-build at Abbey Wood.",
    },
    {
      label: "Emissions",
      body: "Bexley sits within the Greater London Ultra Low Emission Zone. The ULEZ charge is £12.50 a day for non-compliant vehicles, but our fleet is compliant, so there is no emissions charge on your move.",
    },
  ],
  nearby: [
    { label: "Greenwich", href: "/areas/greenwich" },
    { label: "Bromley", href: "/areas/bromley" },
  ],
  faqs: [
    {
      question: "Do you cover my Bexley postcode?",
      answer:
        "Yes. We cover the whole London Borough of Bexley, including DA1, DA5, DA6, DA7, DA8, DA14 and DA15, from Bexleyheath and Sidcup to Welling and Erith. Send your postcode and we will confirm coverage and a price.",
    },
    faqPrice("Bexley"),
    {
      question: "Is parking a problem for a move in Bexley?",
      answer:
        "Usually not. Most of the borough is suburban, with driveways and unrestricted street parking, which makes loading easier. Controlled parking is limited to Bexleyheath town centre and the busier stations, where we arrange a bay suspension only if a move needs it.",
    },
    faqInsured(),
    faqSameDay("Bexley"),
    {
      question: "Can you move from a new-build at Abbey Wood?",
      answer:
        "Yes. Abbey Wood has grown with the Elizabeth line, and we move regularly there. For apartment blocks we book the service lift and a loading bay through the building manager in advance and plan the timing around the building's rules.",
    },
  ],
};

/* ====================================================================== */
/* TIER C BATCH (outer/riverside, plus the office-led City of London)     */
/* ====================================================================== */

/* 27. KINGSTON UPON THAMES */
export const kingstonUponThames: Borough = {
  slug: "kingston-upon-thames",
  name: "Kingston upon Thames",
  h1: "Removals in Kingston upon Thames",
  subhead:
    "Experienced, insured man and van and removals in Kingston upon Thames, from £55 per hour plus VAT, 7 days a week, with real local knowledge of parking, access and property across KT1, KT2, KT3, KT5, KT6 and KT9.",
  metaTitle: "Removals Kingston upon Thames | Removals Nationwide",
  metaDescription:
    "Experienced man and van and removals in Kingston upon Thames (KT1, KT3, KT6) from £55/hr plus VAT. Insured, 7 days, real riverside and parking knowledge.",
  postcodes: ["KT1", "KT2", "KT3", "KT5", "KT6", "KT9"],
  areaServedName: "Royal Borough of Kingston upon Thames",
  heroImage: HERO_IMAGE,
  heroImageAlt: heroAlt("Kingston upon Thames"),
  introLine: introLine("Kingston upon Thames"),
  valueLine: VALUE_LINE,
  localBody: [
    localPara1("Kingston upon Thames"),
    "What sets a Removals Nationwide move in Kingston apart is the range from the riverside town centre and its gyratory to leafy Surbiton and suburban New Malden, where driveways make loading easy. Kingston is one of the cheaper boroughs for a parking suspension where one is needed.",
  ],
  coverageIntro:
    "We cover every part of the Royal Borough of Kingston upon Thames, including the KT1, KT2, KT3, KT5, KT6 and KT9 postcodes. Neighbourhoods we move people in and out of every week include:",
  neighbourhoods:
    "Kingston, Surbiton, New Malden, Chessington, Norbiton, Coombe, Tolworth, Berrylands and Old Malden.",
  coverageOutro:
    "If your street sits on the Kingston border with Richmond upon Thames, Merton or Sutton, we cover that too. Tell us your postcode and we will confirm coverage and a price.",
  knowIntro:
    "Kingston runs from a riverside town centre to leafy Surbiton and suburban New Malden, and the centre is the planning challenge. Here is what our crews plan for.",
  knowBlocks: [
    {
      label: "Town centre, gyratory and riverside",
      body: "Kingston town has controlled parking, a notorious gyratory and riverside new-build with concierge and service-lift booking we coordinate. We plan around the A3 and the Kingston gyratory and arrange a bay suspension where a central move needs it, and Kingston is one of the cheaper boroughs for this.",
    },
    {
      label: "Surbiton and the suburbs",
      body: "Surbiton is desirable period and Victorian houses with controlled parking near the station. New Malden, Chessington, Tolworth and Berrylands are interwar semis, often with driveways and lighter parking control, so we confirm parking per street.",
    },
    {
      label: "Property types",
      body: "Kingston runs from riverside new-build and a period town centre to desirable period and Victorian houses in Surbiton and interwar semis in New Malden, Chessington and Tolworth.",
    },
    {
      label: "Emissions",
      body: "Kingston sits within the Greater London Ultra Low Emission Zone. The ULEZ charge is £12.50 a day for non-compliant vehicles, but our fleet is compliant, so there is no emissions charge on your move.",
    },
  ],
  nearby: [
    { label: "Richmond upon Thames", href: "/areas/richmond-upon-thames" },
    { label: "Merton", href: "/areas/merton" },
    { label: "Sutton", href: "/areas/sutton" },
  ],
  faqs: [
    {
      question: "Do you cover my Kingston postcode?",
      answer:
        "Yes. We cover the Royal Borough of Kingston upon Thames, including KT1, KT2, KT3, KT5, KT6 and KT9, from Kingston and Surbiton to New Malden and Chessington. Send your postcode and we will confirm coverage and a price.",
    },
    faqPrice("Kingston"),
    {
      question: "How does parking work for a move in Kingston?",
      answer:
        "Kingston town and Surbiton have controlled parking, so we arrange a bay suspension where a move needs it, and Kingston is one of the cheaper boroughs for this. In New Malden, Chessington and Tolworth many homes have driveways and lighter parking control.",
    },
    faqInsured(),
    faqSameDay("Kingston"),
    {
      question: "Can you move from a riverside flat in Kingston town?",
      answer:
        "Yes. We move regularly in the riverside blocks. We book the service lift and a loading bay through the building manager in advance, plan around the gyratory and the town traffic, and time the move around the building's rules.",
    },
  ],
};

/* 28. RICHMOND UPON THAMES */
export const richmondUponThames: Borough = {
  slug: "richmond-upon-thames",
  name: "Richmond upon Thames",
  h1: "Removals in Richmond upon Thames",
  subhead:
    "Experienced, insured man and van and removals in Richmond upon Thames, from £55 per hour plus VAT, 7 days a week, with real local knowledge of parking, access and property across TW9, TW10, TW1, TW2, TW11, SW13 and SW14.",
  metaTitle: "Removals Richmond upon Thames | Removals Nationwide",
  metaDescription:
    "Experienced removals and man and van in Richmond upon Thames (TW9, TW1, SW13) from £55/hr plus VAT. Insured handling, conservation and parking managed.",
  postcodes: ["TW9", "TW10", "TW1", "TW2", "TW11", "SW13", "SW14"],
  heroImage: HERO_IMAGE,
  heroImageAlt: heroAlt("Richmond upon Thames"),
  introLine: introLine("Richmond upon Thames"),
  valueLine: VALUE_LINE,
  localBody: [
    localPara1("Richmond upon Thames"),
    "What sets a Removals Nationwide move in Richmond apart is that it is an affluent, conservation-heavy borough on both sides of the river, so careful handling and a planned approach to access matter, and around Twickenham Stadium rugby match days reshape parking. We protect period interiors and confirm parking per street.",
  ],
  coverageIntro:
    "We cover every part of the London Borough of Richmond upon Thames, including the TW9, TW10, TW1, TW2, TW11, SW13 and SW14 postcodes. Neighbourhoods we move people in and out of every week include:",
  neighbourhoods:
    "Richmond, Twickenham, Teddington, Barnes, East Sheen, Kew, Ham, St Margarets, Mortlake, Hampton and Petersham.",
  coverageOutro:
    "If your street sits on the Richmond border with Hounslow, Kingston upon Thames, Wandsworth or Hammersmith and Fulham, we cover that too. Tell us your postcode and we will confirm coverage and a price.",
  knowIntro:
    "Richmond is an affluent, conservation-heavy borough on both sides of the river, so careful handling and planned access matter. Here is what our crews plan for.",
  knowBlocks: [
    {
      label: "Conservation and parking",
      body: "Richmond, Barnes, Kew and East Sheen are prime period houses in conservation areas with tight controlled parking and narrow streets. Twickenham, Teddington and St Margarets are period terraces with controlled parking near the stations. We protect period interiors, confirm parking per street, and arrange a bay suspension where needed.",
    },
    {
      label: "Twickenham rugby and roads",
      body: "Around Twickenham Stadium, rugby match-day and event-day parking is heavily restricted, which we check against your move date. Ham, Petersham and Hampton add large riverside houses, and we plan around the A316 and Richmond town.",
    },
    {
      label: "Property types",
      body: "Richmond runs from prime period houses in conservation Richmond, Barnes, Kew and East Sheen to period terraces in Twickenham, Teddington and St Margarets and large riverside houses in Ham, Petersham and Hampton.",
    },
    {
      label: "Emissions",
      body: "Richmond sits within the Greater London Ultra Low Emission Zone. The ULEZ charge is £12.50 a day for non-compliant vehicles, but our fleet is compliant, so there is no emissions charge on your move.",
    },
  ],
  nearby: [
    { label: "Hounslow", href: "/areas/hounslow" },
    { label: "Kingston upon Thames", href: "/areas/kingston-upon-thames" },
    { label: "Wandsworth", href: "/areas/wandsworth" },
    { label: "Hammersmith and Fulham", href: "/areas/hammersmith-and-fulham" },
  ],
  faqs: [
    {
      question: "Do you cover my Richmond postcode?",
      answer:
        "Yes. We cover the London Borough of Richmond upon Thames, including TW9, TW10, TW1, TW2 and TW11 and the SW13 and SW14 areas, from Richmond and Barnes to Twickenham and Teddington. Send your postcode and we will confirm coverage and a price.",
    },
    faqPrice("Richmond"),
    {
      question: "Can you handle a move in conservation-area Richmond, Barnes or Kew?",
      answer:
        "Yes. These are prime period houses on tight, controlled streets, so we plan the loading point, arrange a bay suspension where needed, and protect period interiors and shared entrances throughout the move.",
    },
    {
      question: "Do you plan around Twickenham rugby match days?",
      answer:
        "Yes. Parking and roads around Twickenham Stadium are heavily restricted on match and event days, so we check your move date against the fixture and event calendar and plan the timing and loading point to avoid problems.",
    },
    faqInsured(),
    faqSameDay("Richmond"),
  ],
};

/* 29. SUTTON */
export const sutton: Borough = {
  slug: "sutton",
  name: "Sutton",
  h1: "Removals in Sutton",
  subhead:
    "Experienced, insured man and van and removals in Sutton, from £55 per hour plus VAT, 7 days a week, with real local knowledge of parking, access and property across SM1, SM2, SM3, SM5 and SM6.",
  metaTitle: "Removals Sutton | Man and Van £55/hr | Removals Nationwide",
  metaDescription:
    "Experienced man and van and removals in Sutton (SM1, SM5, SM6) from £55/hr plus VAT. Insured, 7 days, with real suburban driveway and parking knowledge.",
  postcodes: ["SM1", "SM2", "SM3", "SM5", "SM6"],
  heroImage: HERO_IMAGE,
  heroImageAlt: heroAlt("Sutton"),
  introLine: introLine("Sutton"),
  valueLine: VALUE_LINE,
  localBody: [
    localPara1("Sutton"),
    "What sets a Removals Nationwide move in Sutton apart is that it is a suburban outer borough where most homes have a driveway and unrestricted parking, with some period character in the Carshalton and Cheam villages. Sutton is one of the cheaper boroughs for a suspension where one is needed.",
  ],
  coverageIntro:
    "We cover every part of the London Borough of Sutton, including the SM1, SM2, SM3, SM5 and SM6 postcodes. Neighbourhoods we move people in and out of every week include:",
  neighbourhoods:
    "Sutton, Carshalton, Wallington, Cheam, Belmont, Hackbridge, Beddington, North Cheam and Worcester Park.",
  coverageOutro:
    "If your street sits on the Sutton border with Merton, Croydon or Kingston upon Thames, we cover that too. Tell us your postcode and we will confirm coverage and a price.",
  knowIntro:
    "Sutton is a suburban outer borough, so most moves are easy driveway loads, with controlled parking only around the town centre. Here is what our crews plan for.",
  knowBlocks: [
    {
      label: "Suburban driveways",
      body: "Most Sutton moves are from interwar semis and detached houses with their own driveways and unrestricted street parking, which makes access easier. Sutton, Cheam, Carshalton and Wallington are large suburban houses where a driveway usually gives direct loading access. Sutton is one of the cheaper boroughs for a parking suspension where one is needed.",
    },
    {
      label: "Villages and the centre",
      body: "Carshalton and Cheam villages add some period character on tighter streets. Central Sutton is denser, with controlled parking around the town centre and station. We confirm parking per street, arrange a bay suspension only where a central move needs it, and plan around the A232 and Sutton High Street.",
    },
    {
      label: "Property types",
      body: "Sutton runs from large interwar semis and detached houses in Sutton, Cheam, Carshalton and Wallington to period houses on the tighter village streets and denser stock around central Sutton.",
    },
    {
      label: "Emissions",
      body: "Sutton sits within the Greater London Ultra Low Emission Zone. The ULEZ charge is £12.50 a day for non-compliant vehicles, but our fleet is compliant, so there is no emissions charge on your move.",
    },
  ],
  nearby: [
    { label: "Merton", href: "/areas/merton" },
    { label: "Croydon", href: "/areas/croydon" },
    { label: "Kingston upon Thames", href: "/areas/kingston-upon-thames" },
  ],
  faqs: [
    {
      question: "Do you cover my Sutton postcode?",
      answer:
        "Yes. We cover the London Borough of Sutton, including SM1, SM2, SM3, SM5 and SM6, from Sutton and Carshalton to Wallington and Cheam. Send your postcode and we will confirm coverage and a price.",
    },
    faqPrice("Sutton"),
    {
      question: "Is parking easy for a move in Sutton?",
      answer:
        "Usually yes. Most of the borough is suburban, with driveways and unrestricted street parking, which makes loading easier, and Sutton is one of the cheaper boroughs for a suspension where one is needed around the town centre. We confirm parking per street.",
    },
    faqInsured(),
    faqSameDay("Sutton"),
    {
      question: "Can you move a large house in Cheam or Carshalton?",
      answer:
        "Yes. These are large suburban homes, usually with a driveway that gives direct loading access, with some period houses on tighter village streets. We bring the right crew size and protection and plan the move around your schedule.",
    },
  ],
};

/* 30. HILLINGDON */
export const hillingdon: Borough = {
  slug: "hillingdon",
  name: "Hillingdon",
  h1: "Removals in Hillingdon",
  subhead:
    "Experienced, insured man and van and removals in Hillingdon, from £55 per hour plus VAT, 7 days a week, with real local knowledge of parking, access and property across UB3, UB4, UB7, UB8, UB10 and HA4.",
  metaTitle: "Removals Hillingdon | Man and Van £55/hr | Removals Nationwide",
  metaDescription:
    "Experienced man and van and removals in Hillingdon (UB8, UB10, HA4) from £55/hr plus VAT. Insured, 7 days, with real suburban driveway and parking knowledge.",
  postcodes: ["UB3", "UB4", "UB7", "UB8", "UB10", "HA4"],
  heroImage: HERO_IMAGE,
  heroImageAlt: heroAlt("Hillingdon"),
  introLine: introLine("Hillingdon"),
  valueLine: VALUE_LINE,
  localBody: [
    localPara1("Hillingdon"),
    "What sets a Removals Nationwide move in Hillingdon apart is that it is a large outer borough running to Heathrow, where most homes are Metroland houses with driveways and unrestricted parking, with controlled parking only around the town centres and the busy Elizabeth line stations. We confirm parking per street.",
  ],
  coverageIntro:
    "We cover every part of the London Borough of Hillingdon, including the UB3, UB4, UB7, UB8, UB10 and HA4 postcodes. Neighbourhoods we move people in and out of every week include:",
  neighbourhoods:
    "Uxbridge, Hayes, Ruislip, Northwood, Hillingdon, West Drayton, Yiewsley, Ickenham, Eastcote, Harefield and Cowley.",
  coverageOutro:
    "If your street sits on the Hillingdon border with Ealing, Harrow or Hounslow, we cover that too. Tell us your postcode and we will confirm coverage and a price.",
  knowIntro:
    "Hillingdon is a large outer borough running to Heathrow, so most moves are easy Metroland driveway loads. Here is what our crews plan for.",
  knowBlocks: [
    {
      label: "Metroland driveways",
      body: "Most Hillingdon moves are from suburban semis and detached houses with their own driveways and unrestricted street parking, which makes access easier. Ruislip, Ickenham, Eastcote and Northwood are large Metroland houses where a driveway usually gives direct loading access. We confirm parking per street and arrange a bay suspension only where a central move needs it.",
    },
    {
      label: "Town centres and Heathrow",
      body: "Uxbridge, Hayes and West Drayton are denser, with controlled parking around the town centres and the busy Elizabeth line stations, and new-build at Hayes. We plan around the A40 Western Avenue, with Heathrow proximity in the south.",
    },
    {
      label: "Property types",
      body: "Hillingdon runs from large Metroland houses in Ruislip, Ickenham, Eastcote and Northwood to denser stock and new-build around Uxbridge, Hayes and West Drayton.",
    },
    {
      label: "Emissions",
      body: "Hillingdon sits within the Greater London Ultra Low Emission Zone. The ULEZ charge is £12.50 a day for non-compliant vehicles, but our fleet is compliant, so there is no emissions charge on your move.",
    },
  ],
  nearby: [
    { label: "Ealing", href: "/areas/ealing" },
    { label: "Harrow", href: "/areas/harrow" },
    { label: "Hounslow", href: "/areas/hounslow" },
  ],
  faqs: [
    {
      question: "Do you cover my Hillingdon postcode?",
      answer:
        "Yes. We cover the London Borough of Hillingdon, including UB3, UB4, UB7, UB8, UB10 and HA4, from Uxbridge and Hayes to Ruislip and Northwood. Send your postcode and we will confirm coverage and a price.",
    },
    faqPrice("Hillingdon"),
    {
      question: "Is parking easy for a move in Hillingdon?",
      answer:
        "Usually yes. Most of the borough is suburban Metroland housing with driveways and unrestricted street parking, which makes loading easier. Around Uxbridge, Hayes and the Elizabeth line stations the streets are controlled, so we arrange a bay suspension only where needed.",
    },
    faqInsured(),
    faqSameDay("Hillingdon"),
    {
      question: "Can you move a large house in Ruislip or Northwood?",
      answer:
        "Yes. These are large suburban homes, usually with a driveway that gives direct loading access. We bring the right crew size and protection and plan the move around your schedule.",
    },
  ],
};

/* 31. HAVERING */
export const havering: Borough = {
  slug: "havering",
  name: "Havering",
  h1: "Removals in Havering",
  subhead:
    "Experienced, insured man and van and removals in Havering, from £55 per hour plus VAT, 7 days a week, with real local knowledge of parking, access and property across RM1, RM2, RM3, RM11, RM12 and RM14.",
  metaTitle: "Removals Havering | Man and Van £55/hr | Removals Nationwide",
  metaDescription:
    "Experienced man and van and removals in Havering (RM1, RM11, RM14) from £55/hr plus VAT. Insured, 7 days, with real suburban driveway and parking knowledge.",
  postcodes: ["RM1", "RM2", "RM3", "RM11", "RM12", "RM14"],
  heroImage: HERO_IMAGE,
  heroImageAlt: heroAlt("Havering"),
  introLine: introLine("Havering"),
  valueLine: VALUE_LINE,
  localBody: [
    localPara1("Havering"),
    "What sets a Removals Nationwide move in Havering apart is that it is the furthest east borough, largely suburban and semi-rural, where most homes have driveways and unrestricted parking, with notable period stock in Gidea Park and controlled parking only around central Romford. We confirm parking per street.",
  ],
  coverageIntro:
    "We cover every part of the London Borough of Havering, including the RM1, RM2, RM3, RM11, RM12 and RM14 postcodes. Neighbourhoods we move people in and out of every week include:",
  neighbourhoods:
    "Romford, Hornchurch, Upminster, Rainham, Gidea Park, Collier Row, Elm Park, Harold Wood, Cranham and Emerson Park.",
  coverageOutro:
    "If your street sits on the Havering border with Redbridge or Barking and Dagenham, we cover that too. Tell us your postcode and we will confirm coverage and a price.",
  knowIntro:
    "Havering is the furthest east borough, largely suburban and semi-rural, so most moves are easy driveway loads. Here is what our crews plan for.",
  knowBlocks: [
    {
      label: "Driveways and parking",
      body: "Most Havering moves are from large houses with their own driveways and unrestricted street parking, which makes access easier. Hornchurch, Gidea Park, Emerson Park and Upminster are large suburban houses, with notable period stock in Gidea Park, where a driveway usually gives direct loading access. We confirm parking per street and arrange a bay suspension only where a central move needs it.",
    },
    {
      label: "Romford and roads",
      body: "Central Romford is denser, with Victorian terraces, controlled parking around the town centre and station, and new-build towers. Harold Hill adds an estate. We plan around the A12 and the A127.",
    },
    {
      label: "Property types",
      body: "Havering runs from large suburban and semi-rural houses in Hornchurch, Upminster and Emerson Park and period houses in Gidea Park to Victorian terraces, new-build towers and an estate around central Romford and Harold Hill.",
    },
    {
      label: "Emissions",
      body: "Havering sits within the Greater London Ultra Low Emission Zone. The ULEZ charge is £12.50 a day for non-compliant vehicles, but our fleet is compliant, so there is no emissions charge on your move.",
    },
  ],
  nearby: [
    { label: "Redbridge", href: "/areas/redbridge" },
    { label: "Barking and Dagenham", href: "/areas/barking-and-dagenham" },
  ],
  faqs: [
    {
      question: "Do you cover my Havering postcode?",
      answer:
        "Yes. We cover the London Borough of Havering, including RM1, RM2, RM3, RM11, RM12 and RM14, from Romford and Hornchurch to Upminster and Rainham. Send your postcode and we will confirm coverage and a price.",
    },
    faqPrice("Havering"),
    {
      question: "Is parking easy for a move in Havering?",
      answer:
        "Usually yes. Most of the borough is suburban and semi-rural, with driveways and unrestricted street parking, which makes loading easier. Around central Romford the streets are controlled, so we arrange a bay suspension only where a move needs it.",
    },
    faqInsured(),
    faqSameDay("Havering"),
    {
      question: "Can you move a large house in Emerson Park or Gidea Park?",
      answer:
        "Yes. These are large, often period suburban homes, usually with a driveway that gives direct loading access. We bring the right crew size and protection and plan the move around your schedule.",
    },
  ],
};

/* 32. CITY OF LONDON (office-led) */
export const cityOfLondon: Borough = {
  slug: "city-of-london",
  name: "City of London",
  h1: "Removals in the City of London",
  subhead:
    "Experienced, insured office and home removals in the City of London, from £55 per hour plus VAT, 7 days a week, with real knowledge of building access, out-of-hours moves and the Square Mile across EC1, EC2, EC3 and EC4.",
  metaTitle: "Removals City of London | Office Moves | Removals Nationwide",
  metaDescription:
    "Experienced office and home removals in the City of London (EC1 to EC4) from £55/hr plus VAT. Insured, Barbican service-lift and Congestion Charge managed.",
  postcodes: ["EC1", "EC2", "EC3", "EC4"],
  areaServedName: "City of London",
  heroImage: HERO_IMAGE,
  heroImageAlt: heroAlt("the City of London"),
  introLine:
    "A experienced and fully insured removals company that genuinely serves and knows the City of London, for office relocations and the residential estates alike.",
  valueLine: VALUE_LINE,
  localBody: [
    "Removals Nationwide runs office and home removals across the whole of the City of London, 7 days a week. We are a fully experienced and insured London removals company, not an inexperienced local operator and not a booking marketplace, and we plan City moves around building access, goods lifts and out-of-hours timing, with one point of contact from quote to completion.",
    "What sets a Removals Nationwide move in the City apart is that the Square Mile is the financial district, so most moves are office relocations booked through building management and run in the evening or at the weekend. We also move Barbican and Golden Lane residents, handle high-value contents with insured crews, and manage the Congestion Charge.",
  ],
  coverageIntro:
    "We cover the whole of the City of London, the Square Mile, including the EC1, EC2, EC3 and EC4 postcodes. Areas we move offices and homes in and out of every week include:",
  neighbourhoods:
    "Barbican, Smithfield, Bank, Liverpool Street, Moorgate, Blackfriars, St Paul's, Temple, Aldgate and Golden Lane.",
  coverageOutro:
    "If your address sits on the City border with Islington, Hackney, Tower Hamlets, Westminster or Southwark, we cover that too. Tell us your address and the type of move and we will confirm a plan and a price.",
  knowIntro:
    "The City of London is the financial district, so most moves are office relocations, and the planning is about building access and timing. Here is what our crews plan for.",
  knowBlocks: [
    {
      label: "Office building access and timing",
      body: "City buildings have managed access with goods lifts and loading bays booked through building management, tight loading windows, and many out-of-hours and weekend moves to avoid the working week. We book the lift and bay, plan around the access window, and coordinate the whole move so the office is ready to work.",
    },
    {
      label: "Congestion Charge and loading",
      body: "On-street parking is effectively unavailable in the City, so we use booked loading bays and arrange access in advance through the building and the City Corporation. The streets are narrow and historic with red routes, pedestrianised areas and security controls, which we plan the route around.",
    },
    {
      label: "Barbican and Golden Lane estates",
      body: "Residential in the City is limited and specific, mainly the Barbican and Golden Lane estates, both large, listed and access-controlled, plus converted and riverside apartments and the legal chambers around the Temple. These estates require service-lift and access booking through estate management, which we coordinate.",
    },
    {
      label: "Emissions and charges",
      body: "The City sits within both the Greater London Ultra Low Emission Zone and the central Congestion Charge zone. The ULEZ charge is £12.50 a day for non-compliant vehicles, but our fleet is compliant, so there is no emissions charge on your move. The Congestion Charge is £18 a day, which we manage as part of the move.",
    },
  ],
  nearby: [
    { label: "Islington", href: "/areas/islington" },
    { label: "Hackney", href: "/areas/hackney" },
    { label: "Tower Hamlets", href: "/areas/tower-hamlets" },
    { label: "Westminster", href: "/areas/westminster" },
    { label: "Southwark", href: "/areas/southwark" },
  ],
  faqs: [
    {
      question: "Do you cover the City of London?",
      answer:
        "Yes. We cover the whole Square Mile, EC1 to EC4, for office relocations and for the residential estates such as the Barbican and Golden Lane. Tell us your address and the type of move and we will confirm a plan and a price.",
    },
    {
      question: "How much does a move in the City cost?",
      answer:
        "Our man and van starts at £55 per hour plus VAT, and office relocations are fixed after a free survey because they depend on the size, the building access and the timing. The price includes insurance, and we manage the Congestion Charge and the loading access.",
    },
    {
      question: "Can you do an out-of-hours or weekend office move?",
      answer:
        "Yes. Most City office moves run in the evening or at the weekend to avoid the working week, and we plan around the building's access windows, book the goods lift and loading bay through building management, and coordinate the whole move so the office is ready to work.",
    },
    {
      question: "How do parking and the Congestion Charge work in the City?",
      answer:
        "On-street parking is effectively unavailable in the City, so we use booked loading bays and arrange access through the building and the City Corporation in advance. The Square Mile is inside the Congestion Charge zone, which we manage as part of the move.",
    },
    {
      question: "Can you move within the Barbican or Golden Lane estate?",
      answer:
        "Yes. These estates have controlled access and service lifts, so we book the lift and loading slot through estate management in advance and plan the route through the estate so the move runs smoothly.",
    },
    faqInsured(),
  ],
};

/** Registry of fully-built borough pages. Add each cloned borough here. */
export const boroughs: Record<string, Borough> = {
  islington,
  camden,
  hackney,
  wandsworth,
  lambeth,
  "tower-hamlets": towerHamlets,
  westminster,
  "kensington-and-chelsea": kensingtonAndChelsea,
  "hammersmith-and-fulham": hammersmithAndFulham,
  southwark,
  lewisham,
  ealing,
  barnet,
  brent,
  croydon,
  newham,
  haringey,
  greenwich,
  "waltham-forest": walthamForest,
  redbridge,
  enfield,
  bromley,
  merton,
  hounslow,
  harrow,
  "barking-and-dagenham": barkingAndDagenham,
  bexley,
  "kingston-upon-thames": kingstonUponThames,
  "richmond-upon-thames": richmondUponThames,
  sutton,
  hillingdon,
  havering,
  "city-of-london": cityOfLondon,
};
