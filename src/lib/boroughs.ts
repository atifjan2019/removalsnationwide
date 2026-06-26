/**
 * Borough page data model and registry.
 *
 * The BoroughPage template keeps the hero, price table, services list,
 * accreditation block, schema shape and FAQ shape identical for every borough.
 * Only the researched local data below changes per borough. To clone a new
 * borough, copy one of these objects, replace every local fact with that
 * borough's real data, and add its slug to the `boroughs` registry. The
 * /areas/[slug] route, sitemap and areas hub pick it up automatically.
 *
 * Confirmed company data (rates, the six accreditations, NAP, services) is
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

const HERO_IMAGE =
  "https://www.top-removals.co.uk/wp-content/uploads/2025/05/man-and-van-service-London.jpg";

const heroAlt = (n: string) => `Top Removals man and van team loading a van in ${n}, London`;
const introLine = (n: string) =>
  `A BAR and NGRS accredited removals company that genuinely serves and knows ${n}.`;
const VALUE_LINE =
  "Published hourly rates, insurance included, your own accountable crew, and the parking and access handled for you.";
const localPara1 = (n: string) =>
  `Top Removals moves homes, offices and single items across the whole of ${n}, 7 days a week. We are a fully accredited and insured London removals company, not an unaccredited local operator and not a booking marketplace. The same team handles your man and van job, your full house or office move, your packing, your storage and your clearance, with one point of contact from quote to completion.`;

const faqPrice = (n: string): BoroughFaq => ({
  question: `How much is a man and van in ${n}?`,
  answer:
    "Our man and van starts at £55 per hour plus VAT for one mover and a van, from £70 for two movers and from £90 for three, with a two-hour minimum. Half-day and full-day rates are also published. The price includes loading, transport, unloading, parking, tolls and insurance.",
});
const faqInsured = (): BoroughFaq => ({
  question: "Are you insured and accredited?",
  answer:
    "Yes. Every move includes goods-in-transit insurance in the price, and we are accredited by BAR, NGRS, IAM, The Furniture Ombudsman, QSS-DW and Checkatrade. Our crews are vetted and background-checked.",
});
const faqSameDay = (n: string): BoroughFaq => ({
  question: `Can you do a same-day move in ${n}?`,
  answer:
    "Often yes, subject to availability. We operate 7 days a week and usually arrange a crew and van at short notice for smaller moves. Call us and we will tell you what we can do today.",
});
const faqFullMove = (n: string): BoroughFaq => ({
  question: "Do you do full house and office moves, not just man and van?",
  answer: `Yes. We handle everything from a single item to a full house or office relocation in ${n}, plus packing, storage, clearance and international moves, all from one accredited team.`,
});
const faqNearby = (n: string, neighbours: string): BoroughFaq => ({
  question: `Do you cover areas near ${n}?`,
  answer: `Yes. We also serve neighbouring ${neighbours}, and all 32 London boroughs, Greater London and Surrey, with nationwide moves on request.`,
});

const subhead = (n: string, codes: string) =>
  `Accredited, insured man and van and removals in ${n}, from £55 per hour plus VAT, 7 days a week, with real local knowledge of parking, access and property across ${codes}.`;

/* ====================================================================== */
/* 0. ISLINGTON (model page)                                              */
/* ====================================================================== */

