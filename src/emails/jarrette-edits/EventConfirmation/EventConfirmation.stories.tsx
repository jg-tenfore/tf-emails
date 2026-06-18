import type { Meta, StoryObj } from "@storybook/react-vite";
import type { EventLineItem } from "@/lib/scenario";
import { EventConfirmation } from "./EventConfirmation";

const meta = {
  title: "Jarrette Edits/Events/Confirmation",
  component: EventConfirmation,
  parameters: { layout: "fullscreen" },
  argTypes: { firstName: { control: "text" } },
} satisfies Meta<typeof EventConfirmation>;

export default meta;
type Story = StoryObj<typeof meta>;

/** A booked Member-Guest outing with its default itemized order. */
export const Default: Story = {};

const longItemList: EventLineItem[] = [
  { label: "Green fees", qty: 40, amount: "$3,200.00" },
  { label: "Hole sponsor signs", qty: 18, amount: "$900.00" },
  { label: "Beverage cart service", qty: 1, amount: "$650.00" },
  { label: "Closest-to-the-pin contest entries", qty: 40, amount: "$400.00" },
  { label: "Tournament polo shirts", qty: 40, amount: "$1,600.00" },
  { label: "Embroidered hats", qty: 40, amount: "$600.00" },
  { label: "Range balls", qty: 40, amount: "$200.00" },
  { label: "Engraved trophies", qty: 4, amount: "$480.00" },
  { label: "Mulligan packages", qty: 80, amount: "$800.00" },
  { label: "Skins game buy-in", qty: 10, amount: "$500.00" },
  { label: "Event photographer", qty: 1, amount: "$750.00" },
  { label: "Open bar package", qty: 1, amount: "$1,200.00" },
];

/** A large fundraiser outing with a dozen add-on line items. */
export const LongItemList: Story = {
  args: { items: longItemList },
};
