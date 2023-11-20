import type { CSSProperties, MouseEvent, ReactNode } from "react";
import type { StyledTarget } from "styled-components/dist/types";

export interface DefaultProps<T extends HTMLElement = HTMLElement> {
  as?: StyledTarget<any>;
  className?: string;
  style?: CSSProperties;
  children?: ReactNode;
  onClick?: (e: MouseEvent<T>) => void;
}
