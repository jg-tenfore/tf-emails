/**
 * Self-contained content data for the Unlayer email versions.
 *
 * Why not import from src/lib/scenario.ts? That module imports image binaries
 * (`import x from "@/assets/.../*.png"`), which only works through Vite's asset
 * pipeline — it would crash the plain-Node export script (scripts/export-unlayer)
 * and produces hashed URLs that aren't email-safe. Emails need ABSOLUTE, hosted
 * image URLs, so we keep a small parallel set of plain values here.
 *
 * Mirrors src/lib/{scenario,brand,marketing-images}.ts. Keep in sync by hand.
 */

/**
 * Base URL where email images are hosted. Defaults to the deployed Storybook
 * (reachable both from the Storybook preview and from sent emails). Override via
 * IMAGE_BASE_URL when exporting for a different CDN.
 */
export const IMAGE_BASE =
  // 1) Explicit override (export for a CDN) wins.
  (typeof process !== "undefined" && process.env?.IMAGE_BASE_URL) ||
  // 2) In the browser (Storybook preview) use a relative base so images load
  //    from the same origin — works at the local root AND the Pages subpath,
  //    and picks up newly-added images without a deploy.
  (typeof window !== "undefined" ? "." : "") ||
  // 3) Node default (sending / export with no override): the deployed Storybook.
  "https://jg-tenfore.github.io/tf-emails";

/** Absolute (or preview-relative) URL for a hosted marketing image path. */
export const imageUrl = (path: string) => `${IMAGE_BASE}/${path.replace(/^\//, "")}`;

/** Partner course (swappable content). Mirrors lib/scenario.ts `course`. */
export const course = {
  name: "Sagamore Spring Golf Club",
  phone: "(781) 334-3151",
  address: "1287 Main Street, Lynnfield, MA 01940",
  bookingUrl: "https://www.sagamoregolf.com/teetimes",
  textAlertsUrl: "https://www.sagamoregolf.com/text-alerts",
} as const;

/** Platform brand identity. Mirrors lib/brand.ts. */
export const brand = {
  name: "TenFore Golf",
  legalName: "TenFore Technology LLC",
  tagline:
    "The next generation of golf course management. Simple, fast, cloud-based, and fully mobile. Built for golf. Built to last.",
  url: "https://www.tenfore.golf",
  domain: "tenfore.golf",
  salesUrl: "https://www.tenfore.golf/contact",
  supportUrl: "https://www.tenfore.golf/support",
  termsUrl: "https://www.tenfore.golf/terms",
  privacyUrl: "https://www.tenfore.golf/privacy",
  addressLine1: "31215 Beck Road",
  addressLine2: "Bulverde, TX 78163",
  social: [
    { label: "LinkedIn", href: "https://www.linkedin.com/company/tenfore-golf", network: "LinkedIn" },
    { label: "Facebook", href: "https://www.facebook.com/tenforegolf", network: "Facebook" },
    { label: "X", href: "https://x.com/TenForeGolf", network: "Twitter" },
    { label: "Instagram", href: "https://www.instagram.com/tenforegolf/", network: "Instagram" },
    { label: "YouTube", href: "https://www.youtube.com/@tenforegolf", network: "YouTube" },
  ],
} as const;

/** Marketing Buck hero photography. Mirrors lib/marketing-images.ts. */
export const heroes = {
  golfersSunset: {
    src: `${IMAGE_BASE}/marketing-images/hero/golfers-sunset.jpg`,
    alt: "Smiling golfers heading out for a round at golden hour",
  },
  golfersMen: {
    src: `${IMAGE_BASE}/marketing-images/hero/evening-golf.jpg`,
    alt: "Two golfers enjoying a round together at sunset",
  },
  golferSwing: {
    src: `${IMAGE_BASE}/marketing-images/hero/golfer-swing.jpg`,
    alt: "Golfer following through on a driver swing at sunset",
  },
  courseHero: {
    src: `${IMAGE_BASE}/marketing-images/hero/course-hero.jpg`,
    alt: "A round at Sagamore Spring Golf Club",
  },
  clubhouseDining: {
    src: `${IMAGE_BASE}/marketing-images/hero/clubhouse-dining.jpg`,
    alt: "A set table on the clubhouse deck overlooking the course",
  },
  fathersDay: {
    src: `${IMAGE_BASE}/marketing-images/hero/jr-golf.jpg`,
    alt: "A father and child sharing a high-five on the green",
  },
  juniorCamp: {
    src: `${IMAGE_BASE}/marketing-images/hero/junior-golfer.jpg`,
    alt: "A young junior golfer celebrating a shot on the course",
  },
  seniorLeague: {
    src: `${IMAGE_BASE}/marketing-images/hero/senior-golfers.jpg`,
    alt: "A smiling senior couple out for a round of golf",
  },
  charityScramble: {
    src: `${IMAGE_BASE}/marketing-images/charity-scramble.webp`,
    alt: "Charity Golf Tournament — 3-Man Scramble event flyer",
  },
  lessonInstruction: {
    src: `${IMAGE_BASE}/marketing-images/hero/lesson-instruction.jpg`,
    alt: "A pro coaching a golfer through their swing on the range",
  },
  proShop: {
    src: `${IMAGE_BASE}/marketing-images/hero/pro-shop.jpg`,
    alt: "A golfer inspecting a club in the pro shop",
  },
  demoDay: {
    src: `${IMAGE_BASE}/marketing-images/hero/titleist-demo-day.jpg`,
    alt: "Golfers hitting on the range at a Titleist demo day",
  },
  clubhouseAeration: {
    src: `${IMAGE_BASE}/marketing-images/hero/aeration.jpg`,
    alt: "A greenskeeper aerating a green, pulling cores from the turf",
  },
  twilightTwosome: {
    src: `${IMAGE_BASE}/marketing-images/hero/twilight-twosome.jpg`,
    alt: "A couple walking the course with their trolleys at sunset",
  },
} as const;

