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
  Children,
} from "../../constants/classnames";
import { ComposeProps } from "../../types/util";
import { DefaultProps } from "../../types/core";
import classNames from "classnames";
import { ReactNode } from "react";

const classes = constStrArray(
  L,
  M,
  S,
  Hovered,
  Disabled,
  Pending,
  Secondary,
  WidthFit,
  FullWidth,
  Tertiary,
  Elevated,
  Text,
  Loading,
);

const loaderSvg = (
  <svg viewBox="0 0 24 24">
    <circle cx="12" cy="12" r="10.5"></circle>
  </svg>
);
interface ButtonProps
  extends Partial<ComposeProps<typeof classes, boolean>>,
    DefaultProps {
  icon?: ReactNode;
}

export default function Button(props: ButtonProps) {
  const { children, className, onClick, style, icon, ...rest } = props;
  return (
    <ButtonWrapper
      className={classNames(className, extractProps(rest, ...classes), {
        [Icon]: props.icon,
        [Children]: props.children,
      })}
      style={style}
      onClick={onClick}
    >
      {rest.loading && !icon ? (
        loaderSvg
      ) : rest.loading ? (
        <>
          {loaderSvg}
          {children}
        </>
      ) : (
        <>
          {icon}
          {children}
        </>
      )}
    </ButtonWrapper>
  );
}
