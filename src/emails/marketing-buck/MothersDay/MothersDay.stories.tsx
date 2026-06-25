import type { Meta, StoryObj } from "@storybook/react-vite";
import { MothersDay } from "./MothersDay";

const meta = {
  title: "Marketing Buck/Mother's Day",
  component: MothersDay,
  parameters: { layout: "fullscreen" },
  argTypes: {
    firstName: { control: "text" },
    reservationUrl: { control: "text" },
  },
} satisfies Meta<typeof MothersDay>;

export default meta;
type Story = StoryObj<typeof meta>;

/** Mother's Day brunch with a reservation CTA and a "Mom plays free" offer. */
export const Default: Story = {};
