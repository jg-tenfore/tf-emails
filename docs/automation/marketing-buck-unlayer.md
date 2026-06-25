# Automated workflow — Unlayer conversion for Marketing Buck emails

Every Marketing Buck email should have an Unlayer version (`*.unlayer.tsx`) and a
wired Storybook "Unlayer" panel. This doc gives you (1) a copy-paste **prompt**,
(2) the **trigger** options to run it automatically, and (3) the **guardrail** that
catches a missing conversion.

The split:
- **Deterministic** steps are scripts: `npm run gen:email`, `npm run export:unlayer`,
  `npm run check:unlayer`.
- The **creative** step (Tailwind → Unlayer rewrite) is done by Claude via the
  `unlayerconvert` skill / the prompt below.

---

## 1. The prompt

Paste this into Claude Code (it invokes the skill and converts everything missing):

```
Convert every Marketing Buck email that is missing its Unlayer version.

Run `npm run check:unlayer` to get the list. For each missing email, use the
unlayerconvert skill: read its <Name>.tsx, write <Name>.unlayer.tsx
mirroring the layout with the src/unlayer blocks, wire parameters.unlayer in the
story, then verify with `npm run export:unlayer` and `npx tsc -b` (must stay at 0
errors) and confirm `npm run check:unlayer` is clean.

Match copy, section order, colors, and links to each source email. Flag anything
email-unsafe (absolute overlays, SVG icons, .webp logos) instead of dropping it.
Report a summary table: email → html/json byte counts.
```

For a single email, replace the first paragraph with:
`Convert the "<Display Name>" Marketing Buck email to Unlayer.`

---

## 2. Triggers — pick one

### a) On demand (simplest)
Run the prompt above whenever you finish a batch of new emails. Or for one email
right after authoring it:
```
/unlayerconvert <Display Name>
```

### b) Recurring sweep with /loop
Have Claude Code self-pace a sweep until everything is converted:
```
/loop Convert any Marketing Buck email missing its Unlayer version (npm run check:unlayer), then stop when clean.
```

### c) Scheduled cloud agent
Use `/schedule` to run the prompt on a cadence (e.g. daily) so new emails get
converted without you remembering. Point it at this repo and the prompt in §1.

### d) Generator-first (no conversion debt)
Always create new emails with `npm run gen:email -- "Name"`. That scaffolds the
`.unlayer.tsx` stub and wires the story up front, so there's never a *missing*
conversion — only a stub to flesh out. The prompt/skill then just completes it.

---

## 3. Guardrail — fail CI / commit if a conversion is missing

`npm run check:unlayer` exits non-zero when a Marketing Buck email lacks an
Unlayer version. Wire it so a conversion can't be forgotten.

### Git pre-commit hook
`.git/hooks/pre-commit` (or via husky):
```sh
#!/bin/sh
npm run check:unlayer || {
  echo "Add the missing .unlayer.tsx (see docs/automation/marketing-buck-unlayer.md)"; exit 1;
}
```

### GitHub Action
`.github/workflows/unlayer-check.yml`:
```yaml
name: Unlayer coverage
on: { pull_request: { paths: ["src/emails/marketing-buck/**"] } }
jobs:
  check:
    runs-on: ubuntu-latest
    steps:
      - uses: actions/checkout@v4
      - uses: actions/setup-node@v4
        with: { node-version: 20, cache: npm }
      - run: npm ci
      - run: npm run check:unlayer
      - run: npm run export:unlayer   # also proves every email renders
```

---

## Reference
- Conversion mechanics & caveats: `src/unlayer/README.md`
- Skill: `.claude/skills/unlayerconvert/SKILL.md`
- Scripts: `scripts/{gen-email.mjs, export-unlayer.mts, check-unlayer.mjs}`
