import React from 'react';

import { Layout } from '@components';
import Theme from './theme';

/**
 * Root component that we provide to Gatsby to wrap all our
 * components in.
 */
const Root: React.FunctionComponent = ({ children }) => {
  return (
    <Theme>
      <Layout>{children}</Layout>
    </Theme>
  );
};

export default Root;
