import type { ReactNode } from "react";
import { cx } from "@/utils/cx";

interface CTAStackProps {
  children: ReactNode;
  className?: string;
}

/**
 * Vertical stack of full-width CTAs with consistent spacing — the
 * primary-then-secondary button pattern used at the end of most emails.
 */
export const CTAStack = ({ children, className }: CTAStackProps) => (
  <div className={cx("flex flex-col gap-3", className)}>{children}</div>
);
