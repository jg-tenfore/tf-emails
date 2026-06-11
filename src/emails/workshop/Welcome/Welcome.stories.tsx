import type { Meta, StoryObj } from "@storybook/react-vite";
import { WorkshopWelcome } from "./Welcome";

const meta = {
  title: "Workshop/Welcome",
  component: WorkshopWelcome,
  parameters: { layout: "fullscreen" },
  argTypes: { firstName: { control: "text" } },
} satisfies Meta<typeof WorkshopWelcome>;

export default meta;
type Story = StoryObj<typeof meta>;

/** Account welcome that cross-promotes the Crane app + Golf Buddies. */
export const Default: Story = {};
