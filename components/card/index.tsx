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

export interface CardProps {
  className?: string;
  style?: CSSProperties;
  heading?: ReactNode;
  description?: ReactNode;
  cover?: ReactNode;
  children?: ReactNode;
}

function Card(props: CardProps) {
  return (
    <CardStyled className={props.className} style={props.style}>
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
