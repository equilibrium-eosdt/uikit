import type { Meta, StoryObj } from "@storybook/react";

import cn from "classnames";
import React from "react";
import * as classNames from "../constants/classnames";
import { InputStoryWrapper } from "../components/helpers/input-story-wrapper";
import { StoryInput } from "../components/helpers/story-controls";
import T from "../components/typography";

import { SuperField as Superfield_ } from "../components/input/super-field";

const meta = {
  title: "Components/Input/Superfield",
  component: Superfield_,
  parameters: {
    layout: "fullscreen",
  },
} satisfies Meta<typeof Superfield_>;

export default meta;
type Story = StoryObj<typeof meta>;

const Superfield = StoryInput(
  Superfield_,
  {},
  "value",
  "",
  "onChange",
  (e) => e.target.value,
);

export const Common: Story = {
  render: () => {
    return (
    <>
    <T headerM style={{textAlign: "center", padding: "10px 40px 0px"}}>Superfield needs to be placed in fixed width bock to avoid unwanted expansion</T>

    <InputStoryWrapper>

    <T style={{textAlign: "center", padding: "0 0"}}>here is an exaple flex-column continer with 340px max-width:</T>

    <Superfield title="Label" placeholder="Value" 
      postfix="USDC"
      />

    <Superfield
      className={cn(classNames.Hovered)}
      title="Label"
      placeholder="Value"
      postfix="USDC"
    />

    <Superfield
      className={cn(classNames.Focused)}
      title="Label"
      placeholder="Value"
      postfix="ETH"
    />

    <Superfield
      className={cn(classNames.Focused)}
      value="Value"
      title="Label"
      placeholder="Value"
      postfix="BTC"
    />

    <Superfield
      className={cn(classNames.Hovered, classNames.Filled)}
      title="Label"
      value="Value"
      placeholder="Value"
    />

    <Superfield
      className={cn(classNames.Filled)}
      title="Label"
      value="Value"
      placeholder="Value"
    />

    <Superfield
      className={cn(classNames.Error)}
      title="Label"
      placeholder="Value"
    />

    <Superfield
      className={cn(classNames.Error, classNames.Hovered)}
      title="Label"
      placeholder="Value"
    />

    <Superfield
      className={cn(classNames.Error, classNames.Focused)}
      title="Label"
      value="Val"
      placeholder="Value"
    />

    <Superfield
      className={cn(
        classNames.Error,
        classNames.Focused,
        classNames.Filled,
      )}
      title="Label"
      value="Value"
      placeholder="Value"
    />

    <Superfield
      className={cn(
        classNames.Error,
        classNames.Hovered,
        classNames.Filled,
      )}
      title="Label"
      value="Value"
      placeholder="Value"
    />

    <Superfield
      className={cn(classNames.Error, classNames.Filled)}
      title="Label"
      value="Value"
      placeholder="Value"
    />
    </InputStoryWrapper>
    </>
    );
  },
};
