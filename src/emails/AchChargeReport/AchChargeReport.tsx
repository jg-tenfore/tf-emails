import {
  Callout,
  DataTable,
  Divider,
  EmailFooter,
  EmailHeader,
  EmailSection,
  EmailShell,
  SectionHeading,
  StatusHero,
} from "@/components/email";
import { type AchReport, achReport as defaultReport } from "@/lib/scenario";

export interface AchChargeReportProps {
  report?: AchReport;
}

/**
 * TenFore-internal: a cross-course ACH charge run reported to platform staff.
 * Multi-tenant (one section per course) with grand totals; no call-to-action.
 */
export const AchChargeReport = ({
  report = defaultReport,
}: AchChargeReportProps) => {
  return (
    <EmailShell
      preheader={`ACH charge report — ${report.collected} collected across ${report.courses.length} courses.`}
    >
      <EmailHeader variant="admin" />

      <StatusHero
        eyebrow="TenFore"
        title="ACH charge report"
        subtitle={`As of ${report.asOf}`}
      />

      <EmailSection padding="md">
        <Callout tone="info" eyebrow="Grand totals">
          <span className="block">
            {report.attempted} attempted · {report.succeeded} succeeded ·{" "}
            {report.declined} declined · {report.recorded} recorded
          </span>
          <span className="mt-1 block">
            Pre-tax {report.preTax} · Tax {report.tax} ·{" "}
            <span className="font-semibold text-primary">
              {report.collected} collected
            </span>
          </span>
        </Callout>
      </EmailSection>

      {report.courses.map((c, i) => (
        <div key={c.name}>
          {i > 0 ? <Divider /> : null}
          <EmailSection padding="md">
            <SectionHeading title={c.name} description={c.tally} />
            <DataTable
              className="mt-4"
              columns={[
                { key: "range", header: "Period" },
                { key: "preTax", header: "Pre-tax", align: "right" },
                { key: "tax", header: "Tax", align: "right" },
                { key: "collected", header: "Collected", align: "right" },
                { key: "status", header: "Status", align: "right" },
              ]}
              rows={c.rows.map((r) => ({
                range: r.range,
                preTax: r.preTax,
                tax: r.tax,
                collected: r.collected,
                status: (
                  <span
                    className={
                      r.status === "Succeeded"
                        ? "font-medium text-success-primary"
                        : "font-medium text-error-primary"
                    }
                  >
                    {r.status}
                  </span>
                ),
              }))}
            />
          </EmailSection>
        </div>
      ))}

      <EmailFooter reason="Internal TenFore ACH charge report, sent to platform finance staff." />
    </EmailShell>
  );
};
