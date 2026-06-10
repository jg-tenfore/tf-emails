import type { Meta, StoryObj } from "@storybook/react-vite";
import { GolfBuddies } from "./GolfBuddies";

const meta = {
  title: "TenFore Golf/Golf Buddies",
  component: GolfBuddies,
  parameters: { layout: "fullscreen" },
  argTypes: { firstName: { control: "text" } },
} satisfies Meta<typeof GolfBuddies>;

export default meta;
type Story = StoryObj<typeof meta>;

/** Feature-announcement email introducing TenFore Buddies. */
export const Default: Story = {};
