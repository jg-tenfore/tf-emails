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
  (typeof process !== "undefined" && process.env?.IMAGE_BASE_URL) ||
  "https://jg-tenfore.github.io/tf-emails";

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
    src: `${IMAGE_BASE}/marketing-images/golfers-sunset.jpg`,
    alt: "Smiling golfers heading out for a round at golden hour",
  },
  golfersMen: {
    src: `${IMAGE_BASE}/marketing-images/evening-golf.jpg`,
    alt: "Two golfers enjoying a round together at sunset",
  },
} as const;

/**
 * Club logo. NOTE: the source logo is bundled with a hashed name and has no
 * stable public URL. Replace with a hosted PNG/JPG (NOT svg — many clients strip
 * it). Placeholder points at a reachable asset so previews render.
 */
export const logo = {
  src: `${IMAGE_BASE}/marketing-images/titleist-logo.svg`, // TODO: hosted Sagamore logo
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
