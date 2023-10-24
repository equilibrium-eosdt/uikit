import cn from "classnames";
import type { CSSProperties, ReactNode } from "react";
import { LabelWrapper } from "./styled";
import {
  Accent,
  Brand,
  Icon,
  Negative,
  Pending,
  Positive,
  Reverse,
  SignleIcon,
  L,
  M,
  S,
  Badge
} from "../../constants/classnames";
import type { ComposeProps } from "../../types/util";

import { constStrArray, extractProps } from "../../util/type";

const classes = constStrArray(
  Accent,
  Brand,
  Icon,
  Negative,
  Pending,
  Positive,
  Reverse,
  SignleIcon,
  L,
  M,
  S,
  Badge
);

interface Props extends Partial<ComposeProps<typeof classes, boolean>> {
  children?: ReactNode;
  className?: string;
  style?: CSSProperties;
  onClick?: () => void
}

export default function Label(props: Props) {
  return (
    <LabelWrapper
      className={cn(props.className, extractProps(props, ...classes))}
      style={props.style}
      onClick={props.onClick}
    >
      {props.children}
    </LabelWrapper>
  );
}
