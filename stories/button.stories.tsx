import type { Meta, StoryObj } from "@storybook/react";
import React from "react";

import styled from "styled-components";
import IconPlus from "../icons/plus";
import { useThemeConfigStore, useSetTheme, setValue } from "../stores/theme";
import T from "../components/typography";
import ButtonComponent from "../components/button";

const Container = styled.div`
  position: relative;
  padding: 10px 20px 40px;
  display: grid;
  grid-template-columns: repeat(4, 1fr);
  gap: 30px 20px;
  & > * {
    position: relative;
    z-index: 4;
  }
`;

const meta = {
  title: "Components/Button/Primary",
  parameters: {
    layout: "fullscreen",
  },
} satisfies Meta;

export default meta;
type Story = StoryObj<typeof meta>;

export const PrimaryButton: Story = {
  render: () => {
    const theme = useThemeConfigStore();
    useSetTheme({ theme });

    return (
      <>
        <Container>
          <ButtonComponent
            lg
            icon={<IconPlus secondary style={{ width: 24, height: 24 }} />}
          >
            <T action>Action</T>
          </ButtonComponent>

          <ButtonComponent
            lg
            hovered
            icon={<IconPlus secondary style={{ width: 24, height: 24 }} />}
          >
            <T action>Action</T>
          </ButtonComponent>

          <ButtonComponent
            lg
            disabled
            icon={<IconPlus secondary style={{ width: 24, height: 24 }} />}
          >
            <T action>Action</T>
          </ButtonComponent>

          <ButtonComponent
            lg
            loading
            icon={<IconPlus secondary style={{ width: 24, height: 24 }} />}
          >
            <T action>Action</T>
          </ButtonComponent>

          <ButtonComponent lg>
            <T action>Action</T>
          </ButtonComponent>

          <ButtonComponent lg hovered>
            <T action>Action</T>
          </ButtonComponent>

          <ButtonComponent lg disabled>
            <T action>Action</T>
          </ButtonComponent>

          <ButtonComponent lg loading>
            <T action>Action</T>
          </ButtonComponent>

          <ButtonComponent
            md
            icon={<IconPlus secondary style={{ width: 24, height: 24 }} />}
          >
            <T action>Action</T>
          </ButtonComponent>

          <ButtonComponent
            md
            hovered
            icon={<IconPlus secondary style={{ width: 24, height: 24 }} />}
          >
            <T action>Action</T>
          </ButtonComponent>

          <ButtonComponent
            md
            disabled
            icon={<IconPlus secondary style={{ width: 24, height: 24 }} />}
          >
            <T action>Action</T>
          </ButtonComponent>

          <ButtonComponent
            md
            loading
            icon={<IconPlus secondary style={{ width: 24, height: 24 }} />}
          >
            <T action>Action</T>
          </ButtonComponent>

          <ButtonComponent md>
            <T action>Action</T>
          </ButtonComponent>

          <ButtonComponent md hovered>
            <T action>Action</T>
          </ButtonComponent>

          <ButtonComponent md disabled>
            <T action>Action</T>
          </ButtonComponent>

          <ButtonComponent md loading>
            <T action>Action</T>
          </ButtonComponent>

          <ButtonComponent
            sm
            icon={<IconPlus secondary style={{ width: 24, height: 24 }} />}
          >
            <T action>Action</T>
          </ButtonComponent>

          <ButtonComponent
            sm
            hovered
            icon={<IconPlus secondary style={{ width: 24, height: 24 }} />}
          >
            <T action>Action</T>
          </ButtonComponent>

          <ButtonComponent
            sm
            disabled
            icon={<IconPlus secondary style={{ width: 24, height: 24 }} />}
          >
            <T action>Action</T>
          </ButtonComponent>

          <ButtonComponent
            sm
            loading
            icon={<IconPlus secondary style={{ width: 24, height: 24 }} />}
          >
            <T action>Action</T>
          </ButtonComponent>

          <ButtonComponent sm>
            <T action>Action</T>
          </ButtonComponent>

          <ButtonComponent sm hovered>
            <T action>Action</T>
          </ButtonComponent>

          <ButtonComponent sm disabled>
            <T action>Action</T>
          </ButtonComponent>

          <ButtonComponent sm loading>
            <T action>Action</T>
          </ButtonComponent>
        </Container>

        <Container>
          <ButtonComponent
            lg
            fit
            icon={<IconPlus secondary style={{ width: 24, height: 24 }} />}
          >
            <T action>Action</T>
          </ButtonComponent>

          <ButtonComponent
            lg
            fit
            hovered
            icon={<IconPlus secondary style={{ width: 24, height: 24 }} />}
          >
            <T action>Action</T>
          </ButtonComponent>

          <ButtonComponent
            lg
            fit
            disabled
            icon={<IconPlus secondary style={{ width: 24, height: 24 }} />}
          >
            <T action>Action</T>
          </ButtonComponent>

          <ButtonComponent
            lg
            fit
            loading
            icon={<IconPlus secondary style={{ width: 24, height: 24 }} />}
          >
            <T action>Action</T>
          </ButtonComponent>

          <ButtonComponent lg fit>
            <T action>Action</T>
          </ButtonComponent>

          <ButtonComponent lg fit hovered>
            <T action>Action</T>
          </ButtonComponent>

          <ButtonComponent lg fit disabled>
            <T action>Action</T>
          </ButtonComponent>

          <ButtonComponent lg fit loading>
            <T action>Action</T>
          </ButtonComponent>

          <ButtonComponent
            md
            fit
            icon={<IconPlus secondary style={{ width: 24, height: 24 }} />}
          >
            <T action>Action</T>
          </ButtonComponent>

          <ButtonComponent
            md
            fit
            hovered
            icon={<IconPlus secondary style={{ width: 24, height: 24 }} />}
          >
            <T action>Action</T>
          </ButtonComponent>

          <ButtonComponent
            md
            fit
            disabled
            icon={<IconPlus secondary style={{ width: 24, height: 24 }} />}
          >
            <T action>Action</T>
          </ButtonComponent>

          <ButtonComponent
            md
            fit
            loading
            icon={<IconPlus secondary style={{ width: 24, height: 24 }} />}
          >
            <T action>Action</T>
          </ButtonComponent>

          <ButtonComponent md fit>
            <T action>Action</T>
          </ButtonComponent>

          <ButtonComponent md fit hovered>
            <T action>Action</T>
          </ButtonComponent>

          <ButtonComponent md fit disabled>
            <T action>Action</T>
          </ButtonComponent>

          <ButtonComponent md fit loading>
            <T action>Action</T>
          </ButtonComponent>

          <ButtonComponent
            sm
            fit
            icon={<IconPlus secondary style={{ width: 24, height: 24 }} />}
          >
            <T action>Action</T>
          </ButtonComponent>

          <ButtonComponent
            sm
            fit
            hovered
            icon={<IconPlus secondary style={{ width: 24, height: 24 }} />}
          >
            <T action>Action</T>
          </ButtonComponent>

          <ButtonComponent
            sm
            fit
            disabled
            icon={<IconPlus secondary style={{ width: 24, height: 24 }} />}
          >
            <T action>Action</T>
          </ButtonComponent>

          <ButtonComponent
            sm
            fit
            loading
            icon={<IconPlus secondary style={{ width: 24, height: 24 }} />}
          >
            <T action>Action</T>
          </ButtonComponent>

          <ButtonComponent sm fit>
            <T action>Action</T>
          </ButtonComponent>

          <ButtonComponent sm fit hovered>
            <T action>Action</T>
          </ButtonComponent>

          <ButtonComponent sm fit disabled>
            <T action>Action</T>
          </ButtonComponent>

          <ButtonComponent sm fit loading>
            <T action>Action</T>
          </ButtonComponent>
        </Container>
      </>
    );
  },
};

