import { Row, Column, Paragraph, Social, Menu, ColumnLayouts } from "@unlayer/react-elements";
import { palette } from "@/unlayer/theme";
import { brand } from "@/unlayer/content";

export interface FooterProps {
  /** Per-email context line, e.g. "You're receiving this because you joined …". */
  reason?: string;
  unsubscribeUrl?: string;
  /** "View in browser" link target. */
  viewInBrowserUrl?: string;
}

/** Generic template placeholders — a club drops in its own details. */
const PLACEHOLDER = {
  name: "Your Golf Course",
  address: "123 Fairway Drive, Anytown, ST 00000",
  phone: "(555) 555-0123",
};

/** The club's social channels, in display order (FB · IG · X). */
const SOCIAL_ORDER = ["Facebook", "Instagram", "Twitter"];

/**
 * Club-only footer — Unlayer port of <JarretteFooter>. A "reply or call" support
 * line, the course identity (name · address · phone), social channels, and the
 * view-in-browser / unsubscribe utility links. No TenFore platform branding.
 * Rows sit on the canvas with muted (#fafafa) Columns so the footer stays a
 * contained 600px card. Source: src/components/email/jarrette-footer.tsx
 */
export function Footer({ reason, unsubscribeUrl = "#", viewInBrowserUrl = "#" }: FooterProps) {
  const socials = SOCIAL_ORDER.map((n) => brand.social.find((s) => s.network === n)).filter(
    (s): s is (typeof brand.social)[number] => Boolean(s),
  );

  return [
    <Row key="footer-main" layout={ColumnLayouts.OneColumn} backgroundColor={palette.canvas} padding="0px">
      <Column backgroundColor={palette.muted} padding="28px 32px 4px">
        <Paragraph
          textAlign="center"
          html={
            `<div style="font-size:14px;color:${palette.textTertiary};">Questions? Just reply to this email or call the pro shop at <span style="color:${palette.textSecondary};font-weight:600;">${PLACEHOLDER.phone}</span>.</div>` +
            `<div style="width:100%;max-width:320px;height:1px;background:${palette.border};margin:22px auto;"></div>` +
            `<div style="font-size:16px;font-weight:600;color:${palette.textPrimary};">${PLACEHOLDER.name}</div>` +
            `<div style="margin-top:4px;font-size:14px;color:${palette.textTertiary};">${PLACEHOLDER.address} &bull; ${PLACEHOLDER.phone}</div>`
          }
        />
      </Column>
    </Row>,

    <Row key="footer-social" layout={ColumnLayouts.OneColumn} backgroundColor={palette.canvas} padding="0px">
      <Column backgroundColor={palette.muted} padding="12px 32px 4px">
        <Social
          align="center"
          iconType="rounded"
          icons={socials.map((s) => ({ name: s.network, url: s.href }))}
        />
      </Column>
    </Row>,

    <Row key="footer-legal" layout={ColumnLayouts.OneColumn} backgroundColor={palette.canvas} padding="0px">
      <Column backgroundColor={palette.muted} padding="8px 32px 28px">
        {reason ? (
          <Paragraph textAlign="center" color={palette.textQuaternary} fontSize="12px">
            {reason}
          </Paragraph>
        ) : null}
        <Menu
          align="center"
          linkColor={palette.textQuaternary}
          fontSize="12px"
          items={[
            { text: "View in browser", href: viewInBrowserUrl },
            { text: "Unsubscribe", href: unsubscribeUrl },
          ]}
        />
      </Column>
    </Row>,
  ];
}
