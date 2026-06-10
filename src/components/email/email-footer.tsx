import { cx } from "@/utils/cx";
import { brand } from "@/lib/brand";
import { Logo } from "./logo";
import { socialIcons } from "./social-icons";

interface EmailFooterProps {
  /** Optional per-email context line, e.g. "You booked a tee time…". */
  reason?: string;
  unsubscribeUrl?: string;
  /** Footer alignment. */
  align?: "left" | "center";
}

const domain = brand.url.replace(/^https?:\/\//, "").replace(/\/$/, "");

/** TenFore Golf company footer: small color logo, tagline, contact + social. */
export const EmailFooter = ({
  reason,
  unsubscribeUrl = "#",
  align = "left",
}: EmailFooterProps) => {
  const left = align === "left";
  const rowJustify = left ? "justify-start" : "justify-center";
  return (
    <div
      className={cx("bg-secondary px-8 py-9", left ? "text-left" : "text-center")}
    >
      <div className={cx("flex", rowJustify)}>
        <Logo width={110} />
      </div>

      <p
        className={cx(
          "mt-4 max-w-md text-sm text-tertiary",
          !left && "mx-auto",
        )}
      >
        {brand.tagline}
      </p>

      <p className="mt-4 text-sm text-tertiary">
        {brand.address.line1} · {brand.address.line2}
      </p>
      <a
        href={brand.url}
        className="text-sm font-medium text-brand-secondary underline-offset-2 hover:underline"
      >
        {domain}
      </a>

      {/* Contact actions */}
      <div className={cx("mt-5 flex flex-wrap gap-3", rowJustify)}>
        <a
          href={brand.salesUrl}
          className="inline-flex items-center rounded-lg border border-secondary bg-primary px-4 py-2.5 text-sm font-semibold text-brand-secondary hover:bg-secondary"
        >
          Sales Inquiry
        </a>
        <a
          href={brand.supportUrl}
          className="inline-flex items-center rounded-lg border border-secondary bg-primary px-4 py-2.5 text-sm font-semibold text-secondary hover:bg-secondary"
        >
          Customer Support
        </a>
      </div>

      {/* Social */}
      <div className={cx("mt-6 flex gap-2.5", rowJustify)}>
        {brand.social.map((s) => {
          const Icon = socialIcons[s.icon];
          return (
            <a
              key={s.label}
              href={s.href}
              aria-label={s.label}
              className="flex size-9 items-center justify-center rounded-lg bg-primary text-tertiary ring-1 ring-secondary hover:text-brand-secondary"
            >
              <Icon className="size-4" />
            </a>
          );
        })}
      </div>

      {/* Legal */}
      <div className="mt-7 border-t border-secondary pt-5 text-xs text-quaternary">
        {reason ? <p>{reason}</p> : null}
        <p
          className={cx(
            "mt-1 flex flex-wrap items-center gap-x-2 gap-y-1",
            rowJustify,
          )}
        >
          <a
            href={brand.termsUrl}
            className="underline underline-offset-2 hover:text-brand-secondary"
          >
            Terms of Service
          </a>
          <span aria-hidden="true">·</span>
          <a
            href={brand.privacyUrl}
            className="underline underline-offset-2 hover:text-brand-secondary"
          >
            Privacy
          </a>
          <span aria-hidden="true">·</span>
          <a
            href={unsubscribeUrl}
            className="underline underline-offset-2 hover:text-brand-secondary"
          >
            Unsubscribe
          </a>
        </p>
        <p className="mt-1">© 2026 {brand.legalName}. All rights reserved.</p>
      </div>
    </div>
  );
};
