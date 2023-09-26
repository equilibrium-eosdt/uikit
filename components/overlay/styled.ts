import styled  from "styled-components";
import { cssVar } from "../../util/style";

export const Overlay = styled.div`
  background: ${cssVar("--background-overlay")};
  backdrop-filter: blur(12px);
  position: absolute;
  left: 0;
  top: 0;
  width: 100%;
  height: 100%;
`