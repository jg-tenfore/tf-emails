import type { Meta, StoryObj } from "@storybook/react-vite";
import { EventBookedNotification } from "./EventBookedNotification";

const meta = {
  title: "Admin/Sales/Event Booked",
  component: EventBookedNotification,
  parameters: { layout: "fullscreen" },
} satisfies Meta<typeof EventBookedNotification>;

export default meta;
type Story = StoryObj<typeof meta>;

export const Default: Story = {};
