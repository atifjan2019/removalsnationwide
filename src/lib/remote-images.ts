export const REMOTE_IMAGES = {
  londonHouseMove: "/images/brand/london-house-removals-hero.png",
  londonOfficeRelocation: "/images/brand/london-office-relocation-hero.png",
  professionalPackingHero: "/images/brand/professional-packing-hero.png",
  movingVan: "/images/brand/british-removal-van.webp",
  moversLoading: "/images/brand/british-removal-crew.webp",
  homeMove: "/images/brand/british-home-move.webp",
  storage: "/images/brand/secure-storage.webp",
  smartphoneSurvey: "/images/brand/video-survey.webp",
  london: "/images/brand/british-removal-van.webp",
  officeMove: "/images/brand/office-removals.webp",
  officeBoxes: "/images/brand/office-removals.webp",
  movingBoxes: "/images/brand/professional-packing.webp",
  warehouse: "/images/brand/secure-storage.webp",
  cleaning: "/images/brand/end-of-tenancy-cleaning.webp",
  deepCleaning: "/images/brand/end-of-tenancy-cleaning.webp",
  recycling: "/images/brand/responsible-clearance.webp",
  furnishedHome: "/images/brand/single-item-delivery.webp",
  sofa: "/images/brand/single-item-delivery.webp",
  livingRoom: "/images/brand/single-item-delivery.webp",
} as const;

export const REMOVALS_GALLERY = [
  { src: REMOTE_IMAGES.londonHouseMove, alt: "Professional movers loading a removal van on a London residential street" },
  { src: REMOTE_IMAGES.londonOfficeRelocation, alt: "Office relocation crew transporting protected furniture in London" },
  { src: REMOTE_IMAGES.professionalPackingHero, alt: "Removal specialists carefully packing belongings in a London home" },
  { src: REMOTE_IMAGES.movingVan, alt: "Branded removal van on a London residential street" },
  { src: REMOTE_IMAGES.moversLoading, alt: "Professional movers carrying protected furniture from a London home" },
  { src: REMOTE_IMAGES.homeMove, alt: "Mover checking an inventory in a prepared British home" },
  { src: REMOTE_IMAGES.movingBoxes, alt: "Professional packing service for fragile household items" },
  { src: REMOTE_IMAGES.officeMove, alt: "Office relocation crew moving equipment in central London" },
  { src: REMOTE_IMAGES.smartphoneSurvey, alt: "Homeowner completing a video removals survey" },
  { src: REMOTE_IMAGES.storage, alt: "Secure organised storage facility with monitored bays" },
  { src: REMOTE_IMAGES.cleaning, alt: "End-of-tenancy cleaning team working in a British flat" },
  { src: REMOTE_IMAGES.recycling, alt: "House-clearance team sorting reusable and recyclable items" },
  { src: REMOTE_IMAGES.sofa, alt: "Movers carefully delivering a single item of furniture" },
] as const;

export const DEFAULT_BANNER_IMAGE = REMOTE_IMAGES.movingBoxes;
