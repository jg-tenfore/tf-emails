import type { Meta, StoryObj } from "@storybook/react-vite";
import { EmailHeader } from "./email-header";
import { JarretteHeader } from "./jarrette-header";

const meta = {
  title: "Email Components/Header",
  component: EmailHeader,
  parameters: { layout: "fullscreen" },
  decorators: [
    (Story) => (
      <div className="mx-auto w-[600px] max-w-full bg-primary">
        <Story />
      </div>
    ),
  ],
} satisfies Meta<typeof EmailHeader>;

export default meta;
type Story = StoryObj<typeof meta>;

/** Platform logo — used on all customer-facing emails. */
export const Platform: Story = { args: { variant: "platform" } };

/** Admin logo — used on operator / internal emails. */
export const Admin: Story = { args: { variant: "admin" } };

/** Jarrette variant — Sagamore logo stacked over the club name and address, centered. */
export const Jarrette: Story = {
  name: "Jarrette - Centered",
  render: () => <JarretteHeader />,
};
