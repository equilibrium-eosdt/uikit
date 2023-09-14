import type { Meta, StoryObj } from "@storybook/react";
import cn from "classnames";
import React, { ReactNode } from "react";
import * as Class from "../constants/classnames";
import { FlashIcon, FlashGreenIcon, FlashRedIcon } from "../icons/flash";
import Label from "../components/label";
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

export const Common: Story = {
  render: () => {
    return (
      <LabelStoryWrapper>
        <Label icon lg>
          {title}
          <FlashIcon />
        </Label>
        <Label lg icon reverse>
          <FlashIcon />
          {title}
        </Label>
        <Label lg>{title}</Label>

        <Label lg singleicon>
          <FlashIcon />
        </Label>

        <Label md icon>
          {title}
          <FlashIcon />
        </Label>
        <Label icon md reverse>
          <FlashIcon />
          {title}
        </Label>
        <Label md>{title}</Label>
        <Label singleicon md>
          <FlashIcon />
        </Label>

        <Label icon sm>
          {title}
          {<FlashIcon />}
        </Label>
        {/* WIP todo remake stories
        <Label
          className={cn(Class.S, Class.Icon, Class.Reverse)}
          icon={<FlashIcon />}
        >
          {title}
        </Label>
        <Label title={title} className={cn(Class.S)}></Label>
        <Label
          className={cn(Class.S, Class.SignleIcon)}
          icon={<FlashIcon />}
        ></Label>

        <Label className={cn(Class.L, Class.Accent)} icon={<FlashIcon />}>
          {title}
        </Label>
        <Label
          className={cn(Class.L, Class.Icon, Class.Reverse, Class.Accent)}
          icon={<FlashIcon />}
        >
          {title}
        </Label>
        <Label title={title} className={cn(Class.L, Class.Accent)}></Label>
        <Label
          className={cn(Class.L, Class.Accent, Class.SignleIcon)}
          icon={<FlashIcon />}
        ></Label>

        <Label className={cn(Class.M, Class.Accent)} icon={<FlashIcon />}>
          {title}
        </Label>
        <Label
          className={cn(Class.M, Class.Icon, Class.Reverse, Class.Accent)}
          icon={<FlashIcon />}
        >
          {title}
        </Label>
        <Label title={title} className={cn(Class.M, Class.Accent)}></Label>
        <Label
          className={cn(Class.M, Class.Accent, Class.SignleIcon)}
          icon={<FlashIcon />}
        ></Label>

        <Label className={cn(Class.S, Class.Accent)} icon={<FlashIcon />}>
          {title}
        </Label>
        <Label
          className={cn(Class.S, Class.Icon, Class.Reverse, Class.Accent)}
          icon={<FlashIcon />}
        >
          {title}
        </Label>
        <Label title={title} className={cn(Class.S, Class.Accent)}></Label>
        <Label
          className={cn(Class.S, Class.Accent, Class.SignleIcon)}
          icon={<FlashIcon />}
        ></Label>

        <Label className={cn(Class.L, Class.Brand)} icon={<FlashIcon />}>
          {title}
        </Label>
        <Label
          className={cn(Class.L, Class.Icon, Class.Reverse, Class.Brand)}
          icon={<FlashIcon />}
        >
          {title}
        </Label>
        <Label title={title} className={cn(Class.L, Class.Brand)}></Label>
        <Label
          className={cn(Class.L, Class.Brand, Class.SignleIcon)}
          icon={<FlashIcon />}
        ></Label>

        <Label className={cn(Class.M, Class.Brand)} icon={<FlashIcon />}>
          {title}
        </Label>
        <Label
          className={cn(Class.M, Class.Icon, Class.Reverse, Class.Brand)}
          icon={<FlashIcon />}
        >
          {title}
        </Label>
        <Label title={title} className={cn(Class.M, Class.Brand)}></Label>
        <Label
          className={cn(Class.M, Class.Brand, Class.SignleIcon)}
          icon={<FlashIcon />}
        ></Label>

        <Label className={cn(Class.S, Class.Brand)} icon={<FlashIcon />}>
          {title}
        </Label>
        <Label
          className={cn(Class.S, Class.Icon, Class.Reverse, Class.Brand)}
          icon={<FlashIcon />}
        >
          {title}
        </Label>
        <Label title={title} className={cn(Class.S, Class.Brand)}></Label>
        <Label
          className={cn(Class.S, Class.Brand, Class.SignleIcon)}
          icon={<FlashIcon />}
        ></Label>

        <Label
          className={cn(Class.L, Class.Positive)}
          icon={<FlashGreenIcon />}
        >
          {title}
        </Label>
        <Label
          className={cn(Class.L, Class.Icon, Class.Reverse, Class.Positive)}
          icon={<FlashGreenIcon />}
        >
          {title}
        </Label>
        <Label title={title} className={cn(Class.L, Class.Positive)} />
        <Label
          className={cn(Class.L, Class.Positive, Class.SignleIcon)}
          icon={<FlashGreenIcon />}
        ></Label>

        <Label
          title={title}
          className={cn(Class.M, Class.Positive)}
          icon={<FlashGreenIcon />}
        ></Label>
        <Label
          title={title}
          className={cn(Class.M, Class.Icon, Class.Reverse, Class.Positive)}
          icon={<FlashGreenIcon />}
        ></Label>
        <Label title={title} className={cn(Class.M, Class.Positive)}></Label>
        <Label
          className={cn(Class.M, Class.Positive, Class.SignleIcon)}
          icon={<FlashGreenIcon />}
        ></Label>

        <Label
          className={cn(Class.S, Class.Positive)}
          icon={<FlashGreenIcon />}
        >
          {title}
        </Label>
        <Label
          className={cn(Class.S, Class.Icon, Class.Reverse, Class.Positive)}
          icon={<FlashGreenIcon />}
        >
          {title}
        </Label>
        <Label title={title} className={cn(Class.S, Class.Positive)}></Label>
        <Label
          className={cn(Class.S, Class.Positive, Class.SignleIcon)}
          icon={<FlashGreenIcon />}
        ></Label>

        <Label className={cn(Class.L, Class.Negative)} icon={<FlashRedIcon />}>
          {title}
        </Label>
        <Label
          className={cn(Class.L, Class.Icon, Class.Reverse, Class.Negative)}
          icon={<FlashRedIcon />}
        >
          {title}
        </Label>
        <Label title={title} className={cn(Class.L, Class.Negative)} />
        <Label
          className={cn(Class.L, Class.Negative, Class.SignleIcon)}
          icon={<FlashRedIcon />}
        ></Label>

        <Label className={cn(Class.M, Class.Negative)} icon={<FlashRedIcon />}>
          {title}
        </Label>
        <Label
          className={cn(Class.M, Class.Icon, Class.Reverse, Class.Negative)}
          icon={<FlashRedIcon />}
        >
          {title}
        </Label>
        <Label title={title} className={cn(Class.M, Class.Negative)}></Label>
        <Label
          className={cn(Class.M, Class.Negative, Class.SignleIcon)}
          icon={<FlashRedIcon />}
        ></Label>

        <Label className={cn(Class.S, Class.Negative)} icon={<FlashRedIcon />}>
          {title}
        </Label>
        <Label
          className={cn(Class.S, Class.Icon, Class.Reverse, Class.Negative)}
          icon={<FlashRedIcon />}
        >
          {title}
        </Label>
        <Label title={title} className={cn(Class.S, Class.Negative)}></Label>
        <Label
          className={cn(Class.S, Class.Negative, Class.SignleIcon)}
          icon={<FlashRedIcon />}
    ></Label>*/}
      </LabelStoryWrapper>
    );
  },
};
