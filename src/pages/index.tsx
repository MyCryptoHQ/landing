import { useEffect } from 'react';
import { useLocation } from '@reach/router';

import {
  AllInOnePlace,
  Flex,
  SafeAndEasy,
  KeepItSafe,
  BirdsEyeView,
  Testimonial,
  StayUpToDate,
  MakeItYours,
  ConnectYourWallet,
  GetCaughtUp,
  BottomActions,
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
      <AllInOnePlace />
      <SafeAndEasy />
      <BirdsEyeView />
      <KeepItSafe />
      <Testimonial />
      <MakeItYours />
      <StayUpToDate />
      <ConnectYourWallet />
      <Testimonial second />
      <GetCaughtUp />
      <BottomActions />
    </Flex>
  );
};

export default HomePage;
