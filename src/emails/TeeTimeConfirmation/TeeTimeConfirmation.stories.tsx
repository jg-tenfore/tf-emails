import type { Meta, StoryObj } from "@storybook/react-vite";
import { TeeTimeConfirmation } from "./TeeTimeConfirmation";

const meta = {
  title: "Emails/Tee Time Confirmation",
  component: TeeTimeConfirmation,
  parameters: { layout: "fullscreen" },
  argTypes: { firstName: { control: "text" }, manageUrl: { control: "text" } },
} satisfies Meta<typeof TeeTimeConfirmation>;

export default meta;
type Story = StoryObj<typeof meta>;

/** The real-world GolfNow scenario, rendered in the Tenfore aesthetic. */
export const Default: Story = {};

/** A twosome twilight round at a different course / rate. */
export const MorningFoursome: Story = {
  args: {
    firstName: "Sam",
    teeTime: {
      course: "Augusta Pines — Championship Course",
      courseNote: "Championship 18",
      address: "1040 Fairway Drive, Augusta, GA 30904",
      mapUrl: "https://maps.google.com/?q=1040+Fairway+Drive,+Augusta,+GA",
      date: "Saturday, June 14, 2026",
      time: "9:20 AM",
      players: 4,
      holes: 18,
      rateType: "Member rate",
      groupName: "Sam Carter · 706-555-0148",
      confirmation: "538117902",
      courseConfirmation: "Carter|71204",
    },
    payment: {
      greenFees: "$320.00",
      greenFeesPerPlayer: "$80.00 / player",
      convenienceFee: "$9.98",
      taxes: "$18.50",
      discounts: "−$48.00",
      discountNote: "Tenfore Pass member discount",
      donation: "$1.00",
      grandTotal: "$301.48",
      paidOnline: "$301.48",
      dueAtCourse: "$0.00",
    },
  },
};
