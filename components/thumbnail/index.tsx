import React from "react";
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
import { DefaultProps } from "../../types/core";

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

interface Props
  extends DefaultProps,
    Partial<ComposeProps<typeof classes, boolean>> {}

export default function Thumbnail(props: Props) {
  const { style, className, children, onClick } = props;
  return (
    <ThumbnailWrapper
      onClick={onClick}
      className={cn(className, extractProps(props, ...classes))}
      style={style}
    >
      {children}
    </ThumbnailWrapper>
  );
}
