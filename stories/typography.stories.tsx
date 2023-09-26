import type { Meta, StoryObj } from "@storybook/react";
import React from "react";
import T from "../components/typography";
import { TypographyStoryWrapper } from "../components/helpers/typography-story-wrapper";

const meta = {
  title: "Components/Typography",
  parameters: {
    layout: "fullscreen",
  },
} satisfies Meta;

export default meta;
type Story = StoryObj<typeof meta>;

export const Common: Story = {
  render: () => {
    return (
      <TypographyStoryWrapper>
        <T title>
           title 
        </T>
        <T headerL>
           header-l
        </T>
        <T headerM>
           header-m
        </T>
        <T headerS>
           header-s
        </T>
        <T body>
           body
        </T>
        <T action>
           action
        </T>
        <T caption>
           caption
        </T>
        <T title secondary>
           title secondary 
        </T>
      </TypographyStoryWrapper>
    );
  },
};
