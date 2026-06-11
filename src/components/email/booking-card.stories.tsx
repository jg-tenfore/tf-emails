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
