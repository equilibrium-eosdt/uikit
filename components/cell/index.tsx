import cn from "classnames";
import type { ReactNode } from "react";
import { Reverse } from "../../constants/classnames";
import type { DefaultProps } from "../../types/core";
import type { ComposeProps } from "../../types/util";
import { constStrArray, extractProps } from "../../util/type";
import { CellWrapper, CellItemWrapper } from "./styled";
import Noop from "../helpers/noop";

const classNames = constStrArray(Reverse, "clearMargin");

interface ItemProps
  extends Partial<ComposeProps<typeof classNames, boolean>>,
    DefaultProps {
  label?: ReactNode;
}

export function CellItem(props: ItemProps) {
  const { className, style, children, label } = props;

  return (
    <CellItemWrapper
      className={cn(className, extractProps(props, ...classNames))}
      style={style}
    >
      {children}
      {label ? <div className="item-label">{label}</div> : <Noop />}
    </CellItemWrapper>
  );
}

export default CellWrapper;
