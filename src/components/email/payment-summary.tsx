import type { ReactNode } from "react";
import { cx } from "@/utils/cx";
import { StatusBadge, type PaymentStatus } from "./status-badge";

export interface PaymentRow {
  label: ReactNode;
  value: string;
  /** De-emphasise (e.g. a discount/credit line). */
  muted?: boolean;
}

interface PaymentSummaryProps {
  /** Subtotal / tax / fees / discount lines above the total. */
  rows?: PaymentRow[];
  /** The emphasised total (or refund) line. */
  total: { label?: ReactNode; value: string };
  /** Optional pill next to the total (Paid / Refund / Amount due …). */
  status?: PaymentStatus;
  statusLabel?: string;
  /** Fine print under the total, e.g. "Refunds take 2–3 business days." */
  note?: ReactNode;
  className?: string;
}

/**
 * Subtotal → tax/fees → total breakdown with an optional payment-state badge.
 * Closes out receipts, refunds, membership and dues emails.
 */
export const PaymentSummary = ({
  rows,
  total,
  status,
  statusLabel,
  note,
  className,
}: PaymentSummaryProps) => (
  <div className={className}>
    {rows?.length ? (
      <div className="[&>*+*]:border-t [&>*+*]:border-secondary">
        {rows.map((r, i) => (
          <div
            key={i}
            className="flex items-center justify-between gap-4 py-2.5"
          >
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
        ))}
      </div>
    ) : null}

    <div className="mt-1 flex items-center justify-between gap-4 border-t border-secondary pt-3">
      <span className="text-md font-semibold text-primary">
        {total.label ?? "Total"}
      </span>
      <span className="flex items-center gap-2.5">
        <span className="text-md font-semibold text-primary">
          {total.value}
        </span>
        {status ? <StatusBadge status={status} label={statusLabel} /> : null}
      </span>
    </div>

    {note ? <p className="mt-2 text-xs text-tertiary">{note}</p> : null}
  </div>
);
