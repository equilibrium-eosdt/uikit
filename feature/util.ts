export const isError = (e: unknown): e is Error =>
  !!e && Reflect.has(e, "message");

interface WithExactMessage {
  exact?: boolean;
  imgSrc?: string;
}

export const withExactMessage = <E extends Error>(
  e: E,
  imgSrc?: string,
): E & WithExactMessage => Object.assign(e, { exact: true, imgSrc });
