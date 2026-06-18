import type { Meta, StoryObj } from "@storybook/react-vite";
import { WaitlistSpotOpened } from "./WaitlistSpotOpened";

const meta = {
  title: "Jarrette Edits/Waitlist/Spot Opened",
  component: WaitlistSpotOpened,
  parameters: { layout: "fullscreen" },
  argTypes: {
    firstName: { control: "text" },
    waitlistId: { control: "text" },
  },
} satisfies Meta<typeof WaitlistSpotOpened>;

export default meta;
type Story = StoryObj<typeof meta>;

/** A waitlisted spot opened — book before someone else takes it. */
export const Default: Story = {};
