import type { Meta, StoryObj } from "@storybook/react-vite";
import { JarretteHeader } from "./jarrette-header";

const meta = {
  title: "Email Components/Jarrette Header",
  component: JarretteHeader,
  parameters: { layout: "centered" },
  decorators: [
    (Story) => (
      <div className="w-[600px] max-w-full bg-primary">
        <Story />
      </div>
    ),
  ],
} satisfies Meta<typeof JarretteHeader>;

export default meta;
type Story = StoryObj<typeof meta>;

/** Course logo, name and address — the header on every Email Templates email. */
export const Default: Story = {};

/** Without the bottom border. */
export const Borderless: Story = { args: { bordered: false } };
