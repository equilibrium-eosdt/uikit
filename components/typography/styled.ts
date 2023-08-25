import { styled } from "styled-components";

const tClassNames = {
  Body: "body",
  Caption: "caption",
} as const;

const TypographyStyled = styled.p`
  font-family: "PlusJakartaSans", sans-serif;

  &.${tClassNames.Body} {
    font-size: 16px;
    font-style: normal;
    font-weight: 500;
    line-height: 24px; /* 150% */
    letter-spacing: 0.16px;
  }

  &.${tClassNames.Caption} {
    font-size: 12px;
    font-style: normal;
    font-weight: 500;
    line-height: normal;
    letter-spacing: 0.5px;
  }
`;

/** @deprecated wip; todo */
export const T = Object.assign({}, TypographyStyled, tClassNames);
