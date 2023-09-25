import styled, { keyframes } from "styled-components";
import * as Class from "../../constants/classnames";
import { cssVar } from "../../util/style";

const STRIPE_WIDTH = "56px";

const animateButtonPendingBackground = keyframes`
  0% {
		transform: translateX(-${STRIPE_WIDTH});
	}
	100% {
		transform: translateX(0);
	}
`;

export const ButtonWrapper = styled.button`
  position: relative;
  display: inline-flex;
  justify-content: center;
  align-items: center;
  flex-shrink: 0;
  background: ${cssVar("--fill-primary")};
  transition: 0.3s ease-out;
  color: ${cssVar("--text-invert-primary")};
  border: 0;
  outline: 0;
  cursor: pointer;
  p {
    color: ${cssVar("--text-invert-primary")};
    transition: 0.3s ease-out;
  }

  & > img,
  svg {
    margin-left: -6px;
    transition: 0.3s ease-out;
    path,
    rect {
      transition: 0.3s ease-out;
    }
  }
  &:before {
    content: " ";
    transition: opacity 0.2s ease-in-out;
    position: absolute;
    opacity: 0;
    display: block;
    top: 0;
    left: 0;
    height: 100%;
    width: calc(100% + ${STRIPE_WIDTH});
    background: repeating-linear-gradient(
      135deg,
      ${cssVar("--background-primary")} 25%,
      ${cssVar("--background-primary")} 50%,
      ${cssVar("--background-secondary")} 50%,
      ${cssVar("--background-secondary")} 75%
    );

    background-size: ${STRIPE_WIDTH} ${STRIPE_WIDTH};
    animation: ${animateButtonPendingBackground} 2s linear infinite;
  }

  &.${Class.L} {
    height: 64px;
    padding: 0 var(--spacing-space-48, 48px);
    gap: var(--spacing-space-8, 8px);
    border-radius: var(--rounding-radius-m, 16px);
  }

  &.${Class.M} {
    height: 48px;
    padding: var(--spacing-space-24, 24px);
    gap: var(--spacing-space-8, 8px);
    border-radius: var(--rounding-radius-xs, 8px);
  }

  &.${Class.S} {
    height: 32px;
    padding: 0 var(--spacing-space-12, 12px);
    gap: var(--spacing-space-4, 4px);
    border-radius: var(--rounding-radius-m, 16px);
  }

  &.${Class.WidthFit} {
    width: fit-content;
  }

  &.${Class.Pending} {
    overflow: hidden;
    color: transparent;
    border-color: transparent;
    pointer-events: none;

    &:before {
      opacity: 1;
    }
  }

  &.${Class.Hovered}, &:hover {
    background: ${cssVar("--fill-primary-hover")};
  }

  &.${Class.Disabled} {
    pointer-events: none;
    opacity: 0.24;
    background: ${cssVar("--fill-primary-hover")};
  }

  &.${Class.Loading} {
    pointer-events: none;
    opacity: 0.24;
    background: ${cssVar("--fill-primary")};
  }

  &.${Class.Secondary} {
    background: ${cssVar("--fill-secondary")};
    color: ${cssVar("--text-primary")};
    p {
      color: ${cssVar("--text-primary")};
    }
    & > img,
    svg {
      filter: invert(0) !important;
    }
    &.${Class.Hovered}, &:hover {
      background: ${cssVar("--fill-secondary-hover")};
    }
    &.${Class.Disabled} {
      opacity: 0.24;
    }
    &.${Class.Loading} {
      opacity: 0.24;
    }
  }

  &.${Class.Tertiary} {
    background: transparent;
    color: ${cssVar("--text-primary")};
    p {
      color: ${cssVar("--text-primary")};
    }
    & > img,
    & > svg {
      filter: invert(0) !important;
    }
    &.${Class.Hovered}, &:hover {
      background: ${cssVar("--fill-secondary")};
    }
    &.${Class.Disabled} {
      background: transparent;
      opacity: 0.24;
    }
    &.${Class.Loading} {
      background: transparent;
      opacity: 0.24;
    }
  }

  &.${Class.Elevated} {
    background: ${cssVar("--fill-elevated")};
    box-shadow: 0px 4px 8px 0px rgba(51, 20, 0, 0.08),
      0px 2px 1px 0px rgba(51, 20, 0, 0.04);
    p {
      color: ${cssVar("--text-primary")};
    }
    & > img,
    & > svg {
      filter: invert(0) !important;
    }
    &.${Class.Hovered}, &:hover {
      background: ${cssVar("--fill-elevated-hover")};
      box-shadow: 0px 4px 8px 0px rgba(51, 20, 0, 0.08),
        0px 2px 1px 0px rgba(51, 20, 0, 0.04);
    }
    &.${Class.Disabled} {
      background: ${cssVar("--fill-elevated")};
      opacity: 0.24;
      box-shadow: 0px 4px 8px 0px rgba(51, 20, 0, 0.08),
        0px 2px 1px 0px rgba(51, 20, 0, 0.04);
    }
    &.${Class.Loading} {
      background: ${cssVar("--fill-elevated")};
      opacity: 0.24;
      box-shadow: 0px 4px 8px 0px rgba(51, 20, 0, 0.08),
        0px 2px 1px 0px rgba(51, 20, 0, 0.04);
    }
  }

  &.${Class.Icon} {
    width: fit-content;
    aspect-ratio: 1 / 1;
    & > img,
    & > svg {
      margin: 0 auto;
    }
    &.${Class.L} {
      padding: 0 var(--spacing-space-20, 20px);
    }
    &.${Class.M} {
      padding: 0 var(--spacing-space-12, 12px) !important;
    }
    &.${Class.S} {
      padding: 0 var(--spacing-space-4, 4px) !important;
    }
  }

  &.${Class.Text} {
    width: fit-content;
    padding: 0 !important;
    background: transparent;
    gap: var(--spacing-space-4, 4px);
    p {
      color: ${cssVar("--text-secondary")};
    }
    & > img,
    & > svg {
      margin: 0 auto;
      filter: invert(0) !important;
      path,
      rect {
        fill: ${cssVar("--icon-secondary")} !important;
      }
    }
    &.${Class.Hovered}, &:hover {
      background: transparent;
      p {
        color: ${cssVar("--icon-secondary-hover")};
      }
      & > svg path,
      & > svg rect {
        fill: ${cssVar("--icon-secondary-hover")} !important;
      }
    }
    &.${Class.Disabled} {
      opacity: 0.24;
      background: transparent;
      & > svg path,
      & > svg rect {
        fill: ${cssVar("--icon-secondary")} !important;
      }
    }
  }
`;
