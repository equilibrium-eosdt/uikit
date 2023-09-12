import type { Meta, StoryObj } from "@storybook/react";
import cn from "classnames";
import React, { ReactNode } from "react";
import * as Class from "../constants/classnames";
import {FlashIcon, FlashGreenIcon, FlashRedIcon} from "../icons/flash";
import { LabelWrapper } from "../components/label/styled";
import { LabelStoryWrapper } from "../components/helpers/label-story-wrapper";

const meta = {
  title: "Components/Label",
  parameters: {
    layout: "fullscreen",
  },
} satisfies Meta;

export default meta;
type Story = StoryObj<typeof meta>;

const title = "Label";

interface LabelProps  {
  title?: string;
  icon?: ReactNode;
  className?: string;
}

function LabelItemHelper(props: LabelProps) {
  return (
    <LabelWrapper {...props}>
        {props?.icon}
        {props?.title}
    </LabelWrapper>
  );
}

export const Common: Story = {
  render: () => {
    return (
      <LabelStoryWrapper>
        <LabelItemHelper title={title} className={cn(Class.L, Class.Icon)} icon={<FlashIcon />} />
        <LabelItemHelper title={title} className={cn(Class.L, Class.Icon, Class.Reverse)} icon={<FlashIcon />} />
        <LabelItemHelper title={title} className={cn(Class.L)} />
        <LabelItemHelper className={cn(Class.L, Class.SignleIcon)} icon={<FlashIcon />} />

        <LabelItemHelper title={title} className={cn(Class.M, Class.Icon)} icon={<FlashIcon />} />
        <LabelItemHelper title={title} className={cn(Class.M, Class.Icon, Class.Reverse)} icon={<FlashIcon />} />
        <LabelItemHelper title={title} className={cn(Class.M)} />
        <LabelItemHelper className={cn(Class.M, Class.SignleIcon)} icon={<FlashIcon />} />

        <LabelItemHelper title={title} className={cn(Class.S, Class.Icon)} icon={<FlashIcon />} />
        <LabelItemHelper title={title} className={cn(Class.S, Class.Icon, Class.Reverse)} icon={<FlashIcon />} />
        <LabelItemHelper title={title} className={cn(Class.S)} />
        <LabelItemHelper className={cn(Class.S, Class.SignleIcon)} icon={<FlashIcon />} />

        <LabelItemHelper title={title} className={cn(Class.L, Class.Accent)} icon={<FlashIcon />} />
        <LabelItemHelper title={title} className={cn(Class.L, Class.Icon, Class.Reverse, Class.Accent)} icon={<FlashIcon />} />
        <LabelItemHelper title={title} className={cn(Class.L, Class.Accent)} />
        <LabelItemHelper className={cn(Class.L, Class.Accent, Class.SignleIcon)} icon={<FlashIcon />} />

        <LabelItemHelper title={title} className={cn(Class.M, Class.Accent)} icon={<FlashIcon />} />
        <LabelItemHelper title={title} className={cn(Class.M, Class.Icon, Class.Reverse, Class.Accent)} icon={<FlashIcon />} />
        <LabelItemHelper title={title} className={cn(Class.M, Class.Accent)} />
        <LabelItemHelper className={cn(Class.M, Class.Accent, Class.SignleIcon)} icon={<FlashIcon />} />

        <LabelItemHelper title={title} className={cn(Class.S, Class.Accent)} icon={<FlashIcon />} />
        <LabelItemHelper title={title} className={cn(Class.S, Class.Icon, Class.Reverse, Class.Accent)} icon={<FlashIcon />} />
        <LabelItemHelper title={title} className={cn(Class.S, Class.Accent)} />
        <LabelItemHelper className={cn(Class.S, Class.Accent, Class.SignleIcon)} icon={<FlashIcon />} />

        <LabelItemHelper title={title} className={cn(Class.L, Class.Brand)} icon={<FlashIcon />} />
        <LabelItemHelper title={title} className={cn(Class.L, Class.Icon, Class.Reverse, Class.Brand)} icon={<FlashIcon />} />
        <LabelItemHelper title={title} className={cn(Class.L, Class.Brand)} />
        <LabelItemHelper className={cn(Class.L, Class.Brand, Class.SignleIcon)} icon={<FlashIcon />} />

        <LabelItemHelper title={title} className={cn(Class.M, Class.Brand)} icon={<FlashIcon />} />
        <LabelItemHelper title={title} className={cn(Class.M, Class.Icon, Class.Reverse, Class.Brand)} icon={<FlashIcon />} />
        <LabelItemHelper title={title} className={cn(Class.M, Class.Brand)} />
        <LabelItemHelper className={cn(Class.M, Class.Brand, Class.SignleIcon)} icon={<FlashIcon />} />

        <LabelItemHelper title={title} className={cn(Class.S, Class.Brand)} icon={<FlashIcon />} />
        <LabelItemHelper title={title} className={cn(Class.S, Class.Icon, Class.Reverse, Class.Brand)} icon={<FlashIcon />} />
        <LabelItemHelper title={title} className={cn(Class.S, Class.Brand)} />
        <LabelItemHelper className={cn(Class.S, Class.Brand, Class.SignleIcon)} icon={<FlashIcon />} />


        <LabelItemHelper title={title} className={cn(Class.L, Class.Positive)} icon={<FlashGreenIcon />} />
        <LabelItemHelper title={title} className={cn(Class.L, Class.Icon, Class.Reverse, Class.Positive)} icon={<FlashGreenIcon />} />
        <LabelItemHelper title={title} className={cn(Class.L, Class.Positive)} />
        <LabelItemHelper className={cn(Class.L, Class.Positive, Class.SignleIcon)} icon={<FlashGreenIcon />} />

        <LabelItemHelper title={title} className={cn(Class.M, Class.Positive)} icon={<FlashGreenIcon />} />
        <LabelItemHelper title={title} className={cn(Class.M, Class.Icon, Class.Reverse, Class.Positive)} icon={<FlashGreenIcon />} />
        <LabelItemHelper title={title} className={cn(Class.M, Class.Positive)} />
        <LabelItemHelper className={cn(Class.M, Class.Positive, Class.SignleIcon)} icon={<FlashGreenIcon />} />

        <LabelItemHelper title={title} className={cn(Class.S, Class.Positive)} icon={<FlashGreenIcon />} />
        <LabelItemHelper title={title} className={cn(Class.S, Class.Icon, Class.Reverse, Class.Positive)} icon={<FlashGreenIcon />} />
        <LabelItemHelper title={title} className={cn(Class.S, Class.Positive)} />
        <LabelItemHelper className={cn(Class.S, Class.Positive, Class.SignleIcon)} icon={<FlashGreenIcon />} />

        <LabelItemHelper title={title} className={cn(Class.L, Class.Negative)} icon={<FlashRedIcon />} />
        <LabelItemHelper title={title} className={cn(Class.L, Class.Icon, Class.Reverse, Class.Negative)} icon={<FlashRedIcon />} />
        <LabelItemHelper title={title} className={cn(Class.L, Class.Negative)} />
        <LabelItemHelper className={cn(Class.L, Class.Negative, Class.SignleIcon)} icon={<FlashRedIcon />} />

        <LabelItemHelper title={title} className={cn(Class.M, Class.Negative)} icon={<FlashRedIcon />} />
        <LabelItemHelper title={title} className={cn(Class.M, Class.Icon, Class.Reverse, Class.Negative)} icon={<FlashRedIcon />} />
        <LabelItemHelper title={title} className={cn(Class.M, Class.Negative)} />
        <LabelItemHelper className={cn(Class.M, Class.Negative, Class.SignleIcon)} icon={<FlashRedIcon />} />

        <LabelItemHelper title={title} className={cn(Class.S, Class.Negative)} icon={<FlashRedIcon />} />
        <LabelItemHelper title={title} className={cn(Class.S, Class.Icon, Class.Reverse, Class.Negative)} icon={<FlashRedIcon />} />
        <LabelItemHelper title={title} className={cn(Class.S, Class.Negative)} />
        <LabelItemHelper className={cn(Class.S, Class.Negative, Class.SignleIcon)} icon={<FlashRedIcon />} />

      </LabelStoryWrapper>
    );
  },
};
