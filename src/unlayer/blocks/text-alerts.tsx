import { Row, Column, Paragraph, ColumnLayouts } from "@unlayer/react-elements";
import { palette } from "@/unlayer/theme";

export interface TextAlertsProps {
  href: string;
  prompt?: string;
  label?: string;
}

/**
 * SMS opt-in line. Unlayer port of <TextAlertsOptIn> — a centered sentence with
 * an inline link (email-safe).
 * Source: src/components/email/text-alerts.tsx
 */
export function TextAlerts({
  href,
  prompt = "Get text alerts for open tee times.",
  label = "Sign up",
}: TextAlertsProps) {
  const html = `${prompt} <a href="${href}" style="color:${palette.brandDark};font-weight:600;text-decoration:underline;">${label}</a>`;
  return (
    <Row layout={ColumnLayouts.OneColumn} backgroundColor={palette.white} padding="0px 32px 8px">
      <Column>
        <Paragraph textAlign="center" color={palette.textTertiary} fontSize="14px" html={html} />
      </Column>
    </Row>
  );
}
