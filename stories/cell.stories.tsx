import type { Meta, StoryObj } from "@storybook/react";
import cn from "classnames";
import React, { ReactNode } from "react";
import * as Class from "../constants/classnames";
import LampIcon from "../icons/lamp";
import { CardStoryWrapper } from "../components/helpers/card-story-wrapper";
import Thumbnail from "../components/thumbnail";
import Cell, { CellItem } from "../components/cell";
import Label from "../components/label";
import Button from "../components/button";
import T from "../components/typography";
import { Stepper } from "../components/cell/styled";
import { StepperMinus, StepperPlus } from "../icons/stepper";
import Checkmark from "../icons/checkmark";
import GotoIcon from "../icons/goto";
import Toggle from "../components/toggle/toggle";

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
          <CellItem label={value}>{underValue}</CellItem>
        </Cell>

        <Cell>
          <Thumbnail md>{icon}</Thumbnail>
          <CellItem clearMargin>{title}</CellItem>
          <CellItem>{value}</CellItem>
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
          <CellItem clearMargin reverse label="Caption">
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
          <CellItem clearMargin reverse label="Caption">
            {title}
          </CellItem>
          <CellItem reverse label="Caption">
            {value}
          </CellItem>
        </Cell>

        <Cell>
          <Thumbnail md>{icon}</Thumbnail>
          <CellItem clearMargin>{title}</CellItem>
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
          <CellItem clearMargin>{title}</CellItem>
        </Cell>

        <div style={{ height: "20px" }} />
        <Cell>
          <Thumbnail md>{icon}</Thumbnail>
          <CellItem clearMargin label={title}>
            {underTitle}
          </CellItem>
          <CellItem>
            <Button secondary sm>
              <T action>Action</T>
            </Button>
          </CellItem>
        </Cell>

        <Cell>
          <Thumbnail md>{icon}</Thumbnail>
          <CellItem clearMargin>{title}</CellItem>
          <CellItem>
            <Button secondary sm>
              <T action>Action</T>
            </Button>
          </CellItem>
        </Cell>

        <Cell>
          <Thumbnail md>{icon}</Thumbnail>
          <CellItem reverse clearMargin label={title}>
            {underTitle}
          </CellItem>
          <CellItem>
            <Button secondary sm>
              <T action>Action</T>
            </Button>
          </CellItem>
        </Cell>

        <div style={{ height: "20px" }} />
        {/* STEPPER */}

        <Cell>
          <Thumbnail md>{icon}</Thumbnail>
          <CellItem clearMargin label={title}>
            {underTitle}
          </CellItem>
          <CellItem>
            <Stepper>
              <Button
                elevated
                sm
                icon={
                  <StepperMinus secondary style={{ width: 24, height: 24 }} />
                }
              />
              <Button
                elevated
                sm
                icon={
                  <StepperPlus secondary style={{ width: 24, height: 24 }} />
                }
              />
            </Stepper>
          </CellItem>
        </Cell>

        <Cell>
          <Thumbnail md>{icon}</Thumbnail>
          <CellItem reverse clearMargin label={title}>
            {underTitle}
          </CellItem>
          <CellItem>
            <Stepper>
              <Button
                elevated
                sm
                icon={
                  <StepperMinus secondary style={{ width: 24, height: 24 }} />
                }
              />
              <Button
                elevated
                sm
                icon={
                  <StepperPlus secondary style={{ width: 24, height: 24 }} />
                }
              />
            </Stepper>
          </CellItem>
        </Cell>

        <Cell>
          <Thumbnail md>{icon}</Thumbnail>
          <CellItem reverse clearMargin>
            {title}
          </CellItem>
          <CellItem>
            <Stepper>
              <Button
                elevated
                sm
                icon={
                  <StepperMinus secondary style={{ width: 24, height: 24 }} />
                }
              />
              <Button
                elevated
                sm
                icon={
                  <StepperPlus secondary style={{ width: 24, height: 24 }} />
                }
              />
            </Stepper>
          </CellItem>
        </Cell>

        <div />
        {/* CHECKMARK */}

        <Cell>
          <Thumbnail md>{icon}</Thumbnail>
          <CellItem clearMargin label={title}>
            {underTitle}
          </CellItem>
          <CellItem>
            <Checkmark style={{ width: "24px" }} />
          </CellItem>
        </Cell>

        <Cell>
          <Thumbnail md>{icon}</Thumbnail>
          <CellItem reverse clearMargin label={title}>
            {underTitle}
          </CellItem>
          <CellItem>
            <Checkmark style={{ width: "24px" }} />
          </CellItem>
        </Cell>

        <Cell>
          <Thumbnail md>{icon}</Thumbnail>
          <CellItem reverse clearMargin>
            {title}
          </CellItem>
          <CellItem>
            <Checkmark style={{ width: "24px" }} />
          </CellItem>
        </Cell>

        <div />
        {/* GoTo */}

        <Cell>
          <Thumbnail md>{icon}</Thumbnail>
          <CellItem clearMargin label={title}>
            {underTitle}
          </CellItem>
          <CellItem>
            <GotoIcon style={{ width: "24px" }} />
          </CellItem>
        </Cell>

        <Cell>
          <Thumbnail md>{icon}</Thumbnail>
          <CellItem reverse clearMargin label={title}>
            {underTitle}
          </CellItem>
          <CellItem>
            <GotoIcon style={{ width: "24px" }} />
          </CellItem>
        </Cell>

        <Cell>
          <Thumbnail md>{icon}</Thumbnail>
          <CellItem reverse clearMargin>
            {title}
          </CellItem>
          <CellItem>
            <GotoIcon style={{ width: "24px" }} />
          </CellItem>
        </Cell>

        <div />
        {/* Toggle */}

        <Cell>
          <Thumbnail md>{icon}</Thumbnail>
          <CellItem clearMargin label={title}>
            {underTitle}
          </CellItem>
          <CellItem>
            <Toggle />
          </CellItem>
        </Cell>

        <Cell>
          <Thumbnail md>{icon}</Thumbnail>
          <CellItem reverse clearMargin label={title}>
            {underTitle}
          </CellItem>
          <CellItem>
            <Toggle />
          </CellItem>
        </Cell>

        <Cell>
          <Thumbnail md>{icon}</Thumbnail>
          <CellItem reverse clearMargin>
            {title}
          </CellItem>
          <CellItem>
            <Toggle on />
          </CellItem>
        </Cell>
      </CardStoryWrapper>
    );
  },
};
