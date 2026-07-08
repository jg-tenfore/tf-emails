import { Email, Row, Column, Paragraph, ColumnLayouts } from "@unlayer/react-elements";
import { Header, Hero, FeatureList, Cta, TextAlerts, BrandStrip, Footer } from "@/unlayer/blocks";
import type { FeatureItem } from "@/unlayer/blocks";
import { palette, contentWidth } from "@/unlayer/theme";
import { heroes, course, mergeTags } from "@/unlayer/content";

export interface WelcomeToTheClubUnlayerProps {
  firstName?: string;
  bookingUrl?: string;
  /** Swaps the hero photo for a men's or women's audience. */
  audience?: "men" | "women";
}

const perks: FeatureItem[] = [
  { emoji: "📅", title: "Book tee times 24/7", body: "Reserve online in seconds, any day of the week — no phone calls needed." },
  { emoji: "🛍️", title: "Gear up in the shop", body: "The latest apparel, balls, and footwear from the brands you trust." },
  { emoji: "🏆", title: "Get better, faster", body: "Private lessons, group clinics, and junior camps with our PGA pros." },
  { emoji: "👥", title: "Bring your crew", body: "Leagues, events, and a clubhouse grill made for golf with friends." },
];

/**
 * Marketing Buck — Welcome to the Club, rebuilt with Unlayer Elements.
 * Source: ./WelcomeToTheClub.tsx
 *
 * NOTE: call this as a function (not <WelcomeToTheClubUnlayer/>) so the root is a
 * literal <Email> for renderToJson, and so block rows flatten into Email's
 * children.
 */
export function WelcomeToTheClubUnlayer({
  firstName = mergeTags.firstName,
  bookingUrl = course.bookingUrl,
  audience = "women",
}: WelcomeToTheClubUnlayerProps = {}) {
  const hero = audience === "men" ? heroes.golfersMen : heroes.golfersSunset;

  const intro = (
    <Row key="intro" layout={ColumnLayouts.OneColumn} backgroundColor={palette.canvas} padding="0px">
      <Column backgroundColor={palette.white} padding="24px 32px 8px">
        <Paragraph color={palette.textSecondary} fontSize="16px" lineHeight="160%">
          Your account is ready and the first tee is calling. Whether you're here to chase a
          personal best or enjoy a relaxed nine with friends, everything you need is a tap away.
        </Paragraph>
      </Column>
    </Row>
  );

  const rows = [
    ...Header(),
    ...Hero({ imageUrl: hero.src, imageAlt: hero.alt, eyebrow: "Welcome to the club", headline: `Great to have you, ${firstName}` }),
    intro,
    ...FeatureList({ items: perks }),
    Cta({ href: bookingUrl, label: "Book Your First Tee Time" }),
    TextAlerts({ href: course.textAlertsUrl, prompt: "Get text alerts for open tee times.", label: "Sign up" }),
    ...BrandStrip({ label: "Brands you'll find in our shop" }),
    ...Footer({ reason: `You're receiving this because you joined ${course.name}.` }),
  ];

  return (
    <Email
      backgroundColor={palette.canvas}
      contentWidth={contentWidth}
      previewText={`Welcome to ${course.name} — here's everything waiting for you.`}
    >
      {rows}
    </Email>
  );
}
