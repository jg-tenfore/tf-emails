import type { Meta, StoryObj } from "@storybook/react-vite";
import { CartRentalAgreement } from "./CartRentalAgreement";

const meta = {
  title: "Email Templates/Cart Rental Agreement",
  component: CartRentalAgreement,
  parameters: { layout: "fullscreen" },
  argTypes: {
    firstName: { control: "text" },
    cartNumber: { control: "text" },
  },
} satisfies Meta<typeof CartRentalAgreement>;

export default meta;
type Story = StoryObj<typeof meta>;

/** Signed agreement confirming liability for a specific cart. */
export const Default: Story = {};
