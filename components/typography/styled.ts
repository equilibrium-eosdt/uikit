import { styled } from "styled-components";
import * as Class from "../../constants/classnames";
import { cssVar } from "../../util/style";

export const TypographyWrapper = styled.p`
  font-family: ${cssVar("--default-font")}, sans-serif;

  &.${Class.Title} {
    font-size: 64px;
    font-style: normal;
    font-weight: 500;
    line-height: 72px;
  }

  &.${Class.HeaderL} {
    font-size: 32px;
    font-style: normal;
    font-weight: 700;
    line-height: 40px;
  }

  &.${Class.HeaderM} {
    font-size: 24px;
    font-style: normal;
    font-weight: 700;
    line-height: 32px;
  }

  &.${Class.HeaderS} {
    font-size: 20px;
    font-style: normal;
    font-weight: 700;
    line-height: 28px;
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
