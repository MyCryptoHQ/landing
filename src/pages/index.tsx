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
      <SEO title="Home" />
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
