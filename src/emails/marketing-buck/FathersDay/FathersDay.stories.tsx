import type { Meta, StoryObj } from "@storybook/react-vite";
import { FathersDay } from "./FathersDay";

const meta = {
  title: "Marketing Buck/Father's Day",
  component: FathersDay,
  parameters: { layout: "fullscreen" },
  argTypes: {
    firstName: { control: "text" },
    bookingUrl: { control: "text" },
    giftCardUrl: { control: "text" },
  },
} satisfies Meta<typeof FathersDay>;

export default meta;
type Story = StoryObj<typeof meta>;

/** Father's Day round + gift-card push with a gift-card bonus. */
export const Default: Story = {};
