import type { ReactNode } from "react";
import { cx } from "@/utils/cx";

export interface IdStampItem {
  label: ReactNode;
  value: ReactNode;
}

interface IdStampProps extends IdStampItem {
  className?: string;
}

/**
 * Monospace identifier label/value pair shown in email heroes
 * (e.g. ORDER ID · 8472103, PARENT TTC ID · 55555).
 */
export const IdStamp = ({ label, value, className }: IdStampProps) => (
  <span className={cx("inline-flex items-center gap-1.5 text-xs", className)}>
    <span className="font-medium tracking-wide text-quaternary uppercase">
      {label}
    </span>
    <span className="font-mono tracking-wide text-tertiary">{value}</span>
  </span>
);
