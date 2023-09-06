import cn from "classnames";
import type { ChangeEvent, ReactNode, TouchEvent } from "react";
import * as LocalClass from "./classnames";
import { SliderContainer } from "./slider.styled";
import Noop from "../helpers/noop";
import T from "../typography";
import * as GlobalClass from "../../constants/classnames";
import { cssVar } from "../../util/theme";

interface Props {
  active?: boolean;
  className?: string;
  formatNumber?: (num?: number) => ReactNode;
  max?: number;
  min?: number;
  restrictLessThan?: number;
  value?: number;
  title?: ReactNode;
  thresholdLeft?: number;
  thresholdRight?: number;
  onChange?: (e: ChangeEvent<HTMLInputElement>) => void;
  onTouchStart?: (e: TouchEvent<HTMLInputElement>) => void;
  onTouchEnd?: (e: TouchEvent<HTMLInputElement>) => void;
}

const MIN = 2;
const MAX = 20;

const THRESHOLD_LEFT = 25;
const THRESHOLD_RIGHT = 75;
/** @deprecated no magic consts */
const _WTF = 0.88;
/** @deprecated no magic consts */
const _WTF2 = 2;

const adjustValue = (min: number, max: number, _value?: number) => {
  let value = _value ?? min;
  value = Math.min(value, max);
  return Math.max(value, min);
};

const defaultFormatter = (num?: number) => (
  <T
    className={GlobalClass.Action}
    style={{ color: cssVar("--text-on-light") }}
  >
    {num?.toFixed(0) ?? ""}
    &#215;
  </T>
);

function SuperSlider({
  active,
  className,
  min = MIN,
  max = MAX,
  formatNumber = defaultFormatter,
  value: _value,
  restrictLessThan,
  title,
  thresholdLeft = THRESHOLD_LEFT,
  thresholdRight = THRESHOLD_RIGHT,
  ...handlers
}: Props) {
  const value = adjustValue(min, max, _value);

  const restricted =
    typeof restrictLessThan === "number" && restrictLessThan > min;

  const labelLeftNum = ((value - min) * 100) / (max - min);
  const labelLeft = `${labelLeftNum}%`;
  const fillWidthNum = ((value * _WTF - min) * 100) / (max - min - _WTF2);

  const restrictWidthNum = restricted
    ? ((restrictLessThan! * _WTF - min) * 100) / (max - min - _WTF2)
    : undefined;

  const fillLeft = restricted ? `${restrictWidthNum}%` : 0;

  const fillWidth = restricted
    ? `${fillWidthNum - restrictWidthNum!}%`
    : `${fillWidthNum}%`;

  const titleHidden =
    (labelLeftNum >= thresholdLeft && labelLeftNum <= thresholdRight) ||
    (restricted &&
      restrictWidthNum! >= thresholdLeft &&
      restrictWidthNum! <= thresholdRight);

  return (
    <SliderContainer className={className}>
      <div
        className={LocalClass.Fill}
        style={{
          left: fillLeft,
          width: fillWidth,
        }}
      />

      {restricted ? (
        <>
          <div
            className={LocalClass.RestrictUnderlay}
            style={{ width: `${restrictWidthNum}%` }}
          />
          <div
            className={LocalClass.Restrict}
            style={{ width: `${restrictWidthNum}%` }}
          />
        </>
      ) : (
        <Noop />
      )}

      <T
        className={cn(LocalClass.Title, GlobalClass.Action, {
          [GlobalClass.Hidden]: titleHidden,
        })}
      >
        {title}
      </T>

      <div className={cn(LocalClass.Handle)}>
        <div
          className={cn({ [GlobalClass.Active]: active }, LocalClass.Label)}
          style={{ left: labelLeft }}
        >
          {formatNumber(value)}
        </div>
      </div>

      <input
        className={cn({ [GlobalClass.Active]: active })}
        type="range"
        min={min}
        max={max}
        value={value?.toString()}
        {...handlers}
      />
    </SliderContainer>
  );
}

export default SuperSlider;
