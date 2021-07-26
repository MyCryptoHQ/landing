import React, { useEffect } from 'react';
import { useLocation } from '@reach/router';

import { Flex } from '@components';
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
      <p>hello</p>
    </Flex>
  );
};

export default HomePage;
