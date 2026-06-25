import type { Meta, StoryObj } from "@storybook/react-vite";
import { WaitlistBooked } from "./WaitlistBooked";

const meta = {
  title: "Email Templates/Waitlist/Booked",
  component: WaitlistBooked,
  parameters: { layout: "fullscreen" },
  argTypes: {
    firstName: { control: "text" },
    teeTimeId: { control: "text" },
    paymentMode: {
      control: "inline-radio",
      options: ["pay-at-course", "paid"],
    },
  },
} satisfies Meta<typeof WaitlistBooked>;

export default meta;
type Story = StoryObj<typeof meta>;

/** Booked from the waitlist — pay at the pro shop on arrival. */
export const PayAtCourse: Story = {};

/** Booked from the waitlist with the card on file already charged. */
export const PaidAndBooked: Story = {
  args: { paymentMode: "paid" },
};
