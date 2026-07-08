import { Email, Row, Column, Paragraph, ColumnLayouts } from "@unlayer/react-elements";
import { Header, Hero, FeatureList, Cta, TextAlerts, Footer, Callout, SectionHeading, Barcode } from "@/unlayer/blocks";
import type { FeatureItem } from "@/unlayer/blocks";
import { palette, contentWidth } from "@/unlayer/theme";
import { heroes, course, mergeTags } from "@/unlayer/content";

export interface Front9AerationUnlayerProps {
  firstName?: string;
  dates?: string;
  discount?: string;
  discountCode?: string;
  bookingUrl?: string;
}

const why: FeatureItem[] = [
  { emoji: "⚡", title: "Healthier roots", body: "Relieving compaction lets air, water, and nutrients reach the roots — the foundation of great turf." },
  { emoji: "✅", title: "Smoother, firmer greens", body: "Aeration is the single best thing we do for long-term green quality and true roll." },
  { emoji: "💧", title: "Better drainage", body: "Less standing water means more playable days after rain, all season long." },
];

/**
 * Marketing Buck — Front 9 Aeration, rebuilt with Unlayer Elements.
 * Source: ./Front9Aeration.tsx
 */
export function Front9AerationUnlayer({
  firstName = mergeTags.firstName,
  dates = "September 8–12",
  discount = "25% off",
  discountCode = "204 825 0912",
  bookingUrl = course.bookingUrl,
}: Front9AerationUnlayerProps = {}) {
  const intro = (
    <Row key="intro" layout={ColumnLayouts.OneColumn} backgroundColor={palette.canvas} padding="0px">
      <Column backgroundColor={palette.white} padding="24px 32px 8px">
        <Paragraph color={palette.textSecondary} fontSize="16px" lineHeight="160%">
          Hi {firstName}, a quick heads-up from the grounds team: we'll be aerating the front 9
          (holes 1–9) the week of {dates}. It's the most important maintenance we do all year — and
          it's what keeps our greens rolling true.
        </Paragraph>
      </Column>
    </Row>
  );

  const rows = [
    ...Header(),
    ...Hero({ imageUrl: heroes.clubhouseAeration.src, imageAlt: heroes.clubhouseAeration.alt, eyebrow: "Course update", headline: "We're aerating the front 9" }),
    intro,
    Callout({ tone: "info", eyebrow: "What to expect", body: "The back 9 stays fully open during the work, and the front 9 greens typically recover within 10–14 days. You may see sand and cores on the greens for a few days — that's the good stuff doing its job." }),
    SectionHeading({ title: "Why we aerate" }),
    ...FeatureList({ items: why }),
    Callout({ tone: "success", eyebrow: "Limited time · this week only", emoji: "🏷️", body: `Play with us while we work and take ${discount} your round — back 9 and twilight rates included. Valid ${dates} only.` }),
    Barcode({ code: discountCode, label: `Aeration week · ${discount}`, instructions: "Show this at the pro shop or starter. Valid this week only — one round per golfer." }),
    Cta({ href: bookingUrl, label: "Book a Discounted Round" }),
    TextAlerts({ href: course.textAlertsUrl, prompt: "Want updates on course conditions and open times?", label: "Sign up" }),
    ...Footer({ reason: "You're receiving this course update because you're a golfer at Sagamore Spring Golf Club." }),
  ];

  return (
    <Email
      backgroundColor={palette.canvas}
      contentWidth={contentWidth}
      previewText={`We're aerating the front 9 ${dates} — and rounds are ${discount} while we do.`}
    >
      {rows}
    </Email>
  );
}
