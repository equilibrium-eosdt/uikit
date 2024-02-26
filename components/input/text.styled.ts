import styled from "styled-components";
import * as classNames from "../../constants/classnames";

export const FieldContainer = styled.div`
  &.${classNames.Suggestion} {
    height: 34px;
    gap: 6px;
    transform: translateY(100%);
    display: flex;
    position: absolute;
    gap: 6px;
    bottom: -8px;
    opacity: 0;
    pointer-events: none;
    z-index: 21;
  }
  &.${classNames.Controls} {
    gap: 8px;
    display: flex;
    align-items: center;
    position: absolute;
    top: 50%;
    right: 24px;
    transform: translateY(-50%);
    z-index: 3;
  }
  &.${classNames.Icon} {
    gap: 8px;
    display: flex;
    align-items: center;
    position: absolute;
    top: 35%;
    right: 20px;
    z-index: 3;
  }
  &.${classNames.Caption} {
    gap: 8px;
    display: flex;
    align-items: center;
    position: absolute;
    top: 109%;
    left: 24px;
    z-index: 3;
  }
`;

export const InputBox = styled.label`
  width: 100%;

  span {
    position: relative;
    height: 20px;
    background: transparent;
  }

  .input-container {
    position: relative;
    display: flex;
    & > svg,
    & > img {
      position: absolute;
      width: 24px;
      height: 24px;
      top: -24px;
      right: 4px;
    }
  }

  .input {
    border: none;
    outline: none;
    width: 100%;
    height: 32px;
    background: transparent;
    caret-color: var(--text-primary);
    margin: 0;
    color: var(--text-primary);
    padding: 0;
    pointer-events: none;
    font-weight: 400;
    font-variation-settings: "whgt" 500;
    font-size: 16px;
    line-height: 24px;

    &::-ms-clear {
      display: none;
    }

    &__area {
      transition: 300ms ease-out;
      padding: 10px 16px;
      background: var(--fill-secondary);
      border-radius: 16px;
      height: 64px;
      box-sizing: border-box;
    }
    &__hint {
      color: var(--text-secondary);
      transition: 300ms ease-out;
      margin: 0;

      font-size: 16px;
      line-height: 24px;
      letter-spacing: 0.16px;
      margin: 10px 0 0;
    }
  }

  &.${classNames.Hovered} {
    .input {
      &__area {
        background: var(--fill-secondary, rgba(204, 187, 184, 0.16));
        box-shadow: inset 0 0 0 1px var(--border-hover);
      }
    }
  }

  &.${classNames.Focused} {
    .input {
      pointer-events: auto;
      &__area {
        background: transparent;
        box-shadow: inset 0 0 0 2px var(--border-focus);
      }
      &__hint {
        font-size: 12px;
        line-height: 16px;
        letter-spacing: 0.5px;
        margin: 0;
      }
    }
  }

  &.${classNames.Filled} {
    .input {
      color: var(--text-primary);
      &__hint {
        font-size: 12px;
        line-height: 16px;
        letter-spacing: 0.5px;
        margin: 0;
      }
    }
  }

  &.${classNames.Error} {
    .input {
      &__area {
        background: var(--fill-negative-bg);
        box-shadow: none;
      }
      &__hint {
        color: var(--border-negative);
      }
    }
    &.${classNames.Hovered} {
      .input__area {
        box-shadow: inset 0 0 0 1px var(--border-negative);
      }
    }
    &.${classNames.Focused} {
      .input__area {
        box-shadow: inset 0 0 0 2px var(--border-negative);
        background: transparent;
      }
    }
  }

  &.${classNames.Pending} {
    pointer-events: none;
    background: transparent;
    caret-color: #000;
    border: 0;
    outline: 0;
    .input {
      pointer-events: none;
    }
  }

  &.filled {
    .input__area {
      padding-right: 60px;
    }
    .input-container {
      & > svg,
      & > img {
        top: -5px;
        right: -40px;
      }
    }
  }

  &.${classNames.Disabled} {
    background: var(--fill-secondary, rgba(204, 187, 184, 0.16));
    pointer-events: none;
    border-radius: var(--rounding-radius-m, 16px);
    color: var(--text-secondary, rgba(66, 61, 60, 0.64));
    opacity: 0.24;
  }
`;

