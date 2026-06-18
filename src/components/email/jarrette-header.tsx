import { cx } from "@/utils/cx";
import { assets } from "@/lib/assets";
import { course } from "@/lib/scenario";

interface JarretteHeaderProps {
  /** Venue logo. Defaults to the Sagamore Spring club mark. */
  logoUrl?: string;
  /** Venue title shown beside the logo. Defaults to the Sagamore Spring club name. */
  title?: string;
  /** Venue address line under the title. Defaults to the Sagamore Spring address. */
  address?: string;
  /** Hairline under the header. Defaults to true; set false to butt against a full-bleed hero. */
  bordered?: boolean;
}

/**
 * "Jarrette" email header variant. Where the standard {@link EmailHeader} shows a
 * centered TenFore platform mark, this carries the venue (Sagamore Spring) brand
 * directly — the club logo stacked on top of its name and address, centered in
 * the header.
 */
export const JarretteHeader = ({
  logoUrl = assets.logo.src,
  title = course.name,
  address = course.address,
  bordered = true,
}: JarretteHeaderProps) => (
  <div
    className={cx(
      "flex flex-col items-center gap-3 bg-primary px-8 py-6 text-center",
      bordered && "border-b border-secondary",
    )}
  >
    <img
      src={logoUrl}
      alt={title}
      width={56}
      height={56}
      className="rounded-lg ring-1 ring-black/5"
    />
    <div>
      <p className="text-base font-semibold text-primary">{title}</p>
      {address ? (
        <p className="mt-0.5 text-sm text-tertiary">{address}</p>
      ) : null}
    </div>
  </div>
);
