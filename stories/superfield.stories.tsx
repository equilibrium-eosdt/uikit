import type { Meta, StoryObj } from "@storybook/react";
import IconPlus from "../icons/plus-button";
import IconMinus from "../icons/minus-button";

import cn from "classnames";
import React, { CSSProperties, ReactNode } from "react";
import * as classNames from "../constants/classnames";
import { InputStoryWrapper } from "../components/helpers/input-story-wrapper";
import { StoryInput } from "../components/helpers/story-controls";
import T from "../components/typography";
import { ButtonWrapper as Button } from "../components/button/styled";

import { FieldInnerContainer as Field } from "../components/input";
import Superfield_ from "../components/input/super-field";
import { useFocus } from "../components/input/use-focus";
import Label from "../components/label";

import {
  Suggestion,
  Controls,
  M,
  Elevated,
  Icon,
} from "../constants/classnames";
import type { ComposeProps } from "../types/util";

import { constStrArray, extractProps } from "../util/type";

const classes = constStrArray(Suggestion, Controls, M, Elevated, Icon);

interface ButtonProps extends Partial<ComposeProps<typeof classes, boolean>> {
  className?: string;
  style?: CSSProperties;
  children?: ReactNode;
}

function ButtonComponent(props: ButtonProps) {
  return (
    <Button
      className={cn(props.className, extractProps(props, ...classes))}
      style={props.style}
    >
      {props.children}
    </Button>
  );
}

function SuperfieldWithState() {
  const withFocus = useFocus();

  return (
    <>
      <T style={{ textAlign: "center", padding: "0 0" }}>With State</T>
      <Superfield_
        title="Label"
        placeholder="Value"
        postfix="ETH"
        {...withFocus}
      />
    </>
  );
}

const meta = {
  title: "Components/Input/Superfield",
  component: Superfield_,
  parameters: {
    layout: "fullscreen",
  },
} satisfies Meta<typeof Superfield_>;

export default meta;
type Story = StoryObj<typeof meta>;

const Superfield = StoryInput(
  Superfield_,
  {},
  "value",
  "",
  "onChange",
  (e) => e.target.value,
);

export const Common: Story = {
  render: () => {
    return (
      <>
        <T headerM style={{ textAlign: "center", padding: "10px 40px 0px" }}>
          Superfield needs to be placed in fixed width bock to avoid unwanted
          expansion
        </T>

        <InputStoryWrapper>
          <T style={{ textAlign: "center", padding: "0 0" }}>
            here is an exaple flex-column continer with 340px max-width:
          </T>

          <Superfield title="Label" placeholder="Value" postfix="USDC" />

          <Superfield
            title="Label"
            placeholder="Value"
            postfix="USDC"
          ></Superfield>

          <Superfield
            title="Label"
            placeholder="Value"
            postfix="USDC"
            className={cn(classNames.Controls)}
          >
            <Field controls>
              <ButtonComponent md elevated icon>
                <IconMinus />
              </ButtonComponent>
              <ButtonComponent md elevated icon>
                <IconPlus />
              </ButtonComponent>
            </Field>
            <Field suggestion>
              <Label badge>Max 2500</Label>
            </Field>
          </Superfield>

          <Superfield
            className={cn(classNames.Hovered, classNames.Controls)}
            title="Label"
            placeholder="Value"
            postfix="USDC"
          >
            <Field controls>
              <ButtonComponent md elevated icon>
                <IconMinus />
              </ButtonComponent>
              <ButtonComponent md elevated icon>
                <IconPlus />
              </ButtonComponent>
            </Field>
            <Field suggestion>
              <Label badge>Max 2500</Label>
            </Field>
          </Superfield>

          <Superfield
            className={cn(classNames.Focused, classNames.Controls)}
            title="Label"
            placeholder="Value"
            postfix="USDC"
          >
            <Field controls>
              <ButtonComponent md elevated icon>
                <IconMinus />
              </ButtonComponent>
              <ButtonComponent md elevated icon>
                <IconPlus />
              </ButtonComponent>
            </Field>
            <Field suggestion>
              <Label badge>Max 2500</Label>
            </Field>
          </Superfield>

          <Superfield
            className={cn(classNames.Focused)}
            title="Label"
            placeholder="Value"
            postfix="ETH"
          />

          <Superfield
            className={cn(classNames.Focused)}
            value="Value"
            title="Label"
            placeholder="Value"
            postfix="BTC"
          />

          <Superfield
            className={cn(classNames.Hovered, classNames.Filled)}
            title="Label"
            value="Value"
            placeholder="Value"
          />

          <Superfield
            className={cn(classNames.Filled)}
            title="Label"
            value="Value"
            placeholder="Value"
          />

          <Superfield
            className={cn(classNames.Error)}
            title="Label"
            placeholder="Value"
          />

          <Superfield
            className={cn(classNames.Error, classNames.Hovered)}
            title="Label"
            placeholder="Value"
          />

          <Superfield
            className={cn(classNames.Error, classNames.Focused)}
            title="Label"
            value="Val"
            placeholder="Value"
          />

          <Superfield
            className={cn(
              classNames.Error,
              classNames.Focused,
              classNames.Filled,
            )}
            title="Label"
            value="Value"
            placeholder="Value"
          />

          <Superfield
            className={cn(
              classNames.Error,
              classNames.Hovered,
              classNames.Filled,
            )}
            title="Label"
            value="Value"
            placeholder="Value"
          />

          <Superfield
            className={cn(classNames.Error, classNames.Filled)}
            title="Label"
            value="Value"
            placeholder="Value"
          />

          <Superfield
            className={cn(classNames.Focused, classNames.Controls)}
            title="Label"
            value="Value"
            placeholder="Value"
          >
            <Field controls>
              <ButtonComponent md elevated icon>
                <IconMinus />
              </ButtonComponent>
              <ButtonComponent md elevated icon>
                <IconPlus />
              </ButtonComponent>
            </Field>
            <Field suggestion>
              <Label badge>Max 2500</Label>
            </Field>
          </Superfield>

          <Superfield
            title="Label"
            value="Value"
            placeholder="Value"
            className={cn(classNames.Controls)}
          >
            <Field controls>
              <ButtonComponent md elevated icon>
                <IconMinus />
              </ButtonComponent>
              <ButtonComponent md elevated icon>
                <IconPlus />
              </ButtonComponent>
            </Field>
            <Field suggestion>
              <Label badge>Max 2500</Label>
            </Field>
          </Superfield>
          <SuperfieldWithState />
        </InputStoryWrapper>
      </>
    );
  },
};
