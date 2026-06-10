import type { Meta, StoryObj } from "@storybook/react-vite";
import { RedemptionCode } from "./redemption-code";

const meta = {
  title: "Email Components/Redemption Code",
  component: RedemptionCode,
  parameters: { layout: "centered" },
  decorators: [
    (Story) => (
      <div className="w-[420px] max-w-full">
        <Story />
      </div>
    ),
  ],
} satisfies Meta<typeof RedemptionCode>;

export default meta;
type Story = StoryObj<typeof meta>;

/** Six-digit PIN — read it out or type it at the counter. */
export const Pin: Story = {
  args: {
    variant: "pin",
    code: "482917",
    label: "Range bucket",
    instructions: "Show this code at the pro shop to grab your bucket.",
  },
};

/** UPC barcode — scanned at the register. */
export const Barcode: Story = {
  args: {
    variant: "barcode",
    code: "482917",
    label: "Range bucket",
    instructions: "Scan at the counter to redeem.",
  },
};

/** QR code — scanned at the ball machine. */
export const Qr: Story = {
  args: {
    variant: "qr",
    code: "482917",
    label: "Range bucket",
    instructions: "Scan at the ball machine to dispense your bucket.",
  },
};
