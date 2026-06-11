import type { Meta, StoryObj } from "@storybook/react-vite";
import { revisedBooking } from "@/lib/scenario";
import { WorkshopTeeTimeConfirmation } from "./TeeTimeConfirmation";

const meta = {
  title: "Workshop/Tee Time Confirmation",
  component: WorkshopTeeTimeConfirmation,
  parameters: { layout: "fullscreen" },
  argTypes: { firstName: { control: "text" } },
} satisfies Meta<typeof WorkshopTeeTimeConfirmation>;

export default meta;
type Story = StoryObj<typeof meta>;

/** Foursome with mixed rates (1 member + 3 public), sub-course, Tee Time ID. */
export const MixedRates: Story = {};

/** Same layout with one uniform public rate for the whole group. */
export const UniformRate: Story = {
  args: {
    booking: {
      ...revisedBooking,
      roster: [
        { name: "Justin Girard", rateType: "Public", amount: "$68.00" },
        { name: "Marcus Webb", rateType: "Public", amount: "$68.00" },
        { name: "Cody Sanders", rateType: "Public", amount: "$68.00" },
        { name: "Weston Farnsworth", rateType: "Public", amount: "$68.00" },
      ],
      greenFees: "$272.00",
      subtotal: "$288.00",
      tax: "$18.72",
      total: "$306.72",
    },
  },
};
