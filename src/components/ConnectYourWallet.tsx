import { useState, useEffect, useMemo } from 'react';

import Fuse from 'fuse.js';
import styled from 'styled-components';

import {
  Section,
  Heading,
  Box,
  Icon,
  Flex,
  WalletButton,
  Text,
} from '@components';
import { WALLETS } from '@config';
import { IWallet } from '@types';

const LENGTH = 11;

const SInput = styled.input`
  border: none;
  width: 250px;
  height: 50px;
  font-size: 16px;
  padding-left: 60px;
  padding-right: 15px;
  &:placeholder {
    color: #b5bfc7;
  }
  &:focus-visible {
    outline: none;
  }
`;

export const ConnectYourWallet = () => {
  const [query, setQuery] = useState('');
  const [result, setResult] = useState<IWallet[]>(WALLETS);
  const [length, setLength] = useState(LENGTH);

  const wallets = useMemo(
    () => new Fuse(WALLETS, { keys: ['name'] }),
    [WALLETS]
  );

  useEffect(() => {
    query.length > 2
      ? setResult(
          wallets
            .search(query)
            .reduce((acc, result) => [...acc, result.item], [] as IWallet[])
        )
      : setResult(WALLETS);
  }, [query]);

  return (
    <Section
      type="landing"
      bg="background_grey"
      py="80px"
      alignItems="center"
      id="wallets"
    >
      <Heading>Connect your wallet now</Heading>
      <Heading variant="heading.secondary" mt="25px" mb="30px">
        Manage your ETH safely and securely with one or many of our supported
        wallets.
      </Heading>
      <Box position="relative">
        <SInput
          type="text"
          placeholder="Try “Trezor” or “MetaMask”"
          onChange={(e) => setQuery(e.target.value)}
        />
        <Icon
          name="search"
          sx={{ position: 'absolute', left: '17px', top: '15px' }}
        />
      </Box>
      <Flex
        width="100%"
        flexDirection="row"
        flexWrap="wrap"
        justifyContent="center"
        mt="65px"
        mb="45px"
      >
        {result.slice(0, length - 1).map((wallet) => (
          <WalletButton wallet={wallet} />
        ))}
      </Flex>
      <Flex flexDirection="row">
        <Text>Don’t see what you were looking for?</Text>
        <Text
          onClick={() => length < result.length && setLength(length + LENGTH)}
          color="link"
          ml="5px"
          sx={{ cursor: 'pointer' }}
        >
          Load more +
        </Text>
      </Flex>
    </Section>
  );
};
