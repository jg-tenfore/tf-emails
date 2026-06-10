import type { ReactNode } from "react";
import { cx } from "@/utils/cx";

interface NumberedStepsProps {
  steps: ReactNode[];
  className?: string;
}

/**
 * Numbered "how it works" list with brand-circle step markers — used in
 * feature-announcement and onboarding emails.
 */
export const NumberedSteps = ({ steps, className }: NumberedStepsProps) => (
  <ol className={cx("flex flex-col gap-4", className)}>
    {steps.map((step, i) => (
      <li key={i} className="flex items-start gap-3">
        <span className="flex size-7 shrink-0 items-center justify-center rounded-full bg-brand-primary text-sm font-semibold text-brand-secondary">
          {i + 1}
        </span>
        <p className="pt-0.5 text-sm text-secondary">{step}</p>
      </li>
    ))}
  </ol>
);