const metaSecondary = {
  title: "Components/Button/Secondary",
  parameters: {
    layout: "fullscreen",
  },
} satisfies Meta;

type StorySecondary = StoryObj<typeof metaSecondary>;

export const SecondaryButton: StorySecondary = {
  render: () => {
    const theme = useThemeConfigStore();
    useSetTheme({ theme });

    return (
      <>
        <Container>
          <ButtonComponent
            lg
            secondary
            icon={<IconPlus secondary style={{ width: 24, height: 24 }} />}
          >
            <T action>Action</T>
          </ButtonComponent>

          <ButtonComponent
            lg
            hovered
            secondary
            icon={<IconPlus secondary style={{ width: 24, height: 24 }} />}
          >
            <T action>Action</T>
          </ButtonComponent>

          <ButtonComponent
            lg
            disabled
            secondary
            icon={<IconPlus secondary style={{ width: 24, height: 24 }} />}
          >
            <T action>Action</T>
          </ButtonComponent>

          <ButtonComponent
            lg
            loading
            secondary
            icon={<IconPlus secondary style={{ width: 24, height: 24 }} />}
          >
            <T action>Action</T>
          </ButtonComponent>

          <ButtonComponent lg secondary>
            <T action>Action</T>
          </ButtonComponent>

          <ButtonComponent lg hovered secondary>
            <T action>Action</T>
          </ButtonComponent>

          <ButtonComponent lg disabled secondary>
            <T action>Action</T>
          </ButtonComponent>

          <ButtonComponent lg loading secondary>
            <T action>Action</T>
          </ButtonComponent>

          <ButtonComponent
            md
            secondary
            icon={<IconPlus secondary style={{ width: 24, height: 24 }} />}
          >
            <T action>Action</T>
          </ButtonComponent>

          <ButtonComponent
            md
            hovered
            secondary
            icon={<IconPlus secondary style={{ width: 24, height: 24 }} />}
          >
            <T action>Action</T>
          </ButtonComponent>

          <ButtonComponent
            md
            disabled
            secondary
            icon={<IconPlus secondary style={{ width: 24, height: 24 }} />}
          >
            <T action>Action</T>
          </ButtonComponent>

          <ButtonComponent
            md
            loading
            secondary
            icon={<IconPlus secondary style={{ width: 24, height: 24 }} />}
          >
            <T action>Action</T>
          </ButtonComponent>

          <ButtonComponent md secondary>
            <T action>Action</T>
          </ButtonComponent>

          <ButtonComponent md hovered secondary>
            <T action>Action</T>
          </ButtonComponent>

          <ButtonComponent md disabled secondary>
            <T action>Action</T>
          </ButtonComponent>

          <ButtonComponent md loading secondary>
            <T action>Action</T>
          </ButtonComponent>

          <ButtonComponent
            sm
            secondary
            icon={<IconPlus secondary style={{ width: 24, height: 24 }} />}
          >
            <T action>Action</T>
          </ButtonComponent>

          <ButtonComponent
            sm
            secondary
            hovered
            icon={<IconPlus secondary style={{ width: 24, height: 24 }} />}
          >
            <T action>Action</T>
          </ButtonComponent>

          <ButtonComponent
            sm
            secondary
            disabled
            icon={<IconPlus secondary style={{ width: 24, height: 24 }} />}
          >
            <T action>Action</T>
          </ButtonComponent>

          <ButtonComponent
            sm
            secondary
            loading
            icon={<IconPlus secondary style={{ width: 24, height: 24 }} />}
          >
            <T action>Action</T>
          </ButtonComponent>

          <ButtonComponent sm secondary>
            <T action>Action</T>
          </ButtonComponent>

          <ButtonComponent sm secondary hovered>
            <T action>Action</T>
          </ButtonComponent>

          <ButtonComponent sm secondary disabled>
            <T action>Action</T>
          </ButtonComponent>

          <ButtonComponent sm secondary loading>
            <T action>Action</T>
          </ButtonComponent>
        </Container>

        <Container>
          <ButtonComponent
            lg
            fit
            secondary
            icon={<IconPlus secondary style={{ width: 24, height: 24 }} />}
          >
            <T action>Action</T>
          </ButtonComponent>

          <ButtonComponent
            lg
            fit
            secondary
            hovered
            icon={<IconPlus secondary style={{ width: 24, height: 24 }} />}
          >
            <T action>Action</T>
          </ButtonComponent>

          <ButtonComponent
            lg
            fit
            secondary
            disabled
            icon={<IconPlus secondary style={{ width: 24, height: 24 }} />}
          >
            <T action>Action</T>
          </ButtonComponent>

          <ButtonComponent
            lg
            fit
            secondary
            loading
            icon={<IconPlus secondary style={{ width: 24, height: 24 }} />}
          >
            <T action>Action</T>
          </ButtonComponent>

          <ButtonComponent lg fit secondary>
            <T action>Action</T>
          </ButtonComponent>

          <ButtonComponent lg fit secondary hovered>
            <T action>Action</T>
          </ButtonComponent>

          <ButtonComponent lg fit secondary disabled>
            <T action>Action</T>
          </ButtonComponent>

          <ButtonComponent lg fit secondary loading>
            <T action>Action</T>
          </ButtonComponent>

          <ButtonComponent
            md
            fit
            secondary
            icon={<IconPlus secondary style={{ width: 24, height: 24 }} />}
          >
            <T action>Action</T>
          </ButtonComponent>

          <ButtonComponent
            md
            fit
            secondary
            hovered
            icon={<IconPlus secondary style={{ width: 24, height: 24 }} />}
          >
            <T action>Action</T>
          </ButtonComponent>

          <ButtonComponent
            md
            fit
            secondary
            disabled
            icon={<IconPlus secondary style={{ width: 24, height: 24 }} />}
          >
            <T action>Action</T>
          </ButtonComponent>

          <ButtonComponent
            md
            fit
            secondary
            loading
            icon={<IconPlus secondary style={{ width: 24, height: 24 }} />}
          >
            <T action>Action</T>
          </ButtonComponent>

          <ButtonComponent md fit secondary>
            <T action>Action</T>
          </ButtonComponent>

          <ButtonComponent md fit secondary hovered>
            <T action>Action</T>
          </ButtonComponent>

          <ButtonComponent md fit secondary disabled>
            <T action>Action</T>
          </ButtonComponent>

          <ButtonComponent md fit secondary loading>
            <T action>Action</T>
          </ButtonComponent>

          <ButtonComponent
            sm
            fit
            secondary
            icon={<IconPlus secondary style={{ width: 24, height: 24 }} />}
          >
            <T action>Action</T>
          </ButtonComponent>

          <ButtonComponent
            sm
            fit
            secondary
            hovered
            icon={<IconPlus secondary style={{ width: 24, height: 24 }} />}
          >
            <T action>Action</T>
          </ButtonComponent>

          <ButtonComponent
            sm
            fit
            secondary
            disabled
            icon={<IconPlus secondary style={{ width: 24, height: 24 }} />}
          >
            <T action>Action</T>
          </ButtonComponent>

          <ButtonComponent
            sm
            fit
            secondary
            loading
            icon={<IconPlus secondary style={{ width: 24, height: 24 }} />}
          >
            <T action>Action</T>
          </ButtonComponent>

          <ButtonComponent sm fit secondary>
            <T action>Action</T>
          </ButtonComponent>

          <ButtonComponent sm fit secondary hovered>
            <T action>Action</T>
          </ButtonComponent>

          <ButtonComponent sm fit secondary disabled>
            <T action>Action</T>
          </ButtonComponent>

          <ButtonComponent sm fit secondary loading>
            <T action>Action</T>
          </ButtonComponent>
        </Container>
      </>
    );
  },
};

