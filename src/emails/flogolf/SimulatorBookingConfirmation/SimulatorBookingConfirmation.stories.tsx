import type { Meta, StoryObj } from "@storybook/react-vite";
import { SimulatorBookingConfirmation } from "./SimulatorBookingConfirmation";

const meta = {
  title: "FloGolf Lounge/Booking Confirmation",
  component: SimulatorBookingConfirmation,
  parameters: { layout: "fullscreen" },
  argTypes: { firstName: { control: "text" }, manageUrl: { control: "text" } },
} satisfies Meta<typeof SimulatorBookingConfirmation>;

export default meta;
type Story = StoryObj<typeof meta>;

/** Canonical 2-hour Bay 7 booking for four. */
export const Default: Story = {};

/** Edge case: a solo one-hour practice session in Bay 2. */
export const SoloPracticeHour: Story = {
  args: {
    firstName: "Sam",
    booking: {
      bay: "Bay 2",
      date: "Tuesday, May 12, 2026",
      startTime: "11:00 AM",
      endTime: "12:00 PM",
      duration: "1 hour",
      players: 1,
      experience: "Golfzon practice range",
      confirmation: "FG-58219",
      ratePerHour: "$45.00 / hour",
      total: "$45.00",
    },
  },
};
