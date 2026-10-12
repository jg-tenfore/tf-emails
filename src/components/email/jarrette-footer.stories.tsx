import type { Meta, StoryObj } from "@storybook/react-vite";
import { JarretteFooter } from "./jarrette-footer";

const meta = {
  title: "Email Components/Jarrette Footer",
  component: JarretteFooter,
  parameters: { layout: "centered" },
  decorators: [
    (Story) => (
      <div className="w-[600px] max-w-full bg-primary">
        <Story />
      </div>
    ),
  ],
} satisfies Meta<typeof JarretteFooter>;

export default meta;
type Story = StoryObj<typeof meta>;

/** Course block, TenFore sign-off, links and the "why you got this" line. */
export const Default: Story = {
  args: { reason: "You're receiving this because you booked a tee time with Sagamore Spring Golf Club." },
};

/** Left-aligned variant. */
export const LeftAligned: Story = {
  args: { align: "left", reason: "You're receiving this because you booked a tee time with Sagamore Spring Golf Club." },
};
