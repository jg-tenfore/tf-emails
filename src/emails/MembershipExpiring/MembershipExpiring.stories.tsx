import type { Meta, StoryObj } from "@storybook/react-vite";
import { MembershipExpiring } from "./MembershipExpiring";

const meta = {
  title: "Sagamore Golf Club/Membership/Expiring",
  component: MembershipExpiring,
  parameters: { layout: "fullscreen" },
  argTypes: {
    firstName: { control: "text" },
    mode: { control: "inline-radio", options: ["manual", "autorenew"] },
  },
} satisfies Meta<typeof MembershipExpiring>;

export default meta;
type Story = StoryObj<typeof meta>;

/** Manual renewal: a warning nudge 30 days out with a "Renew now" CTA. */
export const ManualRenew: Story = {};

/** Auto-renew on file: an informational heads-up 7 days out, no action needed. */
export const AutoRenew: Story = {
  args: { mode: "autorenew" },
};
