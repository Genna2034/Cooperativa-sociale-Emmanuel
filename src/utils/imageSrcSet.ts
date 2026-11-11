// Versioni WebP ridimensionate delle foto (public/images/<nome>-<larghezza>.webp).
// Il browser sceglie la più adatta allo schermo; il JPEG resta come fallback.
const RESPONSIVE_PHOTOS = [
  '/images/closeup-support-hands.jpg',
  '/images/realistic-scene-with-health-worker-taking-care-elderly-patient.jpg',
  '/images/medium-shot-women-posing-together.jpg'
];

const WIDTHS = [640, 1024, 1600, 1920];

export const srcSetFor = (src?: string): string | undefined => {
  if (!src || !RESPONSIVE_PHOTOS.includes(src)) return undefined;
  const base = src.replace(/\.jpg$/, '');
  return WIDTHS.map((w) => `${base}-${w}.webp ${w}w`).join(', ');
};

/** sizes per immagini dentro card/colonne (non a tutto schermo) */
export const CARD_SIZES = '(min-width: 1024px) 33vw, (min-width: 768px) 50vw, 100vw';
