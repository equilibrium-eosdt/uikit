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
        <Tooltip lg top content={content} />
        <Tooltip lg bottom content={content} />

        <Tooltip md top content={content} />
        <Tooltip md bottom  content={content} />

        <Tooltip sm top content={content} />
        <Tooltip sm bottom content={content} />

        <Tooltip sm top multiline content={content} />
        <Tooltip sm bottom multiline content={content} />

      </LabelStoryWrapper>
    );
  },
};
