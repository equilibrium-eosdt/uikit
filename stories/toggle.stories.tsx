import type { Meta, StoryObj } from "@storybook/react";
import React from "react";
import styled from "styled-components";
import Toggle from "../components/toggle/toggle";

const Container = styled.div`
 display: flex;
 padding: 40px;
 flex-direction: column;
 gap: 20px;
 max-width:500px;
`;

const meta = {
  title: "Components/Toggle",
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
        <Toggle />
        <Toggle on />
      </Container>
    );
  },
};
