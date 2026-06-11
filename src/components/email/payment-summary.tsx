import type { ReactNode } from "react";
import { cx } from "@/utils/cx";
import { StatusBadge, type PaymentStatus } from "./status-badge";

export interface PaymentRow {
  label: ReactNode;
  value: string;
  /** De-emphasise (e.g. a discount/credit line). */
  muted?: boolean;
  /** Optional muted sub-line beneath the row, e.g. "VAT (9%) · $2.39". */
  subline?: { label: ReactNode; value: string };
}

interface PaymentSummaryProps {
  /** Breakdown lines (fares, fees, subtotal, tax, discounts…) shown below the total. */
  rows?: PaymentRow[];
  /** The headline total (or refund / amount due), shown prominently at the top. */
  total: { label?: ReactNode; value: string };
  /** Optional pill next to the total (Paid / Refund / Amount due …). */
  status?: PaymentStatus;
  statusLabel?: string;
  /** Fine print under the breakdown. */
  note?: ReactNode;
  /** Optional "Total charged" + payment-method footer. */
  charged?: { value: string; method?: ReactNode };
  className?: string;
}

/**
 * Pricing details led by the total: a prominent total at the top, the itemized
 * breakdown beneath it (with optional sub-lines), and an optional "Total
 * charged" + payment-method footer. Used by receipts, refunds, membership, etc.
 */
export const PaymentSummary = ({
  rows,
  total,
  status,
  statusLabel,
  note,
  charged,
  className,
}: PaymentSummaryProps) => (
  <div className={className}>
    {/* Headline total — leads the section */}
    <div className="flex items-center justify-between gap-4">
      <span className="text-display-xs font-semibold text-primary">
        {total.label ?? "Total"}
      </span>
      <span className="flex items-center gap-2.5">
        <span className="text-display-xs font-semibold text-primary">
          {total.value}
        </span>
        {status ? <StatusBadge status={status} label={statusLabel} /> : null}
      </span>
    </div>

    {/* Breakdown */}
    {rows?.length ? (
      <div className="mt-5 border-t border-secondary pt-1 [&>*+*]:border-t [&>*+*]:border-secondary">
        {rows.map((r, i) => (
          <div key={i} className="py-2.5">
            <div className="flex items-start justify-between gap-4">
              <span className="text-sm text-tertiary">{r.label}</span>
              <span
                className={cx(
                  "text-right text-sm font-medium",
                  r.muted ? "text-tertiary" : "text-secondary",
                )}
              >
                {r.value}
              </span>
            </div>
            {r.subline ? (
              <div className="mt-0.5 flex items-start justify-between gap-4">
                <span className="text-xs text-quaternary">
                  {r.subline.label}
                </span>
                <span className="text-right text-xs text-quaternary">
                  {r.subline.value}
                </span>
              </div>
            ) : null}
          </div>
        ))}
      </div>
    ) : null}

    {note ? <p className="mt-3 text-xs text-tertiary">{note}</p> : null}

    {charged ? (
      <div className="mt-5 border-t border-secondary pt-4">
        <div className="flex items-center justify-between gap-4">
          <span className="text-md font-semibold text-primary">
            Total charged
          </span>
          <span className="text-md font-semibold text-primary">
            {charged.value}
          </span>
        </div>
        {charged.method ? (
          <div className="mt-2 flex items-center justify-between gap-4">
            <span className="text-sm text-tertiary">{charged.method}</span>
            <span className="text-right text-sm text-secondary">
              {charged.value}
            </span>
          </div>
        ) : null}
      </div>
    ) : null}
  </div>
);
