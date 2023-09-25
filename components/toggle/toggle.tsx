import cn from "classnames";
import type { CSSProperties, ReactNode } from "react";
import { ToggleWrapper } from "./styled";
import {
 On
} from "../../constants/classnames";
import type { ComposeProps } from "../../types/util";

import { constStrArray, extractProps } from "../../util/type";

const classes = constStrArray(
On
);

interface Props extends Partial<ComposeProps<typeof classes, boolean>> {
  children?: ReactNode;
  className?: string;
  style?: CSSProperties;
}

export default function Toggle(props: Props) {
  return (
    <ToggleWrapper
      className={cn(props.className, extractProps(props, ...classes))}
      style={props.style}
    />
  );
}
