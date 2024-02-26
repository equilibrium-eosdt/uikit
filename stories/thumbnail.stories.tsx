import type { Meta, StoryObj } from "@storybook/react";
import cn from "classnames";
import React, { ReactNode } from "react";
import * as Class from "../constants/classnames";
import LampIcon from "../icons/lamp";
import Pattern from "../icons/pattern";
import LightPersonIcon from "../icons/person-light";
import PersonPositiveIcon from "../icons/person-positive";
import PersonNegativeIcon from "../icons/person-negative";
import ArbIcon from "../icons/arb";
import {
  ThumbnailGrid,
  ThumbnailStoryWrapper,
} from "../components/helpers/card-story-wrapper";
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
const personPositiveIcon = <PersonPositiveIcon />;
const personNegativeIcon = <PersonNegativeIcon />;
const arbIcon = <ArbIcon />;
const pattern = <Pattern />;

interface ThumbnailProps {
  icon?: ReactNode;
  className?: string;
  notification?: string;
  notificationValue?: string;
  badge?: ReactNode;
}

function ThumbnailHelper(props: ThumbnailProps) {
  return <Thumbnail {...props}>{props?.icon}</Thumbnail>;
}

export const Common: Story = {
  render: () => {
    return (
      <ThumbnailGrid>
        {/* DEFAULT */}
        <ThumbnailStoryWrapper>
          <ThumbnailHelper className={cn(Class.XL)} icon={icon} />
          <ThumbnailHelper
            className={cn(Class.XL, Class.Rectangle)}
            icon={icon}
          />
          <ThumbnailHelper className={cn(Class.L)} icon={icon} />
          <ThumbnailHelper
            className={cn(Class.L, Class.Rectangle)}
            icon={icon}
          />
          <ThumbnailHelper className={cn(Class.M)} icon={icon} />
          <ThumbnailHelper
            className={cn(Class.M, Class.Rectangle)}
            icon={icon}
          />
          <ThumbnailHelper className={cn(Class.S)} icon={icon} />
          <ThumbnailHelper
            className={cn(Class.S, Class.Rectangle)}
            icon={icon}
          />
        </ThumbnailStoryWrapper>

        {/* NOTIFICATION */}
        <ThumbnailStoryWrapper>
          <ThumbnailHelper
            className={cn(Class.XL)}
            icon={icon}
            notificationValue="6"
          />
          <ThumbnailHelper
            className={cn(Class.XL, Class.Rectangle)}
            icon={icon}
            notificationValue="6"
          />
          <ThumbnailHelper
            className={cn(Class.L)}
            icon={icon}
            notificationValue="6"
          />
          <ThumbnailHelper
            className={cn(Class.L, Class.Rectangle)}
            icon={icon}
            notificationValue="6"
          />
          <ThumbnailHelper
            className={cn(Class.M)}
            icon={icon}
            notificationValue="6"
          />
          <ThumbnailHelper
            className={cn(Class.M, Class.Rectangle)}
            notificationValue="6"
            icon={icon}
          />
          <ThumbnailHelper
            className={cn(Class.S)}
            icon={icon}
            notificationValue="6"
          />
          <ThumbnailHelper
            className={cn(Class.S, Class.Rectangle)}
            notificationValue="6"
            icon={icon}
          />
        </ThumbnailStoryWrapper>

        {/* BADGE */}
        <ThumbnailStoryWrapper>
          <ThumbnailHelper
            className={cn(Class.XL)}
            icon={icon}
            badge={arbIcon}
          />
          <ThumbnailHelper
            className={cn(Class.XL, Class.Rectangle)}
            icon={icon}
            badge={arbIcon}
          />
          <ThumbnailHelper
            className={cn(Class.L)}
            icon={icon}
            badge={arbIcon}
          />
          <ThumbnailHelper
            className={cn(Class.L, Class.Rectangle)}
            icon={icon}
            badge={arbIcon}
          />
          <ThumbnailHelper
            className={cn(Class.M)}
            icon={icon}
            badge={arbIcon}
          />
          <ThumbnailHelper
            className={cn(Class.M, Class.Rectangle)}
            icon={icon}
            badge={arbIcon}
          />
          <ThumbnailHelper
            className={cn(Class.S)}
            icon={icon}
            badge={arbIcon}
          />
          <ThumbnailHelper
            className={cn(Class.S, Class.Rectangle)}
            icon={icon}
            badge={arbIcon}
          />
        </ThumbnailStoryWrapper>
      </ThumbnailGrid>
    );
  },
};

