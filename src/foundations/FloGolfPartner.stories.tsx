import type { Meta, StoryObj } from "@storybook/react-vite";
import { flogolf } from "@/lib/flogolf";
import { PartnerProfile, type PartnerInfo } from "./partner-profile";

const link = "text-brand-secondary underline underline-offset-2";

const floGolf: PartnerInfo = {
  name: flogolf.name,
  category: "Indoor simulator lounge · Saugus, MA",
  accent: flogolf.green,
  logo: flogolf.logo,
  blurb: `${flogolf.tagline} A TenFore booking partner for simulator-bay reservations.`,
  assets: [
    {
      src: flogolf.logo,
      label: "Primary logo",
      note: "White FloGolf monogram on deep emerald.",
      background: "#ffffff",
      dimensions: "1000×1000",
      file: "src/assets/brand/flogolf-logo.png",
    },
    {
      src: flogolf.logo,
      label: "Primary logo (on dark)",
      background: "#0c0e12",
    },
    {
      src: flogolf.loungeImage,
      label: "Lounge photography",
      note: "Simulator bays and lounge seating.",
      background: "#eceff3",
      dimensions: "1024×683",
      file: "src/assets/brand/flogolf-lounge.jpg",
    },
  ],
  details: [
    {
      label: "Address",
      value: `${flogolf.address.line1}, ${flogolf.address.line2}`,
    },
    {
      label: "Phone",
      value: (
        <a href={`tel:${flogolf.phone.replace(/[^\d]/g, "")}`} className={link}>
          {flogolf.phone}
        </a>
      ),
    },
    {
      label: "Website",
      value: (
        <a href={flogolf.url} className={link}>
          flogolflounge.com
        </a>
      ),
    },
    {
      label: "Bay booking",
      value: (
        <a href={flogolf.bookingUrl} className={link}>
          Book online
        </a>
      ),
    },
    { label: "Simulator bays", value: `${flogolf.totalBays} Golfzon bays` },
    {
      label: "Map",
      value: (
        <a href={flogolf.mapUrl} className={link}>
          Google Maps
        </a>
      ),
    },
  ],
  highlights: [
    "10 Golfzon simulator bays, booked by the hour",
    "Up to 6 players can share a bay",
    "Full bar, food, and sports viewing on site",
    "Clubs provided, or bring your own",
    "Bay reservations through the TenFore platform",
  ],
};

const meta = {
  title: "TenFore Partners/FloGolf Lounge",
  component: PartnerProfile,
  parameters: { layout: "fullscreen" },
} satisfies Meta<typeof PartnerProfile>;

export default meta;
type Story = StoryObj<typeof meta>;

export const Profile: Story = { args: { partner: floGolf } };
