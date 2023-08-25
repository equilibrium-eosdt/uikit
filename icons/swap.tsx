import type { IconProps } from "./types";

// TODO refactor to .svg
export default function SwapIcon(_props: IconProps) {
  const { style, ...props } = _props;

  return (
    <svg
      {...props}
      style={{ filter: "invert(var(--svg-invert))", ...style }}
      viewBox="0 0 24 24"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
    >
      <g clipPath="url(#clip0_12_2206)">
        <mask
          id="mask0_12_2206"
          style={{ maskType: "alpha" }}
          maskUnits="userSpaceOnUse"
          x="0"
          y="0"
          width="24"
          height="24"
        >
          <path
            opacity="0.8"
            fillRule="evenodd"
            clipRule="evenodd"
            d="M2 17L6 21H8L12 17L10.5 15.5L8 18V3H6V18L3.5 15.5L2 17Z"
            fill="black"
          />
          <path
            opacity="0.4"
            fillRule="evenodd"
            clipRule="evenodd"
            d="M16 3L12 7L13.5 8.5L16 6L16 21H18L18 6L20.5 8.5L22 7L18 3H16Z"
            fill="black"
          />
        </mask>
        <g mask="url(#mask0_12_2206)">
          <rect width="24" height="24" fill="black" />
        </g>
      </g>
      <defs>
        <clipPath id="clip0_12_2206">
          <rect width="24" height="24" fill="white" />
        </clipPath>
      </defs>
    </svg>
  );
}
