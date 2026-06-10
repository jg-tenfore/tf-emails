import type { Meta, StoryObj } from "@storybook/react-vite";
import { SimulatorBookingReminder } from "./SimulatorBookingReminder";

const meta = {
  title: "FloGolf Lounge/Simulator Booking/Reminder",
  component: SimulatorBookingReminder,
  parameters: { layout: "fullscreen" },
  argTypes: {
    firstName: { control: "text" },
    directionsUrl: { control: "text" },
    manageUrl: { control: "text" },
  },
} satisfies Meta<typeof SimulatorBookingReminder>;

export default meta;
type Story = StoryObj<typeof meta>;

/** Reminder for the canonical 2-hour Bay 7 booking for four. */
export const Default: Story = {};
