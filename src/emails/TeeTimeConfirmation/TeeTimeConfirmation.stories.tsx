import type { Meta, StoryObj } from "@storybook/react-vite";
import { TeeTimeConfirmation } from "./TeeTimeConfirmation";

const meta = {
  title: "Emails/Tee Time Confirmation",
  component: TeeTimeConfirmation,
  parameters: { layout: "fullscreen" },
} satisfies Meta<typeof TeeTimeConfirmation>;

export default meta;
type Story = StoryObj<typeof meta>;

export const Default: Story = {};

export const TwilightTwosome: Story = {
  args: {
    firstName: "Sam",
    booking: {
      course: "Augusta Pines — Lakeside Nine",
      location: "1040 Fairway Drive, Augusta, GA",
      date: "Thursday, June 19, 2026",
      time: "6:05 PM",
      players: 2,
      confirmationCode: "TF-2Q7M9",
    },
  },
};
