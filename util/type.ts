type DeepWriteable<T> = { -readonly [P in keyof T]: DeepWriteable<T[P]> };

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
