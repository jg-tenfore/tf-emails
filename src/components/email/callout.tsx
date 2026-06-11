import type { FC, ReactNode } from "react";
import { cx } from "@/utils/cx";

export type CalloutTone = "success" | "info" | "warning" | "error";

interface CalloutProps {
  /** Semantic color of the box. success=green, info=blue, warning=amber, error=red. */
  tone?: CalloutTone;
  /** Small uppercase label above the body, rendered in the tone color. */
  eyebrow?: ReactNode;
  /** Optional leading icon, tinted to the tone color. */
  icon?: FC<{ className?: string }>;
  children: ReactNode;
  className?: string;
}

const toneStyles: Record<
  CalloutTone,
  { box: string; accent: string; eyebrow: string; icon: string }
> = {
  success: {
    box: "border-utility-green-200 bg-utility-green-50",
    accent: "border-l-utility-green-500",
    eyebrow: "text-utility-green-700",
    icon: "text-utility-green-500",
  },
  info: {
    box: "border-utility-blue-200 bg-utility-blue-50",
    accent: "border-l-utility-blue-500",
    eyebrow: "text-utility-blue-700",
    icon: "text-utility-blue-500",
  },
  warning: {
    box: "border-utility-yellow-200 bg-utility-yellow-50",
    accent: "border-l-utility-yellow-400",
    eyebrow: "text-utility-yellow-700",
    icon: "text-utility-yellow-500",
  },
  error: {
    box: "border-utility-red-200 bg-utility-red-50",
    accent: "border-l-utility-red-500",
    eyebrow: "text-utility-red-700",
    icon: "text-utility-red-500",
  },
};

/**
 * Colored left-accent callout. The single most reused email primitive — its
 * color carries the email's state (success / info / urgency) the way the old
 * "Stage 0" templates used title + box color instead of a status pill.
 */
export const Callout = ({
  tone = "info",
  eyebrow,
  icon: Icon,
  children,
  className,
}: CalloutProps) => {
  const t = toneStyles[tone];
  return (
    <div
      className={cx(
        "rounded-lg border border-l-4 px-4 py-3.5",
        t.box,
        t.accent,
        className,
      )}
    >
      <div className="flex items-start gap-2.5">
        {Icon ? (
          <Icon className={cx("mt-0.5 size-4 shrink-0", t.icon)} />
        ) : null}
        <div>
          {eyebrow ? (
            <p
              className={cx(
                "text-xs font-semibold tracking-wide uppercase",
                t.eyebrow,
              )}
            >
              {eyebrow}
            </p>
          ) : null}
          <div className={cx("text-sm text-secondary", eyebrow && "mt-1")}>
            {children}
          </div>
        </div>
      </div>
    </div>
  );
};
