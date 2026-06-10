import type { Meta, StoryObj } from "@storybook/react-vite";
import { assets } from "@/lib/assets";
import { course } from "@/lib/scenario";
import { PartnerProfile, type PartnerInfo } from "./partner-profile";

const link = "text-brand-secondary underline underline-offset-2";

const sagamore: PartnerInfo = {
  name: course.name,
  category: "Golf course · Lynnfield, MA",
  accent: "#0a3d24",
  logo: assets.logo.src,
  blurb:
    "A classic New England public golf course and TenFore booking partner — known for twilight rounds, member rates, and the Sagamore Pass.",
  assets: [
    {
      src: assets.logo.src,
      label: "Primary logo",
      note: assets.logo.note,
      background: "#ffffff",
      dimensions: `${assets.logo.width}×${assets.logo.height}`,
      file: assets.logo.file,
    },
    {
      src: assets.logo.src,
      label: "Primary logo (on dark)",
      background: "#0c0e12",
    },
    {
      src: assets.courseHero.src,
      label: "Course photography",
      note: assets.courseHero.note,
      background: "#eceff3",
      dimensions: `${assets.courseHero.width}×${assets.courseHero.height}`,
      file: assets.courseHero.file,
    },
  ],
  details: [
    { label: "Address", value: course.address },
    {
      label: "Phone",
      value: (
        <a href={`tel:${course.phone.replace(/[^\d]/g, "")}`} className={link}>
          {course.phone}
        </a>
      ),
    },
    {
      label: "Website",
      value: (
        <a href="https://www.sagamoregolf.com" className={link}>
          sagamoregolf.com
        </a>
      ),
    },
    {
      label: "Tee-time booking",
      value: (
        <a href={course.bookingUrl} className={link}>
          Book online
        </a>
      ),
    },
    {
      label: "Map",
      value: (
        <a href={course.mapUrl} className={link}>
          Google Maps
        </a>
      ),
    },
  ],
  highlights: [
    "9 and 18-hole rounds with cart and walking options",
    "Twilight deals and Sagamore Pass member pricing",
    "Online tee-time booking through the TenFore platform",
    "Free cancellation up to 24 hours before your tee time",
  ],
};

const meta = {
  title: "TenFore Partners/Sagamore Spring Golf Club",
  component: PartnerProfile,
  parameters: { layout: "fullscreen" },
} satisfies Meta<typeof PartnerProfile>;

export default meta;
type Story = StoryObj<typeof meta>;

export const Profile: Story = { args: { partner: sagamore } };
