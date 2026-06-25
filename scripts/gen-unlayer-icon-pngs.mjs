/**
 * Rasterize each FeatureList icon into a flattened 40×40 chip PNG (tinted
 * rounded box + centered line icon) via Playwright. Output: marketing-buck/icons/.
 * These are email-safe (PNG works in Outlook) and perfectly centered.
 *
 * Run: node scripts/gen-unlayer-icon-pngs.mjs
 */
import { createRequire } from "module";
import { mkdirSync } from "fs";
import { fileURLToPath } from "url";
import { dirname, join } from "path";

const require = createRequire(import.meta.url);
const React = require("react");
const { renderToStaticMarkup } = require("react-dom/server");
const Icons = require("@untitledui/icons");
const { chromium } = require("playwright");

const root = join(dirname(fileURLToPath(import.meta.url)), "..");
const outDir = join(root, "marketing-buck/icons");
mkdirSync(outDir, { recursive: true });

const TINT = "#e6f0ea"; // brandTint chip background
const ICON = "#0a3d24"; // brandDark icon stroke

const NAMES = [
  "Calendar", "ShoppingBag03", "Trophy01", "Users01", "Sun", "Flag01",
  "CoinsStacked01", "Heart", "Star01", "Gift01", "Clock", "Tag01",
  "SunSetting03", "Tool02", "Target04", "Zap", "CheckCircle", "Droplets01",
  "HeartHand",
];

const browser = await chromium.launch();
const ctx = await browser.newContext({ deviceScaleFactor: 2 });
const page = await ctx.newPage();

for (const name of NAMES) {
  const Icon = Icons[name];
  if (!Icon) { console.error("MISSING icon:", name); process.exit(1); }
  const svg = renderToStaticMarkup(React.createElement(Icon, { size: 22, color: ICON }));
  await page.setContent(
    `<!doctype html><html><body style="margin:0;background:#ffffff;">` +
    `<div id="chip" style="width:40px;height:40px;background:${TINT};border-radius:8px;` +
    `display:flex;align-items:center;justify-content:center;">${svg}</div>` +
    `</body></html>`,
  );
  const el = await page.$("#chip");
  await el.screenshot({ path: join(outDir, `${name}.png`) });
}

await browser.close();
console.log(`Wrote ${NAMES.length} chip PNGs → marketing-buck/icons/`);
