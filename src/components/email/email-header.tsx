import { Logo } from "./logo";

/**
 * Email header: the full-color Sagamore Spring logo, fixed at 160px wide and
 * always centered on a white bar.
 */
export const EmailHeader = () => {
  return (
    <div className="flex items-center justify-center border-b border-secondary bg-primary px-8 py-5">
      <Logo width={160} />
    </div>
  );
};
