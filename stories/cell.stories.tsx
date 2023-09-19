import type { Meta, StoryObj } from "@storybook/react";
import cn from "classnames";
import React, { ReactNode } from "react";
import * as Class from "../constants/classnames";
import LampIcon from "../icons/lamp";
import { CardStoryWrapper } from "../components/helpers/card-story-wrapper";
import Thumbnail from "../components/thumbnail";
import Cell, { CellItem } from "../components/cell";
import Label from "../components/label";

const meta = {
  title: "Components/Cell",
  parameters: {
    layout: "fullscreen",
  },
} satisfies Meta;

export default meta;
type Story = StoryObj<typeof meta>;

const icon = <LampIcon />;

const title = "Title";
const underTitle = "Description";
const value = "Value";
const underValue = "Description";

export const Common: Story = {
  render: () => {
    return (
      <CardStoryWrapper>
        <Cell>
          <Thumbnail md>{icon}</Thumbnail>
          <CellItem clearMargin label={title}>
            {underTitle}
          </CellItem>
          <CellItem reverse label={value}>
            {underValue}
          </CellItem>
        </Cell>

        <Cell>
          <Thumbnail md>{icon}</Thumbnail>
          <CellItem clearMargin label={title}>
            {underTitle}
          </CellItem>
          <CellItem label={value}>
            {underValue}
          </CellItem>
        </Cell>

        <Cell>
          <Thumbnail md>{icon}</Thumbnail>
          <CellItem clearMargin label={underTitle}>
            {title}
          </CellItem>
          <CellItem label={underValue}>
            {value}
          </CellItem>
        </Cell>


        <Cell>
          <Thumbnail md>{icon}</Thumbnail>
          <CellItem clearMargin>
            {title}
          </CellItem>
          <CellItem >
            {value}
          </CellItem>
        </Cell>

        <Cell>
          <Thumbnail md>{icon}</Thumbnail>
          <CellItem clearMargin label={underTitle}>
            {title}
          </CellItem>
          <CellItem>
            <Label accent md className={cn(Class.M, Class.Accent)}>
              Label
            </Label>
          </CellItem>
        </Cell>


        <Cell>
          <Thumbnail md>{icon}</Thumbnail>
          <CellItem clearMargin label={title}>
            {underTitle}
          </CellItem>
          <CellItem>
            <Label accent md className={cn(Class.M, Class.Accent)}>
              Label
            </Label>
          </CellItem>
        </Cell>

        <Cell>
          <Thumbnail md>{icon}</Thumbnail>
          <CellItem clearMargin>
            {title}
          </CellItem>
          <CellItem>
            <Label accent md className={cn(Class.M, Class.Accent)}>
              Label
            </Label>
          </CellItem>
        </Cell>


        <Cell>
          <Thumbnail md>{icon}</Thumbnail>
          <CellItem clearMargin label={title}>
            {underTitle}
          </CellItem>
        </Cell>


        <Cell>
          <Thumbnail md>{icon}</Thumbnail>
          <CellItem clearMargin>
            {title}
          </CellItem>
        </Cell>

      </CardStoryWrapper>
    );
  },
};
