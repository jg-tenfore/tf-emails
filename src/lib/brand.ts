/**
 * TenFore Golf — the primary brand of the template (the platform/company
 * behind these emails). Used for the header logo and the footer/company
 * details. The specific course in each email (e.g. Sagamore Spring) is the
 * partner content and lives in `scenario.ts`.
 */
export const brand = {
  name: "TenFore Golf",
  legalName: "TenFore Technology LLC",
  tagline:
    "The next generation of golf course management. Simple, fast, cloud-based, and fully mobile. Built for golf. Built to last.",
  url: "https://www.tenfore.golf",
  salesUrl: "https://www.tenfore.golf/contact",
  supportUrl: "https://www.tenfore.golf/support",
  termsUrl: "https://www.tenfore.golf/terms",
  privacyUrl: "https://www.tenfore.golf/privacy",
  address: {
    line1: "31215 Beck Road",
    line2: "Bulverde, TX 78163",
  },
  social: [
    {
      label: "LinkedIn",
      href: "https://www.linkedin.com/company/tenfore-golf",
      icon: "linkedin",
    },
    {
      label: "Facebook",
      href: "https://www.facebook.com/tenforegolf",
      icon: "facebook",
    },
    { label: "X", href: "https://x.com/TenForeGolf", icon: "x" },
    {
      label: "Instagram",
      href: "https://www.instagram.com/tenforegolf/",
      icon: "instagram",
    },
    {
      label: "YouTube",
      href: "https://www.youtube.com/@tenforegolf",
      icon: "youtube",
    },
  ],
} as const;

export type Brand = typeof brand;
export type SocialIconName = (typeof brand.social)[number]["icon"];
