import { ArrowRight, ShoppingBag03, Tag01 } from "@untitledui/icons";
import {
  BrandStrip,
  Callout,
  CTAButton,
  EmailHero,
  EmailSection,
  EmailShell,
  BuckFooter,
  BuckHeader,
  ProductGrid,
  type ProductGridItem,
  SectionHeading,
} from "@/components/email";
import { assets } from "@/lib/assets";
import { course, golfer } from "@/lib/scenario";
import { marketingHeroes } from "@/lib/marketing-images";
import { productsByCategory } from "@/lib/store-catalog";

export interface GolfShopInsiderProps {
  firstName?: string;
  shopUrl?: string;
  /** This-week discount, e.g. "10%". */
  discount?: string;
  /** Promo code shown for checkout. */
  discountCode?: string;
}

const training = productsByCategory("equipment", "accessories-and-training");
/** Featured merchandise across four categories — men's, women's, balls, and tech. */
const featured: ProductGridItem[] = [
  { ...productsByCategory("apparel", "mens", 1)[0], price: "$85.00" },
  { ...productsByCategory("apparel", "womens", 1)[0], price: "$98.00" },
  { ...productsByCategory("equipment", "golf-balls", 1)[0], price: "$54.99" },
  { ...training[2], price: "$199.99" }, // Approach S44 GPS Watch — the surprise pick
];

/**
 * Marketing Buck — Golf Shop Insider. Highlights new merchandise with real
 * product photography, a "Shop by Brand" strip, and a spend-threshold incentive
 * to lift average order value.
 */
export const GolfShopInsider = ({
  firstName = golfer.firstName,
  shopUrl = "https://www.sagamoregolf.com/shop",
  discount = "10%",
  discountCode = "SHOP10",
}: GolfShopInsiderProps) => {
  return (
    <EmailShell preheader={`New gear just landed — ${discount} off select items this week with code ${discountCode}.`}>
      <BuckHeader />

      <EmailHero
        imageUrl={marketingHeroes.proShop.src}
        imageAlt={marketingHeroes.proShop.alt}
        logoUrl={assets.logo.src}
        logoAlt={course.name}
        eyebrow="Golf shop insider"
        headline="New gear just landed"
      />

      <EmailSection padding="lg">
        <p className="text-md text-secondary">
          Hi {firstName}, the latest gear is in the shop now — apparel for him and
          her, fresh balls, and a little tech to sharpen your game. Quantities are
          limited.
        </p>

        <SectionHeading
          className="mt-6"
          title="Just in"
          description="Fresh picks for him, for her, on the green, and on your wrist."
        />
        <ProductGrid className="mt-4" columns={2} items={featured} />

        <Callout className="mt-6" tone="success" eyebrow="This week only" icon={Tag01}>
          Take {discount} off select items all week — online or in the shop. Use
          the code below at checkout.
        </Callout>

        <div className="mt-4 rounded-xl border border-secondary bg-secondary px-5 py-5 text-center">
          <p className="text-xs font-semibold tracking-wide text-tertiary uppercase">
            {discount} off selected items
          </p>
          <p className="mt-2 inline-block rounded-lg border border-dashed border-brand bg-primary px-5 py-2 font-mono text-lg font-bold tracking-[0.25em] text-brand-secondary">
            {discountCode}
          </p>
          <p className="mt-2 text-sm text-tertiary">
            Use at checkout online or show this email in the shop. Ends Sunday.
          </p>
        </div>

        <div className="mt-8">
          <CTAButton href={shopUrl} size="lg" fullWidth iconLeading={ShoppingBag03} iconTrailing={ArrowRight}>
            Shop New Arrivals
          </CTAButton>
        </div>
      </EmailSection>

      <EmailSection padding="md">
        <BrandStrip />
      </EmailSection>

      <BuckFooter reason="You're receiving this because you're a golfer at Sagamore Spring Golf Club." />
    </EmailShell>
  );
};
