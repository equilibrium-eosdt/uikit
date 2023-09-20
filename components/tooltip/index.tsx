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

const classes = constStrArray(
  L,
  M,
  S,
  Top,
  Bottom,
  Multiline
);

interface Props extends Partial<ComposeProps<typeof classes, boolean>> {
  content?: string;
  className?: string;
}

export default function Label(props: Props) {
  return (
    <TooltipWrapper
      className={cn(extractProps(props, ...classes))}
    >
      {props.content}
    </TooltipWrapper>
  );
}
