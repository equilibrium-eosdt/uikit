import { styled } from "styled-components";
import * as Class from "../../constants/classnames";
import { cssVar } from "../../util/style";

export const TypographyWrapper = styled.p`
  font-family: ${cssVar("--default-font")}, sans-serif;

  &.${Class.Title} {
    font-size: 48px;
    font-style: normal;
    font-weight: 700;
    line-height: 56px;
    letter-spacing: 0;
    @media (min-width: 1024px) {
      font-size: 64px;
      line-height: 80px;
      letter-spacing: 0.64px;
    }
  }

  &.${Class.HeaderL} {
    font-size: 32px;
    font-style: normal;
    font-weight: 700;
    line-height: 40px;
    letter-spacing: 0;
    @media (min-width: 1024px) {
      font-size: 40px;
      line-height: 48px;
    }
  }

  &.${Class.HeaderM} {
    font-size: 24px;
    font-style: normal;
    font-weight: 700;
    line-height: 32px;
    letter-spacing: 0.24px;
    @media (min-width: 1024px) {
      font-size: 40px;
      line-height: 48px;
    }
  }

  &.${Class.HeaderS} {
    font-size: 20px;
    font-style: normal;
    font-weight: 700;
    line-height: 28px;
    letter-spacing: 0.4px;
  }

  &.${Class.Action} {
    font-size: 16px;
    font-style: normal;
    font-weight: 700;
    line-height: normal;
    letter-spacing: 0.48px;
  }

  &.${Class.Body} {
    font-size: 16px;
    font-style: normal;
    font-weight: 500;
    line-height: 24px; /* 150% */
    letter-spacing: 0.16px;
  }

  &.${Class.Caption} {
    font-size: 12px;
    font-style: normal;
    font-weight: 500;
    line-height: normal;
    letter-spacing: 0.5px;
  }

  &.${Class.Secondary} {
    color: var(--text-secondary);
  }
`;
