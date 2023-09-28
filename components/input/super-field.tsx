import { forwardRef, InputHTMLAttributes, MouseEvent, ReactNode } from "react";
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
  postfix?:string;
  autofocus?:boolean;
  resizeFactor?: number;
  value?: string;
  required?: boolean;
  disabled?:boolean;
  onClick?: (e: MouseEvent<HTMLDivElement>) => void;
}

export const SuperField = forwardRef<HTMLInputElement, Props>(({className, style, onClick, title, required, disabled, value, children, ...props}, ref) => {
  const hasValue = Boolean(value?.trim().length);

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
            style={{ width: hasValue ?  (props.resizeFactor ?? 0.46) * ((value?.length ?? 0) + 1)+ "em" : "100%"}}
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
