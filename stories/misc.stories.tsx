import type { Meta, StoryObj } from "@storybook/react";
import cn from "classnames";
import React from "react";

import styled from "styled-components";
import SuperSlider from "../components/input/super-slider";
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
            <SuperSlider title="Leverage" value={10} restrictLessThan={5} />
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
