import type { Meta, StoryObj } from "@storybook/react-vite";
import chipsImg from "@/assets/store/chips.png";
import gloveImg from "@/assets/store/glove.png";
import proV1Img from "@/assets/store/pro-v1.png";
import teesImg from "@/assets/store/tees.png";
import { ItemizedList } from "./line-items";

const meta = {
  title: "Email Components/Itemized List",
  component: ItemizedList,
  parameters: { layout: "centered" },
  decorators: [
    (Story) => (
      <div className="w-[480px] max-w-full rounded-xl border border-secondary bg-primary px-5 py-2">
        <Story />
      </div>
    ),
  ],
} satisfies Meta<typeof ItemizedList>;

export default meta;
type Story = StoryObj<typeof meta>;

/** Text-only line items — no product thumbnails. */
export const WithoutImages: Story = {
  args: {
    items: [
      { label: "Green fee — 18 holes", qty: 2, amount: "$200.00" },
      { label: "Cart fee", qty: 2, amount: "$8.00" },
      { label: "Pro V1 sleeve", qty: 2, amount: "$100.00" },
      { label: "Sagamore Pass credit", amount: "−$36.06", muted: true },
    ],
  },
};

/** Retail/F&B line items with product thumbnails (pro shop / snack bar). */
export const WithImages: Story = {
  args: {
    items: [
      {
        label: "Titleist Pro V1 golf balls — 1 dozen",
        amount: "$54.99",
        image: proV1Img,
        imageAlt: "Titleist Pro V1 golf balls",
      },
      {
        label: "Titleist Players glove",
        amount: "$24.99",
        image: gloveImg,
        imageAlt: "Titleist golf glove",
      },
      {
        label: "Golf tees — pack of 50",
        amount: "$4.99",
        image: teesImg,
        imageAlt: "Pack of golf tees",
      },
      {
        label: "Lay's Classic chips",
        amount: "$2.50",
        image: chipsImg,
        imageAlt: "Bag of chips",
      },
    ],
  },
};

/** Grouped line items (multi-tee-time orders, per-participant breakdowns). */
export const GroupedByTeeTime: Story = {
  args: {
    groups: [
      {
        heading: "Tee Time #28411",
        subheading: "Sat May 9 · 8:42 AM",
        items: [
          { label: "Green fee", qty: 4, amount: "$400.00" },
          { label: "Cart fee", qty: 4, amount: "$16.00" },
        ],
      },
      {
        heading: "Tee Time #28412",
        subheading: "Sun May 10 · 10:15 AM",
        items: [
          { label: "Green fee", qty: 4, amount: "$400.00" },
          { label: "Cart fee", qty: 4, amount: "$16.00" },
        ],
      },
      {
        heading: "Other items",
        items: [{ label: "Pro V1 sleeve", qty: 2, amount: "$100.00" }],
      },
    ],
  },
};
