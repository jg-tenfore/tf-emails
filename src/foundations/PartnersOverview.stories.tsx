import type { Meta, StoryObj } from "@storybook/react-vite";
import { assets, craneApp } from "@/lib/assets";
import { brand } from "@/lib/brand";
import { course } from "@/lib/scenario";
import { flogolf } from "@/lib/flogolf";

const PartnerRow = ({
  logo,
  name,
  category,
  accent,
}: {
  logo: string;
  name: string;
  category: string;
  accent: string;
}) => (
  <div className="flex items-center gap-4 rounded-xl border border-secondary bg-primary px-5 py-4">
    <img
      src={logo}
      alt={name}
      width={48}
      height={48}
      className="rounded-lg ring-1 ring-black/10"
      style={{ background: accent }}
    />
    <div>
      <p className="text-sm font-semibold text-primary">{name}</p>
      <p className="text-xs text-tertiary">{category}</p>
    </div>
  </div>
);

const SectionTitle = ({ children }: { children: string }) => (
  <h2 className="mb-3 text-sm font-semibold tracking-wide text-secondary uppercase">
    {children}
  </h2>
);

const Overview = () => (
  <div className="mx-auto max-w-3xl p-8">
    <h1 className="text-display-xs font-semibold text-primary">
      TenFore Partner Network
    </h1>
    <p className="mt-2 max-w-xl text-sm text-secondary">{brand.tagline}</p>
    <p className="mt-2 max-w-xl text-sm text-tertiary">
      Golfers book seamlessly across every venue below with one TenFore
      account — and the network keeps growing.
    </p>

    <section className="mt-8">
      <SectionTitle>Active partners</SectionTitle>
      <div className="flex flex-col gap-4">
        <PartnerRow
          logo={assets.logo.src}
          name={course.name}
          category="Golf course · Lynnfield, MA"
          accent="#0a3d24"
        />
        <PartnerRow
          logo={flogolf.logo}
          name={flogolf.name}
          category="Indoor simulator lounge · Saugus, MA"
          accent={flogolf.green}
        />
      </div>
    </section>

    <section className="mt-8">
      <SectionTitle>Booking app</SectionTitle>
      <div className="flex items-center gap-4 rounded-xl border border-secondary bg-primary px-5 py-4">
        <img
          src={assets.craneIcon.src}
          alt={craneApp.name}
          width={48}
          height={48}
          className="rounded-[22%] ring-1 ring-black/10"
        />
        <div>
          <p className="text-sm font-semibold text-primary">{craneApp.name}</p>
          <p className="text-xs text-tertiary">
            {craneApp.tagline} · {craneApp.rating}★ ({craneApp.ratingCount}{" "}
            ratings)
          </p>
        </div>
      </div>
    </section>
  </div>
);

const meta = {
  title: "TenFore Partners/Overview",
  component: Overview,
  parameters: { layout: "fullscreen" },
} satisfies Meta<typeof Overview>;

export default meta;
type Story = StoryObj<typeof meta>;

export const All: Story = {};
