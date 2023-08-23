import {
  CardDescription,
  CardHeading,
  CardIcon,
  CardRow,
  CardRowDescription,
  CardRowLeft,
  CardRowRight,
  CardRowTitle,
  CardStyled,
} from "./card.styled";

interface CardProps {
  heading?: string;
  mainDescription?: string;
  iconSrc?: string;
  title: string;
  underTitle: string;
  value: string;
  underValue: string;
  className?: string;
}

const Card = ({
  heading,
  mainDescription,
  iconSrc,
  title,
  underTitle,
  value,
  underValue,
  className,
}: CardProps) => {
  return (
    <CardStyled className={className || ""}>
      {heading && <CardHeading>{heading}</CardHeading>}
      {mainDescription && <CardDescription>{mainDescription}</CardDescription>}

      <CardRow>
        <CardRowLeft>
          {iconSrc && (
            <CardIcon>
              <img src={iconSrc} alt="" />
            </CardIcon>
          )}
          <div>
            <CardRowTitle>{title}</CardRowTitle>
            <CardRowDescription>{underTitle}</CardRowDescription>
          </div>
        </CardRowLeft>
        <CardRowRight>
          <CardRowTitle>{value}</CardRowTitle>
          <CardRowDescription>{underValue}</CardRowDescription>
        </CardRowRight>
      </CardRow>
    </CardStyled>
  );
};

export default Card;
