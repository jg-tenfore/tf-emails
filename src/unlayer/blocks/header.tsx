import { Row, Column, Image, Heading, Paragraph, ColumnLayouts } from "@unlayer/react-elements";
import { palette } from "@/unlayer/theme";
import { logo, course } from "@/unlayer/content";

/**
 * Brand header — Unlayer port of <JarretteHeader>. Centered club logo over the
 * club name + address on a white background.
 * Source: src/components/email/jarrette-header.tsx
 */
export function Header() {
  return (
    <Row layout={ColumnLayouts.OneColumn} backgroundColor={palette.white} padding="24px 32px">
      <Column>
        <Image src={{ url: logo.src, width: 56 }} alt={logo.alt} textAlign="center" />
        <Heading headingType="h1" textAlign="center" color={palette.textPrimary} fontSize="16px" fontWeight={600}>
          {course.name}
        </Heading>
        <Paragraph textAlign="center" color={palette.textTertiary} fontSize="14px">
          {course.address}
        </Paragraph>
      </Column>
    </Row>
  );
}
