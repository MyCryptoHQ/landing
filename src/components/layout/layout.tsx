/**
 * Layout component that queries for data
 * with Gatsby's StaticQuery component.
 * See: https://www.gatsbyjs.org/docs/static-query/
 */

import React from 'react';

import { Flex } from '../';
import Header from './Header';
import Footer from './Footer';

type Props = {
  children: React.ReactNode;
};

const Layout = ({ children }: Props) => {
  return (
    <>
      <Header />
      <Flex sx={{}}>
        <main role="main">{children}</main>
      </Flex>
      <Footer />
    </>
  );
};

export default Layout;
