import type { ReactNode } from "react";
import { ArrowRight } from "@untitledui/icons";
import { cx } from "@/utils/cx";

export interface FieldChange {
  label: ReactNode;
  /** Previous value (rendered struck-through). */
  from: ReactNode;
  /** New value (rendered emphasised). */
  to: ReactNode;
}

interface WhatChangedProps {
  changes: FieldChange[];
  title?: ReactNode;
  className?: string;
}

/**
 * Green "What changed" diff box used by every *Modification email — shows each
 * changed field as old → new. Faithful to the old templates where a green
 * callout signalled an update.
 */
export const WhatChanged = ({
  changes,
  title = "What changed",
  className,
}: WhatChangedProps) => (
  <div
    className={cx(
      "rounded-lg border border-l-4 border-utility-green-200 border-l-utility-green-500 bg-utility-green-50 px-4 py-3.5",
      className,
    )}
  >
    {title ? (
      <p className="text-xs font-semibold tracking-wide text-utility-green-700 uppercase">
        {title}
      </p>
    ) : null}
    <div className="mt-2 flex flex-col gap-2">
      {changes.map((c, i) => (
        <div key={i} className="text-sm">
          <p className="text-xs font-medium text-tertiary">{c.label}</p>
          <p className="mt-0.5 flex items-center gap-2 text-secondary">
            <span className="text-tertiary line-through">{c.from}</span>
            <ArrowRight className="size-3.5 shrink-0 text-utility-green-500" />
            <span className="font-semibold text-primary">{c.to}</span>
          </p>
        </div>
      ))}
    </div>
  </div>
);