const metaNegative = {
  title: "Components/Thumbnail/Negative",
  parameters: {
    layout: "fullscreen",
  },
} satisfies Meta;

type StoryNegative = StoryObj<typeof metaNegative>;

export const Negative: StoryNegative = {
  render: () => {
    return (
      <ThumbnailGrid>
        <ThumbnailStoryWrapper>
          <ThumbnailHelper
            className={cn(Class.XL, Class.Negative)}
            icon={personNegativeIcon}
          />
          <ThumbnailHelper
            className={cn(Class.XL, Class.Rectangle, Class.Negative)}
            icon={personNegativeIcon}
          />
          <ThumbnailHelper
            className={cn(Class.L, Class.Negative)}
            icon={personNegativeIcon}
          />
          <ThumbnailHelper
            className={cn(Class.L, Class.Rectangle, Class.Negative)}
            icon={personNegativeIcon}
          />
          <ThumbnailHelper
            className={cn(Class.M, Class.Negative)}
            icon={personNegativeIcon}
          />
          <ThumbnailHelper
            className={cn(Class.M, Class.Rectangle, Class.Negative)}
            icon={personNegativeIcon}
          />
          <ThumbnailHelper
            className={cn(Class.S, Class.Negative)}
            icon={personNegativeIcon}
          />
          <ThumbnailHelper
            className={cn(Class.S, Class.Rectangle, Class.Negative)}
            icon={personNegativeIcon}
          />
        </ThumbnailStoryWrapper>

        <ThumbnailStoryWrapper>
          <ThumbnailHelper
            className={cn(Class.XL, Class.Negative)}
            notificationValue="6"
            icon={personNegativeIcon}
          />
          <ThumbnailHelper
            className={cn(Class.XL, Class.Rectangle, Class.Negative)}
            notificationValue="6"
            icon={personNegativeIcon}
          />
          <ThumbnailHelper
            className={cn(Class.L, Class.Negative)}
            icon={personNegativeIcon}
            notificationValue="6"
          />
          <ThumbnailHelper
            className={cn(Class.L, Class.Rectangle, Class.Negative)}
            notificationValue="6"
            icon={personNegativeIcon}
          />
          <ThumbnailHelper
            className={cn(Class.M, Class.Negative)}
            notificationValue="6"
            icon={personNegativeIcon}
          />
          <ThumbnailHelper
            className={cn(Class.M, Class.Rectangle, Class.Negative)}
            notificationValue="6"
            icon={personNegativeIcon}
          />
          <ThumbnailHelper
            className={cn(Class.S, Class.Negative)}
            notificationValue="6"
            icon={personNegativeIcon}
          />
          <ThumbnailHelper
            className={cn(Class.S, Class.Rectangle, Class.Negative)}
            notificationValue="6"
            icon={personNegativeIcon}
          />
        </ThumbnailStoryWrapper>

        <ThumbnailStoryWrapper>
          <ThumbnailHelper
            className={cn(Class.XL, Class.Negative)}
            icon={personNegativeIcon}
            badge={arbIcon}
          />
          <ThumbnailHelper
            className={cn(Class.XL, Class.Rectangle, Class.Negative)}
            icon={personNegativeIcon}
            badge={arbIcon}
          />
          <ThumbnailHelper
            className={cn(Class.L, Class.Negative)}
            icon={personNegativeIcon}
            badge={arbIcon}
          />
          <ThumbnailHelper
            className={cn(Class.L, Class.Rectangle, Class.Negative)}
            icon={personNegativeIcon}
            badge={arbIcon}
          />
          <ThumbnailHelper
            className={cn(Class.M, Class.Negative)}
            icon={personNegativeIcon}
            badge={arbIcon}
          />
          <ThumbnailHelper
            className={cn(Class.M, Class.Rectangle, Class.Negative)}
            icon={personNegativeIcon}
            badge={arbIcon}
          />
          <ThumbnailHelper
            className={cn(Class.S, Class.Negative)}
            icon={personNegativeIcon}
            badge={arbIcon}
          />
          <ThumbnailHelper
            className={cn(Class.S, Class.Rectangle, Class.Negative)}
            icon={personNegativeIcon}
            badge={arbIcon}
          />
        </ThumbnailStoryWrapper>
      </ThumbnailGrid>
    );
  },
};

