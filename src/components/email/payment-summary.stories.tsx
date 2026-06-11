import type { Meta, StoryObj } from "@storybook/react-vite";
import { PaymentSummary } from "./payment-summary";

const meta = {
  title: "Email Components/Payment Summary",
  component: PaymentSummary,
  parameters: { layout: "centered" },
  decorators: [
    (Story) => (
      <div className="w-[480px] max-w-full rounded-xl border border-secondary bg-primary px-5 py-4">
        <Story />
      </div>
    ),
  ],
} satisfies Meta<typeof PaymentSummary>;

export default meta;
type Story = StoryObj<typeof meta>;

/** Full receipt: total on top, breakdown (with a VAT sub-line), and charged + method. */
export const Receipt: Story = {
  args: {
    total: { value: "$264.12" },
    status: "paid",
    rows: [
      { label: "Green fees (4 players)", value: "$232.00" },
      { label: "Cart fee", value: "$16.00" },
      {
        label: "Subtotal",
        value: "$248.00",
        subline: { label: "Tax (6.5%)", value: "$16.12" },
      },
    ],
    charged: { value: "$264.12", method: "Visa ending in 4242" },
  },
};

export const Paid: Story = {
  args: {
    rows: [
      { label: "Subtotal", value: "$308.00" },
      { label: "Tax", value: "$20.02" },
    ],
    total: { value: "$328.02" },
    status: "paid",
  },
};

export const Refund: Story = {
  args: {
    total: { label: "Refund", value: "$221.52" },
    status: "refund",
    note: "Refunds take 2–3 business days to appear on your statement.",
  },
};

export const AmountDue: Story = {
  args: {
    rows: [{ label: "Initiation installment", value: "$250.00" }],
    total: { label: "Amount due", value: "$250.00" },
    status: "amount-due",
  },
};
