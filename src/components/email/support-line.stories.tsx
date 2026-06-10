import type { Meta, StoryObj } from "@storybook/react-vite";
import { SupportLine } from "./support-line";

const meta = {
  title: "Email Components/Support Line",
  component: SupportLine,
  parameters: { layout: "centered" },
  decorators: [
    (Story) => (
      <div className="w-[440px] max-w-full">
        <Story />
      </div>
    ),
  ],
} satisfies Meta<typeof SupportLine>;

export default meta;
type Story = StoryObj<typeof meta>;

export const Default: Story = {
  args: { href: "mailto:proshop@sagamoregolf.com", linkText: "Contact the pro shop" },
};