const metaPositive = {
  title: "Components/Thumbnail/Positive",
  parameters: {
    layout: "fullscreen",
  },
} satisfies Meta;

type StoryPositive = StoryObj<typeof metaPositive>;

export const Positive: StoryPositive = {
  render: () => {
    return (
      <ThumbnailGrid>
        <ThumbnailStoryWrapper>
          <ThumbnailHelper
            className={cn(Class.XL, Class.Positive)}
            icon={personPositiveIcon}
          />
          <ThumbnailHelper
            className={cn(Class.XL, Class.Rectangle, Class.Positive)}
            icon={personPositiveIcon}
          />
          <ThumbnailHelper className={cn(Class.L)} icon={personPositiveIcon} />
          <ThumbnailHelper
            className={cn(Class.L, Class.Rectangle, Class.Positive)}
            icon={personPositiveIcon}
          />
          <ThumbnailHelper
            className={cn(Class.M, Class.Positive)}
            icon={personPositiveIcon}
          />
          <ThumbnailHelper
            className={cn(Class.M, Class.Rectangle, Class.Positive)}
            icon={personPositiveIcon}
          />
          <ThumbnailHelper
            className={cn(Class.S, Class.Positive)}
            icon={personPositiveIcon}
          />
          <ThumbnailHelper
            className={cn(Class.S, Class.Rectangle, Class.Positive)}
            icon={personPositiveIcon}
          />
        </ThumbnailStoryWrapper>

        <ThumbnailStoryWrapper>
          <ThumbnailHelper
            className={cn(Class.XL, Class.Positive)}
            notificationValue="6"
            icon={personPositiveIcon}
          />
          <ThumbnailHelper
            className={cn(Class.XL, Class.Rectangle, Class.Positive)}
            notificationValue="6"
            icon={personPositiveIcon}
          />
          <ThumbnailHelper
            className={cn(Class.L, Class.Positive)}
            icon={personPositiveIcon}
            notificationValue="6"
          />
          <ThumbnailHelper
            className={cn(Class.L, Class.Rectangle, Class.Positive)}
            notificationValue="6"
            icon={personPositiveIcon}
          />
          <ThumbnailHelper
            className={cn(Class.M, Class.Positive)}
            notificationValue="6"
            icon={personPositiveIcon}
          />
          <ThumbnailHelper
            className={cn(Class.M, Class.Rectangle, Class.Positive)}
            notificationValue="6"
            icon={personPositiveIcon}
          />
          <ThumbnailHelper
            className={cn(Class.S, Class.Positive)}
            notificationValue="6"
            icon={personPositiveIcon}
          />
          <ThumbnailHelper
            className={cn(Class.S, Class.Rectangle, Class.Positive)}
            notificationValue="6"
            icon={personPositiveIcon}
          />
        </ThumbnailStoryWrapper>

        <ThumbnailStoryWrapper>
          <ThumbnailHelper
            className={cn(Class.XL, Class.Positive)}
            icon={personPositiveIcon}
            badge={arbIcon}
          />
          <ThumbnailHelper
            className={cn(Class.XL, Class.Rectangle, Class.Positive)}
            icon={personPositiveIcon}
            badge={arbIcon}
          />
          <ThumbnailHelper
            className={cn(Class.L, Class.Positive)}
            icon={personPositiveIcon}
            badge={arbIcon}
          />
          <ThumbnailHelper
            className={cn(Class.L, Class.Rectangle, Class.Positive)}
            icon={personPositiveIcon}
            badge={arbIcon}
          />
          <ThumbnailHelper
            className={cn(Class.M, Class.Positive)}
            icon={personPositiveIcon}
            badge={arbIcon}
          />
          <ThumbnailHelper
            className={cn(Class.M, Class.Rectangle, Class.Positive)}
            icon={personPositiveIcon}
            badge={arbIcon}
          />
          <ThumbnailHelper
            className={cn(Class.S, Class.Positive)}
            icon={personPositiveIcon}
            badge={arbIcon}
          />
          <ThumbnailHelper
            className={cn(Class.S, Class.Rectangle, Class.Positive)}
            icon={personPositiveIcon}
            badge={arbIcon}
          />
        </ThumbnailStoryWrapper>
      </ThumbnailGrid>
    );
  },
};

