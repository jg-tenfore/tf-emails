import { Email, Row, Column, Image, Paragraph, ColumnLayouts } from "@unlayer/react-elements";
import { Header, Hero, FeatureList, Cta, Footer, Callout, SectionHeading, DetailCard, BrandStrip } from "@/unlayer/blocks";
import type { FeatureItem } from "@/unlayer/blocks";
import { palette, contentWidth } from "@/unlayer/theme";
import { heroes, titleist, mergeTags } from "@/unlayer/content";

export interface DemoDayClubFittingUnlayerProps {
  firstName?: string;
  date?: string;
  time?: string;
  bookingUrl?: string;
}

const features: FeatureItem[] = [
  { emoji: "🔧", title: "Free professional fitting", body: "Dial in the right shaft, loft, and lie with launch-monitor data." },
  { emoji: "🎯", title: "Hit the latest gear", body: "Demo this year's drivers, irons, and putters before you buy." },
  { emoji: "⚡", title: "Same-day order savings", body: "Place an order at the event and skip the fitting fee entirely." },
];

/**
 * Marketing Buck — Demo Day / Club Fitting, rebuilt with Unlayer Elements.
 * Source: ./DemoDayClubFitting.tsx
 */
export function DemoDayClubFittingUnlayer({
  firstName = mergeTags.firstName,
  date = "Saturday, May 17",
  time = "10 AM – 3 PM",
  bookingUrl = "https://www.sagamoregolf.com/demo-day",
}: DemoDayClubFittingUnlayerProps = {}) {
  const intro = (
    <Row key="intro" layout={ColumnLayouts.OneColumn} backgroundColor={palette.canvas} padding="0px">
      <Column backgroundColor={palette.white} padding="24px 32px 8px">
        <Paragraph color={palette.textSecondary} fontSize="16px" lineHeight="160%">
          Hi {firstName}, the reps are coming to the range. Try the newest clubs, get fit by the pros,
          and find exactly what your game's been missing — all in one afternoon.
        </Paragraph>
      </Column>
    </Row>
  );

  const titleistImage = (
    <Row key="ti-img" layout={ColumnLayouts.OneColumn} backgroundColor={palette.canvas} padding="0px">
      <Column backgroundColor={palette.white} padding="16px 32px 0px">
        <Image src={{ url: titleist.lineup }} alt="Titleist GT drivers, T-Series irons, and Scotty Cameron putters" />
      </Column>
    </Row>
  );

  const titleistCaption = (
    <Row key="ti-cap" layout={ColumnLayouts.OneColumn} backgroundColor={palette.canvas} padding="0px">
      <Column backgroundColor={palette.muted} padding="14px 32px">
        <Paragraph
          color={palette.textSecondary}
          fontSize="14px"
          html={`<img src="${titleist.logo}" alt="Titleist" width="84" style="display:block;margin:0 0 8px;"/>Titleist fitting carts will be on site — get dialed in for GT drivers, T-Series irons, and Scotty Cameron putters.`}
        />
      </Column>
    </Row>
  );

  const rows = [
    ...Header(),
    ...Hero({ imageUrl: heroes.demoDay.src, imageAlt: heroes.demoDay.alt, eyebrow: "Demo day & club fitting", headline: "Find clubs built for your swing" }),
    intro,
    ...FeatureList({ items: features }),
    SectionHeading({ title: "Event details" }),
    DetailCard({ rows: [
      { emoji: "📅", label: "Date", value: date },
      { label: "Time", value: time },
      { label: "Where", value: "The practice range" },
    ] }),
    Callout({ tone: "success", eyebrow: "Event-only offer", emoji: "🔧", body: "Fittings are free all day, and any order placed at the event waives the fitting fee — plus trade-in credit on your old clubs." }),
    Cta({ href: bookingUrl, label: "Reserve Your Fitting" }),
    SectionHeading({ title: "Featured fitting partner" }),
    titleistImage,
    titleistCaption,
    ...BrandStrip({ label: "Brands on hand at the event" }),
    ...Footer({ reason: "You're receiving this because you're a golfer at Sagamore Spring Golf Club." }),
  ];

  return (
    <Email
      backgroundColor={palette.canvas}
      contentWidth={contentWidth}
      previewText={`Demo Day is ${date} — free fittings and the latest gear from every brand.`}
    >
      {rows}
    </Email>
  );
}
