import cn from "classnames";
import { TooltipWrapper } from "./styled";
import {
  L,
  M,
  S,
  Top,
  Bottom,
  Multiline
} from "../../constants/classnames";
import type { ComposeProps } from "../../types/util";

import { constStrArray, extractProps } from "../../util/type";
import { ReactNode } from "react";

const classes = constStrArray(
  L,
  M,
  S,
  Top,
  Bottom,
  Multiline
);

interface Props extends Partial<ComposeProps<typeof classes, boolean>> {
  children: ReactNode;
  className?: string;
}

export default function Tooltip(props: Props) {
  return (
    <TooltipWrapper
      className={cn(extractProps(props, ...classes))}
    >
      {props.children}
    </TooltipWrapper>
  );
}
