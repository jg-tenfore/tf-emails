/**
 * Bake the club logo onto each hero photo as one flattened image (logo overlaid
 * top-left, like the Tailwind <EmailHero>) — email can't do absolute overlays, so
 * we pre-composite. Output: marketing-buck/hero/<file>. Run via Playwright.
 *
 * Run: node scripts/gen-hero-composites.mjs
 */
import { mkdirSync } from "fs";
import { fileURLToPath } from "url";
import { dirname, join } from "path";
import { createRequire } from "module";

const require = createRequire(import.meta.url);
const { chromium } = require("playwright");

const root = join(dirname(fileURLToPath(import.meta.url)), "..");
const outDir = join(root, "marketing-buck/hero");
mkdirSync(outDir, { recursive: true });

// Images are loaded over the running Storybook (staticDir serves marketing-buck
// at /marketing-images) — Chromium blocks file:// images from a setContent page.
const BASE = process.env.STORYBOOK_URL || "http://localhost:6006/marketing-images";
const LOGO = `${BASE}/sagamore-logo.jpg`;

// Hero photos that should carry the club badge (the charity flyer is excluded —
// it's self-contained art).
const FILES = [
  "golfers-sunset.jpg", "evening-golf.jpg", "golfer-swing.jpg", "course-hero.jpg",
  "clubhouse-dining.jpg", "jr-golf.jpg", "junior-golfer.jpg", "senior-golfers.jpg",
  "lesson-instruction.jpg", "pro-shop.jpg", "titleist-demo-day.jpg", "aeration.jpg",
  "twilight-twosome.jpg",
];

const W = 600; // email content width

const browser = await chromium.launch();
const ctx = await browser.newContext({ deviceScaleFactor: 2 });
const page = await ctx.newPage();

for (const file of FILES) {
  const hero = `${BASE}/${file}`;
  await page.setContent(
    `<!doctype html><html><body style="margin:0;">` +
    `<div id="box" style="position:relative;width:${W}px;line-height:0;">` +
    `<img src="${hero}" style="display:block;width:${W}px;height:auto;" />` +
    `<img src="${LOGO}" style="position:absolute;top:16px;left:16px;width:52px;height:52px;` +
    `border-radius:8px;box-shadow:0 1px 4px rgba(0,0,0,0.35);" />` +
    `</div></body></html>`,
  );
  await page.waitForFunction(
    () => [...document.images].every((i) => i.complete && i.naturalWidth > 0),
    null, { timeout: 15000 },
  );
  const el = await page.$("#box");
  await el.screenshot({ path: join(outDir, file.replace(/\.\w+$/, ".jpg")), type: "jpeg", quality: 82 });
  console.log("  composited", file);
}

await browser.close();
console.log(`Wrote ${FILES.length} hero composites → marketing-buck/hero/`);
