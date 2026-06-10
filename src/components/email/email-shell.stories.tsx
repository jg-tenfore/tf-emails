import type { Meta, StoryObj } from "@storybook/react-vite";
import { EmailShell } from "./email-shell";

const meta = {
  title: "Email Components/Email Shell",
  component: EmailShell,
  parameters: { layout: "fullscreen" },
} satisfies Meta<typeof EmailShell>;

export default meta;
type Story = StoryObj<typeof meta>;

export const Default: Story = {
  args: {
    preheader: "This hidden text shows in the inbox preview row.",
    children: (
      <div className="px-8 py-12 text-center">
        <p className="text-md font-semibold text-primary">
          The outer email wrapper
        </p>
        <p className="mt-1 text-sm text-tertiary">
          A neutral canvas with a centered 600px white card. Every email renders
          its header, body, and footer inside an EmailShell.
        </p>
      </div>
    ),
  },
};
