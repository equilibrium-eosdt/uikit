import type { Meta, StoryObj } from "@storybook/react";
import cn from "classnames";
import React, { CSSProperties, ReactNode } from "react";

import styled from "styled-components";
import { ButtonWrapper as Button } from "../components/button/styled";
import IconPlus from "../icons/plus";
import { useThemeConfigStore, useSetTheme, setValue } from "../stores/theme";
import type { ComposeProps } from "../types/util";
import { constStrArray, extractProps } from "../util/type";
import {
    L,
    M,
    S,
    Hovered,
    Loading,
    Disabled,
    Pending,
    Secondary,
    Tertiary,
    WidthFit,
    Elevated,
    Icon,
    Text
} from "../constants/classnames";
import T from "../components/typography";

const Container = styled.div`
  position: relative;
  padding: 10px 20px 40px;
  display: grid;
  grid-template-columns: repeat(4, 1fr);
  gap: 30px 20px;
`;

const meta = {
    title: "Components/Button/Primary",
    parameters: {
        layout: "fullscreen",
    },
} satisfies Meta;

export default meta;
type Story = StoryObj<typeof meta>;


const classes = constStrArray(
    L,
    M,
    S,
    Hovered,
    Loading,
    Disabled,
    Pending,
    Secondary,
    WidthFit,
    Tertiary,
    Elevated,
    Icon,
    Text
);

interface ButtonProps extends Partial<ComposeProps<typeof classes, boolean>> {
    className?: string;
    style?: CSSProperties;
    children?: ReactNode;
}

function ButtonComponent(props: ButtonProps) {
    return (
        <Button className={cn(props.className, extractProps(props, ...classes))} style={props.style}>
            {props.children}
        </Button>
    );
}

