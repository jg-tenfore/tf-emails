import type { Meta, StoryObj } from "@storybook/react-vite";
import { ClinicConfirmation } from "./ClinicConfirmation";

const meta = {
  title: "Jarrette Edits/Clinics/Confirmation",
  component: ClinicConfirmation,
  parameters: { layout: "fullscreen" },
  argTypes: { firstName: { control: "text" } },
} satisfies Meta<typeof ClinicConfirmation>;

export default meta;
type Story = StoryObj<typeof meta>;

/** Confirmed multi-day clinic registration with intake answers and payment. */
export const Default: Story = {};

/** Same registration, addressed to a different golfer. */
export const DifferentGolfer: Story = {
  args: { firstName: "Marcus" },
};
