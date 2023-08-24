import type { IconProps } from "./types";

// TODO refactor to .svg
function LampIcon(_props: IconProps) {
  const { noInvert, style, ...props } = _props;

  return (
    <svg
      {...props}
      style={{ filter: noInvert ? "invert(0)" : "invert(var(--svg-invert))", ...style }}
      viewBox="0 0 24 24"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
    >
      <g clipPath="url(#clip0_7407_12774)">
        <mask
          id="mask0_7407_12774"
          style={{ maskType: "luminance" }}
          maskUnits="userSpaceOnUse"
          x="0"
          y="0"
          width="24"
          height="24"
        >
          <path
            opacity="0.6"
            d="M15.8742 17.001C18.3346 15.6365 20 13.0127 20 10C20 5.58172 16.4183 2 12 2C7.58172 2 4 5.58172 4 10C4 13.0128 5.66537 15.6365 8.12577 17.001C8.56947 15.2753 10.1358 14 12 14C13.8642 14 15.4305 15.2753 15.8742 17.001Z"
            fill="white"
          />
          <path
            opacity="0.8"
            d="M15.8742 17.001C14.7264 17.6375 13.4055 18 12 18C10.5945 18 9.2736 17.6375 8.12576 17.001C8.04366 17.3203 8 17.655 8 18V22H16V18C16 17.655 15.9563 17.3203 15.8742 17.001Z"
            fill="white"
          />
          <path
            opacity="0.2"
            d="M8.12573 17.001C8.56943 15.2753 10.1358 14 12 14C13.8642 14 15.4305 15.2753 15.8742 17.001C14.7264 17.6375 13.4055 18 12 18C10.5944 18 9.27357 17.6375 8.12573 17.001Z"
            fill="white"
          />
        </mask>
        <g mask="url(#mask0_7407_12774)">
          <rect width="24" height="24" fill="black" />
        </g>
      </g>
      <defs>
        <clipPath id="clip0_7407_12774">
          <rect width="24" height="24" fill="white" />
        </clipPath>
      </defs>
    </svg>
  );
}

export default LampIcon;
