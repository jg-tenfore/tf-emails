import sagamoreLogo from "@/assets/brand/sagamore-logo.jpeg";
import sagamore9thHole from "@/assets/brand/sagamore-9th-hole.jpg";
import craneIcon from "@/assets/brand/tenfore-crane-icon.webp";

/**
 * Registered Sagamore Spring brand assets.
 *
 * Stored and showcased in Storybook (TenFore Partners → Sagamore Spring Golf
 * Club). Reference these by importing `assets` so emails point at one canonical
 * source.
 */
export interface BrandAsset {
  src: string;
  alt: string;
  width: number;
  height: number;
  file: string;
  note: string;
}

export const assets = {
  logo: {
    src: sagamoreLogo,
    alt: "Sagamore Spring Golf Club logo",
    width: 1000,
    height: 955,
    file: "src/assets/brand/sagamore-logo.jpeg",
    note: "Primary club logo (caddie mark + SAGAMORE wordmark on green/black).",
  },
  courseHero: {
    src: sagamore9thHole,
    alt: "Sagamore Spring Golf Club — view across the pond to the 9th green",
    width: 2560,
    height: 1631,
    file: "src/assets/brand/sagamore-9th-hole.jpg",
    note: "Course photography — candidate hero image for booking emails.",
  },
  craneIcon: {
    src: craneIcon,
    alt: "TenFore Crane app icon",
    width: 400,
    height: 400,
    file: "src/assets/brand/tenfore-crane-icon.webp",
    note: "TenFore Crane booking-app icon — used in app-promo banners.",
  },
} satisfies Record<string, BrandAsset>;

/** TenFore Crane app metadata (App Store: id1644324260). */
export const craneApp = {
  name: "TenFore Crane",
  tagline: "An easy way to do golf stuff.",
  developer: "TenFore Technology LLC",
  appStoreUrl: "https://apps.apple.com/us/app/tenfore-crane/id1644324260",
  rating: 3.8,
  ratingCount: 50,
} as const;