/**
 * Featured pro-shop products (NOTE: store images are .webp — host PNG fallbacks
 * for Outlook). Mirrors lib/store-catalog.ts picks used by the merchandise emails.
 */
export const products = {
  mensPolo: { title: "Bennet Short Sleeve Men's Golf Polo Shirt", price: "$85.00", src: `${IMAGE_BASE}/store-images/apparel/mens/2000000059347-81-01_pc-072059d417.webp` },
  womensDress: { title: "Moveknit Zip 2.0 Women's Sleeveless Golf Dress", price: "$98.00", src: `${IMAGE_BASE}/store-images/apparel/womens/2000000045603-1109-01_pc-aa571058bd.webp` },
  golfBalls: { title: "Pro V1 AIM Red, White, & Blue 1776", price: "$54.99", src: `${IMAGE_BASE}/store-images/equipment/golf-balls/2000000061434-01_pc-d7700b7e9f.webp` },
  gpsWatch: { title: "Approach S44 Golf GPS Watch", price: "$199.99", src: `${IMAGE_BASE}/store-images/equipment/accessories-and-training/2000000050686-117-01_pc-e8807554a6.webp` },
  glove: { title: "Titleist Players Golf Glove", price: "$26.00", src: `${IMAGE_BASE}/store-images/equipment/accessories-and-training/0200211000123-01_pc-51c422a3e2.webp` },
  puttingAid: { title: "Putting Thing Training Aid", price: "$39.99", src: `${IMAGE_BASE}/store-images/equipment/accessories-and-training/2000000057993-01_pc-645c5bf741.webp` },
} as const;

/** Flattened "Shop by Brand" logo grid — one grayscale PNG (supplied component). */
export const brandStripImage = `${IMAGE_BASE}/marketing-images/brand-strip-070626.png`;

/** Titleist partner assets for the Demo Day fitting feature. */
export const titleist = {
  logo: `${IMAGE_BASE}/marketing-images/titleist-logo.svg`,
  lineup: `${IMAGE_BASE}/marketing-images/titleist-lineup.webp`,
};

/** Twilight dinner-menu showcase (2×2 grid). Mirrors lib/marketing-images.ts twilightMenu. */
export const twilightMenu = [
  { src: `${IMAGE_BASE}/marketing-images/menu/menu-lobster.jpg`, title: "Baked Stuffed Lobster", alt: "Baked stuffed lobster on a platter" },
  { src: `${IMAGE_BASE}/marketing-images/menu/menu-filet.jpg`, title: "Center-Cut Filet", alt: "Grilled filet with a glass of red wine" },
  { src: `${IMAGE_BASE}/marketing-images/menu/menu-salmon.jpg`, title: "Pan-Seared Salmon", alt: "Pan-seared salmon over vegetables" },
  { src: `${IMAGE_BASE}/marketing-images/menu/menu-peppers.jpg`, title: "Bacon-Wrapped Peppers", alt: "Bacon-wrapped cherry peppers appetizer" },
] as const;

/** Dining dish showcase (2-up). Mirrors lib/marketing-images.ts diningDishes. */
export const diningDishes = [
  { src: `${IMAGE_BASE}/marketing-images/dish-trio.jpg`, title: "Clubhouse classics", alt: "Burgers and salad with a course view" },
  { src: `${IMAGE_BASE}/marketing-images/dish-salmon.jpg`, title: "Chef's specials", alt: "Plated salmon entrée with a glass of wine" },
] as const;

/**
 * Club logo. NOTE: the source logo is bundled with a hashed name and has no
 * stable public URL. Replace with a hosted PNG/JPG (NOT svg — many clients strip
 * it). Placeholder points at a reachable asset so previews render.
 */
export const logo = {
  src: `${IMAGE_BASE}/marketing-images/sagamore-logo.jpg`,
  alt: course.name,
};

/**
 * Partner brand logos for the "shop by brand" strip. NOTE: these are .webp,
 * which Outlook (Windows) cannot render — host PNG fallbacks for production.
 */
export const brandLogos = [
  { name: "Titleist", src: `${IMAGE_BASE}/store-images/logos/logo-Titleist-5191ae6257.webp` },
  { name: "TaylorMade", src: `${IMAGE_BASE}/store-images/logos/logo-TaylorMade-2f17ac4849.webp` },
  { name: "Callaway", src: `${IMAGE_BASE}/store-images/logos/logo-Callaway-f45fd4251f.webp` },
  { name: "PING", src: `${IMAGE_BASE}/store-images/logos/logo-PING-3f87d394b0.webp` },
  { name: "FootJoy", src: `${IMAGE_BASE}/store-images/logos/24_FJ_Jewel_K_3-063a2db0f2.webp` },
] as const;

/** Unlayer merge tags — substituted per-recipient by the editor/sending engine. */
export const mergeTags = {
  firstName: "{{first_name}}",
} as const;
