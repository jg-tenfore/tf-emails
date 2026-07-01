import { Row, Column, Paragraph, ColumnLayouts } from "@unlayer/react-elements";
import { palette } from "@/unlayer/theme";

export interface BarcodeProps {
  /** Code value shown beneath the bars. */
  code: string;
  /** Small uppercase label above the barcode. */
  label?: string;
  /** Helper line beneath the code. */
  instructions?: string;
}

/** Email-safe striped barcode (repeating gradient), matching the Tailwind version. */
const BARS =
  "repeating-linear-gradient(90deg,#1d2939 0,#1d2939 2px,transparent 2px,transparent 4px,#1d2939 4px,#1d2939 5px,transparent 5px,transparent 8px)";

/**
 * Redeemable barcode box (offer code). Unlayer port of <RedemptionCode variant="barcode">.
 * Source: src/components/email/redemption-code.tsx
 *
 * Returns a single <Row> — call directly (not spread).
 */
export function Barcode({ code, label, instructions }: BarcodeProps) {
  const html =
    `<div style="border:1px solid ${palette.border};background:${palette.muted};border-radius:12px;padding:20px;text-align:center;">` +
    (label
      ? `<div style="font-size:12px;font-weight:700;text-transform:uppercase;letter-spacing:0.04em;color:${palette.textTertiary};margin:0 0 12px;">${label}</div>`
      : "") +
    `<div style="display:inline-block;background:#ffffff;border:1px solid rgba(0,0,0,0.05);border-radius:6px;padding:12px 16px;">` +
    `<div style="height:64px;width:224px;max-width:100%;background-image:${BARS};"></div>` +
    `</div>` +
    `<div style="margin:8px 0 0;font-family:monospace;font-size:14px;letter-spacing:0.3em;color:${palette.textSecondary};">${code}</div>` +
    (instructions
      ? `<div style="margin:8px 0 0;font-size:14px;color:${palette.textTertiary};">${instructions}</div>`
      : "") +
    `</div>`;
  return (
    <Row layout={ColumnLayouts.OneColumn} backgroundColor={palette.canvas} padding="0px">
      <Column backgroundColor={palette.white} padding="16px 32px 0px">
        <Paragraph html={html} />
      </Column>
    </Row>
  );
}
