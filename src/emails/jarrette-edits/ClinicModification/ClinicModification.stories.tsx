import type { Meta, StoryObj } from "@storybook/react-vite";
import { ClinicModification } from "./ClinicModification";

const meta = {
  title: "Jarrette Edits/Clinics/Modification",
  component: ClinicModification,
  parameters: { layout: "fullscreen" },
  argTypes: { firstName: { control: "text" } },
} satisfies Meta<typeof ClinicModification>;

export default meta;
type Story = StoryObj<typeof meta>;

/** Cost-neutral registration change — week and t-shirt size updated. */
export const Default: Story = {};
