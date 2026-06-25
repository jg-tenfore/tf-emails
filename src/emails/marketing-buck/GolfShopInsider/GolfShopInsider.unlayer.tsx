import { Email, Row, Column, Paragraph, Divider, ColumnLayouts } from "@unlayer/react-elements";
import { Header, Hero, Cta, Footer, Callout, SectionHeading, ProductGrid, BrandStrip } from "@/unlayer/blocks";
import type { ProductCard } from "@/unlayer/blocks";
import { palette, contentWidth } from "@/unlayer/theme";
import { heroes, course, products, brandLogos, mergeTags } from "@/unlayer/content";

export interface GolfShopInsiderUnlayerProps {
  firstName?: string;
  shopUrl?: string;
  discount?: string;
  discountCode?: string;
}

const featured: ProductCard[] = [
  products.mensPolo,
  products.womensDress,
  products.golfBalls,
  products.gpsWatch,
];

/**
 * Marketing Buck — Golf Shop Insider, rebuilt with Unlayer Elements.
 * Source: ./GolfShopInsider.tsx
 */
export function GolfShopInsiderUnlayer({
  firstName = mergeTags.firstName,
  shopUrl = "https://www.sagamoregolf.com/shop",
  discount = "10%",
  discountCode = "SHOP10",
}: GolfShopInsiderUnlayerProps = {}) {
  const intro = (
    <Row key="intro" layout={ColumnLayouts.OneColumn} backgroundColor={palette.white} padding="24px 32px 8px">
      <Column>
        <Paragraph color={palette.textSecondary} fontSize="16px" lineHeight="160%">
          Hi {firstName}, the latest gear is in the shop now — apparel for him and her, fresh balls,
          and a little tech to sharpen your game. Quantities are limited.
        </Paragraph>
      </Column>
    </Row>
  );

  const promo = (
    <Row key="promo" layout={ColumnLayouts.OneColumn} backgroundColor={palette.white} padding="16px 32px 0px">
      <Column>
        <Paragraph
          html={
            `<div style="border:1px solid ${palette.border};background:${palette.muted};border-radius:12px;padding:20px;text-align:center;">` +
            `<div style="font-size:12px;font-weight:700;text-transform:uppercase;letter-spacing:0.04em;color:${palette.textTertiary};">${discount} off selected items</div>` +
            `<div style="display:inline-block;margin:10px 0 0;border:1px dashed ${palette.brandDark};background:#ffffff;border-radius:8px;padding:8px 20px;font-family:monospace;font-size:18px;font-weight:700;letter-spacing:0.25em;color:${palette.brandDark};">${discountCode}</div>` +
            `<div style="margin:10px 0 0;font-size:14px;color:${palette.textTertiary};">Use at checkout online or show this email in the shop. Ends Sunday.</div>` +
            `</div>`
          }
        />
      </Column>
    </Row>
  );

  const divider = (
    <Row key="divider" layout={ColumnLayouts.OneColumn} backgroundColor={palette.white} padding="0px 32px">
      <Column>
        <Divider borderTopWidth="1px" borderTopColor={palette.border} borderTopStyle="solid" width="100%" />
      </Column>
    </Row>
  );

  const support = (
    <Row key="support" layout={ColumnLayouts.OneColumn} backgroundColor={palette.muted} padding="20px 32px">
      <Column>
        <Paragraph
          textAlign="center"
          color={palette.textTertiary}
          fontSize="14px"
          html={`Stop by the pro shop or call <span style="color:${palette.textSecondary};font-weight:500;">${course.phone}</span> to check availability.`}
        />
      </Column>
    </Row>
  );

  const rows = [
    ...Header(),
    ...Hero({ imageUrl: heroes.proShop.src, imageAlt: heroes.proShop.alt, eyebrow: "Golf shop insider", headline: "New gear just landed" }),
    intro,
    SectionHeading({ title: "Just in", description: "Fresh picks for him, for her, on the green, and on your wrist." }),
    ...ProductGrid({ items: featured, columns: 2 }),
    Callout({ tone: "success", eyebrow: "This week only", emoji: "🏷️", body: "Take " + discount + " off select items all week — online or in the shop. Use the code below at checkout." }),
    promo,
    Cta({ href: shopUrl, label: "Shop New Arrivals" }),
    ...BrandStrip({ label: "Shop your favorite brands", logos: brandLogos }),
    divider,
    support,
    ...Footer({ reason: "You're receiving this because you're a golfer at Sagamore Spring Golf Club." }),
  ];

  return (
    <Email
      backgroundColor={palette.canvas}
      contentWidth={contentWidth}
      previewText={`New gear just landed — ${discount} off select items this week with code ${discountCode}.`}
    >
      {rows}
    </Email>
  );
}
