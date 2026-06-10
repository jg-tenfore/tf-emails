import type { Meta, StoryObj } from "@storybook/react-vite";
import { PaymentSummary } from "./payment-summary";

const meta = {
  title: "Email Components/Payment Summary",
  component: PaymentSummary,
  parameters: { layout: "centered" },
  decorators: [
    (Story) => (
      <div className="w-[480px] max-w-full rounded-xl border border-secondary bg-primary px-5 py-3">
        <Story />
      </div>
    ),
  ],
} satisfies Meta<typeof PaymentSummary>;

export default meta;
type Story = StoryObj<typeof meta>;

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
