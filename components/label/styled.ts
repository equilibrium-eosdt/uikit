import styled, { keyframes } from "styled-components";
import * as Class from "../../constants/classnames";
import { cssVar } from "../../util/style";


export const LabelWrapper = styled.div`
  display: inline-flex;
  justify-content: center;
  align-items: center;
  flex-shrink: 0;
  border-radius: ${cssVar("--rounding-radius-m")};
  background: ${cssVar("--fill-secondary")};
  backdrop-filter: blur(12px);
  color: ${cssVar("--text-primary")};
  gap: 4px;
  width: fit-content;

  img, svg {
    object-fit: contain;
    object-position: center;
  }

  &.${Class.L} {
    height: 32px;
    font-size: 16px;
    letter-spacing: 0.32px;
    font-variation-settings: "wght" 600;
    padding: var(--spacing-space-4, 4px) var(--spacing-space-12, 12px);
    img, svg {
      width: 24px;
      height: 24px;
    }
  }

  &.${Class.Icon} {
    padding: var(--spacing-space-4, 4px) var(--spacing-space-12, 12px) var(--spacing-space-4, 4px) var(--spacing-space-4, 4px);
  }

  &.${Class.Reverse} {
    flex-direction: row-reverse;
    &.${Class.Icon} {
      padding: var(--spacing-space-4, 4px) var(--spacing-space-4, 4px) var(--spacing-space-4, 4px)  var(--spacing-space-12, 12px);
    }
  }

  &.${Class.M} {
    height: 24px;
    font-size: 12px;
    letter-spacing: 0.5px;
    font-variation-settings: "wght" 500;
    padding: var(--spacing-space-4, 4px) var(--spacing-space-8, 8px);
    img, svg {
      width: 16px;
      height: 16px;
    }
    &.${Class.Icon} {
      padding: var(--spacing-space-4, 4px) var(--spacing-space-8, 8px) var(--spacing-space-4, 4px) var(--spacing-space-4, 4px);
      &.${Class.Reverse} {
        padding: var(--spacing-space-4, 4px) var(--spacing-space-4, 4px) var(--spacing-space-4, 4px) var(--spacing-space-12, 12px);
      }
    }
  }

  &.${Class.S} {
    height: 16px;
    font-size: 12px;
    letter-spacing: 0.5px;
    font-variation-settings: "wght" 500;
    padding: var(--spacing-space-4, 4px) var(--spacing-space-6, 6px);
    gap: 2px;
    img, svg {
      width: 12px;
      height: 12px;
    }
    &.${Class.Icon} {
      padding: var(--spacing-space-4, 4px) var(--spacing-space-6, 6px) var(--spacing-space-4, 4px) var(--spacing-space-2, 2px);
      &.${Class.Reverse} {
        padding: var(--spacing-space-4, 4px) var(--spacing-space-2, 2px) var(--spacing-space-4, 4px) var(--spacing-space-6, 6px);
      }
    }
  }


  &.${Class.Accent} {
    background: var(--fill-accent-secondary, rgba(50, 250, 220, 0.16));
  }

  &.${Class.Brand} {
    background: ${cssVar("--fill-accent-primary")};
    font-style: italic;
  }

  &.${Class.Positive} {
    color: ${cssVar("--text-positive")};
    background: ${cssVar("--fill-positive-bg")};
  }

  &.${Class.Negative} {
    color: ${cssVar("--text-negative")};
    background: ${cssVar("--fill-negative-bg")};
  }

  &.${Class.SignleIcon} {
    padding: ${cssVar("--spacing-space-4")};
    &.${Class.S} {
      padding: ${cssVar("--spacing-space-2")};
    }
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
