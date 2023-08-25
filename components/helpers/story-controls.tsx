import { ReactNode, useMemo, useState } from "react";

type Comp<T> = (props: T) => ReactNode;
type Unwrap<T> = T extends Comp<infer P> ? P : never;

export function StoryInput<
  T extends Comp<any>,
  P extends Unwrap<T>,
  VK extends keyof P,
  OC extends keyof P,
>(
  Component: T,
  _props: Partial<T>,
  valueKey: VK,
  initialValue: P[VK],
  onChangeKey: OC,
  transformValue?: (...args: Parameters<P[OC]>) => P[VK],
) {
  return (__props: P) => {
    const props = useMemo(() => ({ ...__props, _props }), [__props, _props]);
    const [state, setState] = useState(props[valueKey] ?? initialValue);

    function _onChange(...args: Parameters<P[OC]>) {
      const value = transformValue?.(...args);
      console.log({ args, value });
      setState(value);
      /*const onChange = props[onChangeKey];

      if (typeof onChange !== "function") {
        throw new Error(
          `incorrect onChange handler key supplied, got[${String(
            onChangeKey,
          )}]`,
        );
      }

      onChange(value);*/
    }

    return (
      // @ts-expect-error
      <Component
        {...props}
        {...{ [valueKey]: state, [onChangeKey]: _onChange }}
      />
    );
  };
}
