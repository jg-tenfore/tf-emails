import type { Meta, StoryObj } from "@storybook/react-vite";
import { Clock, ShieldTick } from "@untitledui/icons";
import { IconBadge } from "./icon-badge";

const meta = {
  title: "Email Components/Icon Badge",
  component: IconBadge,
  parameters: { layout: "centered" },
} satisfies Meta<typeof IconBadge>;

export default meta;
type Story = StoryObj<typeof meta>;

export const Square: Story = { args: { icon: ShieldTick, shape: "square", size: "md" } };
export const Circle: Story = { args: { icon: Clock, shape: "circle", size: "lg" } };
export const Small: Story = { args: { icon: ShieldTick, shape: "square", size: "sm" } };