export const islington: Borough = {
  slug: "islington",
  name: "Islington",
  h1: "Removals in Islington",
  subhead: subhead("Islington", "N1, N5, N7, N19 and EC1"),
  metaTitle: "Removals in Islington | Man and Van from £55/hr | Top Removals",
  metaDescription:
    "Accredited, insured removals and man and van in Islington from £55 per hour plus VAT, 7 days a week. Local knowledge of parking, access and property across N1, N5, N7, N19 and EC1.",
  postcodes: ["N1", "N5", "N7", "N19", "EC1"],
  heroImage: HERO_IMAGE,
  heroImageAlt: heroAlt("Islington"),
  introLine: introLine("Islington"),
  valueLine: VALUE_LINE,
  localBody: [
    localPara1("Islington"),
    "What sets a Top Removals move in Islington apart is that we work in the borough constantly, so we plan around its realities: controlled parking, busy main roads, period staircases and tight access. That local knowledge means fewer delays and a smoother move on the day.",
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
  metaTitle: "Removals Camden | Man and Van from £55/hr, Insured | Top Removals",
  metaDescription:
    "Accredited removals and man and van in Camden (NW1, NW3, NW5, WC1) from £55/hr plus VAT. Insured, 7 days, with real local knowledge of Hampstead hills, parking and period access. Free quote.",
  postcodes: ["NW1", "NW3", "NW5", "WC1"],
  heroImage: HERO_IMAGE,
  heroImageAlt: heroAlt("Camden"),
  introLine: introLine("Camden"),
  valueLine: VALUE_LINE,
  localBody: [
    localPara1("Camden"),
    "What sets a Top Removals move in Camden apart is that the access varies sharply by neighbourhood, from the steep conservation streets above Belsize Park to the market crowds of Camden Town and the Georgian terraces of Bloomsbury. We work the borough constantly, plan the loading point and crew size for each, and that local knowledge means fewer delays on the day.",
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
  metaTitle: "Removals Hackney | Man and Van from £55/hr, Insured | Top Removals",
  metaDescription:
    "Accredited removals and man and van in Hackney (E2, E5, E8, E9, N1, N16) from £55/hr plus VAT. Insured, 7 days, with real local knowledge of warehouse conversions, estates and parking. Free quote.",
  postcodes: ["E2", "E5", "E8", "E9", "N1", "N16"],
  heroImage: HERO_IMAGE,
  heroImageAlt: heroAlt("Hackney"),
  introLine: introLine("Hackney"),
  valueLine: VALUE_LINE,
  localBody: [
    localPara1("Hackney"),
    "What sets a Top Removals move in Hackney apart is that the borough mixes tight Victorian streets, warehouse conversions and a high number of estate tower blocks, and each needs a different plan. We coordinate goods lifts, loading bays and porters in advance, so the move stays smooth on the day.",
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
  metaTitle: "Removals Wandsworth | Man and Van from £55/hr, Insured | Top Removals",
  metaDescription:
    "Accredited removals and man and van in Wandsworth (SW11, SW12, SW15, SW17, SW18) from £55/hr plus VAT. Insured, 7 days, with real local knowledge of terraces, riverside new-builds and parking. Free quote.",
  postcodes: ["SW11", "SW12", "SW15", "SW17", "SW18"],
  heroImage: HERO_IMAGE,
  heroImageAlt: heroAlt("Wandsworth"),
  introLine: introLine("Wandsworth"),
  valueLine: VALUE_LINE,
  localBody: [
    localPara1("Wandsworth"),
    "What sets a Top Removals move in Wandsworth apart is that the borough has one of the highest move turnovers in London, mostly families and professionals in period terraces, with a riverside new-build edge at Nine Elms. We plan the loading point and crew size for each and coordinate concierge blocks in advance.",
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
  metaTitle: "Removals Lambeth | Man and Van from £55/hr, Insured | Top Removals",
  metaDescription:
    "Accredited removals and man and van in Lambeth (SW2, SW4, SW8, SW9, SW16, SE11) from £55/hr plus VAT. Insured, 7 days, with real local knowledge of Clapham, Brixton, estates and parking. Free quote.",
  postcodes: ["SW2", "SW4", "SW8", "SW9", "SW16", "SE11"],
  heroImage: HERO_IMAGE,
  heroImageAlt: heroAlt("Lambeth"),
  introLine: introLine("Lambeth"),
  valueLine: VALUE_LINE,
  localBody: [
    localPara1("Lambeth"),
    "What sets a Top Removals move in Lambeth apart is that the borough runs from period Clapham and Kennington to dense Brixton and Streatham, and the access changes with it. We plan the loading point and crew size for terraces, estate lifts and Vauxhall concierge towers alike.",
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
  metaTitle: "Removals Tower Hamlets | Man and Van from £55/hr, Insured | Top Removals",
  metaDescription:
    "Accredited removals and man and van in Tower Hamlets (E1, E2, E3, E14) from £55/hr plus VAT. Insured, 7 days, expert in Canary Wharf high-rise moves, parking and access. Free quote.",
  postcodes: ["E1", "E2", "E3", "E14"],
  heroImage: HERO_IMAGE,
  heroImageAlt: heroAlt("Tower Hamlets"),
  introLine: introLine("Tower Hamlets"),
  valueLine: VALUE_LINE,
  localBody: [
    localPara1("Tower Hamlets"),
    "What sets a Top Removals move in Tower Hamlets apart is that the borough has one of the highest concentrations of high-rise flat moves in London, and those moves live or die on building logistics. We book service lifts and loading bays through the building manager and coordinate private estate parking in advance.",
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
  metaTitle: "Removals Westminster | Insured Movers, Prime Handling | Top Removals",
  metaDescription:
    "Accredited removals and man and van in Westminster (W1, W2, SW1, NW8) from £55/hr plus VAT. Insured, careful prime-property handling, Congestion Charge and parking managed. Free quote.",
  postcodes: ["W1", "W2", "SW1", "NW8"],
  heroImage: HERO_IMAGE,
  heroImageAlt: heroAlt("Westminster"),
  introLine: introLine("Westminster"),
  valueLine: VALUE_LINE,
  localBody: [
    localPara1("Westminster"),
    "What sets a Top Removals move in Westminster apart is that it is the most access-restricted borough in London and the homes are often high-value, so careful planning, full insurance and a suspended parking bay matter more here than anywhere. We coordinate porter buildings and protect listed interiors.",
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
      body: "Much of the borough is high-value: prime mansion blocks in Marylebone, Maida Vale and St John's Wood, grand stucco terraces in Belgravia and Pimlico, porter and concierge buildings, and listed buildings. We protect high-value and listed interiors and move with insured, accredited crews.",
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
  metaTitle: "Removals Kensington and Chelsea | Insured, Prime Handling | Top Removals",
  metaDescription:
    "Accredited removals and man and van in Kensington and Chelsea (SW3, SW5, SW7, W8, W11) from £55/hr plus VAT. Insured, careful prime and mews handling, parking managed. Free quote.",
  postcodes: ["SW3", "SW5", "SW7", "W8", "W11"],
  heroImage: HERO_IMAGE,
  heroImageAlt: heroAlt("Kensington and Chelsea"),
  introLine: introLine("Kensington and Chelsea"),
  valueLine: VALUE_LINE,
  localBody: [
    localPara1("Kensington and Chelsea"),
    "What sets a Top Removals move in Kensington and Chelsea apart is that the borough is prime, high-value and tightly conserved, with many narrow mews houses, so careful handling, full insurance and a planned approach to access matter. We protect high-value interiors and plan a transfer where a mews entrance only fits a small vehicle.",
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
  metaTitle: "Removals Hammersmith and Fulham | Man and Van from £55/hr | Top Removals",
  metaDescription:
    "Accredited removals and man and van in Hammersmith and Fulham (W6, W12, W14, SW6) from £55/hr plus VAT. Insured, 7 days, real local knowledge of Fulham terraces and parking. Free quote.",
  postcodes: ["W6", "W12", "W14", "SW6"],
  heroImage: HERO_IMAGE,
  heroImageAlt: heroAlt("Hammersmith and Fulham"),
  introLine: introLine("Hammersmith and Fulham"),
  valueLine: VALUE_LINE,
  localBody: [
    localPara1("Hammersmith and Fulham"),
    "What sets a Top Removals move in Hammersmith and Fulham apart is that the borough is mostly period terraces and conversions with a growing riverside new-build edge. We plan the loading point and crew size for narrow staircases and coordinate the Imperial Wharf and Fulham Reach concierge blocks in advance.",
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
  metaTitle: "Removals Southwark | Man and Van from £55/hr, Insured | Top Removals",
  metaDescription:
    "Accredited removals and man and van in Southwark (SE1, SE5, SE15, SE16, SE22) from £55/hr plus VAT. Insured, 7 days, real local knowledge of conversions, estates and parking. Free quote.",
  postcodes: ["SE1", "SE5", "SE15", "SE16", "SE22"],
  heroImage: HERO_IMAGE,
  heroImageAlt: heroAlt("Southwark"),
  introLine: introLine("Southwark"),
  valueLine: VALUE_LINE,
  localBody: [
    localPara1("Southwark"),
    "What sets a Top Removals move in Southwark apart is that the borough runs from riverside warehouse conversions to leafy Dulwich and dense Walworth, and the access varies with it. We plan vehicle size and the loading point for cobbled conversion approaches, estate lifts and Elephant new-build towers alike.",
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
  metaTitle: "Removals Lewisham | Man and Van from £55/hr, Insured | Top Removals",
  metaDescription:
    "Accredited removals and man and van in Lewisham (SE4, SE6, SE8, SE13, SE14, SE23) from £55/hr plus VAT. Insured, 7 days, real local knowledge of period terraces and parking. Free quote.",
  postcodes: ["SE4", "SE6", "SE8", "SE13", "SE14", "SE23"],
  heroImage: HERO_IMAGE,
  heroImageAlt: heroAlt("Lewisham"),
  introLine: introLine("Lewisham"),
  valueLine: VALUE_LINE,
  localBody: [
    localPara1("Lewisham"),
    "What sets a Top Removals move in Lewisham apart is that it is largely period terraces with pockets of estate housing and new-build, and parking control varies across the borough, so we confirm it per street rather than assume it.",
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
  metaTitle: "Removals Ealing | Man and Van from £55/hr, Insured | Top Removals",
  metaDescription:
    "Accredited removals and man and van in Ealing (W3, W5, W7, W13, UB1, UB6) from £55/hr plus VAT. Insured, 7 days, real local knowledge of suburban semis and parking. Free quote.",
  postcodes: ["W3", "W5", "W7", "W13", "UB1", "UB6"],
  heroImage: HERO_IMAGE,
  heroImageAlt: heroAlt("Ealing"),
  introLine: introLine("Ealing"),
  valueLine: VALUE_LINE,
  localBody: [
    localPara1("Ealing"),
    "What sets a Top Removals move in Ealing apart is that the borough is more suburban than inner London, so many moves are from larger houses and semis with their own driveways and wider streets, which can make access easier, though there are still congestion and controlled-parking pockets to plan for.",
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
  metaTitle: "Removals Barnet | Man and Van from £55/hr, Insured | Top Removals",
  metaDescription:
    "Accredited removals and man and van in Barnet (N2, N3, N12, N20, NW4, NW7, NW11) from £55/hr plus VAT. Insured, 7 days, real local knowledge of suburban homes and parking. Free quote.",
  postcodes: ["N2", "N3", "N12", "N20", "NW4", "NW7", "NW11"],
  heroImage: HERO_IMAGE,
  heroImageAlt: heroAlt("Barnet"),
  introLine: introLine("Barnet"),
  valueLine: VALUE_LINE,
  localBody: [
    localPara1("Barnet"),
    "What sets a Top Removals move in Barnet apart is that it is a large outer-London suburban borough, so most moves are from family houses and semis with gardens and driveways where loading is often easier, alongside the high-density Colindale new-build towers we coordinate in advance.",
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
};
