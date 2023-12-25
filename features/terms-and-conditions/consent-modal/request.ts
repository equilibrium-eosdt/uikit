export const request = async <TResponse>(
  url: string,
  config: RequestInit = {},
): Promise<TResponse> => {
  const response = await fetch(url, {
    ...config,
    headers: {
      "Content-Type": "application/json",
      accept: "application/json",
      ...config.headers,
    },
  });
  const res = await response.json();
  if (response.ok) {
    return res;
  }
  throw new Error(res);
};
