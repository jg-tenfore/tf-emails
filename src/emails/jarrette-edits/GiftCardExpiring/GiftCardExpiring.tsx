import { AlertTriangle, ArrowRight, MarkerPin02 } from "@untitledui/icons";
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
} from "@/components/email";
import {
  course,
  giftCard as defaultGiftCard,
  type GiftCard,
  golfer,
} from "@/lib/scenario";

export interface GiftCardExpiringProps {
  firstName?: string;
  giftCard?: GiftCard;
  daysLeft?: string;
  planVisitUrl?: string;
}

export const GiftCardExpiring = ({
  firstName = golfer.firstName,
  giftCard = defaultGiftCard,
  daysLeft = "14",
  planVisitUrl = "https://www.sagamoregolf.com/teetimes",
}: GiftCardExpiringProps) => {
  return (
    <EmailShell
      preheader={`Just ${daysLeft} days left to use your gift card — ${giftCard.remaining} remaining.`}
    >
      <JarretteHeader />

      <StatusHero
        eyebrow="Gift card"
        title={`Your gift card expires soon, ${firstName}.`}
        subtitle={`Expires ${giftCard.expiration}`}
        stamps={[{ label: "Gift card", value: `#${giftCard.giftCardId}` }]}
      />

      <EmailSection padding="md">
        <Callout
          tone="warning"
          eyebrow="Use it before it's gone"
          icon={AlertTriangle}
        >
          Just {daysLeft} days left, and you still have {giftCard.remaining} to
          spend.
        </Callout>
      </EmailSection>

      <EmailSection padding="md">
        <GiftCardVisual
          label="Remaining balance"
          amount={giftCard.remaining ?? giftCard.amount}
          code={giftCard.code}
        />
      </EmailSection>

      <EmailSection padding="md">
        <SectionHeading title="Details" />
        <DetailCard className="mt-4">
          <DetailRow label="Original amount" value={giftCard.amount} />
          <DetailRow label="Used so far" value={giftCard.used} />
          <DetailRow label="Remaining" value={giftCard.remaining} />
          <DetailRow label="Expires" value={giftCard.expiration} />
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
      </EmailSection>

      <JarretteFooter reason="You're receiving this because you have a Sagamore Spring Golf Club gift card nearing its expiration." />
    </EmailShell>
  );
};
