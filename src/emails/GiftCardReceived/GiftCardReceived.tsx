import { ArrowRight, Heart, MarkerPin02 } from "@untitledui/icons";
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
        <div className="mt-4 rounded-xl border border-secondary px-5 [&>*+*]:border-t [&>*+*]:border-secondary">
          <DetailRow label="Amount" value={giftCard.amount} />
          <DetailRow label="From" value={senderName} />
          <DetailRow label="Expiration" value={giftCard.expiration} />
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
        <p className="mt-4 text-center text-sm text-tertiary">
          Need help?{" "}
          <a
            href={helpHref}
            className="font-medium text-brand-secondary underline underline-offset-2"
          >
            Contact the pro shop
          </a>
          .
        </p>
      </EmailSection>

      <EmailFooter reason="You're receiving this because someone sent you a Sagamore Spring Golf Club gift card." />
    </EmailShell>
  );
};
