import type { Meta, StoryObj } from "@storybook/react";
import cn from "classnames";
import React from "react";

import StoryWrapper from "../components/helpers/color-story-wrapper";
import { Tabs, TabItem } from "../components/tabs";
import * as classNames from "../constants/classnames";
// import { within, userEvent } from "@storybook/testing-library";

const meta = {
  title: "Components/Tabs",
  component: TabItem,
  parameters: {
    // More on how to position stories at: https://storybook.js.org/docs/react/configure/story-layout
    layout: "fullscreen",
  },
} satisfies Meta<typeof TabItem>;

export default meta;
type Story = StoryObj<typeof meta>;

export const Common: Story = {
  render: () => {
    const [direction, setDirection] = React.useState<"swap" | "long" | "short">(
      "swap",
    );

    return (
      <StoryWrapper className="container-col">
        <Tabs className="tabs--longshort">
          <TabItem
            className={cn({ [classNames.Active]: direction === "long" })}
            onClick={setDirection.bind(null, "long")}
          >
            Long
          </TabItem>
          <TabItem
            className={cn({ [classNames.Active]: direction === "short" })}
            onClick={setDirection.bind(null, "short")}
          >
            Short
          </TabItem>
          <TabItem
            className={cn({ [classNames.Active]: direction === "swap" })}
            onClick={setDirection.bind(null, "swap")}
          >
            Swap
          </TabItem>
        </Tabs>
      </StoryWrapper>
    );
  },
};
