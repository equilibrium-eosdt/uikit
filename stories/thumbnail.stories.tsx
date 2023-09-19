import type { Meta, StoryObj } from "@storybook/react";
import cn from "classnames";
import React, { ReactNode } from "react";
import * as Class from "../constants/classnames";
import LampIcon from "../icons/lamp";
import Pattern from "../icons/pattern";
import LightPersonIcon from "../icons/person-light";
import { CardStoryWrapper } from "../components/helpers/card-story-wrapper";
import Thumbnail from "../components/thumbnail";

const meta = {
  title: "Components/Thumbnail",
  parameters: {
    layout: "fullscreen",
  },
} satisfies Meta;

export default meta;
type Story = StoryObj<typeof meta>;

const icon = <LampIcon />;
const personIcon = <LightPersonIcon />;
const pattern = <Pattern />;

interface LabelProps {
  icon?: ReactNode;
  className?: string;
}

function ThumbnailHelper(props: LabelProps) {
  return (
    <Thumbnail {...props}>
        {props?.icon}
    </Thumbnail>
  );
}

export const Common: Story = {
  render: () => {
    return (
      <CardStoryWrapper>
        <ThumbnailHelper className={cn(Class.XL)} icon={icon} />
        <ThumbnailHelper
          className={cn(Class.XL, Class.Rectangle)}
          icon={icon}
        />
        <ThumbnailHelper className={cn(Class.L)} icon={icon} />
        <ThumbnailHelper className={cn(Class.L, Class.Rectangle)} icon={icon} />
        <ThumbnailHelper className={cn(Class.M)} icon={icon} />
        <ThumbnailHelper className={cn(Class.M, Class.Rectangle)} icon={icon} />
        <ThumbnailHelper className={cn(Class.S)} icon={icon} />
        <ThumbnailHelper className={cn(Class.S, Class.Rectangle)} icon={icon} />

        <ThumbnailHelper
          className={cn(Class.XL, Class.DarkBG)}
          icon={personIcon}
        />
        <ThumbnailHelper
          className={cn(Class.XL, Class.Rectangle, Class.DarkBG)}
          icon={personIcon}
        />
        <ThumbnailHelper
          className={cn(Class.L, Class.DarkBG)}
          icon={personIcon}
        />
        <ThumbnailHelper
          className={cn(Class.L, Class.Rectangle, Class.DarkBG)}
          icon={personIcon}
        />
        <ThumbnailHelper
          className={cn(Class.M, Class.DarkBG)}
          icon={personIcon}
        />
        <ThumbnailHelper
          className={cn(Class.M, Class.Rectangle, Class.DarkBG)}
          icon={personIcon}
        />
        <ThumbnailHelper
          className={cn(Class.S, Class.DarkBG)}
          icon={personIcon}
        />
        <ThumbnailHelper
          className={cn(Class.S, Class.Rectangle, Class.DarkBG)}
          icon={personIcon}
        />

        <ThumbnailHelper className={cn(Class.XL, Class.LightBg)} icon={icon} />
        <ThumbnailHelper
          className={cn(Class.XL, Class.Rectangle, Class.LightBg)}
          icon={icon}
        />
        <ThumbnailHelper className={cn(Class.L, Class.LightBg)} icon={icon} />
        <ThumbnailHelper
          className={cn(Class.L, Class.Rectangle, Class.LightBg)}
          icon={icon}
        />
        <ThumbnailHelper className={cn(Class.M, Class.LightBg)} icon={icon} />
        <ThumbnailHelper
          className={cn(Class.M, Class.Rectangle, Class.LightBg)}
          icon={icon}
        />
        <ThumbnailHelper className={cn(Class.S, Class.LightBg)} icon={icon} />
        <ThumbnailHelper
          className={cn(Class.S, Class.Rectangle, Class.LightBg)}
          icon={icon}
        />

        <ThumbnailHelper className={cn(Class.XL, Class.Status)} icon={icon} />
        <ThumbnailHelper
          className={cn(Class.XL, Class.Rectangle, Class.Status)}
          icon={icon}
        />
        <ThumbnailHelper className={cn(Class.L, Class.Status)} icon={icon} />
        <ThumbnailHelper
          className={cn(Class.L, Class.Rectangle, Class.Status)}
          icon={icon}
        />
        <ThumbnailHelper className={cn(Class.M, Class.Status)} icon={icon} />
        <ThumbnailHelper
          className={cn(Class.M, Class.Rectangle, Class.Status)}
          icon={icon}
        />
        <ThumbnailHelper className={cn(Class.S, Class.Status)} icon={icon} />
        <ThumbnailHelper
          className={cn(Class.S, Class.Rectangle, Class.Status)}
          icon={icon}
        />

        <ThumbnailHelper className={cn(Class.XL, Class.Accent)} icon={icon} />
        <ThumbnailHelper
          className={cn(Class.XL, Class.Rectangle, Class.Accent)}
          icon={icon}
        />
        <ThumbnailHelper className={cn(Class.L, Class.Accent)} icon={icon} />
        <ThumbnailHelper
          className={cn(Class.L, Class.Rectangle, Class.Accent)}
          icon={icon}
        />
        <ThumbnailHelper className={cn(Class.M, Class.Accent)} icon={icon} />
        <ThumbnailHelper
          className={cn(Class.M, Class.Rectangle, Class.Accent)}
          icon={icon}
        />
        <ThumbnailHelper className={cn(Class.S, Class.Accent)} icon={icon} />
        <ThumbnailHelper
          className={cn(Class.S, Class.Rectangle, Class.Accent)}
          icon={icon}
        />

        <ThumbnailHelper className={cn(Class.XL, Class.Image)} icon={pattern} />
        <ThumbnailHelper
          className={cn(Class.XL, Class.Rectangle, Class.Image)}
          icon={pattern}
        />
        <ThumbnailHelper className={cn(Class.L, Class.Image)} icon={pattern} />
        <ThumbnailHelper
          className={cn(Class.L, Class.Rectangle, Class.Image)}
          icon={pattern}
        />
        <ThumbnailHelper className={cn(Class.M, Class.Image)} icon={pattern} />
        <ThumbnailHelper
          className={cn(Class.M, Class.Rectangle, Class.Image)}
          icon={pattern}
        />
        <ThumbnailHelper className={cn(Class.S, Class.Image)} icon={pattern} />
        <ThumbnailHelper
          className={cn(Class.S, Class.Rectangle, Class.Image)}
          icon={pattern}
        />
      </CardStoryWrapper>
    );
  },
};
