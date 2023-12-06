import {
  ConsentExistenceResponse,
  ConsentSignResponse,
} from "./types";

export interface EndpointArgs {
  "consent.existence": [string];
  "consent.sign": [string, string];
}

export interface EndpointValues {
  "consent.existence": ConsentExistenceResponse;
  "consent.sign": ConsentSignResponse;
}

export type CommonEndpoints = keyof EndpointArgs;

export const createCommonEndpointConfig = <T extends CommonEndpoints>(
  {
    args,
    name,
  }: {
    args: EndpointArgs[T];
    name: T;
  },
  baseurl: string,
): { url: string; body?: string; method?: RequestInit["method"] } => {
  switch (name) {
    case "consent.existence": {
      const [address] = args as EndpointArgs["consent.existence"];
      const url = `${baseurl}/users/${address}/consent/exists`;
      return { url };
    }

    case "consent.sign": {
      const [address, body] = args as EndpointArgs["consent.sign"];
      const url = `${baseurl}/users/${address}/consent`;
      return { url, method: "POST", body };
    }

    default:
      ((exhaustiveCheck: never) => {})(name);
      throw new Error(`unknown endpoint: ${name}`);
  }
};

const validateConsentExistenceResponse = (
  raw: any,
): raw is ConsentExistenceResponse => typeof raw === "boolean";

const validateConsentSignResponse = (raw: any): raw is ConsentSignResponse =>
  true;

const validators = {
  "consent.existence": validateConsentExistenceResponse,
  "consent.sign": validateConsentSignResponse,
} as const;

export const validateResponse = <T extends CommonEndpoints>(
  name: T,
  value: any,
): value is EndpointValues[T] => {
  const validator = validators[name];

  if (typeof validator !== "function") {
    throw new Error(`unknown validator: ${name}`);
  }

  return validators[name](value);
};
