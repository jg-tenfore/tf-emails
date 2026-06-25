import type { Meta, StoryObj } from "@storybook/react-vite";
import { ReceiptEmail } from "./Receipt";

const meta = {
  title: "Email Templates/Orders/Receipt",
  component: ReceiptEmail,
  parameters: { layout: "fullscreen" },
  argTypes: { firstName: { control: "text" }, receiptUrl: { control: "text" } },
} satisfies Meta<typeof ReceiptEmail>;

export default meta;
type Story = StoryObj<typeof meta>;

/** The canonical Sagamore Spring tee-time receipt. */
export const Default: Story = {};

/** A higher-value weekend round receipt. */
export const WeekendRound: Story = {
  args: {
    firstName: "Sam",
    orderNumber: "538117902",
    orderDate: "May 6, 2026",
    items: [
      { label: "Weekend green fee — 18 holes × 4", amount: "$232.00" },
      { label: "Convenience fee", amount: "$9.98" },
      { label: "Sagamore Pass member discount", amount: "−$24.00" },
    ],
    subtotal: "$217.98",
    tax: "$0.00",
    total: "$217.98",
    cardLast4: "1881",
  },
};
