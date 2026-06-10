import { Badge } from "@/components/base/badges/badges";

export type PaymentStatus =
  | "paid"
  | "paid-in-full"
  | "amount-due"
  | "refund"
  | "pending";

const config: Record<
  PaymentStatus,
  { label: string; color: "success" | "warning" | "gray" | "blue" }
> = {
  paid: { label: "Paid", color: "success" },
  "paid-in-full": { label: "Paid in full", color: "success" },
  "amount-due": { label: "Amount due", color: "warning" },
  refund: { label: "Refund", color: "blue" },
  pending: { label: "Pending", color: "gray" },
};

interface StatusBadgeProps {
  status: PaymentStatus;
  /** Override the default label (e.g. "Refunded"). */
  label?: string;
  size?: "sm" | "md" | "lg";
}

/** Small payment-state pill (Paid / Amount due / Refund …) for summary cards. */
export const StatusBadge = ({
  status,
  label,
  size = "md",
}: StatusBadgeProps) => {
  const c = config[status];
  return (
    <Badge type="pill-color" color={c.color} size={size}>
      {label ?? c.label}
    </Badge>
  );
};
