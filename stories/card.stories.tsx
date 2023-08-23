import type { Meta, StoryObj } from "@storybook/react";
import React from "react";

import {
  CardDescription,
  CardHeading,
  CardIcon,
  CardRow,
  CardRowDescription,
  CardRowLeft,
  CardRowRight,
  CardRowTitle,
  CardStyled,
} from "../components/card/card.styled";
import { CardStoryWrapper } from "../components/card/card-story-wrapper";
import Card from "../components/card/card";

const meta = {
  title: "Card",
  parameters: {
    layout: "fullscreen",
  },
} satisfies Meta;

export default meta;
type Story = StoryObj<typeof meta>;

const title = "Title";
const underTitle = "Description";
const value = "Value";
const underValue = "Description";
const heading = "Heading";
const mainDescription = "Description";

export const Common: Story = {
  render: () => {
    return (
      <CardStoryWrapper>
        <Card
          title={title}
          underTitle={underTitle}
          value={value}
          underValue={underValue}
        />

        <Card
          title={title}
          underTitle={underTitle}
          value={value}
          underValue={underValue}
          className="secondary"
        />

        <Card
          title={title}
          underTitle={underTitle}
          value={value}
          underValue={underValue}
          iconSrc={"/public/user.svg"}
        />

        <Card
          title={title}
          underTitle={underTitle}
          value={value}
          underValue={underValue}
          className="secondary"
          iconSrc={"/public/user.svg"}
        />

        <Card
          title={title}
          underTitle={underTitle}
          value={value}
          underValue={underValue}
          iconSrc={"/public/user.svg"}
          heading={heading}
          className="md"
        />

        <Card
          title={title}
          underTitle={underTitle}
          value={value}
          underValue={underValue}
          className="secondary md"
          iconSrc={"/public/user.svg"}
          heading={heading}
        />

        <Card
          title={title}
          underTitle={underTitle}
          value={value}
          underValue={underValue}
          iconSrc={"/public/user.svg"}
          heading={heading}
          mainDescription={mainDescription}
          className="lg"
        />

        <Card
          title={title}
          underTitle={underTitle}
          value={value}
          underValue={underValue}
          className="secondary lg"
          iconSrc={"/public/user.svg"}
          heading={heading}
          mainDescription={mainDescription}
        />
      </CardStoryWrapper>
    );
  },
};
