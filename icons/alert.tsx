import type { IconProps } from "./types";
import { composeProps } from "./util";

// TODO refactor to .svg
function AlertIcon(props: IconProps) {
  return (
    <svg
      {...composeProps(props)}
      viewBox="0 0 24 24"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
    >
      <g clip-path="url(#clip0_3517_5893)">
        <mask
          id="mask0_3517_5893"
          style={{ maskType: "luminance" }}
          maskUnits="userSpaceOnUse"
          x="0"
          y="0"
          width="24"
          height="24"
        >
          <path
            opacity="0.8"
            fill-rule="evenodd"
            clip-rule="evenodd"
            d="M12 2L22 20H2L12 2ZM11 8H13V14H11V8ZM13 16V18H11V16H13Z"
            fill="white"
            style={{ fill: "white", fillOpacity: 1 }}
          />
        </mask>
        <g mask="url(#mask0_3517_5893)">
          <rect
            width="24"
            height="24"
            fill="#E54796"
            style={{ fill: "#E54796", fillOpacity: 1 }}
          />
        </g>
      </g>
      <defs>
        <clipPath id="clip0_3517_5893">
          <rect
            width="24"
            height="24"
            fill="white"
            style={{ fill: "white", fillOpacity: 1 }}
          />
        </clipPath>
      </defs>
    </svg>
  );
}

export default AlertIcon;
