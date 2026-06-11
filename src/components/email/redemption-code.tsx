import type { ReactNode } from "react";
import { cx } from "@/utils/cx";

export type RedemptionVariant = "pin" | "barcode" | "qr";

interface RedemptionCodeProps {
  /** How to render the code: a 6-digit PIN, a UPC barcode, or a QR code. */
  variant?: RedemptionVariant;
  /** The code value (digits for pin/barcode; any string is encoded for qr). */
  code: string;
  /** Small uppercase label above the code, e.g. "Range bucket". */
  label?: ReactNode;
  /** Helper line under the code, e.g. "Scan at the ball machine." */
  instructions?: ReactNode;
  className?: string;
}

/** Email-safe barcode: alternating bars via a repeating gradient. */
const BARCODE =
  "repeating-linear-gradient(90deg, #1d2939 0, #1d2939 2px, transparent 2px, transparent 4px, #1d2939 4px, #1d2939 5px, transparent 5px, transparent 8px)";

const Pin = ({ code }: { code: string }) => (
  <div className="flex justify-center gap-2">
    {code.split("").map((d, i) => (
      <span
        key={i}
        className="flex size-11 items-center justify-center rounded-lg border border-secondary bg-primary font-mono text-xl font-semibold text-primary"
      >
        {d}
      </span>
    ))}
  </div>
);

const Barcode = ({ code }: { code: string }) => (
  <div>
    <div className="mx-auto max-w-full rounded-md bg-white px-4 py-3 ring-1 ring-black/5">
      <div
        className="mx-auto h-16 w-56 max-w-full"
        style={{ backgroundImage: BARCODE }}
        aria-hidden="true"
      />
    </div>
    <p className="mt-2 text-center font-mono text-sm tracking-[0.3em] text-secondary">
      {code}
    </p>
  </div>
);

/** Deterministic QR-style matrix (a visual representation, not a scannable QR). */
const Qr = ({ code, size = 132 }: { code: string; size?: number }) => {
  const n = 25;
  const cell = size / n;
  const seed = code || "code";

  const ring = (r: number, c: number, br: number, bc: number) => {
    const lr = r - br;
    const lc = c - bc;
    if (lr < 0 || lr > 6 || lc < 0 || lc > 6) return false;
    const onBorder = lr === 0 || lr === 6 || lc === 0 || lc === 6;
    const center = lr >= 2 && lr <= 4 && lc >= 2 && lc <= 4;
    return onBorder || center;
  };
  const reserved = (r: number, c: number) =>
    (r < 8 && c < 8) || (r < 8 && c >= n - 8) || (r >= n - 8 && c < 8);
  const finder = (r: number, c: number) =>
    ring(r, c, 0, 0) || ring(r, c, 0, n - 7) || ring(r, c, n - 7, 0);

  const rects: ReactNode[] = [];
  for (let r = 0; r < n; r++) {
    for (let c = 0; c < n; c++) {
      const fill = reserved(r, c)
        ? finder(r, c)
        : (seed.charCodeAt((r * n + c) % seed.length) * 7 + r * 31 + c * 17) %
            100 <
          45;
      if (fill) {
        rects.push(
          <rect
            key={`${r}-${c}`}
            x={c * cell}
            y={r * cell}
            width={cell}
            height={cell}
            fill="#1d2939"
          />,
        );
      }
    }
  }
  return (
    <div className="mx-auto w-fit rounded-md bg-white p-3 ring-1 ring-black/5">
      <svg
        viewBox={`0 0 ${size} ${size}`}
        width={size}
        height={size}
        role="img"
        aria-label={`QR code ${code}`}
      >
        {rects}
      </svg>
    </div>
  );
};

/**
 * Deterministic 8-character manual-entry code (XXXX-XXXX) derived from the QR
 * value — a fallback the recipient can read out if the QR won't scan.
 */
const manualCode = (seed: string) => {
  const chars = "ABCDEFGHJKLMNPQRSTUVWXYZ23456789";
  const s = seed || "code";
  let out = "";
  for (let i = 0; i < 8; i++) {
    const n =
      (s.charCodeAt(i % s.length) * 31 + i * 17 + s.length * 7) % chars.length;
    out += chars[n];
  }
  return `${out.slice(0, 4)}-${out.slice(4)}`;
};

/**
 * Redeemable code for vouchers/add-ons (e.g. a range bucket on an order). Render
 * it as a 6-digit PIN, a UPC barcode, or a QR code — the recipient shows it at
 * the counter or scans it at the machine.
 */
export const RedemptionCode = ({
  variant = "pin",
  code,
  label,
  instructions,
  className,
}: RedemptionCodeProps) => (
  <div
    className={cx(
      "rounded-xl border border-secondary bg-secondary px-5 py-5 text-center",
      className,
    )}
  >
    {label ? (
      <p className="mb-3 text-xs font-semibold tracking-wide text-tertiary uppercase">
        {label}
      </p>
    ) : null}

    {variant === "pin" ? <Pin code={code} /> : null}
    {variant === "barcode" ? <Barcode code={code} /> : null}
    {variant === "qr" ? (
      <div>
        <Qr code={code} />
        <p className="mt-3 text-xs text-quaternary">
          Can't scan? Here's your code:
        </p>
        <p className="mt-1 font-mono text-sm font-semibold uppercase tracking-[0.25em] text-secondary">
          {manualCode(code)}
        </p>
      </div>
    ) : null}

    {instructions ? (
      <p className="mt-3 text-sm text-tertiary">{instructions}</p>
    ) : null}
  </div>
);
