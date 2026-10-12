import type { Meta, StoryObj } from "@storybook/react-vite";
import { storeProducts } from "@/lib/store-catalog";
import { ProductGrid } from "./product-grid";

const meta = {
  title: "Email Components/Product Grid",
  component: ProductGrid,
  parameters: { layout: "centered" },
  decorators: [
    (Story) => (
      <div className="w-[600px] max-w-full bg-primary">
        <Story />
      </div>
    ),
  ],
} satisfies Meta<typeof ProductGrid>;

export default meta;
type Story = StoryObj<typeof meta>;

const items = storeProducts.slice(0, 6).map((p) => ({ title: p.title, src: p.src, price: "$49.99", href: "#" }));

/** Three-column product tiles. */
export const ThreeColumns: Story = { args: { items } };

/** Two-column layout used for featured items. */
export const TwoColumns: Story = { args: { items: items.slice(0, 4), columns: 2 } };
