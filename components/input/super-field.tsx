import React, { forwardRef, InputHTMLAttributes, MouseEvent, ReactNode } from "react";
import cn from "classnames";
import * as classNames from "../../constants/classnames";
import { SuperfieldStyled } from "./text.styled";
import Noop from "../helpers/noop";
import { constStrArray, extractProps } from "../../util/type";
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

type Props = Omit<InputHTMLAttributes<HTMLInputElement>, "value"> & Partial<ComposeProps<typeof classes, boolean>> & {
  className?: string;
  children?: ReactNode;
  tabIndex?: number;
  title?: string;
  postfix?: string;
  autofocus?: boolean;
  resizeFactor?: number;
  value?: string;
  required?: boolean;
  disabled?: boolean;
  onClick?: (e: MouseEvent<HTMLDivElement>) => void;
}

const isNumStr = (num?: string): num is `${number}` => {
  if (!num) {
    return false;
  }

  const val = Number(num);
  return Number.isFinite(val);
};

export const SuperField = forwardRef<HTMLInputElement, Props>(({ className, style, onClick, title, required, disabled, value, children, ...props }, ref) => {
  const hasValue = Boolean(value?.trim().length);
  const lettesWidth: Record<string, number> = { "1": 9, "2": 13, "3": 13, "4": 13.6, "5": 12.7, "6": 12.7, "7": 12, "8": 13.2, "9": 12.8, ".": 10 }

  const absoluteNumStrLength = (
    str: `${number}`, factors: Record<string, number>) =>
    str.split("").reduce((prev: number, char: string | number) => prev + factors[char] ?? 0.5, 0
    )

  return (
    <SuperfieldStyled className={cn(className, extractProps(props, ...classes))} onClick={onClick}>
      <div className="input__area">
        <div className="input-container"
          style={{ width: value ? "fit-conetnt" : "100%" }}
        >
          <input
            key="container"
            ref={ref}
            className="input"
            value={value}
            style={{ width: absoluteNumStrLength(isNumStr(value) ? value : "0", lettesWidth)}}
            {...props}
          />
          {
            hasValue && props.postfix ? <span className="input__span">{props.postfix}</span> : <Noop />
          }
        </div>
        <div key="hint" className="input__hint">
          {title}
        </div>
      </div>
      {children}

    </SuperfieldStyled>
  );
});

export default Object.assign({}, SuperField, classNames);
