import React from 'react';

import {
  SEO,
  Flex,
  WalletList,
  Testimonials,
  GetStarted,
  Features,
  DownloadApp,
  KeepAssetsSafe,
  PeaceOfMind,
  BottomAction,
} from '@components';

const HomePage = () => {
  return (
    <Flex flexDirection="column">
      <SEO
        title="MyCrypto - Ethereum Wallet Manager"
        description="Securely manage ALL of your crypto accounts with MyCrypto. Swap, send, and buy crypto with your favorite wallets like Ledger, Metamask, and Trezor."
      />
      <GetStarted />
      <WalletList />
      <Features />
      <DownloadApp />
      <KeepAssetsSafe />
      <PeaceOfMind />
      <Testimonials />
      {/* Bottom Action */}
      <BottomAction />
    </Flex>
  );
};

export default HomePage;
