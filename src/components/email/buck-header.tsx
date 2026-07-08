import { cx } from "@/utils/cx";
import placeholderLogo from "@/assets/placeHolder-logo/logo.png";

interface BuckHeaderProps {
  /** Venue logo. Defaults to the generic green "Logo" placeholder block. */
  logoUrl?: string;
  /** Club name shown under the logo block. */
  title?: string;
  /** Address line under the title. */
  address?: string;
  /** Hairline under the header. Defaults to true; set false to butt against a full-bleed hero. */
  bordered?: boolean;
}

/** Generic template placeholders — a club drops in its own brand. */
const PLACEHOLDER = {
  title: "Your Golf Course",
  address: "123 Fairway Drive, Anytown, ST 00000",
};

/**
 * Marketing Buck email header — a standalone logo block (the green "Logo"
 * placeholder by default) set apart from the club name + address below it.
 * Marketing-Buck-only; the transactional emails keep {@link JarretteHeader}.
 */
export const BuckHeader = ({
  logoUrl = placeholderLogo,
  title = PLACEHOLDER.title,
  address = PLACEHOLDER.address,
  bordered = true,
}: BuckHeaderProps) => (
  <div
    className={cx(
      "flex flex-col items-center bg-primary px-8 pt-8 pb-7 text-center",
      bordered && "border-b border-secondary",
    )}
  >
    <img src={logoUrl} alt={title} width={96} height={96} className="rounded-2xl" />
    <p className="mt-6 text-lg font-semibold text-primary">{title}</p>
    {address ? <p className="mt-1.5 text-sm text-tertiary">{address}</p> : null}
  </div>
);
