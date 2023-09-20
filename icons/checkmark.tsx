import type { IconProps } from "./types";
import { composeProps } from "./util";

// TODO refactor to .svg
function CheckmarkIcon(props: IconProps) {
  return (
<svg {...composeProps(props)} viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
<g clip-path="url(#clip0_79_2467)">
<mask id="mask0_79_2467" style={{maskType:"luminance"}} maskUnits="userSpaceOnUse" x="0" y="0" width="24" height="24">
<path fill-rule="evenodd" clip-rule="evenodd" d="M11 17.5L21 7.5L19.5 6L10 15.5L5.5 11L4 12.5L9 17.5H11Z" fill="white" style={{fill:"white", fillOpacity:1}}/>
</mask>
<g mask="url(#mask0_79_2467)">
<rect width="24" height="24" fill="black" style={{fill:"black", fillOpacity:1}}/>
</g>
</g>
<defs>
<clipPath id="clip0_79_2467">
<rect width="24" height="24" fill="white"  style={{fill:"white", fillOpacity:1}}/>
</clipPath>
</defs>
</svg>

  );
}

export default CheckmarkIcon;
