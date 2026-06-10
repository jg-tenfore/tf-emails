import { ArrowRight, CheckCircle } from "@untitledui/icons";
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
import { buddy, course, giftCard as defaultGiftCard, type GiftCard } from "@/lib/scenario";

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
        <div className="mt-4 rounded-xl border border-secondary px-5 [&>*+*]:border-t [&>*+*]:border-secondary">
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
        </div>
      </EmailSection>

      <EmailSection padding="md">
        <CTAButton href={manageUrl} size="lg" fullWidth iconTrailing={ArrowRight}>
          Manage gift cards
        </CTAButton>
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

      <EmailFooter reason="You're receiving this because you purchased a Sagamore Spring Golf Club gift card." />
    </EmailShell>
  );
};
