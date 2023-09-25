import type { CSSProperties, MouseEvent, ReactNode } from "react";

export interface DefaultProps {
  className?: string;
  style?: CSSProperties;
  children?: ReactNode;
  onClick?: (e: MouseEvent) => void;
}
