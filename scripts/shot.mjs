// Quick visual check: screenshot a rendered Unlayer email HTML file.
// Usage: node scripts/shot.mjs <dist/unlayer/Name.html> <out.png> [viewportWidth]
import { createRequire } from "module";
import { readFileSync } from "fs";
const require = createRequire(import.meta.url);
const { chromium } = require("playwright");

const [, , htmlPath, outPath, vw = "820"] = process.argv;
const html = readFileSync(htmlPath, "utf8");
const browser = await chromium.launch();
const page = await browser.newPage({ viewport: { width: Number(vw), height: 1400 }, deviceScaleFactor: 1 });
await page.setContent(html, { waitUntil: "networkidle" });
await page.screenshot({ path: outPath, fullPage: false });
await browser.close();
console.log("shot ->", outPath);
