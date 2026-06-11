import { cx } from "@/utils/cx";
import { cardArt, cardName, type CardBrand } from "@/lib/card-brands";

interface PaymentMethodProps {
  /** Card brand (defaults to Visa). */
  brand?: CardBrand;
  /** Last four digits of the card. */
  last4: string;
  className?: string;
}

/**
 * "Visa ending in 4242" with the card-brand logo — used wherever a payment
 * method is shown (receipts, charged footers).
 */
export const PaymentMethod = ({
  brand = "visa",
  last4,
  className,
}: PaymentMethodProps) => (
  <span className={cx("inline-flex items-center gap-2 align-middle", className)}>
    <img
      src={cardArt[brand]}
      alt={cardName[brand]}
      className="h-5 w-auto shrink-0 rounded-[3px] ring-1 ring-black/5"
    />
    <span>
      {cardName[brand]} ending in {last4}
    </span>
  </span>
);
