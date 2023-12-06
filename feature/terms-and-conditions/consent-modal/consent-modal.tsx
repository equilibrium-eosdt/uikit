import Button from "../../../components/button";
import Toggle from "../../../components/toggle/toggle";
import * as Class from "../../../constants/classnames";
import cn from "classnames";
import React, { useCallback, useEffect, useState } from "react";
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
  const [consents, setConsents] = useState([true, true, true]);
  const { data: signature, signMessage } = useSignMessage();

  const handleSign = async () => {
    signMessage({ message: CONSENT_MESSAGE });
  };

  const { data, error, isLoading } = useCommonMarginlyApi({
    baseUrl,
    onError,
    enabled: Boolean(signature && userAddress),
    endpoint: "consent.sign",
    args: [
      userAddress,
      JSON.stringify({
        signatureHash: signature,
      }),
    ],
    allowEmptyResponse: true,
  });

  useEffect(() => {
    if (data && !error && !isLoading) {
      setIsConsentModalVisible(false);
    }
  }, [data, error, isLoading]);

  const [isConsentModalVisible, setIsConsentModalVisible] =
    React.useState(false);
  const showConsentModal = () => {
    setIsConsentModalVisible(true);
  };
  const hideConsentModal = () => {
    setIsConsentModalVisible(false);
  };

  const { data: userConsent } = useCommonMarginlyApi({
    baseUrl,
    onError,
    enabled: Boolean(userAddress),
    endpoint: "consent.existence",
    args: [userAddress],
  });

  useEffect(() => {
    if (userAddress && userConsent === false) {
      showConsentModal();
    } else {
      hideConsentModal();
    }
  }, [userAddress, userConsent]);

  const { disconnect } = useDisconnect();
  const handleConsentFail = useCallback(() => {
    setIsConsentModalVisible(false);
    disconnect();
  }, [disconnect]);

  if (!isConsentModalVisible) {
    return null;
  }

  const ConsentPoint = ({
    children,
    index,
  }: {
    children: React.ReactNode;
    index: number;
  }) => (
    <Consent>
      <div>{children}</div>
      <Toggle
        on={consents[index]}
        onClick={() =>
          setConsents(
            consents.map((element, i) => (i === index ? !element : element)),
          )
        }
      />
    </Consent>
  );

  return (
    <Modal>
      <ModalLayout onClick={handleConsentFail} />
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
          <ConsentPoint index={0}>
            I have read and agreed with the{" "}
            <a href={TERMS_AND_CONDITIONS_LINK} target="_blank">
              Terms and Conditions
            </a>
          </ConsentPoint>
          <ConsentPoint index={1}>
            I have read and agreed with the{" "}
            <a href={PRIVACY_POLICY_LINK} target="_blank">
              Privacy Policy
            </a>
          </ConsentPoint>
          <ConsentPoint index={2}>
            I state that I am not a person or a company who is a resident of, or
            is located, incorporated or has a registered agent in the United
            States, Canada, or other restricted jurisdiction
          </ConsentPoint>
          <Button
            className={cn(Class.FullWidth, "submit-button")}
            lg
            disabled={!consents.every((c) => c)}
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
