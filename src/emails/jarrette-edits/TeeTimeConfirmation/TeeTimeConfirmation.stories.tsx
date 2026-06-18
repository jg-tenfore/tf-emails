import type { Meta, StoryObj } from "@storybook/react-vite";
import { TeeTimeConfirmation } from "./TeeTimeConfirmation";

const meta = {
  title: "Jarrette Edits/Tee Times/Confirmation",
  component: TeeTimeConfirmation,
  parameters: { layout: "fullscreen" },
  argTypes: { firstName: { control: "text" }, manageUrl: { control: "text" } },
} satisfies Meta<typeof TeeTimeConfirmation>;

export default meta;
type Story = StoryObj<typeof meta>;

/** The canonical Sagamore Spring twilight scenario (range bucket as a PIN). */
export const Default: Story = {};

/** Range-bucket add-on shown as a scannable UPC barcode. */
export const RangeBucketBarcode: Story = {
  args: { rangeBucket: { code: "482917", variant: "barcode" } },
};

/** Range-bucket add-on shown as a QR code. */
export const RangeBucketQR: Story = {
  args: { rangeBucket: { code: "482917", variant: "qr" } },
};

/** Edge case: a weekend 18-hole foursome at the member rate. */
export const WeekendFoursome: Story = {
  args: {
    firstName: "Sam",
    teeTime: {
      course: "Sagamore Spring Golf Club",
      courseNote: "Weekend · 18 holes",
      address: "1287 Main Street, Lynnfield, MA 01940",
      mapUrl: "https://maps.google.com/?q=1287+Main+Street,+Lynnfield,+MA+01940",
      date: "Saturday, May 9, 2026",
      time: "8:40 AM",
      players: 4,
      holes: 18,
      rateType: "Member rate",
      groupName: "Sam Carter · 781-555-0148",
      confirmation: "538117902",
      courseConfirmation: "SSGC|71204",
    },
    payment: {
      greenFees: "$232.00",
      greenFeesPerPlayer: "$58.00 / player",
      convenienceFee: "$9.98",
      taxes: "$0.00",
      discounts: "−$24.00",
      discountNote: "Sagamore Pass member discount",
      donation: "$1.00",
      grandTotal: "$218.98",
      paidOnline: "$218.98",
      dueAtCourse: "$0.00",
    },
  },
};
