import type { Meta, StoryObj } from "@storybook/react";
import cn from "classnames";
import React, { ReactNode } from "react";

import { CardStoryWrapper } from "../components/helpers/card-story-wrapper";
import Card, {
  CardItem,
  CardItemDescription,
  CardItemTitle,
  CardProps,
} from "../components/card";
import * as classNames from "../constants/classnames";
import SwapIcon from "../icons/swap";

const meta = {
  title: "Components/Card",
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

interface CardItemHelperProps extends CardProps {
  title?: ReactNode;
  underTitle?: ReactNode;
  value?: ReactNode;
  underValue?: ReactNode;
}

function CardItemHelper(props: CardItemHelperProps) {
  return (
    <Card {...props}>
      <CardItem>
        <CardItemTitle>{props.title}</CardItemTitle>
        <CardItemDescription>{props.underTitle}</CardItemDescription>
      </CardItem>
      <CardItem className={cn(CardItem.Auto, CardItem.Right)}>
        <CardItemTitle>{props.title}</CardItemTitle>
        <CardItemDescription>{props.underTitle}</CardItemDescription>
      </CardItem>
    </Card>
  );
}

export const Common: Story = {
  render: () => {
    return (
      <CardStoryWrapper>
        <Card cover={<SwapIcon />} />

        <Card cover={<SwapIcon />} className={classNames.Secondary} />

        <CardItemHelper
          title={title}
          underTitle={underTitle}
          value={value}
          underValue={underValue}
        />

        <CardItemHelper
          title={title}
          underTitle={underTitle}
          value={value}
          underValue={underValue}
          className="secondary"
        />

        <CardItemHelper
          title={title}
          underTitle={underTitle}
          value={value}
          underValue={underValue}
          cover={<img src="/public/user.svg" />}
        />

        <CardItemHelper
          title={title}
          underTitle={underTitle}
          value={value}
          underValue={underValue}
          className={classNames.Secondary}
          cover={<img src="/public/user.svg" />}
        />

        <CardItemHelper
          title={title}
          underTitle={underTitle}
          value={value}
          underValue={underValue}
          cover={<img src="/public/user.svg" />}
          heading={heading}
          className={classNames.M}
        />

        <CardItemHelper
          title={title}
          underTitle={underTitle}
          value={value}
          underValue={underValue}
          className="secondary md"
          cover={<img src="/public/user.svg" />}
          heading={heading}
        />

        <CardItemHelper
          title={title}
          underTitle={underTitle}
          value={value}
          underValue={underValue}
          cover={<img src="/public/user.svg" />}
          heading={heading}
          description={mainDescription}
          className={classNames.L}
        />

        <CardItemHelper
          title={title}
          underTitle={underTitle}
          value={value}
          underValue={underValue}
          className={cn(classNames.Secondary, classNames.L)}
          cover={<img src="/public/user.svg" />}
          heading={heading}
          description={mainDescription}
        />
      </CardStoryWrapper>
    );
  },
};
