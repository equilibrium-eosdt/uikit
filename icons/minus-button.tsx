import type { IconProps } from "./types";
import { composeProps } from "./util";

// TODO refactor to .svg
function MinusIcon(props: IconProps) {
  return (
<svg  {...composeProps(props)} viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
<g clip-path="url(#clip0_2573_1763)">
<mask id="mask0_2573_1763" style={{maskType:"luminance"}}  maskUnits="userSpaceOnUse" x="0" y="0" width="24" height="24">
<path d="M4 11H20V13H4V11Z" fill="white" style={{fill:"white", fillOpacity:1}}/>
</mask>
<g mask="url(#mask0_2573_1763)">
<rect width="24" height="24" fill="black" style={{fill:"black", fillOpacity:1}}/>
</g>
</g>
<defs>
<clipPath id="clip0_2573_1763">
<rect width="24" height="24" fill="white" style={{fill:"white", fillOpacity:1}}/>
</clipPath>
</defs>
</svg>


  );
}

export default MinusIcon;
