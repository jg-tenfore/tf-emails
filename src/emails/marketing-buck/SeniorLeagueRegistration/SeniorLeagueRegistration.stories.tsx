import type { Meta, StoryObj } from "@storybook/react-vite";
import { SeniorLeagueRegistration } from "./SeniorLeagueRegistration";

const meta = {
  title: "Marketing Buck/Senior League Registration",
  component: SeniorLeagueRegistration,
  parameters: { layout: "fullscreen" },
  argTypes: {
    firstName: { control: "text" },
    day: { control: "text" },
    startDate: { control: "text" },
    price: { control: "text" },
    registerUrl: { control: "text" },
  },
} satisfies Meta<typeof SeniorLeagueRegistration>;

export default meta;
type Story = StoryObj<typeof meta>;

/** 55+ weekly league sign-up with early-bird member pricing. */
export const Default: Story = {};
