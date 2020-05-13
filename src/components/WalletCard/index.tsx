import React from 'react';

import { Flex, Card, Icon, Text, Link } from '@components';
import { WALLET_CARDS, TWalletCard } from './config';

const WalletCard = ({ name, icon, path }: TWalletCard) => {
  return (
    <Card
      sx={{
        width: '8.75rem',
        height: '8.75rem',
      }}
    >
      <Link href={path} height="100%" width="100%">
        <Flex
          flexDirection="column"
          justifyContent="center"
          alignItems="center"
          height="100%"
          width="100%"
        >
          <Icon name={icon} height="60px" pb="0.9rem" />
          <Text variant="base">{name}</Text>
        </Flex>
      </Link>
    </Card>
  );
};

type WalletListProp = { list: TWalletCard[] };
export const WalletList = ({ list }: WalletListProp) => {
  return (
    <Flex justifyContent="space-evenly" width="100%">
      {list.map((w, idx) => (
        <WalletCard key={idx} name={w.name} icon={w.icon} path={w.path} />
      ))}
    </Flex>
  );
};

export { WALLET_CARDS };
export default WalletCard;
