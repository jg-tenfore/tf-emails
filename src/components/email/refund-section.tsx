import type { ReactNode } from "react";
import { Divider } from "./divider";
import { EmailSection } from "./email-section";
import { PaymentSummary } from "./payment-summary";
import { SectionHeading } from "./section-heading";

interface RefundSectionProps {
  /** Refund amount, e.g. "$221.52". */
  amount: string;
  title?: ReactNode;
  note?: ReactNode;
  /** Draw a divider above the section. */
  divided?: boolean;
}

/**
 * The refund block that closes out cancellation and modification emails:
 * a "Refund" heading over a refund-status `PaymentSummary` with the standard
 * timing note.
 */
export const RefundSection = ({
  amount,
  title = "Refund",
  note = "Refunds take 2–3 business days to appear on your statement.",
  divided = true,
}: RefundSectionProps) => (
  <>
    {divided ? <Divider /> : null}
    <EmailSection padding="md">
      <SectionHeading title={title} />
      <div className="mt-4">
        <PaymentSummary total={{ label: "Refund", value: amount }} status="refund" note={note} />
      </div>
    </EmailSection>
  </>
);
