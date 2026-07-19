const unsplash = (photoId: string, width = 2400) =>
  `https://images.unsplash.com/${photoId}?auto=format&fit=crop&w=${width}&q=82`;

export const REMOTE_IMAGES = {
  movingVan: unsplash("photo-1710749093416-1e9cdde8d080"),
  moversLoading: unsplash("photo-1698917414969-feade59e3343"),
  homeMove: unsplash("photo-1714647211902-bb711d643a17"),
  storage: unsplash("photo-1672552226380-486fe900b322"),
  smartphoneSurvey: unsplash("photo-1565880328390-fdb038e30206"),
  london: unsplash("photo-1781807124729-a6a68d42a6d7"),
  officeMove: unsplash("photo-1758691738691-557c09410bf7"),
  officeBoxes: unsplash("photo-1600725935160-f67ee4f6084a"),
  movingBoxes: unsplash("photo-1730154838368-c37b1fdebcf6"),
  warehouse: unsplash("photo-1566576912321-d58ddd7a6088"),
  cleaning: unsplash("photo-1581578731548-c64695cc6952"),
  deepCleaning: unsplash("photo-1527515637462-cff94eecc1ac"),
  recycling: unsplash("photo-1532996122724-e3c354a0b15b"),
  furnishedHome: unsplash("photo-1501183638710-841dd1904471"),
  sofa: unsplash("photo-1493663284031-b7e3aefcae8e"),
  livingRoom: unsplash("photo-1555041469-a586c61ea9bc"),
} as const;

export const REMOVALS_GALLERY = [
  { src: REMOTE_IMAGES.movingVan, alt: "Removal van ready for a house move" },
  { src: REMOTE_IMAGES.moversLoading, alt: "Professional movers loading furniture" },
  { src: REMOTE_IMAGES.homeMove, alt: "Moving boxes in a family home" },
  { src: REMOTE_IMAGES.movingBoxes, alt: "Packed moving boxes ready for transport" },
  { src: REMOTE_IMAGES.officeMove, alt: "Office relocation in progress" },
  { src: REMOTE_IMAGES.officeBoxes, alt: "Packed boxes prepared for an office move" },
  { src: REMOTE_IMAGES.storage, alt: "Organised secure storage facility" },
  { src: REMOTE_IMAGES.warehouse, alt: "Warehouse storage and handling area" },
  { src: REMOTE_IMAGES.sofa, alt: "Sofa ready to be moved from a home" },
  { src: REMOTE_IMAGES.livingRoom, alt: "Furnished living room before a move" },
  { src: REMOTE_IMAGES.furnishedHome, alt: "Home interior prepared for relocation" },
  { src: REMOTE_IMAGES.london, alt: "London skyline in the removals service area" },
] as const;

export const DEFAULT_BANNER_IMAGE = REMOTE_IMAGES.movingBoxes;
