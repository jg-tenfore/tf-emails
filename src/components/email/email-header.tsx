import { Flag02 } from "@untitledui/icons";
import { cx } from "@/utils/cx";
import { brand } from "@/lib/brand";

interface EmailHeaderProps {
  /** "brand" = dark green bar, "light" = white bar with green wordmark. */
  variant?: "brand" | "light";
  align?: "left" | "center";
}

/** Tenfore Golf wordmark bar that opens every email. */
export const EmailHeader = ({
  variant = "brand",
  align = "center",
}: EmailHeaderProps) => {
  const isBrand = variant === "brand";
  return (
    <div
      className={cx(
        "flex items-center gap-2.5 px-8 py-5",
        isBrand ? "bg-brand-section" : "bg-primary border-b border-secondary",
        align === "center" ? "justify-center" : "justify-start",
      )}
    >
      <span
        className={cx(
          "flex size-8 items-center justify-center rounded-full",
          isBrand ? "bg-white/10 text-white" : "bg-brand-primary text-brand-secondary",
        )}
      >
        <Flag02 className="size-4.5" />
      </span>
      <span
        className={cx(
          "text-lg font-bold tracking-tight",
          isBrand ? "text-white" : "text-primary",
        )}
      >
        {brand.name}
      </span>
    </div>
  );
};
