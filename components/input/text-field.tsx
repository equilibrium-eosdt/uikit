import { ChangeEvent, forwardRef, MouseEvent, ReactNode } from "react";
import { InputBox } from "./text.styled";
import * as classNames from "../../constants/classnames";

interface Props {
  className?: string;
  children?: ReactNode;
  value?: string;
  placeholder?: string;
  tabIndex?: number;
  title?: string;
  reverseHint?: boolean;
  onChange?: (e: ChangeEvent<HTMLInputElement>) => void;
  onClick?: (e: MouseEvent<HTMLLabelElement>) => void;
}

export const TextField = forwardRef<HTMLLabelElement, Props>((props, ref) => {
  const container = (
    <div className="input-container">
      <input
        key="container"
        tabIndex={props.tabIndex}
        className="input"
        placeholder={props.placeholder}
        value={props.value ?? ""}
        onChange={props.onChange}
      />

      {props.children}
    </div>
  );

  const hint = (
    <div key="hint" className="input__hint">
      {props.title}
    </div>
  );

  return (
    <InputBox className={props.className} onClick={props.onClick} ref={ref}>
      <div className="input__area">
        {props.reverseHint ? (
          <>
            {container}
            {hint}
          </>
        ) : (
          <>
            {hint}
            {container}
          </>
        )}
      </div>
    </InputBox>
  );
});

export default Object.assign({}, TextField, classNames);
