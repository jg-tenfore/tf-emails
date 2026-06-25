import { Email, Row, Column, Paragraph, Divider, ColumnLayouts } from "@unlayer/react-elements";
import { Header, Hero, FeatureList, Cta, Footer, Callout, SectionHeading, DetailCard } from "@/unlayer/blocks";
import type { FeatureItem } from "@/unlayer/blocks";
import { palette, contentWidth } from "@/unlayer/theme";
import { heroes, course, mergeTags } from "@/unlayer/content";

export interface JuniorCampRegistrationUnlayerProps {
  parentName?: string;
  dates?: string;
  ages?: string;
  price?: string;
  registerUrl?: string;
}

const features: FeatureItem[] = [
  { emoji: "⛳", title: "Real fundamentals", body: "Full swing, short game, and on-course basics taught by our PGA pros." },
  { emoji: "👥", title: "Small groups, big fun", body: "Friendly coaching that keeps kids engaged — and clubs provided if needed." },
  { emoji: "⭐", title: "Confidence that lasts", body: "Every camper leaves with new skills and a love for the game." },
];

/**
 * Marketing Buck — Junior Camp Registration, rebuilt with Unlayer Elements.
 * Source: ./JuniorCampRegistration.tsx
 */
export function JuniorCampRegistrationUnlayer({
  parentName = mergeTags.firstName,
  dates = "June 16–20",
  ages = "Ages 8–14",
  price = "$325",
  registerUrl = "https://www.sagamoregolf.com/junior-camp",
}: JuniorCampRegistrationUnlayerProps = {}) {
  const intro = (
    <Row key="intro" layout={ColumnLayouts.OneColumn} backgroundColor={palette.white} padding="24px 32px 8px">
      <Column>
        <Paragraph color={palette.textSecondary} fontSize="16px" lineHeight="160%">
          Hi {parentName}, registration for Junior Summer Camp is open. Five mornings of fundamentals,
          fun, and real improvement — spots are limited and fill quickly.
        </Paragraph>
      </Column>
    </Row>
  );

  const divider = (
    <Row key="divider" layout={ColumnLayouts.OneColumn} backgroundColor={palette.white} padding="0px 32px">
      <Column>
        <Divider borderTopWidth="1px" borderTopColor={palette.border} borderTopStyle="solid" width="100%" />
      </Column>
    </Row>
  );

  const support = (
    <Row key="support" layout={ColumnLayouts.OneColumn} backgroundColor={palette.muted} padding="20px 32px">
      <Column>
        <Paragraph
          textAlign="center"
          color={palette.textTertiary}
          fontSize="14px"
          html={`Questions about camp? Call the pro shop at <span style="color:${palette.textSecondary};font-weight:500;">${course.phone}</span> — we're happy to help.`}
        />
      </Column>
    </Row>
  );

  const rows = [
    Header(),
    ...Hero({ imageUrl: heroes.juniorCamp.src, imageAlt: heroes.juniorCamp.alt, eyebrow: "Junior camp", headline: "Summer golf for the kids" }),
    intro,
    ...FeatureList({ items: features }),
    SectionHeading({ title: "Camp details" }),
    DetailCard({ rows: [
      { emoji: "📅", label: "Dates", value: dates },
      { emoji: "👥", label: "Ages", value: ages },
      { label: "Tuition", value: price },
    ] }),
    Callout({ tone: "success", eyebrow: "Family savings", emoji: "⭐", body: "Register one camper and a sibling joins at half price. Early registration is encouraged — sessions sell out every year." }),
    Cta({ href: registerUrl, label: "Register Your Junior" }),
    divider,
    support,
    ...Footer({ reason: "You're receiving this because you're part of the Sagamore Spring Golf Club community." }),
  ];

  return (
    <Email
      backgroundColor={palette.canvas}
      contentWidth={contentWidth}
      previewText={`Junior Summer Camp is open — register by ${dates} and a sibling joins half price.`}
    >
      {rows}
    </Email>
  );
}
