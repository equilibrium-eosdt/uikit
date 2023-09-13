import styled, { keyframes } from "styled-components";
import * as Class from "../../constants/classnames";
import { cssVar } from "../../util/theme";


export const ThumbnailWrapper = styled.div`
  display: inline-flex;
  justify-content: center;
  align-items: center;
  flex-shrink: 0;

  background: ${cssVar("--fill-secondary")};
  width: fit-content;

  img, svg {
    object-fit: contain;
    object-position: center;
  }

&.${Class.XL} {
width: 96px;
height: 96px;
padding: ${cssVar("--spacing-space-24")};
border-radius: ${cssVar("--rounding-radius-xxxl")};

img, svg {
    width: 48px;
    height: 48px;
}
}
        
&.${Class.L} {
    border-radius: ${cssVar("--rounding-radius-xxl")};
    width: 64px;
    height: 64px;

    img, svg {
        width: 32px;
        height: 32px;
    }
}

&.${Class.M} {
border-radius: ${cssVar("--rounding-radius-xl")};
width: 48px;
height: 48px;

img, svg {
    width: 24px;
    height: 24px;
}
}

&.${Class.S} {
border-radius: ${cssVar("--rounding-radius-s")};
width: 32px;
height: 32px;

img, svg {
    width: 12px;
    height: 12px;
}
}

&.${Class.Rectangle} {
    border-radius: ${cssVar("--rounding-radius-xs")};
    &.${Class.XL} {
        border-radius: ${cssVar("--rounding-radius-m")};
    }
}

&.${Class.DarkBG} {
    border: 1px solid var(--border-image-edge, rgba(204, 187, 184, 0.16));
}

&.${Class.LightBg} {    
    border: 1px solid var(--border-image-edge, rgba(204, 187, 184, 0.16));
}

&.${Class.Status} {    
    background: var(--fill-accent-secondary, rgba(50, 250, 220, 0.16));
}
&.${Class.Accent} {    
    background: var(--fill-accent-primary, #9FE);
}
&.${Class.Image} {  
padding: 0;
overflow: hidden;  
 svg, img {
    width: 100%;
    height: 100%;
    object-fit: cover;
    object-position: center;
    }
}
`;
