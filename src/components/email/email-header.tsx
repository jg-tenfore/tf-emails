import adminLogoUrl from "@/assets/tf-admin.svg";
import { Logo } from "./logo";

interface EmailHeaderProps {
  /**
   * Which TenFore mark to show. "platform" (default) for customer emails,
   * "admin" for operator/internal emails. The header always stays a TenFore
   * platform mark — the partner venue is identified in the body, never here.
   */
  variant?: "platform" | "admin";
}

/**
 * Email header: a centered TenFore mark on a white bar. Customer emails use the
 * platform logo; operator/internal (Admin) emails pass `variant="admin"`.
 */
export const EmailHeader = ({ variant = "platform" }: EmailHeaderProps) => {
  return (
    <div className="flex items-center justify-center border-b border-secondary bg-primary px-8 py-5">
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
