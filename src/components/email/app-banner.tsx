import { ArrowRight, Star01 } from "@untitledui/icons";
import { cx } from "@/utils/cx";
import { assets, craneApp } from "@/lib/assets";
import { AppStoreBadge } from "./app-store-badge";

interface AppBannerProps {
  /** "inline" = compact body strip, "card" = bordered promo (both on white). */
  variant?: "inline" | "card";
  title?: string;
  body?: string;
  href?: string;
  showRating?: boolean;
  showBadge?: boolean;
  className?: string;
}

const AppIcon = ({ size = 48 }: { size?: number }) => (
  <img
    src={assets.craneIcon.src}
    alt={assets.craneIcon.alt}
    style={{ width: size, height: size }}
    className="shrink-0 rounded-[22%] ring-1 ring-black/10"
  />
);

/** Tiny single-line "Download the TenFore Crane app" link for footers. */
export const AppDownloadLink = ({
  href = craneApp.appStoreUrl,
}: {
  href?: string;
}) => (
  <a
    href={href}
    className="inline-flex items-center gap-2 text-sm font-medium text-tertiary hover:text-brand-secondary"
  >
    <AppIcon size={20} />
    Download the TenFore Crane app
  </a>
);

const Rating = ({ tone }: { tone: "light" | "dark" }) => {
  const filled = Math.round(craneApp.rating);
  return (
    <div className="mt-2 flex items-center justify-center gap-1.5">
      <span className="flex">
        {Array.from({ length: 5 }).map((_, i) => (
          <Star01
            key={i}
            className={cx(
              "size-3.5",
              i < filled
                ? "fill-[#f5b800] text-[#f5b800]"
                : tone === "dark"
                  ? "text-white/30"
                  : "text-quaternary",
            )}
          />
        ))}
      </span>
      <span
        className={cx(
          "text-xs",
          tone === "dark" ? "text-white/70" : "text-tertiary",
        )}
      >
        {craneApp.rating} · {craneApp.ratingCount} ratings
      </span>
    </div>
  );
};

/**
 * Promotes the TenFore Crane booking app inside an email, in the style of
 * Expedia's "Download the app" placements.
 */
export const AppBanner = ({
  variant = "inline",
  title = "Manage your round in the app",
  body = "Book tee times, reserve a table, and make pro-shop purchases at Sagamore Spring — right from your phone.",
  href = craneApp.appStoreUrl,
  showRating = true,
  showBadge = true,
  className,
}: AppBannerProps) => {
  if (variant === "inline") {
    return (
      <div
        className={cx(
          "flex items-start gap-4 rounded-xl border border-secondary bg-primary px-5 py-4",
          className,
        )}
      >
        <AppIcon size={48} />
        <div>
          <p className="text-sm font-semibold text-primary">{title}</p>
          <p className="mt-0.5 text-sm text-tertiary">{body}</p>
          <a
            href={href}
            className="mt-2 inline-flex items-center gap-1 text-sm font-semibold text-brand-secondary"
          >
            Get the TenFore Crane app
            <ArrowRight className="size-4" />
          </a>
        </div>
      </div>
    );
  }

  return (
    <div
      className={cx(
        "rounded-2xl border border-secondary bg-primary px-6 py-7 text-center",
        className,
      )}
    >
      <div className="flex justify-center">
        <AppIcon size={64} />
      </div>
      <p className="mt-4 text-md font-semibold text-primary">{title}</p>
      <p className="mx-auto mt-1 max-w-sm text-sm text-tertiary">{body}</p>
      {showRating ? <Rating tone="light" /> : null}
      {showBadge ? (
        <div className="mt-5 flex justify-center">
          <AppStoreBadge href={href} tone="light" />
        </div>
      ) : null}
    </div>
  );
};
