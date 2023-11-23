import styled from "styled-components";

export const classNames = {
  Focused: "focused",
  Hovered: "hovered",
  Filled: "filled",
  Error: "error",
  Pending: "pending",
} as const;

export const InputBox = styled.div`
  width: 100%;

  span {
    position: relative;
    height: 20px;
    background: transparent;
  }

  .input-container {
    position: relative;
    display: flex;
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
  .suggestions {
    content: " ";
    height: 34px;
    gap: 6px;
    margin-top: 7px;
    display: flex;
    opacity: 0;
    pointer-events: none;

    &__item {
      box-shadow: 0px 2px 1px rgba(51, 20, 0, 0.04),
        0px 4px 8px rgba(51, 20, 0, 0.08);
      border-radius: 16px;
      letter-spacing: 0.03em;
      font-variation-settings: "wght" 700;
      padding: 4px 8px;
      height: 32px;
      background: var(--fill-secondary);
      color: var(--text-primary);
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
      &__area {
        background: transparent;
        box-shadow: inset 0 0 0 2px var(--border-focus);
      }
      &__hint {
        font-size: 12px;
        line-height: 16px;
        letter-spacing: 0.5px;
        margin: 0
      }
    }
    .suggestions {
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
        margin: 0
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
