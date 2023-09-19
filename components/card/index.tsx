import type { CSSProperties, ReactNode } from "react";

import {
  CardItem,
  CardDescription,
  CardHeading,
  CardIcon,
  CardRow,
  CardItemDescription,
  CardItemTitle,
  CardStyled,
} from "./styled";
import Noop from "../helpers/noop";
import { constStrArray, extractProps} from "../../util/type";
import {
  L,
  M,
  Reverse,
  Secondary
} from "../../constants/classnames";
import cn from "classnames";
import type { ComposeProps } from "../../types/util";

export interface CardProps  extends Partial<ComposeProps<typeof classes, boolean>>  {
  className?: string;
  style?: CSSProperties;
  heading?: ReactNode;
  description?: ReactNode;
  cover?: ReactNode;
  children?: ReactNode;
}

const classes = constStrArray(
  M,
  L,
  Reverse, 
  Secondary,
  "clearMargin"
);


function Card(props: CardProps) {
  return (
    <CardStyled className={cn(props.className, extractProps(props, ...classes))} style={props.style}>
      {props.heading ? <CardHeading>{props.heading}</CardHeading> : <Noop />}

      {props.description ? (
        <CardDescription>{props.description}</CardDescription>
      ) : (
        <Noop />
      )}

      <CardRow>
        {props.cover ? <CardIcon>{props.cover}</CardIcon> : <Noop />}
        {props.children}
      </CardRow>
    </CardStyled>
  );
}

export default Card;
export { CardItem, CardItemDescription, CardItemTitle };
