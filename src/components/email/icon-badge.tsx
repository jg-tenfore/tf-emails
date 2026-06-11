import type { FC } from "react";
import { cx } from "@/utils/cx";

interface IconBadgeProps {
  icon: FC<{ className?: string }>;
  /** "square" (rounded-lg) or "circle" (rounded-full). */
  shape?: "square" | "circle";
  size?: "sm" | "md" | "lg";
  className?: string;
}

const sizes = {
  sm: { box: "size-8", icon: "size-4" },
  md: { box: "size-10", icon: "size-5" },
  lg: { box: "size-12", icon: "size-6" },
};

/**
 * Brand-tinted icon chip — the green rounded container that fronts feature
 * rows, trust blocks, and status heroes. Square by default; circle for heroes.
 */
export const IconBadge = ({
  icon: Icon,
  shape = "square",
  size = "md",
  className,
}: IconBadgeProps) => {
  const s = sizes[size];
  return (
    <span
      className={cx(
        "flex shrink-0 items-center justify-center bg-brand-primary text-brand-secondary",
        shape === "circle" ? "rounded-full" : "rounded-lg",
        s.box,
        className,
      )}
    >
      <Icon className={s.icon} />
    </span>
  );
};
