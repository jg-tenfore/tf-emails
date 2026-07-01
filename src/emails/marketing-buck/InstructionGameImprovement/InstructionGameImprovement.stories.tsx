import type { Meta, StoryObj } from "@storybook/react-vite";
import { InstructionGameImprovement } from "./InstructionGameImprovement";
import { InstructionGameImprovementUnlayer } from "./InstructionGameImprovement.unlayer";
import unlayerSource from "./InstructionGameImprovement.unlayer.tsx?raw";
import { unlayerHandoffSafe } from "@/unlayer/render";

const meta = {
  title: "Marketing Buck/Instruction & Game Improvement",
  component: InstructionGameImprovement,
  parameters: { layout: "fullscreen" },
  argTypes: {
    firstName: { control: "text" },
    lessonsUrl: { control: "text" },
  },
} satisfies Meta<typeof InstructionGameImprovement>;

export default meta;
type Story = StoryObj<typeof meta>;

/** Drives lesson/clinic bookings with a bring-a-friend offer and a practice-aid cross-sell. */
export const Default: Story = {
  parameters: {
    unlayer: unlayerHandoffSafe(() => InstructionGameImprovementUnlayer(), unlayerSource),
  },
};
