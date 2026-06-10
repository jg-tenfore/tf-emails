import type { Meta, StoryObj } from "@storybook/react-vite";
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
  course: "Augusta Pines — Championship Course",
  location: "Augusta, GA",
  date: "Saturday, June 14, 2026",
  time: "9:20 AM",
  players: 4,
  confirmationCode: "TF-8X4K2",
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
