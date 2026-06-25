/**
 * Reports Marketing Buck emails that don't yet have an Unlayer version.
 *
 *   npm run check:unlayer
 *
 * Exit code 1 if any are missing — wire it into CI or a pre-commit hook so a new
 * Marketing Buck email can't ship without its `.unlayer.tsx` handoff. The list it
 * prints is the worklist for the `unlayerconvert` skill / prompt.
 */
import { readdirSync, existsSync } from "node:fs";
import { resolve, join } from "node:path";

const ROOT = resolve(import.meta.dirname, "..");
const BUCK = resolve(ROOT, "src/emails/marketing-buck");

const missing = [];
for (const entry of readdirSync(BUCK, { withFileTypes: true })) {
  if (!entry.isDirectory()) continue;
  const name = entry.name;
  const hasEmail = existsSync(join(BUCK, name, `${name}.tsx`));
  const hasUnlayer = existsSync(join(BUCK, name, `${name}.unlayer.tsx`));
  if (hasEmail && !hasUnlayer) missing.push(name);
}

if (missing.length === 0) {
  console.log("✓ Every Marketing Buck email has an Unlayer version.");
  process.exit(0);
}

console.log(`✗ ${missing.length} Marketing Buck email(s) missing an Unlayer version:\n`);
for (const name of missing) console.log(`  - ${name}  (add src/emails/marketing-buck/${name}/${name}.unlayer.tsx + story param)`);
console.log(`\nConvert with the "unlayerconvert" skill, or see docs/automation/marketing-buck-unlayer.md`);
process.exit(1);
