import type { Meta, StoryObj } from "@storybook/react-vite";
import { ReceiptEmail } from "./Receipt";

const meta = {
  title: "Emails/Receipt",
  component: ReceiptEmail,
  parameters: { layout: "fullscreen" },
} satisfies Meta<typeof ReceiptEmail>;

export default meta;
type Story = StoryObj<typeof meta>;

export const Default: Story = {};

export const ProShopPurchase: Story = {
  args: {
    firstName: "Sam",
    orderNumber: "TF-PS-5521",
    items: [
      { label: "Titleist Pro V1 (dozen)", amount: "$54.99" },
      { label: "Tenfore logo glove", amount: "$24.00" },
    ],
    subtotal: "$78.99",
    tax: "$6.71",
    total: "$85.70",
  },
};
