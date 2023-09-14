import { ChangeEvent, forwardRef, MouseEvent, ReactNode } from "react";
import * as classNames from "../../constants/classnames";
import { SuperfieldStyled } from "./text.styled";
import Noop from "../helpers/noop";

interface Props {
  className?: string;
  children?: ReactNode;
  value?: string;
  placeholder?: string;
  tabIndex?: number;
  title?: string;
  type?:string;
  postfix?:string;
  onChange?: (e: ChangeEvent<HTMLInputElement>) => void;
  onClick?: (e: MouseEvent<HTMLDivElement>) => void;
}

export const SuperField = forwardRef<HTMLInputElement, Props>((props, ref) => {
  const container = (
    <div className="input-container">
      <input
        key="container"
        ref={ref}
        tabIndex={props.tabIndex}
        className="input"
        placeholder={props.placeholder}
        value={props.value ?? ""}
        onChange={props.onChange}
        type={props.type ?? ""}
      />

    {
      props.value ? <>  <span className="input__span">{props.value}</span>
      <span className="input__span">{props.postfix ?? ""}</span></> : <Noop />
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
