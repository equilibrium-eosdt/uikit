import type { IconProps } from "./types";
import { composeProps } from "./util";

// TODO refactor to .svg
function TransitionIcon(props: IconProps) {
  return (
<svg {...composeProps(props)} viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
<g clip-path="url(#clip0_79_2740)">
<mask id="mask0_79_2740" style={{maskType:"luminance"}} maskUnits="userSpaceOnUse" x="0" y="0" width="24" height="24">
<path fill-rule="evenodd" clip-rule="evenodd" d="M9.5 21L17.5 13L17.5 11L9.5 3L8 4.5L15.5 12L8 19.5L9.5 21Z" fill="white" style={{fill:"white",fillOpacity:1}}/>
</mask>
<g mask="url(#mask0_79_2740)">
<rect width="24" height="24" fill="#8C817E" fill-opacity="0.48" style={{fill:"#8C817E", fillOpacity:0.48}}/>
</g>
</g>
<defs>
<clipPath id="clip0_79_2740">
<rect width="24" height="24" fill="white" style={{fill:"white", fillOpacity:1}}/>
</clipPath>
</defs>
</svg>


  );
}

export default TransitionIcon;
