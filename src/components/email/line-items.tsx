import type { ReactNode } from "react";
import { cx } from "@/utils/cx";

export interface LineItem {
  label: ReactNode;
  /** Optional secondary line under the label (e.g. "9 holes × 2"). */
  sublabel?: ReactNode;
  /** Optional quantity, shown as "×N" next to the label. */
  qty?: number;
  amount: string;
  /** Render the amount as a credit/discount (de-emphasised). */
  muted?: boolean;
  /** Optional product thumbnail shown to the left of the label. */
  image?: string;
  imageAlt?: string;
}

export interface LineItemGroup {
  /** Group header, e.g. "Tee Time #28411". */
  heading?: ReactNode;
  /** Smaller line under the heading, e.g. "Sat May 9 · 8:42 AM". */
  subheading?: ReactNode;
  items: LineItem[];
}

interface ItemizedListProps {
  /** Either a flat list of items… */
  items?: LineItem[];
  /** …or grouped items (multi-tee-time orders, per-participant clinics). */
  groups?: LineItemGroup[];
  className?: string;
}

const Row = ({ item }: { item: LineItem }) => (
  <div className="flex items-center justify-between gap-4 py-2.5">
    <div className="flex min-w-0 items-center gap-3">
      {item.image ? (
        <img
          src={item.image}
          alt={item.imageAlt ?? ""}
          className="size-12 shrink-0 rounded-lg bg-secondary object-contain p-1 ring-1 ring-black/5"
        />
      ) : null}
      <div className="min-w-0">
        <p className="text-sm text-secondary">
          {item.label}
          {item.qty ? (
            <span className="text-tertiary"> ×{item.qty}</span>
          ) : null}
        </p>
        {item.sublabel ? (
          <p className="mt-0.5 text-xs text-tertiary">{item.sublabel}</p>
        ) : null}
      </div>
    </div>
    <span
      className={cx(
        "shrink-0 text-right text-sm font-medium",
        item.muted ? "text-tertiary" : "text-secondary",
      )}
    >
      {item.amount}
    </span>
  </div>
);

/**
 * Itemized purchase list for receipts, orders and event/clinic emails.
 * Pass `items` for a flat list or `groups` for sectioned line items
 * (multi-tee-time orders, per-participant breakdowns).
 */
export const ItemizedList = ({
  items,
  groups,
  className,
}: ItemizedListProps) => {
  if (groups?.length) {
    return (
      <div className={cx("flex flex-col", className)}>
        {groups.map((g, gi) => (
          <div
            key={gi}
            className={cx(gi > 0 && "mt-4 border-t border-secondary pt-4")}
          >
            {g.heading ? (
              <p className="text-sm font-semibold text-primary">{g.heading}</p>
            ) : null}
            {g.subheading ? (
              <p className="mt-0.5 text-xs text-tertiary">{g.subheading}</p>
            ) : null}
            <div className="mt-1 [&>*+*]:border-t [&>*+*]:border-secondary">
              {g.items.map((it, i) => (
                <Row key={i} item={it} />
              ))}
            </div>
          </div>
        ))}
      </div>
    );
  }

  return (
    <div className={cx("[&>*+*]:border-t [&>*+*]:border-secondary", className)}>
      {(items ?? []).map((it, i) => (
        <Row key={i} item={it} />
      ))}
    </div>
  );
};
