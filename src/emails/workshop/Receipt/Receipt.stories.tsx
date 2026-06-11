import type { Meta, StoryObj } from "@storybook/react-vite";
import { WorkshopReceipt } from "./Receipt";

const meta = {
  title: "Workshop/Receipt",
  component: WorkshopReceipt,
  parameters: { layout: "fullscreen" },
  argTypes: { firstName: { control: "text" } },
} satisfies Meta<typeof WorkshopReceipt>;

export default meta;
type Story = StoryObj<typeof meta>;

/** Text-first receipt, no hero image — deliverability over aesthetics. */
export const Default: Story = {};
