import type { ReactNode } from "react";

export interface PartnerAsset {
  src: string;
  label: string;
  note?: string;
  /** Background behind the asset preview. */
  background?: string;
  /** Dimensions caption, e.g. "1000×1000". */
  dimensions?: string;
  /** Source file path caption. */
  file?: string;
}

export interface PartnerDetail {
  label: string;
  value: ReactNode;
}

export interface PartnerInfo {
  name: string;
  /** e.g. "Golf course · Lynnfield, MA". */
  category: string;
  /** Accent color (the venue's brand color) for the header chip. */
  accent: string;
  logo: string;
  blurb: string;
  assets: PartnerAsset[];
  details: PartnerDetail[];
  highlights: string[];
}

const AssetCard = ({ asset }: { asset: PartnerAsset }) => (
  <div className="overflow-hidden rounded-xl border border-secondary bg-primary">
    <div
      className="flex items-center justify-center p-6"
      style={{ background: asset.background ?? "#ffffff" }}
    >
      <img
        src={asset.src}
        alt={asset.label}
        className="max-h-56 w-auto max-w-full object-contain"
      />
    </div>
    <div className="border-t border-secondary px-5 py-4">
      <p className="text-sm font-semibold text-primary">{asset.label}</p>
      {asset.note ? (
        <p className="mt-1 text-xs text-tertiary">{asset.note}</p>
      ) : null}
      {asset.dimensions || asset.file ? (
        <dl className="mt-3 flex flex-wrap gap-x-6 gap-y-1 text-xs text-tertiary">
          {asset.dimensions ? (
            <div>
              <dt className="inline font-medium text-secondary">Dimensions:</dt>{" "}
              <dd className="inline font-mono">{asset.dimensions}</dd>
            </div>
          ) : null}
          {asset.file ? (
            <div>
              <dt className="inline font-medium text-secondary">File:</dt>{" "}
              <dd className="inline font-mono">{asset.file}</dd>
            </div>
          ) : null}
        </dl>
      ) : null}
    </div>
  </div>
);

const SectionTitle = ({ children }: { children: ReactNode }) => (
  <h2 className="mb-3 text-sm font-semibold tracking-wide text-secondary uppercase">
    {children}
  </h2>
);

/** Storybook partner page: brand assets + venue details + highlights. */
export const PartnerProfile = ({ partner }: { partner: PartnerInfo }) => (
  <div className="mx-auto max-w-3xl p-8">
    <div className="flex items-center gap-4">
      <img
        src={partner.logo}
        alt={partner.name}
        width={64}
        height={64}
        className="rounded-xl ring-1 ring-black/10"
        style={{ background: partner.accent }}
      />
      <div>
        <h1 className="text-display-xs font-semibold text-primary">
          {partner.name}
        </h1>
        <p className="mt-0.5 text-sm text-tertiary">{partner.category}</p>
      </div>
    </div>

    <p className="mt-4 max-w-xl text-sm text-secondary">{partner.blurb}</p>

    <section className="mt-8">
      <SectionTitle>Brand assets</SectionTitle>
      <div className="grid grid-cols-1 gap-5 sm:grid-cols-2">
        {partner.assets.map((a) => (
          <AssetCard key={a.label + a.background} asset={a} />
        ))}
      </div>
    </section>

    <section className="mt-8">
      <SectionTitle>Venue details</SectionTitle>
      <div className="overflow-hidden rounded-xl border border-secondary bg-primary">
        <dl className="px-5 [&>*+*]:border-t [&>*+*]:border-secondary">
          {partner.details.map((d) => (
            <div
              key={d.label}
              className="flex items-start justify-between gap-4 py-3"
            >
              <dt className="text-sm text-tertiary">{d.label}</dt>
              <dd className="text-right text-sm font-medium text-secondary">
                {d.value}
              </dd>
            </div>
          ))}
        </dl>
      </div>
    </section>

    <section className="mt-8">
      <SectionTitle>Highlights</SectionTitle>
      <ul className="flex flex-col gap-1.5 text-sm text-tertiary">
        {partner.highlights.map((h, i) => (
          <li key={i}>· {h}</li>
        ))}
      </ul>
    </section>
  </div>
);
