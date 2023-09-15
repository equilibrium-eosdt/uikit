import { forwardRef, InputHTMLAttributes, MouseEvent, ReactNode } from "react";
import * as classNames from "../../constants/classnames";
import { SuperfieldStyled } from "./text.styled";
import Noop from "../helpers/noop";

type Props = InputHTMLAttributes<HTMLInputElement> & {
  className?: string;
  children?: ReactNode;
  tabIndex?: number;
  title?: string;
  postfix?:string;
  autofocus?:boolean;
  onClick?: (e: MouseEvent<HTMLDivElement>) => void;
}

export const SuperField = forwardRef<HTMLInputElement, Props>((props, ref) => {
  const container = (
    <div className="input-container">
      <input
        key="container"
        ref={ref}
        className="input"
        {...props}
      />
    <span className="input__span">
      {props.value}
    </span>
    {
     props.postfix && props.value ? <span className="input__span">{props.postfix}</span> : <Noop />
    }
        

      {props.children}
    </div>
  );

  const hint = (
    <div key="hint" className="input__hint">
      {props.title}
    </div>
  );

  return (
    <SuperfieldStyled className={props.className} onClick={props.onClick}>
      <div className="input__area">
        <>
          {container}
          {hint}
        </>
      </div>
    </SuperfieldStyled>
  );
});

export default Object.assign({}, SuperField, classNames);
