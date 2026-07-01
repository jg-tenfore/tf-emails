import { Email, Row, Column, Paragraph, Divider, ColumnLayouts } from "@unlayer/react-elements";
import { Header, Hero, FeatureList, Cta, TextAlerts, Footer, Callout } from "@/unlayer/blocks";
import type { FeatureItem } from "@/unlayer/blocks";
import { palette, contentWidth } from "@/unlayer/theme";
import { heroes, course, mergeTags } from "@/unlayer/content";

export interface MemberAnniversaryUnlayerProps {
  firstName?: string;
  years?: string;
  credit?: string;
  bookingUrl?: string;
}

/**
 * Marketing Buck — Member Anniversary, rebuilt with Unlayer Elements.
 * Source: ./MemberAnniversary.tsx
 */
export function MemberAnniversaryUnlayer({
  firstName = mergeTags.firstName,
  years = "5",
  credit = "$25",
  bookingUrl = course.bookingUrl,
}: MemberAnniversaryUnlayerProps = {}) {
  const perks: FeatureItem[] = [
    { emoji: "🪙", title: `${credit} clubhouse credit`, body: "On us — spend it on green fees, the grill, or the pro shop." },
    { emoji: "❤️", title: "Thanks for being a member", body: `${years} years of rounds, friends, and good golf at ${course.name}.` },
  ];

  const intro = (
    <Row key="intro" layout={ColumnLayouts.OneColumn} backgroundColor={palette.canvas} padding="0px">
      <Column backgroundColor={palette.white} padding="24px 32px 8px">
        <Paragraph color={palette.textSecondary} fontSize="16px" lineHeight="160%">
          It's been {years} years since you joined {course.name} — and we're grateful for every round.
          To say thank you, here's an anniversary gift to enjoy on your next visit.
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
          html={`Here's to many more. Questions? Call the pro shop at <span style="color:${palette.textSecondary};font-weight:500;">${course.phone}</span>.`}
        />
      </Column>
    </Row>
  );

  const rows = [
    ...Header(),
    ...Hero({ imageUrl: heroes.courseHero.src, imageAlt: heroes.courseHero.alt, eyebrow: "Member anniversary", headline: `${years} years strong, ${firstName}` }),
    intro,
    ...FeatureList({ items: perks }),
    Callout({ tone: "success", eyebrow: "Anniversary gift", emoji: "🎖️", body: `Your ${credit} clubhouse credit is ready. Book your next round and we'll have it waiting at check-in.` }),
    Cta({ href: bookingUrl, label: "Book Your Round" }),
    TextAlerts({ href: course.textAlertsUrl, prompt: "Want first dibs on open tee times?", label: "Sign up" }),
    divider,
    support,
    ...Footer({ reason: "You're receiving this because you're a valued member of Sagamore Spring Golf Club." }),
  ];

  return (
    <Email
      backgroundColor={palette.canvas}
      contentWidth={contentWidth}
      previewText={`Happy ${years}-year anniversary — here's a little something to celebrate.`}
    >
      {rows}
    </Email>
  );
}
