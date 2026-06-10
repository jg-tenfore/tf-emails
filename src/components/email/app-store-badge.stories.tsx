import type { Meta, StoryObj } from "@storybook/react-vite";
import { AppStoreBadge } from "./app-store-badge";

const meta = {
  title: "Email Components/App Store Badge",
  component: AppStoreBadge,
  parameters: { layout: "centered" },
} satisfies Meta<typeof AppStoreBadge>;

export default meta;
type Story = StoryObj<typeof meta>;

export const Light: Story = { args: { href: "#", tone: "light" } };

export const Dark: Story = {
  args: { href: "#", tone: "dark" },
  decorators: [
    (Story) => (
      <div className="rounded-xl bg-[#15311f] p-6">
        <Story />
      </div>
    ),
  ],
};
