import type { Meta, StoryObj } from "@storybook/react-vite";
import { proShopOrder, snackBarOrder } from "@/lib/scenario";
import { PurchaseReceipt } from "./PurchaseReceipt";

const meta = {
  title: "Jarrette Edits/Orders/Purchase Receipt",
  component: PurchaseReceipt,
  parameters: { layout: "fullscreen" },
  argTypes: { firstName: { control: "text" } },
} satisfies Meta<typeof PurchaseReceipt>;

export default meta;
type Story = StoryObj<typeof meta>;

/** Pro shop retail — a dozen Pro V1s, a logo T-shirt, and a pack of tees. */
export const ProShop: Story = { args: { order: proShopOrder } };

/** Snack bar — chips, a Gatorade, water, cookies, and a couple of beers. */
export const SnackBar: Story = { args: { order: snackBarOrder } };
