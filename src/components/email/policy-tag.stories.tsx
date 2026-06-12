import type { Meta, StoryObj } from "@storybook/react-vite";
import { Clock, ShieldTick } from "@untitledui/icons";
import { PolicyTag } from "./policy-tag";

const meta = {
  title: "Email Components/Policy Tag",
  component: PolicyTag,
  parameters: { layout: "centered" },
  decorators: [
    (Story) => (
      <div className="w-[536px] max-w-full">
        <Story />
      </div>
    ),
  ],
} satisfies Meta<typeof PolicyTag>;

export default meta;
type Story = StoryObj<typeof meta>;

/** Hug-content pill — the default, for inline use. */
export const Pill: Story = {
  args: {
    children: "Free cancellation up to 24 hours before your tee time",
  },
};

/** Full-width banner with centered content — sits above the hero. */
export const Block: Story = {
  args: {
    block: true,
    children: "Free cancellation up to 24 hours before your tee time",
  },
};

/** Other tones + icons reuse the badge color system. */
export const Variants: Story = {
  args: { children: "Free cancellation up to 24 hours before your tee time" },
  render: () => (
    <div className="flex flex-col gap-3">
      <PolicyTag block>
        Free cancellation up to 24 hours before your tee time
      </PolicyTag>
      <PolicyTag block color="blue" icon={ShieldTick}>
        Best-rate guarantee on every booking
      </PolicyTag>
      <PolicyTag block color="pink" icon={Clock}>
        Inside 24 hours, this rate is non-refundable
      </PolicyTag>
    </div>
  ),
};
