import type { ReactNode } from "react";
import { cx } from "@/utils/cx";

interface ChecklistProps {
  items: ReactNode[];
  className?: string;
}

/**
 * Simple bulleted list — the "Good to know" / "Before you arrive" notes used at
 * the foot of booking emails.
 */
export const Checklist = ({ items, className }: ChecklistProps) => (
  <ul className={cx("flex flex-col gap-1.5 text-sm text-tertiary", className)}>
    {items.map((item, i) => (
      <li key={i} className="flex gap-2.5">
        <span aria-hidden="true" className="shrink-0 select-none leading-relaxed">
          •
        </span>
        <span>{item}</span>
      </li>
    ))}
  </ul>
);
