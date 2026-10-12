import type { Meta, StoryObj } from "@storybook/react-vite";
import { BuckFooter } from "./buck-footer";

const meta = {
  title: "Email Components/Buck Footer",
  component: BuckFooter,
  parameters: { layout: "centered" },
  decorators: [
    (Story) => (
      <div className="w-[600px] max-w-full bg-primary">
        <Story />
      </div>
    ),
  ],
} satisfies Meta<typeof BuckFooter>;

export default meta;
type Story = StoryObj<typeof meta>;

/** Marketing email footer with unsubscribe and view-in-browser links. */
export const Default: Story = {
  args: { reason: "You're receiving this because you're a golfer at Sagamore Spring Golf Club." },
};
