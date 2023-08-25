import styled from "styled-components";

export const Tabs = styled.div`
  border-radius: 24px;
  display: flex;
  justify-content: center;
  background: #f5e5ea;
  align-items: center;
  padding: 2px;
  background: var(--fill-secondary);

  @media (max-width: 1024px) {
    margin: 0 -2px;
    width: calc(100% + 4px);
  }
`;

const TabItemClassNames = {
  Active: "active",
} as const;

const TabItemStyled = styled.button.attrs({ type: "button" })`
  border: 0;
  outline: 0;
  cursor: pointer;
  letter-spacing: 0.03em;
  transition: 300ms ease-out;
  padding: 6px;
  text-align: center;
  min-width: 46px;
  height: 44px;
  border-radius: 22px;
  flex: 1 1 auto;
  background: transparent;
  font-variation-settings: "wght" 700;
  -webkit-tap-highlight-color: transparent;
  color: var(--text-primary);

  &.${TabItemClassNames.Active} {
    background: var(--fill-elevated);
    box-shadow: 0px 2px 1px rgba(51, 20, 0, 0.04),
      0px 4px 8px rgba(51, 20, 0, 0.08);
    color: var(--text-primary);
  }
`;

export const TabItem = Object.assign({}, TabItemStyled, TabItemClassNames);
