import type { Meta, StoryObj } from "@storybook/react-vite";
import { ItemizedList } from "./line-items";
import { Panel } from "./panel";

const meta = {
  title: "Email Components/Panel",
  component: Panel,
  parameters: { layout: "centered" },
  decorators: [
    (Story) => (
      <div className="w-[440px] max-w-full">
        <Story />
      </div>
    ),
  ],
} satisfies Meta<typeof Panel>;

export default meta;
type Story = StoryObj<typeof meta>;

export const WithItemizedList: Story = {
  args: {
    children: (
      <ItemizedList
        items={[
          { label: "Green fee — 18 holes", qty: 2, amount: "$200.00" },
          { label: "Cart fee", qty: 2, amount: "$8.00" },
        ]}
      />
    ),
  },
};
