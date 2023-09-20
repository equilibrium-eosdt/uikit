import type { Meta, StoryObj } from "@storybook/react";
import cn from "classnames";
import React, { ChangeEvent, useMemo, useReducer } from "react";

import styled from "styled-components";
import { ButtonWrapper as Button } from "../components/button/styled";
import SuperSlider_ from "../components/input/super-slider";
import * as Class from "../constants/classnames";
import T from "../components/typography";
import Icon from "../icons/lamp";
import { useThemeConfigStore, useSetTheme, setValue } from "../stores/theme";
import { getEntries, isPrefixed } from "../util/type";

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
  title: "Button",
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

        <div className={cn("container-row", "margin-16px")}>
          <div className="container-col" style={{ width: "50%" }}>
            <Button className={Class.L}>
              <Icon secondary style={{ width: 24, height: 24 }} />
              &nbsp;Hi!
            </Button>
          </div>

          <div className="margin-16px" />

          <div className={cn("container-col")} style={{ width: "50%" }}>
            <Button className={cn(Class.L, Class.Pending)}>
              Something else
            </Button>
          </div>
        </div>

      </Container>
    );
  },
};
