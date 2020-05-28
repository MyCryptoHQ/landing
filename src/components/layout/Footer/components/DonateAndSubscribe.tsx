import React, { ReactNode, useState, FormEvent, ChangeEvent } from 'react';
import { SUBSCRIBE } from '@config';
import { useSubscribe } from '.';
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
  children,
}: {
  icon: IconName;
  children: ReactNode;
}) => {
  return (
    <Button variant="donation" width="auto">
      <Flex flexDirection="row" justifyContent="s">
        <Icon name={icon} height="15px" mr="10px" />
        <Text color="white" fontSize="14px">
          {children}
        </Text>
      </Flex>
    </Button>
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
          <DonateButton icon="ether">Ethereum</DonateButton>
          <DonateButton icon="bitcoin">Bitcoin</DonateButton>
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
        <Text
          variant="footerLink"
          fontSize="12px"
          color="rgb(187, 194, 203)"
          mt="10px"
        >
          By submitting your email, you <strong>affirmatively</strong> agree to
          our{' '}
          <Link
            href="https://about.mycrypto.com/privacy/"
            sx={{ textDecoration: 'none' }}
          >
            <Text variant="link" fontSize="12px" color="primary">
              Privacy Policy
            </Text>
          </Link>
        </Text>
      </Flex>
    </Flex>
  );
};

export default DonateAndSubscribe;
