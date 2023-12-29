export const request = async <TResponse>(
  url: string,
  config: RequestInit = {},
  parseJson = false,
): Promise<TResponse> => {
  const response = await fetch(url, {
    ...config,
    headers: {
      "Content-Type": "application/json",
      accept: "application/json",
      ...config.headers,
    },
  });
  if (response.ok) {
    return parseJson ? await response.json() : response;
  }
  throw new Error(response.statusText);
};
