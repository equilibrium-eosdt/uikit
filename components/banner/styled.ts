import styled  from "styled-components";
import * as Class from "../../constants/classnames";
import { cssVar } from "../../util/style";


export const BannerWrapper = styled.div`
  display: flex;
  justify-content: flex-start;
  align-items: center;
  flex-shrink: 0;
  background: ${cssVar("--fill-secondary")};
  color: ${cssVar("--text-primary")};
  gap: 12px;
  padding: ${cssVar("--spacing-space-12")} ${cssVar("--spacing-space-16")};

  p {
    color: ${cssVar("--text-primary")};
  }

  img, svg {
    object-fit: contain;
    object-position: center;
    width: 24px;
    height: 24px;
  }

  &.${Class.Accent} {
    background: ${cssVar("--fill-accent-secondary")};
  }

  &.${Class.Alert} {
    background: ${cssVar("--fill-negative-bg")};
  }

  &.${Class.S} {
   border-radius: ${cssVar("--rounding-radius-s")};
   min-height: 48px;
  }

  &.${Class.M} {
    border-radius: ${cssVar("--rounding-radius-m")};
    min-height: 56px;
  }

  &.${Class.L} {
    border-radius: ${cssVar("--rounding-radius-xl")};
    min-height: 64px;
  }
`