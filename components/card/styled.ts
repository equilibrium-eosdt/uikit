import { styled } from "styled-components";

export const CardIcon = styled.div`
  background: var(--fill-secondary, rgba(204, 187, 184, 0.16));
  border-radius: 8px;
  display: flex;
  justify-content: center;
  align-items: center;
  margin-right: 16px;
  padding: 12px;
  img,
  svg {
    width: 24px;
    height: 24px;
    filter: invert(var(--svg-invert));
  }
`;

export const CardRow = styled.div`
  display: flex;
  align-items: center;
`;

const cardItemClassNames = {
  Auto: "auto",
  Right: "right",
} as const;

const CardItemStyled = styled.div`
  display: flex;
  flex-flow: column nowrap;

  &.${cardItemClassNames.Auto} {
    margin-left: auto;
  }

  &.${cardItemClassNames.Right} {
    text-align: right;
  }
`;

export const CardItem = Object.assign(CardItemStyled, cardItemClassNames);

export const CardItemTitle = styled.div`
  color: var(--text-primary, #000);
  text-overflow: ellipsis;
  font-family: "PlusJakartaSans", sans-serif;
  font-size: 16px;
  font-variation-settings: "wght" 500;
  line-height: 150%;
  letter-spacing: 0.16px;
`;

export const CardItemDescription = styled.div`
  color: var(--text-secondary, rgba(66, 61, 60, 0.64));
  font-family: "PlusJakartaSans", sans-serif;
  font-size: 12px;
  font-variation-settings: "wght" 500;
  line-height: normal;
  letter-spacing: 0.5px;
`;

export const CardHeading = styled.div`
  color: var(--text-primary, #000);
  font-family: "PlusJakartaSans", sans-serif;
  font-size: 24px;
  font-variation-settings: "wght" 700;
  line-height: 133%;
  letter-spacing: 0.24px;
  margin-bottom: 14px;
`;

export const CardDescription = styled.div`
  color: var(--text-secondary, rgba(66, 61, 60, 0.64));
  font-family: "PlusJakartaSans", sans-serif;
  font-size: 16px;
  font-weight: 500;
  line-height: 150%;
  letter-spacing: 0.16px;
  margin-bottom: 20px;
`;

export const CardStyled = styled.div`
  box-shadow: 0px 8px 24px 0px rgba(51, 20, 0, 0.08),
    0px 4px 8px 0px rgba(51, 20, 0, 0.04);
  background: var(--fill-elevated, #fff);
  border-radius: 24px;
  padding: 16px 24px 16px 16px;
  &.secondary {
    background: var(--fill-secondary, rgba(204, 187, 184, 0.16));
    box-shadow: none;
  }

  &.md {
    padding: 16px 24px 24px;
    border-radius: 24px;
    ${CardIcon} {
      border-radius: 50%;
    }
  }
  &.lg {
    padding: 16px 24px 24px;
    border-radius: 32px;
    ${CardHeading} {
      margin-bottom: 2px;
    }
    ${CardIcon} {
      border-radius: 50%;
    }
  }
`;
