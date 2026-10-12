import type { ReactNode } from "react";
import { cx } from "@/utils/cx";

interface SubheadingProps {
  children: ReactNode;
  className?: string;
}

/**
 * Small semibold heading for a group inside a section ("What's included",
 * "Tee time policy") — one step below `SectionHeading`.
 */
export const Subheading = ({ children, className }: SubheadingProps) => (
  <h3 className={cx("text-sm font-semibold text-primary", className)}>{children}</h3>
);
