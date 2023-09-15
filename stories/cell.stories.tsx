import type { Meta, StoryObj } from "@storybook/react";
import cn from "classnames";
import React, { ReactNode } from "react";
import * as Class from "../constants/classnames";
import LampIcon from "../icons/lamp";
import CheckmarkIcon from "../icons/checkmark";
import TransitionIcon from "../icons/transition";
import { CardStoryWrapper } from "../components/helpers/card-story-wrapper";
import Thumbnail from "../components/thumbnail";
import Cell, { CellItem } from "../components/cell";
import Label from "../components/label";
import { ThemeConsumer } from "styled-components";

const meta = {
  title: "Components/Cell",
  parameters: {
    layout: "fullscreen",
  },
} satisfies Meta;

export default meta;
type Story = StoryObj<typeof meta>;

const icon = <LampIcon />;
const check = <CheckmarkIcon />;
const transition = <TransitionIcon />;

interface CellProps {
  icon?: ReactNode;
  title?: ReactNode;
  underTitle?: ReactNode;
  value?: ReactNode;
  underValue?: ReactNode;
  aside?: ReactNode;
  reverse?: boolean;
}

const title = "Title";
const underTitle = "Description";
const value = "Value";
const underValue = "Description";

/** @deprecated */
function CellHelper(props: CellProps) {
  return (
    <Cell>
      {props.icon ? <Thumbnail md>{props.icon}</Thumbnail> : null}
      <CellItem clearMargin={Boolean(props.icon)} label={title}>
        {props.underTitle}
      </CellItem>
      {props.aside ? (
        <CellItem>{props.aside}</CellItem>
      ) : (
        <CellItem label={props.value}>{props.underValue}</CellItem>
      )}
    </Cell>
  );
}

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
        {/* TODO replace helpers as above */}

        <CellHelper
          icon={icon}
          title={title}
          underTitle={underTitle}
          value={value}
          underValue={underValue}
          reverse
        />

        <CellHelper icon={icon} title={title} value={value} />

        <CellHelper
          icon={icon}
          title={title}
          underTitle={underTitle}
          aside={
            <Label accent md className={cn(Class.M, Class.Accent)}>
              Label
            </Label>
          }
        />
        <CellHelper
          icon={icon}
          title={title}
          underTitle={underTitle}
          aside={
            <Label accent md className={cn(Class.M, Class.Accent)}>
              Label
            </Label>
          }
          reverse
        />
        <CellHelper
          icon={icon}
          title={title}
          aside={
            <Label accent md>
              Label
            </Label>
          }
        />

        <CellHelper
          icon={icon}
          title={title}
          underTitle={underTitle}
          aside={check}
        />
        <CellHelper
          icon={icon}
          title={title}
          underTitle={underTitle}
          aside={check}
          reverse
        />
        <CellHelper icon={icon} title={title} aside={check} />

        <CellHelper
          icon={icon}
          title={title}
          underTitle={underTitle}
          aside={transition}
        />
        <CellHelper
          icon={icon}
          title={title}
          underTitle={underTitle}
          aside={transition}
          reverse
        />
        <CellHelper icon={icon} title={title} aside={transition} />
      </CardStoryWrapper>
    );
  },
};