const metaTertiary = {
  title: "Components/Button/Teriary",
  parameters: {
    layout: "fullscreen",
  },
} satisfies Meta;

type StoryTertiary = StoryObj<typeof metaTertiary>;

export const TertiaryButton: StoryTertiary = {
  render: () => {
    const theme = useThemeConfigStore();
    useSetTheme({ theme });

    return (
      <>
        <Container>
          <ButtonComponent
            lg
            tertiary
            icon={<IconPlus secondary style={{ width: 24, height: 24 }} />}
          >
            <T action>Action</T>
          </ButtonComponent>

          <ButtonComponent
            lg
            hovered
            tertiary
            icon={<IconPlus secondary style={{ width: 24, height: 24 }} />}
          >
            <T action>Action</T>
          </ButtonComponent>

          <ButtonComponent
            lg
            disabled
            tertiary
            icon={<IconPlus secondary style={{ width: 24, height: 24 }} />}
          >
            <T action>Action</T>
          </ButtonComponent>

          <ButtonComponent
            lg
            loading
            tertiary
            icon={<IconPlus secondary style={{ width: 24, height: 24 }} />}
          >
            <T action>Action</T>
          </ButtonComponent>

          <ButtonComponent lg tertiary>
            <T action>Action</T>
          </ButtonComponent>

          <ButtonComponent lg hovered tertiary>
            <T action>Action</T>
          </ButtonComponent>

          <ButtonComponent lg disabled tertiary>
            <T action>Action</T>
          </ButtonComponent>

          <ButtonComponent lg loading tertiary>
            <T action>Action</T>
          </ButtonComponent>

          <ButtonComponent
            md
            tertiary
            icon={<IconPlus secondary style={{ width: 24, height: 24 }} />}
          >
            <T action>Action</T>
          </ButtonComponent>

          <ButtonComponent
            md
            hovered
            tertiary
            icon={<IconPlus secondary style={{ width: 24, height: 24 }} />}
          >
            <T action>Action</T>
          </ButtonComponent>

          <ButtonComponent
            md
            disabled
            tertiary
            icon={<IconPlus secondary style={{ width: 24, height: 24 }} />}
          >
            <T action>Action</T>
          </ButtonComponent>

          <ButtonComponent
            md
            loading
            tertiary
            icon={<IconPlus secondary style={{ width: 24, height: 24 }} />}
          >
            <T action>Action</T>
          </ButtonComponent>

          <ButtonComponent md tertiary>
            <T action>Action</T>
          </ButtonComponent>

          <ButtonComponent md hovered tertiary>
            <T action>Action</T>
          </ButtonComponent>

          <ButtonComponent md disabled tertiary>
            <T action>Action</T>
          </ButtonComponent>

          <ButtonComponent md loading tertiary>
            <T action>Action</T>
          </ButtonComponent>

          <ButtonComponent
            sm
            tertiary
            icon={<IconPlus secondary style={{ width: 24, height: 24 }} />}
          >
            <T action>Action</T>
          </ButtonComponent>

          <ButtonComponent
            sm
            tertiary
            hovered
            icon={<IconPlus secondary style={{ width: 24, height: 24 }} />}
          >
            <T action>Action</T>
          </ButtonComponent>

          <ButtonComponent
            sm
            tertiary
            disabled
            icon={<IconPlus secondary style={{ width: 24, height: 24 }} />}
          >
            <T action>Action</T>
          </ButtonComponent>

          <ButtonComponent
            sm
            tertiary
            loading
            icon={<IconPlus secondary style={{ width: 24, height: 24 }} />}
          >
            <T action>Action</T>
          </ButtonComponent>

          <ButtonComponent sm tertiary>
            <T action>Action</T>
          </ButtonComponent>

          <ButtonComponent sm tertiary hovered>
            <T action>Action</T>
          </ButtonComponent>

          <ButtonComponent sm tertiary disabled>
            <T action>Action</T>
          </ButtonComponent>

          <ButtonComponent sm tertiary loading>
            <T action>Action</T>
          </ButtonComponent>
        </Container>

        <Container>
          <ButtonComponent
            lg
            fit
            tertiary
            icon={<IconPlus secondary style={{ width: 24, height: 24 }} />}
          >
            <T action>Action</T>
          </ButtonComponent>

          <ButtonComponent
            lg
            fit
            tertiary
            hovered
            icon={<IconPlus secondary style={{ width: 24, height: 24 }} />}
          >
            <T action>Action</T>
          </ButtonComponent>

          <ButtonComponent
            lg
            fit
            tertiary
            disabled
            icon={<IconPlus secondary style={{ width: 24, height: 24 }} />}
          >
            <T action>Action</T>
          </ButtonComponent>

          <ButtonComponent
            lg
            fit
            tertiary
            loading
            icon={<IconPlus secondary style={{ width: 24, height: 24 }} />}
          >
            <T action>Action</T>
          </ButtonComponent>

          <ButtonComponent lg fit tertiary>
            <T action>Action</T>
          </ButtonComponent>

          <ButtonComponent lg fit tertiary hovered>
            <T action>Action</T>
          </ButtonComponent>

          <ButtonComponent lg fit tertiary disabled>
            <T action>Action</T>
          </ButtonComponent>

          <ButtonComponent lg fit tertiary loading>
            <T action>Action</T>
          </ButtonComponent>

          <ButtonComponent
            md
            fit
            tertiary
            icon={<IconPlus secondary style={{ width: 24, height: 24 }} />}
          >
            <T action>Action</T>
          </ButtonComponent>

          <ButtonComponent
            md
            fit
            tertiary
            hovered
            icon={<IconPlus secondary style={{ width: 24, height: 24 }} />}
          >
            <T action>Action</T>
          </ButtonComponent>

          <ButtonComponent
            md
            fit
            tertiary
            disabled
            icon={<IconPlus secondary style={{ width: 24, height: 24 }} />}
          >
            <T action>Action</T>
          </ButtonComponent>

          <ButtonComponent
            md
            fit
            tertiary
            loading
            icon={<IconPlus secondary style={{ width: 24, height: 24 }} />}
          >
            <T action>Action</T>
          </ButtonComponent>

          <ButtonComponent md fit tertiary>
            <T action>Action</T>
          </ButtonComponent>

          <ButtonComponent md fit tertiary hovered>
            <T action>Action</T>
          </ButtonComponent>

          <ButtonComponent md fit tertiary disabled>
            <T action>Action</T>
          </ButtonComponent>

          <ButtonComponent md fit tertiary loading>
            <T action>Action</T>
          </ButtonComponent>

          <ButtonComponent
            sm
            fit
            tertiary
            icon={<IconPlus secondary style={{ width: 24, height: 24 }} />}
          >
            <T action>Action</T>
          </ButtonComponent>

          <ButtonComponent
            sm
            fit
            tertiary
            hovered
            icon={<IconPlus secondary style={{ width: 24, height: 24 }} />}
          >
            <T action>Action</T>
          </ButtonComponent>

          <ButtonComponent
            sm
            fit
            tertiary
            disabled
            icon={<IconPlus secondary style={{ width: 24, height: 24 }} />}
          >
            <T action>Action</T>
          </ButtonComponent>

          <ButtonComponent
            sm
            fit
            tertiary
            loading
            icon={<IconPlus secondary style={{ width: 24, height: 24 }} />}
          >
            <T action>Action</T>
          </ButtonComponent>

          <ButtonComponent sm fit tertiary>
            <T action>Action</T>
          </ButtonComponent>

          <ButtonComponent sm fit tertiary hovered>
            <T action>Action</T>
          </ButtonComponent>

          <ButtonComponent sm fit tertiary disabled>
            <T action>Action</T>
          </ButtonComponent>

          <ButtonComponent sm fit tertiary loading>
            <T action>Action</T>
          </ButtonComponent>
        </Container>
      </>
    );
  },
};

