import type { Meta, StoryObj } from "@storybook/react-vite";
import { ArrowRight, MarkerPin02 } from "@untitledui/icons";
import { CTAButton } from "./cta-button";
import { CTAStack } from "./cta-stack";

const meta = {
  title: "Email Components/CTA Stack",
  component: CTAStack,
  parameters: { layout: "centered" },
  decorators: [
    (Story) => (
      <div className="w-[440px] max-w-full">
        <Story />
      </div>
    ),
  ],
} satisfies Meta<typeof CTAStack>;

export default meta;
type Story = StoryObj<typeof meta>;

export const PrimaryThenSecondary: Story = {
  args: {
    children: (
      <>
        <CTAButton href="#" size="lg" fullWidth iconTrailing={ArrowRight}>
          Manage reservation
        </CTAButton>
        <CTAButton
          href="#"
          color="secondary"
          size="lg"
          fullWidth
          iconLeading={MarkerPin02}
        >
          Get directions
        </CTAButton>
      </>
    ),
  },
};
