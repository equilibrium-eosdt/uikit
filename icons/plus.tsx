import type { IconProps } from "./types";
import { composeProps } from "./util";

// TODO refactor to .svg
function PlusIcon(props: IconProps) {
  return (
<svg {...composeProps(props)}viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
<g clip-path="url(#clip0_21_1256)">
<mask id="mask0_21_1256" style={{maskType:"luminance"}} maskUnits="userSpaceOnUse" x="0" y="0" width="24" height="24">
<path opacity="0.8" fill-rule="evenodd" clip-rule="evenodd" d="M22 12C22 17.5228 17.5228 22 12 22C6.47715 22 2 17.5228 2 12C2 6.47715 6.47715 2 12 2C17.5228 2 22 6.47715 22 12ZM13 11H17V13H13V17H11V13H7V11H11V7H13V11Z" fill="white" style={{fill:"white", fillOpacity:1}}/>
</mask>
<g mask="url(#mask0_21_1256)">
<rect width="24" height="24" fill="black" style={{fill:"black", fillOpacity:1}}/>
</g>
</g>
<defs>
<clipPath id="clip0_21_1256">
<rect width="24" height="24" fill="white" style={{fill:"white", fillOpacity:1}}/>
</clipPath>
</defs>
</svg>


  );
}

export default PlusIcon;
