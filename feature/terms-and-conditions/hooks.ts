import { useMemo } from "react";
import useSWR from "swr";

import {
  createCommonEndpointConfig,
  EndpointArgs,
  CommonEndpoints,
  EndpointValues,
  validateResponse,
} from "./api";
import { isError, withExactMessage } from "../util";

type PartialArgs<T> = T extends [infer U, ...infer V]
  ? [undefined | U, ...PartialArgs<V>]
  : [];

const notPartial = (v: unknown[]) => {
  return !v.some((x) => typeof x === "undefined");
};

export const getFetcher =
  <T, V = T, THROWS extends boolean = true>(
    validateResponse: (raw: any) => raw is T,
    {
      onError,
      // @ts-expect-error force default value
      throwOnError = true,
      transform,
      method,
      body,
      allowEmptyResponse = false,
    }: {
      onError?: (err: any) => void;
      throwOnError?: THROWS;
      transform?: (raw: T) => V;
      method?: RequestInit["method"];
      body?: RequestInit["body"];
      allowEmptyResponse?: boolean;
    } = {},
  ) =>
  async (url?: string): Promise<THROWS extends true ? T : T | undefined> => {
    if (!url) {
      return undefined as any;
    }

    try {
      const headers = new Headers();

      if (body) {
        headers.append("Content-Type", "application/json");
      }

      const response = await fetch(url, {
        method,
        headers,
        body,
      });

      if (allowEmptyResponse && response) {
        return transform?.(response as any) ?? (response as any);
      }

      const result = await response.json();

      if (response.status / 100 >= 4) {
        throw new Error(`Request failed with code: ${response.status}`, {
          cause: { code: response.status, ...result },
        });
      }

      if (!validateResponse(result)) {
        throw new Error("invalid response");
      }

      return transform?.(result) ?? (result as any);
    } catch (err) {
      onError?.(isError(err) ? withExactMessage(err) : err);

      if (throwOnError) {
        throw err;
      } else {
        return undefined as any;
      }
    }
  };

export const useCommonMarginlyApi = <
  T extends CommonEndpoints,
  V = EndpointValues[T],
>({
  baseUrl,
  onError,
  enabled = true,
  endpoint,
  args,
  allowEmptyResponse,
}: {
  baseUrl: string;
  onError: (err: any) => void;
  enabled?: boolean;
  endpoint: T;
  args: PartialArgs<EndpointArgs[T]>;
  allowEmptyResponse?: boolean;
}) => {
  const { url, method, body } = useMemo(() => {
    if (enabled && notPartial(args)) {
      const _args = args as unknown as EndpointArgs[T];

      const { url, method, body } = createCommonEndpointConfig(
        { args: _args, name: endpoint },
        baseUrl,
      );

      return { url, method, body };
    }

    return {};
  }, [enabled, endpoint, args, baseUrl]);

  const fetcher = useMemo(() => {
    return getFetcher(
      (raw: any): raw is EndpointValues[T] => validateResponse(endpoint, raw),
      {
        onError: (err) => {
          if (err) {
            onError(err);
          }
        },
        throwOnError: false,
        allowEmptyResponse,
        method,
        body,
      },
    );
  }, [allowEmptyResponse, body, endpoint, onError, method]);

  const result = useSWR(url, fetcher);
  return useMemo(() => ({ ...result, baseUrl }), [baseUrl, result]);
};
