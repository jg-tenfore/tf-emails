import type { ReactNode } from "react";
import { cx } from "@/utils/cx";
import { DetailRow } from "./detail-row";

export interface ContactField {
  label: ReactNode;
  value: ReactNode;
}

interface ContactBlockProps {
  /** Section title, e.g. "Customer". */
  title?: ReactNode;
  fields: ContactField[];
  className?: string;
}

/**
 * Customer/contact record card used by operator-facing notifications
 * (the only emails that surface PII — name, email, phone, account IDs).
 */
export const ContactBlock = ({
  title = "Customer",
  fields,
  className,
}: ContactBlockProps) => (
  <div
    className={cx(
      "overflow-hidden rounded-xl border border-secondary",
      className,
    )}
  >
    {title ? (
      <div className="bg-secondary px-5 py-3">
        <p className="text-xs font-semibold tracking-wide text-tertiary uppercase">
          {title}
        </p>
      </div>
    ) : null}
    <div className="px-5 py-1 [&>*+*]:border-t [&>*+*]:border-secondary">
      {fields.map((f, i) => (
        <DetailRow key={i} label={f.label} value={f.value} />
      ))}
    </div>
  </div>
);
