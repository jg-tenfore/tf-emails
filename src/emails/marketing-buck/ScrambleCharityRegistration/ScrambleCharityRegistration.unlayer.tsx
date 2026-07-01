import { Email, Row, Column, Paragraph, Divider, ColumnLayouts } from "@unlayer/react-elements";
import { Header, Hero, FeatureList, Cta, Footer, Callout, SectionHeading, DetailCard } from "@/unlayer/blocks";
import type { FeatureItem } from "@/unlayer/blocks";
import { palette, contentWidth } from "@/unlayer/theme";
import { heroes, course, mergeTags } from "@/unlayer/content";

export interface ScrambleCharityRegistrationUnlayerProps {
  firstName?: string;
  cause?: string;
  date?: string;
  format?: string;
  pricePerTeam?: string;
  registerUrl?: string;
}

const features: FeatureItem[] = [
  { emoji: "⛳", title: "Four-person scramble", body: "A relaxed, fun format for every skill level — bring your crew." },
  { emoji: "🏆", title: "Lunch, prizes & contests", body: "Green fees, cart, lunch, and on-course contests all included." },
  { emoji: "🤝", title: "Play for a cause", body: "Every registration supports a great local cause — golf that gives back." },
];

/**
 * Marketing Buck — Scramble Charity Registration, rebuilt with Unlayer Elements.
 * Source: ./ScrambleCharityRegistration.tsx (self-contained flyer hero, no caption band)
 */
export function ScrambleCharityRegistrationUnlayer({
  firstName = mergeTags.firstName,
  cause = "the First Tee of Greater Boston",
  date = "Saturday, August 16 · 8:00 AM shotgun",
  format = "4-person scramble",
  pricePerTeam = "$600 / foursome",
  registerUrl = "https://www.sagamoregolf.com/charity-scramble",
}: ScrambleCharityRegistrationUnlayerProps = {}) {
  const intro = (
    <Row key="intro" layout={ColumnLayouts.OneColumn} backgroundColor={palette.canvas} padding="0px">
      <Column backgroundColor={palette.white} padding="24px 32px 8px">
        <Paragraph color={palette.textSecondary} fontSize="16px" lineHeight="160%">
          Hi {firstName}, round up three friends and join us for our annual Charity Scramble. A great
          day of golf, great prizes, and every entry supports {cause}.
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
          html={`Interested in sponsoring a hole? Call the pro shop at <span style="color:${palette.textSecondary};font-weight:500;">${course.phone}</span>.`}
        />
      </Column>
    </Row>
  );

  const rows = [
    ...Header(),
    ...Hero({ imageUrl: heroes.charityScramble.src, imageAlt: heroes.charityScramble.alt }),
    intro,
    ...FeatureList({ items: features }),
    SectionHeading({ title: "Event details" }),
    DetailCard({ rows: [
      { emoji: "📅", label: "When", value: date },
      { label: "Format", value: format },
      { label: "Entry", value: pricePerTeam },
    ] }),
    Callout({ tone: "success", eyebrow: "Early-bird offer", emoji: "🏆", body: "Register your foursome before July 1 and receive two mulligans per player plus a tee gift for every golfer." }),
    Cta({ href: registerUrl, label: "Register Your Foursome" }),
    divider,
    support,
    ...Footer({ reason: "You're receiving this because you're part of the Sagamore Spring Golf Club community." }),
  ];

  return (
    <Email
      backgroundColor={palette.canvas}
      contentWidth={contentWidth}
      previewText={`Register your foursome for the Charity Scramble benefiting ${cause}.`}
    >
      {rows}
    </Email>
  );
}
