import { Email, Row, Column, Paragraph, Divider, ColumnLayouts } from "@unlayer/react-elements";
import { Header, Hero, FeatureList, Cta, Footer, Callout, SectionHeading, ProductGrid } from "@/unlayer/blocks";
import type { FeatureItem, ProductCard } from "@/unlayer/blocks";
import { palette, contentWidth } from "@/unlayer/theme";
import { heroes, course, products, mergeTags } from "@/unlayer/content";

export interface InstructionGameImprovementUnlayerProps {
  firstName?: string;
  lessonsUrl?: string;
}

const programs: FeatureItem[] = [
  { emoji: "🏆", title: "Private lessons", body: "One-on-one coaching with our PGA pros, tailored to your game." },
  { emoji: "👥", title: "Group clinics", body: "Short-game, full-swing, and on-course sessions in small groups." },
  { emoji: "⭐", title: "Juniors & beginners", body: "Welcoming programs for new golfers, kids, and returning players." },
];

const gear: ProductCard[] = [products.gpsWatch, products.puttingAid, products.glove];

/**
 * Marketing Buck — Instruction & Game Improvement, rebuilt with Unlayer Elements.
 * Source: ./InstructionGameImprovement.tsx
 */
export function InstructionGameImprovementUnlayer({
  firstName = mergeTags.firstName,
  lessonsUrl = "https://www.sagamoregolf.com/lessons",
}: InstructionGameImprovementUnlayerProps = {}) {
  const intro = (
    <Row key="intro" layout={ColumnLayouts.OneColumn} backgroundColor={palette.canvas} padding="0px">
      <Column backgroundColor={palette.white} padding="24px 32px 8px">
        <Paragraph color={palette.textSecondary} fontSize="16px" lineHeight="160%">
          Hi {firstName}, one session with our pros can change your game. Pick the format that fits
          you — and right now, every lesson comes with one for a friend.
        </Paragraph>
      </Column>
    </Row>
  );

  const divider = (
    <Row key="divider" layout={ColumnLayouts.OneColumn} backgroundColor={palette.canvas} padding="0px">
      <Column backgroundColor={palette.white} padding="0px 32px">
        <Divider borderTopWidth="1px" borderTopColor={palette.border} borderTopStyle="solid" width="100%" />
      </Column>
    </Row>
  );

  const support = (
    <Row key="support" layout={ColumnLayouts.OneColumn} backgroundColor={palette.canvas} padding="0px">
      <Column backgroundColor={palette.muted} padding="20px 32px">
        <Paragraph
          textAlign="center"
          color={palette.textTertiary}
          fontSize="14px"
          html={`Not sure where to start? Call the pro shop at <span style="color:${palette.textSecondary};font-weight:500;">${course.phone}</span> and we'll match you with the right pro.`}
        />
      </Column>
    </Row>
  );

  const rows = [
    ...Header(),
    ...Hero({ imageUrl: heroes.lessonInstruction.src, imageAlt: heroes.lessonInstruction.alt, eyebrow: "Instruction", headline: "Play your best golf this season" }),
    intro,
    ...FeatureList({ items: programs }),
    Callout({ tone: "success", eyebrow: "Limited-time offer", body: "Book one lesson and bring a friend's first lesson free — learn together and improve faster." }),
    Cta({ href: lessonsUrl, label: "Book a Lesson" }),
    SectionHeading({ title: "Gear up to practice", description: "Tools our pros recommend." }),
    ...ProductGrid({ items: gear, columns: 3 }),
    divider,
    support,
    ...Footer({ reason: "You're receiving this because you're a golfer at Sagamore Spring Golf Club." }),
  ];

  return (
    <Email
      backgroundColor={palette.canvas}
      contentWidth={contentWidth}
      previewText="Take strokes off your game — book a lesson and bring a friend free."
    >
      {rows}
    </Email>
  );
}
