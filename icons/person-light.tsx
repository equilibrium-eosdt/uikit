import type { IconProps } from "./types";
import { composeProps } from "./util";

// TODO refactor to .svg
function LightPersonIcon(props: IconProps) {
  return (
<svg   {...composeProps(props)} viewBox="0 0 48 48" fill="none" xmlns="http://www.w3.org/2000/svg">
<g clip-path="url(#clip0_1446_34099)">
<mask id="mask0_1446_34099" style={{maskType:"luminance"}} maskUnits="userSpaceOnUse" x="0" y="0" width="48" height="48">
<path opacity="0.6" fill-rule="evenodd" clip-rule="evenodd" d="M34.2265 22.2816C32.1146 25.7125 28.3244 28 24 28C19.6755 28 15.8854 25.7125 13.7734 22.2816C16.8758 20.8182 20.3423 20 24 20C27.6576 20 31.1242 20.8182 34.2265 22.2816Z" fill="white" style={{fill:"white", fillOpacity:1}}/>
<path opacity="0.4" fill-rule="evenodd" clip-rule="evenodd" d="M13.7735 22.2816C10.2146 23.9603 7.1349 26.488 4.79565 29.6035C7.21868 37.9217 14.8995 44 24 44C33.1006 44 40.7814 37.9217 43.2044 29.6035C40.8652 26.488 37.7855 23.9603 34.2266 22.2816C32.1147 25.7125 28.3245 28 24 28C19.6756 28 15.8854 25.7125 13.7735 22.2816Z" fill="white" style={{fill:"white", fillOpacity:1}}/>
<path opacity="0.8" fill-rule="evenodd" clip-rule="evenodd" d="M34.2265 22.2816C35.3513 20.4544 36 18.303 36 16C36 9.37258 30.6274 4 24 4C17.3726 4 12 9.37258 12 16C12 18.303 12.6487 20.4544 13.7735 22.2816C16.8758 20.8182 20.3424 20 24 20C27.6576 20 31.1242 20.8182 34.2265 22.2816Z" fill="white" style={{fill:"white", fillOpacity:1}}/>
</mask>
<g mask="url(#mask0_1446_34099)">
<rect width="48" height="48" fill="white" style={{fill:"white", fillOpacity:1}}/>
</g>
</g>
<defs>
<clipPath id="clip0_1446_34099">
<rect width="48" height="48" fill="white" style={{fill:"white", fillOpacity:1}}/>
</clipPath>
</defs>
</svg>

  );
}

export default LightPersonIcon;
