import type { ReactNode } from "react";
import { cx } from "@/utils/cx";

interface EmailSectionProps {
  children: ReactNode;
  /** Vertical padding density. */
  padding?: "sm" | "md" | "lg";
  /** Background treatment. */
  tone?: "default" | "muted";
  align?: "left" | "center";
  className?: string;
}

const paddings = {
  sm: "px-8 py-5",
  md: "px-8 py-7",
  lg: "px-8 py-10",
};

const tones = {
  default: "bg-primary",
  muted: "bg-secondary",
};

/** A padded content block inside an email. */
export const EmailSection = ({
  children,
  padding = "md",
  tone = "default",
  align = "left",
  className,
}: EmailSectionProps) => {
  return (
    <div
      className={cx(
        paddings[padding],
        tones[tone],
        align === "center" && "text-center",
        className,
      )}
    >
      {children}
    </div>
  );
};
