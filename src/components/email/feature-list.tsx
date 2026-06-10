import type { FC, ReactNode } from "react";
import { cx } from "@/utils/cx";

export interface FeatureItem {
  icon: FC<{ className?: string }>;
  title: ReactNode;
  body: ReactNode;
}

interface FeatureListProps {
  items: FeatureItem[];
  className?: string;
}

/**
 * Vertical list of icon + title + body rows — the "what's included / what you
 * can do" pattern used in welcome, app-promo and feature-announcement emails.
 */
export const FeatureList = ({ items, className }: FeatureListProps) => (
  <div className={cx("flex flex-col gap-5", className)}>
    {items.map((f, i) => (
      <div key={i} className="flex items-start gap-3">
        <span className="flex size-10 shrink-0 items-center justify-center rounded-lg bg-brand-primary text-brand-secondary">
          <f.icon className="size-5" />
        </span>
        <div>
          <p className="text-sm font-semibold text-primary">{f.title}</p>
          <p className="mt-0.5 text-sm text-tertiary">{f.body}</p>
        </div>
      </div>
    ))}
  </div>
);
