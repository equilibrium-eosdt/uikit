import type { IconProps } from "./types";
import { composeProps } from "./util";

// TODO refactor to .svg
function Pattern(props: IconProps) {
  return (
<svg  {...composeProps(props)} viewBox="0 0 96 96" fill="none" xmlns="http://www.w3.org/2000/svg" xlinkHref="http://www.w3.org/1999/xlink">
<path d="M0 16C0 7.16345 7.16344 0 16 0H80C88.8366 0 96 7.16344 96 16V80C96 88.8366 88.8366 96 80 96H16C7.16345 96 0 88.8366 0 80V16Z" fill="url(#pattern0)"/>
<defs>
<pattern id="pattern0" patternContentUnits="objectBoundingBox" width="1" height="1">
<use xlinkHref="#image0_1834_28372" transform="scale(0.015625)"/>
</pattern>
<image id="image0_1834_28372" width="64" height="64" xlinkHref="data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAEAAAABACAYAAACqaXHeAAAAAXNSR0IArs4c6QAAAONJREFUeF7t20EOhEAIRFG4/6F7DvEnYeFzryQIv6pBd2behOu9dPvsbog+k+NLgArQAqmJcw9iAAhSgZKB3IJkkAySQTJ4CiE+gA8oBeg0mH3Ai084P89HhqwEqIA209ICsQdjAeaZIgaAYKxBDMCAYy8fXwAIgiAIcoJpJEYGI4VjB3YrbC9gL2AvkCB43cM5PgZgAAZgQFnNZAhdGykQBEEQBEEQDBmgAm2glM/z+QUYisYUGoldO7kY32IEAzCg6RgIRgjFAsw+AgRBMNYgBmCAT2TCYfoPPz/HCqQCX1eBHzHnv7C7WhBSAAAAAElFTkSuQmCC"/>
</defs>
</svg>
  );
}

export default Pattern;
