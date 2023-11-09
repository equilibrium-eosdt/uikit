import cn from "classnames";
import UnstyledT, { Props as TypographyProps } from "../../typography";
import * as GlobalClass from "../../../constants/classnames";
import styled from "styled-components";
import { cssVar } from "../../../util/style";

export const SLIDER_TRACK_CLASSNAME = "slider-track";
const INVERT_CLASS = "invert";

const T = styled(UnstyledT)`
  color: ${cssVar("--text-on-light")};
  &.${INVERT_CLASS} {
    color: ${cssVar("--fill-invert-primary")};
  }
`;

export const ActionTypography = (
  props: TypographyProps & { invert?: boolean },
) => {
  const { invert, ...rest } = props;

  return (
    <T
      {...rest}
      className={cn(
        GlobalClass.Action,
        SLIDER_TRACK_CLASSNAME,
        { [INVERT_CLASS]: invert },
        rest.className,
      )}
    >
      {props.children}
    </T>
  );
};
