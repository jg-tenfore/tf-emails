import type { ReactNode } from "react";
import { cx } from "@/utils/cx";

interface SignatureBlockProps {
  signatureUrl: string;
  /** Name of the signer, shown on the signature line. */
  name: string;
  /** When it was signed. */
  date?: string;
  /** Optional acknowledgement line under the signature. */
  statement?: ReactNode;
  className?: string;
}

/**
 * A signed signature line — the handwritten signature above a name/date rule,
 * with an optional acknowledgement. Used on agreements and waivers.
 */
export const SignatureBlock = ({
  signatureUrl,
  name,
  date,
  statement,
  className,
}: SignatureBlockProps) => (
  <div
    className={cx(
      "rounded-xl border border-secondary bg-primary px-5 py-5",
      className,
    )}
  >
    <img
      src={signatureUrl}
      alt={`Signature of ${name}`}
      className="h-16 w-auto max-w-[70%] object-contain object-left"
    />
    <div className="mt-2 border-t border-secondary pt-3">
      <p className="text-sm font-medium text-primary">{name}</p>
      {date ? <p className="mt-0.5 text-xs text-tertiary">Signed {date}</p> : null}
    </div>
    {statement ? (
      <p className="mt-3 text-xs text-tertiary">{statement}</p>
    ) : null}
  </div>
);
