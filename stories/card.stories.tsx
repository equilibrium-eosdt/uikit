import type { Meta, StoryObj } from "@storybook/react";
import React from "react";

import { CardStoryWrapper } from "../components/helpers/card-story-wrapper";
import Card from "../components/card";
import * as classNames from "../constants/classnames";
import SwapIcon from "../icons/swap";
import Cell, { CellItem } from "../components/cell";

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

export const Common: Story = {
  render: () => {
    return (
      <CardStoryWrapper>
        <Card>
          <Cell>
            <CellItem label={title}>{underTitle}</CellItem>
            <CellItem label={value}>{underValue}</CellItem>
          </Cell>
        </Card>

        <Card className={classNames.Secondary}>
          <Cell>
            <CellItem label={title}>{underTitle}</CellItem>
            <CellItem label={value}>{underValue}</CellItem>
          </Cell>
        </Card>

        <Card cover={<SwapIcon />}>
          <Cell>
            <CellItem label={title}>{underTitle}</CellItem>
            <CellItem label={value}>{underValue}</CellItem>
          </Cell>
        </Card>

        <Card cover={<SwapIcon />} className={classNames.Secondary}>
          <Cell>
            <CellItem label={title}>{underTitle}</CellItem>
            <CellItem label={value}>{underValue}</CellItem>
          </Cell>
        </Card>

        <Card cover={<SwapIcon />}>
          <Cell>
            <CellItem reverse label={title}>
              {underTitle}
            </CellItem>
            <CellItem reverse label={value}>
              {underValue}
            </CellItem>
          </Cell>
        </Card>

        <Card cover={<SwapIcon />} className={classNames.Secondary}>
          <Cell>
            <CellItem reverse label={title}>
              {underTitle}
            </CellItem>
            <CellItem reverse label={value}>
              {underValue}
            </CellItem>
          </Cell>
        </Card>

        <Card heading={heading} cover={<SwapIcon />}>
          <Cell>
            <CellItem label={underTitle}>{title}</CellItem>
            <CellItem label={underValue}>{value}</CellItem>
          </Cell>
        </Card>

        <Card
          heading={heading}
          cover={<SwapIcon />}
          className={classNames.Secondary}
        >
          <Cell>
            <CellItem label={underTitle}>{title}</CellItem>
            <CellItem label={underValue}>{value}</CellItem>
          </Cell>
        </Card>

        <Card heading={heading} cover={<SwapIcon />} md>
          <Cell>
            <CellItem label={underTitle}>{title}</CellItem>
            <CellItem label={underValue}>{value}</CellItem>
          </Cell>
        </Card>

        <Card heading={heading} cover={<SwapIcon />} md secondary>
          <Cell>
            <CellItem label={underTitle}>{title}</CellItem>
            <CellItem label={underValue}>{value}</CellItem>
          </Cell>
        </Card>

        <Card
          heading={heading}
          description={mainDescription}
          cover={<SwapIcon />}
          lg
        >
          <Cell>
            <CellItem label={underTitle}>{title}</CellItem>
            <CellItem label={underValue}>{value}</CellItem>
          </Cell>
        </Card>

        <Card
          heading={heading}
          description={mainDescription}
          cover={<SwapIcon />}
          lg
          secondary
        >
          <Cell>
            <CellItem label={underTitle}>{title}</CellItem>
            <CellItem label={underValue}>{value}</CellItem>
          </Cell>
        </Card>

        <Card
          heading={heading}
          description={mainDescription}
          cover={<SwapIcon />}
          lg
        >
          <Cell>
            <CellItem label={underTitle}>{title}</CellItem>
            <CellItem label={underValue}>{value}</CellItem>
          </Cell>
        </Card>

        <Card
          heading={heading}
          description={mainDescription}
          cover={<SwapIcon />}
          lg
          secondary
        >
          <Cell>
            <CellItem label={underTitle}>{title}</CellItem>
            <CellItem label={underValue}>{value}</CellItem>
          </Cell>
        </Card>
      </CardStoryWrapper>
    );
  },
};
