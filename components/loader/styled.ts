import styled, { keyframes } from "styled-components";

const rotateAnimation = keyframes`
  from {
    -webkit-transform: rotate(0deg);
    -o-transform: rotate(0deg);
    transform: rotate(0deg);
  }
  to {
    -webkit-transform: rotate(360deg);
    -o-transform: rotate(360deg);
    transform: rotate(360deg);
  }
`;

export const LoaderWrapper = styled.div`
  margin: auto;
  img {
    filter: invert(var(--svg-invert));
    animation: ${rotateAnimation} 1.35s linear infinite;
  }
`;