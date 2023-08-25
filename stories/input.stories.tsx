import type { Meta, StoryObj } from "@storybook/react";
import cn from "classnames";
import React from "react";
import { InputStoryWrapper } from "../components/helpers/input-story-wrapper";
import { StoryInput } from "../components/helpers/story-controls";

import TF, { TextField as TextField_ } from "../components/input/text-field";
// import { within, userEvent } from "@storybook/testing-library";

const meta = {
  title: "Components/TextField",
  component: TextField_,
  parameters: {
    // More on how to position stories at: https://storybook.js.org/docs/react/configure/story-layout
    layout: "fullscreen",
  },
} satisfies Meta<typeof TextField_>;

export default meta;
type Story = StoryObj<typeof meta>;

const TextField = StoryInput(
  TextField_,
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
        <TextField title="Label" />

        <TextField className={cn(TF.Hovered)} title="Label" />

        <TextField className={cn(TF.Focused)} title="Label" />

        <TextField className={cn(TF.Focused)} value="Value" title="Label" />

        <TextField
          className={cn(TF.Hovered, TF.Filled)}
          title="Label"
          value="Value"
        />

        <TextField className={cn(TF.Filled)} title="Label" value="Value" />

        <TextField className={cn(TF.Error)} title="Label" />

        <TextField className={cn(TF.Error, TF.Hovered)} title="Label" />

        <TextField
          className={cn(TF.Error, TF.Focused)}
          title="Label"
          value="Val"
        />

        <TextField
          className={cn(TF.Error, TF.Focused, TF.Filled)}
          title="Label"
          value="Value"
        />

        <TextField
          className={cn(TF.Error, TF.Hovered, TF.Filled)}
          title="Label"
          value="Value"
        />

        <TextField
          className={cn(TF.Error, TF.Filled)}
          title="Label"
          value="Value"
        />
      </InputStoryWrapper>
    );
  },
};
