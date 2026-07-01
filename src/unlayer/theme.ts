/**
 * Unlayer design tokens — the email-safe (literal hex) equivalents of the
 * Tailwind semantic tokens used by the Storybook emails. Unlayer Elements emits
 * inline styles, so colors must be concrete values, not CSS variables.
 */
export const palette = {
  canvas: "#eceef4", // Email canvas background (behind the 600px content)
  white: "#ffffff",
  /** Brand dark green — the hero caption band (BAND in email-hero.tsx). */
  brandDark: "#0a3d24",
  /** Primary CTA button fill + its border. */
  ctaGreen: "#079251",
  ctaBorder: "#0c7742",
  /** Light green tint behind feature icons (bg-brand-primary). */
  brandTint: "#e6f0ea",
  /** Footer / muted section background. */
  muted: "#fafafa",
  textPrimary: "#181d27",
  textSecondary: "#414651",
  textTertiary: "#535862",
  textQuaternary: "#717680",
  border: "#e9eaeb",
  onBrandMuted: "#b9cabf",
} as const;

/**
 * Callout tone colors — email-safe hex equivalents of the Tailwind utility-color
 * Callout tones (box background + uppercase eyebrow text). Source: callout.tsx.
 */
export const calloutTones = {
  success: { box: "#ecfdf3", eyebrow: "#067647" },
  info: { box: "#eff8ff", eyebrow: "#175cd3" },
  warning: { box: "#fffaeb", eyebrow: "#b54708" },
  error: { box: "#fef3f2", eyebrow: "#b42318" },
} as const;

export type CalloutTone = keyof typeof calloutTones;

/** Most email clients cap usable width near 600px. */
export const contentWidth = "600px";
