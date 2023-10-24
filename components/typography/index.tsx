import cn from "classnames";
import type { CSSProperties, ReactNode } from "react";
import { TypographyWrapper } from "./styled";
import {
  Title,
  HeaderL,
  HeaderM,
  HeaderS,
  Action,
  Body,
  Caption,
  Secondary,
} from "../../constants/classnames";
import type { ComposeProps } from "../../types/util";

import { constStrArray, extractProps } from "../../util/type";
import { DefaultProps } from "../../types/core";

const classes = constStrArray(
  Title,
  HeaderL,
  HeaderM,
  HeaderS,
  Action,
  Body,
  Caption,
  Secondary,
);

export interface Props
  extends DefaultProps,
    Partial<ComposeProps<typeof classes, boolean>> {}

export default function Typography(props: Props) {
  return (
    <TypographyWrapper
      as={props.as}
      className={cn(props.className, extractProps(props, ...classes))}
      style={props.style}
      onClick={props.onClick}
    >
      {props.children}
    </TypographyWrapper>
  );
}
