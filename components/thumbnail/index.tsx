import React from "react";
import cn from "classnames";
import { ThumbnailWrapper, NotificationWrapper } from "./styled";
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
  Positive,
  Negative,
} from "../../constants/classnames";
import type { ComposeProps } from "../../types/util";

import { constStrArray, extractProps } from "../../util/type";
import { DefaultProps } from "../../types/core";
import Noop from "../helpers/noop";

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
  Positive,
  Negative,
);

export interface ThumbnailProps
  extends DefaultProps,
    Partial<ComposeProps<typeof classes, boolean>> {
  notificationValue?: string;
}

export default function Thumbnail(
  props: ThumbnailProps,
  notificationValue?: string,
) {
  const { style, className, children, onClick } = props;
  return (
    <ThumbnailWrapper
      onClick={onClick}
      className={cn(className, extractProps(props, ...classes))}
      style={style}
    >
      {children}
      
      {notificationValue ? (
        <NotificationWrapper>
          {notificationValue}
        </NotificationWrapper>
      ) : (
        <Noop />
      )}
    </ThumbnailWrapper>
  );
}
