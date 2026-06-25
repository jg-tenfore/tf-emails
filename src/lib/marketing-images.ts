/**
 * Marketing Buck hero photography. Served via Storybook's staticDirs mapping
 * ("/marketing-images" → the root `marketing-buck/` folder), so the large files
 * aren't bundled. Reference these by importing `marketingHeroes`.
 */
// Relative (no leading slash) so URLs resolve under both the local root and the
// GitHub Pages subpath (/<repo>/) — the build uses a relative Vite base.
const BASE = "marketing-images";

export interface MarketingHero {
  src: string;
  alt: string;
}

export const marketingHeroes = {
  golferSwing: {
    src: `${BASE}/golfer-swing.jpg`,
    alt: "Golfer following through on a driver swing at sunset",
  },
  golfersSunset: {
    src: `${BASE}/golfers-sunset.jpg`,
    alt: "Smiling golfers heading out for a round at golden hour",
  },
  golfersMen: {
    src: `${BASE}/evening-golf.jpg`,
    alt: "Two golfers enjoying a round together at sunset",
  },
  proShop: {
    src: `${BASE}/pro-shop.jpg`,
    alt: "A golfer inspecting a club in the pro shop",
  },
  lessonInstruction: {
    src: `${BASE}/lesson-instruction.jpg`,
    alt: "A pro coaching a golfer through their swing on the range",
  },
  twilightTwosome: {
    src: `${BASE}/twilight-twosome.jpg`,
    alt: "A couple walking the course with their trolleys at sunset",
  },
  clubhouseDining: {
    src: `${BASE}/clubhouse-dining.jpg`,
    alt: "A set table on the clubhouse deck overlooking the course",
  },
  aeration: {
    src: `${BASE}/aeration.jpg`,
    alt: "A greenskeeper aerating a green, pulling cores from the turf",
  },
  juniorCamp: {
    src: `${BASE}/junior-golfer.jpg`,
    alt: "A young junior golfer celebrating a shot on the course",
  },
  seniorLeague: {
    src: `${BASE}/senior-golfers.jpg`,
    alt: "A smiling senior couple out for a round of golf",
  },
  fathersDay: {
    src: `${BASE}/jr-golf.jpg`,
    alt: "A father and child sharing a high-five on the green",
  },
  demoDay: {
    src: `${BASE}/titleist-demo-day.jpg`,
    alt: "Golfers hitting on the range at a Titleist demo day",
  },
  charityScramble: {
    src: `${BASE}/charity-scramble.webp`,
    alt: "Charity Golf Tournament — 3-Man Scramble event flyer",
  },
} satisfies Record<string, MarketingHero>;

/** Titleist partner assets for the Demo Day fitting feature. */
export const titleistLogo = `${BASE}/titleist-logo.svg`;
export const titleistLineup = `${BASE}/titleist-lineup.webp`;

/** Plated-dish photography for the dining email's food showcase. */
export const diningDishes = [
  { src: `${BASE}/dish-trio.jpg`, title: "Clubhouse classics", alt: "Burgers and salad with a course view" },
  { src: `${BASE}/dish-salmon.jpg`, title: "Chef's specials", alt: "Plated salmon entrée with a glass of wine" },
] satisfies { src: string; title: string; alt: string }[];

/** Dinner menu showcase for the Twilight Twosome email (2×2 grid). */
export const twilightMenu = [
  { src: `${BASE}/menu/menu-lobster.jpg`, title: "Baked Stuffed Lobster", alt: "Baked stuffed lobster on a platter" },
  { src: `${BASE}/menu/menu-filet.jpg`, title: "Center-Cut Filet", alt: "Grilled filet with a glass of red wine" },
  { src: `${BASE}/menu/menu-salmon.jpg`, title: "Pan-Seared Salmon", alt: "Pan-seared salmon over vegetables" },
  { src: `${BASE}/menu/menu-peppers.jpg`, title: "Bacon-Wrapped Peppers", alt: "Bacon-wrapped cherry peppers appetizer" },
] satisfies { src: string; title: string; alt: string }[];
