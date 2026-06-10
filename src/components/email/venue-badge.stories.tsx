import type { Meta, StoryObj } from "@storybook/react-vite";
import { assets } from "@/lib/assets";
import { flogolf } from "@/lib/flogolf";
import { VenueBadge } from "./venue-badge";

const meta = {
  title: "Email Components/Venue Badge",
  component: VenueBadge,
  parameters: { layout: "centered" },
  decorators: [
    (Story) => (
      <div className="w-[480px] max-w-full">
        <Story />
      </div>
    ),
  ],
} satisfies Meta<typeof VenueBadge>;

export default meta;
type Story = StoryObj<typeof meta>;

export const Sagamore: Story = {
  args: {
    label: "Your reservation at",
    logoUrl: assets.logo.src,
    name: "Sagamore Spring Golf Club",
    location: "1287 Main Street, Lynnfield, MA 01940",
  },
};

export const FloGolf: Story = {
  args: {
    label: "Your booking at",
    logoUrl: flogolf.logo,
    name: flogolf.name,
    location: `${flogolf.address.line1}, ${flogolf.address.line2}`,
  },
};