const metaImage = {
  title: "Components/Thumbnail/Image",
  parameters: {
    layout: "fullscreen",
  },
} satisfies Meta;

type StoryImage = StoryObj<typeof metaImage>;

export const Image: StoryImage = {
  render: () => {
    return (
      <ThumbnailGrid>
        <ThumbnailStoryWrapper>
          <ThumbnailHelper
            className={cn(Class.XL, Class.Image)}
            icon={pattern}
          />
          <ThumbnailHelper
            className={cn(Class.XL, Class.Rectangle, Class.Image)}
            icon={pattern}
          />
          <ThumbnailHelper
            className={cn(Class.L, Class.Image)}
            icon={pattern}
          />
          <ThumbnailHelper
            className={cn(Class.L, Class.Rectangle, Class.Image)}
            icon={pattern}
          />
          <ThumbnailHelper
            className={cn(Class.M, Class.Image)}
            icon={pattern}
          />
          <ThumbnailHelper
            className={cn(Class.M, Class.Rectangle, Class.Image)}
            icon={pattern}
          />
          <ThumbnailHelper
            className={cn(Class.S, Class.Image)}
            icon={pattern}
          />
          <ThumbnailHelper
            className={cn(Class.S, Class.Rectangle, Class.Image)}
            icon={pattern}
          />
        </ThumbnailStoryWrapper>

        <ThumbnailStoryWrapper>
          <ThumbnailHelper
            className={cn(Class.XL, Class.Image)}
            notificationValue="6"
            icon={pattern}
          />
          <ThumbnailHelper
            className={cn(Class.XL, Class.Rectangle, Class.Image)}
            notificationValue="6"
            icon={pattern}
          />
          <ThumbnailHelper
            className={cn(Class.L, Class.Image)}
            notificationValue="6"
            icon={pattern}
          />
          <ThumbnailHelper
            className={cn(Class.L, Class.Rectangle, Class.Image)}
            notificationValue="6"
            icon={pattern}
          />
          <ThumbnailHelper
            className={cn(Class.M, Class.Image)}
            notificationValue="6"
            icon={pattern}
          />
          <ThumbnailHelper
            className={cn(Class.M, Class.Rectangle, Class.Image)}
            notificationValue="6"
            icon={pattern}
          />
          <ThumbnailHelper
            className={cn(Class.S, Class.Image)}
            notificationValue="6"
            icon={pattern}
          />
          <ThumbnailHelper
            className={cn(Class.S, Class.Rectangle, Class.Image)}
            notificationValue="6"
            icon={pattern}
          />
        </ThumbnailStoryWrapper>

        <ThumbnailStoryWrapper>
          <ThumbnailHelper
            className={cn(Class.XL, Class.Image)}
            icon={pattern}
            badge={arbIcon}
          />
          <ThumbnailHelper
            className={cn(Class.XL, Class.Rectangle, Class.Image)}
            icon={pattern}
            badge={arbIcon}
          />
          <ThumbnailHelper
            className={cn(Class.L, Class.Image)}
            icon={pattern}
            badge={arbIcon}
          />
          <ThumbnailHelper
            className={cn(Class.L, Class.Rectangle, Class.Image)}
            icon={pattern}
            badge={arbIcon}
          />
          <ThumbnailHelper
            className={cn(Class.M, Class.Image)}
            icon={pattern}
            badge={arbIcon}
          />
          <ThumbnailHelper
            className={cn(Class.M, Class.Rectangle, Class.Image)}
            icon={pattern}
            badge={arbIcon}
          />
          <ThumbnailHelper
            className={cn(Class.S, Class.Image)}
            icon={pattern}
            badge={arbIcon}
          />
          <ThumbnailHelper
            className={cn(Class.S, Class.Rectangle, Class.Image)}
            icon={pattern}
            badge={arbIcon}
          />
        </ThumbnailStoryWrapper>
      </ThumbnailGrid>
    );
  },
};

