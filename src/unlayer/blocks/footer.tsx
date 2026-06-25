import { Row, Column, Heading, Paragraph, Button, Social, Menu, Divider, ColumnLayouts } from "@unlayer/react-elements";
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
export function Footer({ reason, unsubscribeUrl = "#" }: FooterProps) {
  return [
    <Row key="identity" layout={ColumnLayouts.OneColumn} backgroundColor={palette.muted} padding="36px 32px 8px">
      <Column>
        <Heading headingType="h3" textAlign="center" color={palette.textPrimary} fontSize="14px" fontWeight={600}>
          {course.name}
        </Heading>
        <Paragraph textAlign="center" color={palette.textTertiary} fontSize="14px">
          {course.address}
        </Paragraph>
        <Divider width="48px" borderTopWidth="1px" borderTopColor={palette.border} borderTopStyle="solid" textAlign="center" />
        <Paragraph textAlign="center" color={palette.textSecondary} fontSize="14px" fontWeight={500}>
          {`Powered by ${brand.name}.`}
        </Paragraph>
        <Paragraph textAlign="center" color={palette.textTertiary} fontSize="14px">
          {brand.tagline}
        </Paragraph>
        <Paragraph textAlign="center" color={palette.textTertiary} fontSize="14px">
          {`${brand.addressLine1} · ${brand.addressLine2}`}
        </Paragraph>
        <Paragraph
          textAlign="center"
          fontSize="14px"
          html={`<a href="${brand.url}" style="color:${palette.brandDark};font-weight:500;text-decoration:none;">${brand.domain}</a>`}
        />
      </Column>
    </Row>,

    <Row key="contact" layout={ColumnLayouts.TwoEqual} backgroundColor={palette.muted} padding="12px 32px">
      <Column padding="4px">
        <Button href={brand.salesUrl} backgroundColor={palette.white} color={palette.brandDark} fontSize="14px" fontWeight={600} borderRadius="8px" textAlign="center" width="100%" padding="10px 16px">
          Sales Inquiry
        </Button>
      </Column>
      <Column padding="4px">
        <Button href={brand.supportUrl} backgroundColor={palette.white} color={palette.textSecondary} fontSize="14px" fontWeight={600} borderRadius="8px" textAlign="center" width="100%" padding="10px 16px">
          Customer Support
        </Button>
      </Column>
    </Row>,

    <Row key="social" layout={ColumnLayouts.OneColumn} backgroundColor={palette.muted} padding="12px 32px 4px">
      <Column>
        <Social
          align="center"
          iconType="rounded"
          icons={brand.social.map((s) => ({ name: s.network, url: s.href }))}
        />
      </Column>
    </Row>,

    <Row key="legal" layout={ColumnLayouts.OneColumn} backgroundColor={palette.muted} padding="8px 32px 36px">
      <Column>
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
