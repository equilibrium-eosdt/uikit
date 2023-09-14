import { styled } from "styled-components";
import * as classNames from "../../constants/classnames";
import { cssVar } from "../../util/style";

export const CardIcon = styled.div`
  background: ${cssVar("--fill-secondary", "rgba(204, 187, 184, 0.16)")};
  border-radius: 8px;
  display: flex;
  justify-content: center;
  align-items: center;
  margin-right: 16px;
  padding: 12px;
  img,
  svg {
    width: 24px;
    height: 24px;
    filter: invert(${cssVar("--svg-invert")});
  }
`;

export const CardRow = styled.div`
  display: flex;
  align-items: center;
`;

const CardItemStyled = styled.div`
  display: flex;
  flex-flow: column nowrap;

  &.${classNames.Auto} {
    margin-left: auto;
  }

  &.${classNames.Right} {
    text-align: right;
  }
`;

/** @deprecated no more assign; move out to Cell component; https://www.figma.com/file/qEhBc8Ub9LpdiPhOKaQiZV/%E2%9D%96-Varginly?type=design&node-id=73-5005&mode=design&t=0u0sEMhesqcGmc6s-4 */
export const CardItem = Object.assign(CardItemStyled, classNames);

/** @deprecated no more assign; move out to Cell component; https://www.figma.com/file/qEhBc8Ub9LpdiPhOKaQiZV/%E2%9D%96-Varginly?type=design&node-id=73-5005&mode=design&t=0u0sEMhesqcGmc6s-4 */
export const CardItemTitle = styled.div`
  color: var(--text-primary, #000);
  text-overflow: ellipsis;
  font-family: "PlusJakartaSans", sans-serif;
  font-size: 16px;
  font-variation-settings: "wght" 500;
  line-height: 150%;
  letter-spacing: 0.16px;
`;

/** @deprecated no more assign; move out to Cell component; https://www.figma.com/file/qEhBc8Ub9LpdiPhOKaQiZV/%E2%9D%96-Varginly?type=design&node-id=73-5005&mode=design&t=0u0sEMhesqcGmc6s-4 */
export const CardItemDescription = styled.div`
  color: ${cssVar("--text-secondary", "rgba(66, 61, 60, 0.64)")};
  font-family: "PlusJakartaSans", sans-serif;
  font-size: 12px;
  font-variation-settings: "wght" 500;
  line-height: normal;
  letter-spacing: 0.5px;
`;

export const CardHeading = styled.div`
  color: ${cssVar("--text-primary", "#000")};
  font-family: "PlusJakartaSans", sans-serif;
  font-size: 24px;
  font-variation-settings: "wght" 700;
  line-height: 133%;
  letter-spacing: 0.24px;
  margin-bottom: 14px;
`;

export const CardDescription = styled.div`
  color: ${cssVar("--text-secondary", "rgba(66, 61, 60, 0.64)")};
  font-family: "PlusJakartaSans", sans-serif;
  font-size: 16px;
  font-weight: 500;
  line-height: 150%;
  letter-spacing: 0.16px;
  margin-bottom: 20px;
`;

export const CardStyled = styled.div`
  box-shadow: 0px 8px 24px 0px rgba(51, 20, 0, 0.08),
    0px 4px 8px 0px rgba(51, 20, 0, 0.04);
  background: ${cssVar("--fill-elevated", "#fff")};
  border-radius: 24px;
  padding: 16px 24px 16px 16px;
  &.${classNames.Secondary} {
    background: ${cssVar("--fill-secondary", "rgba(204, 187, 184, 0.16)")};
    box-shadow: none;
  }

  &.${classNames.M} {
    padding: 16px 24px 24px;
    border-radius: 24px;
    ${CardIcon} {
      border-radius: 50%;
    }
  }
  &.${classNames.L} {
    padding: 16px 24px 24px;
    border-radius: 32px;
    ${CardHeading} {
      margin-bottom: 2px;
    }
    ${CardIcon} {
      border-radius: 50%;
    }
  }
`;
