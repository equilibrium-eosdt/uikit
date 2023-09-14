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
  border-radius: var(--rounding-radius-m, 16px);
  background: ${cssVar("--fill-primary")};
  transition: color 0.2s ease-in-out;
  color: ${cssVar("--text-invert-primary")};

  &.${Class.L} {
    height: 64px;
    padding: 0 var(--spacing-space-48, 48px);
    gap: var(--spacing-space-8, 8px);

    font-size: 16px;
    font-style: normal;
    font-weight: 500;
    line-height: 24px; /* 150% */
    letter-spacing: 0.16px;
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
      ${cssVar("--fill-secondary")} 50%,
      ${cssVar("--fill-secondary")} 75%
    );

    background-size: ${STRIPE_WIDTH} ${STRIPE_WIDTH};
    animation: ${animateButtonPendingBackground} 2s linear infinite;
  }

  &.${Class.Pending} {
    overflow: hidden;
    color: transparent;
    border-color: transparent;

    &:before {
      opacity: 1;
    }
  }
`;
