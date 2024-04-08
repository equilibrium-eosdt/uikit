import { styled } from "styled-components";

export const CardStoryWrapper = styled.div`
  display: grid;
  grid-template-columns: repeat(2, 1fr);
  flex-direction: column;
  gap: 32px 50px;
  padding: 60px 50px;
  max-width: 100%;
  margin: 0 auto;
`;

export const ThumbnailStoryWrapper = styled.div`
  display: grid;
  grid-template-columns: repeat(2, 1fr);
  gap: 30px 24px;
  padding: 40px 20px;
`;

export const ThumbnailGrid = styled.div`
  display: grid;
  grid-template-columns: repeat(3, 1fr);
  gap: 32px;
  padding: 40px 40px;
  margin: 0 auto;
`;
