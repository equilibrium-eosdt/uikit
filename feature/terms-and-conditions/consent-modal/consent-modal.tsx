import Button from "../../../components/button";
import * as Class from "../../../constants/classnames";
import cn from "classnames";
import React, { useEffect, useState } from "react";
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

const TERMS_AND_CONDITIONS_LINK =
  "https://marginly.com/terms-and-conditions.pdf";
const PRIVACY_POLICY_LINK = "https://marginly.com/privacy-policy.pdf";

const CONSENT_MESSAGE =
  "1. I have read and agreed with the Terms and Conditions.\n2. I have read and agreed with the Privacy Policy.\n3. I state that I am not a person or a company who is a resident of, or is located, incorporated or has a registered agent in the United States, Canada, or other restricted jurisdiction.";

export const ConsentModal = ({
  baseUrl,
  onError,
  userAddress,
  useDisconnect,
  useSignMessage,
}: {
  baseUrl: string;
  onError: (err: any) => void;
  userAddress?: `0x${string}`;
  useDisconnect: () => { disconnect: () => void };
  useSignMessage: () => {
    data?: `0x${string}`;
    signMessage: (data: { message: string }) => void;
  };
}) => {
  const { data: signature, signMessage } = useSignMessage();

  const [isLoaded, setIsLoaded] = useState(false);
  useEffect(() => {
    setIsLoaded(true);
  }, []);

  const handleSign = async () => {
    signMessage({ message: CONSENT_MESSAGE });
  };

  const signCheckIsEnabled = Boolean(signature && userAddress);
  const { data, error, isLoading } = useCommonMarginlyApi({
    baseUrl,
    onError,
    enabled: signCheckIsEnabled,
    endpoint: "consent.sign",
    args: [
      userAddress,
      JSON.stringify({
        signatureHash: signature,
      }),
    ],
    allowEmptyResponse: true,
  });
  const consentsAreSignedSuccessfully =
    (signCheckIsEnabled && data && !error) || isLoading;

  const { data: userConsent, isLoading: userConsentIsLoading } =
    useCommonMarginlyApi({
      baseUrl,
      onError,
      enabled: Boolean(userAddress),
      endpoint: "consent.existence",
      args: [userAddress],
    });
  const consentsAreExist = userConsent === true || userConsentIsLoading;

  const { disconnect } = useDisconnect();

  const isHidden =
    !userAddress ||
    consentsAreExist ||
    consentsAreSignedSuccessfully ||
    !isLoaded;

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
            I have read and agreed with the{" "}
            <a href={TERMS_AND_CONDITIONS_LINK} target="_blank">
              Terms and Conditions
            </a>
          </Consent>
          <Consent>
            I have read and agreed with the{" "}
            <a href={PRIVACY_POLICY_LINK} target="_blank">
              Privacy Policy
            </a>
          </Consent>
          <Consent>
            I state that I am not a person or a company who is a resident of, or
            is located, incorporated or has a registered agent in the United
            States, Canada, or other restricted jurisdiction
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