export const PrimaryButton: Story = {
    render: () => {
        const theme = useThemeConfigStore();
        useSetTheme({ theme });

        return (
            <>
                <Container>
                    <ButtonComponent lg>
                        <IconPlus secondary style={{ width: 24, height: 24 }} />
                        <T action>Action</T>
                    </ButtonComponent>


                    <ButtonComponent lg hovered>
                        <IconPlus secondary style={{ width: 24, height: 24 }} />
                        <T action>Action</T>
                    </ButtonComponent>

                    <ButtonComponent lg disabled>
                        <IconPlus secondary style={{ width: 24, height: 24 }} />
                        <T action>Action</T>
                    </ButtonComponent>


                    <ButtonComponent lg loading>
                        <IconPlus secondary style={{ width: 24, height: 24 }} />
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


                    <ButtonComponent md>
                        <IconPlus secondary style={{ width: 24, height: 24 }} />
                        <T action>Action</T>
                    </ButtonComponent>


                    <ButtonComponent md hovered>
                        <IconPlus secondary style={{ width: 24, height: 24 }} />
                        <T action>Action</T>
                    </ButtonComponent>

                    <ButtonComponent md disabled>
                        <IconPlus secondary style={{ width: 24, height: 24 }} />
                        <T action>Action</T>
                    </ButtonComponent>


                    <ButtonComponent md loading>
                        <IconPlus secondary style={{ width: 24, height: 24 }} />
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


                    <ButtonComponent sm>
                        <IconPlus secondary style={{ width: 24, height: 24 }} />
                        <T action>Action</T>
                    </ButtonComponent>


                    <ButtonComponent sm hovered>
                        <IconPlus secondary style={{ width: 24, height: 24 }} />
                        <T action>Action</T>
                    </ButtonComponent>

                    <ButtonComponent sm disabled>
                        <IconPlus secondary style={{ width: 24, height: 24 }} />
                        <T action>Action</T>
                    </ButtonComponent>


                    <ButtonComponent sm loading>
                        <IconPlus secondary style={{ width: 24, height: 24 }} />
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
                    <ButtonComponent lg fit>
                        <IconPlus secondary style={{ width: 24, height: 24 }} />
                        <T action>Action</T>
                    </ButtonComponent>


                    <ButtonComponent lg fit hovered>
                        <IconPlus secondary style={{ width: 24, height: 24 }} />
                        <T action>Action</T>
                    </ButtonComponent>

                    <ButtonComponent lg fit disabled>
                        <IconPlus secondary style={{ width: 24, height: 24 }} />
                        <T action>Action</T>
                    </ButtonComponent>


                    <ButtonComponent lg fit loading>
                        <IconPlus secondary style={{ width: 24, height: 24 }} />
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


                    <ButtonComponent md fit>
                        <IconPlus secondary style={{ width: 24, height: 24 }} />
                        <T action>Action</T>
                    </ButtonComponent>


                    <ButtonComponent md fit hovered>
                        <IconPlus secondary style={{ width: 24, height: 24 }} />
                        <T action>Action</T>
                    </ButtonComponent>

                    <ButtonComponent md fit disabled>
                        <IconPlus secondary style={{ width: 24, height: 24 }} />
                        <T action>Action</T>
                    </ButtonComponent>


                    <ButtonComponent md fit loading>
                        <IconPlus secondary style={{ width: 24, height: 24 }} />
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


                    <ButtonComponent sm fit>
                        <IconPlus secondary style={{ width: 24, height: 24 }} />
                        <T action>Action</T>
                    </ButtonComponent>

                    <ButtonComponent sm fit hovered>
                        <IconPlus secondary style={{ width: 24, height: 24 }} />
                        <T action>Action</T>
                    </ButtonComponent>

                    <ButtonComponent sm fit disabled>
                        <IconPlus secondary style={{ width: 24, height: 24 }} />
                        <T action>Action</T>
                    </ButtonComponent>


                    <ButtonComponent sm fit loading>
                        <IconPlus secondary style={{ width: 24, height: 24 }} />
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

                    <ButtonComponent lg fit pending>
                        <T action>Action</T>
                    </ButtonComponent>

                    <ButtonComponent md fit pending>
                        <T action>Action</T>
                    </ButtonComponent>

                    <ButtonComponent sm fit pending>
                        Main
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
                    <ButtonComponent lg secondary>
                        <IconPlus secondary style={{ width: 24, height: 24 }} />
                        <T action>Action</T>
                    </ButtonComponent>


                    <ButtonComponent lg hovered secondary>
                        <IconPlus secondary style={{ width: 24, height: 24 }} />
                        <T action>Action</T>
                    </ButtonComponent>

                    <ButtonComponent lg disabled secondary>
                        <IconPlus secondary style={{ width: 24, height: 24 }} />
                        <T action>Action</T>
                    </ButtonComponent>


                    <ButtonComponent lg loading secondary>
                        <IconPlus secondary style={{ width: 24, height: 24 }} />
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


                    <ButtonComponent md secondary>
                        <IconPlus secondary style={{ width: 24, height: 24 }} />
                        <T action>Action</T>
                    </ButtonComponent>


                    <ButtonComponent md hovered secondary>
                        <IconPlus secondary style={{ width: 24, height: 24 }} />
                        <T action>Action</T>
                    </ButtonComponent>

                    <ButtonComponent md disabled secondary>
                        <IconPlus secondary style={{ width: 24, height: 24 }} />
                        <T action>Action</T>
                    </ButtonComponent>


                    <ButtonComponent md loading secondary>
                        <IconPlus secondary style={{ width: 24, height: 24 }} />
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


                    <ButtonComponent sm secondary>
                        <IconPlus secondary style={{ width: 24, height: 24 }} />
                        <T action>Action</T>
                    </ButtonComponent>


                    <ButtonComponent sm secondary hovered>
                        <IconPlus secondary style={{ width: 24, height: 24 }} />
                        <T action>Action</T>
                    </ButtonComponent>

                    <ButtonComponent sm secondary disabled>
                        <IconPlus secondary style={{ width: 24, height: 24 }} />
                        <T action>Action</T>
                    </ButtonComponent>


                    <ButtonComponent sm secondary loading>
                        <IconPlus secondary style={{ width: 24, height: 24 }} />
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
                    <ButtonComponent lg fit secondary>
                        <IconPlus secondary style={{ width: 24, height: 24 }} />
                        <T action>Action</T>
                    </ButtonComponent>


                    <ButtonComponent lg fit secondary hovered>
                        <IconPlus secondary style={{ width: 24, height: 24 }} />
                        <T action>Action</T>
                    </ButtonComponent>

                    <ButtonComponent lg fit secondary disabled>
                        <IconPlus secondary style={{ width: 24, height: 24 }} />
                        <T action>Action</T>
                    </ButtonComponent>


                    <ButtonComponent lg fit secondary loading>
                        <IconPlus secondary style={{ width: 24, height: 24 }} />
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


                    <ButtonComponent md fit secondary>
                        <IconPlus secondary style={{ width: 24, height: 24 }} />
                        <T action>Action</T>
                    </ButtonComponent>


                    <ButtonComponent md fit secondary hovered>
                        <IconPlus secondary style={{ width: 24, height: 24 }} />
                        <T action>Action</T>
                    </ButtonComponent>

                    <ButtonComponent md fit secondary disabled>
                        <IconPlus secondary style={{ width: 24, height: 24 }} />
                        <T action>Action</T>
                    </ButtonComponent>


                    <ButtonComponent md fit secondary loading>
                        <IconPlus secondary style={{ width: 24, height: 24 }} />
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


                    <ButtonComponent sm fit secondary>
                        <IconPlus secondary style={{ width: 24, height: 24 }} />
                        <T action>Action</T>
                    </ButtonComponent>

                    <ButtonComponent sm fit secondary hovered>
                        <IconPlus secondary style={{ width: 24, height: 24 }} />
                        <T action>Action</T>
                    </ButtonComponent>

                    <ButtonComponent sm fit secondary disabled>
                        <IconPlus secondary style={{ width: 24, height: 24 }} />
                        <T action>Action</T>
                    </ButtonComponent>


                    <ButtonComponent sm fit secondary loading>
                        <IconPlus secondary style={{ width: 24, height: 24 }} />
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

                    <ButtonComponent lg fit secondary pending>
                        <T action>Action</T>
                    </ButtonComponent>

                    <ButtonComponent md fit secondary pending>
                        <T action>Action</T>
                    </ButtonComponent>

                    <ButtonComponent sm fit secondary pending>
                        Main
                    </ButtonComponent>
                </Container>
            </>
        );
    },
};


