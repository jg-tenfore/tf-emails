/**
 * Flatten the multi-logo "Shop by Brand" grid into a single grayscale PNG — a
 * complex layout (8 logos, mixed widths, 2-row wrap, .webp sources Outlook can't
 * render) that Unlayer's native columns can't reproduce well. Output:
 * marketing-buck/brand-strip.png. Run via Playwright (loads logos over Storybook).
 *
 * Run: node scripts/gen-brand-strip.mjs
 */
import { fileURLToPath } from "url";
import { dirname, join } from "path";
import { createRequire } from "module";

const require = createRequire(import.meta.url);
const { chromium } = require("playwright");

const root = join(dirname(fileURLToPath(import.meta.url)), "..");
const BASE = process.env.STORYBOOK_URL || "http://localhost:6006";
const MUTED = "#fafafa";

const LOGOS = [
  "logo-Titleist-5191ae6257.webp", "logo-TaylorMade-2f17ac4849.webp",
  "logo-Callaway-f45fd4251f.webp", "logo-PING-3f87d394b0.webp",
  "24_FJ_Jewel_K_3-063a2db0f2.webp", "logo-PUMA-7d1990d67a.webp",
  "logo-Srixon-8c85331b79.webp", "logo-COBRA-111ec06575.webp",
].map((f) => `${BASE}/store-images/logos/${f}`);

const W = 536; // 600 content width minus the strip card's 32px side padding

const browser = await chromium.launch();
const ctx = await browser.newContext({ deviceScaleFactor: 2 });
const page = await ctx.newPage();

const imgs = LOGOS.map(
  (u) => `<img src="${u}" style="height:24px;width:auto;filter:grayscale(100%);opacity:0.62;" />`,
).join("");

await page.setContent(
  `<!doctype html><html><body style="margin:0;">` +
  `<div id="strip" style="width:${W}px;background:${MUTED};display:flex;flex-wrap:wrap;` +
  `align-items:center;justify-content:center;gap:18px 28px;padding:6px 0;">${imgs}</div>` +
  `</body></html>`,
);
await page.waitForFunction(
  () => [...document.images].every((i) => i.complete && i.naturalWidth > 0),
  null, { timeout: 15000 },
);
await page.$("#strip").then((el) => el.screenshot({ path: join(root, "marketing-buck/brand-strip.png") }));

await browser.close();
console.log("Wrote marketing-buck/brand-strip.png");
