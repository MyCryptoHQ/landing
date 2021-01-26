import React, {
  ReactNode,
  useState,
  useEffect,
  FormEvent,
  ChangeEvent,
} from 'react';
import CopyToClipboard from 'react-copy-to-clipboard';
import { SUBSCRIBE } from '@config';
import { useSubscribe } from '@hooks';
import {
  Flex,
  Button,
  Icon,
  Text,
  IconName,
  SubInput,
  Link,
} from '@components';

const DonateButton = ({
  icon,
  address,
  onCopy,
  children,
}: {
  icon: IconName;
  children: ReactNode;
  address: string;
  onCopy(): void;
}) => {
  return (
    <CopyToClipboard text={address} onCopy={onCopy}>
      <Button variant="donation" width="auto">
        <Flex flexDirection="row" justifyContent="s">
          <Icon name={icon} height="15px" mr="10px" />
          <Text color="white" fontSize="14px">
            {children}
          </Text>
        </Flex>
      </Button>
    </CopyToClipboard>
  );
};

const SubscribeInput = () => {
  const subscribe = useSubscribe(SUBSCRIBE.LIST_ID, SUBSCRIBE.TAG);
  const [emailAddress, setEmailAddress] = useState<string>('');
  const [isSubscribed, setSubscribed] = useState<boolean>(false);
  const [isError, setError] = useState<boolean>(false);

  const handleSubscribe = (event: FormEvent<HTMLFormElement>) => {
    event.preventDefault();
    setSubscribed(false);
    setError(false);

    subscribe(emailAddress)
      .then(() => setSubscribed(true))
      .catch(() => setError(true));
  };

  const handleChange = (event: ChangeEvent<HTMLInputElement>) => {
    setSubscribed(false);
    setError(false);
    setEmailAddress(event.target.value);
  };
  return (
    <form onSubmit={handleSubscribe} style={{ width: '100%' }}>
      <Flex
        flexDirection="row"
        alignItems="center"
        width="100%"
        justifyContent={{ _: 'center', lg: 'flex-start' }}
      >
        <SubInput placeholder="Email Address" onChange={handleChange} />
        <Button variant="sub">Subscribe</Button>
      </Flex>
      {isSubscribed && (
        <Text variant="footerLink" color="rgb(187, 194, 203)" mt="10px">
          Your email was added to our mailing list!
        </Text>
      )}
      {isError && (
        <Text variant="footerLink" color="rgb(187, 194, 203)" mt="10px">
          Your email could not be added to the mailing list. You may be
          subscribed already.
        </Text>
      )}
    </form>
  );
};

const DonateAndSubscribe = () => {
  const [displayMessage, setDisplayMessage] = useState(false);

  useEffect(() => {
    if (displayMessage) {
      const id = setTimeout(() => {
        setDisplayMessage(false);
      }, 3000);

      return () => clearTimeout(id);
    }
  }, [displayMessage]);

  const handleCopy = () => {
    setDisplayMessage(true);
  };

  return (
    <Flex
      flexDirection="column"
      justifyContent="space-evenly"
      width={{ _: '100%', lg: '20%' }}
      height="100%"
      order={{ _: 2, lg: 4 }}
    >
      <Flex
        flexDirection="column"
        alignItems={{ _: 'center', lg: 'flex-start' }}
      >
        <Text fontWeight="500" color="white">
          Donate
        </Text>
        <Flex
          flexDirection={{ _: 'column', lg: 'row' }}
          alignItems={{ _: 'center', lg: 'flex-start' }}
        >
          <DonateButton
            icon="ether"
            address="0x4bbeEB066eD09B7AEd07bF39EEe0460DFa261520"
            onCopy={handleCopy}
          >
            Ethereum
          </DonateButton>
          <DonateButton
            icon="bitcoin"
            address="32oirLEzZRhi33RCXDF9WHJjEb8RsrSss3"
            onCopy={handleCopy}
          >
            Bitcoin
          </DonateButton>
        </Flex>

        <Flex flexDirection="row" alignItems="baseline" minHeight="20px">
          {displayMessage && (
            <>
              <Text mr="7px" color="#7ad832">
                ✓
              </Text>
              <Text variant="footerLink" color="rgb(187, 194, 203)">
                Address Copied to Clipboard!
              </Text>
            </>
          )}
        </Flex>
      </Flex>
      <Flex
        flexDirection="column"
        width="100%"
        alignItems={{ _: 'center', lg: 'flex-start' }}
        mt={{ _: '30px', lg: 0 }}
      >
        <Text color="white" mb="5px">
          Subscribe to MyCrypto
        </Text>
        <Text variant="footerLink" color="rgb(187, 194, 203)" mb="10px">
          Get updates from MyCrypto straight to your inbox!
        </Text>
        <SubscribeInput />
        <Flex flexDirection="row" alignItems="baseline" flexWrap="wrap">
          <Text
            variant="footerLink"
            fontSize="10px"
            color="rgb(187, 194, 203)"
            mt="10px"
          >
            By submitting your email, you <strong>affirmatively</strong> agree
            to our&nbsp;
          </Text>
          <Link href="/privacy" internal={true} sx={{ textDecoration: 'none' }}>
            <Text variant="link" fontSize="10px" color="primary">
              Privacy Policy
            </Text>
          </Link>
        </Flex>
      </Flex>
    </Flex>
  );
};

export default DonateAndSubscribe;
