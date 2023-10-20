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
import type { StyledTarget } from "styled-components/dist/types";

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

export interface Props extends Partial<ComposeProps<typeof classes, boolean>> {
  as?: StyledTarget<any>;
  children?: ReactNode;
  className?: string;
  style?: CSSProperties;
}

export default function Typography(props: Props) {
  return (
    <TypographyWrapper
      as={props.as}
      className={cn(props.className, extractProps(props, ...classes))}
      style={props.style}
    >
      {props.children}
    </TypographyWrapper>
  );
}
