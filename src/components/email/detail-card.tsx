import type { ReactNode } from "react";
import { cx } from "@/utils/cx";

interface DetailCardProps {
  children: ReactNode;
  className?: string;
}

/**
 * Bordered container that stacks `DetailRow`s with hairline separators — the
 * standard summary-card shell used across booking, receipt and account emails.
 * Replaces the repeated inline
 * `rounded-xl border border-secondary px-5 [&>*+*]:border-t` wrapper.
 */
export const DetailCard = ({ children, className }: DetailCardProps) => (
  <div
    className={cx(
      "rounded-xl border border-secondary px-5 [&>*+*]:border-t [&>*+*]:border-secondary",
      className,
    )}
  >
    {children}
  </div>
);
