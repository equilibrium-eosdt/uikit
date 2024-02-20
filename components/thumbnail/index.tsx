import React from "react";
import type { ReactNode } from "react";
import cn from "classnames";
import { ThumbnailWrapper, NotificationWrapper, BadgeWrapper } from "./styled";
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
  badge?: ReactNode;
}

export default function Thumbnail(props: ThumbnailProps) {
  const { style, className, children, notificationValue, badge, onClick } =
    props;
  return (
    <ThumbnailWrapper
      onClick={onClick}
      className={cn(className, extractProps(props, ...classes))}
      style={style}
    >
      {children}

      {notificationValue ? (
        <NotificationWrapper>{notificationValue}</NotificationWrapper>
      ) : (
        <Noop />
      )}

      {badge ? <BadgeWrapper>{badge}</BadgeWrapper> : <Noop />}
    </ThumbnailWrapper>
  );
}
