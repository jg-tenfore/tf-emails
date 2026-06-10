import type { Meta, StoryObj } from "@storybook/react-vite";
import { ClinicSoldNotification } from "./ClinicSoldNotification";

const meta = {
  title: "Admin/Sales/Clinic Sold",
  component: ClinicSoldNotification,
  parameters: { layout: "fullscreen" },
} satisfies Meta<typeof ClinicSoldNotification>;

export default meta;
type Story = StoryObj<typeof meta>;

export const Default: Story = {};
