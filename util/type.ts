import { ComposeProps, DeepWriteable, UnwrapArray } from "../types/util";

export const isNumStr = (num?: string): num is `${number}` => {
  if (!num) {
    return false;
  }

  const val = Number(num);
  return Number.isFinite(val);
};

export const isPrefixed = <P extends string>(
  prefix: P,
  str?: string,
): str is `${P}${string}` => Boolean(str?.startsWith(prefix));

export const getEntries = <T extends {}, K extends keyof T>(
  obj?: T,
): Array<[K, T[K]]> => {
  return Object.entries(obj ?? {}) as unknown as Array<[K, T[K]]>;
};

/** @description used to resolve type conflicts around __readonly__ types */
export const markWritable = <T>(data: T): DeepWriteable<T> => data;

/**
 * @description utility helper to create const str array
 * @example constStrArray("foo", "bar"): ["foo", "bar"]
 **/
export const constStrArray = <T extends string[]>(...names: T) => names;

export const extractProps = <T extends string[], V>(
  props: Partial<ComposeProps<T, V>>,
  ...names: T
): ComposeProps<T, V> =>
  names.reduce<ComposeProps<T, V>>((prev, name) => {
    const value = props[name as keyof typeof props];
    return { ...prev, [name]: value };
  }, {} as any);

export const divideBy = <R extends {}, T extends keyof R>(
  obj: R,
  ...names: T[]
) => {
  const [included, omitted]: [Partial<Pick<R, T>>, Partial<Omit<R, T>>] =
    getEntries(obj).reduce(
      (prev, [name, value]) => {
        const [_included, _omitted] = prev as [
          Partial<Pick<R, T>>,
          Partial<Omit<R, T>>,
        ];

        const included = names.includes(name as T)
          ? { ..._included, [name]: value }
          : _included;

        const omitted = !names.includes(name as T)
          ? { ..._omitted, [name]: value }
          : _omitted;

        return [included, omitted];
      },
      [{}, {}],
    );

  return [included, omitted] as [Pick<R, T>, Omit<R, T>];
};
