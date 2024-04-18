import styled, { keyframes } from "styled-components";
import * as Class from "../../constants/classnames";
import { cssVar } from "../../util/style";

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
  display: flex;
  justify-content: center;
  align-items: center;
`;

export const BadgeWrapper = styled.div`
  position: absolute;
  right: 0;
  bottom: 0;
  border-radius: var(--rounding-radius-m, 16px);
  background: var(--fill-secondary, rgba(204, 187, 184, 0.16));
  backdrop-filter: blur(12px);
  padding: var(--spacing-space-4, 4px);
  height: 32px;
  width: 32px;
  display: flex;
  justify-content: center;
  align-items: center;
  img,
  svg {
    width: 24px;
    height: 24px;
    object-fit: contain;
  }
`;

export const ThumbnailWrapper = styled.div`
  display: inline-flex;
  justify-content: center;
  align-items: center;
  flex-shrink: 0;
  position: relative;

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

    ${NotificationWrapper} {
      height: 24px;
      min-width: 24px;
      max-width: 64px;
      padding: var(--spacing-space-4, 4px) var(--spacing-space-6, 6px);
    }
    ${BadgeWrapper} {
      height: 24px;
      width: 24px;
      img,
      svg {
        width: 16px;
        height: 16px;
      }
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

    ${NotificationWrapper} {
      font-size: 12px;
      font-variation-settings: "wght" 500;
      line-height: 10px;
      letter-spacing: 0.5px;
      height: 16px;
      min-width: 16px;
      max-width: 48px;
      padding: var(--spacing-space-4, 4px);
    }
    ${BadgeWrapper} {
      width: 16px;
      height: 16px;
      padding: 2px;

      img,
      svg {
        width: 12px;
        height: 12px;
      }
    }
  }

  &.${Class.S} {
    border-radius: ${cssVar("--rounding-radius-m")};
    width: 32px;
    height: 32px;

    img,
    svg {
      width: 16px;
      height: 16px;
    }

    ${NotificationWrapper} {
      font-size: 0;
      color: transparent;
      line-height: 0;
      width: 6px;
      height: 6px;
      min-width: 6px;
      max-width: 6px;
      padding: 0;
      top: 2px;
      right: 2px;
    }
    ${BadgeWrapper} {
      width: 16px;
      height: 16px;
      right: -2px;
      bottom: -2px;
      padding: 2px;
      img,
      svg {
        width: 12px;
        height: 12px;
      }
    }
  }

  &.${Class.Rectangle} {
    border-radius: ${cssVar("--rounding-radius-xs")};
    &.${Class.XL} {
      border-radius: ${cssVar("--rounding-radius-m")};
      ${NotificationWrapper} {
        top: -8px;
        right: -8px;
      }
      ${BadgeWrapper} {
        bottom: -8px;
        right: -8px;
      }
    }

    &.${Class.L} {
      ${NotificationWrapper} {
        top: -6px;
        right: -6px;
      }
      ${BadgeWrapper} {
        bottom: -6px;
        right: -6px;
      }
    }
    &.${Class.M} {
      ${NotificationWrapper} {
        top: -4px;
        right: -4px;
      }
      ${BadgeWrapper} {
        bottom: -4px;
        right: -4px;
      }
    }

    &.${Class.S} {
      ${NotificationWrapper} {
        top: -1px;
        right: -1px;
      }
      ${BadgeWrapper} {
        bottom: -3px;
        right: -3px;
      }
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
    svg,
    img {
      width: 100%;
      height: 100%;
      object-fit: cover;
      object-position: center;
      border-radius: 50%;
    }
    &.${Class.Rectangle} {
      &.${Class.XL} {
        svg,
        img {
          border-radius: var(--rounding-radius-m, 16px);
        }
      }

      &.${Class.L}, &.${Class.M}, &.${Class.S} {
        svg,
        img {
          border-radius: var(--rounding-radius-xs, 8px);
        }
      }
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
