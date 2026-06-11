import type { ReactNode } from "react";
import { cx } from "@/utils/cx";

interface PanelProps {
  children: ReactNode;
  className?: string;
}

/**
 * Plain bordered container with light padding — the standard wrapper around an
 * `ItemizedList` (and other simple content). For DetailRow lists with hairline
 * separators, use `DetailCard` instead.
 */
export const Panel = ({ children, className }: PanelProps) => (
  <div className={cx("rounded-xl border border-secondary px-5 py-2", className)}>
    {children}
  </div>
);
