import { Row, Column, Paragraph, ColumnLayouts } from "@unlayer/react-elements";
import { palette, calloutTones, type CalloutTone } from "@/unlayer/theme";

export interface CalloutProps {
  /** Tone color of the box + eyebrow. Default "info". */
  tone?: CalloutTone;
  /** Small uppercase label above the body. */
  eyebrow?: string;
  /** Optional leading glyph (the Tailwind version uses an icon). */
  emoji?: string;
  /** Body copy. */
  body: string;
}

/**
 * Tone-colored callout box (offer / note). Unlayer port of <Callout>.
 * Source: src/components/email/callout.tsx
 *
 * Returns a single <Row> — call it directly (not spread) in the Email children.
 */
export function Callout({ tone = "info", eyebrow, emoji, body }: CalloutProps) {
  const t = calloutTones[tone];
  const eyebrowHtml = eyebrow
    ? `<span style="display:block;font-size:12px;font-weight:700;letter-spacing:0.04em;text-transform:uppercase;color:${t.eyebrow};margin:0 0 6px;">${emoji ? `${emoji} ` : ""}${eyebrow}</span>`
    : "";
  return (
    <Row layout={ColumnLayouts.OneColumn} backgroundColor={palette.white} padding="24px 32px 0px">
      <Column backgroundColor={t.box} padding="16px 20px">
        <Paragraph
          html={`${eyebrowHtml}<span style="font-size:14px;line-height:1.5;color:${palette.textSecondary};">${body}</span>`}
        />
      </Column>
    </Row>
  );
}
