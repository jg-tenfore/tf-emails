import type { Meta, StoryObj } from "@storybook/react-vite";
import signature from "@/assets/brand/signature.svg";
import { SignatureBlock } from "./signature-block";

const meta = {
  title: "Email Components/Signature Block",
  component: SignatureBlock,
  parameters: { layout: "centered" },
  decorators: [
    (Story) => (
      <div className="w-[440px] max-w-full">
        <Story />
      </div>
    ),
  ],
} satisfies Meta<typeof SignatureBlock>;

export default meta;
type Story = StoryObj<typeof meta>;

export const Signed: Story = {
  args: {
    signatureUrl: signature,
    name: "Justin Girard",
    date: "April 21, 2026",
    statement:
      "By signing, you accept the cart rental terms above and accept liability for any damage to Cart 14.",
  },
};
