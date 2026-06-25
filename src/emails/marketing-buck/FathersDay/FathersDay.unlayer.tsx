import { Email, Row, Column, Paragraph, Divider, ColumnLayouts } from "@unlayer/react-elements";
import { Header, Hero, FeatureList, Cta, Footer, Callout } from "@/unlayer/blocks";
import type { FeatureItem } from "@/unlayer/blocks";
import { palette, contentWidth } from "@/unlayer/theme";
import { heroes, course, mergeTags } from "@/unlayer/content";

export interface FathersDayUnlayerProps {
  firstName?: string;
  bookingUrl?: string;
  giftCardUrl?: string;
}

const ideas: FeatureItem[] = [
  { emoji: "👥", title: "A round together", body: "Book a father–child tee time and make the day about more than golf." },
  { emoji: "🎁", title: "The easy gift", body: "A gift card he'll actually use — green fees, lessons, or new gear." },
  { emoji: "📅", title: "Brunch at the grill", body: "Cap the morning with a table on the patio overlooking the course." },
];

/**
 * Marketing Buck — Father's Day, rebuilt with Unlayer Elements.
 * Source: ./FathersDay.tsx (CTAStack → two stacked Cta rows)
 */
export function FathersDayUnlayer({
  firstName = mergeTags.firstName,
  bookingUrl = course.bookingUrl,
  giftCardUrl = "https://www.sagamoregolf.com/gift-cards",
}: FathersDayUnlayerProps = {}) {
  const intro = (
    <Row key="intro" layout={ColumnLayouts.OneColumn} backgroundColor={palette.white} padding="24px 32px 8px">
      <Column>
        <Paragraph color={palette.textSecondary} fontSize="16px" lineHeight="160%">
          Hi {firstName}, this Father's Day, skip the necktie. Book a round together, gift him
          something he'll love, or do both — here's how.
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
          html={`Need help planning the day? Call the pro shop at <span style="color:${palette.textSecondary};font-weight:500;">${course.phone}</span>.`}
        />
      </Column>
    </Row>
  );

  const rows = [
    Header(),
    ...Hero({ imageUrl: heroes.fathersDay.src, imageAlt: heroes.fathersDay.alt, eyebrow: "Father's Day", headline: "Give Dad his perfect day" }),
    intro,
    ...FeatureList({ items: ideas }),
    Callout({ tone: "success", eyebrow: "Father's Day bonus", emoji: "🎁", body: "Buy a $100 gift card this week and we'll add a $20 bonus — perfect for Dad, or a little something for yourself." }),
    Cta({ href: bookingUrl, label: "Book a Round with Dad", padding: "16px 32px 8px" }),
    Cta({ href: giftCardUrl, label: "Shop Gift Cards", variant: "secondary", padding: "0px 32px 16px" }),
    divider,
    support,
    ...Footer({ reason: "You're receiving this because you're a golfer at Sagamore Spring Golf Club." }),
  ];

  return (
    <Email
      backgroundColor={palette.canvas}
      contentWidth={contentWidth}
      previewText="Give Dad the perfect Father's Day — a round, a gift card, and a bonus on us."
    >
      {rows}
    </Email>
  );
}
