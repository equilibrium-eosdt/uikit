export const isPrefixed = <P extends string>(
  prefix: P,
  str?: string,
): str is `${P}${string}` => Boolean(str?.startsWith(prefix));

export const getEntries = <T extends {}, K extends keyof T>(
  obj?: T,
): Array<[K, T[K]]> => {
  return Object.entries(obj ?? {}) as unknown as Array<[K, T[K]]>;
};
