import { cx } from "@/utils/cx";
import adminLogoUrl from "@/assets/tf-admin.svg";
import { Logo } from "./logo";

interface EmailHeaderProps {
  /**
   * Which TenFore mark to show. "platform" (default) for customer emails,
   * "admin" for operator/internal emails. The header always stays a TenFore
   * platform mark — the partner venue is identified in the body, never here.
   */
  variant?: "platform" | "admin";
  /** Hairline under the header. Defaults to true; set false to butt the header against a full-bleed hero. */
  bordered?: boolean;
}

/**
 * Email header: a centered TenFore mark on a white bar. Customer emails use the
 * platform logo; operator/internal (Admin) emails pass `variant="admin"`.
 */
export const EmailHeader = ({
  variant = "platform",
  bordered = true,
}: EmailHeaderProps) => {
  return (
    <div
      className={cx(
        "flex items-center justify-center bg-primary px-8 py-5",
        bordered && "border-b border-secondary",
      )}
    >
      {variant === "admin" ? (
        <img
          src={adminLogoUrl}
          alt="TenFore Golf Admin"
          style={{ width: 168 }}
          className="h-auto"
        />
      ) : (
        <Logo width={160} />
      )}
    </div>
  );
};
