const R2_GENERATED =
  "https://media.removalsnationwide.uk/generated/removals-2026-07";

export const REMOTE_IMAGES = {
  londonHouseMove: `${R2_GENERATED}/01-house-removals-london.webp`,
  londonOfficeRelocation: `${R2_GENERATED}/03-office-relocation-london.webp`,
  professionalPackingHero: `${R2_GENERATED}/05-professional-packing.webp`,
  movingVan: `${R2_GENERATED}/01-house-removals-london.webp`,
  moversLoading: `${R2_GENERATED}/02-man-and-van-london.webp`,
  homeMove: `${R2_GENERATED}/01-house-removals-london.webp`,
  storage: `${R2_GENERATED}/04-secure-storage.webp`,
  smartphoneSurvey: `${R2_GENERATED}/11-video-removals-survey.webp`,
  london: `${R2_GENERATED}/06-international-removals.webp`,
  officeMove: `${R2_GENERATED}/03-office-relocation-london.webp`,
  officeBoxes: `${R2_GENERATED}/03-office-relocation-london.webp`,
  movingBoxes: `${R2_GENERATED}/05-professional-packing.webp`,
  warehouse: `${R2_GENERATED}/04-secure-storage.webp`,
  cleaning: `${R2_GENERATED}/09-end-of-tenancy-cleaning.webp`,
  deepCleaning: `${R2_GENERATED}/09-end-of-tenancy-cleaning.webp`,
  recycling: `${R2_GENERATED}/10-responsible-clearance.webp`,
  furnishedHome: `${R2_GENERATED}/07-single-item-delivery.webp`,
  sofa: `${R2_GENERATED}/07-single-item-delivery.webp`,
  livingRoom: `${R2_GENERATED}/07-single-item-delivery.webp`,
  studentMove: `${R2_GENERATED}/08-student-move.webp`,
  specialistPiano: `${R2_GENERATED}/12-specialist-piano-removal.webp`,
} as const;

export const REMOVALS_GALLERY = [
  { src: REMOTE_IMAGES.londonHouseMove, alt: "Professional movers loading a removal van on a London residential street" },
  { src: REMOTE_IMAGES.moversLoading, alt: "Professional man and van service for a London apartment move" },
  { src: REMOTE_IMAGES.londonOfficeRelocation, alt: "Office relocation crew transporting protected furniture in London" },
  { src: REMOTE_IMAGES.storage, alt: "Removal specialist checking an organised secure storage bay" },
  { src: REMOTE_IMAGES.professionalPackingHero, alt: "Removal specialists carefully packing belongings in a London home" },
  { src: REMOTE_IMAGES.london, alt: "International removals crew loading export-wrapped furniture" },
  { src: REMOTE_IMAGES.sofa, alt: "Movers carefully delivering a protected sofa" },
  { src: REMOTE_IMAGES.studentMove, alt: "Professional mover helping with a student accommodation move" },
  { src: REMOTE_IMAGES.cleaning, alt: "End-of-tenancy cleaning team working in a London flat" },
  { src: REMOTE_IMAGES.recycling, alt: "House-clearance team sorting reusable and recyclable items" },
  { src: REMOTE_IMAGES.smartphoneSurvey, alt: "Homeowner completing a video removals survey" },
  { src: REMOTE_IMAGES.specialistPiano, alt: "Specialist movers protecting an upright piano for removal" },
] as const;

export const DEFAULT_BANNER_IMAGE = REMOTE_IMAGES.movingBoxes;
