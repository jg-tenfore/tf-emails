import type { Meta, StoryObj } from "@storybook/react-vite";
import { StatusBadge } from "./status-badge";

const meta = {
  title: "Email Components/Status Badge",
  component: StatusBadge,
  parameters: { layout: "centered" },
} satisfies Meta<typeof StatusBadge>;

export default meta;
type Story = StoryObj<typeof meta>;

export const Paid: Story = { args: { status: "paid" } };
export const PaidInFull: Story = { args: { status: "paid-in-full" } };
export const AmountDue: Story = { args: { status: "amount-due" } };
export const Refund: Story = { args: { status: "refund" } };
export const Pending: Story = { args: { status: "pending" } };
