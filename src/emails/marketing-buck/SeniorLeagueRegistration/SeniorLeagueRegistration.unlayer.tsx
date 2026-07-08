import { Email, Row, Column, Paragraph, ColumnLayouts } from "@unlayer/react-elements";
import { Header, Hero, FeatureList, Cta, Footer, Callout, SectionHeading, DetailCard } from "@/unlayer/blocks";
import type { FeatureItem } from "@/unlayer/blocks";
import { palette, contentWidth } from "@/unlayer/theme";
import { heroes, mergeTags } from "@/unlayer/content";

export interface SeniorLeagueRegistrationUnlayerProps {
  firstName?: string;
  day?: string;
  startDate?: string;
  price?: string;
  registerUrl?: string;
}

const features: FeatureItem[] = [
  { emoji: "👥", title: "Great group, friendly play", body: "A welcoming weekly league for players 55+ of every skill level." },
  { emoji: "🏆", title: "Weekly games & prizes", body: "Skins, closest-to-the-pin, and season-long standings to keep it fun." },
  { emoji: "📅", title: "Same tee, every week", body: "A standing morning time so your week always has a round in it." },
];

/**
 * Marketing Buck — Senior League Registration, rebuilt with Unlayer Elements.
 * Source: ./SeniorLeagueRegistration.tsx
 */
export function SeniorLeagueRegistrationUnlayer({
  firstName = mergeTags.firstName,
  day = "Wednesday mornings",
  startDate = "May 7",
  price = "$180 / season",
  registerUrl = "https://www.sagamoregolf.com/senior-league",
}: SeniorLeagueRegistrationUnlayerProps = {}) {
  const intro = (
    <Row key="intro" layout={ColumnLayouts.OneColumn} backgroundColor={palette.canvas} padding="0px">
      <Column backgroundColor={palette.white} padding="24px 32px 8px">
        <Paragraph color={palette.textSecondary} fontSize="16px" lineHeight="160%">
          Hi {firstName}, our 55+ Senior League is back, and it's the easiest way to keep golf in your
          week — good company, friendly games, and a tee time that's always yours.
        </Paragraph>
      </Column>
    </Row>
  );

  const rows = [
    ...Header(),
    ...Hero({ imageUrl: heroes.seniorLeague.src, imageAlt: heroes.seniorLeague.alt, eyebrow: "Senior league", headline: "Make it a standing tee time" }),
    intro,
    ...FeatureList({ items: features }),
    SectionHeading({ title: "League details" }),
    DetailCard({ rows: [
      { emoji: "📅", label: "When", value: day },
      { label: "Season starts", value: startDate },
      { label: "Fee", value: price },
    ] }),
    Callout({ tone: "success", eyebrow: "Early sign-up", emoji: "🏆", body: "Register before opening day and lock in member pricing for the full season. Spots are limited to keep pace comfortable." }),
    Cta({ href: registerUrl, label: "Join the League" }),
    ...Footer({ reason: "You're receiving this because you're a golfer at Sagamore Spring Golf Club." }),
  ];

  return (
    <Email
      backgroundColor={palette.canvas}
      contentWidth={contentWidth}
      previewText={`The Senior League tees off ${startDate} — reserve your spot at member pricing.`}
    >
      {rows}
    </Email>
  );
}
