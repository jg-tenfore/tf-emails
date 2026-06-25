/**
 * Batch-export every Unlayer email to sendable outputs.
 *
 *   npm run export:unlayer
 *
 * Scans src/emails for `*.unlayer.tsx`, renders each via renderUnlayer(), and
 * writes dist/unlayer/<Name>.{html,json,txt}. Set IMAGE_BASE_URL to point image
 * URLs at a production CDN (see src/unlayer/content.ts).
 *
 * Convention: each `*.unlayer.tsx` exports a function whose name ends in
 * "Unlayer" (or a default export) that returns the <Email> element.
 */
import { readdirSync, mkdirSync, writeFileSync } from "node:fs";
import { join, resolve, basename } from "node:path";
import { pathToFileURL } from "node:url";
import { renderUnlayer } from "../src/unlayer/render";

const ROOT = resolve(import.meta.dirname, "..");
const EMAILS = resolve(ROOT, "src/emails");
const OUT = resolve(ROOT, "dist/unlayer");

function findUnlayerFiles(dir: string): string[] {
  const found: string[] = [];
  for (const entry of readdirSync(dir, { withFileTypes: true })) {
    const full = join(dir, entry.name);
    if (entry.isDirectory()) found.push(...findUnlayerFiles(full));
    else if (entry.name.endsWith(".unlayer.tsx")) found.push(full);
  }
  return found;
}

const files = findUnlayerFiles(EMAILS).sort();
if (files.length === 0) {
  console.log("No *.unlayer.tsx files found under src/emails.");
  process.exit(0);
}

mkdirSync(OUT, { recursive: true });
let ok = 0;

for (const file of files) {
  const name = basename(file).replace(/\.unlayer\.tsx$/, "");
  try {
    const mod = await import(pathToFileURL(file).href);
    const template =
      Object.values(mod).find(
        (v): v is (args?: unknown) => unknown => typeof v === "function" && /Unlayer$/.test((v as Function).name),
      ) ?? (mod.default as ((args?: unknown) => unknown) | undefined);

    if (typeof template !== "function") {
      console.warn(`  ⚠ ${name}: no *Unlayer export or default function found — skipped`);
      continue;
    }

    const element = template({}) as Parameters<typeof renderUnlayer>[0];
    const { html, json, text } = renderUnlayer(element);
    writeFileSync(join(OUT, `${name}.html`), html);
    writeFileSync(join(OUT, `${name}.json`), json);
    writeFileSync(join(OUT, `${name}.txt`), text);
    console.log(`  ✓ ${name}  (html ${html.length.toLocaleString()}b · json ${json.length.toLocaleString()}b)`);
    ok++;
  } catch (err) {
    console.error(`  ✗ ${name}: ${(err as Error).message}`);
  }
}

console.log(`\nExported ${ok}/${files.length} email(s) → dist/unlayer/`);
