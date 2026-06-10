import type { Meta, StoryObj } from "@storybook/react-vite";
import { LocationBlock } from "./location-block";

const meta = {
  title: "Email Components/Location Block",
  component: LocationBlock,
  parameters: { layout: "centered" },
  decorators: [
    (Story) => (
      <div className="w-[440px] max-w-full">
        <Story />
      </div>
    ),
  ],
} satisfies Meta<typeof LocationBlock>;

export default meta;
type Story = StoryObj<typeof meta>;

export const Default: Story = {
  args: {
    name: "Sagamore Spring Golf Club",
    note: "Twilight · 9 holes",
    address: "1287 Main Street, Lynnfield, MA 01940",
    mapUrl: "https://maps.google.com/?q=1287+Main+Street,+Lynnfield,+MA+01940",
  },
};
