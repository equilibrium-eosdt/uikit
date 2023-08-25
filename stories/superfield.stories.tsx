import type { Meta, StoryObj } from "@storybook/react";
import cn from "classnames";
import React from "react";
import { InputStoryWrapper } from "../components/helpers/input-story-wrapper";
import { StoryInput } from "../components/helpers/story-controls";

import TF, { Superfield as Superfield_ } from "../components/input/superfield";
// import { within, userEvent } from "@storybook/testing-library";

const meta = {
  title: "Components/Superfield",
  component: Superfield_,
  parameters: {
    // More on how to position stories at: https://storybook.js.org/docs/react/configure/story-layout
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
      <InputStoryWrapper>
        <Superfield title="Label" placeholder="Value" />

        <Superfield
          className={cn(TF.Hovered)}
          title="Label"
          placeholder="Value"
        />

        <Superfield
          className={cn(TF.Focused)}
          title="Label"
          placeholder="Value"
        />

        <Superfield
          className={cn(TF.Focused)}
          value="Value"
          title="Label"
          placeholder="Value"
        />

        <Superfield
          className={cn(TF.Hovered, TF.Filled)}
          title="Label"
          value="Value"
          placeholder="Value"
        />

        <Superfield
          className={cn(TF.Filled)}
          title="Label"
          value="Value"
          placeholder="Value"
        />

        <Superfield
          className={cn(TF.Error)}
          title="Label"
          placeholder="Value"
        />

        <Superfield
          className={cn(TF.Error, TF.Hovered)}
          title="Label"
          placeholder="Value"
        />

        <Superfield
          className={cn(TF.Error, TF.Focused)}
          title="Label"
          value="Val"
          placeholder="Value"
        />

        <Superfield
          className={cn(TF.Error, TF.Focused, TF.Filled)}
          title="Label"
          value="Value"
          placeholder="Value"
        />

        <Superfield
          className={cn(TF.Error, TF.Hovered, TF.Filled)}
          title="Label"
          value="Value"
          placeholder="Value"
        />

        <Superfield
          className={cn(TF.Error, TF.Filled)}
          title="Label"
          value="Value"
          placeholder="Value"
        />
      </InputStoryWrapper>
    );
  },
};
