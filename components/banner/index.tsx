import cn from "classnames";
import type { CSSProperties, ReactNode } from "react";
import { BannerWrapper } from "./styled";
import {
  Accent,
  Alert,
  S,
  M,
  L
} from "../../constants/classnames";
import type { ComposeProps } from "../../types/util";

import { constStrArray, extractProps } from "../../util/type";

const classes = constStrArray(
  Accent,
  Alert,
  S,
  M,
  L
);

interface Props extends Partial<ComposeProps<typeof classes, boolean>> {
  children?: ReactNode;
  className?: string;
  style?: CSSProperties;
}

export default function Banner(props: Props) {
  return (
    <BannerWrapper
      className={cn(props.className, extractProps(props, ...classes))}
      style={props.style}
    >
      {props.children}
    </BannerWrapper>
  );
}
