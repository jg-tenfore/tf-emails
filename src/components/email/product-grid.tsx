import { cx } from "@/utils/cx";

export interface ProductGridItem {
  title: string;
  /** Optional price label, e.g. "$54.99". */
  price?: string;
  /** Product image URL. */
  src: string;
  imageAlt?: string;
  /** Optional per-product link. */
  href?: string;
}

interface ProductGridProps {
  items: ProductGridItem[];
  /** Columns at sm and up (default 3). Use 2 for a 2-up or 2×2 layout. */
  columns?: 2 | 3;
  className?: string;
}

/**
 * Product cards for merchandise emails. Product photos sit on a white tile
 * (object-contain so nothing is cropped) with the name and price beneath. Cards
 * lay out in a responsive grid — single column on mobile, `columns` at sm+.
 */
export const ProductGrid = ({ items, columns = 3, className }: ProductGridProps) => (
  <div
    className={cx(
      "grid grid-cols-1 gap-4",
      columns === 2 ? "sm:grid-cols-2" : "sm:grid-cols-3",
      className,
    )}
  >
    {items.map((p) => {
      const card = (
        <>
          <img
            src={p.src}
            alt={p.imageAlt ?? p.title}
            className="block aspect-square w-full bg-white object-contain p-3"
          />
          <div className="px-4 py-3">
            <p className="text-sm font-semibold text-primary">{p.title}</p>
            {p.price ? <p className="mt-0.5 text-sm text-tertiary">{p.price}</p> : null}
          </div>
        </>
      );
      return p.href ? (
        <a
          key={p.title}
          href={p.href}
          className="overflow-hidden rounded-xl no-underline ring-1 ring-secondary"
        >
          {card}
        </a>
      ) : (
        <div key={p.title} className="overflow-hidden rounded-xl ring-1 ring-secondary">
          {card}
        </div>
      );
    })}
  </div>
);
