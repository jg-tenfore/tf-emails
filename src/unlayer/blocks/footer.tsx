import { Row, Column, Paragraph, Button, Social, Menu, ColumnLayouts } from "@unlayer/react-elements";
import { palette } from "@/unlayer/theme";
import { brand, course } from "@/unlayer/content";

export interface FooterProps {
  /** Per-email context line, e.g. "You're receiving this because you joined …". */
  reason?: string;
  unsubscribeUrl?: string;
}

/**
 * Brand footer — Unlayer port of <JarretteFooter>. Club identity, the TenFore
 * platform block, contact buttons, social icons, and legal lines.
 * Source: src/components/email/jarrette-footer.tsx
 */
/** 1px border for the white footer buttons. */
const contactBtnBorder = {
  borderTopColor: palette.border, borderTopStyle: "solid", borderTopWidth: "1px" as const,
  borderRightColor: palette.border, borderRightStyle: "solid", borderRightWidth: "1px" as const,
  borderBottomColor: palette.border, borderBottomStyle: "solid", borderBottomWidth: "1px" as const,
  borderLeftColor: palette.border, borderLeftStyle: "solid", borderLeftWidth: "1px" as const,
};

export function Footer({ reason, unsubscribeUrl = "#" }: FooterProps) {
  return [
    <Row key="identity" layout={ColumnLayouts.OneColumn} backgroundColor={palette.canvas} padding="0px">
      <Column backgroundColor={palette.muted} padding="28px 32px 4px">
        <Paragraph
          textAlign="center"
          html={
            `<div style="font-size:14px;font-weight:600;color:${palette.textPrimary};">${course.name}</div>` +
            `<div style="margin-top:2px;font-size:14px;color:${palette.textTertiary};">${course.address}</div>` +
            `<div style="width:48px;height:1px;background:${palette.border};margin:14px auto;"></div>` +
            `<div style="font-size:14px;font-weight:500;color:${palette.textSecondary};">Powered by ${brand.name}.</div>` +
            `<div style="margin:8px auto 0;max-width:420px;font-size:14px;line-height:1.5;color:${palette.textTertiary};">${brand.tagline}</div>` +
            `<div style="margin-top:8px;font-size:14px;color:${palette.textTertiary};">${brand.addressLine1} · ${brand.addressLine2}</div>` +
            `<div style="margin-top:2px;"><a href="${brand.url}" style="font-size:14px;color:${palette.brandDark};font-weight:500;text-decoration:none;">${brand.domain}</a></div>`
          }
        />
      </Column>
    </Row>,

    <Row key="contact" layout={ColumnLayouts.TwoEqual} backgroundColor={palette.canvas} padding="0px 0px">
      <Column backgroundColor={palette.muted} padding="12px 6px 8px 64px">
        <Button href={brand.salesUrl} backgroundColor={palette.white} color={palette.brandDark} border={contactBtnBorder} fontSize="14px" fontWeight={600} borderRadius="8px" textAlign="center" width="100%" padding="10px 16px">
          Sales Inquiry
        </Button>
      </Column>
      <Column backgroundColor={palette.muted} padding="12px 64px 8px 6px">
        <Button href={brand.supportUrl} backgroundColor={palette.white} color={palette.textSecondary} border={contactBtnBorder} fontSize="14px" fontWeight={600} borderRadius="8px" textAlign="center" width="100%" padding="10px 16px">
          Customer Support
        </Button>
      </Column>
    </Row>,

    <Row key="social" layout={ColumnLayouts.OneColumn} backgroundColor={palette.canvas} padding="0px">
      <Column backgroundColor={palette.muted} padding="12px 32px 4px">
        <Social
          align="center"
          iconType="rounded"
          icons={brand.social.map((s) => ({ name: s.network, url: s.href }))}
        />
      </Column>
    </Row>,

    <Row key="legal" layout={ColumnLayouts.OneColumn} backgroundColor={palette.canvas} padding="0px">
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
            { text: "Terms of Service", href: brand.termsUrl },
            { text: "Privacy", href: brand.privacyUrl },
            { text: "Unsubscribe", href: unsubscribeUrl },
          ]}
        />
        <Paragraph textAlign="center" color={palette.textQuaternary} fontSize="12px">
          {`© 2026 ${brand.legalName}. All rights reserved.`}
        </Paragraph>
      </Column>
    </Row>,
  ];
}