const metaAccent = {
  title: "Components/Thumbnail/Accent",
  parameters: {
    layout: "fullscreen",
  },
} satisfies Meta;

type StoryAccent = StoryObj<typeof metaAccent>;

export const Accent: StoryAccent = {
  render: () => {
    return (
      <ThumbnailGrid>
        <ThumbnailStoryWrapper>
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
        </ThumbnailStoryWrapper>

        <ThumbnailStoryWrapper>
          <ThumbnailHelper
            className={cn(Class.XL, Class.Accent)}
            icon={icon}
            notificationValue="6"
          />
          <ThumbnailHelper
            className={cn(Class.XL, Class.Rectangle, Class.Accent)}
            notificationValue="6"
            icon={icon}
          />
          <ThumbnailHelper
            className={cn(Class.L, Class.Accent)}
            icon={icon}
            notificationValue="6"
          />
          <ThumbnailHelper
            className={cn(Class.L, Class.Rectangle, Class.Accent)}
            notificationValue="6"
            icon={icon}
          />
          <ThumbnailHelper
            className={cn(Class.M, Class.Accent)}
            icon={icon}
            notificationValue="6"
          />
          <ThumbnailHelper
            className={cn(Class.M, Class.Rectangle, Class.Accent)}
            notificationValue="6"
            icon={icon}
          />
          <ThumbnailHelper
            className={cn(Class.S, Class.Accent)}
            icon={icon}
            notificationValue="6"
          />
          <ThumbnailHelper
            className={cn(Class.S, Class.Rectangle, Class.Accent)}
            notificationValue="6"
            icon={icon}
          />
        </ThumbnailStoryWrapper>

        <ThumbnailStoryWrapper>
          <ThumbnailHelper
            className={cn(Class.XL, Class.Accent)}
            icon={icon}
            badge={arbIcon}
          />
          <ThumbnailHelper
            className={cn(Class.XL, Class.Rectangle, Class.Accent)}
            icon={icon}
            badge={arbIcon}
          />
          <ThumbnailHelper
            className={cn(Class.L, Class.Accent)}
            icon={icon}
            badge={arbIcon}
          />
          <ThumbnailHelper
            className={cn(Class.L, Class.Rectangle, Class.Accent)}
            icon={icon}
            badge={arbIcon}
          />
          <ThumbnailHelper
            className={cn(Class.M, Class.Accent)}
            icon={icon}
            badge={arbIcon}
          />
          <ThumbnailHelper
            className={cn(Class.M, Class.Rectangle, Class.Accent)}
            icon={icon}
            badge={arbIcon}
          />
          <ThumbnailHelper
            className={cn(Class.S, Class.Accent)}
            icon={icon}
            badge={arbIcon}
          />
          <ThumbnailHelper
            className={cn(Class.S, Class.Rectangle, Class.Accent)}
            icon={icon}
            badge={arbIcon}
          />
        </ThumbnailStoryWrapper>
      </ThumbnailGrid>
    );
  },
};

const metaStatus = {
  title: "Components/Thumbnail/Status",
  parameters: {
    layout: "fullscreen",
  },
} satisfies Meta;

type StoryStatus = StoryObj<typeof metaStatus>;

