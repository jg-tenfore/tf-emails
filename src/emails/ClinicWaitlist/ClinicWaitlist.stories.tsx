import type { Meta, StoryObj } from "@storybook/react-vite";
import { ClinicWaitlist } from "./ClinicWaitlist";

const meta = {
  title: "Tenfore Branded/Clinics/Waitlist",
  component: ClinicWaitlist,
  parameters: { layout: "fullscreen" },
  argTypes: { firstName: { control: "text" } },
} satisfies Meta<typeof ClinicWaitlist>;

export default meta;
type Story = StoryObj<typeof meta>;

/** The clinic is full — golfer added to the waitlist. */
export const Default: Story = {};
