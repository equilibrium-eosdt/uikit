import styled, { keyframes } from "styled-components";
import { Reverse } from "../../constants/classnames";
import { cssVar } from "../../util/style";

export const CellItemWrapper = styled.div`
  display: flex;
  flex-direction: column;
  gap: ${cssVar("--spacing-space-2")};

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
  gap: ${cssVar("--spacing-space-8")};
  font-size: 16px;
  font-weight: 500;
  line-height: 24px;
  letter-spacing: 0.16px;
  width: 100%;

  ${CellItemWrapper} {
    margin-left: auto;
    align-items: flex-start;

    &:last-child {
      align-items: flex-end;
    }

    &:first-child, &.clearMargin {
      margin-left: 0;
    }
  }
`;
