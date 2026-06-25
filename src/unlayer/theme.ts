/**
 * Unlayer design tokens — the email-safe (literal hex) equivalents of the
 * Tailwind semantic tokens used by the Storybook emails. Unlayer Elements emits
 * inline styles, so colors must be concrete values, not CSS variables.
 */
export const palette = {
  canvas: "#eceff3", // EmailShell background
  white: "#ffffff",
  /** Brand dark green — the hero caption band (BAND in email-hero.tsx). */
  brandDark: "#0a3d24",
  /** Light green tint behind feature icons (bg-brand-primary). */
  brandTint: "#e6f0ea",
  /** Footer / muted section background (bg-secondary). */
  muted: "#f3f4f6",
  textPrimary: "#181d27",
  textSecondary: "#414651",
  textTertiary: "#535862",
  textQuaternary: "#717680",
  border: "#e9eaeb",
  onBrandMuted: "#b9cabf",
} as const;

/** Most email clients cap usable width near 600px. */
export const contentWidth = "600px";
