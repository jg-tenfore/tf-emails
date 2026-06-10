import type { Meta, StoryObj } from "@storybook/react-vite";
import { MembershipLapsed } from "./MembershipLapsed";

const meta = {
  title: "Sagamore Golf Club/Membership/Lapsed",
  component: MembershipLapsed,
  parameters: { layout: "fullscreen" },
  argTypes: { firstName: { control: "text" } },
} satisfies Meta<typeof MembershipLapsed>;

export default meta;
type Story = StoryObj<typeof meta>;

/** A win-back email after the membership has lapsed. */
export const Default: Story = {};