export const SuperfieldStyled = styled.label`
  width: 100%;
  height: 96px;
  position: relative;

  span {
    position: relative;
    height: 20px;
    background: transparent;
  }

  .input-container {
    position: relative;
    display: flex;
    gap: 4px;
    height: 32px;
  }
  input {
    border: none;
    outline: none;
    min-width: 12px;
    max-width: calc(100% - 40px);
    background: transparent;
    caret-color: var(--text-primary);
    font-variation-settings: "wght" 700;
    margin: 0;
    font-size: 20px;
    line-height: 24px;
    letter-spacing: 0.4px;
    height: auto;
    padding: 4px 0 4px;
    z-index: 2;
    overflow: hidden;
    display: block;
    color: var(--text-primary);
    overflow: scroll;
    overflow: -moz-scrollbars-none;
    -ms-overflow-style: none;
    -webkit-appearance: none;
    -moz-appearance: none;
    appearance: none;
    &::-webkit-scrollbar {
      width: 0px;
      opacity: 0;
      background-color: transparent;
      display: none;
    }
    &::-webkit-scrollbar:horizontal {
      opacity: 0;
      height: 0px;
      display: none;
    }

    &::-webkit-scrollbar-track {
      opacity: 0;
      background: transparent;
      -webkit-box-shadow: inset 0 0 6px rgba(0, 0, 0, 0.1);
      background-color: transparent;
    }
    &::-webkit-scrollbar-thumb {
      background: transparent;
      opacity: 0;
      -webkit-box-shadow: inset 0 0 6px rgba(0, 0, 0, 0.3);
      background-color: transparent;
    }

    &::-webkit-scrollbar-thumb:hover {
      background: transparent;
      opacity: 0;
    }

    &::placeholder {
      color: rgba(140, 129, 126, 0.48);
    }
    &::-ms-clear {
      display: none;
    }
  }
  .input {
    &__span {
      font-size: 20px;
      line-height: 24px;
      letter-spacing: 0.4px;
      font-variation-settings: "wght" 700;
      padding: 4px 0 4px;
      height: 32px;
      display: block;
    }

    &__area {
      transition: 300ms ease-out;
      background: var(--fill-secondary);
      box-sizing: border-box;
      height: 96px;
      padding: 24px;
      border-radius: 24px;
      margin-right: auto;
    }
    &__hint {
      color: var(--text-secondary);
      transition: 300ms ease-out;
      font-size: 12px;
      margin: 0;
      line-height: normal;
      letter-spacing: 0.5px;
    }
  }

  &.${classNames.Controls} {
    &.${classNames.Focused} {
      margin-bottom: 40px;
    }
    .input__area {
      padding-right: 136px;
    }
  }

  &.${classNames.Hovered}, &:hover {
    .input {
      &__area {
        background: var(--fill-secondary, rgba(204, 187, 184, 0.16));
        box-shadow: inset 0 0 0 1px var(--border-hover);
      }
    }
  }

  &.${classNames.Focused} {
    .input {
      &__area {
        background: transparent;
        box-shadow: inset 0 0 0 2px var(--border-focus);
      }
      &__hint {
        font-size: 12px;
        line-height: 16px;
        letter-spacing: 0.5px;
        margin: 0;
      }
    }
    .${classNames.Suggestion} {
      opacity: 1;
      pointer-events: all;
    }
  }

  &.${classNames.Filled} {
    .input {
      color: var(--text-primary);
      &__hint {
        font-size: 12px;
        line-height: 16px;
        letter-spacing: 0.5px;
        margin: 0;
      }
    }
  }

  &.${classNames.Error} {
    .input {
      &__area {
        background: var(--fill-negative-bg);
        box-shadow: none;
      }
      &__hint {
        color: var(--border-negative);
      }
    }
    &.${classNames.Hovered} {
      .input__area {
        box-shadow: inset 0 0 0 1px var(--border-negative);
      }
    }
    &.${classNames.Focused} {
      .input__area {
        box-shadow: inset 0 0 0 2px var(--border-negative);
        background: transparent;
      }
    }
  }

  &.${classNames.Pending} {
    pointer-events: none;
    background: transparent;
    caret-color: #000;
    border: 0;
    outline: 0;
    .input {
      pointer-events: none;
    }
  }
`;
