const unsplash = (photoId: string, width = 2400) =>
  `https://images.unsplash.com/${photoId}?auto=format&fit=crop&w=${width}&q=82`;

export const REMOTE_IMAGES = {
  movingVan: unsplash("photo-1710749093416-1e9cdde8d080"),
  storage: unsplash("photo-1672552226380-486fe900b322"),
  smartphoneSurvey: unsplash("photo-1565880328390-fdb038e30206"),
  london: unsplash("photo-1781807124729-a6a68d42a6d7"),
  officeMove: unsplash("photo-1758691738691-557c09410bf7"),
  movingBoxes: unsplash("photo-1730154838368-c37b1fdebcf6"),
} as const;

export const DEFAULT_BANNER_IMAGE = REMOTE_IMAGES.movingBoxes;
