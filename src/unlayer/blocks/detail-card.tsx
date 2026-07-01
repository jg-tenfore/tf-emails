import { Row, Column, Paragraph, ColumnLayouts } from "@unlayer/react-elements";
import { palette } from "@/unlayer/theme";

export interface DetailItem {
  label: string;
  value: string;
  /** Optional leading glyph on the label (the Tailwind version uses an icon). */
  emoji?: string;
  /** Emphasise the value (e.g. totals). */
  emphasis?: boolean;
}

export interface DetailCardProps {
  rows: DetailItem[];
}

/**
 * Bordered label/value summary card. Unlayer port of <DetailCard> + <DetailRow>.
 * Built as an email-safe HTML table (tables are the reliable email primitive for
 * bordered, separated rows). Source: src/components/email/{detail-card,detail-row}.tsx
 *
 * Returns a single <Row> — call directly (not spread).
 */
export function DetailCard({ rows }: DetailCardProps) {
  const trs = rows
    .map((r, i) => {
      const bt = i === 0 ? "" : `border-top:1px solid ${palette.border};`;
      const label = `${r.emoji ? `${r.emoji} ` : ""}${r.label}`;
      const valStyle = r.emphasis
        ? `font-size:16px;font-weight:600;color:${palette.textPrimary};`
        : `font-size:14px;font-weight:500;color:${palette.textSecondary};`;
      return (
        `<tr>` +
        `<td style="padding:11px 20px;${bt}font-size:14px;color:${palette.textTertiary};">${label}</td>` +
        `<td style="padding:11px 20px;${bt}text-align:right;${valStyle}">${r.value}</td>` +
        `</tr>`
      );
    })
    .join("");
  const table = `<table role="presentation" width="100%" style="border-collapse:collapse;border:1px solid ${palette.border};border-radius:12px;"><tbody>${trs}</tbody></table>`;
  return (
    <Row layout={ColumnLayouts.OneColumn} backgroundColor={palette.white} padding="16px 32px 0px">
      <Column>
        <Paragraph html={table} />
      </Column>
    </Row>
  );
}
