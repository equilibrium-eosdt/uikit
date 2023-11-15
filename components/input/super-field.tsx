import React, {
  forwardRef,
  InputHTMLAttributes,
  MouseEvent,
  ReactNode,
} from "react";
import cn from "classnames";
import * as classNames from "../../constants/classnames";
import { SuperfieldStyled } from "./text.styled";
import Noop from "../helpers/noop";
import { constStrArray, divideBy, isNumStr } from "../../util/type";
import { ComposeProps } from "../../types/util";

const classes = constStrArray(
  classNames.Suggestion,
  classNames.Controls,
  classNames.Hovered,
  classNames.Focused,
  classNames.Filled,
  classNames.Error,
  classNames.Pending,
);

interface WidthMap extends Record<string, number> {
  __default: number;
}

const WIDTHS: WidthMap = {
  __default: 13,
  "1": 11,
  "2": 13,
  "3": 13,
  "4": 13.6,
  "5": 12.7,
  "6": 12.7,
  "7": 12,
  "8": 13.2,
  "9": 12.8,
  ".": 10,
};

type Props = Omit<InputHTMLAttributes<HTMLInputElement>, "value" | "title"> &
  Partial<ComposeProps<typeof classes, boolean>> & {
    className?: string;
    children?: ReactNode;
    tabIndex?: number;
    title?: string | React.ReactNode;
    postfix?: string;
    autofocus?: boolean;
    resizeFactor?: WidthMap;
    value?: string;
    required?: boolean;
    disabled?: boolean;
    onClick?: (e: MouseEvent<HTMLLabelElement>) => void;
  };

const absoluteNumStrLength = (str: `${number}`, factors: WidthMap) =>
  str
    .split("")
    .reduce(
      (prev: number, char: string | number) =>
        prev + (factors[char] ?? factors.__default),
      0,
    );

const Superfield = forwardRef<HTMLLabelElement, Props>(
  (
    {
      className,
      style,
      onClick,
      resizeFactor = WIDTHS,
      title,
      required,
      disabled,
      value,
      children,
      ...props
    },
    ref,
  ) => {
    const hasValue = Boolean(value?.trim().length);

    const width = isNumStr(value)
      ? absoluteNumStrLength(value, resizeFactor)
      : undefined;

    const [composedProps, rest] = divideBy(props, ...classes);

    return (
      <SuperfieldStyled
        className={cn(className, composedProps)}
        onClick={onClick}
        ref={ref}
      >
        <div className="input__area">
          <div
            className="input-container"
            style={{ width: value ? "fit-conetnt" : "100%" }}
          >
            <input
              key="container"
              className="input"
              value={value}
              style={{
                width,
              }}
              {...rest}
            />
            {hasValue && props.postfix ? (
              <span className="input__span">{props.postfix}</span>
            ) : (
              <Noop />
            )}
          </div>
          <div key="hint" className="input__hint">
            {title}
          </div>
        </div>
        {children}
      </SuperfieldStyled>
    );
  },
);

export default Superfield;
