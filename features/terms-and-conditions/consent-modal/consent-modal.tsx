import Button from "../../../components/button";
import * as Class from "../../../constants/classnames";
import cn from "classnames";
import React, { useEffect, useRef, useState } from "react";
import { t } from "ttag";

import {
  Consent,
  Header,
  Modal,
  ModalBody,
  ModalHeading,
  ModalLayout,
  ModalOverflow,
  Subtext,
} from "./modal.styled";
import { useCommonMarginlyApi } from "../hooks";
import { request } from "./request";
import { createCommonEndpointConfig } from "../api";

const TERMS_AND_CONDITIONS_LINK =
  "https://marginly.com/terms-and-conditions.pdf";
const PRIVACY_POLICY_LINK = "https://marginly.com/privacy-policy.pdf";

const CONSENT_MESSAGE =
  "1. I have read and agreed with the Terms and Conditions.\n2. I have read and agreed with the Privacy Policy.\n3. I state that I am not a person or a company who is a resident of, or is located, incorporated or has a registered agent in the United States, Canada, or other restricted jurisdiction.";

export const ConsentModal = ({
  baseUrl,
  onError,
  onSuccess,
  userAddress,
  useDisconnect,
  useSignMessage,
}: {
  baseUrl: string;
  onError: (err: any) => void;
  onSuccess?: (value: string) => void;
  userAddress?: `0x${string}`;
  useDisconnect: () => { disconnect: () => void };
  useSignMessage: () => {
    signMessageAsync: (args: { message: string }) => Promise<`0x${string}`>;
  };
}) => {
  const { signMessageAsync } = useSignMessage();
  const [consentsAreSignedSuccessfully, setConsentsAreSignedSuccessfully] =
    useState(false);

  const [isLoaded, setIsLoaded] = useState(false);
  useEffect(() => {
    setIsLoaded(true);
  }, []);

  const handleSign = async () => {
    if (!userAddress) {
      return;
    }
    try {
      const signatureHash = await signMessageAsync({
        message: CONSENT_MESSAGE,
      });
      const { url, ...config } = createCommonEndpointConfig(
        {
          name: "consent.sign",
          args: [userAddress, JSON.stringify({ signatureHash })],
        },
        baseUrl,
      );
      setConsentsAreSignedSuccessfully(true);
      await request(url, config);
    } catch (e) {
      setConsentsAreSignedSuccessfully(false);
    }
  };

  const { data: userConsent, isLoading: userConsentIsLoading } =
    useCommonMarginlyApi({
      baseUrl,
      onError,
      enabled: Boolean(userAddress),
      endpoint: "consent.existence",
      args: [userAddress],
    });
  const consentsAreExist = userConsent === true;

  const { disconnect } = useDisconnect();

  const isHidden =
    consentsAreSignedSuccessfully ||
    !userAddress ||
    consentsAreExist ||
    userConsentIsLoading ||
    !isLoaded;

  const isSuccessHappenedRef = useRef(false);

  useEffect(() => {
    if (
      (consentsAreSignedSuccessfully || consentsAreExist) &&
      !isSuccessHappenedRef.current &&
      userAddress
    ) {
      isSuccessHappenedRef.current = true;
      onSuccess?.(userAddress);
    }
  }, [consentsAreSignedSuccessfully, consentsAreExist, userAddress]);

  useEffect(() => {
    isSuccessHappenedRef.current = false;
    setConsentsAreSignedSuccessfully(false);
  }, [userAddress]);

  useEffect(() => {
    window.document.body.style.overflow = isHidden ? "" : "hidden";
    return () => {
      window.document.body.style.overflow = "";
    };
  }, [isHidden]);

  if (isHidden) {
    return null;
  }

  return (
    <Modal>
      <ModalLayout onClick={disconnect} />
      <ModalBody className="sm rubber-height">
        <ModalHeading className="padded">
          <div>
            <Header>Confirm details</Header>
            <Subtext>
              Review our policies and sign the message in your wallet.
            </Subtext>
          </div>
        </ModalHeading>

        <ModalOverflow className="padded full-height">
          <Consent>
            I agree with the{" "}
            <a href={TERMS_AND_CONDITIONS_LINK} target="_blank">
              Terms and Conditions
            </a>
            ,{" "}
            <a href={PRIVACY_POLICY_LINK} target="_blank">
              Privacy Policy
            </a>
            , and I state that I am not a person or a company who is a resident
            of, or is located, incorporated or has a registered agent in the
            United States, Canada, or other restricted jurisdiction
          </Consent>
          <Button
            className={cn(Class.FullWidth, "submit-button")}
            lg
            onClick={handleSign}
          >
            {t`Sign Message`}
          </Button>
          <div className="pending-div" />
        </ModalOverflow>
      </ModalBody>
    </Modal>
  );
};
