import React from 'react';

import { Flex, Card, Icon, Text, Link } from '@components';
import { WALLET_CARDS, TWalletCard } from './config';

const WalletCard = ({ name, icon, path }: TWalletCard) => {
  return (
    <Card
      sx={{
        width: '140px',
        height: '140px',
        cursor: 'pointer',
      }}
    >
      <Link href={path}>
        <Icon
          sx={{
            maxHeight: '53px',
            height: '53px',
            width: 'auto',
          }}
          name={icon}
        />
        <Text>{name}</Text>
      </Link>
    </Card>
  );
};

type WalletListProp = { list: TWalletCard[] };
export const WalletList = ({ list }: WalletListProp) => {
  return (
    <Flex>
      {list.map((w, idx) => (
        <WalletCard key={idx} name={w.name} icon={w.icon} path={w.path} />
      ))}
    </Flex>
  );
};

export { WALLET_CARDS };
export default WalletCard;
