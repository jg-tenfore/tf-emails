import type { ReactNode } from "react";
import { cx } from "@/utils/cx";

interface EmailShellProps {
  /** Hidden preheader text shown in inbox preview rows. */
  preheader?: string;
  /** Max content width of the email card. Most clients cap usable width ~600px. */
  width?: number;
  children: ReactNode;
  className?: string;
}

/**
 * Outer wrapper for every email: a neutral canvas with a centered white card.
 * All email compositions render inside an <EmailShell>.
 */
export const EmailShell = ({
  preheader,
  width = 600,
  children,
  className,
}: EmailShellProps) => {
  return (
    <div className="w-full bg-secondary py-8 sm:py-12">
      {preheader ? (
        <div className="hidden" aria-hidden="true">
          {preheader}
        </div>
      ) : null}
      <div
        className={cx(
          "mx-auto w-full overflow-hidden rounded-2xl bg-primary shadow-lg ring-1 ring-secondary",
          className,
        )}
        style={{ maxWidth: width }}
      >
        {children}
      </div>
    </div>
  );
};
