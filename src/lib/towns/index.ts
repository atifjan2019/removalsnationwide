import type { Borough } from "@/lib/boroughs";

import { town as ashford } from "./ashford";
import { town as aylesbury } from "./aylesbury";
import { town as basildon } from "./basildon";
import { town as basingstoke } from "./basingstoke";
import { town as bedford } from "./bedford";
import { town as bishopsStortford } from "./bishops-stortford";
import { town as bracknell } from "./bracknell";
import { town as brentwood } from "./brentwood";
import { town as brighton } from "./brighton";
import { town as cambridge } from "./cambridge";
import { town as canterbury } from "./canterbury";
import { town as chelmsford } from "./chelmsford";
import { town as colchester } from "./colchester";
import { town as crawley } from "./crawley";
import { town as dartford } from "./dartford";
import { town as eastbourne } from "./eastbourne";
import { town as epsom } from "./epsom";
import { town as gravesend } from "./gravesend";
import { town as grays } from "./grays";
import { town as guildford } from "./guildford";
import { town as harlow } from "./harlow";
import { town as hastings } from "./hastings";
import { town as hemelHempstead } from "./hemel-hempstead";
import { town as highWycombe } from "./high-wycombe";
import { town as horsham } from "./horsham";
import { town as ipswich } from "./ipswich";
import { town as luton } from "./luton";
import { town as maidenhead } from "./maidenhead";
import { town as maidstone } from "./maidstone";
import { town as medway } from "./medway";
import { town as miltonKeynes } from "./milton-keynes";
import { town as northampton } from "./northampton";
import { town as oxford } from "./oxford";
import { town as peterborough } from "./peterborough";
import { town as portsmouth } from "./portsmouth";
import { town as reading } from "./reading";
import { town as redhill } from "./redhill";
import { town as sevenoaks } from "./sevenoaks";
import { town as slough } from "./slough";
import { town as southampton } from "./southampton";
import { town as southendOnSea } from "./southend-on-sea";
import { town as stAlbans } from "./st-albans";
import { town as stainesUponThames } from "./staines-upon-thames";
import { town as stevenage } from "./stevenage";
import { town as tonbridge } from "./tonbridge";
import { town as tunbridgeWells } from "./tunbridge-wells";
import { town as watford } from "./watford";
import { town as welwynGardenCity } from "./welwyn-garden-city";
import { town as windsor } from "./windsor";
import { town as woking } from "./woking";

/**
 * Town area pages outside Greater London, within about 100 miles of the
 * Purfleet depot. Each town lives in its own file in this directory and uses
 * the same Borough shape as src/lib/boroughs.ts with `kind: "town"`, so the
 * /areas/[slug] route, the sitemap and the areas hub render it with the same
 * BoroughPage template. Register each town here and in a region below.
 */

export type TownRegion = { name: string; eyebrow: string; slugs: string[] };

export const towns: Record<string, Borough> = {
  ashford: ashford,
  aylesbury: aylesbury,
  basildon: basildon,
  basingstoke: basingstoke,
  bedford: bedford,
  "bishops-stortford": bishopsStortford,
  bracknell: bracknell,
  brentwood: brentwood,
  brighton: brighton,
  cambridge: cambridge,
  canterbury: canterbury,
  chelmsford: chelmsford,
  colchester: colchester,
  crawley: crawley,
  dartford: dartford,
  eastbourne: eastbourne,
  epsom: epsom,
  gravesend: gravesend,
  grays: grays,
  guildford: guildford,
  harlow: harlow,
  hastings: hastings,
  "hemel-hempstead": hemelHempstead,
  "high-wycombe": highWycombe,
  horsham: horsham,
  ipswich: ipswich,
  luton: luton,
  maidenhead: maidenhead,
  maidstone: maidstone,
  medway: medway,
  "milton-keynes": miltonKeynes,
  northampton: northampton,
  oxford: oxford,
  peterborough: peterborough,
  portsmouth: portsmouth,
  reading: reading,
  redhill: redhill,
  sevenoaks: sevenoaks,
  slough: slough,
  southampton: southampton,
  "southend-on-sea": southendOnSea,
  "st-albans": stAlbans,
  "staines-upon-thames": stainesUponThames,
  stevenage: stevenage,
  tonbridge: tonbridge,
  "tunbridge-wells": tunbridgeWells,
  watford: watford,
  "welwyn-garden-city": welwynGardenCity,
  windsor: windsor,
  woking: woking,
};

/** Grouping for the "Beyond London" section of the areas hub. */
export const townRegions: TownRegion[] = [
  {
    name: "Hertfordshire and Bedfordshire",
    eyebrow: "M1, M25 and A1(M) corridor",
    slugs: ["watford", "st-albans", "hemel-hempstead", "stevenage", "welwyn-garden-city", "bishops-stortford", "luton", "bedford"],
  },
  {
    name: "Essex and Suffolk",
    eyebrow: "A12, A13 and A127 corridor",
    slugs: ["harlow", "brentwood", "chelmsford", "basildon", "southend-on-sea", "grays", "colchester", "ipswich"],
  },
  {
    name: "Kent",
    eyebrow: "A2, M2, M20 and A21 corridor",
    slugs: ["dartford", "gravesend", "medway", "maidstone", "sevenoaks", "tonbridge", "tunbridge-wells", "ashford", "canterbury"],
  },
  {
    name: "Sussex",
    eyebrow: "M23, A23 and A22 corridor",
    slugs: ["crawley", "horsham", "brighton", "eastbourne", "hastings"],
  },
  {
    name: "Surrey and Hampshire",
    eyebrow: "M3, A3 and M25 corridor",
    slugs: ["guildford", "woking", "epsom", "redhill", "staines-upon-thames", "basingstoke", "southampton", "portsmouth"],
  },
  {
    name: "Berkshire and Buckinghamshire",
    eyebrow: "M4 and M40 corridor",
    slugs: ["slough", "windsor", "maidenhead", "reading", "bracknell", "high-wycombe", "aylesbury"],
  },
  {
    name: "Oxfordshire, Cambridgeshire and Northamptonshire",
    eyebrow: "M40, M1, M11 and A1(M) corridor",
    slugs: ["oxford", "milton-keynes", "cambridge", "peterborough", "northampton"],
  },
];
