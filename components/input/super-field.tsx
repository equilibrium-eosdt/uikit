import { forwardRef, InputHTMLAttributes, MouseEvent, ReactNode } from "react";
import * as classNames from "../../constants/classnames";
import { SuperfieldStyled } from "./text.styled";
import Noop from "../helpers/noop";

type Props = Omit<InputHTMLAttributes<HTMLInputElement>, "value">& {
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

export const SuperField = forwardRef<HTMLInputElement, Props>(({className, style, onClick, title, required, disabled, value, ...props}, ref) => {
  const hasValue = Boolean(value?.trim().length);

  return (
    <SuperfieldStyled className={className} onClick={onClick}>
      <div className="input__area">
        <div className="input-container"
            style={{ width: value ? "fit-conetnt" : "100%" }}
            >
          <input
            key="container"
            ref={ref}
            className="input"
            value={value}
            style={{ width: hasValue ?  (props.resizeFactor ?? 0.5) * ((value?.length ?? 0) + 1)+ "em" : "100%"}}
            {...props}
          />
        {
          hasValue && props.postfix ? <span className="input__span">{props.postfix}</span> : <Noop />
        }
            

          {props.children}
        </div>
        <div key="hint" className="input__hint">
          {title}
        </div>
      </div>
    </SuperfieldStyled>
  );
});

export default Object.assign({}, SuperField, classNames);
