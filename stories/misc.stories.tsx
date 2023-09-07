import type { Meta, StoryObj } from "@storybook/react";
import cn from "classnames";
import React, { ChangeEvent, useMemo, useReducer } from "react";

import styled from "styled-components";
import SuperSlider_ from "../components/input/super-slider";
import * as Class from "../constants/classnames";
import T from "../components/typography";
import { useThemeConfigStore, useSetTheme, setValue } from "../stores/theme";

const Container = styled.div`
  position: relative;
  padding: 8px;

  .margin-16px {
    margin: 16px;
  }

  &.container,
  .container {
    &-col {
      display: flex;
      flex-flow: column nowrap;
    }

    &-row {
      display: flex;
      flex-flow: row nowrap;
    }
  }
`;

interface State {
  active?: boolean;
  value?: number;
}

type CapitalizeIfString<T> = T extends string ? Capitalize<T> : "";

type SetAction<S extends {}, K extends keyof S = keyof S> = {
  type: `set${CapitalizeIfString<K>}`;
  payload: Pick<S, K>;
};

type Action = SetAction<State> | { type: "setState"; payload: Partial<State> };

function isPrefixed<P extends string>(
  prefix: P,
  str?: string,
): str is `${P}${string}` {
  return Boolean(str?.startsWith(prefix));
}

export const getEntries = <T extends {}, K extends keyof T>(
  obj?: T,
): Array<[K, T[K]]> => {
  return Object.entries(obj ?? {}) as unknown as Array<[K, T[K]]>;
};

const reducer = (state: State, action: Action) => {
  const { type, payload } = action;

  switch (type) {
    case "setState":
      return { ...state, ...payload };
    default:
  }

  if (isPrefixed("set", type)) {
    const [[k, v]] = getEntries(payload);

    if (typeof k === "string") {
      const l = k.length;
      const _type = type.slice(-l).toLowerCase();
      console.log(_type);

      if (_type !== k) {
        throw new Error(`incorrect key[${k}] for "${type}" action`);
      }

      return { ...state, [k]: v };
    }

    throw new Error(`incorrect payload, got {${k}: ${v}}`);
  }

  return state;
};

function SuperSlider(props: Parameters<typeof SuperSlider_>[0]) {
  const [state, dispatch] = useReducer(reducer, {
    active: props.active,
    value: props.value,
  });

  function onTouchEnd() {
    dispatch({ type: "setActive", payload: { active: false } });
  }

  function onTouchStart() {
    dispatch({ type: "setActive", payload: { active: true } });
  }

  function onChange(e: ChangeEvent<HTMLInputElement>) {
    const value = Number(e.target.value);

    if (props.restrictLessThan) {
      if (value < props.restrictLessThan) {
        return;
      }
    }

    dispatch({
      type: "setValue",
      payload: { value },
    });
  }

  const _props = useMemo(() => ({ ...props, ...state }), [props, state]);

  return (
    <SuperSlider_
      {..._props}
      onChange={onChange}
      onTouchEnd={onTouchEnd}
      onTouchStart={onTouchStart}
    />
  );
}

const meta = {
  title: "Miscelaneous",
  parameters: {
    // More on how to position stories at: https://storybook.js.org/docs/react/configure/story-layout
    layout: "fullscreen",
  },
} satisfies Meta;

export default meta;
type Story = StoryObj<typeof meta>;

export const Common: Story = {
  render: () => {
    const theme = useThemeConfigStore();
    useSetTheme({ theme });

    return (
      <Container className="container-col">
        <T className={cn(Class.Body, "margin-16px")}>Test</T>
        <div className={cn("container-row", "margin-16px")}>
          <T className={cn(Class.Body)}>Current theme: {theme}&nbsp;</T>

          <T
            onClick={() => setValue(theme === "light" ? "dark" : "light")}
            className={cn(Class.Action)}
          >
            Switch
          </T>
        </div>

        <div className={cn("container-row", "margin-16px")}>
          <div className="container-col" style={{ width: "50%" }}>
            <SuperSlider title="Leverage" />
          </div>

          <div className="margin-16px" />

          <div className={cn("container-col")} style={{ width: "50%" }}>
            <SuperSlider title="Leverage" value={20} />
          </div>
        </div>

        <div className={cn("container-row", "margin-16px")}>
          <div className="container-col" style={{ width: "50%" }}>
            <SuperSlider title="Leverage" value={10} restrictLessThan={10} />
          </div>

          <div className="margin-16px" />

          <div className={cn("container-col")} style={{ width: "50%" }}>
            <SuperSlider title="Leverage" value={5} />
          </div>
        </div>

        <div className={cn("container-row", "margin-16px")}>
          <div className="container-col" style={{ width: "50%" }}>
            <SuperSlider title="Leverage" value={15} restrictLessThan={10} />
          </div>

          <div className="margin-16px" />

          <div className={cn("container-col")} style={{ width: "50%" }}>
            <SuperSlider title="Leverage" value={15} />
          </div>
        </div>

        <div className={cn("container-row", "margin-16px")}>
          <div className="container-col" style={{ width: "50%" }}>
            <SuperSlider title="Leverage" value={18} restrictLessThan={17} />
          </div>

          <div className="margin-16px" />

          <div className={cn("container-col")} style={{ width: "50%" }}>
            <SuperSlider title="Leverage" value={18} />
          </div>
        </div>

        <div className={cn("container-row", "margin-16px")}>
          <div className="container-col" style={{ width: "50%" }}>
            <SuperSlider title="Leverage" value={20} restrictLessThan={15} />
          </div>

          <div className="margin-16px" />

          <div className={cn("container-col")} style={{ width: "50%" }}>
            <SuperSlider title="Leverage" value={20} />
          </div>
        </div>
      </Container>
    );
  },
};
