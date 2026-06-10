import type { ReactNode } from "react";
import { cx } from "@/utils/cx";

export interface DataColumn {
  key: string;
  header: ReactNode;
  align?: "left" | "right";
}

interface DataTableProps {
  columns: DataColumn[];
  rows: Array<Record<string, ReactNode>>;
  className?: string;
}

/**
 * Compact tabular layout for operator/internal reports
 * (balance warnings, ACH charge reports — many rows, no per-row CTA).
 */
export const DataTable = ({ columns, rows, className }: DataTableProps) => (
  <div
    className={cx(
      "overflow-hidden rounded-xl border border-secondary",
      className,
    )}
  >
    <table className="w-full border-collapse text-sm">
      <thead>
        <tr className="bg-secondary">
          {columns.map((c) => (
            <th
              key={c.key}
              className={cx(
                "px-4 py-2.5 text-xs font-semibold tracking-wide text-tertiary uppercase",
                c.align === "right" ? "text-right" : "text-left",
              )}
            >
              {c.header}
            </th>
          ))}
        </tr>
      </thead>
      <tbody className="[&>tr+tr]:border-t [&>tr+tr]:border-secondary">
        {rows.map((row, ri) => (
          <tr key={ri}>
            {columns.map((c) => (
              <td
                key={c.key}
                className={cx(
                  "px-4 py-2.5 text-secondary",
                  c.align === "right"
                    ? "text-right font-medium"
                    : "text-left",
                )}
              >
                {row[c.key]}
              </td>
            ))}
          </tr>
        ))}
      </tbody>
    </table>
  </div>
);
