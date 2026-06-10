import { Flag02 } from "@untitledui/icons";
import { brand } from "@/lib/brand";

interface EmailFooterProps {
  /** Shown above the legal lines, e.g. "You're receiving this because…". */
  reason?: string;
  unsubscribeUrl?: string;
}

/** Standard Tenfore Golf email footer: brand, social, address, unsubscribe. */
export const EmailFooter = ({
  reason = "You're receiving this email because you have an account with Tenfore Golf.",
  unsubscribeUrl = "#",
}: EmailFooterProps) => {
  return (
    <div className="bg-secondary px-8 py-7 text-center">
      <div className="flex items-center justify-center gap-2 text-secondary">
        <Flag02 className="size-4 text-brand-secondary" />
        <span className="text-sm font-semibold text-primary">{brand.name}</span>
      </div>

      <div className="mt-4 flex items-center justify-center gap-4">
        {brand.social.map((s) => (
          <a
            key={s.label}
            href={s.href}
            className="text-xs font-medium text-tertiary underline-offset-2 hover:text-brand-secondary hover:underline"
          >
            {s.label}
          </a>
        ))}
      </div>

      <p className="mt-4 text-xs text-tertiary">
        {brand.address.line1} · {brand.address.line2}
      </p>
      <p className="mt-1 text-xs text-tertiary">{reason}</p>

      <p className="mt-4 text-xs text-quaternary">
        <a
          href={unsubscribeUrl}
          className="underline underline-offset-2 hover:text-brand-secondary"
        >
          Unsubscribe
        </a>{" "}
        ·{" "}
        <a
          href={brand.url}
          className="underline underline-offset-2 hover:text-brand-secondary"
        >
          tenforegolf.com
        </a>
      </p>
      <p className="mt-3 text-xs text-quaternary">
        © 2026 {brand.legalName}. All rights reserved.
      </p>
    </div>
  );
};
