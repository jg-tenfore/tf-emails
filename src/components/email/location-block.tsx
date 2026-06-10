import type { ReactNode } from "react";
import { MarkerPin02 } from "@untitledui/icons";
import { cx } from "@/utils/cx";

interface LocationBlockProps {
  name: ReactNode;
  address: ReactNode;
  /** Optional note after the name, e.g. "Twilight · 9 holes". */
  note?: ReactNode;
  /** When set, renders a "Map it" link. */
  mapUrl?: string;
  className?: string;
}

/**
 * Venue location line: a map-pin + venue name, address and optional "Map it"
 * link. Used under booking summaries in confirmation/reminder emails.
 */
export const LocationBlock = ({
  name,
  address,
  note,
  mapUrl,
  className,
}: LocationBlockProps) => (
  <div className={cx("flex items-start gap-3", className)}>
    <MarkerPin02 className="mt-0.5 size-4 shrink-0 text-brand-secondary" />
    <p className="text-sm text-secondary">
      <span className="font-semibold text-primary">{name}</span>
      {note ? <span className="text-tertiary"> · {note}</span> : null}
      <br />
      {address}
      {mapUrl ? (
        <>
          {" · "}
          <a
            href={mapUrl}
            className="font-medium text-brand-secondary underline underline-offset-2"
          >
            Map it
          </a>
        </>
      ) : null}
    </p>
  </div>
);
