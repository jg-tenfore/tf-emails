import { Row, Column, Paragraph, ColumnLayouts } from "@unlayer/react-elements";
import { palette } from "@/unlayer/theme";
import { imageUrl } from "@/unlayer/content";
import { featureIcons } from "@/unlayer/icons";

export interface FeatureItem {
  /** Explicit @untitledui icon registry key (e.g. "Calendar"). */
  icon?: string;
  /** Hosted icon image — takes precedence after `icon`. */
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

/**
 * The icon chip — a flattened 40×40 PNG (tinted box + centered line icon),
 * pre-rendered by scripts/gen-unlayer-icon-pngs.mjs. A single image keeps it
 * perfectly centered and email-safe (works in Outlook); falls back to an emoji
 * chip if the icon isn't recognised.
 */
function chipHtml(item: FeatureItem): string {
  const key = item.icon ?? (item.emoji ? EMOJI_TO_ICON[item.emoji] : undefined);
  if (key && featureIcons[key]) {
    return `<img src="${imageUrl(`marketing-images/icons/${key}.png`)}" width="40" height="40" alt="" style="display:block;border:0;outline:none;" />`;
  }
  if (item.iconUrl) {
    return `<img src="${item.iconUrl}" width="40" height="40" alt="" style="display:block;border:0;outline:none;" />`;
  }
  return `<div style="width:40px;height:40px;background:${palette.brandTint};border-radius:8px;text-align:center;line-height:40px;font-size:18px;">${item.emoji ?? "•"}</div>`;
}

/**
 * Single feature row — icon chip on the left, title + body on the right.
 * Email-safe HTML mini-table. Source: src/components/email/{feature-list,icon-badge}.tsx
 */
export function Feature(item: FeatureItem) {
  const html =
    `<table role="presentation" width="100%" style="border-collapse:collapse;"><tr>` +
    `<td valign="top" width="40" style="width:40px;">${chipHtml(item)}</td>` +
    `<td valign="top" style="padding-left:12px;">` +
    `<div style="font-size:14px;font-weight:600;color:${palette.textPrimary};">${item.title}</div>` +
    `<div style="margin-top:2px;font-size:14px;line-height:1.5;color:${palette.textTertiary};">${item.body}</div>` +
    `</td>` +
    `</tr></table>`;
  return (
    <Row layout={ColumnLayouts.OneColumn} backgroundColor={palette.canvas} padding="0px">
      <Column backgroundColor={palette.white} padding="8px 32px">
        <Paragraph html={html} />
      </Column>
    </Row>
  );
}

/** Vertical stack of Feature rows (array of literal <Row>s). */
export function FeatureList({ items }: { items: FeatureItem[] }) {
  return items.map((item) => Feature(item));
}
