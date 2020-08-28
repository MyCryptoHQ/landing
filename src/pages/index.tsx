import React, { useEffect } from 'react';
import { useLocation } from '@reach/router';

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
import { useAnalytics } from '@hooks';

const HomePage = () => {
  const location = useLocation();
  const trackPageVisit = useAnalytics({
    trackPageViews: true,
  });

  useEffect(() => {
    trackPageVisit({
      actionName: location.href,
    });
  }, []);
  return (
    <Flex flexDirection="column">
      <SEO />
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
