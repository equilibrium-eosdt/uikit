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

interface Props extends Partial<ComposeProps<typeof classes, boolean>> {
  children?: ReactNode;
  className?: string;
  style?: CSSProperties;
}

export default function Typography(props: Props) {
  return (
    <TypographyWrapper
      className={cn(props.className, extractProps(props, ...classes))}
      style={props.style}
    >
      {props.children}
    </TypographyWrapper>
  );
}
