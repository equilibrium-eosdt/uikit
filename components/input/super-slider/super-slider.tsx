import cn from "classnames";
import TooltipUi from "@marginly/ui/components/tooltip";
import type { ChangeEvent, ReactNode, TouchEvent } from "react";
import * as LocalClass from "../classnames";
import { HANDLE_WIDTH, SliderContainer, TooltipWrapper } from "./styled";
import Noop from "../../helpers/noop";
import T from "../../typography";
import * as GlobalClass from "../../../constants/classnames";
import { ActionTypography } from "./action-typography";

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

const percent = (offset: number) => `${offset * 100}%`;

const adjustValue = (min: number, max: number, _value?: number) => {
  let value = _value ?? min;
  value = Math.min(value, max);
  return Math.max(value, min);
};

const defaultFormatter = (num?: number) => (
  <>
    {num?.toFixed(0) ?? ""}
    &#215;
  </>
);

export function SuperSlider({
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
  const range = max - min;
  const value = adjustValue(min, max, _value);
  const offset = (value - min) / range;

  const restricted =
    typeof restrictLessThan === "number" && restrictLessThan > min;

  const restrictOffset = restricted
    ? (restrictLessThan! - min) / range
    : undefined;

  const restrictDiff = restricted ? offset - restrictOffset! : undefined;
  const labelLeft = percent(offset);
  const fillLeft = restricted
    ? `calc(${percent(restrictOffset!)} - ${
        restrictOffset! * (HANDLE_WIDTH + 4)
      }px)`
    : 0;

  const fillWidth = restricted
    ? `calc(${percent(restrictDiff!)} + ${
        (1 - restrictDiff!) * (HANDLE_WIDTH + 4)
      }px)`
    : `calc(${percent(offset)} + ${(1 - offset) * (HANDLE_WIDTH + 4)}px)`;

  const titleHidden =
    (offset * 100 >= thresholdLeft && offset * 100 <= thresholdRight) ||
    (restricted && restrictOffset! * 100 >= thresholdLeft);

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
            style={{
              width: `calc(${percent(restrictOffset!)} - ${0}px)`,
            }}
          />
          <div
            className={LocalClass.Restrict}
            style={{
              width: `calc(${percent(restrictOffset!)} - ${0}px)`,
            }}
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
          {active && (
            <TooltipWrapper>
              <TooltipUi top md>
                <ActionTypography invert>
                  {formatNumber(value)}
                </ActionTypography>
              </TooltipUi>
            </TooltipWrapper>
          )}
          <ActionTypography>{formatNumber(value)}</ActionTypography>
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
