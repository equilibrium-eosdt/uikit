import styled from "styled-components";

export const Modal = styled.div`
  position: fixed;
  left: 0;
  top: 0;
  width: 100%;
  height: 100vh;
  height: 100dvh;
  z-index: 9999;
`;

export const ModalLayout = styled.div`
  position: absolute;
  left: 0;
  top: 0;
  width: 100%;
  height: 100%;
  background: var(--background-overflay);
  backdrop-filter: blur(8px);
`;

const sidePaddings = "32px";

export const ModalBody = styled.div`
  position: absolute;
  max-width: 100%;
  height: calc(100% - 128px);
  box-shadow: 0 8px 32px rgba(51, 20, 0, 0.16);
  overflow: hidden;
  top: auto;
  bottom: 0;
  left: 50%;
  transform: translate(-50%, 0);
  max-height: calc(100vh - 64px);
  max-height: calc(100dvh - 64px);
  border-radius: 48px 48px 0 0;
  color: var(--text-primary);
  background: var(--background-elevated);

  &.short {
    height: fit-content;
  }

  &.padded {
    padding: 20px ${sidePaddings} 12px;
  }

  .padded {
    padding-left: ${sidePaddings};
    padding-right: ${sidePaddings};
  }

  &.sm {
    width: 504px;
  }
  &.high {
    height: calc(100% - ${sidePaddings});
    max-height: calc(100% - ${sidePaddings});
  }
  &.middle-high {
    height: calc(100% - 74px);
    max-height: calc(100% - 74px);
  }
  &.middle-high {
    height: calc(100% - 74px);
    max-height: calc(100% - 74px);
  }
  &.rubber-height {
    height: auto;
    max-height: max-content;
  }
  &.notification {
    height: auto;
    width: 520px;
    min-height: 278px;
    display: flex;
    flex-direction: column;
    align-items: center;
    text-align: center;
    padding: 48px ${sidePaddings};
    box-sizing: border-box;
    max-width: calc(100% - 18px);
    bottom: 9px;
    border-radius: 48px;

    @media (min-width: 1024px) {
      top: 50%;
      bottom: auto;
    }
  }

  &.empty-position {
    height: 278px;
  }

  p {
    font-size: 16px;
    line-height: 24px;
    letter-spacing: 0.01em;
    color: var(--text-primary);
    font-family: "PlusJakartaSans", "Medium", sans-serif;
    font-variation-settings: "wght" 500;
    & + p {
      margin-top: 24px;
    }
  }

  @media (min-width: 1024px) {
    max-height: calc(100vh - 64px);
    left: 50%;
    top: 50%;
    bottom: auto;
    transform: translate(-50%, -50%);
    border-radius: 48px;
    height: fit-content;

    &.padded {
      padding: 24px ${sidePaddings};
      overflow: auto;
    }

    .padded {
      padding-left: ${sidePaddings};
      padding-right: ${sidePaddings};
    }

    &.empty-position {
      height: fit-content;
    }
  }

  scroll-behavior: smooth;
  scrollbar-width: none;
  scrollbar-color: rgba(255, 255, 255, 0) rgba(255, 255, 255, 0);
  -ms-overflow-style: none;
`;

export const ModalHeading = styled.div`
  display: flex;
  justify-content: space-between;
  transition: 200ms ease-out;
  background: transparent;
  padding-top: 32px;
  padding-bottom: 24px;
`;

export const Header = styled.h2`
  margin: 0;
  font-size: 32px;
  line-height: 48px;
  letter-spacing: 0.32px;
  font-variation-settings: "wght" 700;
  text-shadow: 0 0 0;
  font-style: normal;
  font-weight: normal;

  svg {
    vertical-align: bottom;
  }
  &.center {
    text-align: center;
  }
  &.developers {
    text-align: center;
    @media (max-width: 769px) {
      text-align: left;
    }
  }
  @media (min-width: 1024px) {
    font-size: 40px;
    line-height: 48px;
    letter-spacing: normal;
  }
`;

export const Subtext = styled.div<{ $withBottomMargin?: boolean }>`
  letter-spacing: 0.01em;
  color: #72706e;
  margin-top: 12px;
  margin-bottom: ${({ $withBottomMargin }) =>
    $withBottomMargin ? "auto" : "0"};
  &.centered {
    text-align: center;
  }
  &.sm {
    font-size: 12px;
  }
`;

export const ModalOverflow = styled.div`
  max-height: 90%;
  &.auto-height {
    height: auto;
  }
  &.full-height {
    height: 100%;
  }
  .epic-item {
    margin-left: 24px;
  }

  scroll-behavior: smooth;
  scrollbar-width: none;
  scrollbar-color: rgba(255, 255, 255, 0) rgba(255, 255, 255, 0);

  height: calc(100% - 104px);
  padding-bottom: 14px;

  .submit-button {
    margin-top: 24px;
  }

  &.padded {
    padding-bottom: 32px;
  }
  @media (min-width: 1024px) {
    height: calc(100vh - 124px - 72px);
    padding-bottom: 24px;

    &.padded {
      padding-bottom: 32px;
    }
    &.auto-height {
      height: auto;
    }
    &.full-height {
      height: 100%;
    }
    &.short {
      max-height: calc(100vh - 124px - 72px);
      height: fit-content;
    }
  }
`;

export const Consent = styled.div`
  padding: var(--spacing-space-16, 16px) var(--spacing-space-24, 24px);
  font-weight: 500;

  border-radius: var(--rounding-radius-xl, 24px);
  background: var(--fill-secondary, rgba(204, 187, 184, 0.16));

  a {
    text-decoration: underline 1px solid;
    text-underline-offset: 4px;
  }

  & + & {
    margin-top: 8px;
  }
`;
