import type { Meta, StoryObj } from "@storybook/react-vite";
import { EmailSection } from "./email-section";

const meta = {
  title: "Email Components/Email Section",
  component: EmailSection,
  parameters: { layout: "fullscreen" },
  decorators: [
    (Story) => (
      <div className="mx-auto w-[600px] max-w-full bg-primary">
        <Story />
      </div>
    ),
  ],
} satisfies Meta<typeof EmailSection>;

export default meta;
type Story = StoryObj<typeof meta>;

export const Default: Story = {
  args: {
    children: (
      <p className="text-sm text-secondary">
        A padded content block — the standard wrapper for every section of an
        email body.
      </p>
    ),
  },
};

export const MutedLargePadding: Story = {
  args: {
    tone: "muted",
    padding: "lg",
    children: (
      <p className="text-sm text-secondary">
        A muted block with large padding, used for "good to know" footnotes.
      </p>
    ),
  },
};
