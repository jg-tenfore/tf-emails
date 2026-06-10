import { cx } from "@/utils/cx";
import { brand } from "@/lib/brand";

interface GiftCardVisualProps {
  /** Face/remaining amount, e.g. "$100.00". */
  amount: string;
  /** Scannable code shown under the barcode. */
  code: string;
  /** Top-left caption, e.g. "Gift Card" or "Remaining Balance". */
  label?: string;
  className?: string;
}

/** Repeating vertical bars approximating a scannable barcode (email-safe CSS). */
const barcode =
  "repeating-linear-gradient(90deg, #1d2939 0, #1d2939 2px, transparent 2px, transparent 4px, #1d2939 4px, #1d2939 5px, transparent 5px, transparent 8px)";

/**
 * The gift-card artwork: brand-green card with the amount and a barcode/UPC.
 * Used across the gift-card emails (purchase, recipient, expiring).
 */
export const GiftCardVisual = ({
  amount,
  code,
  label = "Gift Card",
  className,
}: GiftCardVisualProps) => (
  <div
    className={cx(
      "overflow-hidden rounded-xl bg-brand-solid text-white ring-1 ring-black/5",
      className,
    )}
  >
    <div className="flex items-start justify-between gap-4 px-6 pt-6">
      <div>
        <p className="text-xs font-semibold tracking-wide text-white/70 uppercase">
          {label}
        </p>
        <p className="mt-1 text-display-sm font-semibold">{amount}</p>
      </div>
      <p className="text-sm font-semibold tracking-wide text-white/80">
        {brand.name}
      </p>
    </div>
    <div className="mt-6 bg-white px-6 py-4">
      <div
        className="h-12 w-full"
        style={{ backgroundImage: barcode }}
        aria-hidden="true"
      />
      <p className="mt-2 text-center font-mono text-xs tracking-[0.2em] text-tertiary">
        {code}
      </p>
    </div>
  </div>
);
