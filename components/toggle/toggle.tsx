import cn from "classnames";
import type { CSSProperties, ReactNode } from "react";
import { ToggleWrapper } from "./styled";
import { On } from "../../constants/classnames";
import type { ComposeProps } from "../../types/util";

import { constStrArray, extractProps } from "../../util/type";
import { forwardRef } from "react";

const classes = constStrArray(On);

interface Props extends Partial<ComposeProps<typeof classes, boolean>> {
  children?: ReactNode;
  className?: string;
  style?: CSSProperties;
  onClick?: () => void;
}

const Toggle = forwardRef<HTMLDivElement, Props>((props: Props, ref) => {
  return (
    <ToggleWrapper
      className={cn(props.className, extractProps(props, ...classes))}
      style={props.style}
      onClick={props.onClick}
      ref={ref}
    />
  );
});

export default Toggle;
