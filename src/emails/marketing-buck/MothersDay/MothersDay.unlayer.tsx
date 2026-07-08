import { Email, Row, Column, Paragraph, ColumnLayouts } from "@unlayer/react-elements";
import { Header, Hero, FeatureList, Cta, Footer, Callout } from "@/unlayer/blocks";
import type { FeatureItem } from "@/unlayer/blocks";
import { palette, contentWidth } from "@/unlayer/theme";
import { heroes, mergeTags } from "@/unlayer/content";

export interface MothersDayUnlayerProps {
  firstName?: string;
  reservationUrl?: string;
}

const highlights: FeatureItem[] = [
  { emoji: "⭐", title: "Mother's Day brunch", body: "A special menu on the patio with the best views in town." },
  { emoji: "❤️", title: "Mom plays free", body: "Book a tee time for the family and Mom's green fee is on us." },
  { emoji: "⛳", title: "Make it a morning", body: "Nine holes together, then brunch — the whole family, one place." },
];

/**
 * Marketing Buck — Mother's Day, rebuilt with Unlayer Elements.
 * Source: ./MothersDay.tsx
 */
export function MothersDayUnlayer({
  firstName = mergeTags.firstName,
  reservationUrl = "https://www.sagamoregolf.com/dining",
}: MothersDayUnlayerProps = {}) {
  const intro = (
    <Row key="intro" layout={ColumnLayouts.OneColumn} backgroundColor={palette.canvas} padding="0px">
      <Column backgroundColor={palette.white} padding="24px 32px 8px">
        <Paragraph color={palette.textSecondary} fontSize="16px" lineHeight="160%">
          Hi {firstName}, give Mom a Mother's Day she'll remember — a relaxed brunch on the patio, a
          morning on the course, or both. Tables fill fast, so reserve early.
        </Paragraph>
      </Column>
    </Row>
  );

  const rows = [
    ...Header(),
    ...Hero({ imageUrl: heroes.clubhouseDining.src, imageAlt: heroes.clubhouseDining.alt, eyebrow: "Mother's Day", headline: "Treat Mom to her day" }),
    intro,
    ...FeatureList({ items: highlights }),
    Callout({ tone: "success", eyebrow: "This weekend only", emoji: "❤️", body: "Reserve a Mother's Day brunch table and Mom's green fee is free with any family tee time. Our gift to her." }),
    Cta({ href: reservationUrl, label: "Make a Reservation" }),
    ...Footer({ reason: "You're receiving this because you're a guest at Sagamore Spring Golf Club." }),
  ];

  return (
    <Email
      backgroundColor={palette.canvas}
      contentWidth={contentWidth}
      previewText="Treat Mom this Mother's Day — brunch on the patio and she plays free."
    >
      {rows}
    </Email>
  );
}
