/**
 * Tenfore Golf brand constants shared across all emails.
 * Centralised so footer/header content stays consistent.
 */
export const brand = {
  name: "Tenfore Golf",
  tagline: "Tee it high and let it fly.",
  url: "https://tenforegolf.com",
  supportEmail: "hello@tenforegolf.com",
  phone: "(555) 018-4653",
  address: {
    line1: "1040 Fairway Drive",
    line2: "Augusta, GA 30904",
  },
  social: [
    { label: "Instagram", href: "https://instagram.com/tenforegolf" },
    { label: "Facebook", href: "https://facebook.com/tenforegolf" },
    { label: "YouTube", href: "https://youtube.com/@tenforegolf" },
  ],
  // Default address used in unsubscribe / CAN-SPAM footer line.
  legalName: "Tenfore Golf Club, LLC",
} as const;

export type Brand = typeof brand;
