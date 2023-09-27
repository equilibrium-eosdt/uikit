import { constStrArray, extractProps } from "../../util/type";
import { ButtonWrapper } from "./styled";

import {
  L,
  M,
  S,
  Hovered,
  Loading,
  Disabled,
  Pending,
  Secondary,
  Tertiary,
  WidthFit,
  Elevated,
  Icon,
  Text,
  FullWidth,
} from "../../constants/classnames";
import { ComposeProps } from "../../types/util";
import { DefaultProps } from "../../types/core";
import classNames from "classnames";

const classes = constStrArray(
  L,
  M,
  S,
  Hovered,
  Loading,
  Disabled,
  Pending,
  Secondary,
  WidthFit,
  FullWidth,
  Tertiary,
  Elevated,
  Icon,
  Text,
);

interface ButtonProps
  extends Partial<ComposeProps<typeof classes, boolean>>,
    DefaultProps {}

export default function Button(props: ButtonProps) {
  const { children, className, onClick, style, ...rest } = props;
  return (
    <ButtonWrapper
      className={classNames(className, extractProps(rest, ...classes))}
      style={style}
      onClick={onClick}
    >
      {children}
    </ButtonWrapper>
  );
}
