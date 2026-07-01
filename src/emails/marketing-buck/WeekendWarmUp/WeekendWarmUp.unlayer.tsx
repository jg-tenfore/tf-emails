import { Email, Row, Column, Paragraph, Divider, ColumnLayouts } from "@unlayer/react-elements";
import { Header, Hero, FeatureList, Cta, TextAlerts, Footer, Callout } from "@/unlayer/blocks";
import type { FeatureItem } from "@/unlayer/blocks";
import { palette, contentWidth } from "@/unlayer/theme";
import { heroes, course, mergeTags } from "@/unlayer/content";

export interface WeekendWarmUpUnlayerProps {
  firstName?: string;
  bookingUrl?: string;
}

const perks: FeatureItem[] = [
  { emoji: "📅", title: "Prime weekend times", body: "Saturday and Sunday mornings go fast — claim yours before they're gone." },
  { emoji: "☀️", title: "On us: a range bucket", body: "Warm up before you tee off with a complimentary bucket of balls." },
  { emoji: "⛳", title: "Book in seconds", body: "Reserve online any time, from any device — no phone tag required." },
];

/**
 * Marketing Buck — Weekend Warm-Up, rebuilt with Unlayer Elements.
 * Source: ./WeekendWarmUp.tsx
 *
 * Call as a function (not <…/>) so the root is a literal <Email> for renderToJson.
 */
export function WeekendWarmUpUnlayer({
  firstName = mergeTags.firstName,
  bookingUrl = course.bookingUrl,
}: WeekendWarmUpUnlayerProps = {}) {
  const intro = (
    <Row key="intro" layout={ColumnLayouts.OneColumn} backgroundColor={palette.white} padding="24px 32px 8px">
      <Column>
        <Paragraph color={palette.textSecondary} fontSize="16px" lineHeight="160%">
          Hi {firstName}, the forecast looks perfect and the tee sheet is filling up. Lock in your
          weekend round now — and your range warm-up is on the house.
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
          html={`See you on the first tee. Questions? Just reply or call the pro shop at <span style="color:${palette.textSecondary};font-weight:500;">${course.phone}</span>.`}
        />
      </Column>
    </Row>
  );

  const rows = [
    ...Header(),
    ...Hero({ imageUrl: heroes.golferSwing.src, imageAlt: heroes.golferSwing.alt, eyebrow: "This weekend", headline: "Your weekend tee time awaits" }),
    intro,
    ...FeatureList({ items: perks }),
    Callout({ tone: "success", eyebrow: "Weekend perk", body: "Book any Saturday or Sunday round this weekend and receive a complimentary range bucket at check-in." }),
    Cta({ href: bookingUrl, label: "Book Tee Time" }),
    TextAlerts({ href: course.textAlertsUrl, prompt: "Want first dibs on weekend tee times?", label: "Sign up" }),
    divider,
    support,
    ...Footer({ reason: "You're receiving this because you're a golfer at Sagamore Spring Golf Club." }),
  ];

  return (
    <Email
      backgroundColor={palette.canvas}
      contentWidth={contentWidth}
      previewText="Prime weekend tee times are filling fast — grab yours and warm up on us."
    >
      {rows}
    </Email>
  );
}
