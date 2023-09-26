import type { Meta, StoryObj } from "@storybook/react";
import React from "react";
import { FlashIcon, FlashRedIcon } from "../icons/flash";
import Banner from "../components/banner/banner";
import T from "../components/typography";
import styled from "styled-components";

const Container = styled.div`
 display: flex;
 padding: 40px;
 flex-direction: column;
 gap: 20px;
 max-width: 440px;
 margin: 0 auto;
`;

const meta = {
  title: "Components/Banner",
  parameters: {
    layout: "fullscreen",
  },
} satisfies Meta;

export default meta;
type Story = StoryObj<typeof meta>;

const title = "Message";

export const Common: Story = {
  render: () => {
    return (
      <Container>
        <Banner sm>
          <FlashIcon />
          <T caption>{title}</T>
        </Banner>

        <Banner md>
          <FlashIcon />
          <T body>{title}</T>
        </Banner>

        <Banner lg>
          <FlashIcon />
          <T body>{title}</T>
        </Banner>

        <Banner accent sm>
          <FlashIcon />
          <T caption>{title}</T>
        </Banner>

        <Banner accent md>
          <FlashIcon />
          <T body>{title}</T>
        </Banner>

        <Banner accent lg>
          <FlashIcon />
          <T body>{title}</T>
        </Banner>

        <Banner alert sm>
          <FlashRedIcon />
          <T caption>{title}</T>
        </Banner>

        <Banner alert md>
          <FlashRedIcon />
          <T body>{title}</T>
        </Banner>

        <Banner alert lg>
          <FlashRedIcon />
          <T body>{title}</T>
        </Banner>
      </Container>
    );
  },
};
