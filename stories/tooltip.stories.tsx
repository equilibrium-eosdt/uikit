import type { Meta, StoryObj } from "@storybook/react";
import React from "react";
import Tooltip from "../components/tooltip/index";
import { LabelStoryWrapper } from "../components/helpers/label-story-wrapper";

const meta = {
  title: "Components/Tooltip",
  parameters: {
    layout: "fullscreen",
  },
} satisfies Meta;

export default meta;
type Story = StoryObj<typeof meta>;

const content = "Label";

export const Common: Story = {
  render: () => {
    return (
      <LabelStoryWrapper>
        <Tooltip lg top>
          {content}
        </Tooltip>
        <Tooltip lg bottom>
          {content}
        </Tooltip>

        <Tooltip md top>
          {content}
        </Tooltip>
        <Tooltip md bottom>
          {content}
        </Tooltip>

        <Tooltip sm top>
          {content}
        </Tooltip>
        <Tooltip sm bottom>
          {content}
        </Tooltip>

        <Tooltip sm top multiline>
          {content}
        </Tooltip>
        <Tooltip sm bottom multiline>
          {content}
        </Tooltip>
      </LabelStoryWrapper>
    );
  },
};
