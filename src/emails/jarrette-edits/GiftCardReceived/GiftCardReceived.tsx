import { ArrowRight, Heart, MarkerPin02 } from "@untitledui/icons";
import {
  Callout,
  CTAButton,
  CTAStack,
  DetailCard,
  DetailRow,
  JarretteFooter,
  JarretteHeader,
  EmailSection,
  EmailShell,
  GiftCardVisual,
  SectionHeading,
  StatusHero,
  SupportLine,
} from "@/components/email";
import {
  buddy,
  course,
  giftCard as defaultGiftCard,
  type GiftCard,
  golfer,
} from "@/lib/scenario";

export interface GiftCardReceivedProps {
  firstName?: string;
  giftCard?: GiftCard;
  senderName?: string;
  note?: string;
  planVisitUrl?: string;
  helpEmail?: string;
}

export const GiftCardReceived = ({
  firstName = golfer.firstName,
  giftCard = defaultGiftCard,
  senderName = buddy.fullName,
  note = "Happy birthday! Enjoy a round on me.",
  planVisitUrl = "https://www.sagamoregolf.com/teetimes",
  helpEmail = "proshop@sagamoregolf.com",
}: GiftCardReceivedProps) => {
  const helpHref = `mailto:${helpEmail}?subject=${encodeURIComponent(
    `Gift card question - #${giftCard.giftCardId}`,
  )}`;

  return (
    <EmailShell
      preheader={`${senderName} sent you a ${giftCard.amount} gift card.`}
    >
      <JarretteHeader />

      <StatusHero
        eyebrow="You received a gift card"
        title={`A gift for you, ${firstName}.`}
        subtitle={`From ${senderName}`}
        stamps={[{ label: "Gift card", value: `#${giftCard.giftCardId}` }]}
      />

      {note ? (
        <EmailSection padding="md">
          <Callout tone="info" eyebrow={`A note from ${senderName}`} icon={Heart}>
            {note}
          </Callout>
        </EmailSection>
      ) : null}

      <EmailSection padding="md">
        <GiftCardVisual amount={giftCard.amount} code={giftCard.code} />
      </EmailSection>

      <EmailSection padding="md">
        <SectionHeading title="Details" />
        <DetailCard className="mt-4">
          <DetailRow label="Amount" value={giftCard.amount} />
          <DetailRow label="From" value={senderName} />
          <DetailRow label="Expiration" value={giftCard.expiration} />
          <DetailRow label="Use for" value={giftCard.useFor} />
        </DetailCard>
      </EmailSection>

      <EmailSection padding="md">
        <CTAStack>
          <CTAButton
            href={planVisitUrl}
            size="lg"
            fullWidth
            iconTrailing={ArrowRight}
          >
            Plan your visit
          </CTAButton>
          <CTAButton
            href={course.mapUrl}
            color="secondary"
            size="lg"
            fullWidth
            iconLeading={MarkerPin02}
          >
            Get directions
          </CTAButton>
        </CTAStack>
        <SupportLine
          className="mt-4"
          href={helpHref}
          linkText="Contact the pro shop"
        />
      </EmailSection>

      <JarretteFooter reason="You're receiving this because someone sent you a Sagamore Spring Golf Club gift card." />
    </EmailShell>
  );
};
