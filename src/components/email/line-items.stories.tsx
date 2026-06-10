import type { Meta, StoryObj } from "@storybook/react-vite";
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

export const Flat: Story = {
  args: {
    items: [
      { label: "Green fee — 18 holes", qty: 2, amount: "$200.00" },
      { label: "Cart fee", qty: 2, amount: "$8.00" },
      { label: "Pro V1 sleeve", qty: 2, amount: "$100.00" },
      { label: "Sagamore Pass credit", amount: "−$36.06", muted: true },
    ],
  },
};

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
