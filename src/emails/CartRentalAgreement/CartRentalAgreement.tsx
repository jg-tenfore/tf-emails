import { Calendar, Clock, Download01, Truck01 } from "@untitledui/icons";
import {
  Callout,
  Checklist,
  CTAButton,
  DetailCard,
  DetailRow,
  Divider,
  EmailFooter,
  EmailHeader,
  EmailSection,
  EmailShell,
  NumberedSteps,
  SectionHeading,
  SignatureBlock,
  StatusHero,
  VenueBadge,
} from "@/components/email";
import { assets } from "@/lib/assets";
import signatureImg from "@/assets/brand/signature.svg";
import { course, golfer } from "@/lib/scenario";

export interface CartRentalAgreementProps {
  firstName?: string;
  fullName?: string;
  cartNumber?: string;
  playerId?: string;
  confirmationId?: string;
  date?: string;
  returnBy?: string;
  signedAt?: string;
  signatureUrl?: string;
  agreementUrl?: string;
}

export const CartRentalAgreement = ({
  firstName = golfer.firstName,
  fullName = golfer.fullName,
  cartNumber = "14",
  playerId = golfer.userId,
  confirmationId = "CR-421292164",
  date = "Tuesday, April 21, 2026",
  returnBy = "8:30 PM",
  signedAt = "April 21, 2026 · 5:42 PM",
  signatureUrl = signatureImg,
  agreementUrl = "https://www.sagamoregolf.com/agreements/CR-421292164",
}: CartRentalAgreementProps) => {
  return (
    <EmailShell
      preheader={`Your signed cart rental agreement — Cart ${cartNumber} at ${course.name}.`}
    >
      <EmailHeader />

      <StatusHero
        icon={Truck01}
        eyebrow="Cart rental agreement"
        title={`You're set with Cart ${cartNumber}, ${firstName}.`}
        subtitle="Here's a copy of the agreement you signed for your round."
        stamps={[
          { label: "Confirmation", value: `#${confirmationId}` },
          { label: "Player ID", value: `#${playerId}` },
        ]}
      />

      <EmailSection padding="md">
        <VenueBadge
          label="Agreement with"
          logoUrl={assets.logo.src}
          name={course.name}
          location={course.address}
        />
      </EmailSection>

      <EmailSection padding="md">
        <SectionHeading title="Rental details" />
        <DetailCard className="mt-4">
          <DetailRow
            icon={Truck01}
            label="Cart"
            value={<span className="font-semibold text-primary">Cart {cartNumber}</span>}
          />
          <DetailRow label="Reserved for" value={fullName} />
          <DetailRow
            label="Player ID"
            value={<span className="font-mono">#{playerId}</span>}
          />
          <DetailRow icon={Calendar} label="Date" value={date} />
          <DetailRow icon={Clock} label="Return by" value={returnBy} />
          <DetailRow
            label="Confirmation"
            value={<span className="font-mono">#{confirmationId}</span>}
          />
        </DetailCard>

        <Callout tone="warning" eyebrow="Liability" className="mt-4">
          By signing, you take responsibility for Cart {cartNumber} for the
          duration of your round and accept liability for any loss or damage to
          the cart, its keys, and accessories while in your care.
        </Callout>
      </EmailSection>

      <Divider />

      <EmailSection padding="md">
        <SectionHeading title="Cart rental terms" />
        <Checklist
          className="mt-4"
          items={[
            "You must hold a valid driver's license and be 18 or older to operate the cart. Operate it safely and at your own risk.",
            "Keep the cart on paths and designated areas, and observe the cart-path-only and 90-degree rules where posted.",
            "No more than two riders and two bags per cart.",
            "You are responsible for any damage, loss, or theft of the cart, keys, or accessories while it is in your care.",
            "Return the cart to the staging area by your return time; late or off-site returns may incur additional charges.",
            `${course.name} is not liable for personal injury or property damage arising from use of the cart.`,
          ]}
        />
      </EmailSection>

      <Divider />

      <EmailSection padding="md">
        <SectionHeading title="Your signature" />
        <div className="mt-4">
          <SignatureBlock
            signatureUrl={signatureUrl}
            name={fullName}
            date={signedAt}
            statement={`By signing, you acknowledge that you have read and accept the cart rental terms above and accept liability for any damage to Cart ${cartNumber}.`}
          />
        </div>
      </EmailSection>

      <Divider />

      <EmailSection padding="md">
        <SectionHeading title="Before you drive" />
        <NumberedSteps
          className="mt-4"
          steps={[
            `Pick up Cart ${cartNumber} from the staging area at the pro shop.`,
            "Inspect the cart and report any existing damage to staff before you head out.",
            `Return it to the staging area by ${returnBy}.`,
          ]}
        />
        <div className="mt-6">
          <CTAButton
            href={`${agreementUrl}.pdf`}
            color="secondary"
            size="lg"
            fullWidth
            iconLeading={Download01}
          >
            Download signed agreement (PDF)
          </CTAButton>
        </div>
      </EmailSection>

      <EmailFooter reason={`You're receiving this because you signed a cart rental agreement at ${course.name}.`} />
    </EmailShell>
  );
};
