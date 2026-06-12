import type { Meta, StoryObj } from "@storybook/react-vite";
import { assets } from "@/lib/assets";
import { BookingCard } from "./booking-card";

const meta = {
  title: "Email Components/Booking Card",
  component: BookingCard,
  parameters: { layout: "centered" },
  decorators: [
    (Story) => (
      <div className="w-[420px] max-w-full">
        <Story />
      </div>
    ),
  ],
} satisfies Meta<typeof BookingCard>;

export default meta;
type Story = StoryObj<typeof meta>;

const booking = {
  course: "Sagamore Spring Golf Club",
  location: "Lynnfield, MA",
  date: "Tuesday, April 21, 2026",
  time: "6:00 PM",
  players: 2,
  confirmationCode: "421292164",
};

export const Confirmed: Story = {
  args: {
    booking,
    status: { label: "Confirmed", color: "success" },
  },
};

export const Pending: Story = {
  args: {
    booking,
    status: { label: "Pending", color: "warning" },
  },
};

export const NoStatus: Story = { args: { booking } };

/** With the venue logo to the left of the name + location. */
export const WithLogo: Story = {
  args: {
    booking,
    logoUrl: assets.logo.src,
    status: { label: "Tomorrow", color: "brand" },
  },
};

/**
 * Reused for a FloGolf simulator bay — a `unit` row, a custom time label, and
 * "player" instead of "golfer".
 */
export const SimulatorBay: Story = {
  args: {
    booking: {
      course: "FloGolf Lounge",
      location: "880 Broadway, Saugus, MA 01906",
      unit: { label: "Bay", value: "Bay 7" },
      date: "Saturday, May 9, 2026",
      time: "6:00 PM–8:00 PM (2 hours)",
      players: 4,
      confirmationCode: "FG-58117",
    },
    timeLabel: "Time",
    playerNoun: "player",
    status: { label: "Upcoming", color: "brand" },
  },
};
