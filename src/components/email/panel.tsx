import type { ReactNode } from "react";
import { DetailCard } from "./detail-card";

interface PanelProps {
  children: ReactNode;
  className?: string;
}

/**
 * @deprecated Use `<DetailCard divided={false}>` — the two were merged. Kept so
 * the older email sets keep rendering.
 */
export const Panel = ({ children, className }: PanelProps) => (
  <DetailCard divided={false} className={className}>
    {children}
  </DetailCard>
);
