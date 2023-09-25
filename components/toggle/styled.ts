import styled, { keyframes } from "styled-components";
import * as Class from "../../constants/classnames";
import { cssVar } from "../../util/style";


export const ToggleWrapper = styled.div`
  display: block;
  background: ${cssVar("--fill-secondary")};
  position: relative;
  border-radius: ${cssVar("--rounding-radius-m")};
  padding: ${cssVar("--spacing-space-2")};
  width: 52px;
  max-width: 52px;
  height: 32px;
  transition: 300ms ease-out;
  cursor: pointer;

  &::before {
    content: " ";
    position: absolute;
    background: ${cssVar("--fill-elevated")};
    width: 28px;
    height: 28px;
    left: 2px;
    top: 2px;
    border-radius: 50%;
    filter: drop-shadow(0px 4px 8px rgba(51, 20, 0, 0.08)) drop-shadow(0px 2px 1px rgba(51, 20, 0, 0.04));
    transition: 300ms ease-out;
  }

  &.${Class.On} {
    background: ${cssVar("--fill-accent-primary")};
    &::before {
        left: calc(100%  -  2px);
        transform: translateX(-100%);
    }
  }

`;
