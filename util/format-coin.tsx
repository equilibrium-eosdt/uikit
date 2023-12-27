import React from "react";

export const getZeroDecimalCountFromString = (value: string) => {
  const decimals = value.split(".")[1];
  if (!decimals) return 0;
  const i = decimals.split("").findIndex((el) => el !== "0");
  return i > -1 ? i : 0;
};

const MINIMUM_LARGE_NUMBER = 1_000_000;
const MINIMUM_MEDIUM_NUMBER = 100;
const MINIMUM_SMALL_NUMBER = 1;
const ZERO_COUNT_LIMIT = 3;

const decimalNativeFormatter = new Intl.NumberFormat("en-US", {
  minimumSignificantDigits: 1,
  maximumSignificantDigits: 4,
}).format;

const largeNumberFormatter = new Intl.NumberFormat("en-US", {
  notation: "compact",
  maximumFractionDigits: 4,
}).format;

const mediumNumberFormatter = new Intl.NumberFormat("en-US", {
  minimumFractionDigits: 0,
  maximumFractionDigits: 2,
}).format;

const smallNumberFormatter = new Intl.NumberFormat("en-US", {
  minimumFractionDigits: 0,
  maximumFractionDigits: 4,
}).format;

const decimalFormatter = (value: number) => {
  const formattedValue = decimalNativeFormatter(value);
  const zeroCount = getZeroDecimalCountFromString(formattedValue);

  if (zeroCount > ZERO_COUNT_LIMIT) {
    const digitsBeforeDot = value < 0 ? "-0." : "0.";
    const strAfterSub = formattedValue.slice(
      digitsBeforeDot.length + zeroCount,
    );
    return (
      <>
        {digitsBeforeDot}0<sub>&#8239;{zeroCount}&#8239;</sub>
        {strAfterSub}
      </>
    );
  }
  return formattedValue;
};

export const formatCoin = (
  value: number | string | undefined | null,
  { prefix, postfix }: { prefix?: string; postfix?: string } = {}
): React.ReactNode => {
  if (value == null) return null;
  const numericValue = Number(value);
  if (numericValue === 0) {
    return 0;
  }
  const getNumber = () => {
    const numericAbs = Math.abs(numericValue);

    if (numericAbs >= MINIMUM_LARGE_NUMBER) {
      return largeNumberFormatter(numericValue);
    }
    if (numericAbs >= MINIMUM_MEDIUM_NUMBER) {
      return mediumNumberFormatter(numericValue);
    }
    if (numericAbs >= MINIMUM_SMALL_NUMBER) {
      return smallNumberFormatter(numericValue);
    }
    return decimalFormatter(numericValue);
  };

  return <>{prefix ?? ""}{getNumber()}{postfix ?? ""}</>;
};
