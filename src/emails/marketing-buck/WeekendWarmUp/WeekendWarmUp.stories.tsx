import type { Meta, StoryObj } from "@storybook/react-vite";
import { WeekendWarmUp } from "./WeekendWarmUp";

const meta = {
  title: "Marketing Buck/Weekend Warm-Up",
  component: WeekendWarmUp,
  parameters: { layout: "fullscreen" },
  argTypes: {
    firstName: { control: "text" },
    bookingUrl: { control: "text" },
  },
} satisfies Meta<typeof WeekendWarmUp>;

export default meta;
type Story = StoryObj<typeof meta>;

/** Hero + CTA email that fills peak weekend tee times with a complimentary range bucket. */
export const Default: Story = {};