export const Status: StoryStatus = {
  render: () => {
    return (
      <ThumbnailGrid>
        <ThumbnailStoryWrapper>
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
        </ThumbnailStoryWrapper>

        <ThumbnailStoryWrapper>
          <ThumbnailHelper
            className={cn(Class.XL, Class.Status)}
            icon={icon}
            notificationValue="6"
          />
          <ThumbnailHelper
            className={cn(Class.XL, Class.Rectangle, Class.Status)}
            notificationValue="6"
            icon={icon}
          />
          <ThumbnailHelper
            className={cn(Class.L, Class.Status)}
            icon={icon}
            notificationValue="6"
          />
          <ThumbnailHelper
            className={cn(Class.L, Class.Rectangle, Class.Status)}
            notificationValue="6"
            icon={icon}
          />
          <ThumbnailHelper
            className={cn(Class.M, Class.Status)}
            icon={icon}
            notificationValue="6"
          />
          <ThumbnailHelper
            className={cn(Class.M, Class.Rectangle, Class.Status)}
            notificationValue="6"
            icon={icon}
          />
          <ThumbnailHelper
            className={cn(Class.S, Class.Status)}
            icon={icon}
            notificationValue="6"
          />
          <ThumbnailHelper
            className={cn(Class.S, Class.Rectangle, Class.Status)}
            notificationValue="6"
            icon={icon}
          />
        </ThumbnailStoryWrapper>

        <ThumbnailStoryWrapper>
          <ThumbnailHelper
            className={cn(Class.XL, Class.Status)}
            icon={icon}
            badge={arbIcon}
          />
          <ThumbnailHelper
            className={cn(Class.XL, Class.Rectangle, Class.Status)}
            icon={icon}
            badge={arbIcon}
          />
          <ThumbnailHelper
            className={cn(Class.L, Class.Status)}
            icon={icon}
            badge={arbIcon}
          />
          <ThumbnailHelper
            className={cn(Class.L, Class.Rectangle, Class.Status)}
            icon={icon}
            badge={arbIcon}
          />
          <ThumbnailHelper
            className={cn(Class.M, Class.Status)}
            icon={icon}
            badge={arbIcon}
          />
          <ThumbnailHelper
            className={cn(Class.M, Class.Rectangle, Class.Status)}
            icon={icon}
            badge={arbIcon}
          />
          <ThumbnailHelper
            className={cn(Class.S, Class.Status)}
            icon={icon}
            badge={arbIcon}
          />
          <ThumbnailHelper
            className={cn(Class.S, Class.Rectangle, Class.Status)}
            icon={icon}
            badge={arbIcon}
          />
        </ThumbnailStoryWrapper>
      </ThumbnailGrid>
    );
  },
};

const metaDarkBg = {
  title: "Components/Thumbnail/DarkBg",
  parameters: {
    layout: "fullscreen",
  },
} satisfies Meta;

type StoryDarkBg = StoryObj<typeof metaDarkBg>;

export const DarkBg: StoryDarkBg = {
  render: () => {
    return (
      <ThumbnailGrid>
        <ThumbnailStoryWrapper>
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
        </ThumbnailStoryWrapper>

        <ThumbnailStoryWrapper>
          <ThumbnailHelper
            className={cn(Class.XL, Class.DarkBG)}
            notificationValue="6"
            icon={personIcon}
          />
          <ThumbnailHelper
            className={cn(Class.XL, Class.Rectangle, Class.DarkBG)}
            notificationValue="6"
            icon={personIcon}
          />
          <ThumbnailHelper
            className={cn(Class.L, Class.DarkBG)}
            notificationValue="6"
            icon={personIcon}
          />
          <ThumbnailHelper
            className={cn(Class.L, Class.Rectangle, Class.DarkBG)}
            notificationValue="6"
            icon={personIcon}
          />
          <ThumbnailHelper
            className={cn(Class.M, Class.DarkBG)}
            notificationValue="6"
            icon={personIcon}
          />
          <ThumbnailHelper
            className={cn(Class.M, Class.Rectangle, Class.DarkBG)}
            notificationValue="6"
            icon={personIcon}
          />
          <ThumbnailHelper
            className={cn(Class.S, Class.DarkBG)}
            notificationValue="6"
            icon={personIcon}
          />
          <ThumbnailHelper
            className={cn(Class.S, Class.Rectangle, Class.DarkBG)}
            notificationValue="6"
            icon={personIcon}
          />
        </ThumbnailStoryWrapper>

        <ThumbnailStoryWrapper>
          <ThumbnailHelper
            className={cn(Class.XL, Class.DarkBG)}
            icon={personIcon}
            badge={arbIcon}
          />
          <ThumbnailHelper
            className={cn(Class.XL, Class.Rectangle, Class.DarkBG)}
            icon={personIcon}
            badge={arbIcon}
          />
          <ThumbnailHelper
            className={cn(Class.L, Class.DarkBG)}
            icon={personIcon}
            badge={arbIcon}
          />
          <ThumbnailHelper
            className={cn(Class.L, Class.Rectangle, Class.DarkBG)}
            icon={personIcon}
            badge={arbIcon}
          />
          <ThumbnailHelper
            className={cn(Class.M, Class.DarkBG)}
            icon={personIcon}
            badge={arbIcon}
          />
          <ThumbnailHelper
            className={cn(Class.M, Class.Rectangle, Class.DarkBG)}
            icon={personIcon}
            badge={arbIcon}
          />
          <ThumbnailHelper
            className={cn(Class.S, Class.DarkBG)}
            icon={personIcon}
            badge={arbIcon}
          />
          <ThumbnailHelper
            className={cn(Class.S, Class.Rectangle, Class.DarkBG)}
            icon={personIcon}
            badge={arbIcon}
          />
        </ThumbnailStoryWrapper>
      </ThumbnailGrid>
    );
  },
};

