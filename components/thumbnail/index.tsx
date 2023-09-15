import cn from "classnames";
import type { CSSProperties, ReactNode } from "react";
import { ThumbnailWrapper } from "./styled";
import {
  XL,
  M,
  L,
  S,
  Rectangle,
  DarkBG,
  LightBg,
  Status,
  Accent,
  Image,
} from "../../constants/classnames";
import type { ComposeProps } from "../../types/util";

import { constStrArray, extractProps } from "../../util/type";

const classes = constStrArray(
  XL,
  M,
  L,
  S,
  Rectangle,
  DarkBG,
  LightBg,
  Status,
  Accent,
  Image,
);

interface Props extends Partial<ComposeProps<typeof classes, boolean>> {
  children?: ReactNode;
  className?: string;
  style?: CSSProperties;
}

export default function Thumbnail(props: Props) {
  return (
    <ThumbnailWrapper
      className={cn(props.className, extractProps(props, ...classes))}
      style={props.style}
    >
      {props.children}
    </ThumbnailWrapper>
  );
}
