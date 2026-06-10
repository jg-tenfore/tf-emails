import type { Meta, StoryObj } from "@storybook/react-vite";
import { AchChargeReport } from "./AchChargeReport";

const meta = {
  title: "Admin/Reports/ACH Charge Report",
  component: AchChargeReport,
  parameters: { layout: "fullscreen" },
} satisfies Meta<typeof AchChargeReport>;

export default meta;
type Story = StoryObj<typeof meta>;

export const Default: Story = {};
