import { styled } from "styled-components";
import * as Class from "./classnames";
import * as Global from "../../constants/classnames";
import { cssVar } from "../../util/style";

export const HANDLE_WIDTH = 56;

export const SliderContainer = styled.div`
  width: 100%;
  border-radius: 32px;
  position: relative;
  height: 48px;
  padding: 0 28px;
  z-index: 20;
  background: ${cssVar("--fill-accent-secondary")};
  overflow-x: hidden;

  > .${Class.Fill} {
    position: absolute;
    left: 0;
    top: 0;
    border-radius: 32px;
    height: 48px;
    background: ${cssVar("--fill-accent-primary")};
    z-index: 3;
    box-sizing: content-box;
  }

  > .${Class.Restrict}, .${Class.RestrictUnderlay} {
    position: absolute;
    left: 0;
    top: 0;
    border-top-left-radius: 32px;
    border-bottom-left-radius: 32px;
    height: 48px;
    box-sizing: content-box;
  }

  > .${Class.RestrictUnderlay} {
    z-index: 1;
    background: ${cssVar("--color-opaque-white")};
  }

  > .${Class.Restrict} {
    z-index: 2;

    background: repeating-linear-gradient(
      300deg,
      ${cssVar("--background-primary")} 25%,
      ${cssVar("--background-primary")} 50%,
      ${cssVar("--fill-secondary")} 50%,
      ${cssVar("--fill-secondary")} 75%
    );

    background-size: 34px 60px;
  }

  > .${Class.Title} {
    position: absolute;
    right: 0;
    left: 0;
    display: flex;
    justify-content: center;
    align-items: center;
    height: 100%;
    z-index: 4;
    transition: 200ms ease-in;
    color: ${cssVar("--text-accent")};

    &.${Global.Hidden} {
      display: none;
    }
  }

  > .${Class.Handle} {
    width: calc(100% - 4px);
    position: relative;
    height: 100%;
    z-index: 4;
    margin: 0 2px;

    .${Class.Label} {
      appearance: none;
      position: absolute;
      display: flex;
      justify-content: center;
      align-items: center;
      background-color: ${cssVar("--fill-control")};
      height: 44px;
      width: ${HANDLE_WIDTH}px;
      border-radius: 28px;
      top: calc(100% - 2px);
      transform: translate(-50%, -100%);
    }
  }

  > input {
    position: absolute;
    top: 0;
    bottom: 0;
    left: 0;
    right: 0;
    background: transparent;
    appearance: none;
    z-index: 1000;
    width: 100%;
    border-radius: 32px;
    margin: 0;

    &:focus {
      border: 0;
      outline: none;
    }

    &:focus,
    &:active {
      border: 0 !important;
      outline: none !important;
    }

    &::-webkit-slider-thumb {
      appearance: none;
      -webkit-appearance: none;
      background-color: transparent;
      height: 44px;
      width: ${HANDLE_WIDTH}px;
      border-radius: 23px;
      z-index: 5;
      // box-shadow: none !important;
      outline: none;
      box-shadow: 0px 2px 1px rgba(51, 20, 0, 0.04),
        0px 4px 8px rgba(51, 20, 0, 0.08);
      -webkit-box-shadow: 0px 2px 1px rgba(51, 20, 0, 0.04),
        0px 4px 8px rgba(51, 20, 0, 0.08) !important;
      outline: 2px solid rgba(211, 255, 248, 0.2);
    }

    &::-moz-range-thumb,
    &::-webkit-slider-thumb,
    &::-webkit-slider-runnable-track {
      all: unset;
      appearance: none;
      background: transparent;
      background-image: none;
      height: 48px;
      width: ${HANDLE_WIDTH}px;
      border-radius: 23px;
      z-index: 1000;
      box-shadow: none !important;
      outline: none;
      border: 0;
    }

    &.active::-webkit-slider-thumb {
      background-color: #fff;
      border: 0;
      outline: 0;
    }
  }
`;
