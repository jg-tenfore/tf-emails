import { AlertTriangle, ArrowRight, MarkerPin02 } from "@untitledui/icons";
import {
  Callout,
  CTAButton,
  DetailRow,
  EmailFooter,
  EmailHeader,
  EmailSection,
  EmailShell,
  GiftCardVisual,
  SectionHeading,
  StatusHero,
  VenueBadge,
} from "@/components/email";
import { assets } from "@/lib/assets";
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
      <EmailHeader />

      <EmailSection padding="md">
        <VenueBadge
          label="Redeemable at"
          logoUrl={assets.logo.src}
          name={course.name}
          location={course.address}
        />
      </EmailSection>

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
        <div className="mt-4 rounded-xl border border-secondary px-5 [&>*+*]:border-t [&>*+*]:border-secondary">
          <DetailRow label="Original amount" value={giftCard.amount} />
          <DetailRow label="Used so far" value={giftCard.used} />
          <DetailRow label="Remaining" value={giftCard.remaining} />
          <DetailRow label="Expires" value={giftCard.expiration} />
          <DetailRow label="Use for" value={giftCard.useFor} />
        </div>
      </EmailSection>

      <EmailSection padding="md">
        <div className="flex flex-col gap-3">
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
        </div>
      </EmailSection>

      <EmailFooter reason="You're receiving this because you have a Sagamore Spring Golf Club gift card nearing its expiration." />
    </EmailShell>
  );
};
