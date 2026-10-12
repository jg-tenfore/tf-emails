import type { Meta, StoryObj } from "@storybook/react-vite";
import { BrandStrip } from "./brand-strip";

const meta = {
  title: "Email Components/Brand Strip",
  component: BrandStrip,
  parameters: { layout: "centered" },
  decorators: [
    (Story) => (
      <div className="w-[600px] max-w-full bg-primary">
        <Story />
      </div>
    ),
  ],
} satisfies Meta<typeof BrandStrip>;

export default meta;
type Story = StoryObj<typeof meta>;

/** Muted strip of shop brand logos used in marketing emails. */
export const Default: Story = {};

/** Custom label. */
export const EventLabel: Story = { args: { label: "Brands on hand at the event" } };
