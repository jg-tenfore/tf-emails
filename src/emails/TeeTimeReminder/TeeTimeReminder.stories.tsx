import type { Meta, StoryObj } from "@storybook/react-vite";
import { TeeTimeReminder } from "./TeeTimeReminder";

const meta = {
  title: "Tenfore Branded/Tee Times/Reminder",
  component: TeeTimeReminder,
  parameters: { layout: "fullscreen" },
} satisfies Meta<typeof TeeTimeReminder>;

export default meta;
type Story = StoryObj<typeof meta>;

export const Default: Story = {};

export const RainyForecast: Story = {
  args: {
    firstName: "Sam",
    forecast: { summary: "Showers likely, pack a layer", tempF: 61 },
  },
};
