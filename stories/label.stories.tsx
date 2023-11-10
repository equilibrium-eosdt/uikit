import type { Meta, StoryObj } from "@storybook/react";
import cn from "classnames";
import React from "react";
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
const rTitle = "Reverse";

export const Common: Story = {
  render: () => {
    return (
      <LabelStoryWrapper>
        <Label icon lg>
          <FlashIcon />
          {title}
        </Label>
        <Label lg icon reverse>
          <FlashIcon />
          {rTitle}
        </Label>
        <Label lg>{title}</Label>

        <Label lg singleicon>
          <FlashIcon />
        </Label>

        <Label md icon>
          <FlashIcon />
          {title}
        </Label>
        <Label icon md reverse>
          <FlashIcon />
          {rTitle}
        </Label>
        <Label md>{title}</Label>
        <Label singleicon md>
          <FlashIcon />
        </Label>

        <Label icon sm>
          <FlashIcon />
          <span>{title}</span>
        </Label>
        <Label sm icon reverse>
          <FlashIcon />
          <span>{title}</span>
        </Label>
        <Label sm><span>{title}</span></Label>
        <Label singleicon sm>
          <FlashIcon />
        </Label>

        <Label accent icon lg>
          <FlashIcon />
          {title}
        </Label>
        <Label icon lg accent reverse>
          <FlashIcon />
          {rTitle}
        </Label>
        <Label accent lg>
          {title}
        </Label>
        <Label accent lg singleicon>
          <FlashIcon />
        </Label>

        <Label accent md icon>
          <FlashIcon />
          {title}
        </Label>
        <Label accent icon md reverse>
          <FlashIcon />
          {rTitle}
        </Label>

        <Label accent md>
          {title}
        </Label>
        <Label accent md singleicon>
          <FlashIcon />
        </Label>

        <Label accent sm icon>
          <FlashIcon />
          <span>{title}</span>
        </Label>
        <Label accent icon reverse sm>
          <FlashIcon />
          <span>{title}</span>
        </Label>
        <Label accent sm>
        <span>{title}</span>
        </Label>
        <Label accent singleicon sm>
          <FlashIcon />
        </Label>

        <Label className={cn(Class.L, Class.Brand)} icon>
          <FlashIcon />
          {title}
        </Label>
        <Label className={cn(Class.L, Class.Icon, Class.Reverse, Class.Brand)} icon>
          <FlashIcon />
          {title}
        </Label>
        <Label className={cn(Class.L, Class.Brand)}>{title}</Label>
        <Label className={cn(Class.L, Class.Brand, Class.SignleIcon)}>
          <FlashIcon />
        </Label>

        <Label className={cn(Class.M, Class.Brand)} icon>
          <FlashIcon />
          {title}
        </Label>
        <Label className={cn(Class.M, Class.Icon, Class.Reverse, Class.Brand)} icon>
          <FlashIcon />
          {title}
        </Label>
        <Label className={cn(Class.M, Class.Brand)}>
          {title}
        </Label>
        <Label className={cn(Class.M, Class.Brand, Class.SignleIcon)}>
          <FlashIcon />
        </Label>


        <Label className={cn(Class.S, Class.Brand)} icon>
          <FlashIcon />
          <span>{title}</span>
        </Label>
        <Label className={cn(Class.S, Class.Icon, Class.Reverse, Class.Brand)} icon>
          <FlashIcon />
          <span>{title}</span>
        </Label>
        <Label className={cn(Class.S, Class.Brand)}>
        <span>{title}</span>
        </Label>
        <Label className={cn(Class.S, Class.Brand, Class.SignleIcon)}>
          <FlashIcon />
        </Label>

        <Label className={cn(Class.L, Class.Negative)} icon>
          <FlashRedIcon />
          {title}
        </Label>
        <Label className={cn(Class.L, Class.Icon, Class.Reverse, Class.Negative)} icon>
          <FlashRedIcon />
          {title}
        </Label>
        <Label className={cn(Class.L, Class.Negative)}>{title}</Label>
        <Label className={cn(Class.L, Class.Negative, Class.SignleIcon)}>
          <FlashRedIcon />
        </Label>

        <Label className={cn(Class.M, Class.Negative)} icon>
          <FlashRedIcon />
          {title}
        </Label>
        <Label className={cn(Class.M, Class.Icon, Class.Reverse, Class.Negative)} icon>
          <FlashRedIcon />
          {title}
        </Label>
        <Label className={cn(Class.M, Class.Negative)}>
          {title}
        </Label>
        <Label className={cn(Class.M, Class.Negative, Class.SignleIcon)}>
          <FlashRedIcon />
        </Label>


        <Label className={cn(Class.S, Class.Negative)} icon>
          <FlashRedIcon />
          <span>{title}</span>
        </Label>
        <Label className={cn(Class.S, Class.Icon, Class.Reverse, Class.Negative)} icon>
          <FlashRedIcon />
          <span>{title}</span>
        </Label>
        <Label className={cn(Class.S, Class.Negative)}>
        <span>{title}</span>
        </Label>
        <Label className={cn(Class.S, Class.Negative, Class.SignleIcon)}>
          <FlashRedIcon />
        </Label>

        <Label className={cn(Class.L, Class.Positive)} icon>
          <FlashGreenIcon />
          {title}
        </Label>
        <Label className={cn(Class.L, Class.Icon, Class.Reverse, Class.Positive)} icon>
          <FlashGreenIcon />
          {title}
        </Label>
        <Label className={cn(Class.L, Class.Positive)}>{title}</Label>
        <Label className={cn(Class.L, Class.Positive, Class.SignleIcon)}>
          <FlashGreenIcon />
        </Label>

        <Label className={cn(Class.M, Class.Positive)} icon>
          <FlashGreenIcon />
          {title}
        </Label>
        <Label className={cn(Class.M, Class.Icon, Class.Reverse, Class.Positive)} icon>
          <FlashGreenIcon />
          {title}
        </Label>
        <Label className={cn(Class.M, Class.Positive)}>
          {title}
        </Label>
        <Label className={cn(Class.M, Class.Positive, Class.SignleIcon)}>
          <FlashGreenIcon />
        </Label>

        <Label className={cn(Class.S, Class.Positive)} icon>
          <FlashGreenIcon />
          <span>{title}</span>
        </Label>
        <Label className={cn(Class.S, Class.Icon, Class.Reverse, Class.Positive)} icon>
          <FlashGreenIcon />
          <span>{title}</span>
        </Label>
        <Label className={cn(Class.S, Class.Positive)}>
        <span>{title}</span>
        </Label>
        <Label className={cn(Class.S, Class.Positive, Class.SignleIcon)}>
          <FlashGreenIcon />
        </Label>
        {/*} TODO wip
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
