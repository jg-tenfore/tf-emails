import { Email, Row, Column, Paragraph, Divider, ColumnLayouts } from "@unlayer/react-elements";
import { Header, Hero, FeatureList, Cta, TextAlerts, Footer, Callout, SectionHeading, ImageGrid } from "@/unlayer/blocks";
import type { FeatureItem } from "@/unlayer/blocks";
import { palette, contentWidth } from "@/unlayer/theme";
import { heroes, course, twilightMenu, mergeTags } from "@/unlayer/content";

export interface TwilightTwosomeUnlayerProps {
  firstName?: string;
  bookingUrl?: string;
  reservationUrl?: string;
  textAlertsUrl?: string;
}

const perks: FeatureItem[] = [
  { emoji: "⏰", title: "Tee off after 4pm", body: "Skip the crowds and play a relaxed nine in the best light of the day." },
  { emoji: "🏷️", title: "Discounted twilight rate", body: "Our lowest green fees of the day — golf that's easy on the wallet." },
  { emoji: "🌇", title: "Then nine and dine", body: "Wrap your round at the grill with a food & beverage voucher on us." },
];

/**
 * Marketing Buck — Twilight Twosome, rebuilt with Unlayer Elements.
 * Source: ./TwilightTwosome.tsx
 */
export function TwilightTwosomeUnlayer({
  firstName = mergeTags.firstName,
  bookingUrl = course.bookingUrl,
  reservationUrl = "https://www.sagamoregolf.com/dining",
  textAlertsUrl = course.textAlertsUrl,
}: TwilightTwosomeUnlayerProps = {}) {
  const intro = (
    <Row key="intro" layout={ColumnLayouts.OneColumn} backgroundColor={palette.canvas} padding="0px">
      <Column backgroundColor={palette.white} padding="24px 32px 8px">
        <Paragraph color={palette.textSecondary} fontSize="16px" lineHeight="160%">
          Hi {firstName}, the course is quiet, the light is perfect, and the rate is our best of the
          day. Play a relaxed evening nine, then settle in at the grill.
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
          html={`Twilight times are limited each evening. Call the pro shop at <span style="color:${palette.textSecondary};font-weight:500;">${course.phone}</span> with any questions.`}
        />
      </Column>
    </Row>
  );

  const rows = [
    ...Header(),
    ...Hero({ imageUrl: heroes.twilightTwosome.src, imageAlt: heroes.twilightTwosome.alt, eyebrow: "Twilight golf", headline: "Nine and dine at twilight" }),
    intro,
    ...FeatureList({ items: perks }),
    Callout({ tone: "warning", eyebrow: "Evening offer", body: "Book a twilight round and receive a $10 food & beverage voucher to use at the grill after your round." }),
    Cta({ href: bookingUrl, label: "Claim Your Offer" }),
    TextAlerts({ href: textAlertsUrl, prompt: "Never miss a twilight deal.", label: "Sign up" }),
    SectionHeading({ title: "Tonight at the grill", description: "What our kitchen is cooking up for your nine-and-dine." }),
    ...ImageGrid({ items: twilightMenu, columns: 2 }),
    Cta({ href: reservationUrl, label: "Make a Reservation", variant: "secondary" }),
    divider,
    support,
    ...Footer({ reason: "You're receiving this because you're a golfer at Sagamore Spring Golf Club." }),
  ];

  return (
    <Email
      backgroundColor={palette.canvas}
      contentWidth={contentWidth}
      previewText="Discounted twilight golf plus a food & beverage voucher — unwind after work."
    >
      {rows}
    </Email>
  );
}
