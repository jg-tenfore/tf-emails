import type { Meta, StoryObj } from "@storybook/react-vite";
import { CheckInConfirmation } from "./CheckInConfirmation";

const meta = {
  title: "Email Templates/Account & Security/Check-In Confirmation",
  component: CheckInConfirmation,
  parameters: { layout: "fullscreen" },
  argTypes: {
    firstName: { control: "text" },
    membershipTier: { control: "text" },
    transactionId: { control: "text" },
    checkInTime: { control: "text" },
    expires: { control: "text" },
    subtotal: { control: "text" },
    tax: { control: "text" },
    total: { control: "text" },
    paid: { control: "boolean" },
  },
} satisfies Meta<typeof CheckInConfirmation>;

export default meta;
type Story = StoryObj<typeof meta>;

/** A paid check-in with a payment summary. */
export const Default: Story = {};

/** A complimentary check-in with no charge — the payment block is hidden. */
export const FreeCheckIn: Story = {
  args: { paid: false },
};
