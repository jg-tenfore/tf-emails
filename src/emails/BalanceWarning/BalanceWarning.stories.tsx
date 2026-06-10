import type { Meta, StoryObj } from "@storybook/react-vite";
import { BalanceWarning } from "./BalanceWarning";

const meta = {
  title: "Admin/Billing/Balance Warning",
  component: BalanceWarning,
  parameters: { layout: "fullscreen" },
} satisfies Meta<typeof BalanceWarning>;

export default meta;
type Story = StoryObj<typeof meta>;

export const Default: Story = {};
