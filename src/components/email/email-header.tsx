import { cx } from "@/utils/cx";
import { Logo } from "./logo";

interface EmailHeaderProps {
  /** "light" = white bar with the Tenfore logo (Expedia-style, default).
   *  "brand" = dark green bar with the inverted logo. */
  variant?: "light" | "brand";
  align?: "left" | "center";
}

/** Tenfore Golf logo bar that opens every email. */
export const EmailHeader = ({
  variant = "light",
  align = "center",
}: EmailHeaderProps) => {
  const isBrand = variant === "brand";
  return (
    <div
      className={cx(
        "flex items-center px-8 py-5",
        isBrand
          ? "bg-brand-section"
          : "border-b border-secondary bg-primary",
        align === "center" ? "justify-center" : "justify-start",
      )}
    >
      <Logo height={28} invert={isBrand} />
    </div>
  );
};
