import type { Meta, StoryObj } from "@storybook/react";
import cn from "classnames";
import React from "react";
import { InputStoryWrapper } from "../components/helpers/input-story-wrapper";

import  TextField  from "../components/input/text-field";
// import { within, userEvent } from "@storybook/testing-library";

const meta = {
  title: "Components/TextField",
  component: TextField,
  parameters: {
    // More on how to position stories at: https://storybook.js.org/docs/react/configure/story-layout
    layout: "fullscreen",
  },
} satisfies Meta<typeof TextField>;

export default meta;
type Story = StoryObj<typeof meta>;

export const Common: Story = {
  render: () => {
    const [direction, setDirection] = React.useState<"swap" | "long" | "short">(
      "swap",
    );

    return (
      <InputStoryWrapper>
        <TextField title="Label"/>

        <TextField className="hovered" title="Label"/>

        <TextField className="focused" title="Label" />

        <TextField className="focused" value="Value" title="Label"/>

        <TextField className="hovered filled" title="Label"  value="Value" />

        <TextField className="filled" title="Label"  value="Value" />

        <TextField className="error" title="Label" />
        
        <TextField className="error hovered" title="Label" />

        <TextField className="error focused" title="Label"  value="Val" />

        <TextField className="error focused filled" title="Label"  value="Value" />

        <TextField className="error filled hovered" title="Label"  value="Value" />

        <TextField className="error filled" title="Label"  value="Value" />

      </InputStoryWrapper>
    );
  },
};
