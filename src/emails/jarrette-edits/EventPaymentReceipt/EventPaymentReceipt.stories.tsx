import type { Meta, StoryObj } from "@storybook/react-vite";
import { EventPaymentReceipt } from "./EventPaymentReceipt";

const meta = {
  title: "Jarrette Edits/Events/Payment Receipt",
  component: EventPaymentReceipt,
  parameters: { layout: "fullscreen" },
  argTypes: {
    firstName: { control: "text" },
    paymentAmount: { control: "text" },
    paymentDate: { control: "text" },
    method: { control: "text" },
  },
} satisfies Meta<typeof EventPaymentReceipt>;

export default meta;
type Story = StoryObj<typeof meta>;

/** Receipt confirming a payment toward the outing balance. */
export const Default: Story = {};
