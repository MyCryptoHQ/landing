import React from 'react';

import { Layout } from '@components';
import Theme from './theme';

/**
 * Root component that we provide to Gatsby to wrap all our
 * components in.
 */
export const Root: React.SFC<{ element: React.ReactNode }> = ({ element }) => {
  return (
    <Theme>
      <Layout>{element}</Layout>
    </Theme>
  );
};
