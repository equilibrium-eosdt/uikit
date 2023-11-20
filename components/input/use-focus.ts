import { useRef, useState } from "react";
import { useClickOutside } from "../../hooks/use-outside-click";
import { Focused } from "../../constants/classnames";

export const useFocus = () => {
  const ref = useRef<HTMLLabelElement | null>(null);
  const [inputFocused, setInputFocused] = useState(false);
  useClickOutside(ref, () => {
    setInputFocused(false);
  });

  return {
    onClick: () => setInputFocused(true),
    [Focused]: inputFocused,
    ref,
    setInputFocused,
  };
};
