import { styled } from "styled-components";
import * as classNames from "../../constants/classnames";

export const T = styled.p`
  font-family: "PlusJakartaSans", sans-serif;

  &.${classNames.Body} {
    font-size: 16px;
    font-style: normal;
    font-weight: 500;
    line-height: 24px; /* 150% */
    letter-spacing: 0.16px;
  }

  &.${classNames.Caption} {
    font-size: 12px;
    font-style: normal;
    font-weight: 500;
    line-height: normal;
    letter-spacing: 0.5px;
  }
`;
