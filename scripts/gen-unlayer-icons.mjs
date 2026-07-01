/**
 * Generate src/unlayer/icons.ts — inline SVG markup for the @untitledui line
 * icons used in the Unlayer FeatureList chips (real icons, not emoji).
 *
 * Run: node scripts/gen-unlayer-icons.mjs
 */
import { createRequire } from "module";
import { writeFileSync } from "fs";
import { fileURLToPath } from "url";
import { dirname, join } from "path";

const require = createRequire(import.meta.url);
const React = require("react");
const { renderToStaticMarkup } = require("react-dom/server");
const Icons = require("@untitledui/icons");

const root = join(dirname(fileURLToPath(import.meta.url)), "..");

const NAMES = [
  "Calendar", "ShoppingBag03", "Trophy01", "Users01", "Sun", "Flag01",
  "CoinsStacked01", "Heart", "Star01", "Gift01", "Clock", "Tag01",
  "SunSetting03", "Tool02", "Target04", "Zap", "CheckCircle", "Droplets01",
  "HeartHand",
];

const out = {};
for (const name of NAMES) {
  const Icon = Icons[name];
  if (!Icon) { console.error("MISSING icon:", name); process.exit(1); }
  out[name] = renderToStaticMarkup(React.createElement(Icon, { size: 20, color: "currentColor" }));
}

const body = `/**
 * Inline SVG markup for the @untitledui line icons used in FeatureList chips.
 * Generated from @untitledui/icons via renderToStaticMarkup (stroke=currentColor
 * so the chip controls the color). Regenerate: node scripts/gen-unlayer-icons.mjs
 *
 * NOTE: inline SVG renders in the Storybook preview and modern email clients;
 * Outlook (Windows) strips it — host PNG fallbacks for production hardening.
 */
export const featureIcons: Record<string, string> = ${JSON.stringify(out, null, 2)};

export type FeatureIconName = keyof typeof featureIcons;
`;
writeFileSync(join(root, "src/unlayer/icons.ts"), body);
console.log(`Wrote src/unlayer/icons.ts with ${Object.keys(out).length} icons`);
