import type { Meta, StoryObj } from "@storybook/react-vite";
import { ClinicCancellation } from "./ClinicCancellation";

const meta = {
  title: "Tenfore Branded/Clinics/Cancellation",
  component: ClinicCancellation,
  parameters: { layout: "fullscreen" },
  argTypes: { firstName: { control: "text" }, refund: { control: "text" } },
} satisfies Meta<typeof ClinicCancellation>;

export default meta;
type Story = StoryObj<typeof meta>;

/** Cancelled registration with a full refund. */
export const Default: Story = {};

/** Edge case: cancelled past the deadline, so no refund is issued. */
export const NonRefundable: Story = {
  args: { refund: undefined },
};
