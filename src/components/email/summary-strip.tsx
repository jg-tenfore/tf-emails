import type { ReactNode } from "react";
import { cx } from "@/utils/cx";

export interface SummaryStripItem {
  label: ReactNode;
  value: ReactNode;
}

interface SummaryStripProps {
  items: SummaryStripItem[];
  className?: string;
}

/**
 * Muted strip of label + value pairs spread across a row — e.g.
 * "Paid online … · Due at course …" or "Paid … · Balance due …".
 */
export const SummaryStrip = ({ items, className }: SummaryStripProps) => (
  <div
    className={cx(
      "flex items-center justify-between gap-4 rounded-lg bg-secondary px-4 py-3 text-sm",
      className,
    )}
  >
    {items.map((it, i) => (
      <span key={i} className="text-tertiary">
        {it.label} <span className="font-semibold text-primary">{it.value}</span>
      </span>
    ))}
  </div>
);
