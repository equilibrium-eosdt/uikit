import cn from "classnames";

import {
  Suggestion,
  Controls,
  M,
  Elevated,
  Icon,
  Caption,
} from "../../constants/classnames";

import { DefaultProps } from "../../types/core";
import { ComposeProps } from "../../types/util";
import { constStrArray, divideBy } from "../../util/type";
import Noop from "../helpers/noop";
import { FieldContainer } from "./text.styled";

const classes = constStrArray(Suggestion, Controls, M, Elevated, Icon, Caption);

interface FieldContainerProps
  extends DefaultProps,
    Partial<ComposeProps<typeof classes, boolean>> {}

export function FieldInnerContainer(_props: FieldContainerProps) {
  const [classProps, props] = divideBy(_props, ...classes);

  return (
    <FieldContainer
      className={cn(props.className, classProps)}
      style={props.style}
    >
      {classProps.controls ? (
        // resolves problem with controls used inside form
        <button style={{ display: "none" }} />
      ) : (
        <Noop />
      )}
      {props.children}
    </FieldContainer>
  );
}
