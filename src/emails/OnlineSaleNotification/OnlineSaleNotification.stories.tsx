import type { Meta, StoryObj } from "@storybook/react-vite";
import { OnlineSaleNotification } from "./OnlineSaleNotification";

const meta = {
  title: "Admin/Sales/Online Sale",
  component: OnlineSaleNotification,
  parameters: { layout: "fullscreen" },
} satisfies Meta<typeof OnlineSaleNotification>;

export default meta;
type Story = StoryObj<typeof meta>;

export const Default: Story = {};
