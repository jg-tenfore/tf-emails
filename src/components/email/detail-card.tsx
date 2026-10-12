import type { ReactNode } from "react";
import { cx } from "@/utils/cx";

interface DetailCardProps {
  children: ReactNode;
  /** Hairline separators between rows. Turn off for a plain bordered box (formerly `Panel`). */
  divided?: boolean;
  className?: string;
}

/**
 * Bordered container that stacks `DetailRow`s with hairline separators — the
 * standard summary-card shell used across booking, receipt and account emails.
 * Replaces the repeated inline
 * `rounded-xl border border-secondary px-5 [&>*+*]:border-t` wrapper.
 */
export const DetailCard = ({ children, divided = true, className }: DetailCardProps) => (
  <div
    className={cx(
      "rounded-xl border border-secondary px-5",
      divided ? "[&>*+*]:border-t [&>*+*]:border-secondary" : "py-2",
      className,
    )}
  >
    {children}
  </div>
);
