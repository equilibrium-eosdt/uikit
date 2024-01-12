import type { Meta, StoryObj } from "@storybook/react";
import cn from "classnames";
import React from "react";
import { InputStoryWrapper } from "../components/helpers/input-story-wrapper";
import { StoryInput } from "../components/helpers/story-controls";

import { TextField as TextField_ } from "../components/input/text-field";
import * as classNames from "../constants/classnames";
// import { within, userEvent } from "@storybook/testing-library";
import AlertIcon from "../icons/alert";

const meta = {
  title: "Components/Input/Textfield",
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

        <TextField className={cn(classNames.Hovered)} title="Label" />

        <TextField className={cn(classNames.Focused)} title="Label" />

        <TextField
          className={cn(classNames.Focused)}
          value="Value"
          title="Label"
        />

        <TextField
          className={cn(classNames.Hovered, classNames.Filled)}
          title="Label"
          value="Value"
        />

        <TextField
          className={cn(classNames.Filled)}
          title="Label"
          value="Value"
        />

        <TextField className={cn(classNames.Error)} title="Label">
          <AlertIcon />
        </TextField>

        <TextField
          className={cn(classNames.Error, classNames.Hovered)}
          title="Label"
        >
          <AlertIcon />
        </TextField>

        <TextField
          className={cn(classNames.Error, classNames.Focused)}
          title="Label"
          value="Val"
        />

        <TextField
          className={cn(
            classNames.Error,
            classNames.Focused,
            classNames.Filled,
          )}
          title="Label"
          value="Value"
        />

        <TextField
          className={cn(
            classNames.Error,
            classNames.Hovered,
            classNames.Filled,
          )}
          title="Label"
          value="Value"
        >
          <AlertIcon />
        </TextField>

        <TextField
          className={cn(classNames.Error, classNames.Filled)}
          title="Label"
          value="Value"
        >
          <AlertIcon />
        </TextField>

        <TextField title="Label" className={cn(classNames.Disabled)} />
      </InputStoryWrapper>
    );
  },
};
