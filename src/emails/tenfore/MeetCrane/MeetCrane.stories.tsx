import type { Meta, StoryObj } from "@storybook/react-vite";
import { MeetCrane } from "./MeetCrane";

const meta = {
  title: "TenFore Golf/Meet Crane",
  component: MeetCrane,
  parameters: { layout: "fullscreen" },
  argTypes: { firstName: { control: "text" } },
} satisfies Meta<typeof MeetCrane>;

export default meta;
type Story = StoryObj<typeof meta>;

export const Default: Story = {};
