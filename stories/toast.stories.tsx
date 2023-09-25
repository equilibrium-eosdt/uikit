import type { Meta, StoryObj } from "@storybook/react";
import React from "react";
import { FlashIcon, FlashRedIcon } from "../icons/flash";
import { ToastWrapper } from "../components/toast/styled";
import T from "../components/typography";
import styled from "styled-components";
import Thumbnail from "../components/thumbnail";
import LightPersonIcon from "../icons/person-light";

const icon = <LightPersonIcon />;

const Container = styled.div`
 display: flex;
 padding: 10px;
 flex-direction: column;
 gap: 20px;
 max-width:500px;
 margin: 0 auto;
 position: relative;
`;

const meta = {
  title: "Components/Toast",
  parameters: {
    layout: "fullscreen",
  },
} satisfies Meta;

export default meta;
type Story = StoryObj<typeof meta>;

const title = "Message.";

export const Common: Story = {
  render: () => {
    return (
      <Container>
        <ToastWrapper>
        <Thumbnail lg rectangle darkbg>{icon}</Thumbnail>
          <T body>{title}</T>
        </ToastWrapper>
      </Container>
    );
  },
};
