import type { Meta, StoryObj } from "@storybook/react-vite";
import { BuckHeader } from "./buck-header";

const meta = {
  title: "Email Components/Buck Header",
  component: BuckHeader,
  parameters: { layout: "centered" },
  decorators: [
    (Story) => (
      <div className="w-[600px] max-w-full bg-primary">
        <Story />
      </div>
    ),
  ],
} satisfies Meta<typeof BuckHeader>;

export default meta;
type Story = StoryObj<typeof meta>;

/** Marketing email header with the default placeholder course. */
export const Default: Story = {};

/** Pointed at the scenario course. */
export const SagamoreSpring: Story = {
  args: { title: "Sagamore Spring Golf Club", address: "1287 Main Street, Lynnfield, MA 01940" },
};
