import type { Meta, StoryObj } from "@storybook/react-vite";
import { assets } from "@/lib/assets";
import { course, courseImage } from "@/lib/scenario";
import { flogolf } from "@/lib/flogolf";
import { EmailHero } from "./email-hero";

const meta = {
  title: "Email Components/Hero",
  component: EmailHero,
  parameters: { layout: "fullscreen" },
  decorators: [
    (Story) => (
      <div className="mx-auto w-[600px] max-w-full bg-primary py-3">
        <Story />
      </div>
    ),
  ],
} satisfies Meta<typeof EmailHero>;

export default meta;
type Story = StoryObj<typeof meta>;

/**
 * Sagamore Spring — course photo, logo overlay, and a confirmation caption.
 * The band carries the course note, address, and a "Get directions" link, so
 * the email body needs no separate location block.
 */
export const Sagamore: Story = {
  args: {
    imageUrl: courseImage,
    imageAlt: "Sagamore Spring Golf Club",
    logoUrl: assets.logo.src,
    logoAlt: "Sagamore Spring Golf Club",
    eyebrow: "Confirmation #421292164",
    headline: "Sagamore Spring Golf Club",
    details: ["Twilight · 9 holes", "1287 Main Street, Lynnfield, MA 01940"],
    mapUrl: course.mapUrl,
  },
};

/** FloGolf Lounge — lounge photo with the FloGolf logo overlay and directions. */
export const FloGolf: Story = {
  args: {
    imageUrl: flogolf.loungeImage,
    imageAlt: `${flogolf.name} simulator lounge`,
    logoUrl: flogolf.logo,
    logoAlt: flogolf.name,
    eyebrow: "Booking confirmed",
    headline: flogolf.name,
    details: [
      `${flogolf.address.line1}, ${flogolf.address.line2}`,
      "Bay 7 · 6:00–8:00 PM",
    ],
    mapUrl: flogolf.mapUrl,
  },
};

/** Edge case: captioned, but no logo overlay. */
export const NoLogo: Story = {
  args: {
    imageUrl: courseImage,
    imageAlt: "Sagamore Spring Golf Club",
    eyebrow: "Confirmation #421292164",
    headline: "Sagamore Spring Golf Club",
  },
};

/** Edge case: image only — no caption, no logo. */
export const ImageOnly: Story = {
  args: { imageUrl: courseImage, imageAlt: "Sagamore Spring Golf Club" },
};
