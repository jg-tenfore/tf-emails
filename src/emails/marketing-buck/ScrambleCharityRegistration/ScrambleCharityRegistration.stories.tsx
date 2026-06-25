import type { Meta, StoryObj } from "@storybook/react-vite";
import { ScrambleCharityRegistration } from "./ScrambleCharityRegistration";

const meta = {
  title: "Marketing Buck/Charity Scramble",
  component: ScrambleCharityRegistration,
  parameters: { layout: "fullscreen" },
  argTypes: {
    firstName: { control: "text" },
    cause: { control: "text" },
    date: { control: "text" },
    format: { control: "text" },
    pricePerTeam: { control: "text" },
    registerUrl: { control: "text" },
  },
} satisfies Meta<typeof ScrambleCharityRegistration>;

export default meta;
type Story = StoryObj<typeof meta>;

/** Charity scramble registration with an early-bird foursome incentive. */
export const Default: Story = {};