const metaElevated = {
  title: "Components/Button/Elevated",
  parameters: {
    layout: "fullscreen",
  },
} satisfies Meta;

type StoryElevated = StoryObj<typeof metaElevated>;

export const ElevatedButton: StoryElevated = {
  render: () => {
    const theme = useThemeConfigStore();
    useSetTheme({ theme });

    return (
      <>
        <Container>
          <ButtonComponent
            lg
            hovered
            elevated
            icon={<IconPlus secondary style={{ width: 24, height: 24 }} />}
          >
            <T action>Action</T>
          </ButtonComponent>

          <ButtonComponent
            lg
            hovered
            elevated
            icon={<IconPlus secondary style={{ width: 24, height: 24 }} />}
          >
            <T action>Action</T>
          </ButtonComponent>

          <ButtonComponent
            lg
            disabled
            elevated
            icon={<IconPlus secondary style={{ width: 24, height: 24 }} />}
          >
            <T action>Action</T>
          </ButtonComponent>

          <ButtonComponent
            lg
            loading
            elevated
            icon={<IconPlus secondary style={{ width: 24, height: 24 }} />}
          >
            <T action>Action</T>
          </ButtonComponent>

          <ButtonComponent lg elevated>
            <T action>Action</T>
          </ButtonComponent>

          <ButtonComponent lg hovered elevated>
            <T action>Action</T>
          </ButtonComponent>

          <ButtonComponent lg disabled elevated>
            <T action>Action</T>
          </ButtonComponent>

          <ButtonComponent lg loading elevated>
            <T action>Action</T>
          </ButtonComponent>

          <ButtonComponent
            md
            elevated
            icon={<IconPlus secondary style={{ width: 24, height: 24 }} />}
          >
            <T action>Action</T>
          </ButtonComponent>

          <ButtonComponent
            md
            hovered
            elevated
            icon={<IconPlus secondary style={{ width: 24, height: 24 }} />}
          >
            <T action>Action</T>
          </ButtonComponent>

          <ButtonComponent
            md
            disabled
            elevated
            icon={<IconPlus secondary style={{ width: 24, height: 24 }} />}
          >
            <T action>Action</T>
          </ButtonComponent>

          <ButtonComponent
            md
            loading
            elevated
            icon={<IconPlus secondary style={{ width: 24, height: 24 }} />}
          >
            <T action>Action</T>
          </ButtonComponent>

          <ButtonComponent md elevated>
            <T action>Action</T>
          </ButtonComponent>

          <ButtonComponent md hovered elevated>
            <T action>Action</T>
          </ButtonComponent>

          <ButtonComponent md disabled elevated>
            <T action>Action</T>
          </ButtonComponent>

          <ButtonComponent md loading elevated>
            <T action>Action</T>
          </ButtonComponent>

          <ButtonComponent
            sm
            elevated
            icon={<IconPlus secondary style={{ width: 24, height: 24 }} />}
          >
            <T action>Action</T>
          </ButtonComponent>

          <ButtonComponent
            sm
            elevated
            hovered
            icon={<IconPlus secondary style={{ width: 24, height: 24 }} />}
          >
            <T action>Action</T>
          </ButtonComponent>

          <ButtonComponent
            sm
            elevated
            disabled
            icon={<IconPlus secondary style={{ width: 24, height: 24 }} />}
          >
            <T action>Action</T>
          </ButtonComponent>

          <ButtonComponent
            sm
            elevated
            loading
            icon={<IconPlus secondary style={{ width: 24, height: 24 }} />}
          >
            <T action>Action</T>
          </ButtonComponent>

          <ButtonComponent sm elevated>
            <T action>Action</T>
          </ButtonComponent>

          <ButtonComponent sm elevated hovered>
            <T action>Action</T>
          </ButtonComponent>

          <ButtonComponent sm elevated disabled>
            <T action>Action</T>
          </ButtonComponent>

          <ButtonComponent sm elevated loading>
            <T action>Action</T>
          </ButtonComponent>
        </Container>

        <Container>
          <ButtonComponent
            lg
            fit
            elevated
            icon={<IconPlus secondary style={{ width: 24, height: 24 }} />}
          >
            <T action>Action</T>
          </ButtonComponent>

          <ButtonComponent
            lg
            fit
            elevated
            hovered
            icon={<IconPlus secondary style={{ width: 24, height: 24 }} />}
          >
            <T action>Action</T>
          </ButtonComponent>

          <ButtonComponent
            lg
            fit
            elevated
            disabled
            icon={<IconPlus secondary style={{ width: 24, height: 24 }} />}
          >
            <T action>Action</T>
          </ButtonComponent>

          <ButtonComponent
            lg
            fit
            elevated
            loading
            icon={<IconPlus secondary style={{ width: 24, height: 24 }} />}
          >
            <T action>Action</T>
          </ButtonComponent>

          <ButtonComponent lg fit elevated>
            <T action>Action</T>
          </ButtonComponent>

          <ButtonComponent lg fit elevated hovered>
            <T action>Action</T>
          </ButtonComponent>

          <ButtonComponent lg fit elevated disabled>
            <T action>Action</T>
          </ButtonComponent>

          <ButtonComponent lg fit elevated loading>
            <T action>Action</T>
          </ButtonComponent>

          <ButtonComponent
            md
            fit
            elevated
            icon={<IconPlus secondary style={{ width: 24, height: 24 }} />}
          >
            <T action>Action</T>
          </ButtonComponent>

          <ButtonComponent
            md
            fit
            elevated
            hovered
            icon={<IconPlus secondary style={{ width: 24, height: 24 }} />}
          >
            <T action>Action</T>
          </ButtonComponent>

          <ButtonComponent
            md
            fit
            elevated
            disabled
            icon={<IconPlus secondary style={{ width: 24, height: 24 }} />}
          >
            <T action>Action</T>
          </ButtonComponent>

          <ButtonComponent
            md
            fit
            elevated
            loading
            icon={<IconPlus secondary style={{ width: 24, height: 24 }} />}
          >
            <T action>Action</T>
          </ButtonComponent>

          <ButtonComponent md fit elevated>
            <T action>Action</T>
          </ButtonComponent>

          <ButtonComponent md fit elevated hovered>
            <T action>Action</T>
          </ButtonComponent>

          <ButtonComponent md fit elevated disabled>
            <T action>Action</T>
          </ButtonComponent>

          <ButtonComponent md fit elevated loading>
            <T action>Action</T>
          </ButtonComponent>

          <ButtonComponent
            sm
            fit
            elevated
            icon={<IconPlus secondary style={{ width: 24, height: 24 }} />}
          >
            <T action>Action</T>
          </ButtonComponent>

          <ButtonComponent
            sm
            fit
            elevated
            hovered
            icon={<IconPlus secondary style={{ width: 24, height: 24 }} />}
          >
            <T action>Action</T>
          </ButtonComponent>

          <ButtonComponent
            sm
            fit
            elevated
            disabled
            icon={<IconPlus secondary style={{ width: 24, height: 24 }} />}
          >
            <T action>Action</T>
          </ButtonComponent>

          <ButtonComponent
            sm
            fit
            elevated
            loading
            icon={<IconPlus secondary style={{ width: 24, height: 24 }} />}
          >
            <T action>Action</T>
          </ButtonComponent>

          <ButtonComponent sm fit elevated>
            <T action>Action</T>
          </ButtonComponent>

          <ButtonComponent sm fit elevated hovered>
            <T action>Action</T>
          </ButtonComponent>

          <ButtonComponent sm fit elevated disabled>
            <T action>Action</T>
          </ButtonComponent>

          <ButtonComponent sm fit elevated loading>
            <T action>Action</T>
          </ButtonComponent>
        </Container>
      </>
    );
  },
};

