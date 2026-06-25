import type { Meta, StoryObj } from "@storybook/react-vite";
import { Front9Aeration } from "./Front9Aeration";

const meta = {
  title: "Marketing Buck/Front 9 Aeration",
  component: Front9Aeration,
  parameters: { layout: "fullscreen" },
  argTypes: {
    firstName: { control: "text" },
    dates: { control: "text" },
    discount: { control: "text" },
    bookingUrl: { control: "text" },
  },
} satisfies Meta<typeof Front9Aeration>;

export default meta;
type Story = StoryObj<typeof meta>;

/** Seasonal course update announcing front-9 aeration, with a round discount during recovery. */
export const Default: Story = {};