const metaTertiary = {
    title: "Components/Button/Secondary",
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
                    <ButtonComponent lg tertiary>
                        <IconPlus secondary style={{ width: 24, height: 24 }} />
                        <T action>Action</T>
                    </ButtonComponent>


                    <ButtonComponent lg hovered tertiary>
                        <IconPlus secondary style={{ width: 24, height: 24 }} />
                        <T action>Action</T>
                    </ButtonComponent>

                    <ButtonComponent lg disabled tertiary>
                        <IconPlus secondary style={{ width: 24, height: 24 }} />
                        <T action>Action</T>
                    </ButtonComponent>


                    <ButtonComponent lg loading tertiary>
                        <IconPlus secondary style={{ width: 24, height: 24 }} />
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


                    <ButtonComponent md tertiary>
                        <IconPlus secondary style={{ width: 24, height: 24 }} />
                        <T action>Action</T>
                    </ButtonComponent>


                    <ButtonComponent md hovered tertiary>
                        <IconPlus secondary style={{ width: 24, height: 24 }} />
                        <T action>Action</T>
                    </ButtonComponent>

                    <ButtonComponent md disabled tertiary>
                        <IconPlus secondary style={{ width: 24, height: 24 }} />
                        <T action>Action</T>
                    </ButtonComponent>


                    <ButtonComponent md loading tertiary>
                        <IconPlus secondary style={{ width: 24, height: 24 }} />
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


                    <ButtonComponent sm tertiary>
                        <IconPlus secondary style={{ width: 24, height: 24 }} />
                        <T action>Action</T>
                    </ButtonComponent>


                    <ButtonComponent sm tertiary hovered>
                        <IconPlus secondary style={{ width: 24, height: 24 }} />
                        <T action>Action</T>
                    </ButtonComponent>

                    <ButtonComponent sm tertiary disabled>
                        <IconPlus secondary style={{ width: 24, height: 24 }} />
                        <T action>Action</T>
                    </ButtonComponent>


                    <ButtonComponent sm tertiary loading>
                        <IconPlus secondary style={{ width: 24, height: 24 }} />
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
                    <ButtonComponent lg fit tertiary>
                        <IconPlus secondary style={{ width: 24, height: 24 }} />
                        <T action>Action</T>
                    </ButtonComponent>


                    <ButtonComponent lg fit tertiary hovered>
                        <IconPlus secondary style={{ width: 24, height: 24 }} />
                        <T action>Action</T>
                    </ButtonComponent>

                    <ButtonComponent lg fit tertiary disabled>
                        <IconPlus secondary style={{ width: 24, height: 24 }} />
                        <T action>Action</T>
                    </ButtonComponent>


                    <ButtonComponent lg fit tertiary loading>
                        <IconPlus secondary style={{ width: 24, height: 24 }} />
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


                    <ButtonComponent md fit tertiary>
                        <IconPlus secondary style={{ width: 24, height: 24 }} />
                        <T action>Action</T>
                    </ButtonComponent>


                    <ButtonComponent md fit tertiary hovered>
                        <IconPlus secondary style={{ width: 24, height: 24 }} />
                        <T action>Action</T>
                    </ButtonComponent>

                    <ButtonComponent md fit tertiary disabled>
                        <IconPlus secondary style={{ width: 24, height: 24 }} />
                        <T action>Action</T>
                    </ButtonComponent>


                    <ButtonComponent md fit tertiary loading>
                        <IconPlus secondary style={{ width: 24, height: 24 }} />
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


                    <ButtonComponent sm fit tertiary>
                        <IconPlus secondary style={{ width: 24, height: 24 }} />
                        <T action>Action</T>
                    </ButtonComponent>

                    <ButtonComponent sm fit tertiary hovered>
                        <IconPlus secondary style={{ width: 24, height: 24 }} />
                        <T action>Action</T>
                    </ButtonComponent>

                    <ButtonComponent sm fit tertiary disabled>
                        <IconPlus secondary style={{ width: 24, height: 24 }} />
                        <T action>Action</T>
                    </ButtonComponent>


                    <ButtonComponent sm fit tertiary loading>
                        <IconPlus secondary style={{ width: 24, height: 24 }} />
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
                    <ButtonComponent lg elevated>
                        <IconPlus secondary style={{ width: 24, height: 24 }} />
                        <T action>Action</T>
                    </ButtonComponent>


                    <ButtonComponent lg hovered elevated>
                        <IconPlus secondary style={{ width: 24, height: 24 }} />
                        <T action>Action</T>
                    </ButtonComponent>

                    <ButtonComponent lg disabled elevated>
                        <IconPlus secondary style={{ width: 24, height: 24 }} />
                        <T action>Action</T>
                    </ButtonComponent>


                    <ButtonComponent lg loading elevated>
                        <IconPlus secondary style={{ width: 24, height: 24 }} />
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


                    <ButtonComponent md elevated>
                        <IconPlus secondary style={{ width: 24, height: 24 }} />
                        <T action>Action</T>
                    </ButtonComponent>


                    <ButtonComponent md hovered elevated>
                        <IconPlus secondary style={{ width: 24, height: 24 }} />
                        <T action>Action</T>
                    </ButtonComponent>

                    <ButtonComponent md disabled elevated>
                        <IconPlus secondary style={{ width: 24, height: 24 }} />
                        <T action>Action</T>
                    </ButtonComponent>


                    <ButtonComponent md loading elevated>
                        <IconPlus secondary style={{ width: 24, height: 24 }} />
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


                    <ButtonComponent sm elevated>
                        <IconPlus secondary style={{ width: 24, height: 24 }} />
                        <T action>Action</T>
                    </ButtonComponent>


                    <ButtonComponent sm elevated hovered>
                        <IconPlus secondary style={{ width: 24, height: 24 }} />
                        <T action>Action</T>
                    </ButtonComponent>

                    <ButtonComponent sm elevated disabled>
                        <IconPlus secondary style={{ width: 24, height: 24 }} />
                        <T action>Action</T>
                    </ButtonComponent>


                    <ButtonComponent sm elevated loading>
                        <IconPlus secondary style={{ width: 24, height: 24 }} />
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
                    <ButtonComponent lg fit elevated>
                        <IconPlus secondary style={{ width: 24, height: 24 }} />
                        <T action>Action</T>
                    </ButtonComponent>


                    <ButtonComponent lg fit elevated hovered>
                        <IconPlus secondary style={{ width: 24, height: 24 }} />
                        <T action>Action</T>
                    </ButtonComponent>

                    <ButtonComponent lg fit elevated disabled>
                        <IconPlus secondary style={{ width: 24, height: 24 }} />
                        <T action>Action</T>
                    </ButtonComponent>


                    <ButtonComponent lg fit elevated loading>
                        <IconPlus secondary style={{ width: 24, height: 24 }} />
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


                    <ButtonComponent md fit elevated>
                        <IconPlus secondary style={{ width: 24, height: 24 }} />
                        <T action>Action</T>
                    </ButtonComponent>


                    <ButtonComponent md fit elevated hovered>
                        <IconPlus secondary style={{ width: 24, height: 24 }} />
                        <T action>Action</T>
                    </ButtonComponent>

                    <ButtonComponent md fit elevated disabled>
                        <IconPlus secondary style={{ width: 24, height: 24 }} />
                        <T action>Action</T>
                    </ButtonComponent>


                    <ButtonComponent md fit elevated loading>
                        <IconPlus secondary style={{ width: 24, height: 24 }} />
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


                    <ButtonComponent sm fit elevated>
                        <IconPlus secondary style={{ width: 24, height: 24 }} />
                        <T action>Action</T>
                    </ButtonComponent>

                    <ButtonComponent sm fit elevated hovered>
                        <IconPlus secondary style={{ width: 24, height: 24 }} />
                        <T action>Action</T>
                    </ButtonComponent>

                    <ButtonComponent sm fit elevated disabled>
                        <IconPlus secondary style={{ width: 24, height: 24 }} />
                        <T action>Action</T>
                    </ButtonComponent>


                    <ButtonComponent sm fit elevated loading>
                        <IconPlus secondary style={{ width: 24, height: 24 }} />
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
                <T headerM style={{margin: "40px 20px 10px"}}>Primary</T>
                <Container>
                    <ButtonComponent lg icon>
                        <IconPlus secondary style={{ width: 24, height: 24 }} />
                    </ButtonComponent>


                    <ButtonComponent lg hovered icon>
                        <IconPlus secondary style={{ width: 24, height: 24 }} />
                    </ButtonComponent>

                    <ButtonComponent lg disabled icon>
                        <IconPlus secondary style={{ width: 24, height: 24 }} />
                    </ButtonComponent>


                    <ButtonComponent lg loading icon>
                        <IconPlus secondary style={{ width: 24, height: 24 }} />
                    </ButtonComponent>

                    <ButtonComponent md icon>
                        <IconPlus secondary style={{ width: 24, height: 24 }} />
                    </ButtonComponent>


                    <ButtonComponent md hovered icon>
                        <IconPlus secondary style={{ width: 24, height: 24 }} />
                    </ButtonComponent>

                    <ButtonComponent md disabled icon>
                        <IconPlus secondary style={{ width: 24, height: 24 }} />
                    </ButtonComponent>


                    <ButtonComponent md loading icon>
                        <IconPlus secondary style={{ width: 24, height: 24 }} />
                    </ButtonComponent>


                    <ButtonComponent sm icon>
                        <IconPlus secondary style={{ width: 24, height: 24 }} />
                    </ButtonComponent>


                    <ButtonComponent sm icon hovered>
                        <IconPlus secondary style={{ width: 24, height: 24 }} />
                    </ButtonComponent>

                    <ButtonComponent sm icon disabled>
                        <IconPlus secondary style={{ width: 24, height: 24 }} />
                    </ButtonComponent>


                    <ButtonComponent sm icon loading>
                        <IconPlus secondary style={{ width: 24, height: 24 }} />
                    </ButtonComponent>

                </Container>

                <T headerM style={{margin: "40px 20px 10px"}}>Secondary</T>
                <Container>
                    <ButtonComponent lg icon secondary>
                        <IconPlus secondary style={{ width: 24, height: 24 }} />
                    </ButtonComponent>


                    <ButtonComponent lg icon secondary hovered>
                        <IconPlus secondary style={{ width: 24, height: 24 }} />
                    </ButtonComponent>

                    <ButtonComponent lg icon secondary disabled>
                        <IconPlus secondary style={{ width: 24, height: 24 }} />
                    </ButtonComponent>


                    <ButtonComponent lg icon secondary loading>
                        <IconPlus secondary style={{ width: 24, height: 24 }} />
                    </ButtonComponent>

                    <ButtonComponent md icon secondary>
                        <IconPlus secondary style={{ width: 24, height: 24 }} />
                    </ButtonComponent>


                    <ButtonComponent md icon secondary hovered>
                        <IconPlus secondary style={{ width: 24, height: 24 }} />
                    </ButtonComponent>

                    <ButtonComponent md icon secondary disabled>
                        <IconPlus secondary style={{ width: 24, height: 24 }} />
                    </ButtonComponent>


                    <ButtonComponent md icon secondary loading>
                        <IconPlus secondary style={{ width: 24, height: 24 }} />
                    </ButtonComponent>

                    <ButtonComponent sm icon secondary>
                        <IconPlus secondary style={{ width: 24, height: 24 }} />
                    </ButtonComponent>

                    <ButtonComponent sm icon secondary hovered>
                        <IconPlus secondary style={{ width: 24, height: 24 }} />
                    </ButtonComponent>

                    <ButtonComponent sm icon secondary disabled>
                        <IconPlus secondary style={{ width: 24, height: 24 }} />
                    </ButtonComponent>

                    <ButtonComponent sm icon secondary loading>
                        <IconPlus secondary style={{ width: 24, height: 24 }} />
                    </ButtonComponent>

                </Container>

                <T headerM style={{margin: "40px 20px 10px"}}>Tertiary</T>
                <Container>
                    <ButtonComponent lg icon tertiary>
                        <IconPlus secondary style={{ width: 24, height: 24 }} />
                    </ButtonComponent>


                    <ButtonComponent lg icon tertiary hovered>
                        <IconPlus secondary style={{ width: 24, height: 24 }} />
                    </ButtonComponent>

                    <ButtonComponent lg icon tertiary disabled>
                        <IconPlus secondary style={{ width: 24, height: 24 }} />
                    </ButtonComponent>


                    <ButtonComponent lg icon tertiary loading>
                        <IconPlus secondary style={{ width: 24, height: 24 }} />
                    </ButtonComponent>

                    <ButtonComponent md icon tertiary>
                        <IconPlus secondary style={{ width: 24, height: 24 }} />
                    </ButtonComponent>


                    <ButtonComponent md icon tertiary hovered>
                        <IconPlus secondary style={{ width: 24, height: 24 }} />
                    </ButtonComponent>

                    <ButtonComponent md icon tertiary disabled>
                        <IconPlus secondary style={{ width: 24, height: 24 }} />
                    </ButtonComponent>


                    <ButtonComponent md icon tertiary loading>
                        <IconPlus secondary style={{ width: 24, height: 24 }} />
                    </ButtonComponent>

                    <ButtonComponent sm icon tertiary>
                        <IconPlus secondary style={{ width: 24, height: 24 }} />
                    </ButtonComponent>

                    <ButtonComponent sm icon tertiary hovered>
                        <IconPlus secondary style={{ width: 24, height: 24 }} />
                    </ButtonComponent>

                    <ButtonComponent sm icon tertiary disabled>
                        <IconPlus secondary style={{ width: 24, height: 24 }} />
                    </ButtonComponent>

                    <ButtonComponent sm icon tertiary loading>
                        <IconPlus secondary style={{ width: 24, height: 24 }} />
                    </ButtonComponent>

                </Container>

                <T headerM style={{margin: "40px 20px 10px"}}>Elevated</T>
                <Container>
                    <ButtonComponent lg icon elevated>
                        <IconPlus secondary style={{ width: 24, height: 24 }} />
                    </ButtonComponent>


                    <ButtonComponent lg icon elevated hovered>
                        <IconPlus secondary style={{ width: 24, height: 24 }} />
                    </ButtonComponent>

                    <ButtonComponent lg icon elevated disabled>
                        <IconPlus secondary style={{ width: 24, height: 24 }} />
                    </ButtonComponent>


                    <ButtonComponent lg icon elevated loading>
                        <IconPlus secondary style={{ width: 24, height: 24 }} />
                    </ButtonComponent>

                    <ButtonComponent md icon elevated>
                        <IconPlus secondary style={{ width: 24, height: 24 }} />
                    </ButtonComponent>


                    <ButtonComponent md icon elevated hovered>
                        <IconPlus secondary style={{ width: 24, height: 24 }} />
                    </ButtonComponent>

                    <ButtonComponent md icon elevated disabled>
                        <IconPlus secondary style={{ width: 24, height: 24 }} />
                    </ButtonComponent>


                    <ButtonComponent md icon elevated loading>
                        <IconPlus secondary style={{ width: 24, height: 24 }} />
                    </ButtonComponent>

                    <ButtonComponent sm icon elevated>
                        <IconPlus secondary style={{ width: 24, height: 24 }} />
                    </ButtonComponent>

                    <ButtonComponent sm icon elevated hovered>
                        <IconPlus secondary style={{ width: 24, height: 24 }} />
                    </ButtonComponent>

                    <ButtonComponent sm icon elevated disabled>
                        <IconPlus secondary style={{ width: 24, height: 24 }} />
                    </ButtonComponent>

                    <ButtonComponent sm icon elevated loading>
                        <IconPlus secondary style={{ width: 24, height: 24 }} />
                    </ButtonComponent>

                </Container>
            </>
        );
    },
};

const metaText = {
    title: "Components/Button/Icon",
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
                    <ButtonComponent text>
                        <IconPlus secondary style={{ width: 24, height: 24 }} />
                        <T action>Action</T>

                    </ButtonComponent>


                    <ButtonComponent hovered text>
                        <IconPlus secondary style={{ width: 24, height: 24 }} />
                        <T action>Action</T>

                    </ButtonComponent>

                    <ButtonComponent disabled text>
                        <IconPlus secondary style={{ width: 24, height: 24 }} />
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
                    <ButtonComponent text>
                        <IconPlus secondary style={{ width: 24, height: 24 }} />
                    </ButtonComponent>

                    <ButtonComponent text hovered>
                        <IconPlus secondary style={{ width: 24, height: 24 }} />
                    </ButtonComponent>

                    <ButtonComponent text disabled>
                        <IconPlus secondary style={{ width: 24, height: 24 }} />
                    </ButtonComponent>
                </Container>

           
            </>
        );
    },
};
