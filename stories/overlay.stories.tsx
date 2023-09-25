import type { Meta, StoryObj } from "@storybook/react";
import React from "react";
import { Overlay } from "../components/overlay/styled";
import styled from "styled-components";

const Container = styled.div`
 position: relative;
 width: 100vw;
 height: 100vh;
 height: 100dvh;
`;

const meta = {
  title: "Components/Overlay",
  parameters: {
    layout: "fullscreen",
  },
} satisfies Meta;

export default meta;
type Story = StoryObj<typeof meta>;

export const Common: Story = {
  render: () => {
    return (
      <Container>
        <Overlay />
      </Container>
    );
  },
};
