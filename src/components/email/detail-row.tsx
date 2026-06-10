import type { FC, ReactNode } from "react";
import { cx } from "@/utils/cx";

interface DetailRowProps {
  label: ReactNode;
  value: ReactNode;
  icon?: FC<{ className?: string }>;
  /** Emphasise the value (e.g. totals). */
  emphasis?: boolean;
  className?: string;
}

/** A label/value line used in booking summaries and receipts. */
export const DetailRow = ({
  label,
  value,
  icon: Icon,
  emphasis = false,
  className,
}: DetailRowProps) => {
  return (
    <div
      className={cx(
        "flex items-center justify-between gap-4 py-2.5",
        className,
      )}
    >
      <span className="flex items-center gap-2 text-sm text-tertiary">
        {Icon ? <Icon className="size-4 text-brand-secondary" /> : null}
        {label}
      </span>
      <span
        className={cx(
          "text-right text-sm",
          emphasis
            ? "text-md font-semibold text-primary"
            : "font-medium text-secondary",
        )}
      >
        {value}
      </span>
    </div>
  );
};
