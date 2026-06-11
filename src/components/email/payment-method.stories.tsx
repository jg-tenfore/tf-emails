import type { Meta, StoryObj } from "@storybook/react-vite";
import { PaymentMethod } from "./payment-method";

const meta = {
  title: "Email Components/Payment Method",
  component: PaymentMethod,
  parameters: { layout: "centered" },
} satisfies Meta<typeof PaymentMethod>;

export default meta;
type Story = StoryObj<typeof meta>;

export const Visa: Story = { args: { brand: "visa", last4: "4242" } };
export const Mastercard: Story = { args: { brand: "mastercard", last4: "5454" } };
export const Amex: Story = { args: { brand: "amex", last4: "0005" } };
export const Discover: Story = { args: { brand: "discover", last4: "1117" } };
