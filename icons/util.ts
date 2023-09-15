import { cssVar } from "../util/style";
import type { IconProps } from "./types";

export const getInvertFilter = (secondary?: boolean) =>
  `invert(${cssVar(secondary ? "--svg-invert-secondary" : "--svg-invert")})`;

export const composeProps = (props: IconProps) => {
  const { noInvert, secondary, style: _style, ...rest } = props;

  const style = {
    filter: noInvert ? "invert(0)" : getInvertFilter(secondary),
    ..._style,
  };

  return { ...rest, style };
};
