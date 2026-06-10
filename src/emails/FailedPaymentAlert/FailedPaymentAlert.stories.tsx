import type { Meta, StoryObj } from "@storybook/react-vite";
import { FailedPaymentAlert } from "./FailedPaymentAlert";

const meta = {
  title: "Admin/Billing/Failed Payment",
  component: FailedPaymentAlert,
  parameters: { layout: "fullscreen" },
} satisfies Meta<typeof FailedPaymentAlert>;

export default meta;
type Story = StoryObj<typeof meta>;

export const Default: Story = {};
