import type { ReactNode } from "react";

import {
  CardDescription,
  CardHeading,
  CardIcon,
  CardRow,
  CardStyled,
} from "./styled";
import Noop from "../helpers/noop";
import { constStrArray, extractProps } from "../../util/type";
import { L, M, Reverse, Secondary } from "../../constants/classnames";
import cn from "classnames";
import type { ComposeProps } from "../../types/util";
import type { DefaultProps } from "../../types/core";

export interface CardProps
  extends DefaultProps,
    Partial<ComposeProps<typeof classes, boolean>> {
  heading?: ReactNode;
  description?: ReactNode;
  cover?: ReactNode;
}

const classes = constStrArray(M, L, Reverse, Secondary, "clearMargin");

function Card(props: CardProps) {
  return (
    <CardStyled
      className={cn(props.className, extractProps(props, ...classes))}
      style={props.style}
      onClick={props.onClick}
    >
      {props.heading ? <CardHeading>{props.heading}</CardHeading> : <Noop />}

      {props.description ? (
        <CardDescription>{props.description}</CardDescription>
      ) : (
        <Noop />
      )}

      <CardRow>
        {props.cover ? (
          <CardIcon className="card-icon">{props.cover}</CardIcon>
        ) : (
          <Noop />
        )}
        {props.children}
      </CardRow>
    </CardStyled>
  );
}

export default Card;
