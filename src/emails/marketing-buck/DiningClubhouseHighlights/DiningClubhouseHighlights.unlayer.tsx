import { Email, Row, Column, Paragraph, Divider, ColumnLayouts } from "@unlayer/react-elements";
import { Header, Hero, FeatureList, Cta, Footer, Callout, SectionHeading, ImageGrid } from "@/unlayer/blocks";
import type { FeatureItem } from "@/unlayer/blocks";
import { palette, contentWidth } from "@/unlayer/theme";
import { heroes, course, diningDishes, mergeTags } from "@/unlayer/content";

export interface DiningClubhouseHighlightsUnlayerProps {
  firstName?: string;
  reserveUrl?: string;
}

const highlights: FeatureItem[] = [
  { emoji: "⭐", title: "Chef's weekly specials", body: "A fresh rotating menu of plates worth coming in for — round or no round." },
  { emoji: "📅", title: "Weekend brunch", body: "Saturdays and Sundays on the patio, with the best views in town." },
  { emoji: "👥", title: "Trivia & live music", body: "Thursday trivia and weekend live music at the 19th hole." },
];

/**
 * Marketing Buck — Dining & Clubhouse Highlights, rebuilt with Unlayer Elements.
 * Source: ./DiningClubhouseHighlights.tsx
 */
export function DiningClubhouseHighlightsUnlayer({
  firstName = mergeTags.firstName,
  reserveUrl = "https://www.sagamoregolf.com/dining",
}: DiningClubhouseHighlightsUnlayerProps = {}) {
  const intro = (
    <Row key="intro" layout={ColumnLayouts.OneColumn} backgroundColor={palette.white} padding="24px 32px 8px">
      <Column>
        <Paragraph color={palette.textSecondary} fontSize="16px" lineHeight="160%">
          Hi {firstName}, the clubhouse is about more than the back nine. From chef's specials to live
          music nights, there's always a reason to pull up a chair.
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
          html={`Planning a group? Call <span style="color:${palette.textSecondary};font-weight:500;">${course.phone}</span> and we'll set the table.`}
        />
      </Column>
    </Row>
  );

  const rows = [
    ...Header(),
    ...Hero({ imageUrl: heroes.clubhouseDining.src, imageAlt: heroes.clubhouseDining.alt, eyebrow: "At the grill", headline: "Great food after a great round" }),
    intro,
    ...FeatureList({ items: highlights }),
    Callout({ tone: "success", eyebrow: "On us", body: "Show this email and get a complimentary appetizer with any two entrées at the grill." }),
    Cta({ href: reserveUrl, label: "Make a Reservation" }),
    SectionHeading({ title: "On the menu", description: "A taste of what's coming off the grill." }),
    ...ImageGrid({ items: diningDishes, columns: 2 }),
    divider,
    support,
    ...Footer({ reason: "You're receiving this because you're a guest at Sagamore Spring Golf Club." }),
  ];

  return (
    <Email
      backgroundColor={palette.canvas}
      contentWidth={contentWidth}
      previewText="Chef's specials, weekend brunch, and live music at the 19th hole."
    >
      {rows}
    </Email>
  );
}
