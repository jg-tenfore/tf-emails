/**
 * Scaffold a new Marketing Buck email — Tailwind email + Storybook story +
 * Unlayer template + wired "Unlayer" handoff panel, all in one step.
 *
 *   npm run gen:email -- "Weekend Warm-Up"
 *
 * Creates src/emails/marketing-buck/<PascalName>/ with:
 *   <PascalName>.tsx           Tailwind/React email (the Storybook source)
 *   <PascalName>.unlayer.tsx   Unlayer Elements version (the dev handoff)
 *   <PascalName>.stories.tsx   story wiring both, with parameters.unlayer
 *
 * After generating, compose the real layout (the Tailwind→Unlayer mapping is a
 * manual rewrite), then `npm run storybook` to copy code from the Unlayer panel.
 */
import { mkdirSync, writeFileSync, existsSync } from "node:fs";
import { resolve, join } from "node:path";

const raw = process.argv.slice(2).join(" ").trim();
if (!raw) {
  console.error('Usage: npm run gen:email -- "Email Display Name"');
  process.exit(1);
}

const pascal = raw
  .replace(/['’]/g, "")
  .split(/[^A-Za-z0-9]+/)
  .filter(Boolean)
  .map((w) => w[0].toUpperCase() + w.slice(1))
  .join("");
const title = raw.replace(/\s+/g, " ");

const ROOT = resolve(import.meta.dirname, "..");
const dir = resolve(ROOT, "src/emails/marketing-buck", pascal);
if (existsSync(dir)) {
  console.error(`✗ ${dir} already exists. Choose a different name or delete it first.`);
  process.exit(1);
}

const emailTsx = `import {
  CTAButton,
  EmailHero,
  EmailSection,
  EmailShell,
  JarretteFooter,
  JarretteHeader,
} from "@/components/email";
import { course, golfer } from "@/lib/scenario";
import { marketingHeroes } from "@/lib/marketing-images";

export interface ${pascal}Props {
  firstName?: string;
  audience?: "men" | "women";
}

/**
 * Marketing Buck — ${title}.
 * TODO: build out the real layout using the shared email components.
 */
export const ${pascal} = ({
  firstName = golfer.firstName,
  audience = "women",
}: ${pascal}Props) => {
  const hero =
    audience === "men" ? marketingHeroes.golfersMen : marketingHeroes.golfersSunset;
  return (
    <EmailShell preheader={\`A note from \${course.name}.\`}>
      <JarretteHeader />

      <EmailHero
        imageUrl={hero.src}
        imageAlt={hero.alt}
        eyebrow="${title}"
        headline={\`Hi \${firstName}\`}
      />

      <EmailSection padding="lg">
        <p className="text-md text-secondary">
          TODO: write the body copy for this email.
        </p>

        <div className="mt-8">
          <CTAButton href={course.bookingUrl} size="lg" fullWidth>
            Book a Tee Time
          </CTAButton>
        </div>
      </EmailSection>

      <JarretteFooter reason={\`You're receiving this from \${course.name}.\`} />
    </EmailShell>
  );
};
`;

const unlayerTsx = `import { Email, Row, Column, Paragraph, ColumnLayouts } from "@unlayer/react-elements";
import { Header, Hero, Cta, Footer } from "@/unlayer/blocks";
import { palette, contentWidth } from "@/unlayer/theme";
import { heroes, course, mergeTags } from "@/unlayer/content";

export interface ${pascal}UnlayerProps {
  firstName?: string;
  bookingUrl?: string;
  audience?: "men" | "women";
}

/**
 * Marketing Buck — ${title}, Unlayer Elements version.
 * Source: ./${pascal}.tsx
 *
 * Call as a function (not <${pascal}Unlayer/>) so the root is a literal <Email>
 * and block rows flatten into Email's children (required by renderToJson).
 * TODO: mirror the real layout from ${pascal}.tsx using the shared blocks.
 */
export function ${pascal}Unlayer({
  firstName = mergeTags.firstName,
  bookingUrl = course.bookingUrl,
  audience = "women",
}: ${pascal}UnlayerProps = {}) {
  const hero = audience === "men" ? heroes.golfersMen : heroes.golfersSunset;

  const intro = (
    <Row key="intro" layout={ColumnLayouts.OneColumn} backgroundColor={palette.white} padding="24px 32px 8px">
      <Column>
        <Paragraph color={palette.textSecondary} fontSize="16px" lineHeight="160%">
          TODO: write the body copy for this email.
        </Paragraph>
      </Column>
    </Row>
  );

  const rows = [
    Header(),
    ...Hero({ imageUrl: hero.src, imageAlt: hero.alt, eyebrow: "${title}", headline: \`Hi \${firstName}\` }),
    intro,
    Cta({ href: bookingUrl, label: "Book a Tee Time" }),
    ...Footer({ reason: \`You're receiving this from \${course.name}.\` }),
  ];

  return (
    <Email backgroundColor={palette.canvas} contentWidth={contentWidth} previewText={\`A note from \${course.name}.\`}>
      {rows}
    </Email>
  );
}
`;

const storiesTsx = `import type { Meta, StoryObj } from "@storybook/react-vite";
import { ${pascal} } from "./${pascal}";
import { ${pascal}Unlayer } from "./${pascal}.unlayer";
import unlayerSource from "./${pascal}.unlayer.tsx?raw";
import { unlayerHandoffSafe } from "@/unlayer/render";

const meta = {
  title: "Marketing Buck/${title}",
  component: ${pascal},
  parameters: { layout: "fullscreen" },
  argTypes: {
    firstName: { control: "text" },
    audience: { control: "inline-radio", options: ["men", "women"] },
  },
} satisfies Meta<typeof ${pascal}>;

export default meta;
type Story = StoryObj<typeof meta>;

export const Womens: Story = {
  name: "Women's",
  args: { audience: "women", firstName: "Olivia" },
  parameters: {
    unlayer: unlayerHandoffSafe(() => ${pascal}Unlayer({ audience: "women", firstName: "Olivia" }), unlayerSource),
  },
};

export const Mens: Story = {
  name: "Men's",
  args: { audience: "men", firstName: "Marcus" },
  parameters: {
    unlayer: unlayerHandoffSafe(() => ${pascal}Unlayer({ audience: "men", firstName: "Marcus" }), unlayerSource),
  },
};
`;

mkdirSync(dir, { recursive: true });
writeFileSync(join(dir, `${pascal}.tsx`), emailTsx);
writeFileSync(join(dir, `${pascal}.unlayer.tsx`), unlayerTsx);
writeFileSync(join(dir, `${pascal}.stories.tsx`), storiesTsx);

console.log(`✓ Scaffolded Marketing Buck/${title}`);
console.log(`  src/emails/marketing-buck/${pascal}/`);
console.log(`    ${pascal}.tsx          (Tailwind email — build the real layout)`);
console.log(`    ${pascal}.unlayer.tsx  (Unlayer version — mirror the layout with blocks)`);
console.log(`    ${pascal}.stories.tsx  (story + Unlayer handoff panel, ready)`);
console.log(`\nNext: compose the layout, add "${title}" to storySort in .storybook/preview.tsx, then npm run storybook.`);
