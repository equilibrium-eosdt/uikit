import styled, { keyframes } from "styled-components";
import * as Class from "../../constants/classnames";
import { cssVar } from "../../util/style";

export const TooltipWrapper = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  width: fit-content;
  background: ${cssVar("--fill-primary")};
  color: ${cssVar("--text-invert-primary")};
  position: relative;
  &::before {
    content: " ";
    position: absolute;
    left: 50%;
    background: url("data:image/svg+xml,%3Csvg width='16' height='8' viewBox='0 0 16 8' fill='none' xmlns='http://www.w3.org/2000/svg'%3E%3Cpath d='M9 8H7L0 8.07577e-07L16 0L9 8Z' fill='black' style='fill:black;fill:black;fill-opacity:1;'/%3E%3C/svg%3E%0A");
    background-size: 16px 8px;
    width: 16px;
    height: 8px;
    transform-origin: 50% 50%;
  }

  &.${Class.Top} {
    &::before {
      bottom: 0;
      transform: translate(-50%, 100%);
    }
  }

  &.${Class.Bottom} {
    &::before {
      top: 0;
      transform: translate(-50%, -100%) rotate(-180deg);
    }
  }

  &.${Class.L} {
    border-radius: ${cssVar("--rounding-radius-xxl")};
    height: 64px;
    padding: ${cssVar("--spacing-space-24")};
    font-size: 20px;
    font-weight: 700;
    line-height: 28px;
    letter-spacing: 0.4px;
  }

  &.${Class.M} {
    border-radius: ${cssVar("--rounding-radius-xl")};
    height: 48px;
    padding: ${cssVar("--spacing-space-16")};
    font-variation-settings: "whgt" 500;
    font-size: 16px;
    line-height: 24px;
    letter-spacing: 0.16px;
  }

  &.${Class.S} {
    border-radius: ${cssVar("--rounding-radius-m")};
    height: 32px;
    padding: ${cssVar("--spacing-space-12")};
    font-variation-settings: "whgt" 500;
    font-size: 12px;
    line-height: normal;
    letter-spacing: 0.5px;
  }

  &.${Class.Multiline} {
    border-radius: ${cssVar("--rounding-radius-s")};
  }
`;