const metaLightBg = {
  title: "Components/Thumbnail/LightBg",
  parameters: {
    layout: "fullscreen",
  },
} satisfies Meta;

type StoryLightBg = StoryObj<typeof metaLightBg>;

export const LightBg: StoryLightBg = {
  render: () => {
    return (
      <ThumbnailGrid>
        <ThumbnailStoryWrapper>
          <ThumbnailHelper
            className={cn(Class.XL, Class.LightBg)}
            icon={icon}
          />
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
        </ThumbnailStoryWrapper>

        <ThumbnailStoryWrapper>
          <ThumbnailHelper
            className={cn(Class.XL, Class.LightBg)}
            notificationValue="6"
            icon={icon}
          />
          <ThumbnailHelper
            className={cn(Class.XL, Class.Rectangle, Class.LightBg)}
            notificationValue="6"
            icon={icon}
          />
          <ThumbnailHelper
            className={cn(Class.L, Class.LightBg)}
            icon={icon}
            notificationValue="6"
          />
          <ThumbnailHelper
            className={cn(Class.L, Class.Rectangle, Class.LightBg)}
            notificationValue="6"
            icon={icon}
          />
          <ThumbnailHelper
            className={cn(Class.M, Class.LightBg)}
            icon={icon}
            notificationValue="6"
          />
          <ThumbnailHelper
            className={cn(Class.M, Class.Rectangle, Class.LightBg)}
            notificationValue="6"
            icon={icon}
          />
          <ThumbnailHelper
            className={cn(Class.S, Class.LightBg)}
            icon={icon}
            notificationValue="6"
          />
          <ThumbnailHelper
            className={cn(Class.S, Class.Rectangle, Class.LightBg)}
            notificationValue="6"
            icon={icon}
          />
        </ThumbnailStoryWrapper>

        <ThumbnailStoryWrapper>
          <ThumbnailHelper
            className={cn(Class.XL, Class.LightBg)}
            icon={icon}
            badge={arbIcon}
          />
          <ThumbnailHelper
            className={cn(Class.XL, Class.Rectangle, Class.LightBg)}
            icon={icon}
            badge={arbIcon}
          />
          <ThumbnailHelper
            className={cn(Class.L, Class.LightBg)}
            icon={icon}
            badge={arbIcon}
          />
          <ThumbnailHelper
            className={cn(Class.L, Class.Rectangle, Class.LightBg)}
            icon={icon}
            badge={arbIcon}
          />
          <ThumbnailHelper
            className={cn(Class.M, Class.LightBg)}
            icon={icon}
            badge={arbIcon}
          />
          <ThumbnailHelper
            className={cn(Class.M, Class.Rectangle, Class.LightBg)}
            icon={icon}
            badge={arbIcon}
          />
          <ThumbnailHelper
            className={cn(Class.S, Class.LightBg)}
            icon={icon}
            badge={arbIcon}
          />
          <ThumbnailHelper
            className={cn(Class.S, Class.Rectangle, Class.LightBg)}
            icon={icon}
            badge={arbIcon}
          />
        </ThumbnailStoryWrapper>
      </ThumbnailGrid>
    );
  },
};
