import styled, { keyframes } from "styled-components";
import { Reverse } from "../../constants/classnames";
import { cssVar } from "../../util/style";

export const CellItemWrapper = styled.div`
  display: flex;
  flex-direction: column;

  &.${Reverse} {
    flex-direction: column-reverse;
  }

  .item-label {
    color: ${cssVar("--text-secondary")};
    font-size: 12px;
    font-weight: 500;
    letter-spacing: 0.5px;
    line-height: normal;
  }
`;

export const CellWrapper = styled.div`
  display: inline-flex;
  justify-content: space-between;
  align-items: center;
  flex-shrink: 0;
  gap: ${cssVar("--spacing-space-12")};
  font-size: 16px;
  line-height: 23px;
  letter-spacing: 0.16px;
  width: 100%;
  max-width: 100%;
  flex: 1 1 100%;
  min-height: 48px;

  ${CellItemWrapper} {
    margin-left: auto;
    align-items: flex-start;

    &:last-child {
      align-items: flex-end;
    }

    &:first-child,
    &.clearMargin {
      margin-left: 0;
      margin-right: auto;
      text-align: left;
      align-items: flex-start;
    }
  }
`;

export const Stepper = styled.div`
  display: flex;
  gap: ${cssVar("--spacing-space-8")};
`;
