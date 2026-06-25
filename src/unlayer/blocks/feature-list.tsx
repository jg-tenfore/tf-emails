import { Row, Column, Paragraph, ColumnLayouts } from "@unlayer/react-elements";
import { palette } from "@/unlayer/theme";
import { featureIcons } from "@/unlayer/icons";

export interface FeatureItem {
  /** Explicit @untitledui icon registry key (e.g. "Calendar"). */
  icon?: string;
  /** Hosted icon image (PNG/GIF/JPG) — takes precedence after `icon`. */
  iconUrl?: string;
  /** Fallback glyph; also auto-mapped to a real line icon when recognised. */
  emoji?: string;
  title: string;
  body: string;
}

/** Map the emoji used in the source emails to the real @untitledui line icon. */
const EMOJI_TO_ICON: Record<string, string> = {
  "📅": "Calendar", "🛍️": "ShoppingBag03", "🏆": "Trophy01", "👥": "Users01",
  "☀️": "Sun", "⛳": "Flag01", "🪙": "CoinsStacked01", "❤️": "Heart",
  "⭐": "Star01", "🎁": "Gift01", "⏰": "Clock", "🏷️": "Tag01",
  "🌇": "SunSetting03", "🔧": "Tool02", "🎯": "Target04", "⚡": "Zap",
  "✅": "CheckCircle", "💧": "Droplets01", "🤝": "HeartHand",
};

function chipInner(item: FeatureItem): string {
  const key = item.icon ?? (item.emoji ? EMOJI_TO_ICON[item.emoji] : undefined);
  if (key && featureIcons[key]) {
    return `<span style="display:inline-block;vertical-align:middle;color:${palette.brandDark};">${featureIcons[key]}</span>`;
  }
  if (item.iconUrl) {
    return `<img src="${item.iconUrl}" width="20" height="20" alt="" style="vertical-align:middle;" />`;
  }
  return `<span style="vertical-align:middle;font-size:18px;">${item.emoji ?? "•"}</span>`;
}

/**
 * Single feature row — small tinted icon chip on the left, title + body on the
 * right. Built as an email-safe HTML mini-table so the chip stays compact (40px)
 * and the real line icon sits centered, matching the Tailwind <FeatureList>.
 * Source: src/components/email/{feature-list,icon-badge}.tsx
 */
export function Feature(item: FeatureItem) {
  const html =
    `<table role="presentation" width="100%" style="border-collapse:collapse;"><tr>` +
    `<td valign="top" width="40" style="width:40px;">` +
    `<div style="width:40px;height:40px;background:${palette.brandTint};border-radius:8px;text-align:center;line-height:40px;">${chipInner(item)}</div>` +
    `</td>` +
    `<td valign="top" style="padding-left:12px;">` +
    `<div style="font-size:14px;font-weight:600;color:${palette.textPrimary};">${item.title}</div>` +
    `<div style="margin-top:2px;font-size:14px;line-height:1.5;color:${palette.textTertiary};">${item.body}</div>` +
    `</td>` +
    `</tr></table>`;
  return (
    <Row layout={ColumnLayouts.OneColumn} backgroundColor={palette.white} padding="8px 32px">
      <Column>
        <Paragraph html={html} />
      </Column>
    </Row>
  );
}

/** Vertical stack of Feature rows (array of literal <Row>s). */
export function FeatureList({ items }: { items: FeatureItem[] }) {
  return items.map((item) => Feature(item));
}
