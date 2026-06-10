import type { Meta, StoryObj } from "@storybook/react-vite";
import { assets, type BrandAsset } from "@/lib/assets";

/**
 * Storybook-only catalog of stored Sagamore Spring brand assets. These are
 * logged for future use and are not yet wired into any email.
 */
const AssetCard = ({
  asset,
  background,
}: {
  asset: BrandAsset;
  background?: string;
}) => (
  <div className="overflow-hidden rounded-xl border border-secondary bg-primary">
    <div
      className="flex items-center justify-center p-6"
      style={{ background: background ?? "#ffffff" }}
    >
      <img
        src={asset.src}
        alt={asset.alt}
        className="max-h-64 w-auto max-w-full object-contain"
      />
    </div>
    <div className="border-t border-secondary px-5 py-4">
      <p className="text-sm font-semibold text-primary">{asset.alt}</p>
      <p className="mt-1 text-xs text-tertiary">{asset.note}</p>
      <dl className="mt-3 flex flex-wrap gap-x-6 gap-y-1 text-xs text-tertiary">
        <div>
          <dt className="inline font-medium text-secondary">Dimensions:</dt>{" "}
          <dd className="inline font-mono">
            {asset.width}×{asset.height}
          </dd>
        </div>
        <div>
          <dt className="inline font-medium text-secondary">File:</dt>{" "}
          <dd className="inline font-mono">{asset.file}</dd>
        </div>
      </dl>
    </div>
  </div>
);

const Gallery = () => (
  <div className="mx-auto max-w-3xl p-8">
    <h1 className="text-display-xs font-semibold text-primary">
      Sagamore Spring — Brand Assets
    </h1>
    <p className="mt-2 max-w-xl text-sm text-tertiary">
      Stored brand assets available for the Sagamore Spring email scenarios.
      Logged here for reference; not yet applied to any email.
    </p>
    <div className="mt-8 flex flex-col gap-8">
      <section>
        <h2 className="mb-3 text-sm font-semibold tracking-wide text-secondary uppercase">
          Logo
        </h2>
        <div className="grid grid-cols-1 gap-5 sm:grid-cols-2">
          <AssetCard asset={assets.logo} background="#ffffff" />
          <AssetCard asset={assets.logo} background="#0c0e12" />
        </div>
      </section>
      <section>
        <h2 className="mb-3 text-sm font-semibold tracking-wide text-secondary uppercase">
          Course photography
        </h2>
        <AssetCard asset={assets.courseHero} background="#eceff3" />
      </section>
      <section>
        <h2 className="mb-3 text-sm font-semibold tracking-wide text-secondary uppercase">
          TenFore Crane app
        </h2>
        <div className="grid grid-cols-1 gap-5 sm:grid-cols-2">
          <AssetCard asset={assets.craneIcon} background="#ffffff" />
        </div>
      </section>
    </div>
  </div>
);

const meta = {
  title: "Foundations/Brand Assets",
  component: Gallery,
  parameters: { layout: "fullscreen" },
} satisfies Meta<typeof Gallery>;

export default meta;
type Story = StoryObj<typeof meta>;

export const All: Story = {};
