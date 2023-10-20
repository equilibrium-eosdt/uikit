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
    width: 11px;
    height: 11px;
    left: 50%;
    background: ${cssVar("--fill-primary")};
    transform-origin: 50% 50%;
  }

  &.${Class.Top} {
    &::before {
      bottom: 0;
      transform: translate(-50%, 50%) rotate(-45deg);
    }
  }

  &.${Class.Bottom} {
    &::before {
      top: 0;
      transform: translate(-50%, -50%) rotate(-45deg);
    }
  }

  &.${Class.L} {
    border-radius: ${cssVar("--rounding-radius-xxl")};
    height: 64px;
    padding: ${cssVar("--spacing-space-24")};
    font-size: 20px;
    font-variation-settings: "whgt" 700;
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