const metaIcon = {
  title: "Components/Button/Icon",
  parameters: {
    layout: "fullscreen",
  },
} satisfies Meta;

type StoryIcon = StoryObj<typeof metaIcon>;

export const IconButtton: StoryIcon = {
  render: () => {
    const theme = useThemeConfigStore();
    useSetTheme({ theme });

    return (
      <>
        <T headerM style={{ margin: "40px 20px 10px" }}>
          Primary
        </T>
        <Container>
          <ButtonComponent
            lg
            icon={<IconPlus secondary style={{ width: 24, height: 24 }} />}
          />

          <ButtonComponent
            lg
            hovered
            icon={<IconPlus secondary style={{ width: 24, height: 24 }} />}
          />

          <ButtonComponent
            lg
            disabled
            icon={<IconPlus secondary style={{ width: 24, height: 24 }} />}
          />

          <ButtonComponent
            lg
            loading
            icon={<IconPlus secondary style={{ width: 24, height: 24 }} />}
          />

          <ButtonComponent
            md
            icon={<IconPlus secondary style={{ width: 24, height: 24 }} />}
          />

          <ButtonComponent
            md
            hovered
            icon={<IconPlus secondary style={{ width: 24, height: 24 }} />}
          />

          <ButtonComponent
            md
            disabled
            icon={<IconPlus secondary style={{ width: 24, height: 24 }} />}
          />

          <ButtonComponent
            md
            loading
            icon={<IconPlus secondary style={{ width: 24, height: 24 }} />}
          />

          <ButtonComponent
            sm
            icon={<IconPlus secondary style={{ width: 24, height: 24 }} />}
          />

          <ButtonComponent
            sm
            icon={<IconPlus secondary style={{ width: 24, height: 24 }} />}
            hovered
          />

          <ButtonComponent
            sm
            icon={<IconPlus secondary style={{ width: 24, height: 24 }} />}
            disabled
          />

          <ButtonComponent
            sm
            icon={<IconPlus secondary style={{ width: 24, height: 24 }} />}
            loading
          />
        </Container>

        <T headerM style={{ margin: "40px 20px 10px" }}>
          Secondary
        </T>
        <Container>
          <ButtonComponent
            lg
            icon={<IconPlus secondary style={{ width: 24, height: 24 }} />}
            secondary
          />

          <ButtonComponent
            lg
            icon={<IconPlus secondary style={{ width: 24, height: 24 }} />}
            secondary
            hovered
          />

          <ButtonComponent
            lg
            icon={<IconPlus secondary style={{ width: 24, height: 24 }} />}
            secondary
            disabled
          />

          <ButtonComponent
            lg
            icon={<IconPlus secondary style={{ width: 24, height: 24 }} />}
            secondary
            loading
          />

          <ButtonComponent
            md
            icon={<IconPlus secondary style={{ width: 24, height: 24 }} />}
            secondary
          />

          <ButtonComponent
            md
            icon={<IconPlus secondary style={{ width: 24, height: 24 }} />}
            secondary
            hovered
          />

          <ButtonComponent
            md
            icon={<IconPlus secondary style={{ width: 24, height: 24 }} />}
            secondary
            disabled
          />

          <ButtonComponent
            md
            icon={<IconPlus secondary style={{ width: 24, height: 24 }} />}
            secondary
            loading
          />

          <ButtonComponent
            sm
            icon={<IconPlus secondary style={{ width: 24, height: 24 }} />}
            secondary
          />

          <ButtonComponent
            sm
            icon={<IconPlus secondary style={{ width: 24, height: 24 }} />}
            secondary
            hovered
          />

          <ButtonComponent
            sm
            icon={<IconPlus secondary style={{ width: 24, height: 24 }} />}
            secondary
            disabled
          />

          <ButtonComponent
            sm
            icon={<IconPlus secondary style={{ width: 24, height: 24 }} />}
            secondary
            loading
          />
        </Container>

        <T headerM style={{ margin: "40px 20px 10px" }}>
          Tertiary
        </T>
        <Container>
          <ButtonComponent
            lg
            icon={<IconPlus secondary style={{ width: 24, height: 24 }} />}
            tertiary
          />

          <ButtonComponent
            lg
            icon={<IconPlus secondary style={{ width: 24, height: 24 }} />}
            tertiary
            hovered
          />

          <ButtonComponent
            lg
            icon={<IconPlus secondary style={{ width: 24, height: 24 }} />}
            tertiary
            disabled
          />

          <ButtonComponent
            lg
            icon={<IconPlus secondary style={{ width: 24, height: 24 }} />}
            tertiary
            loading
          />

          <ButtonComponent
            md
            icon={<IconPlus secondary style={{ width: 24, height: 24 }} />}
            tertiary
          />

          <ButtonComponent
            md
            icon={<IconPlus secondary style={{ width: 24, height: 24 }} />}
            tertiary
            hovered
          />

          <ButtonComponent
            md
            icon={<IconPlus secondary style={{ width: 24, height: 24 }} />}
            tertiary
            disabled
          />

          <ButtonComponent
            md
            icon={<IconPlus secondary style={{ width: 24, height: 24 }} />}
            tertiary
            loading
          />

          <ButtonComponent
            sm
            icon={<IconPlus secondary style={{ width: 24, height: 24 }} />}
            tertiary
          />

          <ButtonComponent
            sm
            icon={<IconPlus secondary style={{ width: 24, height: 24 }} />}
            tertiary
            hovered
          />

          <ButtonComponent
            sm
            icon={<IconPlus secondary style={{ width: 24, height: 24 }} />}
            tertiary
            disabled
          />

          <ButtonComponent
            sm
            icon={<IconPlus secondary style={{ width: 24, height: 24 }} />}
            tertiary
            loading
          />
        </Container>

        <T headerM style={{ margin: "40px 20px 10px" }}>
          Elevated
        </T>
        <Container>
          <ButtonComponent
            lg
            icon={<IconPlus secondary style={{ width: 24, height: 24 }} />}
            elevated
          />

          <ButtonComponent
            lg
            icon={<IconPlus secondary style={{ width: 24, height: 24 }} />}
            elevated
            hovered
          />

          <ButtonComponent
            lg
            icon={<IconPlus secondary style={{ width: 24, height: 24 }} />}
            elevated
            disabled
          />

          <ButtonComponent
            lg
            icon={<IconPlus secondary style={{ width: 24, height: 24 }} />}
            elevated
            loading
          />

          <ButtonComponent
            md
            icon={<IconPlus secondary style={{ width: 24, height: 24 }} />}
            elevated
          />

          <ButtonComponent
            md
            icon={<IconPlus secondary style={{ width: 24, height: 24 }} />}
            elevated
            hovered
          />

          <ButtonComponent
            md
            icon={<IconPlus secondary style={{ width: 24, height: 24 }} />}
            elevated
            disabled
          />

          <ButtonComponent
            md
            icon={<IconPlus secondary style={{ width: 24, height: 24 }} />}
            elevated
            loading
          />

          <ButtonComponent
            sm
            icon={<IconPlus secondary style={{ width: 24, height: 24 }} />}
            elevated
          />

          <ButtonComponent
            sm
            icon={<IconPlus secondary style={{ width: 24, height: 24 }} />}
            elevated
            hovered
          />

          <ButtonComponent
            sm
            icon={<IconPlus secondary style={{ width: 24, height: 24 }} />}
            elevated
            disabled
          />

          <ButtonComponent
            sm
            icon={<IconPlus secondary style={{ width: 24, height: 24 }} />}
            elevated
            loading
          />
        </Container>
      </>
    );
  },
};

