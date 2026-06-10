import { AlertTriangle } from "@untitledui/icons";
import {
  Callout,
  DataTable,
  EmailFooter,
  EmailHeader,
  EmailSection,
  EmailShell,
  StatusHero,
} from "@/components/email";
import {
  type BalanceReport,
  balanceReport as defaultReport,
  course,
} from "@/lib/scenario";

export interface BalanceWarningProps {
  report?: BalanceReport;
}

/**
 * Operator-facing AR report: lists customers carrying outstanding balances so
 * staff can follow up on collections. Recurring; no call-to-action.
 */
export const BalanceWarning = ({
  report = defaultReport,
}: BalanceWarningProps) => {
  return (
    <EmailShell
      preheader={`${report.count} customers carrying ${report.totalOutstanding} in outstanding balances.`}
    >
      <EmailHeader variant="admin" />

      <StatusHero
        eyebrow={course.name}
        title="Customer balance warning"
        subtitle={`As of ${report.asOf}`}
      />

      <EmailSection padding="md">
        <Callout tone="warning" eyebrow="Outstanding balances" icon={AlertTriangle}>
          {report.count} customers are carrying a combined{" "}
          <span className="font-semibold text-primary">
            {report.totalOutstanding}
          </span>{" "}
          in outstanding balances. Review and follow up below.
        </Callout>
      </EmailSection>

      <EmailSection padding="md">
        <DataTable
          columns={[
            { key: "customer", header: "Customer" },
            { key: "email", header: "Email" },
            { key: "balance", header: "Balance", align: "right" },
          ]}
          rows={report.rows.map((r) => ({
            customer: r.customer,
            email: r.email,
            balance: (
              <span className="font-semibold text-error-primary">
                {r.balance}
              </span>
            ),
          }))}
        />
      </EmailSection>

      <EmailFooter
        reason={`Recurring accounts-receivable report for ${course.name}, sent to course staff.`}
      />
    </EmailShell>
  );
};
