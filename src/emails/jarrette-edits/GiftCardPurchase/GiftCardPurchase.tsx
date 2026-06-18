import { ArrowRight, CheckCircle } from "@untitledui/icons";
import {
  Callout,
  CTAButton,
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
import { buddy, giftCard as defaultGiftCard, type GiftCard } from "@/lib/scenario";

export interface GiftCardPurchaseProps {
  firstName?: string;
  giftCard?: GiftCard;
  /** "self" keeps the card; "gift" sends it to a recipient. */
  mode?: "self" | "gift";
  recipientName?: string;
  recipientEmail?: string;
  manageUrl?: string;
  helpEmail?: string;
}

export const GiftCardPurchase = ({
  firstName = buddy.firstName,
  giftCard = defaultGiftCard,
  mode = "self",
  recipientName = buddy.fullName,
  recipientEmail = buddy.email,
  manageUrl = "https://www.sagamoregolf.com/account/gift-cards",
  helpEmail = "proshop@sagamoregolf.com",
}: GiftCardPurchaseProps) => {
  const isGift = mode === "gift";
  const helpHref = `mailto:${helpEmail}?subject=${encodeURIComponent(
    `Gift card question - #${giftCard.giftCardId}`,
  )}`;

  return (
    <EmailShell
      preheader={
        isGift
          ? `Your ${giftCard.amount} gift card is on its way to ${recipientName}.`
          : `Your ${giftCard.amount} gift card is ready to use.`
      }
    >
      <JarretteHeader />

      <StatusHero
        eyebrow="Gift card"
        title={
          isGift
            ? "Your gift card is on its way."
            : `Your gift card is ready, ${firstName}.`
        }
        stamps={[
          { label: "Gift card", value: `#${giftCard.giftCardId}` },
          { label: "Order", value: `#${giftCard.orderId}` },
        ]}
      />

      {isGift ? (
        <EmailSection padding="md">
          <Callout tone="success" eyebrow="Gift sent" icon={CheckCircle}>
            We sent the {giftCard.amount} gift card to {recipientName}. They'll
            receive a separate email with the redemption code.
          </Callout>
        </EmailSection>
      ) : (
        <EmailSection padding="md">
          <GiftCardVisual amount={giftCard.amount} code={giftCard.code} />
        </EmailSection>
      )}

      <EmailSection padding="md">
        <SectionHeading title="Details" />
        <DetailCard className="mt-4">
          <DetailRow label="Amount" value={giftCard.amount} />
          {isGift ? (
            <>
              <DetailRow label="Recipient" value={recipientName} />
              <DetailRow label="Recipient email" value={recipientEmail} />
            </>
          ) : null}
          <DetailRow label="Type" value={giftCard.type} />
          <DetailRow label="Expiration" value={giftCard.expiration} />
          <DetailRow label="Use for" value={giftCard.useFor} />
          <DetailRow label="Purchased" value={giftCard.purchaseDate} />
        </DetailCard>
      </EmailSection>

      <EmailSection padding="md">
        <CTAButton href={manageUrl} size="lg" fullWidth iconTrailing={ArrowRight}>
          Manage gift cards
        </CTAButton>
        <SupportLine
          className="mt-4"
          href={helpHref}
          linkText="Contact the pro shop"
        />
      </EmailSection>

      <JarretteFooter reason="You're receiving this because you purchased a Sagamore Spring Golf Club gift card." />
    </EmailShell>
  );
};