const metaText = {
  title: "Components/Button/Text",
  parameters: {
    layout: "fullscreen",
  },
} satisfies Meta;

type StoryText = StoryObj<typeof metaText>;

export const TextButtton: StoryText = {
  render: () => {
    const theme = useThemeConfigStore();
    useSetTheme({ theme });

    return (
      <>
        <Container>
          <ButtonComponent
            text
            icon={<IconPlus secondary style={{ width: 24, height: 24 }} />}
          >
            <T action>Action</T>
          </ButtonComponent>

          <ButtonComponent
            hovered
            text
            icon={<IconPlus secondary style={{ width: 24, height: 24 }} />}
          >
            <T action>Action</T>
          </ButtonComponent>

          <ButtonComponent
            disabled
            text
            icon={<IconPlus secondary style={{ width: 24, height: 24 }} />}
          >
            <T action>Action</T>
          </ButtonComponent>
        </Container>

        <Container>
          <ButtonComponent text>
            <T action>Action</T>
          </ButtonComponent>

          <ButtonComponent text hovered>
            <T action>Action</T>
          </ButtonComponent>

          <ButtonComponent text disabled>
            <T action>Action</T>
          </ButtonComponent>
        </Container>

        <Container>
          <ButtonComponent
            text
            icon={<IconPlus secondary style={{ width: 24, height: 24 }} />}
          />

          <ButtonComponent
            text
            hovered
            icon={<IconPlus secondary style={{ width: 24, height: 24 }} />}
          />

          <ButtonComponent
            text
            disabled
            icon={<IconPlus secondary style={{ width: 24, height: 24 }} />}
          />
        </Container>
      </>
    );
  },
};
