import type { IconProps } from "./types";
import { composeProps } from "./util";

// TODO refactor to .svg
export default function SwapIcon(props: IconProps) {
  return (
    <svg
      {...composeProps(props)}
      viewBox="0 0 24 24"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
    >
      <path
        opacity="0.8"
        fillRule="evenodd"
        clipRule="evenodd"
        d="M3 16L7 20H9L13 16L11.5 14.5L9 17V8H7V17L4.5 14.5L3 16Z"
        fill="black"
        style={{ fill: "black", fillOpacity: 1 }}
      />
      <path
        opacity="0.4"
        fillRule="evenodd"
        clipRule="evenodd"
        d="M15 4L11 8L12.5 9.5L15 7V16H17L17 7L19.5 9.5L21 8L17 4H15Z"
        fill="black"
        style={{ fill: "black", fillOpacity: 1 }}
      />
    </svg>
  );
}
