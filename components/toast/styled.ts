import styled  from "styled-components";
import { cssVar } from "../../util/style";

export const ToastWrapper = styled.div`
  display: flex;
  justify-content: flex-start;
  align-items: center;
  background: ${cssVar("--fill-primary")};
  color: ${cssVar("--text-invert-primary")};
  gap: 16px;
  padding: ${cssVar("--spacing-space-16")} ${cssVar("--spacing-space-24")} ${cssVar("--spacing-space-16")} ${cssVar("--spacing-space-16")} ;
  width: 358px;
  max-width: 358px;
  margin: 0 auto;
  border-radius: ${cssVar("--rounding-radius-xl")};
  position: absolute;
  transform-origin: 50% 50%;
  transform: translateX(-50%);
  left: 50%;
  top: 24px;


  p {
    color: ${cssVar("--text-invert-primary")};
  }

  img, svg {
    object-fit: contain;
    object-position: center;
    width: 32px;
    height: 32px;
  }

 @media(max-width: 1024px){
    width: calc(100vw - 48px);
 }
`