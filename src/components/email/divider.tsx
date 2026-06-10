import { cx } from "@/utils/cx";

interface DividerProps {
  className?: string;
}

/** Hairline rule used to separate email sections. */
export const Divider = ({ className }: DividerProps) => (
  <div className={cx("w-full border-t border-secondary", className)} />
);
