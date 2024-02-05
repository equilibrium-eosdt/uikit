import type { IconProps } from "./types";
import { composeProps } from "./util";

// TODO refactor to .svg
export function StepperMinus(props: IconProps) {
  return (
    <svg
      {...composeProps(props)}
      viewBox="0 0 24 24"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
    >
      <g clip-path="url(#clip0_4413_23289)">
        <mask
          id="mask0_4413_23289"
          style={{ maskType: "luminance" }}
          maskUnits="userSpaceOnUse"
          x="0"
          y="0"
          width="24"
          height="24"
        >
          <path
            d="M4 11H20V13H4V11Z"
            fill="white"
            style={{ fill: "white", fillOpacity: 1 }}
          />
        </mask>
        <g mask="url(#mask0_4413_23289)">
          <rect
            width="24"
            height="24"
            fill="black"
            style={{ fill: "black", fillOpacity: 1 }}
          />
        </g>
      </g>
      <defs>
        <clipPath id="clip0_4413_23289">
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

export function StepperPlus(props: IconProps) {
  return (
    <svg
      {...composeProps(props)}
      viewBox="0 0 24 24"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
    >
      <g clip-path="url(#clip0_4413_23296)">
        <mask
          id="mask0_4413_23296"
          style={{ maskType: "alpha" }}
          maskUnits="userSpaceOnUse"
          x="0"
          y="0"
          width="24"
          height="24"
        >
          <path
            fill-rule="evenodd"
            clip-rule="evenodd"
            d="M11 13V20H13V13H20V11H13V4H11V11H4V13H11Z"
            fill="black"
            style={{ fill: "black", fillOpacity: 1 }}
          />
        </mask>
        <g mask="url(#mask0_4413_23296)">
          <rect
            width="24"
            height="24"
            fill="black"
            style={{ fill: "black", fillOpacity: 1 }}
          />
        </g>
      </g>
      <defs>
        <clipPath id="clip0_4413_23296">
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
