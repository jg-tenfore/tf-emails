import type { Meta, StoryObj } from "@storybook/react-vite";
import { EventModification } from "./EventModification";

const meta = {
  title: "Tenfore Branded/Events/Modification",
  component: EventModification,
  parameters: { layout: "fullscreen" },
  argTypes: { firstName: { control: "text" } },
} satisfies Meta<typeof EventModification>;

export default meta;
type Story = StoryObj<typeof meta>;

/** Date, player count and format all changed for the outing. */
export const Default: Story = {};
