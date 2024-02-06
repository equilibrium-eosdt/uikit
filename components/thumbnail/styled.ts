import styled, { keyframes } from "styled-components";
import * as Class from "../../constants/classnames";
import { cssVar } from "../../util/style";

export const ThumbnailWrapper = styled.div`
  display: inline-flex;
  justify-content: center;
  align-items: center;
  flex-shrink: 0;

  background: ${cssVar("--fill-secondary")};
  width: fit-content;

  img,
  svg {
    object-fit: contain;
    object-position: center;
  }

  &.${Class.XL} {
    width: 96px;
    height: 96px;
    padding: ${cssVar("--spacing-space-24")};
    border-radius: ${cssVar("--rounding-radius-xxxl")};

    img,
    svg {
      width: 48px;
      height: 48px;
    }
  }

  &.${Class.L} {
    border-radius: ${cssVar("--rounding-radius-xxl")};
    width: 64px;
    height: 64px;

    img,
    svg {
      width: 32px;
      height: 32px;
    }
  }

  &.${Class.M} {
    border-radius: ${cssVar("--rounding-radius-xl")};
    width: 48px;
    height: 48px;

    img,
    svg {
      width: 24px;
      height: 24px;
    }
  }

  &.${Class.S} {
    border-radius: ${cssVar("--rounding-radius-m")};
    width: 32px;
    height: 32px;

    img,
    svg {
      width: 12px;
      height: 12px;
    }
  }

  &.${Class.Rectangle} {
    border-radius: ${cssVar("--rounding-radius-xs")};
    &.${Class.XL} {
      border-radius: ${cssVar("--rounding-radius-m")};
    }
  }

  &.${Class.DarkBG} {
    border: 1px solid var(--border-image-edge, rgba(204, 187, 184, 0.16));
  }

  &.${Class.LightBg} {
    border: 1px solid var(--border-image-edge, rgba(204, 187, 184, 0.16));
  }

  &.${Class.Status} {
    background: var(--fill-accent-secondary, rgba(50, 250, 220, 0.16));
  }
  &.${Class.Accent} {
    background: var(--fill-accent-primary, #9fe);
  }
  &.${Class.Image} {
    padding: 0;
    overflow: hidden;
    svg,
    img {
      width: 100%;
      height: 100%;
      object-fit: cover;
      object-position: center;
    }
  }

  &.${Class.Positive} {
    background: var(--fill-positive-bg, rgba(165, 217, 139, 0.16));
  }

  &.${Class.Negative} {
    background: var(--fill-negative-bg, rgba(240, 165, 204, 0.16));
  }

  &.${Class.Notification} {
  }

  &.${Class.Badge} {
  }
`;

export const NotificationWrapper = styled.div`
  position: absolute;
  right: 0;
  top: 0;
  height: 32px;
  min-width: 32px;
  max-width: 96px;
  width: fit-content;
  padding: var(--spacing-space-4, 4px) var(--spacing-space-8, 8px);
  border-radius: var(--rounding-radius-m, 16px);
  background: var(--fill-negative, #e54796);
  backdrop-filter: blur(12px);
  font-size: 16px;
  font-weight: 400;
  font-variation-settings: "wght" 600;
  line-height: 20px;
  letter-spacing: 0.32px;
  color: var(--text-primary-on-dark, #fff);
  text-align: center;
`;
